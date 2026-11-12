'use client';

import React, { useState } from 'react';
import {
  Database,
  ShieldCheck,
  Zap,
  Radio,
  Lock,
  Layers,
  Code2,
  Copy,
  Check,
  Server,
  CloudLightning,
  Sparkles
} from 'lucide-react';

export const SupabaseArchitecture: React.FC = () => {
  const [activeCodeTab, setActiveCodeTab] = useState<'schema' | 'realtime' | 'rls'>('realtime');
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    schema: `-- Muby_labs Cloud Schema para Inventario y POS
CREATE TABLE inventory_stock (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sku TEXT UNIQUE NOT NULL,
  item_name TEXT NOT NULL,
  stock_quantity INT NOT NULL DEFAULT 0,
  min_alert_threshold INT DEFAULT 10,
  warehouse_id UUID REFERENCES warehouses(id),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Habilitar replicación en tiempo real para cambios instantáneos
ALTER PUBLICATION supabase_realtime ADD TABLE inventory_stock;`,

    realtime: `// React 19 / Next.js Hook para sincronización en tiempo real
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export function useLiveInventory(warehouseId: string) {
  const [stock, setStock] = useState<Record<string, number>>({});

  useEffect(() => {
    // Suscripción WebSocket nativa con Supabase
    const channel = supabase
      .channel('live-stock-channel')
      .on('postgres_changes', { 
        event: 'UPDATE', 
        schema: 'public', 
        table: 'inventory_stock' 
      }, (payload) => {
        // Actualiza el POS o la tienda web instantáneamente
        setStock((prev) => ({ ...prev, [payload.new.sku]: payload.new.stock_quantity }));
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, [warehouseId]);

  return stock;
}`,

    rls: `-- Políticas Row Level Security (RLS) para aislamiento multi-empresa
ALTER TABLE sales_orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Los cajeros solo ven las ventas de su sucursal"
  ON sales_orders
  FOR SELECT
  USING (
    branch_id = (SELECT branch_id FROM staff_profiles WHERE user_id = auth.uid())
  );

CREATE POLICY "Solo administradores pueden anular ventas"
  ON sales_orders
  FOR UPDATE
  USING (
    EXISTS (SELECT 1 FROM staff_profiles WHERE user_id = auth.uid() AND role = 'admin')
  );`
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeCodeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="arquitectura" className="py-24 relative bg-slate-950/70 border-t border-slate-900 overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-semibold text-cyan-300 uppercase tracking-wider mb-4">
            <CloudLightning className="w-3.5 h-3.5 text-cyan-400" />
            Infraestructura Cloud de Próxima Generación
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Arquitectura Cloud &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">
              Supabase Ready
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Diseñamos el frontend y las capas de negocio de tus sistemas de inventario y ventas con integración nativa a PostgreSQL en la nube, asegurando sincronización instantánea y alta fidelidad en los datos.
          </p>
        </div>

        {/* Grid de 2 Columnas: Pilares de Arquitectura + Consola de Código en Vivo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Pilares Clave */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl hover:border-cyan-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Radio className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Suscripciones Realtime</h4>
                  <div className="text-xs text-cyan-300 font-mono">WebSockets &lt;15ms</div>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Cuando una cajera cobra un producto en el POS, el stock de tu inventario central y de tu tienda online se descuenta automáticamente sin recargar la pantalla.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl hover:border-emerald-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Row Level Security (RLS)</h4>
                  <div className="text-xs text-emerald-300 font-mono">Seguridad a nivel de fila</div>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Cada cajero, gerente o sucursal solo accede a los registros autorizados. Seguridad de grado bancario directamente a nivel de base de datos PostgreSQL.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl hover:border-blue-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Consistencia Transaccional (ACID)</h4>
                  <div className="text-xs text-blue-300 font-mono">PostgreSQL puro en la nube</div>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Sin discrepancias entre ventas y existencias físicas. Si ocurre una pérdida de conexión, el sistema reintenta y preserva la integridad contable.
              </p>
            </div>

          </div>

          {/* Consola Interactiva de Código / Integración */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-800 bg-[#070d1d] shadow-2xl overflow-hidden">
              
              {/* Header de la consola */}
              <div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between flex-wrap gap-3 bg-slate-900/70">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-300 font-semibold flex items-center gap-1.5">
                    <Code2 className="w-4 h-4 text-cyan-400" />
                    muby_labs / cloud_integration
                  </span>
                </div>

                {/* Tabs de código */}
                <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
                  <button
                    onClick={() => setActiveCodeTab('realtime')}
                    className={`px-2.5 py-1 text-xs font-mono rounded-md transition-colors ${
                      activeCodeTab === 'realtime'
                        ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    useLiveInventory.ts
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('schema')}
                    className={`px-2.5 py-1 text-xs font-mono rounded-md transition-colors ${
                      activeCodeTab === 'schema'
                        ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    schema.sql
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('rls')}
                    className={`px-2.5 py-1 text-xs font-mono rounded-md transition-colors ${
                      activeCodeTab === 'rls'
                        ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    security_rls.sql
                  </button>
                </div>

                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-xs text-slate-300 transition-colors"
                  title="Copiar código"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              </div>

              {/* Editor de código */}
              <div className="p-5 font-mono text-xs sm:text-sm text-slate-300 overflow-x-auto bg-[#050a17]">
                <pre className="leading-relaxed">
                  <code>{codeSnippets[activeCodeTab]}</code>
                </pre>
              </div>

              {/* Status footer */}
              <div className="px-5 py-3 border-t border-slate-800/80 bg-slate-900/40 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Compatible con Supabase Free & Pro tier
                </span>
                <span className="font-mono text-cyan-400">PostgreSQL 16+ Ready</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

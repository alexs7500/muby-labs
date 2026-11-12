'use client';

import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Sparkles,
  Zap,
  ShieldCheck,
  TrendingUp,
  Database,
  Layers,
  CheckCircle2,
  Cpu,
  RefreshCw,
  ShoppingCart,
  Package,
  Globe
} from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState<'inventory' | 'pos' | 'cloud'>('inventory');
  const [simulatedStock, setSimulatedStock] = useState(148);
  const [lastSaleTotal, setLastSaleTotal] = useState(285.5);
  const [isSyncing, setIsSyncing] = useState(false);

  // Simulación dinámica en vivo de transacciones para demostrar interactividad y reactividad
  useEffect(() => {
    const interval = setInterval(() => {
      setIsSyncing(true);
      setTimeout(() => {
        setSimulatedStock((prev) => (prev > 15 ? prev - 1 : 150));
        setLastSaleTotal((prev) => +(prev + (Math.random() * 45 + 10)).toFixed(2));
        setIsSyncing(false);
      }, 400);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-cyber-grid bg-radial-gradient">
      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Columna Izquierda: Mensaje Principal y CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Badge de innovación */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-medium text-cyan-300 shadow-inner mb-6 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>Agencia de Transformación Digital & Software</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span className="text-slate-400 hidden sm:inline">Stack Moderno</span>
            </div>

            {/* Título Principal Requerido */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              Digitalizamos y escalamos tu negocio con{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
                tecnología a medida
              </span>
            </h1>

            {/* Subtítulo Requerido */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
              Desarrollo de páginas web, control de inventarios y sistemas de ventas diseñados para optimizar tus operaciones.
            </p>

            {/* Botones de Acción Requeridos */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              {/* Botón Sólido / Primario: Cotizar ahora */}
              <button
                onClick={() => onOpenQuoteModal()}
                id="hero-cta-cotizar-ahora"
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 shadow-xl shadow-cyan-500/25 transition-all duration-300 hover:shadow-cyan-400/40 hover:scale-[1.02] active:scale-95"
              >
                <span>Cotizar ahora</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {/* Botón Outline / Secundario: Explorar Servicios */}
              <a
                href="#servicios"
                id="hero-cta-explorar-servicios"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-slate-200 bg-slate-900/70 hover:bg-slate-800/80 border border-slate-700/80 hover:border-cyan-500/40 backdrop-blur-md transition-all duration-300 hover:text-white"
              >
                <span>Explorar Servicios</span>
              </a>
            </div>

            {/* Indicadores de Calidad / Confianza */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 w-full max-w-xl">
              <div>
                <div className="text-2xl font-bold text-white flex items-center gap-1">
                  <span>99.9%</span>
                </div>
                <div className="text-xs text-slate-400">Disponibilidad Cloud</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400 flex items-center gap-1">
                  <span>Real-time</span>
                </div>
                <div className="text-xs text-slate-400">Sincronización Stock</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white flex items-center gap-1">
                  <span>100%</span>
                </div>
                <div className="text-xs text-slate-400">Código a la Medida</div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Mockup Interactivo / Operations Engine Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-cyan-500/40 via-blue-500/20 to-transparent shadow-2xl shadow-cyan-950/40">
              
              {/* Contenedor tipo Terminal / Glassmorphism */}
              <div className="bg-[#0b1329]/90 backdrop-blur-xl rounded-2xl p-5 border border-slate-800/80">
                
                {/* Header de la consola tecnológica */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/90 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-slate-400">
                      muby-core-engine://live
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full border ${
                      isSyncing ? 'bg-amber-950/60 border-amber-500/40 text-amber-300' : 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300'
                    }`}>
                      <RefreshCw className={`w-3 h-3 ${isSyncing ? 'animate-spin' : ''}`} />
                      {isSyncing ? 'Sincronizando' : 'Supabase Live'}
                    </span>
                  </div>
                </div>

                {/* Tabs de interacción del preview */}
                <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-900/90 rounded-lg mb-4 text-xs font-medium">
                  <button
                    onClick={() => setActiveTab('inventory')}
                    className={`py-1.5 px-2 rounded-md transition-all flex items-center justify-center gap-1.5 ${
                      activeTab === 'inventory'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Package className="w-3.5 h-3.5" />
                    <span>Inventario</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('pos')}
                    className={`py-1.5 px-2 rounded-md transition-all flex items-center justify-center gap-1.5 ${
                      activeTab === 'pos'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    <span>Punto de Venta</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('cloud')}
                    className={`py-1.5 px-2 rounded-md transition-all flex items-center justify-center gap-1.5 ${
                      activeTab === 'cloud'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Database className="w-3.5 h-3.5" />
                    <span>Supabase DB</span>
                  </button>
                </div>

                {/* Contenido dinámico según Tab activo */}
                {activeTab === 'inventory' && (
                  <div className="space-y-3 font-sans animate-in fade-in duration-200">
                    <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                          <Package className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">Sensor IoT / Stock Central</div>
                          <div className="text-xs text-slate-400">Almacén Principal #01 • SKU-8849</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-mono font-bold text-cyan-400">{simulatedStock} uds</div>
                        <div className="text-[11px] text-emerald-400 flex items-center justify-end gap-1">
                          <CheckCircle2 className="w-3 h-3" /> Óptimo
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800 text-xs text-slate-300 space-y-1.5">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Evento de Stock:</span>
                        <span className="text-cyan-300 font-mono">Salida por Despacho POS</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Alerta de Quiebre:</span>
                        <span className="text-emerald-400 font-mono">Protegido (&gt; 15 uds)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Canal de actualización:</span>
                        <span className="text-slate-300 font-mono">supabase.channel(&apos;inventory&apos;)</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'pos' && (
                  <div className="space-y-3 font-sans animate-in fade-in duration-200">
                    <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                          <ShoppingCart className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">Caja Rápida POS #02</div>
                          <div className="text-xs text-slate-400">Facturación ágil • Ticket #{Math.floor(lastSaleTotal * 10)}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-mono font-bold text-white">${lastSaleTotal}</div>
                        <div className="text-[11px] text-emerald-400">Cobro Autorizado</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800 text-xs text-slate-300 space-y-1.5">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Método de Pago:</span>
                        <span className="text-white font-medium">Tarjeta / Contactless</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Tiempo de Emisión:</span>
                        <span className="text-cyan-400 font-mono">0.32 segundos</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Descuento de Almacén:</span>
                        <span className="text-emerald-400 font-mono">Inmediato (ACID)</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'cloud' && (
                  <div className="space-y-3 font-sans animate-in fade-in duration-200">
                    <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                          <Database className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">PostgreSQL Cloud Engine</div>
                          <div className="text-xs text-slate-400">Supabase Edge Instances</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-mono font-bold text-emerald-400">12 ms</div>
                        <div className="text-[11px] text-slate-400">Latencia Edge</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-950 font-mono text-[11px] text-slate-300 border border-slate-800 space-y-1">
                      <div className="text-cyan-400">// Row Level Security Activo</div>
                      <div className="text-slate-400">CREATE POLICY &ldquo;multi_tenant_pos&rdquo; ON sales</div>
                      <div className="text-slate-400">FOR SELECT USING (auth.uid() = org_id);</div>
                      <div className="text-emerald-400 flex items-center gap-1 pt-1">
                        <CheckCircle2 className="w-3 h-3" /> Sincronización instantánea asegurada
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer de consola */}
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-cyan-400" />
                    <span>Arquitectura React + Next.js + Supabase</span>
                  </div>
                  <span className="text-cyan-400 font-semibold hover:underline cursor-pointer" onClick={() => onOpenQuoteModal()}>
                    Configurar para mi empresa &rarr;
                  </span>
                </div>

              </div>
            </div>

            {/* Floating badge decorativa */}
            <div className="hidden sm:flex absolute -bottom-5 -left-6 items-center gap-3 bg-slate-900/90 border border-cyan-500/30 rounded-xl px-4 py-2.5 backdrop-blur-md shadow-xl">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-semibold text-white">+45% Eficiencia</div>
                <div className="text-[10px] text-slate-400">Optimización de procesos</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

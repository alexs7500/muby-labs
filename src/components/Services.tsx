'use client';

import React, { useState } from 'react';
import {
  Globe,
  Package,
  ShoppingCart,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  BarChart3,
  Shield,
  Layers,
  Smartphone,
  Server,
  SlidersHorizontal
} from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activePreview, setActivePreview] = useState<string | null>(null);

  const services = [
    {
      id: 'web',
      name: 'Páginas Web',
      categoryBadge: 'Presencia & Conversión',
      description: 'Sitios corporativos, landing pages y tiendas online optimizadas para conversión y velocidad.',
      icon: Globe,
      accentGradient: 'from-cyan-500 to-blue-600',
      badgeColor: 'border-cyan-500/30 text-cyan-300 bg-cyan-950/40',
      glowColor: 'group-hover:border-cyan-500/50 group-hover:shadow-cyan-500/10',
      features: [
        'Arquitectura Next.js & React de carga ultrarrápida (< 1s)',
        'Optimización SEO Técnico y Core Web Vitals al 100%',
        'Diseño 100% responsivo adaptable a móviles, tablets y monitores',
        'Integración con pasarelas de pago (Stripe, MercadoPago, etc.)',
        'Gestión de contenidos amigable e intuitiva',
      ],
      techStack: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Vercel / Netlify'],
      capabilitiesPreview: {
        headline: 'Optimización de Máximo Rendimiento',
        metrics: [
          { label: 'Lighthouse Score', value: '99/100' },
          { label: 'Tiempo de Carga', value: '0.6s' },
          { label: 'Tasa de Conversión', value: '+38%' },
        ],
        details: 'Código limpio sin plantillas pesadas, asegurando posicionamiento orgánico en Google y fidelización de usuarios.',
      },
    },
    {
      id: 'inventory',
      name: 'Sistemas de Inventario',
      categoryBadge: 'Control & Logística',
      description: 'Control de stock en tiempo real, gestión de entradas/salidas y organización de almacenes.',
      icon: Package,
      accentGradient: 'from-blue-500 to-indigo-600',
      badgeColor: 'border-blue-500/30 text-blue-300 bg-blue-950/40',
      glowColor: 'group-hover:border-blue-500/50 group-hover:shadow-blue-500/10',
      features: [
        'Sincronización de stock en tiempo real con Supabase Realtime',
        'Registro ágil de entradas, salidas y transferencias entre sedes',
        'Soporte para escaneo de códigos de barras, QR y lectores ópticos',
        'Alertas automáticas de quiebre de stock y niveles de reorden',
        'Kardex valorizado y trazabilidad completa por lote y fecha',
      ],
      techStack: ['Supabase DB', 'PostgreSQL', 'WebSockets', 'Next.js App', 'Cloud Edge'],
      capabilitiesPreview: {
        headline: 'Arquitectura Multi-Almacén en la Nube',
        metrics: [
          { label: 'Latencia Sync', value: '< 20ms' },
          { label: 'Precisión de Stock', value: '99.9%' },
          { label: 'Ahorro Tiempo', value: '-65%' },
        ],
        details: 'Desarrollado para conectarse con la nube de Supabase, garantizando que cada venta actualice el stock al milisegundo en todas las pantallas.',
      },
    },
    {
      id: 'pos',
      name: 'Sistemas de Ventas (POS)',
      categoryBadge: 'Ventas & Facturación',
      description: 'Puntos de venta rápidos, facturación ágil y reportes de ingresos detallados.',
      icon: ShoppingCart,
      accentGradient: 'from-teal-400 to-cyan-600',
      badgeColor: 'border-teal-500/30 text-teal-300 bg-teal-950/40',
      glowColor: 'group-hover:border-teal-500/50 group-hover:shadow-teal-500/10',
      features: [
        'Interfaz táctil ultrarrápida diseñada para cobros en mostrador',
        'Facturación ágil y emisión de tickets térmicos al instante',
        'Arqueos de caja, cortes diarios y múltiples métodos de cobro',
        'Reportes gráficos de ingresos, productos estrella y márgenes',
        'Control estricto de roles de usuario (Cajeros, Supervisores, Admin)',
      ],
      techStack: ['React', 'Supabase Auth', 'Row Level Security', 'Reportes PDF', 'Webhooks'],
      capabilitiesPreview: {
        headline: 'Velocidad en Mostrador sin Interrupciones',
        metrics: [
          { label: 'Tiempo Cobro', value: '3.2 seg' },
          { label: 'Reportes en Vivo', value: '100% Real' },
          { label: 'Disponibilidad', value: '24/7' },
        ],
        details: 'Protegido por políticas de seguridad Row Level Security (RLS) en Supabase para blindar tus datos financieros y acelerar la atención a clientes.',
      },
    },
  ];

  return (
    <section id="servicios" className="py-24 relative bg-[#030712] border-t border-slate-900">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-semibold text-cyan-300 uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Nuestros Servicios Especializados
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Soluciones de software diseñadas para el{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              crecimiento real
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Creamos herramientas digitales intuitivas, veloces y escalables. Cada línea de código está pensada para automatizar tus tareas y aumentar tus ingresos.
          </p>
        </div>

        {/* Grid de 3 columnas interactivo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            const isPreviewOpen = activePreview === service.id;

            return (
              <div
                key={service.id}
                className={`group relative flex flex-col justify-between rounded-2xl bg-slate-900/60 border border-slate-800/90 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${service.glowColor}`}
              >
                {/* Glow decorativo de tarjeta */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />

                <div>
                  {/* Top bar de tarjeta: Icono y Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-tr ${service.accentGradient} text-white shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border ${service.badgeColor}`}>
                      {service.categoryBadge}
                    </span>
                  </div>

                  {/* Título y Descripción Requeridos */}
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Lista de Características */}
                  <div className="space-y-2.5 mb-6">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Funcionalidades Clave:
                    </div>
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Badges de Stack Tecnológico */}
                  <div className="pt-4 border-t border-slate-800/80 mb-6">
                    <div className="text-[11px] font-mono text-slate-400 mb-2">
                      Stack & Cloud Integration:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {service.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/90 text-slate-300 border border-slate-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Drawer de Vista Previa de Capacidades */}
                  {isPreviewOpen && (
                    <div className="mb-6 p-3.5 rounded-xl bg-[#070e20] border border-cyan-500/30 animate-in fade-in zoom-in-95 duration-200">
                      <div className="text-xs font-bold text-cyan-300 mb-2">
                        {service.capabilitiesPreview.headline}
                      </div>
                      <div className="grid grid-cols-3 gap-2 mb-2 text-center">
                        {service.capabilitiesPreview.metrics.map((m, i) => (
                          <div key={i} className="p-1.5 rounded bg-slate-900 border border-slate-800">
                            <div className="text-xs font-bold text-white font-mono">{m.value}</div>
                            <div className="text-[10px] text-slate-400">{m.label}</div>
                          </div>
                        ))}
                      </div>
                      <p className="text-[11px] text-slate-300 leading-normal">
                        {service.capabilitiesPreview.details}
                      </p>
                    </div>
                  )}
                </div>

                {/* Acciones de la tarjeta */}
                <div className="flex flex-col gap-2 pt-2">
                  <button
                    onClick={() => setActivePreview(isPreviewOpen ? null : service.id)}
                    className="text-xs font-semibold text-slate-400 hover:text-cyan-400 flex items-center justify-center gap-1.5 py-1.5 transition-colors"
                  >
                    <SlidersHorizontal className="w-3.5 h-3.5" />
                    <span>{isPreviewOpen ? 'Ocultar Métricas' : 'Ver Métricas de Rendimiento'}</span>
                  </button>

                  {service.id === 'web' && (
                    <a
                      href="/servicios/diseno-web"
                      className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold text-cyan-300 bg-cyan-950/70 border border-cyan-500/40 hover:bg-cyan-900/80 transition-all shadow-sm"
                    >
                      <span>Ver Planes y Metodología de Diseño Web</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <button
                    onClick={() => onSelectService(service.name)}
                    id={`servicio-cotizar-${service.id}`}
                    className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-slate-800 hover:bg-gradient-to-r ${service.accentGradient} border border-slate-700 hover:border-transparent transition-all duration-300 shadow-sm active:scale-98`}
                  >
                    <span>Cotizar {service.name}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Banner Inferior de Integración */}
        <div className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-slate-900/90 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">¿Requieres un ecosistema unificado?</h4>
              <p className="text-sm text-slate-300">
                Podemos conectar tu Página Web, tu Sistema de Inventario y tus Puntos de Venta (POS) en una única base de datos centralizada con Supabase.
              </p>
            </div>
          </div>
          <button
            onClick={() => onSelectService('Suite Integral (Web + Inventario + POS)')}
            className="shrink-0 px-6 py-2.5 rounded-xl text-sm font-semibold text-cyan-300 hover:text-white bg-cyan-950/60 hover:bg-cyan-900/80 border border-cyan-500/40 transition-all duration-200"
          >
            Cotizar Suite Completa &rarr;
          </button>
        </div>

      </div>
    </section>
  );
};

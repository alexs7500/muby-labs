'use client';

import React from 'react';
import {
  Palette,
  TrendingUp,
  Headphones,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  Server
} from 'lucide-react';

interface WhyChooseUsProps {
  onOpenQuoteModal: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenQuoteModal }) => {
  const reasons = [
    {
      id: 'custom-design',
      title: 'Diseño Personalizado',
      subtitle: 'Identidad única y ergonomía digital',
      description:
        'No creemos en plantillas prediseñadas ni soluciones genéricas. Cada interfaz de usuario (UI) y flujo de interacción (UX) se construye desde cero, adaptándose de forma milimétrica al modelo operativo de tu empresa y a la psicología de tus clientes.',
      icon: Palette,
      color: 'from-cyan-500 to-blue-600',
      badge: '100% Artesanal y Estratégico',
      points: [
        'Arquitectura de información adaptada a tus flujos internos',
        'Identidad visual moderna, consistente y con alto impacto',
        'Flujos de usuario optimizados para reducir errores y clics innecesarios',
      ],
      stat: '100%',
      statDesc: 'Código a la Medida',
    },
    {
      id: 'scalability',
      title: 'Escalabilidad de la Arquitectura',
      subtitle: 'Tecnología robusta que crece contigo',
      description:
        'Desarrollamos sobre la vanguardia de la industria: Next.js, React y bases de datos en la nube como Supabase / PostgreSQL. Ya sea que proceses 50 ventas al día o más de 100,000 operaciones mensuales, el sistema responderá con la misma velocidad y estabilidad.',
      icon: TrendingUp,
      color: 'from-blue-500 to-indigo-600',
      badge: 'Alta Concurrencia',
      points: [
        'Despliegue distribuido en CDN global con latencia mínima',
        'Bases de datos desacopladas preparadas para millones de registros',
        'Consumo eficiente de memoria y CPU para costos de infraestructura controlados',
      ],
      stat: '99.98%',
      statDesc: 'Disponibilidad Cloud',
    },
    {
      id: 'support',
      title: 'Soporte Técnico Continuo',
      subtitle: 'Acompañamiento experto y proactivo',
      description:
        'Nuestro compromiso no termina el día de la entrega. Ofrecemos mantenimiento preventivo, monitoreo de salud 24/7, respaldos automáticos en la nube y evolución continua de tus aplicaciones para que tu negocio nunca se detenga.',
      icon: Headphones,
      color: 'from-emerald-400 to-cyan-500',
      badge: 'Atención Prioritaria',
      points: [
        'Monitoreo continuo de errores y tiempos de respuesta',
        'Copias de seguridad automáticas cifradas en la nube',
        'Canal directo de comunicación para mejoras y nuevas funcionalidades',
      ],
      stat: '24/7',
      statDesc: 'Monitoreo Proactivo',
    },
  ];

  return (
    <section id="beneficios" className="py-24 relative bg-[#030712] border-t border-slate-900">
      {/* Decorative gradient */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-semibold text-cyan-300 uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Por qué elegir Muby_labs
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Construimos software pensado para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
              liderar tu sector
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Combinamos visión de negocios, diseño refinado e ingeniería de software de clase mundial para garantizar resultados tangibles en cada entrega.
          </p>
        </div>

        {/* Los 3 Puntos Clave Requeridos en formato Card Premium */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="relative flex flex-col justify-between rounded-2xl bg-slate-900/50 border border-slate-800/90 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-950/30 group"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3.5 rounded-xl bg-gradient-to-tr ${item.color} text-white shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-mono font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {item.stat}
                      </div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider">
                        {item.statDesc}
                      </div>
                    </div>
                  </div>

                  {/* Título & Subtítulo */}
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-medium text-cyan-400/90 mb-4 font-mono">
                    {item.subtitle}
                  </div>

                  {/* Descripción */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Bullet Points */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-800/80 mb-6">
                    {item.points.map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer de tarjeta */}
                <div className="pt-2">
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform">
                    <span>Estándar Muby_labs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Comparativa: Desarrollo Tradicional vs. Muby_labs */}
        <div className="mt-16 p-8 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-md">
          <h4 className="text-xl font-bold text-white mb-6 text-center">
            Diferencia entre el desarrollo genérico y el enfoque Muby_labs
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Desarrollo tradicional */}
            <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <div className="text-sm font-bold text-rose-400 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                Software Convencional & Plantillas
              </div>
              <ul className="text-xs text-slate-400 space-y-2.5">
                <li>• Cargas lentas por exceso de plugins y código innecesario.</li>
                <li>• Inventarios y ventas desconectados que causan descuadres.</li>
                <li>• Bases de datos locales vulnerables a fallas de hardware.</li>
                <li>• Soporte ausente una vez liquidado el pago del proyecto.</li>
              </ul>
            </div>

            {/* Enfoque Muby_labs */}
            <div className="p-5 rounded-xl bg-cyan-950/20 border border-cyan-500/30">
              <div className="text-sm font-bold text-cyan-300 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                Ingeniería Muby_labs
              </div>
              <ul className="text-xs text-slate-200 space-y-2.5">
                <li>• Next.js + React 19 optimizado para tiempos de respuesta menores a 1 segundo.</li>
                <li>• Sincronización en tiempo real con Supabase (inventario y ventas 100% coordinados).</li>
                <li>• Nube escalable con respaldos continuos y seguridad Row Level Security (RLS).</li>
                <li>• Acompañamiento activo y evolución tecnológica continua de tus sistemas.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

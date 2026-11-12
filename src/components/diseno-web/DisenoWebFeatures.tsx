'use client';

import React from 'react';
import {
  Palette,
  Smartphone,
  Search,
  Share2,
  BarChart,
  Server,
  Wrench,
  GraduationCap,
  Sparkles,
  Check
} from 'lucide-react';

export const DisenoWebFeatures: React.FC = () => {
  const deliverables = [
    {
      title: 'Diseño profesional y a medida',
      description:
        'Nada de plantillas pesadas y genéricas. Diseñamos la interfaz adaptada 100% a la paleta de colores, logotipo y prestigio de tu empresa.',
      icon: Palette,
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Mobile First y 100% Responsive',
      description:
        'El 85% de las visitas en Perú provienen de teléfonos inteligentes. Tu web se verá ultra-nítida y fluida en cualquier celular, tablet o monitor.',
      icon: Smartphone,
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      title: 'Aparece en Google (SEO & GEO)',
      description:
        'Estructura técnica optimizada con Schema.org, metadatos, sitemap XML, indexación inmediata en Search Console y vinculación a Google Maps.',
      icon: Search,
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'Integraciones estratégicas',
      description:
        'Botón flotante directo de WhatsApp, formularios inteligentes conectados a tu correo, píxeles de Meta, Google Ads y pasarelas de pago locales.',
      icon: Share2,
      gradient: 'from-teal-500 to-cyan-500',
    },
    {
      title: 'Lista para Marketing Digital',
      description:
        'Preparada para campañas de Google Ads o redes sociales, con seguimiento de conversiones para que sepas exactamente qué anuncios generan ventas.',
      icon: BarChart,
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Dominio .com y Hosting Cloud incluidos',
      description:
        'Incluye el registro del dominio .com por el 1er año, servidor en la nube de alta disponibilidad, certificado de seguridad SSL y correos corporativos.',
      icon: Server,
      gradient: 'from-violet-500 to-fuchsia-500',
    },
    {
      title: '1 mes de mantenimiento gratis',
      description:
        'Tranquilidad total post-lanzamiento: monitoreo 24/7, copias de seguridad de respaldo continuas y soporte técnico prioritario para resolver dudas.',
      icon: Wrench,
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      title: 'Capacitación y Autonomía',
      description:
        'Panel administrativo intuitivo para actualizar textos, fotos y productos cuando quieras, junto con una guía paso a paso para tu equipo.',
      icon: GraduationCap,
      gradient: 'from-rose-500 to-pink-500',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#030712] relative overflow-hidden" id="que-incluye">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Paquete Todo Incluido Llave en Mano</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Lo que obtienes con tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">Página Web</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Un paquete completo y robusto para que tu negocio empiece a vender y generar contactos 
            desde el primer día de publicación, sin costos ocultos ni sorpresas.
          </p>
        </div>

        {/* Grid de 8 Entregables Clave */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliverables.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-900/80 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-emerald-500/5 flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${item.gradient} p-0.5 mb-4 shadow-sm`}
                  >
                    <div className="w-full h-full bg-[#070d1d] rounded-[10px] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400">
                  <Check className="w-3.5 h-3.5" />
                  <span>Garantizado por contrato</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


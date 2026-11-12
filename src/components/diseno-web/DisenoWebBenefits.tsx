'use client';

import React from 'react';
import {
  TrendingUp,
  Award,
  Target,
  ShieldCheck,
  ArrowRight,
  CheckCircle,
  Building,
  Users,
  Compass
} from 'lucide-react';

export const DisenoWebBenefits: React.FC = () => {
  const benefits = [
    {
      title: 'Incrementa tus ventas y clientes',
      description:
        'Diseñamos embudos visuales y botones de contacto estratégicos (WhatsApp y formularios en 1 clic) para que cada visita se convierta en una solicitud formal de cotización.',
      icon: TrendingUp,
      accentColor: 'from-emerald-500 to-teal-600',
      badge: 'Conversión Directa',
    },
    {
      title: 'Obtén una ventaja competitiva',
      description:
        'El 80% de las páginas en Perú son lentas o usan plantillas genéricas. Con arquitectura Next.js, tu web cargará en un parpadeo, cautivando al cliente antes que tu competencia.',
      icon: Award,
      accentColor: 'from-cyan-500 to-blue-600',
      badge: 'Rendimiento 99+',
    },
    {
      title: 'Llega a los clientes adecuados (SEO + GEO)',
      description:
        'Optimizamos tu web para búsquedas comerciales en Lima y provincias. Aparece cuando busquen tus productos o servicios en Google con intención real de compra.',
      icon: Target,
      accentColor: 'from-blue-500 to-indigo-600',
      badge: 'Google Ready',
    },
    {
      title: 'Haz que tu marca sea reconocida y confiable',
      description:
        'Una presencia digital sólida y moderna genera confianza inmediata, facilitando cerrar contratos corporativos, licitaciones y ventas de mayor ticket promedio.',
      icon: ShieldCheck,
      accentColor: 'from-indigo-500 to-purple-600',
      badge: 'Autoridad B2B',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#040816] border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de la Sección */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>Propuesta de Valor Comercial</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Diferénciate de tu Competencia con una <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Página Web Profesional</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            <strong>Muby Labs</strong> es un laboratorio de tecnología y diseño web en Lima, Perú. 
            Creamos páginas web corporativas, tiendas virtuales y landing pages diseñadas 
            específicamente para generar confianza y multiplicar las cotizaciones de tu negocio.
          </p>
        </div>

        {/* Grid de 4 Pilares de Beneficio */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl p-6 bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/10 flex flex-col justify-between"
              >
                <div>
                  {/* Icono con gradiente */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${benefit.accentColor} p-0.5 shadow-md`}
                    >
                      <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700">
                      {benefit.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center gap-1.5 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Incluido en todos nuestros planes</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner de estadísticas de impacto */}
        <div className="mt-12 rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-slate-900/90 to-blue-950/40 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white">
              ¿Sabías que el 75% de los clientes juzga la credibilidad de tu empresa por su página web?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              No dejes que una web desactualizada o lenta le regale clientes a tus competidores.
            </p>
          </div>

          <a
            href="#cotizar"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all shrink-0 hover:scale-105"
          >
            <span>Evaluar Mi Web Gratis</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};


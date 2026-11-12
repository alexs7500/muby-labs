'use client';

import React from 'react';
import {
  FileText,
  Layout,
  Code2,
  Rocket,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export const DisenoWebProcess: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Diagnóstico y Cotización Gratis',
      description:
        'Analizamos tu rubro, competencia y público objetivo en Lima o provincias. En menos de 24 horas te enviamos una propuesta clara con el plan exacto para tu empresa.',
      icon: FileText,
      accent: 'from-cyan-500 to-blue-500',
    },
    {
      number: '02',
      title: 'Estructura y Arquitectura UI/UX',
      description:
        'Diseñamos el mapa del sitio, la jerarquía de contenidos y los prototipos de pantalla para que apruebes el estilo visual y los puntos de contacto antes de programar.',
      icon: Layout,
      accent: 'from-blue-500 to-indigo-500',
    },
    {
      number: '03',
      title: 'Desarrollo, SEO y Programación',
      description:
        'Construimos tu web en Next.js y React con código limpio, optimización mobile first, carga ultrarrápida, integración de WhatsApp y configuración SEO local.',
      icon: Code2,
      accent: 'from-emerald-500 to-teal-500',
    },
    {
      number: '04',
      title: 'Lanzamiento, Google y Capacitación',
      description:
        'Publicamos tu página web en tu dominio propio .com con SSL, la indexamos en Google Search Console y te capacitamos para que administres tus contenidos con facilidad.',
      icon: Rocket,
      accent: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#040816] relative border-t border-slate-800/80" id="metodologia">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Metodología Ágil y Transparente</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Cómo Trabajamos tu Página Web, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Paso a Paso</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Sin tecnicismos complicados ni demoras innecesarias. Un flujo de trabajo probado 
            que te mantiene informado en cada etapa hasta la entrega final de tu proyecto.
          </p>
        </div>

        {/* Grid de 4 Pasos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative rounded-2xl p-6 bg-slate-900/50 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  {/* Número de paso con gradiente */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-slate-800 group-hover:text-cyan-500/40 transition-colors font-mono">
                      {step.number}
                    </span>
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${step.accent} p-0.5 shadow-sm`}
                    >
                      <div className="w-full h-full bg-[#070d1d] rounded-[9px] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                  <span>Fase {step.number} de 04</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


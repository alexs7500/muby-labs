'use client';

import React from 'react';
import { Search, Code2, Rocket, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export const DisenoWebSteps: React.FC = () => {
  const steps = [
    {
      stepNumber: '01',
      title: 'Analizamos',
      description: 'El giro de tu empresa y público objetivo para definir sus objetivos comerciales y estructurar la web ideal.',
      icon: Search,
      badge: 'Estrategia & UX',
      imageUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80',
      keyPoint: 'Arquitectura y análisis de mercado',
    },
    {
      stepNumber: '02',
      title: 'Desarrollamos',
      description: 'Diseño web intuitivo y diseño de sistemas a medida para tu negocio, 100% adaptables a celulares y computadoras.',
      icon: Code2,
      badge: 'Desarrollo Ágil',
      imageUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop&q=80',
      keyPoint: 'Diseño responsivo y código a medida',
    },
    {
      stepNumber: '03',
      title: 'Optimizamos',
      description: 'Tus ideas con código ultrarrápido en Next.js, SEO para Google y lo llevamos a cabo con total éxito.',
      icon: Rocket,
      badge: 'Lanzamiento & Google',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
      keyPoint: 'Velocidad < 1s y posicionamiento SEO',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white text-[#1a1a1a] border-b border-slate-100" id="metodologia">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b004e]/5 border border-[#1b004e]/10 text-[#1b004e] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#ffd30a] fill-[#ffd30a]" />
            <span>Metodología Comprobada</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1b004e] tracking-tight">
            Cómo Creamos tu Página Web de Alto Rendimiento
          </h2>

          <p className="mt-3 text-base sm:text-lg text-[#555555] max-w-2xl mx-auto leading-relaxed">
            Un proceso paso a paso, ágil y transparente diseñado para obtener resultados comerciales reales para tu empresa.
          </p>
        </div>

        {/* Grid de 3 Pasos con Imágenes según la Descripción */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group rounded-2xl bg-[#f9f9fb] border border-slate-200/90 hover:border-[#1b004e]/40 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Imagen según la descripción de la etapa */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={item.imageUrl}
                      alt={`${item.title} - ${item.badge}`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Overlay sutil */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Número del paso flotante */}
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#1b004e] text-[#ffd30a] font-mono font-black text-xs shadow-lg flex items-center gap-1.5">
                      <span className="text-[10px] text-white/70 uppercase">Paso</span>
                      <span>{item.stepNumber}</span>
                    </div>

                    {/* Badge de la etapa */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-sm text-[#1b004e] font-bold text-xs shadow-sm flex items-center gap-1.5">
                      <Icon className="w-3.5 h-3.5 text-[#1b004e]" />
                      <span>{item.badge}</span>
                    </div>

                    {/* Punto clave inferior sobre la imagen */}
                    <div className="absolute bottom-2.5 left-3 right-3 text-xs font-semibold text-[#ffd30a] flex items-center gap-1.5 truncate">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ffd30a] shrink-0" />
                      <span className="truncate">{item.keyPoint}</span>
                    </div>
                  </div>

                  {/* Contenido descriptivo */}
                  <div className="p-6 sm:p-7 space-y-3">
                    <h3 className="text-xl sm:text-2xl font-black text-[#1b004e] group-hover:text-[#7928ca] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#555555] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Pie de tarjeta con indicador de avance */}
                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-[#1b004e]">
                    <span>Fase {item.stepNumber} de 03</span>
                    <span className="flex items-center gap-1 text-[#1b004e] group-hover:text-[#7928ca] group-hover:translate-x-1 transition-all">
                      <span>Conocer más</span>
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

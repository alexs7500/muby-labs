'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';

export const DisenoWebReviews: React.FC = () => {
  const reviews = [
    {
      name: 'David Alvarado de la Cruz',
      company: 'Importaciones Alva',
      comment: 'Excelente servicio, mi web quedó super. Muy profesional la atención y cumplieron los plazos acordados.',
      city: 'Lima, Perú',
    },
    {
      name: 'Mayra Ugarte García',
      company: 'Ugarte & Asociados',
      comment: 'Excelente atención y servicio. Me gustó cómo quedó mi página web, carga rapidísimo en celulares.',
      city: 'Miraflores, Lima',
    },
    {
      name: 'Carlos Mendoza V.',
      company: 'Logística Andina Express',
      comment: 'Muy buena atención, su trabajo muy profesional. Siempre están en contacto coordinando todos los detalles. ¡Los recomiendo al 100%!',
      city: 'Callao, Lima',
    },
    {
      name: 'Renzo Baldeón',
      company: 'Tech Supplies SAC',
      comment: 'Muy buena atención, súper original — aceptan ideas y propuestas. Superó mis expectativas a un precio justo y accesible.',
      city: 'Santiago de Surco',
    },
    {
      name: 'Patricia Huamán',
      company: 'Consultoría Contable PH',
      comment: 'Gracias por realizar mi página web, quedé 100% satisfecha con el diseño corporativo y el soporte técnico brindado.',
      city: 'San Isidro, Lima',
    },
    {
      name: 'Jorge Luis Sánchez',
      company: 'Constructora Sánchez',
      comment: 'Recomiendo esta empresa, me brindó un trabajo de mucha calidad y en el tiempo acordado. He quedado muy satisfecho.',
      city: 'San Borja, Lima',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#f9f9fb] text-[#1a1a1a] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-[#1b004e] text-xs font-bold uppercase tracking-wider mb-2">
            <div className="flex text-[#ffd30a]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span>Reseñas de Google</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1b004e]">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#555555]">
            Opiniones de empresarios y emprendedores que confían en nosotros en Lima y todo el Perú.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_16px_rgba(27,0,78,0.08)] hover:shadow-[0_8px_24px_rgba(27,0,78,0.14)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#ffd30a]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-300" />
                </div>
                <p className="text-sm text-[#1a1a1a] italic leading-relaxed mb-6 font-normal">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#1b004e]">{rev.name}</h4>
                  <span className="text-xs text-[#555555] block">{rev.company}</span>
                </div>
                <span className="text-xs text-[#1b004e] font-semibold">
                  {rev.city}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

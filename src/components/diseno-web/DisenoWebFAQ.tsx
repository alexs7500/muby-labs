'use client';

import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

export const DisenoWebFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: '¿Cuánto cuesta una página web en Lima?',
      answer:
        'Nuestros planes inician desde una Landing Page básica hasta una Tienda Virtual completa. El precio varía según el tipo de proyecto: número de secciones, funcionalidades requeridas y diseño personalizado. Escríbenos por WhatsApp o llena el formulario y te enviamos una cotización sin compromiso en menos de 24 horas.',
    },
    {
      question: '¿Cuánto demora la entrega?',
      answer:
        'El tiempo de entrega depende del plan elegido. Una Landing Page puede estar lista en 2 a 3 días hábiles, mientras que un sitio corporativo o tienda virtual toma entre 6 y 7 días hábiles. Trabajamos con plazos definidos y te mantenemos informado en cada etapa.',
    },
    {
      question: '¿Incluye hosting, dominio y certificado SSL?',
      answer:
        'Sí. Todos nuestros planes incluyen hosting SSD de alta velocidad y dominio .com por el 1er año. También incluimos certificado de seguridad SSL (HTTPS) de por vida y correos corporativos, para que tu negocio esté completamente equipado desde el primer día.',
    },
    {
      question: '¿Mi página web saldrá lista para posicionar en Google (SEO y GEO)?',
      answer:
        'Sí. Diseñamos con código limpio, arquitectura de carga rápida y etiquetas optimizadas para motores de búsqueda (SEO) y geolocalización local en Lima y provincias. Esto permite que potenciales clientes encuentren tu negocio al buscar tus servicios.',
    },
    {
      question: '¿Podré editar y administrar mi página web sin depender de nadie?',
      answer:
        'Sí. Te entregamos un panel de administración muy amigable y te brindamos capacitación GRATIS para que puedas cambiar textos, números, fotos y productos de forma sencilla.',
    },
    {
      question: '¿Cómo se realiza el pago?',
      answer:
        'El esquema estándar es 50% de anticipo para iniciar el proyecto y 50% restante contra entrega y tu total conformidad. Emitimos Factura o Boleta con RUC. Aceptamos transferencias bancarias (BCP, BBVA, Interbank), Yape, Plin y tarjetas.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 lg:py-28 bg-white text-[#1a1a1a] border-b border-slate-200" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#1b004e] uppercase tracking-widest block mb-2">
            Preguntas Frecuentes
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1b004e]">
            Preguntas Frecuentes sobre Diseño Web
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#555555]">
            Resolvemos las dudas más frecuentes para iniciar tu proyecto con total tranquilidad.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#1b004e] shadow-md bg-white'
                    : 'border-[#1b004e]/20 hover:border-[#1b004e]/40 bg-white'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-[#1b004e] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#ffd30a] text-[#1b004e]' : 'bg-[#f5f5f5] text-[#1b004e]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-[#555555] leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Banner soporte directo */}
        <div className="mt-12 p-6 rounded-2xl bg-[#f9f9fb] border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-[#1b004e]">
              ¿Tienes otra duda o requieres atención personalizada?
            </h4>
            <p className="text-xs text-[#555555] mt-0.5">
              Estamos en línea para responderte al instante por WhatsApp.
            </p>
          </div>
          <a
            href="https://wa.me/51946249008?text=Hola%20Muby%20Labs,%20tengo%20una%20consulta%20adicional."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg bg-[#25d366] hover:bg-[#20ba5a] text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

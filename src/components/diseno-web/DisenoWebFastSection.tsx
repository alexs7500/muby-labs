'use client';

import React from 'react';
import { Check, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export const DisenoWebFastSection: React.FC = () => {
  const checklist = [
    { title: 'Diseño Web Profesional', desc: 'Dinámico, actual y 100% adaptable a cualquier celular, tablet o monitor.' },
    { title: 'Diseño de Sistemas a Medida para tu Negocio', desc: 'Desarrollo de software comercial, paneles de gestión y sistemas personalizados.' },
    { title: 'Hosting Rápido y Estable', desc: 'Garantizando la operatividad de tu sitio web 24/7 sin caídas.' },
    { title: 'Dominio Personalizado .com', desc: 'Incluido y registrado a nombre de tu empresa por el primer año.' },
    { title: 'Correos Corporativos', desc: 'Cuentas institucionales con tu dominio (ej. ventas@tuempresa.com).' },
    { title: 'Posicionamiento en Google (SEO y GEO)', desc: 'Correcta indexación para que potenciales clientes te encuentren fácilmente.' },
    { title: 'Formularios a la Medida', desc: 'Captura exacta de datos y requerimientos enviados directamente a tu correo y WhatsApp.' },
    { title: 'Botón de WhatsApp Flotante', desc: 'Atención inmediata y cotizaciones en 1 solo clic.' },
    { title: 'Certificado de Seguridad SSL (HTTPS)', desc: 'Candado de seguridad para inspirar confianza y proteger tus datos.' },
    { title: 'Soporte Técnico Humano', desc: 'Acompañamiento post-entrega y capacitación paso a paso para tu equipo.' },
  ];

  const scrollToForm = () => {
    const el = document.getElementById('cotizar');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 lg:py-28 bg-[#1b004e] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Columna Izquierda: Introducción y Call to action */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold text-[#ffd30a] uppercase tracking-widest block">
              Velocidad & Rendimiento
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
              Página Web Veloz para <span className="text-[#ffd30a]">Google</span>
            </h2>

            <p className="text-base text-[#ffffffd1] leading-relaxed">
              Creamos todo lo que tu negocio necesita para destacar: diseño web de alta velocidad y
              diseño de sistemas a medida para tu negocio adaptados a tus objetivos comerciales.
            </p>

            <div className="pt-2">
              <button
                onClick={scrollToForm}
                className="w-full sm:w-auto px-8 py-4 rounded-md font-bold text-[#1b004e] text-base bg-[#ffd30a] hover:bg-[#ffe14d] shadow-lg shadow-amber-400/25 transition-all duration-200 flex items-center justify-center gap-2 uppercase tracking-wide cursor-pointer"
              >
                <span>¡Quiero mi página web!</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#ffffffb3] pt-2">
              <ShieldCheck className="w-4 h-4 text-[#ffd30a]" />
              <span>Garantía de cumplimiento y entrega en el plazo acordado</span>
            </div>
          </div>

          {/* Columna Derecha: Checklist de 10 Beneficios con Checks Amarillos */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#130038] border border-white/10 p-6 sm:p-8 shadow-2xl space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#ffd30a] mb-2">
                Todo lo que incluye tu proyecto:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {checklist.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#ffd30a] text-[#1b004e] flex items-center justify-center shrink-0 mt-0.5 font-black text-xs">
                      ✔
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-[#ffffffbf] mt-0.5 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

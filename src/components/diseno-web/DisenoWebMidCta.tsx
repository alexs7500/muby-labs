'use client';

import React from 'react';
import { MessageCircle, HelpCircle, ArrowRight } from 'lucide-react';

export const DisenoWebMidCta: React.FC = () => {
  return (
    <section className="py-16 bg-[#1b004e] text-white relative">
      <div className="absolute inset-0 bg-[#0b0028]/60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div className="space-y-1.5 max-w-2xl">
            <span className="text-[#ffd30a] text-xs font-bold uppercase tracking-widest block">
              ¿Tienes dudas o requieres asesoría?
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              ¿Tienes dudas o requieres asesoría?
            </h3>
            <p className="text-sm sm:text-base text-[#ffffffd9]">
              Escríbenos por WhatsApp o agenda una reunión para conocer más sobre tu proyecto y brindarte la mejor cotización.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href="https://wa.me/51946249008?text=Hola%20Muby%20Labs,%20requiero%20asesor%C3%ADa%20para%20mi%20p%C3%A1gina%20web."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-md font-bold text-white bg-[#25d366] hover:bg-[#20ba5a] shadow-lg shadow-emerald-950/40 hover:scale-105 transition-all flex items-center justify-center gap-2 text-sm"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Escríbenos por WhatsApp</span>
            </a>

            <a
              href="#cotizar"
              className="px-6 py-3.5 rounded-md font-bold text-[#1b004e] bg-[#ffd30a] hover:bg-[#ffe14d] shadow-lg shadow-amber-400/20 hover:scale-105 transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wide"
            >
              <span>Solicitar Asesoría</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

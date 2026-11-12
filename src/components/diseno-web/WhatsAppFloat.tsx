'use client';

import React from 'react';

interface WhatsAppFloatProps {
  phoneNumber?: string;
  defaultMessage?: string;
  tiktokUrl?: string;
  instagramUrl?: string;
  facebookUrl?: string;
}

export const WhatsAppFloat: React.FC<WhatsAppFloatProps> = ({
  phoneNumber = '51946249008',
  defaultMessage = 'Hola Muby Labs, deseo cotizar una página web para mi negocio.',
  tiktokUrl = 'https://www.tiktok.com/@mubylabs',
  instagramUrl = 'https://www.instagram.com/mubylabs',
  facebookUrl = 'https://www.facebook.com/mubylabs',
}) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <aside
      aria-label="Redes Sociales Flotantes"
      className="fixed bottom-6 right-5 sm:right-6 z-50 flex flex-col items-end gap-3"
    >
      {/* 1. Facebook */}
      <a
        href={facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visitar nuestro Facebook"
        className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#1877F2] text-white shadow-lg shadow-blue-600/30 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 sm:w-6 sm:h-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>

        {/* Tooltip Hover en Desktop */}
        <span className="hidden sm:block absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-[#1b004e] text-white text-xs font-bold tracking-wide whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 shadow-xl border border-white/10">
          Facebook
        </span>
      </a>

      {/* 2. Instagram */}
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visitar nuestro Instagram"
        className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shadow-lg shadow-pink-600/30 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 sm:w-6 sm:h-6 fill-none stroke-current stroke-[2.2]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>

        {/* Tooltip Hover en Desktop */}
        <span className="hidden sm:block absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-[#1b004e] text-white text-xs font-bold tracking-wide whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 shadow-xl border border-white/10">
          Instagram
        </span>
      </a>

      {/* 3. TikTok */}
      <a
        href={tiktokUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visitar nuestro TikTok"
        className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#010101] text-white border border-white/20 shadow-lg shadow-black/40 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 sm:w-6 sm:h-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298 0 .59.046.87.136V9.4a6.33 6.33 0 0 0-.87-.06A6.34 6.34 0 0 0 3.14 15.7a6.34 6.34 0 0 0 10.74 4.54 6.27 6.27 0 0 0 1.93-4.57V8.71a8.21 8.21 0 0 0 4.78 1.53v-3.48a4.85 4.85 0 0 1-1-.07z" />
        </svg>

        {/* Tooltip Hover en Desktop */}
        <span className="hidden sm:block absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-[#1b004e] text-white text-xs font-bold tracking-wide whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 shadow-xl border border-white/10">
          TikTok
        </span>
      </a>

      {/* 4. WhatsApp (Principal: Sólo Logo con Pulso y Badge) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp al 946 249 008"
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25d366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)] hover:bg-[#20ba5a] hover:scale-110 active:scale-95 transition-all duration-300 animate-pulso-wa cursor-pointer"
      >
        {/* Solo Logo SVG de WhatsApp */}
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 sm:w-8 sm:h-8 fill-current shrink-0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.1 1.51 5.829L.057 23.776a.75.75 0 00.923.923l5.947-1.453A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.731 9.731 0 01-4.96-1.356l-.356-.212-3.688.9.917-3.591-.232-.369A9.714 9.714 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
        </svg>

        {/* Badge 1 de Atención Activa */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffd30a] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#ffd30a] text-[#1b004e] text-[9px] font-black items-center justify-center">
            1
          </span>
        </span>

        {/* Tooltip Hover en Desktop */}
        <span className="hidden sm:block absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-[#1b004e] text-white text-xs font-bold tracking-wide whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 shadow-xl border border-white/10">
          WhatsApp: 946 249 008
        </span>
      </a>
    </aside>
  );
};

export const SocialFloat = WhatsAppFloat;

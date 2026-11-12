'use client';

import React from 'react';
import {
  Rocket,
  MessageCircle,
  Star,
  Clock,
  Award,
  Users,
  Globe,
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
  Lock,
  TrendingUp,
  CheckCircle2
} from 'lucide-react';

export const DisenoWebHero: React.FC = () => {
  const scrollToForm = () => {
    const el = document.getElementById('cotizar');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { value: '1800+', label: 'Sitios web entregados', icon: Globe },
    { value: '10+', label: 'Años de experiencia', icon: Award },
    { value: '98%', label: 'Clientes satisfechos', icon: Users },
    { value: '< 2h', label: 'Tiempo de respuesta', icon: Clock },
  ];

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-28 bg-[#1b004e] text-white overflow-hidden">
      {/* Fondo con imagen sutil de agencia y tecnología */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-luminosity pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&auto=format&fit=crop&q=80')`,
        }}
      />

      {/* Gradientes y destellos de fondo modernos */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1b004e]/95 via-[#130038]/90 to-[#0b0028] pointer-events-none" />
      <div className="absolute -top-40 right-1/4 w-96 h-96 bg-[#ffd30a]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow / Pastilla Superior Estilizada */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-[#ffd30a] text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 shadow-lg shadow-black/20 hover:scale-105 transition-transform cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffd30a] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ffd30a]"></span>
          </span>
          <span className="font-extrabold tracking-wide">
            AGENCIA DIGITAL EN LIMA, PERÚ • DESARROLLO WEB & SOFTWARE
          </span>
        </div>

        {/* Titular Principal H1 Impactante */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] font-black text-white max-w-5xl mx-auto leading-[1.14] tracking-tight">
          Diseñamos páginas web rápidas y{' '}
          <span className="text-[#ffd30a] drop-shadow-sm inline-block">
            sistemas para tu negocio
          </span>{' '}
          <span className="inline-block hover:scale-110 transition-transform">🚀</span>
        </h1>

        {/* Subtítulo Claro y Persuasivo */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-normal leading-relaxed">
          Atrae más clientes y optimiza tus operaciones con páginas web profesionales y{' '}
          <strong className="text-[#ffd30a] font-bold">
            sistemas a medida
          </strong>
          , ultra-rápidos, seguros y posicionados en los primeros lugares de Google en Lima y todo el Perú.
        </p>

        {/* Botones de Acción Simétricos y de Alto Contraste */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
          {/* Botón Principal Amarillo con Pulso */}
          <button
            onClick={scrollToForm}
            id="hero-btn-quiero-mi-web"
            className="btn-pulse-yellow w-full sm:w-auto h-14 px-8 rounded-xl font-black text-[#1b004e] text-sm sm:text-base bg-[#ffd30a] hover:bg-[#ffe14d] shadow-[0_10px_30px_rgba(255,211,10,0.35)] transition-all duration-200 flex items-center justify-center gap-2.5 uppercase tracking-wide cursor-pointer hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            <span>¡Quiero mi página web!</span>
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Botón Secundario WhatsApp */}
          <a
            href="https://wa.me/51946249008?text=Hola%20Muby%20Labs,%20deseo%20cotizar%20una%20p%C3%A1gina%20web%20o%20sistema%20a%20medida."
            target="_blank"
            rel="noopener noreferrer"
            id="hero-btn-whatsapp"
            className="w-full sm:w-auto h-14 px-7 rounded-xl font-bold text-white bg-white/10 hover:bg-[#25d366] hover:border-[#25d366] border border-white/25 backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2.5 text-sm sm:text-base cursor-pointer hover:scale-105 active:scale-95 whitespace-nowrap shadow-lg shadow-black/20"
          >
            <MessageCircle className="w-5 h-5 fill-current text-white" />
            <span>Hablar por WhatsApp</span>
          </a>
        </div>

        {/* Reseñas Google y Garantías */}
        <div className="mt-7 inline-flex flex-wrap items-center justify-center gap-3 px-5 py-2.5 rounded-full bg-black/30 backdrop-blur-md border border-white/15 text-xs text-white/90 shadow-lg">
          <div className="flex text-[#ffd30a] gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <span className="font-bold text-white">5.0 / 5.0 en Google</span>
          <span className="text-white/30">•</span>
          <span className="text-[#ffd30a] font-semibold">Hosting & Dominio Incluidos</span>
          <span className="text-white/30 hidden sm:inline">•</span>
          <span className="text-emerald-400 font-semibold hidden sm:inline">⚡ Carga en &lt; 1s</span>
          <span className="text-white/30 hidden md:inline">•</span>
          <span className="text-white/80 font-medium hidden md:inline">Sistemas a Medida</span>
        </div>

        {/* Mockup Visual de Demostración con Badges Flotantes */}
        <div className="mt-12 max-w-4xl mx-auto relative group">
          {/* Ventana de Navegador Mockup */}
          <div className="rounded-2xl border border-white/20 bg-[#130038]/90 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300 group-hover:border-white/40">
            {/* Barra superior de navegador */}
            <div className="px-4 py-3 bg-[#0a0020]/90 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>

              {/* Barra de URL segura */}
              <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/70 max-w-xs w-full justify-center font-mono">
                <Lock className="w-3 h-3 text-emerald-400" />
                <span className="text-emerald-400">https://</span>
                <span className="text-white">tu-empresa.com</span>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[#ffd30a]">
                <span className="hidden sm:inline">99.9% Uptime</span>
              </div>
            </div>

            {/* Contenido Visual del Mockup */}
            <div className="relative aspect-[16/8] sm:aspect-[16/7] overflow-hidden bg-gradient-to-tr from-[#1b004e] via-[#240066] to-[#0a0020] flex items-center justify-center p-6">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80"
                alt="Panel web de alto rendimiento y SEO"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-luminosity"
              />

              {/* Overlay central interactivo */}
              <div className="relative z-10 max-w-xl text-center space-y-2">
                <span className="text-xs font-mono font-bold text-[#ffd30a] uppercase tracking-widest block">
                  Dashboard de Rendimiento en Tiempo Real
                </span>
                <h3 className="text-lg sm:text-2xl font-black text-white">
                  Tu Negocio Posicionado en los Primeros Resultados
                </h3>
                <p className="text-xs sm:text-sm text-white/80 hidden sm:block">
                  Diseño web responsivo adaptado a móviles, tablets y PCs con indexación SEO instantánea en Lima y todo el Perú.
                </p>
              </div>

              {/* Badge Flotante Izquierdo: Velocidad 100/100 */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 px-3.5 py-2 rounded-xl bg-black/70 backdrop-blur-md border border-white/15 shadow-xl flex items-center gap-2.5 animate-pulse">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-xs">
                  ⚡
                </div>
                <div className="text-left">
                  <span className="text-[10px] text-white/60 block uppercase font-mono">PageSpeed</span>
                  <span className="text-xs sm:text-sm font-black text-emerald-400">Score 100 / 100</span>
                </div>
              </div>

              {/* Badge Flotante Derecho: SEO Local */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 px-3.5 py-2 rounded-xl bg-black/70 backdrop-blur-md border border-white/15 shadow-xl flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#ffd30a]/20 text-[#ffd30a] flex items-center justify-center font-black text-xs">
                  📍
                </div>
                <div className="text-left">
                  <span className="text-[10px] text-white/60 block uppercase font-mono">Google Maps</span>
                  <span className="text-xs sm:text-sm font-black text-[#ffd30a]">Top 1 Local SEO</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Barra de Estadísticas Premium con Iconos Presentables */}
        <div className="mt-14 max-w-5xl mx-auto rounded-3xl bg-white/[0.04] backdrop-blur-xl border border-white/15 p-6 sm:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className={`text-center flex flex-col items-center justify-center group ${
                    idx > 0 ? 'pt-6 sm:pt-0' : ''
                  }`}
                >
                  {/* Icono Presentable en Contenedor Iluminado */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#ffd30a]/25 via-[#ffd30a]/10 to-transparent border border-[#ffd30a]/40 text-[#ffd30a] flex items-center justify-center mb-3.5 shadow-[0_8px_25px_rgba(255,211,10,0.2)] group-hover:scale-110 group-hover:bg-[#ffd30a] group-hover:text-[#1b004e] group-hover:shadow-[0_10px_30px_rgba(255,211,10,0.4)] transition-all duration-300">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.2]" />
                  </div>

                  {/* Número de Estadística Grande y Nítido */}
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#ffd30a] tracking-tight leading-none group-hover:scale-105 transition-transform">
                    {stat.value}
                  </div>

                  {/* Etiqueta Descriptiva con Resaltado de Letras al Pasar el Puntero */}
                  <span className="text-xs sm:text-sm font-bold text-white/90 group-hover:text-[#ffd30a] uppercase tracking-wider mt-2.5 inline-flex flex-wrap justify-center max-w-[160px] leading-snug transition-colors">
                    {stat.label.split('').map((char, charIdx) => (
                      <span
                        key={charIdx}
                        className="inline-block transition-transform duration-100 hover:text-white hover:scale-125 cursor-default"
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </span>
                    ))}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

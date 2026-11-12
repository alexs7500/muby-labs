'use client';

import React from 'react';
import {
  MapPin,
  Search,
  Globe2,
  Navigation,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Sparkles
} from 'lucide-react';

export const DisenoWebGeoSection: React.FC = () => {
  const limaDistricts = [
    {
      zone: 'Lima Empresarial & Financiera',
      badge: 'Alta Conversión',
      areas: 'San Isidro, Miraflores, Santiago de Surco, San Borja, Magdalena',
    },
    {
      zone: 'Lima Comercial & Logística',
      badge: 'Mayor Tráfico',
      areas: 'Cercado de Lima, Callao, San Miguel, Los Olivos, Ate, Santa Anita',
    },
    {
      zone: 'Lima Residencial & Servicios',
      badge: 'Servicios Locales',
      areas: 'La Molina, Jesús María, Lince, Chorrillos, Barranco, Pueblo Libre',
    },
    {
      zone: 'Cobertura Nacional (Provincias)',
      badge: 'Envíos Perú',
      areas: 'Arequipa, Trujillo, Piura, Chiclayo, Huancayo, Cusco y todo el país',
    },
  ];

  const geoFeatures = [
    {
      title: 'Schema.org & Coordenadas Geográficas (ICBM)',
      description:
        'Inyectamos código JSON-LD semántico con coordenadas exactas (-12.046, -77.042), horarios de atención en Lima y moneda local Soles (S/).',
      icon: Navigation,
      highlight: 'Datos Estructurados',
    },
    {
      title: 'Aparece en el "Local Pack" de Google Maps',
      description:
        'Optimizamos tu presencia para que cuando un cliente busque tu rubro cerca de él, aparezcas en el top 3 con llamada directa y cómo llegar.',
      icon: MapPin,
      highlight: 'Google Maps Local',
    },
    {
      title: 'SEO On-Page por Intención Comercial',
      description:
        'Estructuramos títulos, metadatos y encabezados H1-H3 para capturar términos de compra directa como "servicios de [tu rubro] en Lima".',
      icon: Search,
      highlight: 'Búsquedas Transaccionales',
    },
    {
      title: 'Core Web Vitals para Redes Móviles 4G/5G',
      description:
        'Google clasifica primero las webs que cargan en menos de 1 segundo en redes móviles peruanas (Bitel, Claro, Entel, Movistar).',
      icon: Smartphone,
      highlight: 'Velocidad < 1s',
    },
  ];

  const scrollToQuote = () => {
    const el = document.getElementById('cotizar');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 lg:py-28 bg-[#ffffff] text-[#1a1a1a] relative border-b border-slate-200 overflow-hidden" id="seo-geo">
      {/* Detalle visual sutil de fondo */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-slate-50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Encabezado Principal Presentable y Limpio */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1b004e]/5 border border-[#1b004e]/10 text-[#1b004e] text-xs font-bold uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#ffd30a] fill-[#ffd30a]" />
            <span>Estrategia SEO & GEO Localizada</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1b004e] leading-tight tracking-tight">
            ¿Por qué el{' '}
            <span className="underline decoration-[#ffd30a] decoration-[6px] underline-offset-8">
              SEO y la Geolocalización
            </span>{' '}
            son Clave en Lima?
          </h2>

          <p className="text-base sm:text-lg text-[#555555] leading-relaxed max-w-2xl mx-auto pt-2">
            Tener una página web no basta si nadie la encuentra. Diseñamos la arquitectura técnica de tu web para que Google identifique tu ubicación física y te posicione ante clientes listos para comprar en tu distrito o ciudad.
          </p>
        </div>

        {/* Grid de 2 Columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Columna Izquierda: 4 Pilares de Alto Impacto */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4">
            <div className="space-y-4">
              {geoFeatures.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="p-5 sm:p-6 rounded-2xl bg-[#f9f9fb] border border-slate-200/90 hover:border-[#1b004e]/30 hover:bg-white hover:shadow-lg hover:shadow-[#1b004e]/5 transition-all duration-300 flex items-start gap-4 sm:gap-5 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#1b004e] text-[#ffd30a] flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base sm:text-lg font-black text-[#1b004e] leading-snug">
                          {item.title}
                        </h3>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#1b004e]/10 text-[#1b004e] uppercase tracking-wide">
                          {item.highlight}
                        </span>
                      </div>
                      <p className="text-sm text-[#555555] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Micro banner de conversión */}
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-[#1b004e] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#1b004e]">
                  +350% de incremento en llamadas de clientes locales desde Google Maps.
                </span>
              </div>
              <button
                onClick={scrollToQuote}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#ffd30a] text-[#1b004e] text-xs font-black uppercase hover:bg-[#ffe14d] transition-colors shrink-0 shadow-sm"
              >
                <span>Cotizar Web</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Columna Derecha: Tarjeta Geográfica Corporativa */}
          <div className="lg:col-span-5 flex">
            <div className="w-full rounded-2xl p-7 sm:p-8 bg-[#1b004e] text-white shadow-2xl flex flex-col justify-between space-y-6 relative overflow-hidden">
              {/* Glow decorativo de fondo */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffd30a]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div>
                    <span className="text-[11px] font-mono font-bold text-[#ffd30a] uppercase tracking-wider block">
                      Cobertura Geográfica
                    </span>
                    <h4 className="text-lg font-black text-white">
                      Presencia en Todo el Perú
                    </h4>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#ffd30a] text-[#1b004e] font-black shadow-sm">
                    PE-LIM
                  </span>
                </div>

                <div className="space-y-3">
                  {limaDistricts.map((dist, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-bold text-[#ffd30a] flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-[#ffd30a]" />
                          {dist.zone}
                        </span>
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-white/10 text-white/80 uppercase">
                          {dist.badge}
                        </span>
                      </div>
                      <p className="text-xs text-[#ffffffc7] leading-relaxed">
                        {dist.areas}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Métricas y Badge de Garantía */}
              <div className="relative pt-4 border-t border-white/10 space-y-4">
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[10px] text-[#ffffff8c] block uppercase font-medium">Google Index</span>
                    <span className="text-sm sm:text-base font-black text-[#ffd30a] flex items-center justify-center gap-1 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-[#ffd30a]" />
                      100% Verificado
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-[10px] text-[#ffffff8c] block uppercase font-medium">Formato Semántico</span>
                    <span className="text-sm sm:text-base font-bold text-white mt-0.5 block">
                      Schema JSON-LD
                    </span>
                  </div>
                </div>

                <button
                  onClick={scrollToQuote}
                  className="w-full py-3.5 px-5 rounded-xl font-black text-[#1b004e] text-sm bg-[#ffd30a] hover:bg-[#ffe14d] shadow-lg shadow-amber-400/20 transition-all flex items-center justify-center gap-2 uppercase tracking-wide hover:scale-[1.02] active:scale-95 cursor-pointer"
                >
                  <span>Posicionar mi Empresa en Google</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

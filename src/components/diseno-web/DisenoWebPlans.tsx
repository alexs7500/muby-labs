'use client';

import React from 'react';
import { Star, ArrowRight, Zap, Globe, ShoppingCart, MessageCircle, Check } from 'lucide-react';

interface DisenoWebPlansProps {
  onSelectPlan?: (planName: string) => void;
}

export const DisenoWebPlans: React.FC<DisenoWebPlansProps> = ({ onSelectPlan }) => {
  const plans = [
    {
      id: 'landing',
      name: 'Landing Page',
      badge: 'Campaña Rápida',
      destacado: false,
      icon: Zap,
      imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80',
      description: 'Página web informativa de alta conversión, ideal para captar prospectos y ventas rápidas con Google Ads.',
      features: [
        'Página Web Informativa',
        'Diseño Responsivo',
        'Hosting SSD y Dominio .com',
        '2 Correos Corporativos Webmail',
        'Certificado SSL & Seguridad Antihack',
        'Copias de Seguridad de Respaldo',
        'Enlace con Redes Sociales',
        'Formulario de Contacto',
        'Soporte técnico',
        'Capacitación GRATIS',
      ],
      btnText: 'Solicitar',
    },
    {
      id: 'corporativo',
      name: 'Corporativo',
      badge: 'Destacado',
      destacado: true,
      icon: Globe,
      imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80',
      description: 'Presencia corporativa administrable completa para posicionar tu marca, catálogo y servicios en Google.',
      features: [
        'Página Web Administrable',
        'Diseño Responsivo (hasta 5 pestañas)',
        'Hosting SSD y Dominio .com',
        '5 Correos Corporativos Webmail',
        'Certificado SSL & Seguridad Antihack',
        'Copias de Seguridad Diarias en la Nube',
        'Redes Sociales Integradas',
        'Blog Integrado',
        'Botón WhatsApp',
        'Maps (Geolocalización en Lima)',
        'Soporte técnico y Capacitación',
      ],
      btnText: 'Solicitar',
    },
    {
      id: 'tienda',
      name: 'Tienda Virtual',
      badge: 'Ventas Online',
      destacado: false,
      icon: ShoppingCart,
      imageUrl: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop&q=80',
      description: 'Plataforma e-commerce completa con pasarela de pagos, inventario, carrito y pagos con tarjeta/Yape/Plin.',
      features: [
        'Página con Carrito de Compras',
        'Carga de Productos',
        'Pagos Seguros (Tarjeta, Yape & Plin)',
        'Diseño Responsivo',
        'Hosting SSD y Dominio .com',
        '5 Correos Corporativos',
        'Certificado SSL & Seguridad Antihack',
        'Copias de Seguridad Diarias Automáticas',
        'Botón WhatsApp en Productos',
        'Capacitación GRATIS',
      ],
      btnText: 'Solicitar',
    },
  ];

  const handleSelect = (planName: string) => {
    if (onSelectPlan) {
      onSelectPlan(planName);
    } else {
      const el = document.getElementById('cotizar');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#f9f9fb] text-[#1a1a1a] relative border-b border-slate-200" id="planes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#1b004e] uppercase tracking-widest block mb-2">
            Planes de Diseño Web
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1b004e]">
            Planes de Diseño Web
          </h2>
          <p className="mt-3 text-base text-[#555555]">
            Planes de diseño web para todo presupuesto, adaptados a las necesidades de tu negocio.
          </p>
        </div>

        {/* Grid de 3 Planes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan) => {
            const isDestacado = plan.destacado;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 ${
                  isDestacado
                    ? 'bg-[#1b004e] text-white border-2 border-[#1b004e] shadow-2xl shadow-[#1b004e]/30 scale-100 lg:-translate-y-3'
                    : 'bg-white text-[#1a1a1a] border-2 border-slate-200 hover:border-[#1b004e]/40 shadow-sm hover:shadow-xl'
                }`}
              >
                {/* Ribbon Destacado Amarillo */}
                {isDestacado && (
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 px-4 py-1 rounded-full bg-[#ffd30a] text-[#1b004e] font-bold text-xs uppercase tracking-wider shadow-md flex items-center gap-1.5 whitespace-nowrap">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{plan.badge}</span>
                  </div>
                )}

                <div>
                  {/* Imagen ilustrativa según la descripción del plan */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                    <img
                      src={plan.imageUrl}
                      alt={`${plan.name} - ${plan.badge}`}
                      loading="lazy"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <span className="absolute bottom-3 left-4 text-[11px] font-bold text-white uppercase tracking-wider px-2.5 py-0.5 rounded bg-white/20 backdrop-blur-sm">
                      {plan.badge}
                    </span>
                  </div>

                  <div className="p-6 sm:p-7">
                    <h3
                      className={`text-2xl font-black mb-2 text-center ${
                        isDestacado ? 'text-[#ffd30a]' : 'text-[#1b004e]'
                      }`}
                    >
                      {plan.name}
                    </h3>

                    <p
                      className={`text-xs text-center mb-5 leading-relaxed ${
                        isDestacado ? 'text-white/80' : 'text-[#555555]'
                      }`}
                    >
                      {plan.description}
                    </p>

                    {/* Checklist con emojis ✅ exactos */}
                    <div className="space-y-3 pt-3 border-t border-slate-200/40">
                      {plan.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className={`flex items-start gap-2.5 text-sm ${
                            isDestacado ? 'text-[#ffffffe6]' : 'text-[#1a1a1a]'
                          }`}
                        >
                          <span className="shrink-0 mt-0.5">✅</span>
                          <span className={feature.includes('GRATIS') ? 'font-bold' : ''}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Botón de Acción */}
                <div className="p-6 sm:p-7 pt-0">
                  <div className="pt-6 border-t border-slate-200/40">
                    <button
                      onClick={() => handleSelect(plan.name)}
                      className={`w-full py-3.5 px-6 rounded-md font-bold text-base transition-all cursor-pointer flex items-center justify-center gap-2 ${
                        isDestacado
                          ? 'bg-[#ffd30a] hover:bg-[#ffe14d] text-[#1b004e] shadow-md hover:scale-105 active:scale-95'
                          : 'bg-[#1b004e] hover:bg-[#2a007a] text-white hover:scale-[1.02] active:scale-95'
                      }`}
                    >
                      <span>{plan.btnText}</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </button>

                    <a
                      href={`https://wa.me/51946249008?text=${encodeURIComponent(
                        `Hola Muby Labs, deseo solicitar el plan ${plan.name} para mi empresa.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full mt-3 py-1.5 text-center text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 ${
                        isDestacado
                          ? 'text-white/80 hover:text-[#ffd30a]'
                          : 'text-[#555555] hover:text-[#1b004e]'
                      }`}
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-500 fill-current" />
                      <span>Consultar por WhatsApp</span>
                    </a>
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

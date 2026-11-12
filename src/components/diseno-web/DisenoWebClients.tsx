'use client';

import React, { useState } from 'react';
import {
  MapPin,
  ExternalLink,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Building2,
  Layers
} from 'lucide-react';

interface ClientProject {
  id: string;
  name: string;
  category: string;
  rubro: 'Automotriz' | 'Construcción' | 'Logística' | 'Gastronomía' | 'Industrial' | 'Salud';
  city: string;
  imageUrl: string;
  serviceType: string;
  highlight: string;
}

export const DisenoWebClients: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Todos');

  const clients: ClientProject[] = [
    {
      id: 'autospa',
      name: 'Auto Spa Perú',
      category: 'Automotriz & Car Detailing',
      rubro: 'Automotriz',
      city: 'Santiago de Surco, Lima',
      imageUrl: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&auto=format&fit=crop&q=80',
      serviceType: 'Web Corporativa + Citas',
      highlight: 'Top 3 en Google Maps',
    },
    {
      id: 'ingeglass',
      name: 'Ingeglass Fachadas',
      category: 'Vidrio Templado & Fachadas',
      rubro: 'Construcción',
      city: 'San Isidro, Lima',
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
      serviceType: 'Web Corporativa + Catálogo',
      highlight: 'Catálogo de Obras 3D',
    },
    {
      id: 'velocity',
      name: 'Velocity Logistics',
      category: 'Comercio Exterior & Transporte',
      rubro: 'Logística',
      city: 'Callao, Lima',
      imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80',
      serviceType: 'Sistema a Medida + Tracking',
      highlight: 'Cotizador de Fletes en Línea',
    },
    {
      id: 'novogourmet',
      name: 'Novo Gourmet Bar',
      category: 'Gastronomía & Franquicia',
      rubro: 'Gastronomía',
      city: 'Miraflores, Lima',
      imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80',
      serviceType: 'Menú Digital + Reservas',
      highlight: 'Carta QR y Reservas WhatsApp',
    },
    {
      id: 'constructora',
      name: 'Constructora Andina',
      category: 'Obras Civiles & Minería',
      rubro: 'Construcción',
      city: 'San Borja, Lima',
      imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop&q=80',
      serviceType: 'Portal Corporativo Licencias',
      highlight: 'Homologación con Mineras',
    },
    {
      id: 'hardco',
      name: 'Grupo Hardco',
      category: 'Equipos Industriales & Bombas',
      rubro: 'Industrial',
      city: 'Ate Vitarte, Lima',
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80',
      serviceType: 'Tienda B2B + Fichas Técnicas',
      highlight: 'Descarga de Manuales PDF',
    },
    {
      id: 'alucon',
      name: 'Alucon Solutions',
      category: 'Arquitectura & Aluminio',
      rubro: 'Construcción',
      city: 'La Molina, Lima',
      imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80',
      serviceType: 'Diseño Web de Alta Gama',
      highlight: 'Portafolio de Proyectos HD',
    },
    {
      id: 'novasalud',
      name: 'Nova Salud Médica',
      category: 'Salud & Policlínico',
      rubro: 'Salud',
      city: 'Los Olivos, Lima',
      imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop&q=80',
      serviceType: 'Web Médica + Sistema de Citas',
      highlight: 'Resultados de Laboratorio Web',
    },
  ];

  const categories = ['Todos', 'Construcción', 'Automotriz', 'Logística', 'Gastronomía', 'Industrial', 'Salud'];

  const filteredClients =
    activeFilter === 'Todos'
      ? clients
      : clients.filter((client) => client.rubro === activeFilter);

  const scrollToQuote = () => {
    const el = document.getElementById('cotizar');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 lg:py-28 bg-[#f9f9fb] text-[#1a1a1a] border-b border-slate-200" id="clientes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1b004e]/5 border border-[#1b004e]/10 text-[#1b004e] text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#ffd30a] fill-[#ffd30a]" />
            <span>Casos de Éxito & Portafolio Real</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1b004e] tracking-tight">
            Ellos confían en nosotros
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#555555] leading-relaxed">
            Con más de 10 años de experiencia y más de 1800 sitios desarrollados, diseñamos la presencia 
            digital y el <strong className="text-[#1b004e]">sistema a medida</strong> ideal para el sector de tu negocio.
          </p>

          {/* Filtros por Rubro del Negocio */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-[#1b004e] text-[#ffd30a] shadow-md shadow-[#1b004e]/20 scale-105'
                    : 'bg-white text-[#555555] border border-slate-200 hover:border-[#1b004e]/40 hover:text-[#1b004e]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Marcas con Imágenes según el Negocio */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredClients.map((client) => (
            <div
              key={client.id}
              className="group rounded-2xl bg-white border border-slate-200/90 hover:border-[#1b004e]/40 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Contenedor de Imagen de Negocio */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={client.imageUrl}
                    alt={`${client.name} - ${client.category}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Overlay gradiente para contraste */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Badge de Rubro */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#1b004e]/90 backdrop-blur-sm text-white text-[11px] font-bold tracking-wide uppercase shadow">
                    {client.rubro}
                  </span>

                  {/* Tipo de Solución */}
                  <span className="absolute bottom-2.5 left-3 right-3 text-[11px] font-semibold text-[#ffd30a] flex items-center gap-1.5 truncate">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#ffd30a] shrink-0" />
                    <span>{client.serviceType}</span>
                  </span>
                </div>

                {/* Información del Negocio */}
                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base font-black text-[#1b004e] group-hover:text-[#7928ca] transition-colors truncate">
                      {client.name}
                    </h3>
                  </div>

                  <p className="text-xs font-medium text-[#555555] line-clamp-1">
                    {client.category}
                  </p>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#1b004e]" />
                      <span className="truncate max-w-[140px]">{client.city}</span>
                    </span>

                    <span className="text-[11px] font-bold text-[#1b004e] bg-[#ffd30a]/20 px-2 py-0.5 rounded-full shrink-0">
                      {client.highlight}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Llamado a la Acción Inferior */}
        <div className="mt-14 rounded-2xl bg-[#1b004e] text-white p-7 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs font-bold text-[#ffd30a] uppercase tracking-wider block">
              ¿Tu rubro o sector no aparece en la lista?
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Diseñamos páginas web y sistemas a medida para cualquier industria en el Perú
            </h3>
            <p className="text-xs sm:text-sm text-white/80 max-w-2xl">
              Adaptamos la arquitectura técnica, diseño y funcionalidades exactas a las necesidades de tu empresa.
            </p>
          </div>

          <button
            onClick={scrollToQuote}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-black text-[#1b004e] text-sm bg-[#ffd30a] hover:bg-[#ffe14d] shadow-lg shadow-amber-400/25 transition-all flex items-center justify-center gap-2 uppercase tracking-wide hover:scale-105 active:scale-95 cursor-pointer shrink-0"
          >
            <span>Cotizar para mi Rubro</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </section>
  );
};

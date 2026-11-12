'use client';

import React, { useState } from 'react';
import {
  Cpu,
  Layers,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ExternalLink,
  X,
  MessageCircle,
  Database,
  BarChart3,
  Users2,
  CalendarCheck,
  PackageCheck,
  ShieldCheck,
  Zap
} from 'lucide-react';

interface SystemExample {
  id: string;
  title: string;
  shortDesc: string;
  category: string;
  badge: string;
  imageUrl: string;
  icon: any;
  clientTarget: string;
  modules: string[];
  benefits: string[];
  techStack: string[];
}

export const DisenoSistemasSection: React.FC = () => {
  const [selectedSystem, setSelectedSystem] = useState<SystemExample | null>(null);

  const systems: SystemExample[] = [
    {
      id: 'erp-inventario',
      title: 'Sistema de Inventarios & Facturación Electrónica SUNAT',
      category: 'Gestión Comercial & Stock',
      badge: 'Más Solicitado',
      shortDesc: 'Control total de existencias en múltiples almacenes, alertas de stock mínimo y emisión automática de facturas y boletas electrónicas.',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&auto=format&fit=crop&q=80',
      icon: PackageCheck,
      clientTarget: 'Distribuidoras, Ferreterías, Importadoras y Tiendas Retail',
      modules: [
        'Kardex valorizado en tiempo real (PEPS/Promedio)',
        'Módulo de Facturación y Boleta Electrónica (SUNAT UBL 2.1)',
        'Control de compras, proveedores y órdenes de servicio',
        'Gestión de multialmacén con transferencias internas',
        'Lector de código de barras y cotizaciones en PDF',
      ],
      benefits: [
        'Elimina el 100% de pérdidas de mercadería por descuadres',
        'Ahorra hasta 15 horas semanales en conciliación contable',
        'Facturación instantánea desde celular o computadora',
      ],
      techStack: ['Next.js', 'PostgreSQL', 'Supabase', 'API SUNAT', 'Tailwind CSS'],
    },
    {
      id: 'crm-whatsapp',
      title: 'CRM de Ventas & Automatización con WhatsApp',
      category: 'Comercial & Clientes',
      badge: 'Alto Retorno',
      shortDesc: 'Embudo de ventas visual para captar prospectos, asignar asesores automáticamente y enviar cotizaciones con seguimiento por WhatsApp.',
      imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&auto=format&fit=crop&q=80',
      icon: Users2,
      clientTarget: 'Inmobiliarias, Agencias, Servicios B2B y Equipos Comerciales',
      modules: [
        'Pipeline Kanban interactivo de prospectos por etapas',
        'Bandeja centralizada de WhatsApp multi-agente',
        'Generador y despachador de cotizaciones en 1 clic',
        'Recordatorios automáticos de seguimiento comercial',
        'Métricas de conversión y desempeño de cada asesor',
      ],
      benefits: [
        'Aumenta la tasa de cierre de ventas en más de un 40%',
        'Cero prospectos olvidados o sin respuesta oportuna',
        'Supervisión gerencial del embudo comercial en vivo',
      ],
      techStack: ['Next.js', 'WhatsApp Cloud API', 'Webhooks', 'Supabase Realtime'],
    },
    {
      id: 'citas-medicas',
      title: 'Sistema de Citas & Reservas Médicas en Línea',
      category: 'Salud & Servicios',
      badge: 'Atención 24/7',
      shortDesc: 'Plataforma para clínicas y consultorios con agenda interactiva por especialista, recordatorios automáticos por WhatsApp y pagos online.',
      imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1000&auto=format&fit=crop&q=80',
      icon: CalendarCheck,
      clientTarget: 'Policlínicos, Consultorios Odontológicos, Psicología y Spas',
      modules: [
        'Calendario dinámico con horarios disponibles en tiempo real',
        'Historia clínica digital y fichas de atención de pacientes',
        'Cobros de consulta vía Yape, Plin y tarjetas de crédito',
        'Confirmación y recordatorio automático vía WhatsApp',
        'Portal para que el paciente descargue sus órdenes y recetas',
      ],
      benefits: [
        'Reduce el ausentismo de pacientes en un 65%',
        'Recepciona reservas automáticamente las 24 horas del día',
        'Fichas médicas organizadas y protegidas con roles de acceso',
      ],
      techStack: ['Next.js', 'PostgreSQL', 'Calendars', 'Pasarelas Niubiz/Culqi'],
    },
    {
      id: 'portal-b2b',
      title: 'Portal B2B de Pedidos para Distribuidores Mayoristas',
      category: 'Comercio Mayorista',
      badge: 'B2B Escalable',
      shortDesc: 'Extranet privada donde tus clientes distribuidores consultan stock en vivo, acceden a sus listas de precios preferenciales y realizan pedidos en bloque.',
      imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1000&auto=format&fit=crop&q=80',
      icon: Layers,
      clientTarget: 'Fábricas, Mayoristas, Importadoras y Marcas con Red de Distribuidores',
      modules: [
        'Catálogo digital privado con precios segmentados por cliente',
        'Módulo de carga masiva de pedidos por Excel o plantilla',
        'Consulta de saldo de crédito y estados de cuenta',
        'Tracking en vivo del estado del despacho y guía de remisión',
        'Integración con tu software contable o ERP existente',
      ],
      benefits: [
        'Elimina errores humanos al transcribir pedidos manuales',
        'Tus clientes mayoristas piden a cualquier hora sin esperas',
        'Mayor rotación de inventario con notificaciones de stock',
      ],
      techStack: ['Next.js', 'PostgreSQL', 'Redis Caching', 'Tailwind CSS'],
    },
    {
      id: 'dashboard-gerencial',
      title: 'Dashboard Ejecutivo & Business Intelligence',
      category: 'Control Gerencial',
      badge: 'Analítica en Vivo',
      shortDesc: 'Panel gerencial con indicadores clave (KPIs), flujo de caja, ingresos proyectados y reportes exportables para la toma de decisiones estratégicas.',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&auto=format&fit=crop&q=80',
      icon: BarChart3,
      clientTarget: 'Gerentes Generales, Directores y Dueños de Empresas en Crecimiento',
      modules: [
        'Gráficos interactivos de ventas diarias, mensuales y anuales',
        'Módulo de rentabilidad neta por producto y servicio',
        'Alertas de costos operativos y margen comercial',
        'Exportación instantánea a hojas de cálculo Excel y PDF',
        'Accesos seguros con autenticación de dos factores (2FA)',
      ],
      benefits: [
        'Visibilidad total de tu empresa en una sola pantalla',
        'Toma de decisiones con datos reales en tiempo real',
        'Accesible desde tu celular o tablet en cualquier lugar',
      ],
      techStack: ['Next.js', 'Chart.js / Recharts', 'Supabase Auth', 'TypeScript'],
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#130038] text-white relative border-b border-white/10 overflow-hidden" id="sistemas">
      {/* Fondo con destellos de luz decorativos */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffd30a]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7928ca]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Encabezado Principal de la Sección */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffd30a]/15 border border-[#ffd30a]/30 text-[#ffd30a] text-xs font-black uppercase tracking-widest shadow-sm">
            <Cpu className="w-4 h-4 text-[#ffd30a]" />
            <span>Desarrollo de Software a Medida</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Diseño de Sistemas a Medida para tu <span className="text-[#ffd30a]">Negocio</span>
          </h2>

          <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
            Automatiza tus operaciones, elimina tareas repetitivas y controla tu empresa en tiempo real con 
            plataformas web personalizadas creadas exactamente para las necesidades de tu rubro.
          </p>
        </div>

        {/* Grid de Ejemplos de Sistemas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
          {systems.map((system) => {
            const Icon = system.icon;
            return (
              <div
                key={system.id}
                className="group rounded-2xl bg-white/5 border border-white/15 hover:border-[#ffd30a]/60 hover:bg-white/10 hover:shadow-2xl hover:shadow-[#ffd30a]/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
                onClick={() => setSelectedSystem(system)}
              >
                <div>
                  {/* Imagen de Cabecera del Sistema */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#0b0028]">
                    <img
                      src={system.imageUrl}
                      alt={system.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                    />

                    {/* Overlay gradiente */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#130038] via-transparent to-black/40" />

                    {/* Badge del sistema */}
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#ffd30a] text-[#1b004e] text-xs font-black uppercase tracking-wider shadow-md">
                      {system.badge}
                    </span>

                    {/* Categoría */}
                    <span className="absolute bottom-3 left-3 text-xs font-bold text-white/90 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md">
                      <Icon className="w-3.5 h-3.5 text-[#ffd30a]" />
                      <span>{system.category}</span>
                    </span>
                  </div>

                  {/* Cuerpo de la tarjeta */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-black text-white group-hover:text-[#ffd30a] transition-colors leading-snug">
                      {system.title}
                    </h3>

                    <p className="text-sm text-white/70 leading-relaxed">
                      {system.shortDesc}
                    </p>

                    {/* Módulos clave destacados */}
                    <div className="pt-3 border-t border-white/10 space-y-2">
                      <span className="text-[11px] font-mono text-[#ffd30a] uppercase tracking-wider block font-bold">
                        Módulos Incluidos:
                      </span>
                      {system.modules.slice(0, 3).map((mod, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-white/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#ffd30a] shrink-0 mt-0.5" />
                          <span className="truncate">{mod}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Botón Ver Ejemplo y Cotizar */}
                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedSystem(system);
                      }}
                      className="text-xs font-bold text-[#ffd30a] group-hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <span>Ver ejemplo completo</span>
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </button>

                    <a
                      href={`https://wa.me/51946249008?text=${encodeURIComponent(
                        `Hola Muby Labs, deseo cotizar el ${system.title} para mi negocio.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-3 py-1.5 rounded-lg bg-[#25d366] text-white font-bold text-xs hover:bg-[#20ba5a] transition-all flex items-center gap-1 shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      <span>Cotizar</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner Inferior de Consulta */}
        <div className="mt-14 p-7 sm:p-9 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-bold text-[#ffd30a] uppercase tracking-widest block">
              ¿Tu empresa tiene un proceso único?
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Creamos cualquier sistema a medida desde cero para tu rubro
            </h3>
            <p className="text-xs sm:text-sm text-white/70 max-w-2xl">
              Nos sentamos contigo, analizamos tus procesos actuales y programamos la herramienta exacta que te permitirá ahorrar tiempo y multiplicar ganancias.
            </p>
          </div>

          <a
            href="https://wa.me/51946249008?text=Hola%20Muby%20Labs,%20deseo%20solicitar%20asesor%C3%ADa%20para%20un%20sistema%20a%20medida%20de%20mi%20negocio."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 rounded-xl font-black text-[#1b004e] text-sm bg-[#ffd30a] hover:bg-[#ffe14d] shadow-lg shadow-amber-400/25 transition-all flex items-center justify-center gap-2 uppercase tracking-wide hover:scale-105 active:scale-95 cursor-pointer shrink-0"
          >
            <span>Consultar con un Ingeniero</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>
      </div>

      {/* Modal de Detalle Completo del Sistema Seleccionado */}
      {selectedSystem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedSystem(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#1b004e] border border-white/20 text-white shadow-2xl p-6 sm:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón Cerrar Modal */}
            <button
              onClick={() => setSelectedSystem(null)}
              aria-label="Cerrar ventana"
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Cabecera del Modal con Imagen */}
            <div className="space-y-4">
              <div className="relative aspect-[16/8] rounded-xl overflow-hidden bg-black/40">
                <img
                  src={selectedSystem.imageUrl}
                  alt={selectedSystem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b004e] via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#ffd30a] text-[#1b004e] font-black text-xs uppercase">
                  {selectedSystem.badge}
                </span>
              </div>

              <div>
                <span className="text-xs font-mono text-[#ffd30a] uppercase tracking-wider block font-bold">
                  {selectedSystem.category} • Ideal para: {selectedSystem.clientTarget}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  {selectedSystem.title}
                </h3>
                <p className="text-sm text-white/80 mt-2 leading-relaxed">
                  {selectedSystem.shortDesc}
                </p>
              </div>
            </div>

            {/* Módulos y Funcionalidades */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#ffd30a] flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>Módulos y Capacidades del Sistema:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedSystem.modules.map((mod, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5 text-xs text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-[#ffd30a] shrink-0 mt-0.5" />
                    <span>{mod}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Beneficios Comerciales */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#ffd30a] flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>Resultados de Negocio que Obtendrás:</span>
              </h4>
              <div className="space-y-2">
                {selectedSystem.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90">
                    <span className="w-5 h-5 rounded-full bg-[#ffd30a] text-[#1b004e] font-black text-[10px] flex items-center justify-center shrink-0">
                      ✔
                    </span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stack Tecnológico */}
            <div className="pt-2">
              <span className="text-xs font-mono text-white/60 block mb-2 uppercase">
                Arquitectura Técnica:
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedSystem.techStack.map((tech, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-md bg-white/10 text-white/90 text-xs font-mono border border-white/15">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Botón de Cotización Directa */}
            <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={`https://wa.me/51946249008?text=${encodeURIComponent(
                  `¡Hola Muby Labs! Deseo cotizar el "${selectedSystem.title}" para mi empresa.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-3.5 px-6 rounded-xl font-bold text-white bg-[#25d366] hover:bg-[#20ba5a] shadow-lg shadow-emerald-950/40 transition-all flex items-center justify-center gap-2 text-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Cotizar este Sistema por WhatsApp (946 249 008)</span>
              </a>

              <button
                onClick={() => setSelectedSystem(null)}
                className="w-full sm:w-auto py-3.5 px-6 rounded-xl font-bold text-white bg-white/10 hover:bg-white/20 text-sm transition-colors cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};


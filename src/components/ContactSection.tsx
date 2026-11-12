'use client';

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Database,
  Clock,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { submitLeadToSupabase } from '@/lib/supabaseClient';

interface ContactSectionProps {
  preselectedService?: string;
  onClearPreselected?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedService,
  onClearPreselected
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    selectedService: preselectedService || 'Páginas Web',
    estimatedBudget: '$500 - $1,500 USD',
    projectDetails: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [generatedTicket, setGeneratedTicket] = useState('');

  // Sincronizar si cambia desde el exterior
  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, selectedService: preselectedService }));
    }
  }, [preselectedService]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await submitLeadToSupabase({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        companyName: formData.companyName,
        selectedService: formData.selectedService,
        estimatedBudget: formData.estimatedBudget,
        projectDetails: formData.projectDetails,
      });

      if (response.success) {
        setGeneratedTicket(response.data.id);
        setSubmitStatus('success');
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-24 relative bg-slate-950 border-t border-slate-900">
      {/* Decorative glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-semibold text-cyan-300 uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Hablemos de tu Proyecto
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Inicia la transformación digital de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              tu negocio hoy
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Cuéntanos tus requerimientos y nuestro equipo técnico preparará una propuesta técnica y económica a la medida en menos de 24 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Información de Contacto Directo */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white mb-6">Canales de Atención Directa</h3>
              
              <div className="space-y-6">
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Correo Electrónico</div>
                    <a
                      href="mailto:contacto@mubylabs.com"
                      className="text-base font-semibold text-white hover:text-cyan-400 transition-colors"
                    >
                      contacto@mubylabs.com
                    </a>
                    <div className="text-xs text-slate-400">Respuesta promedio en menos de 2 horas</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">WhatsApp & Soporte Comercial</div>
                    <a
                      href="https://wa.me/51946249008"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-semibold text-white hover:text-emerald-400 transition-colors"
                    >
                      +51 946 249 008
                    </a>
                    <div className="text-xs text-slate-400">Atención técnica inmediata de Lunes a Sábado</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Ubicación y Operaciones</div>
                    <div className="text-base font-semibold text-white">
                      Lima, Perú & Servicios Globales en Remoto
                    </div>
                    <div className="text-xs text-slate-400">Clientes activos en toda Latinoamérica</div>
                  </div>
                </div>

              </div>

              {/* Security Pill */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center gap-3 text-xs text-slate-400">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Tus datos están protegidos bajo estricto acuerdo de confidencialidad (NDA).</span>
              </div>
            </div>

            {/* Supabase Ready Badge Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-950/40 to-slate-900 border border-cyan-500/20 flex items-center gap-3">
              <Database className="w-5 h-5 text-cyan-400 shrink-0" />
              <div className="text-xs text-slate-300">
                <span className="font-semibold text-white">Recepción Cloud: </span>
                Las solicitudes son enrutadas a nuestra base de datos en la nube con Supabase para seguimiento inmediato.
              </div>
            </div>
          </div>

          {/* Formulario de Cotización / Iniciar Proyecto */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-2xl backdrop-blur-xl">
              
              {submitStatus === 'success' ? (
                <div className="py-8 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">¡Solicitud recibida con éxito!</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Gracias por confiar en <span className="text-cyan-400 font-semibold">Muby_labs</span>. Hemos asignado a un arquitecto de software a tu caso para preparar la propuesta técnica.
                  </p>
                  <div className="inline-block p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300">
                    ID de Registro Cloud: <span className="font-bold text-white">{generatedTicket}</span>
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitStatus('idle')}
                      className="px-6 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
                    >
                      Enviar otra consulta
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Ej. Carlos Mendoza"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Correo Corporativo / Personal *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="carlos@tuempresa.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Teléfono / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+51 987 654 321"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Nombre de la Empresa o Emprendimiento
                      </label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="Ej. Distribuidora del Norte SAC"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Servicio Principal de Interés *
                      </label>
                      <select
                        value={formData.selectedService}
                        onChange={(e) => setFormData({ ...formData, selectedService: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      >
                        <option value="Páginas Web">Páginas Web (Corporativas, Landing, Tienda)</option>
                        <option value="Sistemas de Inventario">Sistemas de Inventario (Stock en tiempo real)</option>
                        <option value="Sistemas de Ventas (POS)">Sistemas de Ventas (POS & Facturación)</option>
                        <option value="Suite Integral (Web + Inventario + POS)">Suite Integral (Ecosistema Completo)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Rango de Presupuesto Estimado
                      </label>
                      <select
                        value={formData.estimatedBudget}
                        onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      >
                        <option value="$350 - $800 USD">$350 - $800 USD (Landing / Web Básica)</option>
                        <option value="$800 - $2,000 USD">$800 - $2,000 USD (Web Avanzada / POS Inicial)</option>
                        <option value="$2,000 - $5,000 USD">$2,000 - $5,000 USD (Sistema a Medida / Multi-sede)</option>
                        <option value="+ $5,000 USD">+ $5,000 USD (Transformación Digital Completa)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Detalles del Proyecto u Operación *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      placeholder="Describe qué necesitas optimizar: cuántos usuarios o almacenes tienes, si requieres migrar datos existentes, o qué objetivos buscas alcanzar..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                    />
                  </div>

                  {submitStatus === 'error' && (
                    <div className="p-3 rounded-xl bg-rose-950/50 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>Ocurrió un error al enviar el formulario. Intenta de nuevo o escríbenos directamente a contacto@mubylabs.com.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="submit-contact-form"
                    className="w-full py-4 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group active:scale-98"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        <span>Procesando en la nube...</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <span>Enviar Solicitud y Cotizar Proyecto</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </button>

                  <div className="text-center text-[11px] text-slate-500">
                    Al enviar, aceptas ser contactado por un asesor técnico de Muby_labs. Sin compromiso de compra.
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

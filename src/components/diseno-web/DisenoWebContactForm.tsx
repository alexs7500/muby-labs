'use client';

import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck
} from 'lucide-react';

interface DisenoWebContactFormProps {
  initialPlan?: string;
}

export const DisenoWebContactForm: React.FC<DisenoWebContactFormProps> = ({
  initialPlan = 'Corporativo',
}) => {
  const [formData, setFormData] = useState({
    nombre: '',
    celular: '',
    email: '',
    solicitud: initialPlan,
    mensaje: '',
    privacidad: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.privacidad) {
      setErrorMessage('Debes aceptar la Política de Privacidad conforme a la Ley N.º 29733.');
      return;
    }

    setIsSubmitting(true);

    const textoWhatsApp = `¡Hola Muby Labs! Solicito una cotización gratis para mi página web:\n\n` +
      `👤 *Nombre:* ${formData.nombre}\n` +
      `📱 *Celular:* ${formData.celular}\n` +
      `✉️ *Correo:* ${formData.email}\n` +
      `🎯 *Plan:* ${formData.solicitud}\n` +
      `📝 *Mensaje:* ${formData.mensaje || 'Deseo conocer precios y cronograma'}`;

    const waUrl = `https://wa.me/51946249008?text=${encodeURIComponent(textoWhatsApp)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.open(waUrl, '_blank');
    }, 500);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#1b004e] text-white relative overflow-hidden" id="cotizar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Columna Izquierda: Información de Contacto */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="text-xs font-bold text-[#ffd30a] uppercase tracking-widest block">
              Comunícate con nosotros
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
              Solicita tu <span className="text-[#ffd30a]">cotización gratis</span>
            </h2>

            <p className="text-base text-[#ffffffd1] leading-relaxed">
              Déjanos tus datos y te responderemos en breve con una propuesta económica adaptada a las necesidades de tu empresa.
            </p>

            <ul className="space-y-5 pt-3">
              <li className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#ffd30a] flex items-center justify-center text-[#1b004e] shrink-0 font-bold shadow-md">
                  <Phone className="w-5 h-5 stroke-[#1b004e] stroke-[2.5]" />
                </div>
                <div>
                  <strong className="text-xs text-[#ffffffb3] block uppercase tracking-wider">Teléfono / WhatsApp</strong>
                  <a href="https://wa.me/51946249008" target="_blank" rel="noopener noreferrer" className="text-base font-semibold text-white hover:text-[#ffd30a] transition-colors">
                    946 249 008
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#ffd30a] flex items-center justify-center text-[#1b004e] shrink-0 font-bold shadow-md">
                  <Mail className="w-5 h-5 stroke-[#1b004e] stroke-[2.5]" />
                </div>
                <div>
                  <strong className="text-xs text-[#ffffffb3] block uppercase tracking-wider">Correo Electrónico</strong>
                  <a href="mailto:ventas@mubylabs.com" className="text-base font-semibold text-white hover:text-[#ffd30a] transition-colors">
                    ventas@mubylabs.com
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#ffd30a] flex items-center justify-center text-[#1b004e] shrink-0 font-bold shadow-md">
                  <MapPin className="w-5 h-5 stroke-[#1b004e] stroke-[2.5]" />
                </div>
                <div>
                  <strong className="text-xs text-[#ffffffb3] block uppercase tracking-wider">Ubicación</strong>
                  <span className="text-base font-semibold text-white">
                    Lima, Perú
                  </span>
                </div>
              </li>

              <li className="pt-2">
                <strong className="text-xs text-[#ffd30a] block uppercase tracking-wider mb-2">
                  Síguenos en Redes Sociales
                </strong>
                <div className="flex items-center gap-3">
                  <a
                    href="https://wa.me/51946249008"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp 946 249 008"
                    className="w-10 h-10 rounded-full bg-[#25d366] text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-md"
                    title="WhatsApp: 946 249 008"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.1 1.51 5.829L.057 23.776a.75.75 0 00.923.923l5.947-1.453A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.731 9.731 0 01-4.96-1.356l-.356-.212-3.688.9.917-3.591-.232-.369A9.714 9.714 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
                    </svg>
                  </a>

                  <a
                    href="https://www.tiktok.com/@mubylabs"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="w-10 h-10 rounded-full bg-black border border-white/20 text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-md"
                    title="TikTok"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298 0 .59.046.87.136V9.4a6.33 6.33 0 0 0-.87-.06A6.34 6.34 0 0 0 3.14 15.7a6.34 6.34 0 0 0 10.74 4.54 6.27 6.27 0 0 0 1.93-4.57V8.71a8.21 8.21 0 0 0 4.78 1.53v-3.48a4.85 4.85 0 0 1-1-.07z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.instagram.com/mubylabs"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-md"
                    title="Instagram"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  </a>

                  <a
                    href="https://www.facebook.com/mubylabs"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-10 h-10 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-md"
                    title="Facebook"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Columna Derecha: Formulario estilo exacto promo.paginawebcorporativa */}
          <div className="lg:col-span-7">
            <div className="rounded-xl bg-white/10 border border-white/20 p-7 sm:p-9 shadow-2xl backdrop-blur-md">
              <span className="text-xs font-bold text-[#ffd30a] uppercase tracking-wider block mb-1">
                Solicita una cotización
              </span>
              <h3 className="text-2xl font-bold text-white mb-1">
                Solicita tu cotización gratis
              </h3>
              <p className="text-sm text-[#ffffffbf] mb-6">
                Déjanos tus datos y te responderemos en breve.
              </p>

              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#ffd30a] text-[#1b004e] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">¡Mensaje Enviado con Éxito!</h4>
                  <p className="text-sm text-[#ffffffd9] max-w-md mx-auto">
                    Te responderemos en breve. También se abrió WhatsApp para coordinar los detalles.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-md bg-[#ffd30a] text-[#1b004e] font-bold text-xs uppercase"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 rounded-md bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-semibold">
                      {errorMessage}
                    </div>
                  )}

                  {/* Nombres */}
                  <div>
                    <input
                      type="text"
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      placeholder="Nombres y Apellidos"
                      className="w-full px-4 py-3 rounded-md bg-white/15 border border-white/20 text-white placeholder-white/60 text-sm focus:border-[#ffd30a] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Celular */}
                    <div>
                      <input
                        type="tel"
                        required
                        value={formData.celular}
                        onChange={(e) => setFormData({ ...formData, celular: e.target.value })}
                        placeholder="Celular / WhatsApp"
                        className="w-full px-4 py-3 rounded-md bg-white/15 border border-white/20 text-white placeholder-white/60 text-sm focus:border-[#ffd30a] focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Correo Electrónico"
                        className="w-full px-4 py-3 rounded-md bg-white/15 border border-white/20 text-white placeholder-white/60 text-sm focus:border-[#ffd30a] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Plan o Solicitud */}
                  <div>
                    <select
                      value={formData.solicitud}
                      onChange={(e) => setFormData({ ...formData, solicitud: e.target.value })}
                      className="w-full px-4 py-3 rounded-md bg-[#1b004e] border border-white/20 text-white text-sm focus:border-[#ffd30a] focus:outline-none transition-colors"
                    >
                      <option value="Landing Page">Landing Page</option>
                      <option value="Corporativo">Corporativo (Destacado)</option>
                      <option value="Tienda Virtual">Tienda Virtual</option>
                      <option value="Diseño de Sistemas a Medida para tu Negocio">Diseño de Sistemas a Medida para tu Negocio</option>
                    </select>
                  </div>

                  {/* Solicitud / Mensaje */}
                  <div>
                    <textarea
                      rows={3}
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      placeholder="¿Qué tipo de página necesitas?"
                      className="w-full px-4 py-3 rounded-md bg-white/15 border border-white/20 text-white placeholder-white/60 text-sm focus:border-[#ffd30a] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Checkbox Privacidad Ley 29733 */}
                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="privacidad"
                      required
                      checked={formData.privacidad}
                      onChange={(e) => setFormData({ ...formData, privacidad: e.target.checked })}
                      className="mt-1 w-4 h-4 rounded border-white/30 bg-white/10 text-[#ffd30a] focus:ring-[#ffd30a] cursor-pointer"
                    />
                    <label htmlFor="privacidad" className="text-xs text-[#ffffffe6] cursor-pointer leading-tight">
                      He leído y acepto la Política de Privacidad y el tratamiento de mis datos personales conforme a la <strong>Ley N.º 29733</strong>.
                    </label>
                  </div>

                  {/* Botón de Envío Amarillo Vibrante */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-md font-bold text-[#1b004e] text-base bg-[#ffd30a] hover:bg-[#ffe14d] shadow-lg shadow-amber-400/25 transition-all flex items-center justify-center gap-2 uppercase tracking-wide cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Enviando...</span>
                      ) : (
                        <>
                          <span>Enviar Mensaje</span>
                          <Send className="w-4 h-4 stroke-[2.5]" />
                        </>
                      )}
                    </button>
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

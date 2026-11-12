'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  BookOpen,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  Printer,
  Download,
  Info,
  Calendar,
  Building,
  Mail,
  User,
  FileCheck
} from 'lucide-react';
import { submitClaimToSupabase, ClaimPayload } from '@/lib/supabaseClient';

export default function LibroDeReclamacionesPage() {
  const [formData, setFormData] = useState<ClaimPayload>({
    fullName: '',
    docType: 'DNI',
    docNumber: '',
    email: '',
    phone: '',
    address: '',
    parentGuardianName: '',
    goodType: 'Servicio',
    claimedAmount: '',
    currency: 'PEN',
    goodDescription: 'Desarrollo de Software / Página Web / Sistema',
    claimType: 'Reclamo',
    incidentDetail: '',
    consumerRequest: '',
  });

  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSheet, setSubmittedSheet] = useState<{
    sheetNumber: string;
    createdAt: string;
    statutoryDaysLimit: number;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptedTerms) {
      alert('Debes confirmar la veracidad de la información y aceptar la notificación por correo.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await submitClaimToSupabase(formData);
      if (response.success && response.data) {
        setSubmittedSheet(response.data);
      }
    } catch (err) {
      console.error(err);
      alert('Ocurrió un error al procesar la reclamación. Inténtalo nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 selection:bg-cyan-500 selection:text-white">
      {/* Top Banner Navigation */}
      <header className="sticky top-0 z-40 bg-[#030712]/90 backdrop-blur-md border-b border-slate-800 py-4 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-cyan-400 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Volver al Inicio</span>
          </Link>

          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <BookOpen className="w-4 h-4" />
            </div>
            <span className="text-sm font-bold text-white">
              Libro de Reclamaciones Virtual
            </span>
          </div>
        </div>
      </header>

      {/* Hero Header */}
      <section className="relative py-12 border-b border-slate-900 bg-cyber-grid bg-radial-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/40 border border-amber-500/40 text-xs font-semibold text-amber-300 mb-4">
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            Conforme a la Ley N° 29571 y D.S. 011-2011-PCM
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Libro de Reclamaciones Virtual
          </h1>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto">
            Ponemos a tu disposición este canal oficial para registrar cualquier reclamo o queja sobre nuestros servicios tecnológicos. Tu requerimiento será atendido en un plazo máximo de 15 días hábiles.
          </p>
        </div>
      </section>

      {/* Formulario / Hoja de Reclamación */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        
        {/* Identificación del Proveedor */}
        <div className="mb-8 p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md">
          <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2 font-mono">
            Datos del Proveedor
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
            <div>
              <span className="text-slate-500 block">Razón Comercial:</span>
              <strong className="text-white">Muby_labs</strong>
            </div>
            <div>
              <span className="text-slate-500 block">Correo Oficial:</span>
              <span className="text-white">contacto@mubylabs.com</span>
            </div>
            <div>
              <span className="text-slate-500 block">Domicilio Legal:</span>
              <span className="text-white">Lima, Perú (Servicios en línea)</span>
            </div>
          </div>
        </div>

        {submittedSheet ? (
          /* Vista de Confirmación y Hoja Generada */
          <div className="p-8 sm:p-10 rounded-2xl bg-slate-900 border border-emerald-500/40 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="text-center pb-6 border-b border-slate-800">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-white">Hoja de Reclamación Registrada</h2>
              <p className="text-sm text-slate-300 mt-1">
                Tu solicitud ha sido guardada en nuestra base de datos legal y se ha emitido la constancia oficial.
              </p>
              <div className="inline-block mt-4 px-4 py-2 rounded-xl bg-slate-950 border border-cyan-500/30 text-cyan-300 font-mono text-sm font-bold">
                N° de Hoja: {submittedSheet.sheetNumber}
              </div>
            </div>

            {/* Resumen para el reclamante */}
            <div className="py-6 space-y-4 text-xs text-slate-300 border-b border-slate-800">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-slate-500 block">Fecha y Hora de Emisión:</span>
                  <span className="text-white font-medium">
                    {new Date(submittedSheet.createdAt).toLocaleString('es-PE')}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block">Plazo Legal de Respuesta:</span>
                  <span className="text-amber-400 font-semibold">
                    15 días hábiles improrrogables
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-slate-500 block">Consumidor:</span>
                  <span className="text-white">{formData.fullName} ({formData.docType}: {formData.docNumber})</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Correo Notificado:</span>
                  <span className="text-white">{formData.email}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-slate-500 block">Tipo:</span>
                  <span className="text-cyan-400 font-semibold">{formData.claimType}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Bien Contratado:</span>
                  <span className="text-white">{formData.goodDescription}</span>
                </div>
              </div>

              <div>
                <span className="text-slate-500 block">Detalle de los Hechos:</span>
                <p className="text-slate-200 mt-1 p-3 rounded-lg bg-slate-950 border border-slate-800 whitespace-pre-wrap">
                  {formData.incidentDetail}
                </p>
              </div>

              <div>
                <span className="text-slate-500 block">Pedido del Consumidor:</span>
                <p className="text-slate-200 mt-1 p-3 rounded-lg bg-slate-950 border border-slate-800 whitespace-pre-wrap">
                  {formData.consumerRequest}
                </p>
              </div>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={handlePrint}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
              >
                <Printer className="w-4 h-4" />
                <span>Imprimir / Guardar en PDF</span>
              </button>

              <button
                onClick={() => setSubmittedSheet(null)}
                className="w-full sm:w-auto text-xs text-slate-400 hover:text-white transition-colors"
              >
                Registrar otro reclamo o queja
              </button>
            </div>
          </div>
        ) : (
          /* Formulario de Reclamación */
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Sección 1: Datos del Consumidor */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
                <User className="w-5 h-5 text-cyan-400" />
                <h2 className="text-base font-bold text-white">
                  1. Identificación del Consumidor Reclamante
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Nombres y Apellidos Completos *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Ej. Juan Pérez Quispe"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Doc. *
                    </label>
                    <select
                      value={formData.docType}
                      onChange={(e) => setFormData({ ...formData, docType: e.target.value })}
                      className="w-full px-2 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500"
                    >
                      <option value="DNI">DNI</option>
                      <option value="CE">C.E.</option>
                      <option value="Pasaporte">Pasap.</option>
                      <option value="RUC">RUC</option>
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Número de Documento *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.docNumber}
                      onChange={(e) => setFormData({ ...formData, docNumber: e.target.value })}
                      placeholder="12345678"
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Correo Electrónico (Para recibir respuesta legal) *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="juan@ejemplo.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Teléfono Celular / Fijo *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="999 999 999"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Domicilio / Dirección del Reclamante *
                </label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Av. Principal 123, Distrito, Ciudad"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Padre, Madre o Tutor (Obligatorio en caso de ser menor de edad)
                </label>
                <input
                  type="text"
                  value={formData.parentGuardianName}
                  onChange={(e) => setFormData({ ...formData, parentGuardianName: e.target.value })}
                  placeholder="Completar únicamente si el reclamante es menor de edad"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            {/* Sección 2: Identificación del Bien Contratado */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
                <FileCheck className="w-5 h-5 text-cyan-400" />
                <h2 className="text-base font-bold text-white">
                  2. Identificación del Bien Contratado
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Tipo de Bien *
                  </label>
                  <div className="flex items-center gap-4 pt-2">
                    <label className="flex items-center gap-2 text-xs text-white cursor-pointer">
                      <input
                        type="radio"
                        name="goodType"
                        value="Servicio"
                        checked={formData.goodType === 'Servicio'}
                        onChange={() => setFormData({ ...formData, goodType: 'Servicio' })}
                        className="text-cyan-500 focus:ring-cyan-500"
                      />
                      <span>Servicio</span>
                    </label>
                    <label className="flex items-center gap-2 text-xs text-white cursor-pointer">
                      <input
                        type="radio"
                        name="goodType"
                        value="Producto"
                        checked={formData.goodType === 'Producto'}
                        onChange={() => setFormData({ ...formData, goodType: 'Producto' })}
                        className="text-cyan-500 focus:ring-cyan-500"
                      />
                      <span>Producto</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Monto Reclamado (Opcional)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.claimedAmount}
                    onChange={(e) => setFormData({ ...formData, claimedAmount: e.target.value })}
                    placeholder="0.00"
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Moneda
                  </label>
                  <select
                    value={formData.currency}
                    onChange={(e) => setFormData({ ...formData, currency: e.target.value as 'PEN' | 'USD' })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500"
                  >
                    <option value="PEN">Soles (PEN S/.)</option>
                    <option value="USD">Dólares (USD $)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Descripción del Producto o Servicio Contratado *
                </label>
                <input
                  type="text"
                  required
                  value={formData.goodDescription}
                  onChange={(e) => setFormData({ ...formData, goodDescription: e.target.value })}
                  placeholder="Ej. Desarrollo de tienda virtual Next.js / Licencia Sistema POS"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            {/* Sección 3: Detalle de la Reclamación */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
                <BookOpen className="w-5 h-5 text-amber-400" />
                <h2 className="text-base font-bold text-white">
                  3. Detalle de la Reclamación
                </h2>
              </div>

              {/* Selector Reclamo vs Queja con Explicación Legal */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div
                  onClick={() => setFormData({ ...formData, claimType: 'Reclamo' })}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    formData.claimType === 'Reclamo'
                      ? 'bg-cyan-950/40 border-cyan-500 text-white'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-sm text-cyan-400">RECLAMO</span>
                    <input
                      type="radio"
                      name="claimType"
                      checked={formData.claimType === 'Reclamo'}
                      onChange={() => {}}
                      className="text-cyan-500"
                    />
                  </div>
                  <p className="text-[11px] leading-relaxed">
                    Disconformidad relacionada a los bienes o servicios adquiridos (ej. entregables, funcionalidades pactadas o desempeño del software).
                  </p>
                </div>

                <div
                  onClick={() => setFormData({ ...formData, claimType: 'Queja' })}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    formData.claimType === 'Queja'
                      ? 'bg-amber-950/40 border-amber-500 text-white'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-sm text-amber-400">QUEJA</span>
                    <input
                      type="radio"
                      name="claimType"
                      checked={formData.claimType === 'Queja'}
                      onChange={() => {}}
                      className="text-amber-500"
                    />
                  </div>
                  <p className="text-[11px] leading-relaxed">
                    Disconformidad no relacionada a los productos o servicios; o malestar respecto a la atención recibida por parte del personal.
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Detalle de los Hechos (Explica claramente lo sucedido) *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.incidentDetail}
                  onChange={(e) => setFormData({ ...formData, incidentDetail: e.target.value })}
                  placeholder="Detalla fechas, acuerdos y el motivo puntual de tu disconformidad..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-500 resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Pedido Concreto del Consumidor (Qué solución solicitas) *
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.consumerRequest}
                  onChange={(e) => setFormData({ ...formData, consumerRequest: e.target.value })}
                  placeholder="Especifica qué acción esperas por parte de Muby_labs para solucionar el reclamo..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-500 resize-none"
                />
              </div>
            </div>

            {/* Aviso Legal y Aceptación */}
            <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-3">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300 leading-relaxed">
                  <strong className="text-white">Aviso Legal conforme a Ley:</strong> La formulación del reclamo no impide acudir a otras vías de solución de controversias ni es requisito previo para interponer una denuncia ante el INDECOPI. El proveedor deberá dar respuesta al reclamo en un plazo no mayor a quince (15) días hábiles improrrogables.
                </div>
              </div>

              <label className="flex items-start gap-3 pt-2 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                  className="mt-1 rounded border-slate-700 text-cyan-500 focus:ring-cyan-500"
                />
                <span className="text-xs text-slate-300">
                  Declaro que la información consignada en la presente hoja de reclamación es verídica y autorizo la notificación de la respuesta al correo electrónico indicado, conforme a lo establecido en la normativa vigente.
                </span>
              </label>
            </div>

            {/* Botón de Envío */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-amber-500 via-orange-600 to-amber-600 shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Registrando en Libro Oficial...</span>
              ) : (
                <>
                  <BookOpen className="w-4 h-4" />
                  <span>Enviar Hoja de Reclamación</span>
                </>
              )}
            </button>

          </form>
        )}

      </main>

      {/* Footer Legal Simple */}
      <footer className="border-t border-slate-900 py-8 px-4 text-center text-xs text-slate-500">
        <p>&copy; 2026 Muby_labs. Libro de Reclamaciones Virtual conforme a las disposiciones del INDECOPI.</p>
      </footer>
    </div>
  );
}

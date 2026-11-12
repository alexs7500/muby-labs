'use client';

import React from 'react';
import Link from 'next/link';
import { Terminal, Mail, Phone, MapPin, ArrowUp, BookOpen, ShieldCheck, FileText } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0a0020] text-white/80 border-t border-white/10 pt-14 pb-10 overflow-hidden">
      {/* Background glow subtle */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Columna Marca & Misión (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#ffd30a] text-[#1b004e] p-[1.5px] shadow-md">
                <Terminal className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                Muby<span className="text-[#ffd30a]">_labs</span>
              </span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Nos dedicamos a impulsar la transformación digital de los negocios mediante el desarrollo de software a medida y presencia web de alto impacto.
            </p>

            {/* Redes Sociales: WhatsApp, TikTok, Instagram, Facebook */}
            <div className="pt-1 flex items-center gap-2.5">
              <a
                href="https://wa.me/51946249008"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp al 946 249 008"
                className="w-9 h-9 rounded-full bg-[#25d366] text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-md"
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
                className="w-9 h-9 rounded-full bg-black border border-white/20 text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-md"
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
                className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-md"
                title="Instagram"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
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
                className="w-9 h-9 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-md"
                title="Facebook"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>

            {/* Badge de Cumplimiento Legal y Libro de Reclamaciones */}
            <div className="pt-2">
              <Link
                href="/libro-de-reclamaciones"
                id="footer-libro-reclamaciones-badge"
                className="group inline-flex items-center gap-3 p-2.5 pr-4 rounded-xl bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-900 border border-amber-500/40 hover:border-amber-400 transition-all duration-300 shadow-lg shadow-amber-950/20"
              >
                <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors flex items-center gap-1.5">
                    <span>Libro de Reclamaciones</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-400 font-mono">Virtual</span>
                  </div>
                  <div className="text-[10px] text-slate-400">
                    Conforme a Ley N° 29571
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Columna 1: Servicios */}
          <div className="space-y-3">
            <div className="text-sm font-semibold text-white tracking-wider uppercase">
              Servicios
            </div>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/servicios/diseno-web" className="text-cyan-300 hover:text-white font-medium transition-colors flex items-center gap-1">
                  <span>Diseño Web en Lima</span>
                  <span className="text-[10px] px-1 py-0.2 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30">Nuevo</span>
                </Link>
              </li>
              <li>
                <a href="/#servicios" className="hover:text-cyan-400 transition-colors">
                  Sistemas de Inventario
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-cyan-400 transition-colors">
                  Puntos de Venta (POS)
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-cyan-400 transition-colors">
                  E-Commerce & Pagos
                </a>
              </li>
              <li>
                <a href="#arquitectura" className="hover:text-cyan-400 transition-colors">
                  Integración Cloud Supabase
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 2: Empresa & Legal */}
          <div className="space-y-3">
            <div className="text-sm font-semibold text-white tracking-wider uppercase">
              Empresa & Legal
            </div>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="#inicio" className="hover:text-cyan-400 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-cyan-400 transition-colors">
                  Por qué elegirnos
                </a>
              </li>
              <li>
                <Link href="/terminos-y-condiciones" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Términos y Condiciones</span>
                </Link>
              </li>
              <li>
                <Link href="/libro-de-reclamaciones" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                  <span>Libro de Reclamaciones</span>
                </Link>
              </li>
              <li>
                <a href="#contacto" className="hover:text-cyan-400 transition-colors">
                  Cotizar Proyecto
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Información de Contacto */}
          <div className="space-y-3">
            <div className="text-sm font-semibold text-white tracking-wider uppercase">
              Contacto
            </div>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href="mailto:contacto@mubylabs.com"
                  className="hover:text-white transition-colors"
                >
                  contacto@mubylabs.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/51946249008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  +51 946 249 008
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Lima, Perú / Global Remote</span>
              </li>
              <li className="pt-2 text-xs text-slate-500">
                Horario: Lun - Sáb: 8:00 AM - 7:00 PM
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Legal Links & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <span>
              &copy; 2026 <strong className="text-slate-300 font-semibold">Muby_labs</strong>. Todos los derechos reservados.
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <Link href="/terminos-y-condiciones" className="text-slate-400 hover:text-cyan-400 underline underline-offset-4">
              Términos de Servicio
            </Link>
            <span className="hidden sm:inline text-slate-600">•</span>
            <Link href="/libro-de-reclamaciones" className="text-slate-400 hover:text-amber-400 underline underline-offset-4">
              Libro de Reclamaciones
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-slate-400 text-right hidden md:inline">
              Seguridad y Cumplimiento Normativo
            </span>
            <button
              onClick={scrollToTop}
              id="footer-back-to-top"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
              title="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

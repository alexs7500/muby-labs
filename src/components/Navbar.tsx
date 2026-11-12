'use client';

import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ArrowRight,
  Terminal,
  Home,
  Globe,
  Cpu,
  Layers,
  Users,
  HelpCircle,
  Send
} from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal?: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStartProject = () => {
    if (onOpenQuoteModal) {
      onOpenQuoteModal();
    } else {
      const el = document.getElementById('cotizar') || document.getElementById('contacto');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = '/#contacto';
      }
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#') || href.startsWith('#')) {
      const targetId = href.replace('/#', '').replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
      }
    }
  };

  const navLinks = [
    { name: 'Inicio', href: '/', icon: Home },
    { name: 'Diseño Web', href: '/servicios/diseno-web', icon: Globe },
    { name: 'Diseño de Sistemas', href: '/#sistemas', icon: Cpu },
    { name: 'Planes', href: '/#planes', icon: Layers },
    { name: 'Clientes', href: '/#clientes', icon: Users },
    { name: 'Preguntas', href: '/#faq', icon: HelpCircle },
    { name: 'Contacto', href: '/#cotizar', icon: Send },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1b004e]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-xl'
          : 'bg-[#1b004e] lg:bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Muby_labs */}
          <a
            href="/"
            id="nav-logo"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#ffd30a] text-[#1b004e] font-black shadow-md group-hover:scale-105 group-hover:rotate-3 transition-transform">
              <Terminal className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-white flex items-center gap-1 group-hover:text-[#ffd30a] transition-colors">
                Muby<span className="text-[#ffd30a] group-hover:text-white transition-colors">_labs</span>
              </span>
            </div>
          </a>

          {/* Enlaces centrales Desktop con Resaltado al Pasar el Puntero */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 px-3 py-1.5 rounded-full bg-[#130038]/85 border border-white/15 backdrop-blur-md shadow-2xl">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3.5 py-1.5 text-xs lg:text-sm font-bold rounded-full transition-all duration-200 inline-flex items-center gap-1.5 text-white/90 hover:text-[#1b004e] hover:bg-[#ffd30a] hover:shadow-[0_4px_25px_rgba(255,211,10,0.5)] hover:scale-105 active:scale-95 cursor-pointer group"
                >
                  <Icon className="w-3.5 h-3.5 text-white/70 group-hover:text-[#1b004e] transition-colors shrink-0" />
                  <span className="inline-flex">
                    {link.name.split('').map((char, charIdx) => (
                      <span
                        key={charIdx}
                        className="inline-block transition-transform duration-100 group-hover:scale-105"
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </span>
                    ))}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Botón CTA Desktop */}
          <div className="hidden md:flex items-center">
            <button
              onClick={handleStartProject}
              id="cta-nav-iniciar-proyecto"
              className="px-5 py-2.5 rounded-lg text-sm font-bold text-[#1b004e] bg-[#ffd30a] hover:bg-[#ffe14d] shadow-md shadow-amber-400/20 transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-1.5 uppercase tracking-wide cursor-pointer"
            >
              <span>Cotizar Ahora</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Botón Menú Mobile */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              aria-label="Abrir menú"
              className="p-2 rounded-lg bg-[#27006e] border border-white/10 text-white cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#ffd30a]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Drawer Mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1b004e] border-b border-white/10 px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200 shadow-2xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-3 rounded-xl text-base font-bold transition-all flex items-center justify-between text-white hover:text-[#1b004e] hover:bg-[#ffd30a] hover:shadow-lg active:scale-95 group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 text-[#ffd30a] group-hover:text-[#1b004e] transition-colors" />
                    <span>{link.name}</span>
                  </div>
                </a>
              );
            })}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleStartProject();
                }}
                id="cta-mobile-iniciar-proyecto"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-base font-bold text-[#1b004e] bg-[#ffd30a] shadow-lg shadow-amber-400/20 uppercase cursor-pointer"
              >
                <span>Cotizar Ahora</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

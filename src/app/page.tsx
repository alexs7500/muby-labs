'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { DisenoWebHero } from '@/components/diseno-web/DisenoWebHero';
import { DisenoWebSteps } from '@/components/diseno-web/DisenoWebSteps';
import { DisenoWebFastSection } from '@/components/diseno-web/DisenoWebFastSection';
import { DisenoSistemasSection } from '@/components/diseno-web/DisenoSistemasSection';
import { DisenoWebClients } from '@/components/diseno-web/DisenoWebClients';
import { DisenoWebMidCta } from '@/components/diseno-web/DisenoWebMidCta';
import { DisenoWebPlans } from '@/components/diseno-web/DisenoWebPlans';
import { DisenoWebReviews } from '@/components/diseno-web/DisenoWebReviews';
import { DisenoWebGeoSection } from '@/components/diseno-web/DisenoWebGeoSection';
import { DisenoWebFAQ } from '@/components/diseno-web/DisenoWebFAQ';
import { DisenoWebContactForm } from '@/components/diseno-web/DisenoWebContactForm';
import { WhatsAppFloat } from '@/components/diseno-web/WhatsAppFloat';
import { Services } from '@/components/Services';
import { SupabaseArchitecture } from '@/components/SupabaseArchitecture';

export default function Home() {
  const [selectedService, setSelectedService] = useState<string>('Corporativo');

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    const contactEl = document.getElementById('cotizar');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1a1a1a]" suppressHydrationWarning>
      {/* 1. Header con navegación fija */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Banner: Diseñamos páginas web rápidas para Google en Lima, Perú 🚀 */}
        <DisenoWebHero />

        {/* 3. Metodología: Analizamos, Desarrollamos, Optimizamos */}
        <DisenoWebSteps />

        {/* 4. Página Web Veloz para Google (Checklist de 10 puntos) */}
        <DisenoWebFastSection />

        {/* 5. Diseño de Sistemas a Medida (Casos y Ejemplos Reales con Modal) */}
        <DisenoSistemasSection />

        {/* 6. Ellos confían en nosotros (Clientes y portafolio) */}
        <DisenoWebClients />

        {/* 6. Banner Intermedio de Asesoría */}
        <DisenoWebMidCta />

        {/* 7. Planes de Diseño Web (Landing Page, Corporativo Destacado, Tienda Virtual) */}
        <DisenoWebPlans onSelectPlan={handleSelectService} />

        {/* 8. Reseñas de Google / Testimonios Reales */}
        <DisenoWebReviews />

        {/* 9. SEO & GEO: Posicionamiento en Lima y todo el Perú */}
        <DisenoWebGeoSection />

        {/* 10. Preguntas Frecuentes sobre Diseño Web */}
        <DisenoWebFAQ />

        {/* 11. Formulario de Cotización Express */}
        <DisenoWebContactForm initialPlan={selectedService} />
      </main>

      {/* 13. Footer Corporativo con Libro de Reclamaciones */}
      <Footer />

      {/* 14. Botón Flotante Permanente de WhatsApp */}
      <WhatsAppFloat />
    </div>
  );
}

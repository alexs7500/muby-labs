import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'Diseño Web & Diseño de Sistemas a Medida en Lima | Muby Labs',
  description:
    'Diseñamos páginas web rápidas y diseño de sistemas a medida para tu negocio en Lima, Perú. Más de 1800 sitios entregados en 10 años. Hosting, dominio y optimización Google incluidos. Cotiza gratis.',
  keywords: [
    'diseño web en lima',
    'diseño de sistemas a medida para tu negocio',
    'sistemas a medida lima peru',
    'paginas web corporativas',
    'diseño de paginas web lima peru',
    'precio de paginas web lima',
    'tiendas virtuales lima',
    'landing page de alta conversion',
    'diseño web santiago de surco miraflores san isidro',
    'seo local lima',
    'geolocalizacion web peru'
  ],
  alternates: {
    canonical: 'https://mubylabs.com/servicios/diseno-web',
  },
  openGraph: {
    title: 'Diseño Web & Sistemas a Medida en Lima | Muby Labs',
    description:
      'Diseñamos páginas web rápidas y diseño de sistemas a medida para tu negocio en Lima, Perú 🚀.',
    url: 'https://mubylabs.com/servicios/diseno-web',
    siteName: 'Muby Labs',
    locale: 'es_PE',
    type: 'website',
  },
  other: {
    'geo.region': 'PE-LIM',
    'geo.placename': 'Lima, Perú',
    'geo.position': '-12.046374;-77.042793',
    'ICBM': '-12.046374, -77.042793',
  },
};

export default function DisenoWebPage() {
  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Muby Labs - Páginas Web Corporativas en Lima',
    url: 'https://mubylabs.com/servicios/diseno-web',
    description:
      'Diseñamos páginas web rápidas, modernas y optimizadas para Google en Lima, Perú. Más de 1800 sitios entregados en 10 años. Planes desde Landing Page hasta Tienda Virtual con hosting, dominio y SSL incluidos.',
    telephone: '+51946249008',
    email: 'ventas@mubylabs.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lima',
      addressCountry: 'PE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -12.046374,
      longitude: -77.042793,
    },
    areaServed: 'PE',
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '42',
      bestRating: '5',
      worstRating: '1',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Cuánto cuesta una página web en Lima?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nuestros planes inician desde una Landing Page básica hasta una Tienda Virtual completa. Escríbenos por WhatsApp o llena el formulario y te enviamos una cotización sin compromiso en menos de 2 horas.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cuánto demora la entrega?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Una Landing Page está lista en 2 a 3 días hábiles, mientras que un sitio corporativo o tienda virtual toma entre 6 y 7 días.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Incluye hosting, dominio y certificado SSL?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, todos nuestros planes incluyen hosting SSD de alta velocidad y dominio .com por el 1er año, certificado SSL de por vida y correos corporativos.',
        },
      },
    ],
  };

  const breadcrumbsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: 'https://mubylabs.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Diseño Web en Lima',
        item: 'https://mubylabs.com/servicios/diseno-web',
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1a1a1a]" suppressHydrationWarning>
      {/* Microdatos Estructurados JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />

      {/* Header Fijo */}
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero Banner Principal + Barra de Estadísticas */}
        <DisenoWebHero />

        {/* 2. Metodología: Analizamos, Desarrollamos, Optimizamos */}
        <DisenoWebSteps />

        {/* 3. Página Web Veloz para Google (Checklist de 10 puntos) */}
        <DisenoWebFastSection />

        {/* 4. Diseño de Sistemas a Medida con Ejemplos Reales */}
        <DisenoSistemasSection />

        {/* 5. Ellos confían en nosotros (Portafolio de Clientes) */}
        <DisenoWebClients />

        {/* 5. Banner Asesoría Intermedio */}
        <DisenoWebMidCta />

        {/* 6. Planes de Diseño Web (Landing Page, Corporativo Destacado, Tienda Virtual) */}
        <DisenoWebPlans />

        {/* 7. Reseñas de Google / Testimonios */}
        <DisenoWebReviews />

        {/* 8. Estrategia SEO & GEO en Lima y Provincias */}
        <DisenoWebGeoSection />

        {/* 9. Preguntas Frecuentes */}
        <DisenoWebFAQ />

        {/* 10. Formulario de Cotización Express */}
        <DisenoWebContactForm />
      </main>

      {/* Footer */}
      <Footer />

      {/* Botón WhatsApp Flotante */}
      <WhatsAppFloat />
    </div>
  );
}

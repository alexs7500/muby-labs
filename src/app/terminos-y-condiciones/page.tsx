import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowLeft,
  Shield,
  FileText,
  Lock,
  Scale,
  Cpu,
  Clock,
  BookOpen,
  CheckCircle2,
  Terminal,
  HelpCircle,
  Building
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Términos y Condiciones | Muby_labs',
  description: 'Términos y condiciones legales para la contratación y prestación de servicios de software, desarrollo web y sistemas cloud de Muby_labs.',
};

export default function TerminosYCondicionesPage() {
  const lastUpdated = '28 de Octubre de 2026';

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 selection:bg-cyan-500 selection:text-white">
      {/* Top Banner / Navbar Simple */}
      <header className="sticky top-0 z-40 bg-[#030712]/90 backdrop-blur-md border-b border-slate-800 py-4 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-cyan-400 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Volver a Muby_labs</span>
          </Link>

          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-600 to-blue-600 p-[1px]">
              <div className="w-full h-full bg-[#070d1d] rounded-[7px] flex items-center justify-center">
                <Terminal className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
            <span className="text-base font-bold text-white">
              Muby<span className="text-cyan-400">_labs</span> Legal
            </span>
          </div>
        </div>
      </header>

      {/* Hero Header */}
      <section className="relative py-16 sm:py-20 border-b border-slate-900 bg-cyber-grid bg-radial-gradient overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-semibold text-cyan-300 mb-4">
            <Scale className="w-3.5 h-3.5 text-cyan-400" />
            Marco Legal y Normativa de Contratación
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Términos y Condiciones de Uso y Servicio
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Por favor, lee con detenimiento las cláusulas que rigen la navegación en este sitio web y la contratación de los servicios de ingeniería de software brindados por <span className="text-cyan-400 font-semibold">Muby_labs</span>.
          </p>
          <div className="mt-4 text-xs font-mono text-slate-400">
            Última actualización: {lastUpdated} • Versión 2.4
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="space-y-12 text-slate-300 text-sm leading-relaxed">
          
          {/* Card Resumen Legal */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-3 text-cyan-400 font-semibold text-base">
              <Shield className="w-5 h-5 shrink-0" />
              <span>Resumen de Confianza y Compromiso Muby_labs</span>
            </div>
            <p className="text-xs text-slate-300 leading-normal">
              En <strong className="text-white">Muby_labs</strong> valoramos la transparencia y la seguridad jurídica. Todo desarrollo de páginas web, sistemas de control de inventario y terminales de punto de venta (POS) se entrega con respaldo de confidencialidad, garantías técnicas contra defectos de programación y respeto irrestricto de los derechos de autor y protección de datos.
            </p>
          </div>

          {/* 1. Información General */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2.5 pb-2 border-b border-slate-800">
              <span className="text-cyan-400 font-mono text-base">01.</span>
              Información General y Aceptación
            </h2>
            <p>
              El presente documento establece las condiciones generales que regulan el acceso, navegación y uso del portal web oficial de <strong className="text-white">Muby_labs</strong>, así como los términos aplicables a las propuestas comerciales, cotizaciones y contratos de desarrollo de software a medida.
            </p>
            <p>
              Al navegar en este sitio o solicitar cotizaciones mediante nuestros formularios interactivos, el usuario o cliente declara haber leído, comprendido y aceptado en su totalidad estos Términos y Condiciones, así como nuestra Política de Privacidad vinculada.
            </p>
          </section>

          {/* 2. Objeto de los Servicios */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2.5 pb-2 border-b border-slate-800">
              <span className="text-cyan-400 font-mono text-base">02.</span>
              Alcance y Objeto de los Servicios
            </h2>
            <p>
              Muby_labs es una agencia y laboratorio tecnológico especializado en la transformación digital y el desarrollo de software de alto rendimiento, incluyendo principalmente:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li>
                <strong className="text-white">Páginas Web y Comercio Electrónico:</strong> Sitios web corporativos, landing pages de alta conversión, catálogos interactivos y tiendas virtuales construidas con Next.js y React.
              </li>
              <li>
                <strong className="text-white">Sistemas de Inventario:</strong> Software para gestión de existencias, control de almacenes, trazabilidad de entradas/salidas y sincronización en tiempo real vía bases de datos en la nube (Supabase / PostgreSQL).
              </li>
              <li>
                <strong className="text-white">Sistemas de Ventas (POS):</strong> Interfaces de facturación ágil, arqueos de caja, generación de comprobantes y reportes comerciales adaptados a puntos de atención física o virtual.
              </li>
              <li>
                <strong className="text-white">Consultoría y Arquitectura Cloud:</strong> Integración de APIs, autenticación segura con políticas RLS y despliegues en infraestructura escalable.
              </li>
            </ul>
          </section>

          {/* 3. Cotizaciones y Contratación */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2.5 pb-2 border-b border-slate-800">
              <span className="text-cyan-400 font-mono text-base">03.</span>
              Cotizaciones, Propuestas Técnicas y Contratación
            </h2>
            <p>
              Toda solicitud enviada mediante nuestros formularios virtuales (botón <em>&ldquo;Cotizar ahora&rdquo;</em> o <em>&ldquo;Iniciar Proyecto&rdquo;</em>) constituye un requerimiento preliminar no vinculante. Tras evaluar los requerimientos técnicos:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-slate-300">
              <li>Muby_labs emitirá una <strong>Propuesta Técnica y Económica</strong> formal con desglose de entregables, plazos de ejecución (Sprints) e hitos de pago.</li>
              <li>El inicio de cualquier desarrollo estará condicionado a la aprobación explícita de dicha propuesta y a la formalización del respectivo contrato o abono inicial acordado.</li>
              <li>Cualquier funcionalidad o módulo adicional que no figure explícitamente en el alcance original será presupuestado como requerimiento de cambio adicional.</li>
            </ol>
          </section>

          {/* 4. Propiedad Intelectual */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2.5 pb-2 border-b border-slate-800">
              <span className="text-cyan-400 font-mono text-base">04.</span>
              Propiedad Intelectual y Licenciamiento
            </h2>
            <p>
              Una vez cancelada la totalidad de los honorarios pactados en el contrato del proyecto, el cliente adquiere la titularidad sobre los entregables y diseños específicos creados para su empresa.
            </p>
            <p>
              Muby_labs se reserva el derecho de conservar y reutilizar sus librerías base, patrones de arquitectura de software, componentes modulares abstractos y código de uso general que formen parte de su conocimiento técnico acumulado. Asimismo, el cliente autoriza a Muby_labs a exhibir el trabajo realizado en su portafolio comercial, salvo suscripción previa de un acuerdo de estricta confidencialidad (NDA).
            </p>
          </section>

          {/* 5. Infraestructura Cloud y Servicios de Terceros */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2.5 pb-2 border-b border-slate-800">
              <span className="text-cyan-400 font-mono text-base">05.</span>
              Infraestructura Cloud, Supabase y Proveedores Externos
            </h2>
            <p>
              Nuestras soluciones emplean infraestructura en la nube de proveedores de primer nivel (como Supabase para bases de datos PostgreSQL, Vercel/AWS para hosting y CDN, y pasarelas de pago certificadas).
            </p>
            <p>
              El cliente reconoce que la disponibilidad de dichos servicios externos se rige por los acuerdos de nivel de servicio (SLA) de dichos proveedores. Muby_labs implementará las mejores prácticas de redundancia, copias de seguridad y seguridad informática, pero no será responsable por interrupciones atribuibles a fallas masivas de internet, proveedores de telecomunicaciones o suspensión de cuentas por impago del cliente a dichos servicios externos.
            </p>
          </section>

          {/* 6. Garantía de Software y Soporte */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2.5 pb-2 border-b border-slate-800">
              <span className="text-cyan-400 font-mono text-base">06.</span>
              Garantía de Software y Soporte Técnico Continuo
            </h2>
            <p>
              Muby_labs otorga una garantía de soporte correctivo de treinta (30) días calendario posteriores al pase a producción para solventar sin costo cualquier incidencia o falla atribuible al código fuente entregado.
            </p>
            <p>
              La garantía quedará sin efecto si el código fuente, la base de datos o las configuraciones del servidor son modificados por terceros no autorizados por escrito por Muby_labs.
            </p>
          </section>

          {/* 7. Protección de Datos Personales */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2.5 pb-2 border-b border-slate-800">
              <span className="text-cyan-400 font-mono text-base">07.</span>
              Protección de Datos Personales y Confidencialidad
            </h2>
            <p>
              En estricto cumplimiento de la normativa de Protección de Datos Personales (Ley N° 29733 y su reglamento), los datos suministrados en nuestros formularios serán tratados con absoluta confidencialidad y empleados exclusivamente para fines de contacto comercial, presupuestos y ejecución de los servicios solicitados.
            </p>
            <p>
              El usuario podrá ejercer en cualquier momento sus derechos de acceso, rectificación, cancelación y oposición (derechos ARCO) escribiendo a nuestro correo oficial: <strong className="text-cyan-400">contacto@mubylabs.com</strong>.
            </p>
          </section>

          {/* 8. Libro de Reclamaciones */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2.5 pb-2 border-b border-slate-800">
              <span className="text-cyan-400 font-mono text-base">08.</span>
              Libro de Reclamaciones y Protección al Consumidor
            </h2>
            <p>
              En cumplimiento del Código de Protección y Defensa del Consumidor (Ley N° 29571) y el D.S. N° 011-2011-PCM, Muby_labs pone a disposición de todos sus usuarios su <Link href="/libro-de-reclamaciones" className="text-cyan-400 hover:underline font-semibold">Libro de Reclamaciones Virtual</Link>.
            </p>
            <p>
              Cualquier queja o reclamo registrado en nuestro libro virtual generará un número correlativo formal y recibirá respuesta debidamente motivada dentro del plazo legal de quince (15) días hábiles.
            </p>
          </section>

          {/* 9. Legislación Aplicable */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2.5 pb-2 border-b border-slate-800">
              <span className="text-cyan-400 font-mono text-base">09.</span>
              Legislación Aplicable y Jurisdicción
            </h2>
            <p>
              Estos Términos y Condiciones se interpretan de conformidad con las leyes de la República del Perú. Para la resolución de cualquier discrepancia o controversia que no pueda solucionarse de mutuo acuerdo, las partes se someten a la competencia de los jueces y tribunales del distrito judicial de Lima, Perú.
            </p>
          </section>

          {/* Canales de Asistencia Legal */}
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-white font-semibold">¿Tienes alguna consulta legal o contractual?</div>
              <div className="text-xs text-slate-400">Escríbenos a contacto@mubylabs.com y te atenderemos a la brevedad.</div>
            </div>
            <Link
              href="/#contacto"
              className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold transition-colors shrink-0"
            >
              Contactar Soporte Legal
            </Link>
          </div>

        </div>
      </main>

      {/* Footer Simple */}
      <footer className="border-t border-slate-900 py-8 px-4 text-center text-xs text-slate-500">
        <p>&copy; 2026 Muby_labs. Todos los derechos reservados. Cumplimiento legal y normativo.</p>
      </footer>
    </div>
  );
}

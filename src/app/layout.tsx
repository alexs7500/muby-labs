import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#030712",
};

export const metadata: Metadata = {
  title: "Muby_labs | Desarrollo de Software a Medida & Transformación Digital",
  description: "Impulsamos la transformación digital de tu negocio con páginas web de alto rendimiento, sistemas de control de inventario y puntos de venta (POS) escalables.",
  keywords: [
    "Muby_labs",
    "desarrollo de software a medida",
    "páginas web profesionales",
    "sistemas de inventario en tiempo real",
    "sistema de ventas POS",
    "Next.js y Supabase",
    "transformación digital empresas"
  ],
  authors: [{ name: "Muby_labs Team" }],
  openGraph: {
    title: "Muby_labs | Software a Medida & Presencia Web",
    description: "Digitalizamos y escalamos tu negocio con tecnología a medida: Sitios Web, Control de Inventario y Sistemas POS.",
    type: "website",
    locale: "es_LA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  // Silenciar la advertencia de hidratación provocada por la extensión ColorZilla / Bitwarden en desarrollo
                  var origError = console.error;
                  console.error = function() {
                    var msg = arguments[0];
                    if (typeof msg === 'string' && (msg.indexOf('bis_skin_checked') !== -1 || msg.indexOf('bis_register') !== -1)) {
                      return;
                    }
                    origError.apply(console, arguments);
                  };

                  function cleanExtAttrs(node) {
                    if (node && node.nodeType === 1) {
                      if (node.hasAttribute('bis_skin_checked')) node.removeAttribute('bis_skin_checked');
                      if (node.hasAttribute('bis_register')) node.removeAttribute('bis_register');
                      for (var i = node.attributes.length - 1; i >= 0; i--) {
                        var name = node.attributes[i].name;
                        if (name.indexOf('bis_') === 0 || name.indexOf('__processed_') === 0) {
                          node.removeAttribute(name);
                        }
                      }
                    }
                  }
                  var observer = new MutationObserver(function(mutations) {
                    for (var i = 0; i < mutations.length; i++) {
                      var m = mutations[i];
                      if (m.type === 'attributes') {
                        cleanExtAttrs(m.target);
                      } else if (m.type === 'childList') {
                        for (var j = 0; j < m.addedNodes.length; j++) {
                          cleanExtAttrs(m.addedNodes[j]);
                        }
                      }
                    }
                  });
                  observer.observe(document.documentElement, {
                    subtree: true,
                    attributes: true,
                    childList: true,
                    attributeFilter: ['bis_skin_checked', 'bis_register']
                  });
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className="min-h-screen bg-white text-[#1a1a1a] antialiased selection:bg-[#ffd30a] selection:text-[#1b004e] flex flex-col"
        suppressHydrationWarning
      >
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined' && 'serviceWorker' in navigator && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
                navigator.serviceWorker.getRegistrations().then(function(regs) {
                  for (var r of regs) { r.unregister(); }
                });
                if ('caches' in window) {
                  caches.keys().then(function(names) {
                    for (var n of names) { caches.delete(n); }
                  });
                }
              }
            `,
          }}
        />
      </body>
    </html>
  );
}

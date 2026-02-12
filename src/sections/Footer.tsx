import { useEffect, useRef } from 'react';
import { assetUrl } from '@/lib/assets';

const footerLinks = {
  salesSupport: {
    title: 'Ventas y Soporte',
    links: [
      { label: '+44 20 3002 6662', href: 'tel:+442030026662' },
      { label: 'Chat en vivo', href: '#' },
      { label: 'Correo electrónico', href: 'mailto:support@paggo.com' },
      { label: 'Contactar Ventas', href: '#' },
    ],
  },
  products: {
    title: 'Productos',
    links: [
      { label: 'Aceptar Pagos', href: '#' },
      { label: 'Punto de Venta', href: '#' },
      { label: 'Banca Paggo', href: '#' },
    ],
  },
  hardware: {
    title: 'Hardware',
    links: [
      { label: 'Plus', href: '#' },
      { label: 'Mini', href: '#' },
      { label: 'Tap', href: '#' },
    ],
  },
  pages: {
    title: 'Páginas',
    links: [
      { label: 'Empresas', href: '#' },
      { label: 'Socios', href: '#' },
    ],
  },
};

const legalLinks = [
  { label: 'Política de Envíos', href: '#' },
  { label: 'Política del Sitio', href: '#' },
  { label: 'Términos de Servicio', href: '#' },
  { label: 'Política de Privacidad', href: '#' },
  { label: 'Política de Cookies', href: '#' },
];

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="text-white py-16 animate-on-scroll animate-fade-up"
      style={{ backgroundColor: '#212167' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <img
                src={assetUrl('/paggo-logo-Blanco.webp')}
                alt="Paggo"
                className="h-10 w-auto"
              />
            </a>
          </div>

          {/* Sales & Support */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              {footerLinks.salesSupport.title}
            </h4>
            <ul className="space-y-3">
              {footerLinks.salesSupport.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="footer-link transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              {footerLinks.products.title}
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="footer-link transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hardware */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              {footerLinks.hardware.title}
            </h4>
            <ul className="space-y-3">
              {footerLinks.hardware.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="footer-link transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-semibold text-white mb-4">
              {footerLinks.pages.title}
            </h4>
            <ul className="space-y-3">
              {footerLinks.pages.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="footer-link transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              © 2025 Paggo LTD. Número de empresa 14543620. Todos los derechos reservados.
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-4">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="footer-link transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

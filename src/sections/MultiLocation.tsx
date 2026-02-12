import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export function MultiLocation() {
  const sectionRef = useRef<HTMLElement>(null);

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
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            <span className="inline-block text-teal-400 text-sm font-semibold tracking-wider uppercase mb-4 animate-on-scroll animate-fade-up">
              Inteligencia Real
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 animate-on-scroll animate-fade-up stagger-1">
              Inteligencia para entender
              <br />
              <span className="text-gray-500">mejor a tu negocio</span>
            </h2>
          </div>

          {/* Right: Description + CTA */}
          <div className="lg:text-right">
            <p className="text-gray-400 text-lg mb-6 animate-on-scroll animate-fade-up stagger-2">
              Gestiona cada sitio desde un dashboard. Estandariza menús, permisos de personal, precios y reportes en todas tus ubicaciones — mientras mantienes a los equipos locales rápidos e independientes.
            </p>
            <a
              href="#explore"
              className="inline-flex items-center gap-2 text-teal-400 font-medium hover:text-teal-300 transition-colors animate-on-scroll animate-fade-up stagger-3"
            >
              Explorar Punto de Venta
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

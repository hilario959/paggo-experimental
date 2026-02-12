import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { assetUrl } from '@/lib/assets';

const hardware = [
  {
    name: 'Mini',
    description: 'Terminal de bolsillo con 5G para aceptar pagos en cualquier lugar.',
    image: assetUrl('/hardware-mini.png'),
    imageClass: 'scale-50',
  },
  {
    name: 'Plus',
    description: 'Terminal todo en uno con POS integrado y pagos 5G ultrarrápidos.',
    image: assetUrl('/hardware-plus.png'),
    imageClass: 'scale-85',
  },
  {
    name: 'Tap',
    description: 'Acepta pagos sin contacto en tu iPhone o Android, en cualquier momento y lugar.',
    image: assetUrl('/hardware-tap.png'),
    imageClass: 'scale-105',
  },
  {
    name: 'Punto de venta',
    description: 'Gestiona mesas, pedidos, cocina y servicio en un solo POS.',
    image: assetUrl('/hardware-punto-venta.png'),
    imageClass: 'scale-110',
  },
];

export function HardwareOptions() {
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

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <div className="mb-6 lg:mb-0">
            <span className="inline-block text-navy-500 text-sm font-semibold tracking-wider uppercase mb-4 animate-on-scroll animate-fade-up">
              Opciones de hardware
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 animate-on-scroll animate-fade-up stagger-1">
              Explora el hardware
              <br />
              de Paggo
            </h2>
          </div>
          <div className="lg:text-right">
            <p className="text-gray-600 max-w-md mb-4 animate-on-scroll animate-fade-up stagger-2">
              Explora la gama de hardware Paggo — minimalista, moderno y diseñado para un servicio perfecto.
            </p>
            <a
              href="#explore"
              className="inline-flex items-center gap-2 text-navy-500 font-medium hover:text-navy-600 transition-colors animate-on-scroll animate-fade-up stagger-3"
            >
              Explorar
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Hardware Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hardware.map((item, index) => (
            <div
              key={item.name}
              className={`group bg-gray-50 rounded-2xl overflow-hidden card-hover animate-on-scroll animate-fade-up stagger-${index + 1}`}
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden bg-white p-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className={`w-full h-full object-contain object-center img-hover ${item.imageClass ?? ''}`}
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-gray-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

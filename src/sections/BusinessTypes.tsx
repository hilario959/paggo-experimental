import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { assetUrl } from '@/lib/assets';

const businesses = [
  { name: 'Tiendas de conveniencia', image: assetUrl('/business-conveniencia.jpg') },
  { name: 'Restaurantes de servicio rápido', image: assetUrl('/business-6.jpg') },
  { name: 'Cafeterías', image: assetUrl('/business-2.jpg') },
  { name: 'Venta de ropa', image: assetUrl('/business-ropa.jpg') },
  { name: 'Negocios de servicios', image: assetUrl('/business-7.jpg') },
  { name: 'Talleres mecánicos', image: assetUrl('/business-taller.jpg') },
  { name: 'Barberías y salones de belleza', image: assetUrl('/business-barberia.jpg'), imageClass: 'scale-125' },
];
const businessesLoop = [...businesses, ...businesses];

export function BusinessTypes() {
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
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">
          <div className="mb-6 lg:mb-0">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 animate-on-scroll animate-fade-up">
              Construido para todo tipo de negocios
            </h2>
            <p className="text-xl text-gray-400 animate-on-scroll animate-fade-up stagger-1">
              Enfócate en el servicio, no en los sistemas
            </p>
          </div>
          <p className="text-gray-600 max-w-md animate-on-scroll animate-fade-up stagger-2">
            Ya sea que estés cerrando una cuenta, atendiendo a un cliente o sirviendo la hora pico — Paggo es sin esfuerzo desde el primer toque, para que tu equipo pueda mantenerse enfocado en el huésped.
          </p>
        </div>

        {/* Link */}
        <a
          href="#explore"
          className="inline-flex items-center gap-2 text-navy-500 font-medium mt-6 hover:text-navy-600 transition-colors animate-on-scroll animate-fade-up stagger-3"
        >
          Explorar Punto de Venta
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Auto Carousel Cards */}
      <div className="industry-carousel-wrap pl-4 sm:pl-6 lg:pl-8 animate-on-scroll animate-fade-up stagger-3">
        <div className="industry-carousel-track pb-4">
          {businessesLoop.map((business, index) => (
            <div
              key={`${business.name}-${index}`}
              className="industry-carousel-card relative w-[280px] sm:w-[320px] h-[400px] rounded-2xl overflow-hidden group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <img
                src={business.image}
                alt={business.name}
                className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${business.imageClass ?? ''}`}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Label */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-xl font-semibold">
                  {business.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

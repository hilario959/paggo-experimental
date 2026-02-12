import { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { assetUrl } from '@/lib/assets';

const products = [
  {
    id: 'payments',
    title: 'Pagos',
    description: 'Acepta pagos con tarjeta con terminales modernos, pagos instantáneos y precios transparentes.',
    link: 'Pagos',
    image: assetUrl('/pagos-claro.png'),
  },
  {
    id: 'pos',
    title: 'Gestión de Negocios',
    description: 'Gestiona mesas, pedidos, flujo de cocina y reservas en un POS intuitivo, más rápido e inteligente.',
    link: 'Gestión de Negocios',
    image: assetUrl('/gestion-negocios-image.png'),
  },
  {
    id: 'intelligence',
    title: 'Banca',
    description: 'Automatiza tu negocio de principio a fin — desde reservas y POS hasta finanzas de back office.',
    link: 'Banca',
    image: assetUrl('/banca-clara.png'),
  },
];

export function ProductCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % products.length);
  };

  return (
    <section ref={sectionRef} className="py-16 bg-white animate-on-scroll animate-fade-up overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Carousel Container - Shows multiple cards */}
        <div className="relative">
          <div 
            className="flex transition-transform duration-500 ease-out gap-6"
            style={{ transform: `translateX(-${activeIndex * (100 / 2.5)}%)` }}
          >
            {products.map((product) => (
              <div 
                key={product.id} 
                className="flex-shrink-0 w-[85%] sm:w-[70%] lg:w-[calc(50%-12px)]"
              >
                {/* Large Image Card */}
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-gray-100 mb-6">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="flex items-start justify-between">
                  <div className="flex-1 pr-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-teal-500 font-medium hover:text-teal-600 transition-colors whitespace-nowrap"
                  >
                    {product.link}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-12">
          {/* Dots */}
          <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex ? 'bg-gray-800 w-8' : 'bg-gray-400 w-2'
                }`}
              />
            ))}
          </div>
          
          {/* Arrow Button */}
          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-teal-500 hover:bg-teal-600 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}

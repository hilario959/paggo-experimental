import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { assetUrl } from '@/lib/assets';
import { OptimizedImage } from '@/components/media/OptimizedImage';

export function CTASection() {
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
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Sales Team Card */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/10] animate-on-scroll animate-scale-in">
            <OptimizedImage
              src={assetUrl('/cta-sales.jpg')}
              alt="Empieza por Q40.00 / mes"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Empieza por Q40.00 / mes
              </h3>
              <Button
                className="w-fit bg-teal-500 hover:bg-teal-600 text-white rounded-full px-6 btn-hover group"
              >
                Comenzar
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Shop Hardware Card */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/10] animate-on-scroll animate-scale-in stagger-1">
            <OptimizedImage
              src={assetUrl('/cta-hardware.jpg')}
              alt="Escala tu negocio con Paggo"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Escala por Q400.00 / mes
              </h3>
              <Button
                className="w-fit bg-teal-500 hover:bg-teal-600 text-white rounded-full px-6 btn-hover group"
              >
                Ver Planes
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

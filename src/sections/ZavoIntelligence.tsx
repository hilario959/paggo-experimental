import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, Monitor, Phone, Users } from 'lucide-react';

const aiFeatures = [
  {
    id: 'liquidaciones',
    name: 'Liquidaciones Diarias',
    description: 'Tu co-piloto de IA para el negocio. Obtén insights, automatiza tareas y realiza cambios en el menú o en todo el sistema al instante.',
    link: 'Banca',
    icon: Sparkles,
  },
  {
    id: 'servicios',
    name: 'Pago de servicios e impuestos',
    description: 'Sugerencias inteligentes de pedidos, ventas adicionales automáticas y gestión inteligente de inventario.',
    icon: Monitor,
  },
  {
    id: 'cashout',
    name: 'Cash out en cajeros',
    description: 'Gestión automatizada de reservas, optimización de mesas y seguimiento de preferencias de huéspedes.',
    icon: Phone,
  },
  {
    id: 'planilla',
    name: 'Planilla',
    description: 'Gestiona la nómina de tu equipo de forma automática y eficiente.',
    icon: Users,
  },
];

export function ZavoIntelligence() {
  const [activeFeature, setActiveFeature] = useState('liquidaciones');
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
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-dark rounded-3xl overflow-hidden animate-on-scroll animate-fade-up">
          <div className="p-8 lg:p-12">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
              <div>
                <span className="inline-block text-navy-400 text-sm font-semibold tracking-wider uppercase mb-4">
                  Banca Paggo
                </span>
                <h2 className="text-4xl sm:text-5xl font-bold text-white">
                  Banca Empresarial construida
                  <br />
                  <span className="text-gray-500">para ti</span>
                </h2>
              </div>
              <a
                href="#explore"
                className="inline-flex items-center gap-2 text-navy-400 font-medium mt-6 lg:mt-0 hover:text-navy-300 transition-colors"
              >
                Explorar Banca
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: AI Features List */}
              <div className="space-y-4">
                {aiFeatures.map((feature) => (
                  <div
                    key={feature.id}
                    className={`border-b border-gray-800 pb-4 cursor-pointer transition-all ${
                      activeFeature === feature.id ? 'bg-gray-800/50 -mx-4 px-4 py-4 rounded-xl border-b-0' : ''
                    }`}
                    onClick={() => setActiveFeature(feature.id)}
                  >
                    <div className="flex items-center gap-3">
                      <feature.icon className={`w-5 h-5 ${
                        activeFeature === feature.id ? 'text-navy-400' : 'text-gray-500'
                      }`} />
                      <span className={`text-lg font-medium ${
                        activeFeature === feature.id ? 'text-white' : 'text-gray-400'
                      }`}>
                        {feature.name}
                      </span>
                    </div>
                    
                    {activeFeature === feature.id && (
                      <div className="mt-4 pl-8 animate-fade-in">
                        <p className="text-gray-400 mb-4">
                          {feature.description}
                        </p>
                        {feature.link && (
                          <a
                            href="#"
                            className="inline-flex items-center gap-2 text-navy-400 font-medium hover:text-navy-300 transition-colors"
                          >
                            {feature.link}
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Right: Phone Mockup */}
              <div className="relative flex justify-center">
                <div className="relative w-[280px] lg:w-[320px]">
                  {/* Phone Frame */}
                  <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                    {/* Screen */}
                    <div className="relative aspect-[9/19] rounded-[2.5rem] overflow-hidden bg-black">
                      <img
                        src="/zavo-ai-phone.jpg"
                        alt="Interfaz Banca Paggo"
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-500/20 via-transparent to-transparent" />
                    </div>
                    
                    {/* Notch */}
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full" />
                  </div>
                  
                  {/* Background Glow */}
                  <div className="absolute -inset-10 bg-gradient-to-r from-navy-500/30 via-teal-500/20 to-navy-500/30 blur-3xl -z-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

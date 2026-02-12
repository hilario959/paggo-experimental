import { useEffect, useRef } from 'react';
import { Zap, Clock, Bot, Puzzle, TrendingUp } from 'lucide-react';
import { assetUrl } from '@/lib/assets';

export function FeaturesBento() {
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
    <section ref={sectionRef} className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-6">
          <div className="lg:col-start-1 lg:row-start-1">
            <div className="rounded-2xl p-6 bg-gray-900 text-white animate-on-scroll animate-fade-up">
              <Zap className="w-8 h-8 text-teal-400 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Toma decisiones inteligentes al instante</h3>
              <p className="text-gray-400">
                Tarifas bajas y transparentes — sin sorpresas. Con tarifas líderes en la industria y precios fijos, Paggo te ayuda a quedarte con más de cada venta.
              </p>
            </div>
          </div>

          <div className="lg:col-start-1 lg:row-start-2 grid sm:grid-cols-2 gap-6">
            {/* Payouts Card */}
            <div className="rounded-2xl p-6 bg-gray-800 text-white animate-on-scroll animate-fade-up stagger-2">
              <Clock className="w-6 h-6 text-teal-400 mb-3" />
              <h3 className="text-lg font-bold mb-2">Ahorra tiempo</h3>
              <p className="text-gray-400 text-sm">
                Gestiona tu negocio desde Paggo IA subiendo productos y encontrando ofertas.
              </p>
            </div>

            {/* Automation Card */}
            <div className="rounded-2xl p-6 bg-gradient-to-br from-navy-600 to-navy-800 text-white animate-on-scroll animate-fade-up stagger-3">
              <Bot className="w-6 h-6 text-teal-400 mb-3" />
              <h3 className="text-lg font-bold mb-2">Automatización</h3>
              <p className="text-gray-300 text-sm">
                Tu negocio en piloto automático. Agentes de IA manejan operaciones, reportes e insights.
              </p>
            </div>

            {/* Integrated Card - Wide */}
            <div className="sm:col-span-2 rounded-2xl p-6 bg-gray-900 text-white animate-on-scroll animate-fade-up stagger-4">
              <div className="flex items-start gap-4">
                <Puzzle className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Todo integrado</h3>
                  <p className="text-gray-400 text-sm">
                    Pagos, POS y back office — conectados perfectamente, gestionados sin esfuerzo.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Feature Card with Video */}
          <div
            className="lg:col-start-2 lg:row-start-1 lg:row-span-2 min-h-0 rounded-2xl overflow-hidden bg-gray-800 animate-on-scroll animate-fade-up stagger-1"
          >
            <div className="h-full flex flex-col">
              <div className="flex-1 min-h-0 relative">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                  poster={assetUrl('/zavo-ai-phone.jpg')}
                >
                  <source src={assetUrl('/paggo-ai.mp4')} type="video/mp4" />
                </video>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-teal-400" />
                  <span className="text-teal-400 font-medium">Paggo IA</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Visibilidad clara de ventas, personal y clientes — sin tener que buscar datos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

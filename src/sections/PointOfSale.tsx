import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Infinity as InfinityIcon, LayoutGrid } from 'lucide-react';
import { assetUrl } from '@/lib/assets';
import { OptimizedImage } from '@/components/media/OptimizedImage';

const modes = [
  {
    id: 'quick',
    label: 'Punto de Venta Rápido',
    icon: InfinityIcon,
    businesses: ['Comida Rápida', 'Bares & Cafes', 'Minoristas', 'Conveniencia'],
    image: assetUrl('/punto-de-venta-rapido.png'),
  },
  {
    id: 'full',
    label: 'Servicio en línea',
    icon: LayoutGrid,
    businesses: ['Cloud Kitchens', 'Ventas en Línea', 'Delivery'],
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1400',
  },
];

const featuresByMode = {
  quick: [
    {
      title: 'Entrada de Pedidos Rápida',
      description: 'Acciones rápidas y una interfaz simple hacen que tomar pedidos sea rápido y sin esfuerzo.',
    },
    {
      title: 'Checkout Ultra Rápido',
      description: 'Envía pagos directamente a las terminales — todo se sincroniza automáticamente.',
    },
    {
      title: 'Integración con Pantalla de Cocina',
      description: 'Los pedidos fluyen directamente a la pantalla de cocina, donde el personal puede ver el estado de preparación en tiempo real.',
    },
    {
      title: 'Cola y Números de Pedido',
      description: 'Asigna números de pedido y rastrea recogidas al instante para mantener la cola en movimiento.',
    },
  ],
  full: [
    {
      title: 'Catálogo Digital en Tiempo Real',
      description: 'Publica productos, precios y disponibilidad al instante para que tu tienda en línea siempre esté actualizada.',
    },
    {
      title: 'Checkout Optimizado',
      description: 'Flujo de pago simple en pocos pasos para convertir más visitas en compras completadas.',
    },
    {
      title: 'Gestión de Envíos y Entregas',
      description: 'Configura zonas, costos y tiempos de entrega desde un solo panel para operar sin fricción.',
    },
    {
      title: 'Reportes de Ventas Online',
      description: 'Analiza rendimiento por producto, canal y hora para tomar decisiones más inteligentes.',
    },
  ],
} as const;

export function PointOfSale() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeMode, setActiveMode] = useState<'quick' | 'full'>('quick');

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
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <div className="mb-6 lg:mb-0">
            <span className="inline-block text-navy-500 text-sm font-semibold tracking-wider uppercase mb-4 animate-on-scroll animate-fade-up">
              Punto de Venta
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 animate-on-scroll animate-fade-up stagger-1">
              La app que
              <br />
              <span className="text-gray-400">lo hace todo</span>
            </h2>
          </div>
          <div className="lg:text-right">
            <p className="text-gray-600 max-w-md mb-4 animate-on-scroll animate-fade-up stagger-2">
              Gestiona toda tu operación frontal y trasera desde un sistema intuitivo — moderno, elegante y sin esfuerzo de usar.
            </p>
            <a
              href="#explore"
              className="inline-flex items-center gap-2 text-navy-500 font-medium hover:text-navy-600 transition-colors animate-on-scroll animate-fade-up stagger-3"
            >
              Explorar Punto de Venta
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Mode Cards */}
        <div className="mb-12 mx-[calc(50%-50vw)] animate-on-scroll animate-fade-up stagger-3">
          <div className="overflow-hidden">
            <div
              className={`flex gap-6 transition-transform duration-500 ease-out ${
                activeMode === 'quick'
                  ? 'translate-x-0'
                  : '-translate-x-[36%] sm:-translate-x-[32%] lg:-translate-x-[25%]'
              }`}
            >
              {modes.map((mode) => (
                <div
                  key={mode.id}
                  onClick={() => setActiveMode(mode.id as 'quick' | 'full')}
                  className={`relative w-[66%] sm:w-[63%] lg:w-[59%] aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 shrink-0 ${
                    activeMode === mode.id
                      ? 'opacity-100 ring-4 ring-[#4acdce] shadow-2xl shadow-black/25'
                      : 'opacity-55 hover:opacity-80'
                  }`}
                >
              {/* Background Image */}
              <OptimizedImage
                src={mode.image}
                alt={mode.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                {/* Top: Icon and Label */}
                <div>
                  <mode.icon className="w-10 h-10 text-white mb-2" />
                  <h3 className="text-xl font-semibold text-white">
                    {mode.label}
                  </h3>
                </div>
                
                {/* Bottom: Business Tags */}
                <div className="flex flex-wrap gap-2">
                  {mode.businesses.map((business) => (
                    <span
                      key={business}
                      className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full"
                    >
                      {business}
                    </span>
                  ))}
                </div>
              </div>
            </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mode Titles / Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 mb-8 border-b border-[#212167]/20 animate-on-scroll animate-fade-up stagger-4">
          {modes.map((mode) => (
            <button
              key={`tab-${mode.id}`}
              onClick={() => setActiveMode(mode.id as 'quick' | 'full')}
              className={`pos-mode-tab bg-transparent px-2 pb-3 text-center text-lg font-semibold border-b-2 transition-colors ${
                activeMode === mode.id
                  ? 'text-[#212167] border-[#212167]'
                  : 'text-[#212167]/60 border-transparent hover:text-[#212167]'
              }`}
            >
              {mode.label}
            </button>
          ))}
        </div>

        {/* Features List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-on-scroll animate-fade-up stagger-5">
          {featuresByMode[activeMode].map((feature) => (
            <div
              key={`${activeMode}-${feature.title}`}
              className="bg-white rounded-2xl p-7 min-h-[210px] shadow-sm hover:shadow-md transition-shadow"
            >
              <h4 className="font-semibold text-2xl text-gray-900 mb-4">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

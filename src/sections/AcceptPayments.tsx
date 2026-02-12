import { useState, useEffect, useRef } from 'react';
import { ArrowRight, X, Plus } from 'lucide-react';

const products = [
  {
    id: 'plus',
    name: 'Plus',
    description: 'Nuestra terminal más potente — con POS integrado, 5G y aprobaciones en 1 segundo. Diseñada para un checkout perfecto en el mostrador o en el piso.',
    link: 'Plus',
    video: 'https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4',
  },
  {
    id: 'mini',
    name: 'Mini',
    description: 'Una terminal ligera y portátil que cabe en tu bolsillo — y maneja todos los pagos.',
    link: 'Mini',
    video: 'https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4',
  },
  {
    id: 'tap',
    name: 'Tap',
    description: 'Acepta pagos sin contacto directamente en tu iPhone — sin hardware adicional necesario.',
    link: 'Tap',
    video: 'https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4',
  },
];

const digitalPayments = [
  {
    id: 'links',
    name: 'Links',
    description: 'Comparte links de pago por WhatsApp, email o redes sociales. Tus clientes pagan en segundos desde cualquier dispositivo.',
    link: 'Links',
    video: 'https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4',
  },
  {
    id: 'qr',
    name: 'QR',
    description: 'Genera códigos QR personalizados para que tus clientes paguen escaneando con su teléfono. Rápido, seguro y sin contacto.',
    link: 'QR',
    video: 'https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4',
  },
  {
    id: 'boton',
    name: 'Botón de pagos',
    description: 'Integra un botón de pago en tu sitio web o app. Checkout optimizado para convertir más ventas.',
    link: 'Botón de pagos',
    video: 'https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4',
  },
];

export function AcceptPayments() {
  const [activeProduct, setActiveProduct] = useState('plus');
  const [showDigitalPayments, setShowDigitalPayments] = useState(false);
  const [activeDigital, setActiveDigital] = useState('links');
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

  const currentProduct = products.find((p) => p.id === activeProduct);
  const currentDigital = digitalPayments.find((d) => d.id === activeDigital);

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <div>
            <span className="inline-block text-navy-500 text-sm font-semibold tracking-wider uppercase mb-4 animate-on-scroll animate-fade-up">
              Aceptar Pagos
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 animate-on-scroll animate-fade-up stagger-1">
              Acepta pagos
              <br />
              <span className="text-gray-400">a tu manera</span>
            </h2>
          </div>
          <button
            onClick={() => setShowDigitalPayments(!showDigitalPayments)}
            className="text-only-button inline-flex items-center gap-2 text-navy-500 font-medium mt-6 lg:mt-0 hover:text-navy-600 transition-colors animate-on-scroll animate-fade-up stagger-2"
          >
            {showDigitalPayments ? 'Ver Terminales' : 'Explorar Pagos'}
            <ArrowRight className={`w-4 h-4 transition-transform ${showDigitalPayments ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Content Grid with Slide Animation */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(${showDigitalPayments ? '-50%' : '0%'})` }}
          >
            {/* First Panel - Hardware Products */}
            <div className="w-full flex-shrink-0">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left: Product Accordion */}
                <div className="space-y-4">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className={`border-b border-gray-200 pb-4 transition-all ${
                        activeProduct === product.id ? 'bg-gray-50 -mx-4 px-4 py-4 rounded-xl' : ''
                      }`}
                    >
                      <button
                        onClick={() => setActiveProduct(product.id)}
                        className="accordion-title-button w-full flex items-center justify-between text-left"
                      >
                        <span className="text-lg font-medium text-[rgb(82,102,176)]">
                          {product.name}
                        </span>
                        {activeProduct === product.id ? (
                          <X className="w-5 h-5 text-gray-500" />
                        ) : (
                          <Plus className="w-5 h-5 text-[rgb(82,102,176)]" />
                        )}
                      </button>
                      
                      {activeProduct === product.id && (
                        <div className="mt-4 animate-fade-in">
                          <p className="text-gray-600 mb-4">
                            {product.description}
                          </p>
                          <a
                            href="#"
                            className="inline-flex items-center gap-2 text-navy-500 font-medium hover:text-navy-600 transition-colors"
                          >
                            {product.link}
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Right: Product Video */}
                <div className="hidden lg:block relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                    <video
                      key={currentProduct?.id}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={currentProduct?.video} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Panel - Digital Payments */}
            <div className="w-full flex-shrink-0 pl-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left: Digital Payments Accordion */}
                <div className="space-y-4">
                  {digitalPayments.map((item) => (
                    <div
                      key={item.id}
                      className={`border-b border-gray-200 pb-4 transition-all ${
                        activeDigital === item.id ? 'bg-gray-50 -mx-4 px-4 py-4 rounded-xl' : ''
                      }`}
                    >
                      <button
                        onClick={() => setActiveDigital(item.id)}
                        className="accordion-title-button w-full flex items-center justify-between text-left"
                      >
                        <span className="text-lg font-medium text-[rgb(82,102,176)]">
                          {item.name}
                        </span>
                        {activeDigital === item.id ? (
                          <X className="w-5 h-5 text-gray-500" />
                        ) : (
                          <Plus className="w-5 h-5 text-[rgb(82,102,176)]" />
                        )}
                      </button>
                      
                      {activeDigital === item.id && (
                        <div className="mt-4 animate-fade-in">
                          <p className="text-gray-600 mb-4">
                            {item.description}
                          </p>
                          <a
                            href="#"
                            className="inline-flex items-center gap-2 text-navy-500 font-medium hover:text-navy-600 transition-colors"
                          >
                            {item.link}
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Right: Digital Payment Video */}
                <div className="hidden lg:block relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                    <video
                      key={currentDigital?.id}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={currentDigital?.video} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

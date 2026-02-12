import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/hero-bg.jpg"
        >
          <source src="https://videos.pexels.com/video-files/3135924/3135924-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-up">
          Pagos, Gestión de Negocios y Banca impulsados por IA
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl !text-white max-w-2xl mx-auto mb-10 animate-fade-up stagger-1">
          Haz funcionar tu negocio más rápido, más inteligente y sin esfuerzo — todo en una plataforma.
        </p>

        {/* CTA Button */}
        <div className="animate-fade-up stagger-2">
          <Button
            size="lg"
            className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-8 py-6 text-lg font-medium btn-hover group"
          >
            Comenzar
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}

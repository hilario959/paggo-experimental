import { useEffect, useRef } from 'react';

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
    <section ref={sectionRef} className="pt-24 pb-8 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      </div>
    </section>
  );
}

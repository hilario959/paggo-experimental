import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { assetUrl } from '@/lib/assets';
import { OptimizedImage } from '@/components/media/OptimizedImage';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Productos', hasDropdown: true },
    { label: 'Precios', href: '#pricing' },
    { label: 'Empresas', href: '#enterprise' },
    { label: 'Socios', href: '#partners' },
    { label: 'Contacto', hasDropdown: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <OptimizedImage
              priority
              src={isScrolled ? assetUrl('/paggo-logo-verde.webp') : assetUrl('/paggo-logo-Blanco.webp')}
              alt="Paggo"
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href || '#'}
                className={`nav-top-link flex items-center gap-1 text-sm font-medium transition-colors hover:text-teal-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {link.label}
                {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="ghost"
              className="login-btn !bg-[#4acdce] hover:!bg-[#45c1c2] !border-[#4acdce] !text-white text-sm font-medium"
            >
              Iniciar sesión
            </Button>
            <Button className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-6 btn-hover">
              Comenzar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white rounded-2xl shadow-xl mt-2 p-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href || '#'}
                  className="nav-top-link flex items-center justify-between text-gray-700 font-medium py-2"
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </a>
              ))}
              <hr className="my-2" />
              <Button variant="ghost" className="login-btn justify-start !bg-[#4acdce] hover:!bg-[#45c1c2] !border-[#4acdce] !text-white">
                Iniciar sesión
              </Button>
              <Button className="bg-teal-500 hover:bg-teal-600 text-white rounded-full">
                Comenzar
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

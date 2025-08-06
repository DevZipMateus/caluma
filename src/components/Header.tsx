
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 50);
      
      // Hide header when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleInicioClick = () => {
    navigate('/');
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      const offsetTop = element.offsetTop - 140;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg' : 'bg-primary/90 backdrop-blur-sm'
    } ${
      isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'
    } border-b border-white/10`}>
      <div className="w-full px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 max-w-full mx-auto">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-18 lg:h-20 xl:h-24">
          {/* Logo Responsivo com navegação para página inicial */}
          <button 
            onClick={handleLogoClick}
            className="flex-shrink-0 min-w-0 max-w-[60%] sm:max-w-[50%] lg:max-w-none focus:outline-none hover:opacity-90 transition-opacity"
          >
            <img 
              src="/lovable-uploads/6863ba6e-864c-440d-a0c9-58c7739af553.png" 
              alt="Caluma Variedades e Personalizados" 
              className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 w-auto max-w-full transition-all duration-300"
            />
          </button>

          {/* Desktop Navigation - apenas Início */}
          <nav className="hidden lg:flex items-center flex-shrink-0">
            <button
              onClick={handleInicioClick}
              className="text-primary-foreground hover:text-accent transition-colors duration-200 font-medium text-sm lg:text-base xl:text-lg whitespace-nowrap px-3 lg:px-4"
            >
              Início
            </button>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block flex-shrink-0">
            <Button 
              onClick={() => scrollToSection('#contato')}
              variant="secondary"
              size={isMobile ? "sm" : "default"}
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-xs sm:text-sm lg:text-base px-2 sm:px-3 lg:px-4 xl:px-6 py-1.5 sm:py-2 whitespace-nowrap min-w-fit"
            >
              <span className="hidden lg:inline">Solicitar </span>
              <span>Orçamento</span>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="lg:hidden flex-shrink-0">
              <Button variant="ghost" size="sm" className="text-primary-foreground p-1 sm:p-1.5 min-w-fit">
                <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[300px] z-50">
              <nav className="flex flex-col space-y-4 mt-8">
                <button
                  onClick={handleInicioClick}
                  className="text-left py-3 text-base font-medium hover:text-primary transition-colors border-b border-muted/20"
                >
                  Início
                </button>
                <div className="pt-4">
                  <Button 
                    onClick={() => scrollToSection('#contato')}
                    className="w-full"
                    size="lg"
                    variant="default"
                  >
                    Solicitar Orçamento
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;


import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      const offsetTop = element.offsetTop - 140; // Increased offset to account for header + category menu
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg' : 'bg-primary/90 backdrop-blur-sm'
    } border-b border-white/10`}>
      <div className="w-full px-2 sm:px-3 md:px-4 lg:px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-12 sm:h-14 md:h-16 lg:h-18">
          {/* Logo Responsivo */}
          <div className="flex-shrink-0 min-w-0">
            <img 
              src="/lovable-uploads/6863ba6e-864c-440d-a0c9-58c7739af553.png" 
              alt="Caluma Variedades e Personalizados" 
              className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto max-w-full transition-all duration-300"
            />
          </div>

          {/* Desktop Navigation - apenas Início */}
          <nav className="hidden lg:flex items-center flex-shrink-0">
            <button
              onClick={() => scrollToSection('#inicio')}
              className="text-primary-foreground hover:text-accent transition-colors duration-200 font-medium text-sm lg:text-base xl:text-lg whitespace-nowrap px-2"
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
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-xs sm:text-sm lg:text-base px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 whitespace-nowrap"
            >
              <span className="hidden lg:inline">Solicitar </span>
              <span>Orçamento</span>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="lg:hidden flex-shrink-0">
              <Button variant="ghost" size="sm" className="text-primary-foreground p-1 sm:p-1.5">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[300px] z-50">
              <nav className="flex flex-col space-y-4 mt-8">
                <button
                  onClick={() => scrollToSection('#inicio')}
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

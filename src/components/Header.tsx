
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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

  const menuItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Contato', href: '#contato' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg' : 'bg-primary/90 backdrop-blur-sm'
    } border-b border-white/10`}>
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-18 lg:h-20">
          {/* Logo Responsivo */}
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/8d3c539b-e71e-45f5-bc79-6f4f9b1a47f2.png" 
              alt="Caluma Variedades e Personalizados" 
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto transition-all duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 2xl:space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-primary-foreground hover:text-accent transition-colors duration-200 font-medium text-sm lg:text-base xl:text-lg whitespace-nowrap"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('#contato')}
              variant="secondary"
              size={isMobile ? "sm" : "default"}
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-xs sm:text-sm lg:text-base px-3 sm:px-4 lg:px-6 whitespace-nowrap"
            >
              <span className="hidden lg:inline">Solicitar </span>Orçamento
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm" className="text-primary-foreground p-1.5 sm:p-2">
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[300px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {menuItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left py-3 text-base font-medium hover:text-primary transition-colors border-b border-muted/20 last:border-b-0"
                  >
                    {item.name}
                  </button>
                ))}
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

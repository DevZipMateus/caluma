
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Menu, X, Instagram } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-1 sm:py-2">
        <div className="container-custom flex justify-between items-center text-xs sm:text-sm">
          <div className="flex items-center gap-2 sm:gap-4">
            <a href="mailto:calumaconsultoria@gmail.com" className="flex items-center hover:text-accent transition-colors">
              <Mail size={14} className="mr-1 sm:mr-2" />
              <span className="hidden sm:inline">calumaconsultoria@gmail.com</span>
              <span className="sm:hidden">Email</span>
            </a>
            <a href="tel:+5573998503370" className="flex items-center hover:text-accent transition-colors">
              <Phone size={14} className="mr-1 sm:mr-2" />
              <span className="hidden sm:inline">(73) 99850-3370</span>
              <span className="sm:hidden">Ligar</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <a href="https://instagram.com/calumavariedades" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <Instagram size={16} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'}`}>
        <div className="container-custom py-3 sm:py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center transition-all duration-300 transform hover:scale-[1.02]">
              <img 
                src="/lovable-uploads/8d3c539b-e71e-45f5-bc79-6f4f9b1a47f2.png" 
                alt="Caluma Variedades e Personalizados" 
                className="h-12 sm:h-16 w-auto"
              />
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="text-primary hover:text-accent transition-colors font-medium">
                Início
              </button>
              <button onClick={() => scrollToSection('sobre')} className="text-primary hover:text-accent transition-colors font-medium">
                Sobre
              </button>
              <button onClick={() => scrollToSection('servicos')} className="text-primary hover:text-accent transition-colors font-medium">
                Serviços
              </button>
              <button onClick={() => scrollToSection('depoimentos')} className="text-primary hover:text-accent transition-colors font-medium">
                Depoimentos
              </button>
              <button onClick={() => scrollToSection('localizacao')} className="text-primary hover:text-accent transition-colors font-medium">
                Localização
              </button>
              <button onClick={() => scrollToSection('contato')} className="text-primary hover:text-accent transition-colors font-medium">
                Contato
              </button>
              
              <button onClick={() => scrollToSection('contato')} className="btn-secondary">
                SOLICITAR ORÇAMENTO
              </button>
            </nav>
            
            {/* Mobile Menu Button */}
            <button className="lg:hidden text-primary hover:text-accent focus:outline-none p-2" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Navigation Menu */}
      <div className={`fixed top-0 left-0 w-full h-full bg-primary z-50 transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="container-custom py-4 h-full flex flex-col">
          <div className="flex justify-between items-center mb-8 pt-4">
            <img 
              src="/lovable-uploads/8d3c539b-e71e-45f5-bc79-6f4f9b1a47f2.png" 
              alt="Caluma Variedades e Personalizados" 
              className="h-12 w-auto"
            />
            <button className="text-primary-foreground hover:text-accent focus:outline-none p-2" onClick={toggleMobileMenu}>
              <X size={24} />
            </button>
          </div>
          
          <div className="flex flex-col space-y-6 text-lg">
            <button onClick={() => scrollToSection('inicio')} className="text-primary-foreground hover:text-accent py-2 text-left font-medium">
              Início
            </button>
            <button onClick={() => scrollToSection('sobre')} className="text-primary-foreground hover:text-accent py-2 text-left font-medium">
              Sobre
            </button>
            <button onClick={() => scrollToSection('servicos')} className="text-primary-foreground hover:text-accent py-2 text-left font-medium">
              Serviços
            </button>
            <button onClick={() => scrollToSection('depoimentos')} className="text-primary-foreground hover:text-accent py-2 text-left font-medium">
              Depoimentos
            </button>
            <button onClick={() => scrollToSection('localizacao')} className="text-primary-foreground hover:text-accent py-2 text-left font-medium">
              Localização
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-primary-foreground hover:text-accent py-2 text-left font-medium">
              Contato
            </button>
            
            <button onClick={() => scrollToSection('contato')} className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded font-medium transition-all text-center mt-4">
              SOLICITAR ORÇAMENTO
            </button>
          </div>
          
          <div className="mt-auto pb-8">
            <div className="text-primary-foreground/70 space-y-4">
              <a href="tel:+5573998503370" className="flex items-center text-sm hover:text-accent transition-colors py-2">
                <Phone size={16} className="mr-2" />
                (73) 99850-3370
              </a>
              <a href="tel:+5522992142239" className="flex items-center text-sm hover:text-accent transition-colors py-2">
                <Phone size={16} className="mr-2" />
                (22) 9 9214-2239
              </a>
              <a href="mailto:calumaconsultoria@gmail.com" className="flex items-center text-sm hover:text-accent transition-colors py-2">
                <Mail size={16} className="mr-2" />
                calumaconsultoria@gmail.com
              </a>
              <a href="https://instagram.com/calumavariedades" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm hover:text-accent transition-colors py-2">
                <Instagram size={16} className="mr-2" />
                @calumavariedades
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

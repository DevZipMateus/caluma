
import React from 'react';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary/80 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-accent/50 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-accent/30 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container-custom relative z-10 text-center">
        <div className="max-w-5xl mx-auto px-4">
          {/* Logo */}
          <div className="mb-8 sm:mb-12 animate-fade-in">
            <img 
              src="/lovable-uploads/8d3c539b-e71e-45f5-bc79-6f4f9b1a47f2.png" 
              alt="Caluma Variedades e Personalizados" 
              className="h-24 sm:h-32 lg:h-40 w-auto mx-auto mb-6 drop-shadow-2xl"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6 sm:mb-8 animate-fade-in leading-tight" style={{ animationDelay: '0.2s' }}>
            Transformamos sua ideia em um
            <span className="block text-accent mt-2">produto único</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 mb-8 sm:mb-12 max-w-3xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: '0.3s' }}>
            Soluções completas em <strong>sublimação</strong>, <strong>serigrafia</strong> e <strong>produtos personalizados</strong> 
            para empresas e empreendedores que buscam qualidade e excelência.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="btn-secondary inline-flex items-center justify-center gap-2 text-lg px-8 py-4 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <Sparkles size={20} />
              Ver Nossos Serviços
            </button>
            
            <button 
              onClick={() => scrollToSection('contato')}
              className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2 shadow-lg"
            >
              Solicitar Orçamento
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 hover:bg-white/20 transition-all duration-300 group">
              <div className="bg-accent/20 p-3 rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="text-accent" size={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-primary-foreground mb-2">Personalização Total</h3>
              <p className="text-primary-foreground/80 text-sm sm:text-base">Transformamos suas ideias em produtos únicos e personalizados</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 hover:bg-white/20 transition-all duration-300 group">
              <div className="bg-accent/20 p-3 rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="text-accent" size={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-primary-foreground mb-2">Atendimento Humanizado</h3>
              <p className="text-primary-foreground/80 text-sm sm:text-base">Relacionamento próximo e atendimento que supera expectativas</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 hover:bg-white/20 transition-all duration-300 group md:col-span-1">
              <div className="bg-accent/20 p-3 rounded-full w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <ArrowRight className="text-accent" size={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-primary-foreground mb-2">Entrega Ágil</h3>
              <p className="text-primary-foreground/80 text-sm sm:text-base">Rapidez sem abrir mão da qualidade e acabamento</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

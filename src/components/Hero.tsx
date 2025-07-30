import React from 'react';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary/80 overflow-hidden pt-14 sm:pt-16 lg:pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-accent/50 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-40 sm:w-60 lg:w-80 h-40 sm:h-60 lg:h-80 bg-accent/30 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Logo */}
          <div className="mb-6 sm:mb-8 lg:mb-12 animate-fade-in">
            <img 
              src="/lovable-uploads/855dbbc1-ae89-4024-a478-1b7d2781b8ac.png" 
              alt="Caluma Variedades e Personalizados" 
              className="h-32 sm:h-48 md:h-64 lg:h-80 xl:h-96 2xl:h-[28rem] w-auto mx-auto mb-4 sm:mb-6 drop-shadow-2xl"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-primary-foreground mb-4 sm:mb-6 lg:mb-8 animate-fade-in leading-tight" style={{ animationDelay: '0.2s' }}>
            Transformamos sua ideia em um
            <span className="block text-accent mt-1 sm:mt-2">produto único</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-primary-foreground/90 mb-6 sm:mb-8 lg:mb-12 max-w-4xl mx-auto animate-fade-in leading-relaxed px-2" style={{ animationDelay: '0.3s' }}>
            Soluções completas em <strong>sublimação</strong>, <strong>serigrafia</strong> e <strong>produtos personalizados</strong> 
            para empresas e empreendedores que buscam qualidade e excelência.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in px-4 sm:px-0" style={{ animationDelay: '0.4s' }}>
            <Button 
              onClick={() => scrollToSection('servicos')}
              variant="secondary"
              size={isMobile ? "default" : "lg"}
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <Sparkles className="mr-2" size={isMobile ? 16 : 20} />
              Ver Nossos Serviços
            </Button>
            
            <Button 
              onClick={() => scrollToSection('contato')}
              variant="outline"
              size={isMobile ? "default" : "lg"}
              className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary border-primary-foreground shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2" size={isMobile ? 16 : 20} />
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto animate-fade-in px-2" style={{ animationDelay: '0.5s' }}>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                <div className="bg-accent/20 p-2 sm:p-3 rounded-full w-fit mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="text-accent" size={isMobile ? 20 : 24} />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-primary-foreground mb-2">Personalização Total</h3>
                <p className="text-primary-foreground/80 text-xs sm:text-sm lg:text-base">Transformamos suas ideias em produtos únicos e personalizados</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                <div className="bg-accent/20 p-2 sm:p-3 rounded-full w-fit mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="text-accent" size={isMobile ? 20 : 24} />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-primary-foreground mb-2">Atendimento Humanizado</h3>
                <p className="text-primary-foreground/80 text-xs sm:text-sm lg:text-base">Relacionamento próximo e atendimento que supera expectativas</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group sm:col-span-2 lg:col-span-1">
              <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                <div className="bg-accent/20 p-2 sm:p-3 rounded-full w-fit mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight className="text-accent" size={isMobile ? 20 : 24} />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-primary-foreground mb-2">Entrega Ágil</h3>
                <p className="text-primary-foreground/80 text-xs sm:text-sm lg:text-base">Rapidez sem abrir mão da qualidade e acabamento</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

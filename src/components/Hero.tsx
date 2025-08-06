
import React from 'react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary/80 overflow-hidden pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-16 sm:w-24 md:w-32 lg:w-48 xl:w-64 h-16 sm:h-24 md:h-32 lg:h-48 xl:h-64 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-20 sm:w-32 md:w-48 lg:w-64 xl:w-96 h-20 sm:h-32 md:h-48 lg:h-64 xl:h-96 bg-accent/50 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-18 sm:w-28 md:w-40 lg:w-60 xl:w-80 h-18 sm:h-28 md:h-40 lg:h-60 xl:h-80 bg-accent/30 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 relative z-10 text-center">
        <div className="max-w-full mx-auto">
          {/* Logo Responsivo com melhor controle de altura */}
          <div className="animate-fade-in">
            <img 
              src="/lovable-uploads/855dbbc1-ae89-4024-a478-1b7d2781b8ac.png" 
              alt="Caluma Variedades e Personalizados" 
              className="h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[65vh] xl:h-[70vh] 2xl:h-[75vh] w-auto mx-auto drop-shadow-2xl max-w-[95%] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

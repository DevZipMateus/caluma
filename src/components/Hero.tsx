
import React from 'react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary/80 overflow-hidden pt-20 sm:pt-24 md:pt-28 lg:pt-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-24 sm:w-32 md:w-48 lg:w-64 h-24 sm:h-32 md:h-48 lg:h-64 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-32 sm:w-48 md:w-64 lg:w-96 h-32 sm:h-48 md:h-64 lg:h-96 bg-accent/50 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-28 sm:w-40 md:w-60 lg:w-80 h-28 sm:h-40 md:h-60 lg:h-80 bg-accent/30 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-full mx-auto">
          {/* Logo Responsivo */}
          <div className="animate-fade-in">
            <img 
              src="/lovable-uploads/855dbbc1-ae89-4024-a478-1b7d2781b8ac.png" 
              alt="Caluma Variedades e Personalizados" 
              className="h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[80vh] xl:h-[85vh] 2xl:h-[90vh] w-auto mx-auto drop-shadow-2xl max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

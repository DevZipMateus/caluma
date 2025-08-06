
import React from 'react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary/80 overflow-hidden pt-14 sm:pt-16 lg:pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-accent/50 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-40 sm:w-60 lg:w-80 h-40 sm:h-60 lg:h-80 bg-accent/30 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-full mx-auto">
          {/* Logo Máximo */}
          <div className="animate-fade-in">
            <img 
              src="/lovable-uploads/855dbbc1-ae89-4024-a478-1b7d2781b8ac.png" 
              alt="Caluma Variedades e Personalizados" 
              className="h-[80vh] sm:h-[85vh] md:h-[90vh] lg:h-[95vh] xl:h-[98vh] 2xl:h-[99vh] w-auto mx-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

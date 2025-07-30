
import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, Mail, X } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);
  const isMobile = useIsMobile();
  
  // Start pulsing effect every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 2000);
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsPulsing(false); // Stop pulsing when opened
  };
  
  return (
    <div className={`fixed ${isMobile ? 'bottom-4 right-4' : 'bottom-6 right-6 lg:bottom-8 lg:right-8'} z-50`}>
      {/* Contact Options */}
      <div className={`flex flex-col-reverse items-end mb-3 space-y-reverse space-y-2 transition-all duration-500 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
        <a 
          href="https://wa.me/5573998503370" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center bg-primary text-primary-foreground px-4 py-3 rounded-lg shadow-lg hover:bg-primary/90 transition-all duration-300 gap-2 font-medium text-sm whitespace-nowrap"
        >
          <MessageCircle size={16} />
          <span>WhatsApp</span>
        </a>
        
        <a 
          href="tel:+5573998503370" 
          className="flex items-center bg-primary text-primary-foreground px-4 py-3 rounded-lg shadow-lg hover:bg-primary/90 transition-all duration-300 gap-2 font-medium text-sm whitespace-nowrap"
        >
          <Phone size={16} />
          <span>Ligar</span>
        </a>
        
        <a 
          href="mailto:calumaconsultoria@gmail.com" 
          className="flex items-center bg-primary text-primary-foreground px-4 py-3 rounded-lg shadow-lg hover:bg-primary/90 transition-all duration-300 gap-2 font-medium text-sm whitespace-nowrap"
        >
          <Mail size={16} />
          <span>E-mail</span>
        </a>
      </div>
      
      {/* Main Button */}
      <button
        onClick={toggleMenu}
        className={`${isMobile ? 'w-12 h-12' : 'w-14 h-14'} rounded-full flex items-center justify-center transition-all duration-300 
          ${isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-accent hover:bg-accent/90'} 
          ${isOpen ? 'text-white' : 'text-accent-foreground'} 
          ${isPulsing && !isOpen ? 'animate-pulse' : ''}
          transform hover:scale-110 active:scale-95 shadow-lg`}
        aria-label={isOpen ? "Fechar menu de contato" : "Abrir menu de contato"}
        style={{
          boxShadow: isOpen 
            ? '0 4px 20px rgba(239, 68, 68, 0.4)' 
            : '0 4px 20px rgba(234, 179, 8, 0.4)'
        }}
      >
        {isOpen ? (
          <X size={isMobile ? 20 : 24} />
        ) : (
          <MessageCircle size={isMobile ? 20 : 24} />
        )}
      </button>
    </div>
  );
};

export default FloatingButton;


import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, Mail, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useIsMobile } from '../hooks/use-mobile';

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isMobile = useIsMobile();
  
  // Start pulsing effect every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 2000);
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide button when scrolling down, show when scrolling up
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
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsPulsing(false); // Stop pulsing when opened
  };

  const contactOptions = [
    {
      href: "https://wa.me/5522992142239",
      icon: MessageCircle,
      label: "WhatsApp",
      external: true
    },
    {
      href: "tel:+5522992142239",
      icon: Phone,
      label: "Ligar",
      external: false
    },
    {
      href: "mailto:calumaconsultoria@gmail.com",
      icon: Mail,
      label: "E-mail",
      external: false
    }
  ];
  
  return (
    <div className={`fixed z-50 transition-all duration-300 ${
      isMobile 
        ? 'bottom-3 right-3' 
        : 'bottom-4 right-4 md:bottom-6 md:right-6'
    } ${
      isVisible ? 'transform translate-y-0 opacity-100' : 'transform translate-y-20 opacity-0 pointer-events-none'
    }`}>
      {/* Contact Options */}
      <div className={`flex flex-col-reverse items-end mb-2 space-y-reverse space-y-2 transition-all duration-500 ${
        isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
      }`}>
        {contactOptions.map((option, index) => {
          const IconComponent = option.icon;
          return (
            <Card key={index} className="shadow-lg border-primary/20">
              <CardContent className="p-0">
                <Button
                  asChild
                  variant="default"
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground w-full justify-start gap-2"
                >
                  <a
                    href={option.href}
                    {...(option.external && { target: "_blank", rel: "noopener noreferrer" })}
                    className="flex items-center whitespace-nowrap px-3 py-2"
                  >
                    <IconComponent size={14} />
                    <span className="text-xs font-medium">{option.label}</span>
                  </a>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      {/* Main Button */}
      <Button
        onClick={toggleMenu}
        size="icon"
        className={`${
          isMobile 
            ? 'h-12 w-12 text-base' 
            : 'h-12 w-12 md:h-14 md:w-14'
        } rounded-full transition-all duration-300 
          ${isOpen ? 'bg-destructive hover:bg-destructive/90' : 'bg-accent hover:bg-accent/90'} 
          ${isOpen ? 'text-destructive-foreground' : 'text-accent-foreground'} 
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
          <X size={isMobile ? 18 : 20} />
        ) : (
          <MessageCircle size={isMobile ? 18 : 20} />
        )}
      </Button>
    </div>
  );
};

export default FloatingButton;


import React from 'react';
import { Heart, Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Logo e Descrição */}
          <div>
            <div className="mb-6">
              <img 
                src="/lovable-uploads/6863ba6e-864c-440d-a0c9-58c7739af553.png" 
                alt="Caluma Variedades e Personalizados" 
                className="h-20 w-auto mb-6"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="sm" variant="secondary">
                <a 
                  href="https://wa.me/5522992142239" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </Button>
              
              <Button asChild size="sm" variant="outline" className="bg-transparent">
                <a 
                  href="tel:+5522992142239"
                  className="flex items-center gap-2"
                >
                  <Phone size={16} />
                  Ligar
                </a>
              </Button>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="text-accent flex-shrink-0" size={16} />
                <a 
                  href="tel:+5522992142239"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  (22) 99214-2239
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-accent flex-shrink-0" size={16} />
                <a 
                  href="mailto:calumaconsultoria@gmail.com"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  calumaconsultoria@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="text-accent flex-shrink-0 mt-0.5" size={16} />
                <div className="text-primary-foreground/80">
                  <p>Rua Oswaldo Cruz, 27</p>
                  <p className="text-sm">CEP: 28985-305</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
          <p>
            © {currentYear} Caluma Variedades e Personalizados. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1">
            Feito com <Heart className="text-accent" size={16} /> para nossos clientes
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

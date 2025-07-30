
import React from 'react';
import { Heart, Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/8d3c539b-e71e-45f5-bc79-6f4f9b1a47f2.png" 
                alt="Caluma Variedades e Personalizados" 
                className="h-12 w-auto mb-4"
              />
              <p className="text-primary-foreground/90 leading-relaxed">
                Transformamos suas ideias em produtos únicos com qualidade excepcional. 
                Somos especialistas em sublimação, serigrafia e produtos personalizados 
                para empresas e pessoas que buscam excelência.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="sm" variant="secondary">
                <a 
                  href="https://wa.me/5573998503370" 
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
                  href="tel:+5573998503370"
                  className="flex items-center gap-2"
                >
                  <Phone size={16} />
                  Ligar
                </a>
              </Button>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Links Rápidos</h3>
            <ul className="space-y-3">
              {[
                { name: 'Início', id: 'inicio' },
                { name: 'Sobre Nós', id: 'sobre' },
                { name: 'Serviços', id: 'servicos' },
                { name: 'Depoimentos', id: 'depoimentos' },
                { name: 'Contato', id: 'contato' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200 text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="text-accent flex-shrink-0" size={16} />
                <a 
                  href="tel:+5573998503370"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  (73) 99850-3370
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
                  <p>Atendimento:</p>
                  <p className="text-sm">Seg à Sex: 8h às 18h</p>
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

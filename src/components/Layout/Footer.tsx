
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Heart } from 'lucide-react';

const Footer = () => {
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
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img 
              src="/lovable-uploads/8d3c539b-e71e-45f5-bc79-6f4f9b1a47f2.png" 
              alt="Caluma Variedades e Personalizados" 
              className="h-16 w-auto mb-4"
            />
            <h3 className="text-xl font-bold text-accent mb-4">
              Transformamos sua ideia em um produto único
            </h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Oferecemos soluções completas em sublimação, serigrafia e produtos personalizados 
              para empresas e empreendedores que buscam qualidade e excelência.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://instagram.com/calumavariedades" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 hover:bg-accent/20 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Instagram className="text-accent" size={20} />
              </a>
              <a 
                href="https://wa.me/5573998503370" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 hover:bg-accent/20 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Phone className="text-accent" size={20} />
              </a>
              <a 
                href="mailto:calumaconsultoria@gmail.com"
                className="bg-primary-foreground/10 hover:bg-accent/20 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Mail className="text-accent" size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-accent mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('depoimentos')}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Depoimentos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-accent mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="text-accent mt-1 flex-shrink-0" size={16} />
                <div>
                  <p className="text-primary-foreground/80 text-sm">
                    Rua Oswaldo Cruz, Vila Canaã<br />
                    Araruama - RJ
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-accent flex-shrink-0" size={16} />
                <div className="space-y-1">
                  <a href="tel:+5573998503370" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm block">
                    (73) 99850-3370
                  </a>
                  <a href="tel:+5522992142239" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm block">
                    (22) 9 9214-2239
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-accent flex-shrink-0" size={16} />
                <a href="mailto:calumaconsultoria@gmail.com" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  calumaconsultoria@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm text-center sm:text-left">
              © 2024 Caluma Variedades e Personalizados. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2 text-primary-foreground/60 text-sm">
              <span>Feito com</span>
              <Heart className="text-accent" size={14} />
              <span>para nossos clientes</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

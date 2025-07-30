
import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Contact = () => {
  const isMobile = useIsMobile();

  return (
    <section id="contato" className="section bg-muted/30">
      <div className="container-custom py-16 sm:py-20 lg:py-24">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-block bg-accent/10 text-primary font-medium px-4 py-2 rounded-full text-sm mb-6">
            Contato
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6 sm:mb-8">
            Vamos transformar sua ideia
            <span className="block text-accent mt-2">em realidade</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Entre em contato conosco através dos nossos canais de atendimento. Estamos prontos para ajudar você!
          </p>
        </div>
        
        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* WhatsApp Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 animate-fade-in">
            <div className="bg-green-500 p-6 flex items-center justify-center">
              <div className="bg-white p-3 rounded-full">
                <Phone className="text-green-500" size={24} />
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-primary mb-2">WhatsApp</h3>
              <p className="text-muted-foreground text-sm mb-4">Atendimento rápido e prático</p>
              <a href="https://wa.me/5573998503370" target="_blank" rel="noopener noreferrer" className="btn-secondary w-full text-sm">
                Enviar mensagem
              </a>
            </div>
          </div>
          
          {/* Phone Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="bg-accent p-6 flex items-center justify-center">
              <Phone className="text-accent-foreground" size={32} />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-primary mb-2">Telefone</h3>
              <p className="text-muted-foreground text-sm mb-4">Fale diretamente conosco</p>
              <a href="tel:+5573998503370" className="btn-primary w-full text-sm">
                (73) 99850-3370
              </a>
            </div>
          </div>
          
          {/* Email Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-primary p-6 flex items-center justify-center">
              <Mail className="text-primary-foreground" size={32} />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-primary mb-2">E-mail</h3>
              <p className="text-muted-foreground text-sm mb-4">Envie sua mensagem</p>
              <a href="mailto:calumaconsultoria@gmail.com" className="btn-primary w-full text-xs">
                calumaconsultoria@gmail.com
              </a>
            </div>
          </div>

          {/* Instagram Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-6 flex items-center justify-center">
              <Instagram className="text-white" size={32} />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-primary mb-2">Instagram</h3>
              <p className="text-muted-foreground text-sm mb-4">Acompanhe nosso trabalho</p>
              <a href="https://instagram.com/calumavariedades" target="_blank" rel="noopener noreferrer" className="btn-secondary w-full text-sm">
                @calumavariedades
              </a>
            </div>
          </div>
        </div>
        
        {/* Location and Hours */}
        <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-12 border border-accent/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Address */}
            <div id="localizacao">
              <div className="flex items-start mb-6">
                <div className="bg-accent/10 p-3 rounded-full mr-4 flex-shrink-0">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-semibold text-primary mb-3">Nossa Localização</h4>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                    Rua Oswaldo Cruz, Vila Canaã<br />
                    Araruama - RJ
                  </p>
                  <a 
                    href="https://maps.google.com/maps?q=Rua+Oswaldo+Cruz+Vila+Canaã+Araruama+RJ" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-accent hover:text-accent/80 transition-colors font-medium inline-flex items-center gap-2"
                  >
                    <span>Ver no Google Maps</span>
                    <MapPin size={16} />
                  </a>
                </div>
              </div>
              
              {/* Embedded Map */}
              <div className="w-full h-64 sm:h-80 rounded-lg overflow-hidden border border-accent/10">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.8899516273595!2d-42.34000832468896!3d-22.87250037936967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x978f2c9e4f6a0d%3A0x2e4b7d8a3f5c6e8f!2sAraruama%2C%20RJ!5e0!3m2!1spt!2sbr!4v1683000000000!5m2!1spt!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Caluma Variedades e Personalizados"
                ></iframe>
              </div>
            </div>
            
            {/* Business Hours and Additional Info */}
            <div>
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="bg-accent/10 p-3 rounded-full mr-4">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-semibold text-primary">Horário de Atendimento</h4>
                </div>
                
                <div className="space-y-3 ml-16">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Segunda - Sexta:</span>
                    <span className="font-medium text-primary">08:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Sábado:</span>
                    <span className="font-medium text-primary">08:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Domingo:</span>
                    <span className="font-medium text-primary">Fechado</span>
                  </div>
                </div>
              </div>

              {/* Additional Contact Info */}
              <div className="bg-muted/30 rounded-xl p-6">
                <h5 className="text-lg font-semibold text-primary mb-4">Contatos Adicionais</h5>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-accent" />
                    <a href="tel:+5522992142239" className="text-muted-foreground hover:text-primary transition-colors">
                      (22) 9 9214-2239
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Instagram size={16} className="text-accent" />
                    <a href="https://instagram.com/calumavariedades" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      @calumavariedades
                    </a>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 p-6 bg-gradient-to-r from-primary to-primary/80 rounded-xl text-primary-foreground text-center">
                <h5 className="text-lg font-semibold mb-2">Pronto para começar?</h5>
                <p className="text-primary-foreground/90 mb-4">Entre em contato e transforme sua ideia em realidade!</p>
                <a href="https://wa.me/5573998503370" target="_blank" rel="noopener noreferrer" className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg font-medium transition-all inline-flex items-center gap-2">
                  <Phone size={18} />
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;


import React, { useState } from 'react';
import { Shirt, Briefcase, Palette, ShoppingBag, ArrowRight, Sparkles } from 'lucide-react';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('camisas');

  const categories = {
    camisas: {
      title: 'Camisas',
      icon: Shirt,
      description: 'Camisetas personalizadas para todos os gostos e ocasiões',
      items: [
        'Body Infantil',
        'Camisa Polo Masculina 50% Alg. 50% Poli.',
        'Camisa Polo Masculina Dryfit',
        'Camisa Polo Feminina',
        'Camisa Polo Feminina Dry',
        'Feminina Poliéster Branco',
        'Feminina Poliéster Colorida',
        'Masculina Poliéster Branco',
        'Masculina Poliéster Colorida',
        'Feminina Algodão Branco',
        'Feminina Algodão Colorida',
        'Masculina Algodão Branco',
        'Masculino Algodão Colorido',
        'Dry Branco',
        'Dry Colorido',
        'Regata Feminina Branco',
        'Regata Feminina Colorida',
        'Regata Masculina Branco',
        'Regata Masculina Colorida'
      ]
    },
    uniformes: {
      title: 'Uniformes',
      icon: Briefcase,
      description: 'Uniformes profissionais para diversos segmentos',
      items: [
        'Polo Masculina Piquet',
        'Polo Feminina Piquet',
        'Polo Masculina Dry',
        'Polo Feminina Dry',
        'Tradicional Masculina',
        'Tradicional Feminina',
        'Toca Personalizada',
        'Avental',
        'Colete de Futebol',
        'Jaleco de Brim',
        'Jaleco de Enfermagem',
        'Uniforme Esportivo'
      ]
    },
    dtf: {
      title: 'DTF',
      icon: Palette,
      description: 'Impressão DTF para personalização de alta qualidade',
      items: [
        'DTF Têxtil',
        'DTF UV'
      ]
    },
    brindes: {
      title: 'Bolsas/Brindes/Insumos',
      icon: ShoppingBag,
      description: 'Produtos promocionais e insumos para sublimação',
      items: [
        'Malinha Baú',
        'Saquinhos de Embalagem Oxford',
        'Necessaire',
        'Bolsa Plástica',
        'Bolsa 3D',
        'Caneca Personalizada',
        'Almochaveiro',
        'Azulejo',
        'Base Giratória',
        'Bolsa Ecobag',
        'Caneta',
        'Capa de Almofada',
        'Capa de Almofada Lantejola',
        'Cavaletes',
        'Chaveiro Acrílico',
        'Chaveiro Polímero',
        'Chinelo',
        'Colocador de Tiras Chinelo',
        'Fita Térmica',
        'Lavabinho',
        'Lavabo',
        'Mouse Pad',
        'Quebra Cabeça',
        'Relógio de Vidro',
        'Relógio MDF',
        'Suportes',
        'Teflon',
        'Toalha de Banho',
        'Toalha de Rosto'
      ]
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="servicos" className="section bg-muted/30">
      <div className="container-custom py-16 sm:py-20 lg:py-24">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="inline-block bg-accent/10 text-primary font-medium px-4 py-2 rounded-full text-sm mb-6">
            Nossos Serviços
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6 sm:mb-8">
            Soluções completas em
            <span className="block text-accent mt-2">personalização</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Oferecemos duas modalidades: <strong>venda de produtos para sublimação</strong> e <strong>serviços de personalização</strong>, 
            entregando produtos já customizados como canecas, uniformes, bolsas e muito mais.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 sm:mb-16">
          {Object.entries(categories).map(([key, category]) => {
            const IconComponent = category.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === key
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-white text-primary hover:bg-primary/10 border border-primary/20'
                }`}
              >
                <IconComponent size={20} />
                <span className="hidden sm:inline">{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Content */}
        <div className="animate-fade-in">
          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-accent/10 mb-8 sm:mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary/10 p-3 rounded-full">
                {React.createElement(categories[activeCategory].icon, { 
                  className: "text-primary", 
                  size: 32 
                })}
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-2">
                  {categories[activeCategory].title}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {categories[activeCategory].description}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {categories[activeCategory].items.map((item, index) => (
                <div
                  key={index}
                  className="bg-muted/20 rounded-lg p-4 hover:bg-accent/10 hover:border-accent/20 border border-transparent transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-primary font-medium">{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Service Modalities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-accent/10 hover:shadow-md transition-all duration-300">
            <div className="bg-primary/10 p-4 rounded-full w-fit mb-6">
              <ShoppingBag className="text-primary" size={32} />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Venda de Insumos</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Produtos lisos e insumos para sublimação, ideais para quem quer personalizar por conta própria. 
              Oferecemos uma ampla variedade de produtos em branco prontos para personalização.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-accent/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Produtos em branco</span>
              <span className="bg-accent/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Insumos</span>
              <span className="bg-accent/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Materiais</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-accent/10 hover:shadow-md transition-all duration-300">
            <div className="bg-accent/10 p-4 rounded-full w-fit mb-6">
              <Sparkles className="text-accent" size={32} />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Personalização Completa</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Entregamos produtos já personalizados com sua arte, logo ou design. 
              Desde canecas até uniformes completos, cuidamos de todo o processo para você.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-accent/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Produto final</span>
              <span className="bg-accent/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Personalização</span>
              <span className="bg-accent/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Entrega pronta</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 sm:p-12 text-primary-foreground">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Pronto para dar vida às suas ideias?
            </h3>
            <p className="text-lg sm:text-xl text-primary-foreground/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos ajudar você a criar produtos únicos e personalizados.
            </p>
            <button 
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 shadow-lg"
            >
              <span>Solicitar Orçamento</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

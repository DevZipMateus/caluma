import React, { useState } from 'react';
import { Shirt, Coffee, Gift, Briefcase, Palette, Package, Sparkles, Star, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useIsMobile } from '../hooks/use-mobile';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('personalizacao');
  const isMobile = useIsMobile();

  const categories = {
    personalizacao: {
      title: 'Personalização',
      icon: Shirt,
      description: 'Transformamos suas ideias em produtos únicos com técnicas avançadas de personalização.',
      services: [
        {
          name: 'Sublimação em Tecidos',
          description: 'Estampas duradouras e vibrantes em camisetas, uniformes, bonés e muito mais.',
          features: ['Cores vivas', 'Resistente a lavagem', 'Qualidade profissional']
        },
        {
          name: 'Serigrafia',
          description: 'Impressão de alta qualidade para grandes tiragens com acabamento impecável.',
          features: ['Grandes tiragens', 'Custo otimizado', 'Durabilidade garantida']
        },
        {
          name: 'Transfer e Vinil',
          description: 'Aplicações precisas para logotipos, números e designs personalizados.',
          features: ['Precisão milimétrica', 'Várias cores', 'Aplicação rápida']
        }
      ]
    },
    brindes: {
      title: 'Brindes Corporativos',
      icon: Gift,
      description: 'Produtos promocionais que fortalecem sua marca e encantam seus clientes.',
      services: [
        {
          name: 'Canecas Personalizadas',
          description: 'Canecas com sua marca, mensagem ou arte exclusiva.',
          features: ['Sublimação total', 'Qualidade Premium', 'Embalagem especial']
        },
        {
          name: 'Produtos Promocionais',
          description: 'Chaveiros, canetas, blocos e diversos itens promocionais.',
          features: ['Variedade de produtos', 'Preços competitivos', 'Entrega rápida']
        },
        {
          name: 'Kits Corporativos',
          description: 'Conjuntos personalizados para eventos e premiações.',
          features: ['Produtos coordenados', 'Embalagem premium', 'Identidade visual']
        }
      ]
    },
    eventos: {
      title: 'Eventos e Festas',
      icon: Sparkles,
      description: 'Tudo que você precisa para tornar seu evento inesquecível.',
      services: [
        {
          name: 'Decoração Temática',
          description: 'Painéis, toalhas, convites e toda decoração personalizada.',
          features: ['Temas únicos', 'Qualidade superior', 'Coordenação completa']
        },
        {
          name: 'Lembrancinhas',
          description: 'Souvenirs personalizados que marcam momentos especiais.',
          features: ['Design exclusivo', 'Variedade de opções', 'Acabamento premium']
        },
        {
          name: 'Material Gráfico',
          description: 'Convites, cartões, banners e todo material gráfico do evento.',
          features: ['Design profissional', 'Impressão de qualidade', 'Prazos garantidos']
        }
      ]
    },
    uniforme: {
      title: 'Uniformes',
      icon: Briefcase,
      description: 'Uniformes profissionais que transmitem credibilidade e identidade.',
      services: [
        {
          name: 'Uniformes Corporativos',
          description: 'Camisetas, polos e uniformes completos para sua empresa.',
          features: ['Tecidos de qualidade', 'Modelagem adequada', 'Identidade visual']
        },
        {
          name: 'Uniformes Esportivos',
          description: 'Camisetas, shorts e uniformes completos para equipes.',
          features: ['Tecido esportivo', 'Resistência', 'Conforto garantido']
        },
        {
          name: 'Uniformes Escolares',
          description: 'Uniformes duráveis e confortáveis para instituições de ensino.',
          features: ['Durabilidade', 'Conforto', 'Preços especiais']
        }
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
    <section id="servicos" className="py-12 sm:py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <Badge variant="secondary" className="mb-4 text-xs sm:text-sm">Nossos Serviços</Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-4 sm:mb-6">
            Soluções completas em
            <span className="block text-accent mt-1 sm:mt-2">personalização</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground px-4 sm:px-0">
            Da criação à entrega, oferecemos serviços completos para dar vida às suas ideias
            com a qualidade e agilidade que você merece.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-8 sm:mb-12 px-2">
          {Object.entries(categories).map(([key, category]) => {
            const IconComponent = category.icon;
            return (
              <Button
                key={key}
                onClick={() => setActiveCategory(key)}
                variant={activeCategory === key ? "default" : "outline"}
                size={isMobile ? "sm" : "default"}
                className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm"
              >
                <IconComponent size={isMobile ? 14 : 16} />
                <span className={isMobile ? "text-xs" : ""}>{category.title}</span>
              </Button>
            );
          })}
        </div>

        {/* Active Category Content */}
        <div className="animate-fade-in">
          <Card className="mb-6 sm:mb-8 border-accent/20">
            <CardHeader className="text-center p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4">
                <div className="bg-primary/10 p-2 sm:p-3 rounded-full">
                  {React.createElement(categories[activeCategory].icon, { 
                    className: "text-primary", 
                    size: isMobile ? 24 : 32 
                  })}
                </div>
                <div className="text-center sm:text-left">
                  <CardTitle className="text-xl sm:text-2xl lg:text-3xl text-primary">
                    {categories[activeCategory].title}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base lg:text-lg mt-1 sm:mt-2">
                    {categories[activeCategory].description}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {categories[activeCategory].services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:border-accent/40">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-lg sm:text-xl text-primary group-hover:text-accent transition-colors">
                    {service.name}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base mt-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Star className="text-accent flex-shrink-0" size={14} />
                        <span className="text-xs sm:text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-primary to-primary/80 border-none">
          <CardContent className="text-center text-primary-foreground p-6 sm:p-8 lg:p-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4">
              Pronto para dar vida à sua ideia?
            </h3>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-primary-foreground/90 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 sm:px-0">
              Entre em contato conosco e descubra como podemos transformar seus projetos em realidade
              com qualidade excepcional e prazos que surpreendem.
            </p>
            <Button 
              onClick={scrollToContact}
              size={isMobile ? "default" : "lg"}
              variant="secondary"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Sparkles className="mr-2" size={isMobile ? 16 : 20} />
              Solicitar Orçamento
              <ArrowRight className="ml-2" size={isMobile ? 16 : 20} />
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Services;

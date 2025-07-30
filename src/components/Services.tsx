
import React, { useState } from 'react';
import { Shirt, Coffee, Gift, Briefcase, Palette, Package, Sparkles, Star, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('personalizacao');

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
    <section id="servicos" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <Badge variant="secondary" className="mb-4">Nossos Serviços</Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
            Soluções completas em
            <span className="block text-accent mt-2">personalização</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Da criação à entrega, oferecemos serviços completos para dar vida às suas ideias
            com a qualidade e agilidade que você merece.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(categories).map(([key, category]) => {
            const IconComponent = category.icon;
            return (
              <Button
                key={key}
                onClick={() => setActiveCategory(key)}
                variant={activeCategory === key ? "default" : "outline"}
                size="lg"
                className="flex items-center gap-2"
              >
                <IconComponent size={20} />
                <span className="hidden sm:inline">{category.title}</span>
              </Button>
            );
          })}
        </div>

        {/* Active Category Content */}
        <div className="animate-fade-in">
          <Card className="mb-8 border-accent/20">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  {React.createElement(categories[activeCategory].icon, { 
                    className: "text-primary", 
                    size: 32 
                  })}
                </div>
                <div>
                  <CardTitle className="text-2xl lg:text-3xl text-primary">
                    {categories[activeCategory].title}
                  </CardTitle>
                  <CardDescription className="text-lg mt-2">
                    {categories[activeCategory].description}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {categories[activeCategory].services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:border-accent/40">
                <CardHeader>
                  <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">
                    {service.name}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Star className="text-accent" size={16} />
                        <span className="text-sm text-muted-foreground">{feature}</span>
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
          <CardContent className="text-center text-primary-foreground p-8 lg:p-12">
            <h3 className="text-2xl lg:text-4xl font-bold mb-4">
              Pronto para dar vida à sua ideia?
            </h3>
            <p className="text-lg lg:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos transformar seus projetos em realidade
              com qualidade excepcional e prazos que surpreendem.
            </p>
            <Button 
              onClick={scrollToContact}
              size="lg"
              variant="secondary"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Sparkles className="mr-2" size={20} />
              Solicitar Orçamento
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Services;

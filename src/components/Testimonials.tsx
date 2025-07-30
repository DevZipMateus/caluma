
import React from 'react';
import { Star, Quote, User } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Proprietária da Loja Bella Moda',
      content: 'A Caluma transformou completamente nossa identidade visual. Os uniformes ficaram perfeitos e nossos clientes sempre elogiam. A qualidade é excepcional e o atendimento é sempre muito atencioso.',
      rating: 5,
      category: 'Uniformes Corporativos'
    },
    {
      name: 'João Santos',
      role: 'Organizador de Eventos',
      content: 'Já fiz vários projetos com a Caluma e sempre fico impressionado com a criatividade e qualidade dos produtos. Eles entendem exatamente o que precisamos e entregam sempre no prazo.',
      rating: 5,
      category: 'Eventos'
    },
    {
      name: 'Ana Costa',
      role: 'Coordenadora de Marketing',
      content: 'Os brindes corporativos ficaram incríveis! Nossos clientes adoraram e já recebemos vários elogios. A Caluma conseguiu capturar perfeitamente nossa identidade de marca.',
      rating: 5,
      category: 'Brindes Corporativos'
    },
    {
      name: 'Carlos Oliveira',
      role: 'Técnico de Futebol',
      content: 'Os uniformes da nossa equipe ficaram sensacionais. Qualidade excelente, tecido resistente e um design que realmente representa nosso time. Recomendo para todos!',
      rating: 5,
      category: 'Uniformes Esportivos'
    },
    {
      name: 'Lucia Ferreira',
      role: 'Proprietária de Restaurante',
      content: 'Personalizamos camisetas e aventais para nossa equipe. O resultado superou nossas expectativas! A equipe da Caluma é muito profissional e o preço foi justo.',
      rating: 5,
      category: 'Personalização'
    },
    {
      name: 'Roberto Lima',
      role: 'Diretor de Escola',
      content: 'Fizemos os uniformes escolares com a Caluma e foi uma excelente escolha. Qualidade, durabilidade e um preço que cabe no orçamento da escola. Parabéns pelo trabalho!',
      rating: 5,
      category: 'Uniformes Escolares'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? "fill-accent text-accent" : "text-muted-foreground"}
      />
    ));
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase();
  };

  return (
    <section id="depoimentos" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <Badge variant="secondary" className="mb-4">Depoimentos</Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
            O que nossos clientes
            <span className="block text-accent mt-2">dizem sobre nós</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A satisfação dos nossos clientes é nossa maior conquista. 
            Veja o que eles têm a dizer sobre nossos serviços e qualidade.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:border-accent/40 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {getInitials(testimonial.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                
                <Badge variant="outline" className="w-fit">
                  {testimonial.category}
                </Badge>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center gap-1">
                  {renderStars(testimonial.rating)}
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 text-accent/20" size={24} />
                  <p className="text-muted-foreground leading-relaxed pl-4">
                    {testimonial.content}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 lg:mt-24">
          <Card className="bg-gradient-to-r from-primary to-primary/80 border-none">
            <CardContent className="text-center text-primary-foreground p-8 lg:p-12">
              <h3 className="text-2xl lg:text-3xl font-bold mb-8">
                Números que falam por si
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                  <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">500+</div>
                  <p className="text-primary-foreground/90">Clientes Satisfeitos</p>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">2000+</div>
                  <p className="text-primary-foreground/90">Produtos Entregues</p>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">98%</div>
                  <p className="text-primary-foreground/90">Satisfação dos Clientes</p>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">5</div>
                  <p className="text-primary-foreground/90">Anos de Experiência</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

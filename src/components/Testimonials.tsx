
import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Marina Silva',
    role: 'Empreendedora',
    company: 'Loja de Roupas Personalizadas',
    content: 'A Caluma transformou minha pequena loja em um negócio próspero. A qualidade dos produtos e o atendimento são excepcionais!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 2,
    name: 'Carlos Eduardo',
    role: 'Coordenador',
    company: 'Empresa de Construção',
    content: 'Precisávamos de uniformes personalizados para toda a equipe. A Caluma entregou tudo no prazo e com qualidade impecável.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 3,
    name: 'Ana Beatriz',
    role: 'Organizadora de Eventos',
    company: 'Eventos Especiais',
    content: 'Sempre recorro à Caluma para brindes personalizados. A criatividade e agilidade deles fazem toda a diferença nos meus eventos.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 4,
    name: 'Roberto Santos',
    role: 'Proprietário',
    company: 'Restaurante Família',
    content: 'Os aventais e tocas personalizados da Caluma deram uma identidade única ao nosso restaurante. Clientes sempre elogiam!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 5,
    name: 'Júlia Costa',
    role: 'Enfermeira',
    company: 'Clínica Médica',
    content: 'Os jalecos personalizados da Caluma são de excelente qualidade. Confortáveis e com acabamento perfeito.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: 6,
    name: 'Diego Almeida',
    role: 'Técnico',
    company: 'Equipe de Futebol',
    content: 'Coletes e uniformes esportivos da Caluma são top! Qualidade profissional que faz a diferença em campo.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
  }
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="section bg-background">
      <div className="container-custom py-16 sm:py-20 lg:py-24">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="inline-block bg-accent/10 text-primary font-medium px-4 py-2 rounded-full text-sm mb-6">
            Depoimentos
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6 sm:mb-8">
            O que nossos clientes
            <span className="block text-accent mt-2">falam sobre nós</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            A satisfação dos nossos clientes é o que nos motiva a continuar inovando e oferecendo o melhor serviço.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-accent/10 hover:shadow-md hover:border-accent/20 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="bg-accent/10 p-3 rounded-full w-fit mb-4">
                <Quote className="text-accent" size={24} />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-accent fill-current" size={16} />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 sm:p-12 text-primary-foreground">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-2">500+</div>
              <p className="text-primary-foreground/90">Produtos entregues</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-2">200+</div>
              <p className="text-primary-foreground/90">Clientes satisfeitos</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-2">50+</div>
              <p className="text-primary-foreground/90">Tipos de produtos</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-2">98%</div>
              <p className="text-primary-foreground/90">Taxa de satisfação</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

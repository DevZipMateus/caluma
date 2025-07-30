
import React from 'react';
import { Target, Eye, Heart, Users, Zap, Shield, Award, HandHeart } from 'lucide-react';

const AboutUs = () => {
  const values = [
    {
      icon: Users,
      title: 'Cliente em primeiro lugar',
      description: 'Nossa prioridade é ouvir, entender e atender com excelência.'
    },
    {
      icon: Zap,
      title: 'Criatividade como ferramenta',
      description: 'Valorizamos ideias e ajudamos a colocá-las no mundo.'
    },
    {
      icon: Award,
      title: 'Agilidade e qualidade',
      description: 'Entregamos rápido, mas sem abrir mão do cuidado e acabamento.'
    },
    {
      icon: HandHeart,
      title: 'Parceria e respeito',
      description: 'Tratamos cada cliente como parceiro, cada fornecedor como aliado.'
    },
    {
      icon: Target,
      title: 'Empreendedorismo com propósito',
      description: 'Somos uma marca que nasceu da coragem de começar.'
    },
    {
      icon: Shield,
      title: 'Ética e confiança',
      description: 'Negociamos com clareza, trabalhamos com integridade.'
    },
  ];

  return (
    <section id="sobre" className="section bg-background">
      <div className="container-custom py-16 sm:py-20 lg:py-24">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="inline-block bg-accent/10 text-primary font-medium px-4 py-2 rounded-full text-sm mb-6">
            Sobre a Caluma
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6 sm:mb-8">
            Mais do que uma empresa,
            <span className="block text-accent mt-2">uma extensão da sua criatividade</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            A Caluma Variedades e Personalizados é uma empresa dedicada a transformar ideias em produtos reais, 
            com acabamento de qualidade, identidade visual forte e uma entrega que supera expectativas.
          </p>
        </div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-20">
          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-accent/10 hover:shadow-md transition-all duration-300 animate-fade-in">
            <div className="bg-primary/10 p-4 rounded-full w-fit mb-6">
              <Target className="text-primary" size={32} />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Nossa Missão</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Oferecer variedade, qualidade e personalização, ajudando clientes a expressarem suas ideias 
              em produtos únicos e funcionais, sempre com um atendimento humanizado e parceiro.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-accent/10 hover:shadow-md transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="bg-accent/10 p-4 rounded-full w-fit mb-6">
              <Eye className="text-accent" size={32} />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Nossa Visão</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Ser referência regional e nacional no segmento de personalizados e insumos criativos, 
              reconhecida pela inovação, excelência e compromisso com o sucesso de nossos clientes.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full text-sm mb-4">
              Nossos Valores
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4">
              O que nos move todos os dias
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nossos valores são a base de tudo o que fazemos e como nos relacionamos com nossos clientes e parceiros.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-accent/10 hover:shadow-md hover:border-accent/20 transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-accent/10 p-3 rounded-full w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="text-primary" size={24} />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-primary mb-3">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 sm:p-12 text-center text-primary-foreground">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Pronto para transformar sua ideia em realidade?
            </h3>
            <p className="text-lg sm:text-xl text-primary-foreground/90 mb-6 sm:mb-8">
              Entre em contato conosco e descubra como podemos ajudar você a criar produtos únicos e personalizados.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contato');
                if (element) {
                  const offsetTop = element.offsetTop - 80;
                  window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                }
              }}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 shadow-lg"
            >
              <Heart size={20} />
              Fale Conosco
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

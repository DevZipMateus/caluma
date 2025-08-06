
import React from 'react';
import { Shirt, FileText, Settings, Coffee, Paintbrush, Palette } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      name: 'CAMISAS E UNIFORMES',
      icon: Shirt,
      href: '#camisas'
    },
    {
      name: 'PAPELARIA',
      icon: FileText,
      href: '#papelaria'
    },
    {
      name: 'EQUIPAMENTOS',
      icon: Settings,
      href: '#equipamentos'
    },
    {
      name: 'CANECAS',
      icon: Coffee,
      href: '#canecas'
    },
    {
      name: 'SUBLIMAÇÃO',
      icon: Paintbrush,
      href: '#sublimacao'
    },
    {
      name: 'SERIGRAFIA',
      icon: Palette,
      href: '#serigrafia'
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-primary py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <button
                key={index}
                onClick={() => scrollToSection(category.href)}
                className="flex flex-col items-center justify-center text-primary-foreground hover:text-accent transition-colors duration-300 group min-w-[120px] sm:min-w-[140px] lg:min-w-[160px] p-2"
              >
                <div className="mb-2 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent size={32} className="sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
                </div>
                <span className="text-xs sm:text-sm lg:text-base font-medium text-center leading-tight">
                  {category.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;

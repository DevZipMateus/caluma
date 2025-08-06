
import React from 'react';
import { Shirt, FileText, Settings, Coffee, Paintbrush, Palette } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
  const navigate = useNavigate();

  const categories = [
    {
      name: 'CAMISAS E UNIFORMES',
      icon: Shirt,
      href: '/camisas-uniformes',
    },
    {
      name: 'PAPELARIA',
      icon: FileText,
      href: '/papelaria',
    },
    {
      name: 'EQUIPAMENTOS',
      icon: Settings,
      href: '/equipamentos',
    },
    {
      name: 'CANECAS',
      icon: Coffee,
      href: '/canecas',
    },
    {
      name: 'SUBLIMAÇÃO',
      icon: Paintbrush,
      href: '/sublimacao',
    },
    {
      name: 'SERIGRAFIA',
      icon: Palette,
      href: '/serigrafia',
    }
  ];

  const handleCategoryClick = (category: any) => {
    console.log(`[Categories] Navigating directly to category: ${category.name}`);
    navigate(category.href);
  };

  return (
    <section className="bg-primary py-3 sm:py-4 md:py-6">
      <div className="container mx-auto px-2 sm:px-4 md:px-6">
        {/* Layout Responsivo */}
        <div className="hidden md:flex flex-wrap justify-center items-center gap-3 lg:gap-6 xl:gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            
            return (
              <div key={index} className="relative">
                <button
                  onClick={() => handleCategoryClick(category)}
                  className="flex flex-col items-center justify-center text-primary-foreground hover:text-accent transition-colors duration-300 group min-w-[120px] md:min-w-[140px] lg:min-w-[160px] p-2 md:p-3 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary rounded-lg"
                  aria-label={`Categoria ${category.name}`}
                  type="button"
                >
                  <div className="mb-2 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={28} className="md:w-8 md:h-8 lg:w-10 lg:h-10" aria-hidden="true" />
                  </div>
                  <span className="text-xs md:text-sm lg:text-base font-medium text-center leading-tight px-1">
                    {category.name}
                  </span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Layout Mobile - Grid 2x3 */}
        <div className="md:hidden grid grid-cols-2 gap-3">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            
            return (
              <div key={index} className="relative">
                <button
                  onClick={() => handleCategoryClick(category)}
                  className="flex flex-col items-center justify-center text-primary-foreground hover:text-accent transition-colors duration-300 group w-full p-3 rounded-lg hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
                  aria-label={`Categoria ${category.name}`}
                  type="button"
                >
                  <div className="mb-2 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={24} aria-hidden="true" />
                  </div>
                  <span className="text-xs font-medium text-center leading-tight px-1">
                    {category.name}
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;

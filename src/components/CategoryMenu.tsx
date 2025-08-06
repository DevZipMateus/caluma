
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const CategoryMenu = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const categories = [
    {
      name: 'Camisas e Uniformes',
      path: '/camisas-uniformes',
      subcategories: [
        'Camisas Masculinas',
        'Camisas Femininas', 
        'Regatas',
        'Camisas Polo',
        'Uniformes Profissionais'
      ]
    },
    {
      name: 'Canecas',
      path: '/canecas',
      subcategories: [
        'Canecas Brancas',
        'Canecas Coloridas',
        'Canecas de Alumínio',
        'Canecas Inox',
        'Canecas de Chopp'
      ]
    },
    {
      name: 'Sublimação',
      path: '/sublimacao',
      subcategories: [
        'Tintas para Sublimação',
        'Papel Transfer',
        'Papel Fotográfico',
        'Materiais Diversos'
      ]
    },
    {
      name: 'Serigrafia',
      path: '/serigrafia',
      subcategories: [
        'Tintas Serigráficas',
        'Telas e Rodos',
        'Emulsão Fotográfica',
        'Solventes'
      ]
    },
    {
      name: 'Equipamentos',
      path: '/equipamentos',
      subcategories: [
        'Prensas Térmicas',
        'Máquinas de Corte',
        'Impressoras',
        'Kit Iniciante'
      ]
    },
    {
      name: 'Papelaria',
      path: '/papelaria',
      subcategories: [
        'Papel A4',
        'Papel Transfer',
        'Papel Adesivo',
        'Papel Fotográfico'
      ]
    }
  ];

  const handleMouseEnter = (categoryName: string) => {
    setActiveDropdown(categoryName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm z-30">
      <div className="max-w-7xl mx-auto">
        <div className="flex overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <div
              key={category.name}
              className="relative flex-shrink-0"
              onMouseEnter={() => handleMouseEnter(category.name)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to={category.path}
                className={`flex items-center gap-1 px-3 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap border-b-2 ${
                  isActivePath(category.path)
                    ? 'text-primary border-primary bg-primary/5'
                    : 'text-gray-600 hover:text-primary border-transparent hover:border-primary/30'
                }`}
              >
                <span>{category.name}</span>
                <ChevronDown size={14} className="opacity-60" />
              </Link>

              {/* Dropdown Menu */}
              {activeDropdown === category.name && (
                <div className="absolute top-full left-0 min-w-[200px] bg-white border border-gray-200 rounded-md shadow-lg z-50 py-2">
                  {category.subcategories.map((subcategory, index) => (
                    <button
                      key={index}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {subcategory}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CategoryMenu;

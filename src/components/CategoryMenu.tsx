
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useIsDesktop } from '../hooks/useIsDesktop';

const categories = [
  { name: 'Sublimação', path: '/sublimacao' },
  { name: 'Serigrafia', path: '/serigrafia' },
  { name: 'Camisas e Uniformes', path: '/camisas-uniformes' },
  { name: 'Canecas', path: '/canecas' },
  { name: 'Equipamentos', path: '/equipamentos' },
  { name: 'Papelaria', path: '/papelaria' },
];

const CategoryMenu: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isDesktop = useIsDesktop();

  // Não renderizar na versão mobile
  if (!isDesktop) {
    return null;
  }

  const handleCategoryClick = (categoryPath: string) => {
    navigate(categoryPath);
  };

  return (
    <nav className="sticky top-14 sm:top-16 md:top-18 lg:top-20 xl:top-24 z-30 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-8">
          {categories.map((category) => {
            const isActive = location.pathname === category.path;
            return (
              <button
                key={category.path}
                onClick={() => handleCategoryClick(category.path)}
                className={`py-4 px-3 text-sm font-medium border-b-2 transition-colors ${
                  isActive
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {category.name}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default CategoryMenu;

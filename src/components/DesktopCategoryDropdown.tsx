
import React from 'react';
import { ChevronDown, Shirt, FileText, Settings, Coffee, Paintbrush, Palette } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useDesktopDropdownState } from '../hooks/useDesktopDropdownState';

const DesktopCategoryDropdown: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { 
    categoryDropdownOpen, 
    setCategoryDropdownOpen, 
    openSubcategoryFromCategory,
    closeAllDropdowns 
  } = useDesktopDropdownState();

  const categories = [
    {
      title: 'Camisas e Uniformes',
      icon: Shirt,
      path: '/camisas-uniformes',
    },
    {
      title: 'Papelaria',
      icon: FileText,
      path: '/papelaria',
    },
    {
      title: 'Equipamentos',
      icon: Settings,
      path: '/equipamentos',
    },
    {
      title: 'Canecas',
      icon: Coffee,
      path: '/canecas',
    },
    {
      title: 'Sublimação',
      icon: Paintbrush,
      path: '/sublimacao',
    },
    {
      title: 'Serigrafia',
      icon: Palette,
      path: '/serigrafia',
    }
  ];

  const handleCategoryClick = (path: string) => {
    navigate(path);
    closeAllDropdowns();
    // After navigation, open the subcategory dropdown
    setTimeout(() => {
      openSubcategoryFromCategory();
    }, 100);
  };

  const currentCategory = categories.find(cat => location.pathname === cat.path);
  const displayTitle = currentCategory ? currentCategory.title : 'Categorias';

  return (
    <DropdownMenu open={categoryDropdownOpen} onOpenChange={setCategoryDropdownOpen}>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 bg-primary text-primary-foreground py-2 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors">
          {currentCategory && <currentCategory.icon size={18} />}
          {displayTitle}
          <ChevronDown size={16} className={`transition-transform ${categoryDropdownOpen ? 'rotate-180' : ''}`} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-popover border shadow-lg z-50">
        {categories.map((category) => (
          <DropdownMenuItem
            key={category.path}
            onClick={() => handleCategoryClick(category.path)}
            className="flex items-center gap-2 cursor-pointer hover:bg-accent"
          >
            <category.icon size={16} />
            {category.title}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DesktopCategoryDropdown;

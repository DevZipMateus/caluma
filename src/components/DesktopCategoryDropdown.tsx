
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
    console.log(`[DesktopCategoryDropdown] Navigating to category: ${path}`);
    console.log(`[DesktopCategoryDropdown] Current location: ${location.pathname}`);
    
    // Close all dropdowns first
    closeAllDropdowns();
    
    // Navigate to the category page
    navigate(path);
    
    // After navigation, open the subcategory dropdown with a slight delay
    // to ensure the navigation has completed
    setTimeout(() => {
      console.log(`[DesktopCategoryDropdown] Opening subcategory dropdown for: ${path}`);
      openSubcategoryFromCategory();
    }, 150);
  };

  const handleDropdownOpenChange = (open: boolean) => {
    console.log(`[DesktopCategoryDropdown] Dropdown state changing to: ${open}`);
    setCategoryDropdownOpen(open);
  };

  const currentCategory = categories.find(cat => location.pathname === cat.path);
  const displayTitle = currentCategory ? currentCategory.title : 'Categorias';

  return (
    <DropdownMenu open={categoryDropdownOpen} onOpenChange={handleDropdownOpenChange}>
      <DropdownMenuTrigger asChild>
        <button 
          className="flex items-center gap-2 bg-primary text-primary-foreground py-2 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
          aria-label="Selecionar categoria"
          type="button"
        >
          {currentCategory && <currentCategory.icon size={18} aria-hidden="true" />}
          {displayTitle}
          <ChevronDown 
            size={16} 
            className={`transition-transform duration-200 ${categoryDropdownOpen ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-popover border shadow-lg z-50">
        {categories.map((category) => (
          <DropdownMenuItem
            key={category.path}
            onClick={() => handleCategoryClick(category.path)}
            className="flex items-center gap-2 cursor-pointer hover:bg-accent focus:bg-accent transition-colors"
          >
            <category.icon size={16} aria-hidden="true" />
            {category.title}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DesktopCategoryDropdown;


import React, { useState } from 'react';
import { Grid3X3, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const categories = [
  { name: 'Sublimação', path: '/sublimacao', icon: '🎨' },
  { name: 'Serigrafia', path: '/serigrafia', icon: '🖼️' },
  { name: 'Camisas e Uniformes', path: '/camisas-uniformes', icon: '👕' },
  { name: 'Canecas', path: '/canecas', icon: '☕' },
  { name: 'Equipamentos', path: '/equipamentos', icon: '⚙️' },
  { name: 'Papelaria', path: '/papelaria', icon: '📄' },
];

const MobileCategoryButton: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleCategoryClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="flex-1 bg-primary text-primary-foreground py-3 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
          <Grid3X3 size={20} />
          Categorias
        </button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[80vh]">
        <SheetHeader>
          <SheetTitle className="text-center text-xl">Nossas Categorias</SheetTitle>
        </SheetHeader>
        <div className="mt-6 grid grid-cols-1 gap-4">
          {categories.map((category) => {
            const isActive = location.pathname === category.path;
            return (
              <Link
                key={category.path}
                to={category.path}
                onClick={handleCategoryClick}
                className={`p-4 rounded-lg border transition-all ${
                  isActive
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-white hover:bg-gray-50 border-gray-200 hover:border-primary/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{category.icon}</span>
                  <div>
                    <h3 className="font-semibold text-left">{category.name}</h3>
                    <p className={`text-sm text-left ${
                      isActive ? 'text-primary-foreground/80' : 'text-gray-600'
                    }`}>
                      Produtos e serviços
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileCategoryButton;

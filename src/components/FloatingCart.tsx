
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useProductSelection } from '../hooks/useProductSelection';

interface FloatingCartProps {
  onOpenCart: () => void;
}

const FloatingCart: React.FC<FloatingCartProps> = ({ onOpenCart }) => {
  const { getTotalItems } = useProductSelection();
  const totalItems = getTotalItems();

  if (totalItems === 0) return null;

  return (
    <div className="fixed bottom-20 right-4 z-50">
      <Button
        onClick={onOpenCart}
        size="lg"
        className="rounded-full shadow-lg hover:scale-105 transition-transform"
      >
        <div className="relative">
          <ShoppingCart size={24} />
          <Badge 
            variant="destructive" 
            className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs p-0"
          >
            {totalItems}
          </Badge>
        </div>
      </Button>
    </div>
  );
};

export default FloatingCart;


import React, { useState } from 'react';
import { ShoppingCart, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useProductSelection } from '../hooks/useProductSelection';
import SelectedProductsList from './SelectedProductsList';

const FloatingCart = () => {
  const { selectedProducts } = useProductSelection();
  const [isListOpen, setIsListOpen] = useState(false);
  
  const productCount = selectedProducts.length;

  // Don't show the cart if no products are selected
  if (productCount === 0) return null;

  return (
    <>
      <div className="fixed bottom-20 left-4 z-40">
        <Button
          onClick={() => setIsListOpen(true)}
          size="lg"
          className="relative rounded-full h-14 w-14 shadow-lg hover:scale-110 transition-transform"
        >
          <ShoppingCart size={20} />
          <Badge 
            variant="secondary" 
            className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 flex items-center justify-center text-xs font-bold"
          >
            {productCount}
          </Badge>
        </Button>
      </div>

      <SelectedProductsList 
        isOpen={isListOpen}
        onClose={() => setIsListOpen(false)}
      />
    </>
  );
};

export default FloatingCart;

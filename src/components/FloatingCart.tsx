
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, X, Plus, Minus } from 'lucide-react';
import { useProductSelection } from '../hooks/useProductSelection';
import QuoteModal from './QuoteModal';

const FloatingCart: React.FC = () => {
  const { selectedProducts, removeProduct, updateQuantity } = useProductSelection();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const totalItems = selectedProducts.reduce((sum, product) => sum + product.quantity, 0);

  if (selectedProducts.length === 0) return null;

  return (
    <>
      <div className="fixed bottom-20 right-4 z-40">
        <div className={`bg-white rounded-lg shadow-lg border transition-all duration-300 ${
          isExpanded ? 'w-80 max-w-[calc(100vw-2rem)]' : 'w-auto'
        }`}>
          {/* Cart Header */}
          <div className="flex items-center justify-between p-3 border-b">
            <Button
              variant="ghost"
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 flex-1 justify-start p-0"
            >
              <ShoppingCart size={20} />
              <span className="font-medium">Carrinho</span>
              <Badge variant="secondary" className="ml-1">
                {totalItems}
              </Badge>
            </Button>
            
            {isExpanded && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(false)}
                className="p-1"
              >
                <X size={16} />
              </Button>
            )}
          </div>

          {/* Cart Items - Only show when expanded */}
          {isExpanded && (
            <div className="max-h-60 overflow-y-auto">
              {selectedProducts.map((product) => (
                <div key={product.id} className="p-3 border-b last:border-b-0 flex items-center gap-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium line-clamp-1">{product.name}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-6 w-6 p-0"
                        onClick={() => {
                          if (product.quantity === 1) {
                            removeProduct(product.id);
                          } else {
                            updateQuantity(product.id, product.quantity - 1);
                          }
                        }}
                      >
                        <Minus size={10} />
                      </Button>
                      <span className="text-xs font-medium min-w-[16px] text-center">
                        {product.quantity}
                      </span>
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-6 w-6 p-0"
                        onClick={() => updateQuantity(product.id, product.quantity + 1)}
                      >
                        <Plus size={10} />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="h-6 w-6 p-0 ml-auto"
                        onClick={() => removeProduct(product.id)}
                      >
                        <X size={10} />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Cart Footer - Only show when expanded */}
          {isExpanded && (
            <div className="p-3 border-t">
              <Button
                onClick={() => setIsQuoteModalOpen(true)}
                className="w-full"
                size="sm"
              >
                Finalizar Orçamento ({totalItems} {totalItems === 1 ? 'item' : 'itens'})
              </Button>
            </div>
          )}
        </div>
      </div>

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        products={selectedProducts}
      />
    </>
  );
};

export default FloatingCart;

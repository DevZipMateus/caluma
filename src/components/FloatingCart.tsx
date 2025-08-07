
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, X, Plus, Minus, MessageSquare } from 'lucide-react';
import { useProductSelection } from '../hooks/useProductSelection';
import QuoteModal from './QuoteModal';

const FloatingCart: React.FC = () => {
  const { selectedProducts, removeProduct, updateQuantity } = useProductSelection();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const totalItems = selectedProducts.reduce((sum, product) => sum + product.quantity, 0);
  const isEmpty = selectedProducts.length === 0;

  return (
    <>
      <div className="fixed bottom-20 right-4 z-40">
        <div className={`bg-white rounded-lg shadow-2xl border-2 border-primary/20 transition-all duration-300 ${
          isExpanded ? 'w-80 max-w-[calc(100vw-2rem)]' : 'w-auto'
        }`}>
          {/* Cart Header */}
          <div className="flex items-center justify-between p-4 border-b bg-primary/5">
            <Button
              variant="secondary"
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 flex-1 justify-start p-0 border border-gray-200"
              style={{ backgroundColor: '#05038c', color: 'white' }}
            >
              <div className="relative">
                <ShoppingCart size={20} className="text-white" />
                {!isEmpty && (
                  <Badge 
                    variant="default" 
                    className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs bg-accent hover:bg-accent"
                  >
                    {totalItems}
                  </Badge>
                )}
              </div>
              <div className="flex flex-col items-start">
                <span className="font-semibold text-white">Carrinho</span>
                <span className="text-xs text-white/80">
                  {isEmpty 
                    ? 'Nenhum item selecionado' 
                    : `${totalItems} ${totalItems === 1 ? 'item selecionado' : 'itens selecionados'}`
                  }
                </span>
              </div>
            </Button>
            
            {isExpanded && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsExpanded(false)}
                className="p-1 hover:bg-primary/10"
              >
                <X size={16} />
              </Button>
            )}
          </div>

          {/* Cart Items - Only show when expanded */}
          {isExpanded && (
            <>
              <div className="max-h-60 overflow-y-auto">
                {isEmpty ? (
                  <div className="p-4 text-center text-gray-500">
                    <ShoppingCart size={48} className="mx-auto mb-2 text-gray-300" />
                    <p className="text-sm">Seu carrinho está vazio</p>
                    <p className="text-xs text-gray-400 mt-1">Adicione produtos para fazer um orçamento</p>
                  </div>
                ) : (
                  selectedProducts.map((product) => (
                    <div key={product.id} className="p-3 border-b last:border-b-0 flex items-center gap-3 hover:bg-gray-50">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded border"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium line-clamp-1">{product.name}</h4>
                        <div className="flex items-center justify-between mt-1">
                          <div className="flex items-center gap-2">
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
                            <span className="text-xs font-bold min-w-[20px] text-center bg-primary/10 px-2 py-1 rounded">
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
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-6 w-6 p-0 text-destructive hover:text-destructive hover:bg-destructive/10 border-destructive/20"
                            onClick={() => removeProduct(product.id)}
                          >
                            <X size={10} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Cart Footer */}
              <div className="p-4 border-t bg-primary/5">
                <Button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  size="sm"
                  disabled={isEmpty}
                >
                  <MessageSquare size={16} className="mr-2" />
                  {isEmpty 
                    ? 'Adicione itens para orçar' 
                    : `Finalizar Orçamento (${totalItems} ${totalItems === 1 ? 'item' : 'itens'})`
                  }
                </Button>
              </div>
            </>
          )}

          {/* Quick Finalize Button - Show when collapsed */}
          {!isExpanded && (
            <div className="p-3">
              <Button
                onClick={() => setIsQuoteModalOpen(true)}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                size="sm"
                disabled={isEmpty}
              >
                <MessageSquare size={14} className="mr-1" />
                {isEmpty ? 'Carrinho' : 'Finalizar'}
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

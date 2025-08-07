
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, X, Plus, Minus, MessageSquare, Package } from 'lucide-react';
import { useProductSelection } from '../contexts/ProductSelectionContext';
import QuoteModal from './QuoteModal';

const FloatingCart: React.FC = () => {
  const { selectedProducts, removeProduct, updateQuantity } = useProductSelection();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const totalItems = selectedProducts.reduce((sum, product) => sum + product.quantity, 0);
  const isEmpty = selectedProducts.length === 0;

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40">
        <div className={`bg-white rounded-2xl shadow-2xl border border-gray-100 transition-all duration-500 ease-out ${
          isExpanded ? 'w-96 max-w-[calc(100vw-3rem)]' : 'w-auto'
        } ${isExpanded ? 'scale-100' : 'hover:scale-105'}`}>
          
          {/* Cart Header with Gradient Background */}
          <div className="relative overflow-hidden rounded-t-2xl bg-gradient-to-r from-primary via-primary/90 to-primary/80 p-4">
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
            
            <div className="relative flex items-center justify-between">
              <Button
                variant="ghost"
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-3 flex-1 justify-start p-0 h-auto hover:bg-transparent text-white"
              >
                <div className="relative">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 transition-all duration-300 hover:bg-white/30">
                    <ShoppingCart size={24} className="text-white" />
                  </div>
                  {!isEmpty && (
                    <Badge 
                      variant="default" 
                      className="absolute -top-1 -right-1 h-6 w-6 p-0 flex items-center justify-center text-xs bg-accent hover:bg-accent text-accent-foreground font-bold animate-pulse"
                    >
                      {totalItems}
                    </Badge>
                  )}
                </div>
                <div className="flex flex-col items-start text-left">
                  <span className="font-bold text-lg text-white">Carrinho</span>
                  <span className="text-sm text-white/90 font-medium">
                    {isEmpty 
                      ? 'Vazio' 
                      : `${totalItems} ${totalItems === 1 ? 'item' : 'itens'}`
                    }
                  </span>
                </div>
              </Button>
              
              {isExpanded && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsExpanded(false)}
                  className="p-2 hover:bg-white/20 text-white rounded-xl transition-all duration-300"
                >
                  <X size={18} />
                </Button>
              )}
            </div>
          </div>

          {/* Cart Items - Only show when expanded */}
          {isExpanded && (
            <>
              <div className="max-h-80 overflow-y-auto">
                {isEmpty ? (
                  <div className="p-8 text-center">
                    <div className="bg-gray-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                      <Package size={32} className="text-gray-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Carrinho Vazio</h3>
                    <p className="text-sm text-gray-500">Adicione produtos para fazer seu orçamento</p>
                  </div>
                ) : (
                  <div className="p-4 space-y-3">
                    {selectedProducts.map((product, index) => (
                      <div key={product.id} className={`bg-gray-50 rounded-xl p-4 border border-gray-100 hover:shadow-md transition-all duration-300 animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className="flex items-start gap-3">
                          <div className="relative">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-16 h-16 object-cover rounded-lg border-2 border-white shadow-sm"
                            />
                            <div className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                              {product.quantity}
                            </div>
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2">{product.name}</h4>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 bg-white rounded-lg p-1 border">
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="h-7 w-7 p-0 hover:bg-red-50 hover:text-red-600 transition-colors"
                                  onClick={() => {
                                    if (product.quantity === 1) {
                                      removeProduct(product.id);
                                    } else {
                                      updateQuantity(product.id, product.quantity - 1);
                                    }
                                  }}
                                >
                                  <Minus size={12} />
                                </Button>
                                <span className="text-sm font-bold min-w-[24px] text-center text-primary">
                                  {product.quantity}
                                </span>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="h-7 w-7 p-0 hover:bg-green-50 hover:text-green-600 transition-colors"
                                  onClick={() => updateQuantity(product.id, product.quantity + 1)}
                                >
                                  <Plus size={12} />
                                </Button>
                              </div>
                              
                              <Button
                                size="sm"
                                variant="ghost"
                                className="h-8 w-8 p-0 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-300"
                                onClick={() => removeProduct(product.id)}
                              >
                                <X size={14} />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Cart Footer with Gradient */}
              <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-b-2xl border-t border-gray-100">
                <Button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="w-full bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent/80 text-accent-foreground font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                  size="lg"
                  disabled={isEmpty}
                >
                  <MessageSquare size={18} className="mr-2" />
                  {isEmpty 
                    ? 'Adicione itens para orçar' 
                    : `Solicitar Orçamento • ${totalItems} ${totalItems === 1 ? 'item' : 'itens'}`
                  }
                </Button>
              </div>
            </>
          )}

          {/* Compact Finalize Button - Show when collapsed */}
          {!isExpanded && (
            <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-b-2xl">
              <Button
                onClick={() => setIsQuoteModalOpen(true)}
                className="w-full bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent/80 text-accent-foreground font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                size="sm"
                disabled={isEmpty}
              >
                <MessageSquare size={16} className="mr-2" />
                {isEmpty ? 'Carrinho Vazio' : 'Solicitar Orçamento'}
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

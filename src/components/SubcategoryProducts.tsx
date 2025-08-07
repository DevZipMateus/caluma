
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, ShoppingCart, Plus, Minus } from 'lucide-react';
import { useProductSelection } from '../hooks/useProductSelection';
import { getSubcategoryProducts } from '../utils/subcategoryProducts';

interface SubcategoryProductsProps {
  subcategory: string | null;
}

const SubcategoryProducts: React.FC<SubcategoryProductsProps> = ({ subcategory }) => {
  const { selectedProducts, addProduct, removeProduct, updateQuantity } = useProductSelection();

  if (!subcategory) return null;

  const products = getSubcategoryProducts(subcategory);
  
  if (products.length === 0) return null;

  const handleWhatsAppContact = (productName: string) => {
    const message = `Olá! Gostaria de mais informações sobre: ${productName}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/5573998503370?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  const handleQuoteRequest = (product: typeof products[0]) => {
    const selectedProduct = selectedProducts.find(p => p.id === product.id);
    if (selectedProduct) {
      updateQuantity(product.id, selectedProduct.quantity + 1);
    } else {
      addProduct({
        id: product.id,
        name: product.name,
        image: product.image,
        description: product.description,
        quantity: 1
      });
    }
  };

  const getProductQuantity = (productId: number) => {
    const product = selectedProducts.find(p => p.id === productId);
    return product ? product.quantity : 0;
  };

  return (
    <div className="w-full mb-4 sm:mb-6 animate-fade-in">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-3 sm:p-4">
          <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-primary mb-4">
            {subcategory}
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => {
              const quantity = getProductQuantity(product.id);
              return (
                <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="aspect-square overflow-hidden rounded-t-lg">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-3">
                      <h4 className="font-semibold text-foreground mb-2 text-sm line-clamp-1">
                        {product.name}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                        {product.description}
                      </p>
                      
                      {/* Quantity Controls */}
                      {quantity > 0 && (
                        <div className="flex items-center justify-center gap-2 mb-3 p-2 bg-primary/10 rounded-lg">
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-6 w-6 p-0"
                            onClick={() => {
                              if (quantity === 1) {
                                removeProduct(product.id);
                              } else {
                                updateQuantity(product.id, quantity - 1);
                              }
                            }}
                          >
                            <Minus size={12} />
                          </Button>
                          <span className="text-sm font-medium min-w-[20px] text-center">
                            {quantity}
                          </span>
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-6 w-6 p-0"
                            onClick={() => updateQuantity(product.id, quantity + 1)}
                          >
                            <Plus size={12} />
                          </Button>
                        </div>
                      )}

                      <div className="flex gap-2">
                        <Button
                          onClick={() => handleQuoteRequest(product)}
                          className="flex-1"
                          size="sm"
                          variant={quantity > 0 ? "default" : "outline"}
                        >
                          <ShoppingCart size={14} className="mr-1" />
                          {quantity > 0 ? "Adicionado" : "Solicitar Orçamento"}
                        </Button>
                        <Button
                          onClick={() => handleWhatsAppContact(product.name)}
                          size="sm"
                          variant="ghost"
                          className="px-2"
                        >
                          <MessageCircle size={14} />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubcategoryProducts;

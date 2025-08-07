
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Plus, Minus, Check } from 'lucide-react';
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

  const handleSelectProduct = (product: typeof products[0]) => {
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
              const isSelected = quantity > 0;
              
              return (
                <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="aspect-square overflow-hidden rounded-t-lg relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {isSelected && (
                        <div className="absolute top-2 right-2 bg-primary text-primary-foreground rounded-full p-1">
                          <Check size={16} />
                        </div>
                      )}
                    </div>
                    
                    <div className="p-3 space-y-3">
                      {/* Product Info */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-1 text-sm line-clamp-1">
                          {product.name}
                        </h4>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {product.description}
                        </p>
                      </div>

                      {/* Main Selection Button */}
                      <Button
                        onClick={() => handleSelectProduct(product)}
                        className={`w-full ${isSelected ? 'bg-primary hover:bg-primary/90' : 'bg-secondary hover:bg-secondary/80'}`}
                        size="sm"
                      >
                        {isSelected ? <Check size={14} className="mr-2" /> : <ShoppingCart size={14} className="mr-2" />}
                        {isSelected ? `Selecionado (${quantity})` : 'Selecionar Produto'}
                      </Button>

                      {/* Quantity Controls - Show when selected */}
                      {isSelected && (
                        <div className="flex items-center justify-between bg-primary/10 rounded-lg p-2">
                          <span className="text-sm font-medium text-primary">Quantidade:</span>
                          <div className="flex items-center gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-7 w-7 p-0"
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
                            <span className="text-sm font-bold min-w-[24px] text-center bg-white px-2 py-1 rounded">
                              {quantity}
                            </span>
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-7 w-7 p-0"
                              onClick={() => updateQuantity(product.id, quantity + 1)}
                            >
                              <Plus size={12} />
                            </Button>
                          </div>
                        </div>
                      )}
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

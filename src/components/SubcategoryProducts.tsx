
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Plus, Minus, CheckCircle } from 'lucide-react';
import { useProductSelection } from '../contexts/ProductSelectionContext';
import { getSubcategoryProducts } from '../utils/subcategoryProducts';

interface SubcategoryProductsProps {
  subcategory: string | null;
}

const SubcategoryProducts: React.FC<SubcategoryProductsProps> = ({
  subcategory
}) => {
  const {
    selectedProducts,
    addProductDirectly,
    removeProduct,
    updateQuantity,
    getProductInCart
  } = useProductSelection();

  if (!subcategory) return null;

  const products = getSubcategoryProducts(subcategory);
  if (products.length === 0) return null;

  const handleAddProduct = (product: typeof products[0]) => {
    addProductDirectly({
      id: product.id,
      name: product.name,
      image: product.image,
      description: product.description
    });
  };

  return (
    <div className="w-full mb-4 sm:mb-6 animate-fade-in">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-3 sm:p-4">
          <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-primary mb-4">
            {subcategory}
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map(product => {
              const productInCart = getProductInCart(product.id);
              const isInCart = !!productInCart;
              
              return (
                <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="aspect-square overflow-hidden rounded-t-lg relative">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                      />
                      {isInCart && (
                        <div className="absolute top-2 right-2 bg-green-600 text-white rounded-full p-1">
                          <CheckCircle size={16} />
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

                      {/* Not in Cart State - Direct Add */}
                      {!isInCart && (
                        <Button 
                          onClick={() => handleAddProduct(product)} 
                          size="sm" 
                          className="w-full bg-green-600 hover:bg-green-700 text-white"
                        >
                          <ShoppingCart size={14} className="mr-2" />
                          Adicionar ao Carrinho
                        </Button>
                      )}

                      {/* In Cart State */}
                      {isInCart && productInCart && (
                        <div className="space-y-2">
                          {/* In Cart Status */}
                          <div className="flex items-center justify-center bg-green-50 rounded-lg p-2">
                            <CheckCircle size={16} className="mr-2 text-green-600" />
                            <span className="text-sm font-medium text-green-600">No Carrinho</span>
                          </div>
                          
                          {/* Quantity Controls */}
                          <div className="flex items-center justify-between bg-green-50 rounded-lg p-2">
                            <span className="text-sm font-medium text-green-600">Quantidade:</span>
                            <div className="flex items-center gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-7 w-7 p-0 border-green-200 hover:bg-green-100"
                                onClick={() => {
                                  if (productInCart.quantity === 1) {
                                    removeProduct(product.id);
                                  } else {
                                    updateQuantity(product.id, productInCart.quantity - 1);
                                  }
                                }}
                              >
                                <Minus size={12} />
                              </Button>
                              <span className="text-sm font-bold min-w-[24px] text-center bg-white px-2 py-1 rounded border border-green-200">
                                {productInCart.quantity}
                              </span>
                              <Button
                                size="sm"
                                variant="outline"
                                className="h-7 w-7 p-0 border-green-200 hover:bg-green-100"
                                onClick={() => updateQuantity(product.id, productInCart.quantity + 1)}
                              >
                                <Plus size={12} />
                              </Button>
                            </div>
                          </div>

                          {/* Add More Button */}
                          <Button
                            onClick={() => handleAddProduct(product)}
                            size="sm"
                            variant="outline"
                            className="w-full border-green-200 text-green-600 hover:bg-green-50"
                          >
                            <Plus size={14} className="mr-2" />
                            Adicionar Mais
                          </Button>
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

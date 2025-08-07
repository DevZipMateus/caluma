
import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Minus, ShoppingCart, Check, CheckCircle } from 'lucide-react';
import { useProductSelection } from '../hooks/useProductSelection';
import { getSubcategoryProducts } from '../utils/subcategoryProducts';

interface DropdownProductItemProps {
  subcategory: string;
}

const DropdownProductItem: React.FC<DropdownProductItemProps> = ({ subcategory }) => {
  const { 
    selectedProducts, 
    productsInSelection,
    selectProduct,
    updateSelectionQuantity,
    removeFromSelection,
    addToCart,
    removeProduct,
    updateQuantity,
    getProductInSelection,
    getProductInCart
  } = useProductSelection();
  
  const products = getSubcategoryProducts(subcategory);
  
  if (products.length === 0) return null;

  const handleSelectProduct = (product: typeof products[0]) => {
    selectProduct({
      id: product.id,
      name: product.name,
      image: product.image,
      description: product.description
    });
  };

  return (
    <div className="space-y-2">
      {products.map((product) => {
        const productInSelection = getProductInSelection(product.id);
        const productInCart = getProductInCart(product.id);
        const isSelected = !!productInSelection;
        const isInCart = !!productInCart;
        
        return (
          <div key={product.id} className="bg-gray-50 rounded-lg p-3 border">
            {/* Product Header with Selection */}
            <div className="flex items-center gap-3 mb-2">
              <img
                src={product.image}
                alt={product.name}
                className="w-10 h-10 object-cover rounded"
              />
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium line-clamp-1">{product.name}</h4>
                <p className="text-xs text-muted-foreground line-clamp-1">{product.description}</p>
              </div>
              
              {/* Selection Button */}
              {!isSelected && !isInCart && (
                <Button
                  onClick={() => handleSelectProduct(product)}
                  size="sm"
                  variant="outline"
                  className="shrink-0"
                >
                  <ShoppingCart size={12} />
                </Button>
              )}
              
              {/* Selected Indicator */}
              {isSelected && !isInCart && (
                <div className="shrink-0 bg-primary text-primary-foreground rounded-full p-1">
                  <Check size={12} />
                </div>
              )}
              
              {/* In Cart Indicator */}
              {isInCart && (
                <div className="shrink-0 bg-green-600 text-white rounded-full p-1">
                  <CheckCircle size={12} />
                </div>
              )}
            </div>

            {/* Quantity Controls for Selected (not in cart) */}
            {isSelected && !isInCart && productInSelection && (
              <div className="space-y-2">
                <div className="flex items-center justify-between bg-primary/10 rounded-lg p-2">
                  <span className="text-xs font-medium text-primary">Quantidade:</span>
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-6 w-6 p-0"
                      onClick={() => {
                        if (productInSelection.quantity === 1) {
                          removeFromSelection(product.id);
                        } else {
                          updateSelectionQuantity(product.id, productInSelection.quantity - 1);
                        }
                      }}
                    >
                      <Minus size={10} />
                    </Button>
                    <span className="text-xs font-bold min-w-[20px] text-center bg-white px-2 py-1 rounded">
                      {productInSelection.quantity}
                    </span>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-6 w-6 p-0"
                      onClick={() => updateSelectionQuantity(product.id, productInSelection.quantity + 1)}
                    >
                      <Plus size={10} />
                    </Button>
                  </div>
                </div>
                
                {/* Add to Cart Button */}
                <Button
                  onClick={() => addToCart(product.id)}
                  size="sm"
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  <ShoppingCart size={12} className="mr-1" />
                  Adicionar ao Carrinho
                </Button>
              </div>
            )}

            {/* Quantity Controls for Items in Cart */}
            {isInCart && productInCart && (
              <div className="space-y-2">
                <div className="flex items-center justify-between bg-green-50 rounded-lg p-2">
                  <span className="text-xs font-medium text-green-600">No carrinho:</span>
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-6 w-6 p-0 border-green-200"
                      onClick={() => {
                        if (productInCart.quantity === 1) {
                          removeProduct(product.id);
                        } else {
                          updateQuantity(product.id, productInCart.quantity - 1);
                        }
                      }}
                    >
                      <Minus size={10} />
                    </Button>
                    <span className="text-xs font-bold min-w-[20px] text-center bg-white px-2 py-1 rounded border border-green-200">
                      {productInCart.quantity}
                    </span>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-6 w-6 p-0 border-green-200"
                      onClick={() => updateQuantity(product.id, productInCart.quantity + 1)}
                    >
                      <Plus size={10} />
                    </Button>
                  </div>
                </div>
                
                {/* Add More Button */}
                <Button
                  onClick={() => handleSelectProduct(product)}
                  size="sm"
                  variant="outline"
                  className="w-full border-green-200 text-green-600 hover:bg-green-50"
                >
                  <Plus size={10} className="mr-1" />
                  Adicionar Mais
                </Button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default DropdownProductItem;

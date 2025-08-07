
import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Minus, ShoppingCart, CheckCircle } from 'lucide-react';
import { useProductSelection } from '../hooks/useProductSelection';
import { getSubcategoryProducts } from '../utils/subcategoryProducts';

interface DropdownProductItemProps {
  subcategory: string;
}

const DropdownProductItem: React.FC<DropdownProductItemProps> = ({ subcategory }) => {
  const { 
    selectedProducts, 
    addProductDirectly,
    removeProduct,
    updateQuantity,
    getProductInCart
  } = useProductSelection();
  
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
    <div className="space-y-2">
      {products.map((product) => {
        const productInCart = getProductInCart(product.id);
        const isInCart = !!productInCart;
        
        return (
          <div key={product.id} className="bg-gray-50 rounded-lg p-3 border">
            {/* Product Header */}
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
              
              {/* Add to Cart Button or In Cart Indicator */}
              {!isInCart ? (
                <Button
                  onClick={() => handleAddProduct(product)}
                  size="sm"
                  className="shrink-0 bg-green-600 hover:bg-green-700 text-white"
                >
                  <ShoppingCart size={12} />
                </Button>
              ) : (
                <div className="shrink-0 bg-green-600 text-white rounded-full p-1">
                  <CheckCircle size={12} />
                </div>
              )}
            </div>

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
                  onClick={() => handleAddProduct(product)}
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

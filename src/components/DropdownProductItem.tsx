
import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Minus, ShoppingCart, Check } from 'lucide-react';
import { useProductSelection } from '../hooks/useProductSelection';
import { getSubcategoryProducts } from '../utils/subcategoryProducts';

interface DropdownProductItemProps {
  subcategory: string;
}

const DropdownProductItem: React.FC<DropdownProductItemProps> = ({ subcategory }) => {
  const { selectedProducts, addProduct, removeProduct, updateQuantity } = useProductSelection();
  
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
    <div className="space-y-2">
      {products.map((product) => {
        const quantity = getProductQuantity(product.id);
        const isSelected = quantity > 0;
        
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
              <Button
                onClick={() => handleSelectProduct(product)}
                size="sm"
                variant={isSelected ? "default" : "outline"}
                className="shrink-0"
              >
                {isSelected ? <Check size={12} /> : <ShoppingCart size={12} />}
              </Button>
            </div>

            {/* Quantity Controls - Show when selected */}
            {isSelected && (
              <div className="flex items-center justify-between bg-primary/10 rounded-lg p-2">
                <span className="text-xs font-medium text-primary">Quantidade:</span>
                <div className="flex items-center gap-2">
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
                    <Minus size={10} />
                  </Button>
                  <span className="text-xs font-bold min-w-[20px] text-center bg-white px-2 py-1 rounded">
                    {quantity}
                  </span>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-6 w-6 p-0"
                    onClick={() => updateQuantity(product.id, quantity + 1)}
                  >
                    <Plus size={10} />
                  </Button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default DropdownProductItem;

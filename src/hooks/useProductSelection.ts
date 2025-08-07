
import { useState } from 'react';

export interface SelectedProduct {
  id: number;
  name: string;
  image: string;
  description: string;
  quantity: number;
}

export const useProductSelection = () => {
  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>([]);

  const addProduct = (product: SelectedProduct) => {
    setSelectedProducts(prev => {
      const existingProduct = prev.find(p => p.id === product.id);
      if (existingProduct) {
        // If product already exists, update quantity
        return prev.map(p => 
          p.id === product.id 
            ? { ...p, quantity: p.quantity + product.quantity }
            : p
        );
      }
      // Add new product
      return [...prev, product];
    });
  };

  const removeProduct = (productId: number) => {
    setSelectedProducts(prev => prev.filter(p => p.id !== productId));
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeProduct(productId);
      return;
    }
    
    setSelectedProducts(prev => 
      prev.map(p => 
        p.id === productId 
          ? { ...p, quantity: newQuantity }
          : p
      )
    );
  };

  return {
    selectedProducts,
    addProduct,
    removeProduct,
    updateQuantity
  };
};

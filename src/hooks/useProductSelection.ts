import { useState } from 'react';

export interface SelectedProduct {
  id: number;
  name: string;
  image: string;
  description: string;
  quantity: number;
}

export interface ProductInSelection {
  id: number;
  name: string;
  image: string;
  description: string;
  quantity: number;
}

export const useProductSelection = () => {
  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>([]);
  const [productsInSelection, setProductsInSelection] = useState<ProductInSelection[]>([]);

  const selectProduct = (product: Omit<ProductInSelection, 'quantity'>) => {
    setProductsInSelection(prev => {
      const existing = prev.find(p => p.id === product.id);
      if (existing) {
        return prev; // Already selected
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const addProductDirectly = (product: Omit<SelectedProduct, 'quantity'>) => {
    setSelectedProducts(prev => {
      const existingProduct = prev.find(p => p.id === product.id);
      if (existingProduct) {
        // If product already exists in cart, increment quantity
        return prev.map(p => 
          p.id === product.id 
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      }
      // Add new product to cart with quantity 1
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateSelectionQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromSelection(productId);
      return;
    }
    
    setProductsInSelection(prev => 
      prev.map(p => 
        p.id === productId 
          ? { ...p, quantity: newQuantity }
          : p
      )
    );
  };

  const removeFromSelection = (productId: number) => {
    setProductsInSelection(prev => prev.filter(p => p.id !== productId));
  };

  const addToCart = (productId: number) => {
    const productInSelection = productsInSelection.find(p => p.id === productId);
    if (!productInSelection) return;

    setSelectedProducts(prev => {
      const existingProduct = prev.find(p => p.id === productId);
      if (existingProduct) {
        // If product already exists in cart, update quantity
        return prev.map(p => 
          p.id === productId 
            ? { ...p, quantity: p.quantity + productInSelection.quantity }
            : p
        );
      }
      // Add new product to cart
      return [...prev, productInSelection];
    });

    // Remove from selection after adding to cart
    removeFromSelection(productId);
  };

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

  const getProductInSelection = (productId: number) => {
    return productsInSelection.find(p => p.id === productId);
  };

  const getProductInCart = (productId: number) => {
    return selectedProducts.find(p => p.id === productId);
  };

  return {
    selectedProducts,
    productsInSelection,
    selectProduct,
    addProductDirectly,
    updateSelectionQuantity,
    removeFromSelection,
    addToCart,
    addProduct,
    removeProduct,
    updateQuantity,
    getProductInSelection,
    getProductInCart
  };
};

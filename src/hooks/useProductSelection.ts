
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface SelectedProduct {
  id: number;
  name: string;
  image: string;
  description: string;
}

interface ProductSelectionState {
  selectedProducts: SelectedProduct[];
  addProduct: (product: SelectedProduct) => void;
  removeProduct: (productId: number) => void;
  clearSelection: () => void;
  isProductSelected: (productId: number) => boolean;
}

export const useProductSelection = create<ProductSelectionState>()(
  persist(
    (set, get) => ({
      selectedProducts: [],
      
      addProduct: (product: SelectedProduct) => {
        const { selectedProducts } = get();
        if (!selectedProducts.find(p => p.id === product.id)) {
          set({ selectedProducts: [...selectedProducts, product] });
        }
      },
      
      removeProduct: (productId: number) => {
        const { selectedProducts } = get();
        set({ 
          selectedProducts: selectedProducts.filter(p => p.id !== productId) 
        });
      },
      
      clearSelection: () => {
        set({ selectedProducts: [] });
      },
      
      isProductSelected: (productId: number) => {
        const { selectedProducts } = get();
        return selectedProducts.some(p => p.id === productId);
      }
    }),
    {
      name: 'product-selection-storage'
    }
  )
);

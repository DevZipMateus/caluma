
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface SelectedProduct {
  id: string;
  name: string;
  image: string;
  description: string;
  quantity: number;
  categorySlug: string;
}

interface ProductSelectionState {
  selectedProducts: SelectedProduct[];
  addProduct: (product: Omit<SelectedProduct, 'quantity'> & { quantity?: number }) => void;
  removeProduct: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearSelection: () => void;
  getTotalItems: () => number;
  isProductSelected: (productId: string) => boolean;
  getProductQuantity: (productId: string) => number;
}

export const useProductSelection = create<ProductSelectionState>()(
  persist(
    (set, get) => ({
      selectedProducts: [],
      
      addProduct: (product) => {
        const existingProduct = get().selectedProducts.find(p => p.id === product.id);
        if (existingProduct) {
          set(state => ({
            selectedProducts: state.selectedProducts.map(p =>
              p.id === product.id
                ? { ...p, quantity: p.quantity + (product.quantity || 1) }
                : p
            )
          }));
        } else {
          set(state => ({
            selectedProducts: [...state.selectedProducts, { ...product, quantity: product.quantity || 1 }]
          }));
        }
      },
      
      removeProduct: (productId) => {
        set(state => ({
          selectedProducts: state.selectedProducts.filter(p => p.id !== productId)
        }));
      },
      
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeProduct(productId);
          return;
        }
        set(state => ({
          selectedProducts: state.selectedProducts.map(p =>
            p.id === productId ? { ...p, quantity } : p
          )
        }));
      },
      
      clearSelection: () => {
        set({ selectedProducts: [] });
      },
      
      getTotalItems: () => {
        return get().selectedProducts.reduce((total, product) => total + product.quantity, 0);
      },
      
      isProductSelected: (productId) => {
        return get().selectedProducts.some(p => p.id === productId);
      },
      
      getProductQuantity: (productId) => {
        const product = get().selectedProducts.find(p => p.id === productId);
        return product?.quantity || 0;
      }
    }),
    {
      name: 'product-selection-storage'
    }
  )
);

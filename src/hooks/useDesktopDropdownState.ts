
import { create } from 'zustand';

interface DesktopDropdownState {
  categoryDropdownOpen: boolean;
  subcategoryDropdownOpen: boolean;
  setCategoryDropdownOpen: (open: boolean) => void;
  setSubcategoryDropdownOpen: (open: boolean) => void;
  closeAllDropdowns: () => void;
  openSubcategoryFromCategory: () => void;
}

export const useDesktopDropdownState = create<DesktopDropdownState>((set) => ({
  categoryDropdownOpen: false,
  subcategoryDropdownOpen: false,
  setCategoryDropdownOpen: (open) => set({ categoryDropdownOpen: open }),
  setSubcategoryDropdownOpen: (open) => set({ subcategoryDropdownOpen: open }),
  closeAllDropdowns: () => set({ 
    categoryDropdownOpen: false, 
    subcategoryDropdownOpen: false 
  }),
  openSubcategoryFromCategory: () => set({ 
    categoryDropdownOpen: false, 
    subcategoryDropdownOpen: true 
  }),
}));

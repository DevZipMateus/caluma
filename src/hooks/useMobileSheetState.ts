
import { create } from 'zustand';

interface MobileSheetState {
  categorySheetOpen: boolean;
  subcategorySheetOpen: boolean;
  setCategorySheetOpen: (open: boolean) => void;
  setSubcategorySheetOpen: (open: boolean) => void;
  openSubcategoryFromCategory: () => void;
  closeAllSheets: () => void;
}

export const useMobileSheetState = create<MobileSheetState>((set) => ({
  categorySheetOpen: false,
  subcategorySheetOpen: false,
  setCategorySheetOpen: (open) => set({ categorySheetOpen: open }),
  setSubcategorySheetOpen: (open) => set({ subcategorySheetOpen: open }),
  openSubcategoryFromCategory: () => set({ 
    categorySheetOpen: false, 
    subcategorySheetOpen: true 
  }),
  closeAllSheets: () => set({ 
    categorySheetOpen: false, 
    subcategorySheetOpen: false 
  }),
}));

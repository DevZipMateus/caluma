
import { create } from 'zustand';

interface SelectedSubcategoryState {
  selectedSubcategory: string | null;
  setSelectedSubcategory: (subcategory: string | null) => void;
}

export const useSelectedSubcategory = create<SelectedSubcategoryState>((set) => ({
  selectedSubcategory: null,
  setSelectedSubcategory: (subcategory) => set({ selectedSubcategory: subcategory }),
}));

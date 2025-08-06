
import { create } from 'zustand';

interface SelectedSubcategoryState {
  selectedSubcategory: string | null;
  setSelectedSubcategory: (subcategory: string | null) => void;
  setDefaultSubcategory: (categoryRoute: string) => void;
}

export const useSelectedSubcategory = create<SelectedSubcategoryState>((set, get) => ({
  selectedSubcategory: null,
  setSelectedSubcategory: (subcategory) => set({ selectedSubcategory: subcategory }),
  setDefaultSubcategory: (categoryRoute: string) => {
    const { selectedSubcategory } = get();
    // Only set default if no subcategory is currently selected
    if (!selectedSubcategory) {
      const { getDefaultSubcategory } = require('../utils/defaultSubcategories');
      const defaultSubcategory = getDefaultSubcategory(categoryRoute);
      if (defaultSubcategory) {
        set({ selectedSubcategory: defaultSubcategory });
      }
    }
  },
}));

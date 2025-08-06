
import { create } from 'zustand';

interface SelectedSubcategoryState {
  selectedSubcategory: string | null;
  setSelectedSubcategory: (subcategory: string | null) => void;
  setDefaultSubcategory: (categorySlug: string) => Promise<void>;
}

export const useSelectedSubcategory = create<SelectedSubcategoryState>((set) => ({
  selectedSubcategory: null,
  setSelectedSubcategory: (subcategory) => set({ selectedSubcategory: subcategory }),
  setDefaultSubcategory: async (categorySlug: string) => {
    try {
      const { getDefaultSubcategory } = await import('../utils/defaultSubcategories');
      const defaultSubcategory = getDefaultSubcategory(categorySlug);
      set({ selectedSubcategory: defaultSubcategory });
    } catch (error) {
      console.error('Failed to load default subcategory:', error);
      set({ selectedSubcategory: null });
    }
  },
}));

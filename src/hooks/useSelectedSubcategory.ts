
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SelectedSubcategoryState {
  selectedSubcategory: string | null;
  setSelectedSubcategory: (subcategory: string | null) => void;
}

export const useSelectedSubcategory = create<SelectedSubcategoryState>()(
  persist(
    (set, get) => ({
      selectedSubcategory: null,
      setSelectedSubcategory: (subcategory) => {
        console.log(`Setting selected subcategory to: ${subcategory}`);
        set({ selectedSubcategory: subcategory });
        console.log(`Current state after setting:`, get());
      },
    }),
    {
      name: 'selected-subcategory-storage',
    }
  )
);

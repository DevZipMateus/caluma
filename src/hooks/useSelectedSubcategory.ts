
import { create } from 'zustand';

interface SelectedSubcategoryState {
  selectedSubcategory: string | null;
  setSelectedSubcategory: (subcategory: string | null) => void;
  setDefaultSubcategory: (categorySlug: string) => Promise<void>;
}

// Primeira subcategoria de cada categoria para exibição no carrossel
const getFirstSubcategoryForCategory = (categorySlug: string): string | null => {
  const firstSubcategories: Record<string, string> = {
    'camisas-uniformes': 'Body Infantil',
    'sublimacao': 'ALUMÍNIO BIG MOUTH',
    'serigrafia': 'AUX PLÁSTICOS',
    'papelaria': 'ADESIVO 30 FOLHAS',
    'canecas': 'CANECA AÇO INOX',
    'equipamentos': 'CAMEO SILHOUETTE',
  };

  return firstSubcategories[categorySlug] || null;
};

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

// Função para obter a primeira subcategoria para carrossel
export const getFirstSubcategoryForCategory = getFirstSubcategoryForCategory;

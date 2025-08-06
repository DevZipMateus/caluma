
export const getDefaultSubcategory = (categorySlug: string): string | null => {
  const defaultSubcategories: Record<string, string> = {
    'camisas-uniformes': 'Camisa Polo Masculina',
    'sublimacao': 'CANECA ALUMÍNIO',
    'serigrafia': 'CANECA ALUMÍNIO', 
    'papelaria': 'ADESIVO 30 FOLHAS',
    'canecas': 'CANECA ALUMÍNIO',
    'equipamentos': 'PRENSA PLANA',
  };

  return defaultSubcategories[categorySlug] || null;
};

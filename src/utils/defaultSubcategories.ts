
// Mapping of category routes to their default subcategories
export const defaultSubcategoriesMapping: Record<string, string> = {
  '/camisas-uniformes': 'Camisa Polo Feminina',
  '/papelaria': 'ADESIVO 30 FOLHAS',
  '/equipamentos': 'PRENSA PLANA',
  '/canecas': 'CANECA ALUMÍNIO',
  '/sublimacao': 'ALUMÍNIO BIG MOUTH',
  '/serigrafia': 'AUX PLÁSTICOS'
};

export const getDefaultSubcategory = (categoryRoute: string): string | null => {
  return defaultSubcategoriesMapping[categoryRoute] || null;
};


// Mapear a primeira subcategoria de cada categoria para suas imagens do carrossel
export const subcategoryCarouselMapping: Record<string, string[]> = {
  // Camisas e Uniformes - primeira subcategoria: Body Infantil
  'Body Infantil': [
    '/lovable-uploads/galeria/camisa polo feminina.jpg',
    '/lovable-uploads/galeria/camisa polo.jpg',
    '/lovable-uploads/galeria/masculina algodão.jpg',
    '/lovable-uploads/galeria/masculina reglan.jpg',
    '/lovable-uploads/galeria/regata feminina.jpg',
    '/lovable-uploads/galeria/regata masculina.jpg'
  ],
  
  // Sublimação - primeira subcategoria: ALUMÍNIO BIG MOUTH
  'ALUMÍNIO BIG MOUTH': [
    '/lovable-uploads/galeria/caneca aluminio.jpg',
    '/lovable-uploads/galeria/papel fotografico.jpg',
    '/lovable-uploads/galeria/prensa transfer.jpg'
  ],
  
  // Serigrafia - primeira subcategoria: AUX PLÁSTICOS
  'AUX PLÁSTICOS': [
    '/lovable-uploads/galeria/camisa polo.jpg',
    '/lovable-uploads/galeria/masculina algodão.jpg',
    '/lovable-uploads/galeria/regata masculina.jpg'
  ],
  
  // Papelaria - primeira subcategoria: ADESIVO 30 FOLHAS
  'ADESIVO 30 FOLHAS': [
    '/lovable-uploads/galeria/papeis adesivos.jpg',
    '/lovable-uploads/galeria/papel fotografico.jpg'
  ],
  
  // Canecas - primeira subcategoria: CANECA AÇO INOX
  'CANECA AÇO INOX': [
    '/lovable-uploads/galeria/caneca aluminio.jpg',
    '/lovable-uploads/galeria/caneca inox.jpg',
    '/lovable-uploads/galeria/canecas chopp.jpg'
  ],
  
  // Equipamentos - primeira subcategoria: CAMEO SILHOUETTE
  'CAMEO SILHOUETTE': [
    '/lovable-uploads/galeria/prensa plana.jpg',
    '/lovable-uploads/galeria/prensa transfer.jpg',
    '/lovable-uploads/galeria/maquina de corte.jpg'
  ]
};

export const getSubcategoryCarouselImages = (subcategory: string): string[] => {
  return subcategoryCarouselMapping[subcategory] || [];
};

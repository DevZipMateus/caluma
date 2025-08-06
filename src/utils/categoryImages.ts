
export const categoryImages = {
  'camisas-uniformes': [
    '/lovable-uploads/galeria/camisa polo feminina.jpg',
    '/lovable-uploads/galeria/camisa polo.jpg',
    '/lovable-uploads/galeria/masculina algodão.jpg',
    '/lovable-uploads/galeria/masculina reglan.jpg',
    '/lovable-uploads/galeria/regata feminina.jpg',
    '/lovable-uploads/galeria/regata masculina.jpg'
  ],
  'canecas': [
    '/lovable-uploads/galeria/caneca aluminio.jpg',
    '/lovable-uploads/galeria/caneca inox.jpg',
    '/lovable-uploads/galeria/canecas chopp.jpg'
  ],
  'papelaria': [
    '/lovable-uploads/galeria/papeis adesivos.jpg',
    '/lovable-uploads/galeria/papel fotografico.jpg'
  ],
  'equipamentos': [
    '/lovable-uploads/galeria/prensa plana.jpg',
    '/lovable-uploads/galeria/prensa transfer.jpg',
    '/lovable-uploads/galeria/maquina de corte.jpg'
  ],
  'sublimacao': [
    '/lovable-uploads/galeria/caneca aluminio.jpg',
    '/lovable-uploads/galeria/papel fotografico.jpg',
    '/lovable-uploads/galeria/prensa transfer.jpg'
  ],
  'serigrafia': [
    '/lovable-uploads/galeria/camisa polo.jpg',
    '/lovable-uploads/galeria/masculina algodão.jpg',
    '/lovable-uploads/galeria/regata masculina.jpg'
  ]
};

export const getCategoryImages = (categorySlug: string): string[] => {
  return categoryImages[categorySlug as keyof typeof categoryImages] || [];
};

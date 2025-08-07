
export interface SubcategoryProduct {
  id: number;
  name: string;
  image: string;
  description: string;
}

export const subcategoryProductsMapping: Record<string, SubcategoryProduct[]> = {
  // Camisas e Uniformes
  'Camisa Polo Masculina': [
    {
      id: 2,
      name: 'Camisa Polo',
      image: '/lovable-uploads/galeria/camisa polo.jpg',
      description: 'Polo masculina clássica'
    }
  ],
  'Camisa Polo Feminina': [
    {
      id: 1,
      name: 'Camisa Polo Feminina',
      image: '/lovable-uploads/galeria/camisa polo feminina.jpg',
      description: 'Polo feminina de alta qualidade'
    }
  ],
  'Masculina Algodão': [
    {
      id: 7,
      name: 'Camiseta Masculina Algodão',
      image: '/lovable-uploads/galeria/masculina algodão.jpg',
      description: 'Camiseta 100% algodão masculina'
    }
  ],
  'Masculina Reglan': [
    {
      id: 8,
      name: 'Camiseta Masculina Raglan',
      image: '/lovable-uploads/galeria/masculina reglan.jpg',
      description: 'Camiseta raglan masculina'
    }
  ],
  'Regata Feminina Branca': [
    {
      id: 13,
      name: 'Regata Feminina',
      image: '/lovable-uploads/galeria/regata feminina.jpg',
      description: 'Regata feminina personalizada'
    }
  ],
  'Regata Masculina Branca': [
    {
      id: 14,
      name: 'Regata Masculina',
      image: '/lovable-uploads/galeria/regata masculina.jpg',
      description: 'Regata masculina de qualidade'
    }
  ],
  
  // Canecas
  'CANECA ALUMÍNIO': [
    {
      id: 3,
      name: 'Caneca Alumínio',
      image: '/lovable-uploads/galeria/caneca aluminio.jpg',
      description: 'Caneca personalizada em alumínio'
    }
  ],
  'CANECA INOX': [
    {
      id: 4,
      name: 'Caneca Inox',
      image: '/lovable-uploads/galeria/caneca inox.jpg',
      description: 'Caneca térmica em inox'
    }
  ],
  'CANECA CHOPP': [
    {
      id: 5,
      name: 'Canecas Chopp',
      image: '/lovable-uploads/galeria/canecas chopp.jpg',
      description: 'Canecas para chopp personalizadas'
    }
  ],
  
  // Papelaria
  'ADESIVO 30 FOLHAS': [
    {
      id: 9,
      name: 'Papéis Adesivos',
      image: '/lovable-uploads/galeria/papeis adesivos.jpg',
      description: 'Variedade de papéis adesivos'
    }
  ],
  'FOTOGRÁFICO A4 20 FOLHAS': [
    {
      id: 10,
      name: 'Papel Fotográfico',
      image: '/lovable-uploads/galeria/papel fotografico.jpg',
      description: 'Papel fotográfico de qualidade'
    }
  ],
  'FOTOGRÁFICO A4 50 FOLHAS': [
    {
      id: 10,
      name: 'Papel Fotográfico',
      image: '/lovable-uploads/galeria/papel fotografico.jpg',
      description: 'Papel fotográfico de qualidade'
    }
  ],
  'FOTOGRÁFICO A4 ESPECIAL': [
    {
      id: 10,
      name: 'Papel Fotográfico',
      image: '/lovable-uploads/galeria/papel fotografico.jpg',
      description: 'Papel fotográfico de qualidade'
    }
  ],
  
  // Equipamentos
  'PRENSA PLANA': [
    {
      id: 11,
      name: 'Prensa Plana',
      image: '/lovable-uploads/galeria/prensa plana.jpg',
      description: 'Prensa térmica plana profissional'
    }
  ],
  'DIAMOND 360º TRANSFER': [
    {
      id: 12,
      name: 'Prensa Transfer',
      image: '/lovable-uploads/galeria/prensa transfer.jpg',
      description: 'Prensa para transfer e sublimação'
    }
  ],
  'PLOTTER DE RECORTE': [
    {
      id: 6,
      name: 'Máquina de Corte',
      image: '/lovable-uploads/galeria/maquina de corte.jpg',
      description: 'Equipamento profissional de corte'
    }
  ]
};

export const getSubcategoryProducts = (subcategory: string): SubcategoryProduct[] => {
  return subcategoryProductsMapping[subcategory] || [];
};

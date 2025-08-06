import React, { useState } from 'react';
import { Shirt, FileText, Settings, Coffee, Paintbrush, Palette } from 'lucide-react';

const Categories = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const subcategoriasCamisas = [
    'Body Infantil',
    'Body Infantil Colorido',
    'Camisa Polo Feminina',
    'Camisa Polo Feminina Dry',
    'Camisa Polo Masculina',
    'Camisa Polo Masculina Dry',
    'Feminina Algodão',
    'Feminina Algodão Colorida',
    'Feminina Branca',
    'Feminina Colorida',
    'Feminina Raglan',
    'Infantil Branca',
    'Infantil Colorida',
    'Masculina Branca',
    'Masculina Algodão',
    'Masculina Algodão Colorida',
    'Masculina Colorida',
    'Masculina Reglan',
    'Regata Feminina Branca',
    'Regata Feminina Colorida',
    'Regata Masculina Branca',
    'Regata Masculina Colorida'
  ];

  const subcategoriasUniformes = [
    'Avental Napo',
    'Avental Oxford',
    'Bermuda de Brim',
    'Bota Cano Alto',
    'Bota Cano Curto',
    'Calça Carijó',
    'Calça Brim',
    'Colete Futebol',
    'Jaleco de Brim',
    'Jaleco de Enfermagem'
  ];

  const subcategoriasPapelaria = [
    'ADESIVO 30 FOLHAS',
    'FOTOGRÁFICO A4 20 FOLHAS',
    'FOTOGRÁFICO A4 50 FOLHAS',
    'FOTOGRÁFICO A4 ESPECIAL',
    'PAPEL OBM',
    'SUBLIMÁTICO A3',
    'SUBLIMÁTICO A4',
    'VINIL'
  ];

  const subcategoriasMaquinas = [
    'CAMEO SILHOUETTE',
    'DIAMOND 360° TRANSFER',
    'IMPRESSORA EPSON',
    'PLOTTER DE RECORTE',
    'PRENSA 8 EM 1',
    'PRENSA CILÍNDRICA',
    'PRENSA LONG DRINK',
    'PRENSA PLANA',
    'PRENSA PORTÁTIL'
  ];

  const subcategoriasKitEmpreendedor = [
    'KIT CILÍNDRICO',
    'KIT PLANO'
  ];

  const subcategoriasCanecas = [
    'CANECA AÇO INOX',
    'CANECA ALUMÍNIO',
    'CANECA BELLY',
    'CANECA BRANCA',
    'CANECA BASE GLITTER',
    'CANECA BOLINHA',
    'CANECA CHOPP',
    'CANECA COM COLHER',
    'CANECA COM GLITTER',
    'CANECA CÔNICA',
    'CANECA CORAÇÃO',
    'CANECA CROMADA',
    'CANECA FALL',
    'CANECA MÁGICA',
    'CANECA MAZON',
    'CANECA INOX',
    'CANECA JATEADA',
    'CANECA NEON',
    'CANECA PEROLADA',
    'CANECA POLÍMERO',
    'CANECA DE TARJA SUBLIMÁTICA',
    'CANECA WHISKY'
  ];

  const subcategoriasSublimacaoMaquinas = [
    'CAMEO SILHOUETTE',
    'DIAMOND 360° TRANSFER',
    'IMPRESSORA EPSON',
    'PLOTTER DE RECORTE',
    'PRENSA 8 EM 1',
    'PRENSA CILÍNDRICA',
    'PRENSA LONG DRINK',
    'PRENSA PLANA',
    'PRENSA PORTÁTIL'
  ];

  const subcategoriasSublimacaoKitEmpreendedor = [
    'KIT CILÍNDRICO',
    'KIT PLANO'
  ];

  const subcategoriasSublimacaoInsumos = [
    'ALMOFADRO',
    'AZULEJO',
    'BASE GRADUATORIA',
    'BOLSA ECOLÓGICA',
    'BONÉ DE ABA CURVA',
    'BONÉ DE ABA RETA',
    'CAMISETAS',
    'CANETA',
    'CAPA DE ALMOFADA',
    'CAPA DE ALMOFADA PA',
    'CHAVEIROS',
    'CHAVEIRO MOSQUETÃO',
    'GRAVATAS'
  ];

  const subcategoriasSublimacaoSuportes = [
    'HOMEN',
    'INFANTIL',
    'TITANIC',
    'TITANS'
  ];

  const subcategoriasSublimacaoToalha = [
    'TOALHA DE ROSTO',
    'TOALHA DE BANHO'
  ];

  const subcategoriasSublimacaoSqueezes = [
    'ALUMÍNIO BIG MOUTH',
    'ALUMÍNIO LONG NECK',
    'BOLINHA',
    'COPO TÉRMICO',
    'COPO TÉRMICO CAT',
    'COPO TÉRMICO DOG',
    'CRAZY CAT',
    'CRAZY DOG',
    'GLITTER',
    'GIFT LONG GLITTER',
    'GIFT LONG NECK',
    'INOX LONG NECK',
    'INOX LONG NECK ALÇA',
    'INOX LONG NECK ROSCA',
    'INOX LUXO',
    'INOX LUXO ALÇA',
    'INOX LUXO ROSCA',
    'KIDS',
    'POLÍMERO',
    'POLÍMERO ALÇA',
    'POLÍMERO ROSCA',
    'PET',
    'TÉRMICA 4 EM 1',
    'TÉRMICA 4 EM 1 ALÇA'
  ];

  const subcategoriasSerigrafiaInsumos = [
    'AUX PLÁSTICOS',
    'BARRICA CLEAR',
    'CLEAR FILM',
    'COBERCOLOR',
    'COLA PERMANENTE',
    'COLOR PAPEL',
    'COPO MEDIDOR',
    'CROMA',
    'EMULSÃO',
    'ESPÁTULA',
    'FOTO ESTAMPA',
    'GRAMPEADOR',
    'GRAMPO',
    'LUVA',
    'NYLON',
    'PARAFUSOS'
  ];

  const subcategoriasSerigrafiasTintas = [
    'CROMA',
    'HIDROCOLOR',
    'HIDROMIX',
    'PIGMENTO'
  ];

  const subcategoriasSerigrafiaMaquinas = [
    'CILINDRICA SMART',
    'CILINDRICA TEX COM SUPORTE 2 BERCOS',
    'PLOTTER SEM SUPORTE'
  ];

  const categories = [
    {
      name: 'CAMISAS E UNIFORMES',
      icon: Shirt,
      href: '#camisas',
      subcategories: {
        'CAMISAS': subcategoriasCamisas,
        'UNIFORMES': subcategoriasUniformes
      }
    },
    {
      name: 'PAPELARIA',
      icon: FileText,
      href: '#papelaria',
      subcategories: {
        'PAPELARIA': subcategoriasPapelaria
      }
    },
    {
      name: 'EQUIPAMENTOS',
      icon: Settings,
      href: '#equipamentos',
      subcategories: {
        'MÁQUINAS': subcategoriasMaquinas,
        'KIT EMPREENDEDOR': subcategoriasKitEmpreendedor
      }
    },
    {
      name: 'CANECAS',
      icon: Coffee,
      href: '#canecas',
      subcategories: {
        'CANECAS': subcategoriasCanecas
      }
    },
    {
      name: 'SUBLIMAÇÃO',
      icon: Paintbrush,
      href: '#sublimacao',
      subcategories: {
        'MÁQUINAS': subcategoriasSublimacaoMaquinas,
        'KIT EMPREENDEDOR': subcategoriasSublimacaoKitEmpreendedor,
        'INSUMOS': subcategoriasSublimacaoInsumos,
        'SUPORTES': subcategoriasSublimacaoSuportes,
        'TOALHA': subcategoriasSublimacaoToalha,
        'SQUEEZES': subcategoriasSublimacaoSqueezes
      }
    },
    {
      name: 'SERIGRAFIA',
      icon: Palette,
      href: '#serigrafia',
      subcategories: {
        'INSUMOS': subcategoriasSerigrafiaInsumos,
        'TINTAS': subcategoriasSerigrafiasTintas,
        'MÁQUINAS': subcategoriasSerigrafiaMaquinas
      }
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-primary py-4 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            const hasSubcategories = category.subcategories;
            
            return (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setHoveredCategory(category.name)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <button
                  onClick={() => scrollToSection(category.href)}
                  className="flex flex-col items-center justify-center text-primary-foreground hover:text-accent transition-colors duration-300 group min-w-[120px] sm:min-w-[140px] lg:min-w-[160px] p-2"
                >
                  <div className="mb-2 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={32} className="sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
                  </div>
                  <span className="text-xs sm:text-sm lg:text-base font-medium text-center leading-tight">
                    {category.name}
                  </span>
                </button>

                {/* Subcategories Dropdown */}
                {hasSubcategories && hoveredCategory === category.name && (
                  <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50 bg-white rounded-lg shadow-lg border ${
                    category.name === 'SUBLIMAÇÃO' ? 'min-w-[800px] max-w-[1000px]' : 'min-w-[320px] max-w-[400px]'
                  }`}>
                    <div className="p-4">
                      {category.name === 'SUBLIMAÇÃO' ? (
                        // Layout horizontal para SUBLIMAÇÃO
                        <div className="flex flex-wrap gap-6">
                          {Object.entries(category.subcategories).map(([sectionName, subcategories]) => (
                            <div key={sectionName} className="flex-1 min-w-[120px]">
                              <h4 className="font-semibold text-primary mb-2 text-sm border-b border-gray-200 pb-1">
                                {sectionName}
                              </h4>
                              <div className="space-y-1">
                                {subcategories.map((subcategory, subIndex) => (
                                  <button
                                    key={subIndex}
                                    onClick={() => console.log(`Clicked: ${subcategory}`)}
                                    className="block text-left text-xs py-1 px-2 hover:bg-gray-100 rounded transition-colors duration-200 text-gray-700 w-full"
                                  >
                                    {subcategory}
                                  </button>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        // Layout vertical para outras categorias
                        Object.entries(category.subcategories).map(([sectionName, subcategories]) => (
                          <div key={sectionName} className="mb-4 last:mb-0">
                            <h4 className="font-semibold text-primary mb-2 text-sm border-b border-gray-200 pb-1">
                              {sectionName}
                            </h4>
                            <div className="grid grid-cols-2 gap-1">
                              {subcategories.map((subcategory, subIndex) => (
                                <button
                                  key={subIndex}
                                  onClick={() => console.log(`Clicked: ${subcategory}`)}
                                  className="text-left text-xs py-1 px-2 hover:bg-gray-100 rounded transition-colors duration-200 text-gray-700"
                                >
                                  {subcategory}
                                </button>
                              ))}
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;

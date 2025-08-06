import React, { useState, useRef, useEffect } from 'react';
import { Shirt, FileText, Settings, Coffee, Paintbrush, Palette } from 'lucide-react';

const Categories = () => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

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
    'DIAMOND 360º TRANSFER',
    'IMPRESSORA EPSON',
    'PLOTTER DE RECORTE',
    'PRENSA 8 EM 1',
    'PRENSA CILINDRICA',
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
    'CANECA INOX',
    'CANECA JATEADA',
    'CANECA MÁGICA',
    'CANECA MAZON',
    'CANECA NEON',
    'CANECA PEROLADA',
    'CANECA POLÍMERO',
    'CANECA DE TARJA SUBLIMÁTICA',
    'CANECA WHISKY'
  ];

  const subcategoriasSublimacaoSqueezes = [
    'ALUMÍNIO BIG MOUTH',
    'ALUMÍNIO LONG NECK',
    'BOLINHA',
    'COELHINHO',
    'COPO TÉRMICO',
    'CRAZY CAT',
    'CRAZY DOG',
    'GATINHO',
    'INOX COM GLITTER',
    'INOX COROA',
    'INOX TÉRMICA',
    'LATINHA INOX',
    'MOSQUETÃO',
    'NIKE',
    'POLÍMERO',
    'TAMPA BAMBU',
    'TÉRMICA CAFÉ',
    'TÉRMICA DIGITAL'
  ];

  const subcategoriasSublimacaoInsumos = [
    'ALMOCHAVEIRO',
    'AZULEJO',
    'BASE GIRATÓRIA',
    'BOLSA ECOBAG',
    'BONÉ DEKO',
    'BONÉ TACTEL',
    'CANETA',
    'CAPA DE ALMOFADA',
    'CAPA DE ALMOFADA LANTEJOULA',
    'CAVALETES',
    'CHAVEIRO ACRÍLICO',
    'CHAVEIRO POLÍMERO',
    'CHINELO',
    'COLOCADOR DE TIRAS CHINELO',
    'FITA TÉRMICA',
    'LAVABINHO',
    'LAVABO',
    'MANTA SILICONE',
    'MDF',
    'MDF TEMÁTICO',
    'MOTOR RELÓGIO',
    'MOUSE PAD',
    'PLACA ACRÍLICA',
    'QUEBRA CABEÇA',
    'RELÓGIO DE VIDRO',
    'RELÓGIO MDF',
    'SACOLA KRAFT'
  ];

  const subcategoriasSublimacaoSuportes = [
    'SUPORTES'
  ];

  const subcategoriasSublimacaoMaquinas = [
    'CAMEO SILHOUETTE',
    'DIAMOND 360º TRANSFER',
    'IMPRESSORA EPSON',
    'PLOTTER DE RECORTE',
    'PRENSA 8 EM 1',
    'PRENSA CILINDRICA',
    'PRENSA LONG DRINK',
    'PRENSA PLANA',
    'PRENSA PORTÁTIL'
  ];

  const subcategoriasSublimacaoKitEmpreendedor = [
    'KIT CILINDRICO',
    'KIT PLANO'
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
        'SQUEEZES': subcategoriasSublimacaoSqueezes,
        'INSUMOS': subcategoriasSublimacaoInsumos,
        'SUPORTES': subcategoriasSublimacaoSuportes,
        'MÁQUINAS': subcategoriasSublimacaoMaquinas,
        'KIT EMPREENDEDOR': subcategoriasSublimacaoKitEmpreendedor
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

  const handleCategoryClick = (categoryName: string) => {
    if (openCategory === categoryName) {
      setOpenCategory(null);
    } else {
      setOpenCategory(categoryName);
    }
  };

  // Detectar clique fora do dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openCategory) {
        const dropdownRef = dropdownRefs.current[openCategory];
        if (dropdownRef && !dropdownRef.contains(event.target as Node)) {
          setOpenCategory(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openCategory]);

  return (
    <section className="bg-primary py-3 sm:py-4 md:py-6 relative overflow-x-hidden">
      <div className="container mx-auto px-2 sm:px-4 md:px-6">
        {/* Layout Responsivo */}
        <div className="hidden md:flex flex-wrap justify-center items-center gap-3 lg:gap-6 xl:gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            const hasSubcategories = category.subcategories;
            const isOpen = openCategory === category.name;
            
            return (
              <div
                key={index}
                className="relative"
                ref={(el) => {
                  dropdownRefs.current[category.name] = el;
                }}
              >
                <button
                  onClick={() => {
                    if (hasSubcategories) {
                      handleCategoryClick(category.name);
                    } else {
                      scrollToSection(category.href);
                    }
                  }}
                  className="flex flex-col items-center justify-center text-primary-foreground hover:text-accent transition-colors duration-300 group min-w-[120px] md:min-w-[140px] lg:min-w-[160px] p-2 md:p-3"
                >
                  <div className="mb-2 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={28} className="md:w-8 md:h-8 lg:w-10 lg:h-10" />
                  </div>
                  <span className="text-xs md:text-sm lg:text-base font-medium text-center leading-tight px-1">
                    {category.name}
                  </span>
                </button>

                {/* Subcategories Dropdown - Desktop */}
                {hasSubcategories && isOpen && (
                  <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50 bg-white rounded-lg shadow-lg border ${
                    category.name === 'SUBLIMAÇÃO' ? 'min-w-[700px] max-w-[900px] xl:min-w-[800px] xl:max-w-[1000px]' : 'min-w-[300px] max-w-[400px]'
                  }`}>
                    <div className="p-3 md:p-4">
                      {category.name === 'SUBLIMAÇÃO' ? (
                        // Layout horizontal para SUBLIMAÇÃO
                        <div className="flex flex-wrap gap-4 lg:gap-6">
                          {Object.entries(category.subcategories).map(([sectionName, subcategories]) => (
                            <div key={sectionName} className="flex-1 min-w-[100px] lg:min-w-[120px]">
                              <h4 className="font-semibold text-primary mb-2 text-xs lg:text-sm border-b border-gray-200 pb-1">
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

        {/* Layout Mobile - Grid 2x3 */}
        <div className="md:hidden grid grid-cols-2 gap-3">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            const hasSubcategories = category.subcategories;
            const isOpen = openCategory === category.name;
            
            return (
              <div
                key={index}
                className="relative"
                ref={(el) => {
                  dropdownRefs.current[category.name] = el;
                }}
              >
                <button
                  onClick={() => {
                    if (hasSubcategories) {
                      handleCategoryClick(category.name);
                    } else {
                      scrollToSection(category.href);
                    }
                  }}
                  className="flex flex-col items-center justify-center text-primary-foreground hover:text-accent transition-colors duration-300 group w-full p-3 rounded-lg hover:bg-primary/10"
                >
                  <div className="mb-2 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={24} />
                  </div>
                  <span className="text-xs font-medium text-center leading-tight px-1">
                    {category.name}
                  </span>
                </button>

                {/* Subcategories Modal - Mobile */}
                {hasSubcategories && isOpen && (
                  <div className="fixed inset-0 z-50 bg-black/50 p-4 flex items-center justify-center">
                    <div className="bg-white rounded-lg shadow-lg max-w-sm w-full max-h-[80vh] overflow-hidden">
                      <div className="p-4 border-b bg-primary text-primary-foreground flex justify-between items-center">
                        <h3 className="font-semibold text-sm">{category.name}</h3>
                        <button 
                          onClick={() => setOpenCategory(null)}
                          className="text-primary-foreground hover:text-accent"
                        >
                          ×
                        </button>
                      </div>
                      <div className="p-4 overflow-y-auto max-h-[60vh]">
                        {Object.entries(category.subcategories).map(([sectionName, subcategories]) => (
                          <div key={sectionName} className="mb-4 last:mb-0">
                            <h4 className="font-semibold text-primary mb-2 text-sm border-b border-gray-200 pb-1">
                              {sectionName}
                            </h4>
                            <div className="space-y-1">
                              {subcategories.map((subcategory, subIndex) => (
                                <button
                                  key={subIndex}
                                  onClick={() => {
                                    console.log(`Clicked: ${subcategory}`);
                                    setOpenCategory(null);
                                  }}
                                  className="block text-left text-xs py-2 px-2 hover:bg-gray-100 rounded transition-colors duration-200 text-gray-700 w-full"
                                >
                                  {subcategory}
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
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

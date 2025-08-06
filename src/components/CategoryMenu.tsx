
import React, { useState, useRef, useEffect } from 'react';
import { Shirt, FileText, Settings, Coffee, Paintbrush, Palette } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CategoryMenu = () => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const navigate = useNavigate();

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
      href: '/camisas-uniformes',
      subcategories: {
        'CAMISAS': subcategoriasCamisas,
        'UNIFORMES': subcategoriasUniformes
      }
    },
    {
      name: 'PAPELARIA',
      icon: FileText,
      href: '/papelaria',
      subcategories: {
        'PAPELARIA': subcategoriasPapelaria
      }
    },
    {
      name: 'EQUIPAMENTOS',
      icon: Settings,
      href: '/equipamentos',
      subcategories: {
        'MÁQUINAS': subcategoriasMaquinas,
        'KIT EMPREENDEDOR': subcategoriasKitEmpreendedor
      }
    },
    {
      name: 'CANECAS',
      icon: Coffee,
      href: '/canecas',
      subcategories: {
        'CANECAS': subcategoriasCanecas
      }
    },
    {
      name: 'SUBLIMAÇÃO',
      icon: Paintbrush,
      href: '/sublimacao',
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
      href: '/serigrafia',
      subcategories: {
        'INSUMOS': subcategoriasSerigrafiaInsumos,
        'TINTAS': subcategoriasSerigrafiasTintas,
        'MÁQUINAS': subcategoriasSerigrafiaMaquinas
      }
    }
  ];

  const getDropdownPosition = (index: number, totalCategories: number) => {
    // Primeira categoria - alinhar à esquerda
    if (index === 0) {
      return 'left-0';
    }
    // Última categoria - alinhar à direita  
    if (index === totalCategories - 1) {
      return 'right-0';
    }
    // Segunda categoria - alinhar mais à esquerda
    if (index === 1) {
      return 'left-1/4 transform -translate-x-1/4';
    }
    // Penúltima categoria - alinhar mais à direita
    if (index === totalCategories - 2) {
      return 'right-1/4 transform translate-x-1/4';
    }
    // Categorias do meio - centralizar
    return 'left-1/2 transform -translate-x-1/2';
  };

  const handleCategoryClick = (category: any) => {
    if (category.subcategories) {
      if (openCategory === category.name) {
        setOpenCategory(null);
      } else {
        setOpenCategory(category.name);
      }
    } else {
      // Navigate to category page
      navigate(category.href);
    }
  };

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
    <section className="bg-primary/90 py-2 relative overflow-visible border-b border-white/10">
      <div className="container mx-auto px-2 sm:px-4 md:px-6">
        {/* Layout Responsivo */}
        <div className="hidden md:flex flex-wrap justify-center items-center gap-2 lg:gap-4 xl:gap-6">
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
                  onClick={() => handleCategoryClick(category)}
                  className="flex flex-col items-center justify-center text-primary-foreground hover:text-accent transition-colors duration-300 group min-w-[100px] md:min-w-[120px] lg:min-w-[140px] p-1.5 md:p-2"
                >
                  <div className="mb-1 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={20} className="md:w-6 md:h-6 lg:w-7 lg:h-7" />
                  </div>
                  <span className="text-xs md:text-xs lg:text-sm font-medium text-center leading-tight px-1">
                    {category.name}
                  </span>
                </button>

                {/* Subcategories Dropdown - Desktop */}
                {hasSubcategories && isOpen && (
                  <div className={`absolute top-full mt-1 z-50 bg-white rounded-lg shadow-lg border overflow-visible ${
                    getDropdownPosition(index, categories.length)
                  } ${
                    category.name === 'SUBLIMAÇÃO' 
                      ? 'w-[95vw] max-w-[1200px]' 
                      : category.name === 'CANECAS'
                        ? 'w-[80vw] max-w-[800px]'
                        : 'w-[70vw] max-w-[600px]'
                  }`}>
                    <div className="p-3 md:p-4 max-h-[60vh] overflow-y-auto">
                      {category.name === 'SUBLIMAÇÃO' ? (
                        // Layout em grid para SUBLIMAÇÃO
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                          {Object.entries(category.subcategories).map(([sectionName, subcategories]) => (
                            <div key={sectionName} className="min-w-0">
                              <h4 className="font-semibold text-primary mb-1 text-xs lg:text-sm border-b border-gray-200 pb-1 truncate">
                                {sectionName}
                              </h4>
                              <div className="space-y-1">
                                {subcategories.map((subcategory, subIndex) => (
                                  <button
                                    key={subIndex}
                                    onClick={() => console.log(`Clicked: ${subcategory}`)}
                                    className="block text-left text-xs py-1 px-1 hover:bg-gray-100 rounded transition-colors duration-200 text-gray-700 w-full truncate"
                                    title={subcategory}
                                  >
                                    {subcategory}
                                  </button>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : category.name === 'CANECAS' ? (
                        // Layout especial para CANECAS (muitos itens)
                        <div>
                          {Object.entries(category.subcategories).map(([sectionName, subcategories]) => (
                            <div key={sectionName} className="mb-3 last:mb-0">
                              <h4 className="font-semibold text-primary mb-2 text-sm border-b border-gray-200 pb-1">
                                {sectionName}
                              </h4>
                              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
                                {subcategories.map((subcategory, subIndex) => (
                                  <button
                                    key={subIndex}
                                    onClick={() => console.log(`Clicked: ${subcategory}`)}
                                    className="text-left text-xs py-1 px-1.5 hover:bg-gray-100 rounded transition-colors duration-200 text-gray-700 truncate"
                                    title={subcategory}
                                  >
                                    {subcategory}
                                  </button>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        // Layout padrão para outras categorias
                        <div>
                          {Object.entries(category.subcategories).map(([sectionName, subcategories]) => (
                            <div key={sectionName} className="mb-3 last:mb-0">
                              <h4 className="font-semibold text-primary mb-2 text-sm border-b border-gray-200 pb-1">
                                {sectionName}
                              </h4>
                              <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
                                {subcategories.map((subcategory, subIndex) => (
                                  <button
                                    key={subIndex}
                                    onClick={() => console.log(`Clicked: ${subcategory}`)}
                                    className="text-left text-xs py-1 px-1.5 hover:bg-gray-100 rounded transition-colors duration-200 text-gray-700 truncate"
                                    title={subcategory}
                                  >
                                    {subcategory}
                                  </button>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Layout Mobile - Grid 2x3 */}
        <div className="md:hidden grid grid-cols-2 gap-2">
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
                  onClick={() => handleCategoryClick(category)}
                  className="flex flex-col items-center justify-center text-primary-foreground hover:text-accent transition-colors duration-300 group w-full p-2 rounded-lg hover:bg-primary/10"
                >
                  <div className="mb-1 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={18} />
                  </div>
                  <span className="text-xs font-medium text-center leading-tight px-1">
                    {category.name}
                  </span>
                </button>

                {/* Subcategories Modal - Mobile */}
                {hasSubcategories && isOpen && (
                  <div className="fixed inset-0 z-50 bg-black/50 p-4 flex items-center justify-center">
                    <div className="bg-white rounded-lg shadow-lg max-w-sm w-full max-h-[80vh] overflow-hidden">
                      <div className="p-3 border-b bg-primary text-primary-foreground flex justify-between items-center">
                        <h3 className="font-semibold text-sm">{category.name}</h3>
                        <button 
                          onClick={() => setOpenCategory(null)}
                          className="text-primary-foreground hover:text-accent text-xl leading-none"
                        >
                          ×
                        </button>
                      </div>
                      <div className="p-3 overflow-y-auto">
                        {Object.entries(category.subcategories).map(([sectionName, subcategories]) => (
                          <div key={sectionName} className="mb-3 last:mb-0">
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
                                  className="block text-left text-xs py-1.5 px-2 hover:bg-gray-100 rounded transition-colors duration-200 text-gray-700 w-full"
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

export default CategoryMenu;

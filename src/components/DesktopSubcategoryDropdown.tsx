import React from 'react';
import { ChevronDown, Menu } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useSelectedSubcategory } from '../hooks/useSelectedSubcategory';
import { useDesktopDropdownState } from '../hooks/useDesktopDropdownState';
import { subcategoryToCategoryMapping } from '../utils/subcategoryMapping';

const DesktopSubcategoryDropdown: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedSubcategory, setSelectedSubcategory } = useSelectedSubcategory();
  const { 
    subcategoryDropdownOpen, 
    setSubcategoryDropdownOpen,
    closeAllDropdowns 
  } = useDesktopDropdownState();

  const categories = [
    {
      title: 'Camisas e Uniformes',
      path: '/camisas-uniformes',
      subcategories: {
        'Camisas': [
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
        ],
        'Uniformes': [
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
        ]
      }
    },
    {
      title: 'Papelaria',
      path: '/papelaria',
      subcategories: {
        'Produtos': [
          'ADESIVO 30 FOLHAS',
          'FOTOGRÁFICO A4 20 FOLHAS',
          'FOTOGRÁFICO A4 50 FOLHAS',
          'FOTOGRÁFICO A4 ESPECIAL',
          'PAPEL OBM',
          'SUBLIMÁTICO A3',
          'SUBLIMÁTICO A4',
          'VINIL'
        ]
      }
    },
    {
      title: 'Equipamentos',
      path: '/equipamentos',
      subcategories: {
        'Máquinas': [
          'CAMEO SILHOUETTE',
          'DIAMOND 360º TRANSFER',
          'IMPRESSORA EPSON',
          'PLOTTER DE RECORTE',
          'PRENSA 8 EM 1',
          'PRENSA CILINDRICA',
          'PRENSA LONG DRINK',
          'PRENSA PLANA',
          'PRENSA PORTÁTIL'
        ],
        'Kit Empreendedor': [
          'KIT CILÍNDRICO',
          'KIT PLANO'
        ]
      }
    },
    {
      title: 'Canecas',
      path: '/canecas',
      subcategories: {
        'Tipos de Canecas': [
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
        ]
      }
    },
    {
      title: 'Sublimação',
      path: '/sublimacao',
      subcategories: {
        'Squeezes': [
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
        ],
        'Insumos': [
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
        ],
        'Suportes': [
          'SUPORTES'
        ],
        'Máquinas': [
          'CAMEO SILHOUETTE',
          'DIAMOND 360º TRANSFER',
          'IMPRESSORA EPSON',
          'PLOTTER DE RECORTE',
          'PRENSA 8 EM 1',
          'PRENSA CILINDRICA',
          'PRENSA LONG DRINK',
          'PRENSA PLANA',
          'PRENSA PORTÁTIL'
        ],
        'Kit Empreendedor': [
          'KIT CILINDRICO',
          'KIT PLANO'
        ]
      }
    },
    {
      title: 'Serigrafia',
      path: '/serigrafia',
      subcategories: {
        'Insumos': [
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
        ],
        'Tintas': [
          'CROMA',
          'HIDROCOLOR',
          'HIDROMIX',
          'PIGMENTO'
        ],
        'Máquinas': [
          'CILINDRICA SMART',
          'CILINDRICA TEX COM SUPORTE 2 BERCOS',
          'PLOTTER SEM SUPORTE'
        ]
      }
    }
  ];

  const handleSubcategoryClick = (item: string) => {
    console.log(`[DesktopSubcategoryDropdown] Selected subcategory: ${item}`);
    
    // First, set the selected subcategory
    setSelectedSubcategory(item);
    
    // Get the category route for this subcategory
    const categoryRoute = subcategoryToCategoryMapping[item];
    
    if (categoryRoute) {
      console.log(`[DesktopSubcategoryDropdown] Current path: ${location.pathname}, Target path: ${categoryRoute}`);
      
      // Close all dropdowns
      closeAllDropdowns();
      
      // If we need to navigate to a different category page
      if (location.pathname !== categoryRoute) {
        console.log(`[DesktopSubcategoryDropdown] Navigating to: ${categoryRoute}`);
        navigate(categoryRoute);
      }
    } else {
      console.warn(`[DesktopSubcategoryDropdown] No route mapping found for subcategory: ${item}`);
      closeAllDropdowns();
    }
  };

  const handleDropdownOpenChange = (open: boolean) => {
    console.log(`[DesktopSubcategoryDropdown] Dropdown state changing to: ${open}`);
    setSubcategoryDropdownOpen(open);
  };

  const currentCategory = categories.find(cat => location.pathname === cat.path);

  if (!currentCategory) {
    console.log(`[DesktopSubcategoryDropdown] No current category found for path: ${location.pathname}`);
    return null;
  }

  const displayTitle = selectedSubcategory || 'Produtos';

  return (
    <DropdownMenu open={subcategoryDropdownOpen} onOpenChange={handleDropdownOpenChange}>
      <DropdownMenuTrigger asChild>
        <button 
          className="flex items-center gap-2 bg-secondary text-secondary-foreground py-2 px-4 rounded-lg font-medium hover:bg-secondary/80 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:ring-offset-2"
          aria-label="Selecionar produto"
          type="button"
        >
          <Menu size={18} aria-hidden="true" />
          <span className="truncate max-w-[200px]">{displayTitle}</span>
          <ChevronDown 
            size={16} 
            className={`transition-transform duration-200 ${subcategoryDropdownOpen ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 bg-popover border shadow-lg z-50">
        <ScrollArea className="h-96">
          {Object.entries(currentCategory.subcategories).map(([groupName, items]) => (
            <div key={groupName} className="p-2">
              <DropdownMenuLabel className="px-2 py-1.5 text-sm font-semibold">
                {groupName}
              </DropdownMenuLabel>
              {items.map((item, index) => (
                <DropdownMenuItem
                  key={index}
                  onClick={() => handleSubcategoryClick(item)}
                  className={`text-sm cursor-pointer hover:bg-accent focus:bg-accent px-2 py-1.5 transition-colors ${
                    selectedSubcategory === item ? 'bg-accent/50 font-medium' : ''
                  }`}
                >
                  {item}
                </DropdownMenuItem>
              ))}
              {Object.keys(currentCategory.subcategories).indexOf(groupName) < Object.keys(currentCategory.subcategories).length - 1 && (
                <DropdownMenuSeparator />
              )}
            </div>
          ))}
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DesktopSubcategoryDropdown;

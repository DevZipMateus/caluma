
import React from 'react';
import { Shirt, FileText, Settings, Coffee, Paintbrush, Palette, ChevronDown } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarHeader,
  useSidebar,
} from '@/components/ui/sidebar';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  
  const categories = [
    {
      title: 'Camisas e Uniformes',
      icon: Shirt,
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
      icon: FileText,
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
      icon: Settings,
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
      icon: Coffee,
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
      icon: Paintbrush,
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
      icon: Palette,
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

  const currentCategory = categories.find(cat => location.pathname === cat.path);

  if (!currentCategory) {
    return null;
  }

  return (
    <Sidebar className="w-80 border-r">
      <SidebarHeader className="p-4 border-b">
        <div className="flex items-center gap-2">
          <currentCategory.icon className="h-5 w-5 text-primary" />
          <h2 className="font-semibold text-primary">{currentCategory.title}</h2>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        {Object.entries(currentCategory.subcategories).map(([groupName, items]) => (
          <SidebarGroup key={groupName}>
            <Collapsible defaultOpen>
              <CollapsibleTrigger asChild>
                <SidebarGroupLabel className="group/label hover:bg-sidebar-accent hover:text-sidebar-accent-foreground cursor-pointer">
                  {groupName}
                  <ChevronDown className="ml-auto transition-transform group-data-[state=open]/label:rotate-180" />
                </SidebarGroupLabel>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {items.map((item, index) => (
                      <SidebarMenuItem key={index}>
                        <SidebarMenuButton
                          onClick={() => console.log(`Clicked: ${item}`)}
                          className="text-sm hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                        >
                          {item}
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </Collapsible>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}

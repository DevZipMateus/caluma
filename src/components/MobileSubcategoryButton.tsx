
import React from 'react';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { AppSidebar } from './AppSidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { useMobileSheetState } from '../hooks/useMobileSheetState';

const MobileSubcategoryButton: React.FC = () => {
  const { 
    subcategorySheetOpen, 
    setSubcategorySheetOpen 
  } = useMobileSheetState();

  return (
    <Sheet open={subcategorySheetOpen} onOpenChange={setSubcategorySheetOpen}>
      <SheetTrigger asChild>
        <button className="flex-1 bg-primary text-primary-foreground py-3 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
          <Menu size={20} />
          Produtos
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 p-0">
        <SheetHeader className="p-4 border-b">
          <SheetTitle>Menu de Produtos</SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-auto">
          <SidebarProvider>
            <AppSidebar />
          </SidebarProvider>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSubcategoryButton;

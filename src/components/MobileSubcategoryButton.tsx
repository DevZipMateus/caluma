
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { AppSidebar } from './AppSidebar';

const MobileSubcategoryButton: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="flex-1 bg-secondary text-secondary-foreground py-3 px-4 rounded-lg font-medium hover:bg-secondary/80 transition-colors flex items-center justify-center gap-2">
          <Menu size={20} />
          Menu
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 p-0">
        <SheetHeader className="p-4 border-b">
          <SheetTitle>Menu de Produtos</SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-auto">
          <AppSidebar />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSubcategoryButton;

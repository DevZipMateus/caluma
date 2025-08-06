
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trash2, Plus, Minus, MessageCircle, X } from 'lucide-react';
import { useProductSelection } from '../hooks/useProductSelection';
import { useIsDesktop } from '../hooks/useIsDesktop';

interface SelectedProductsListProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SelectedProductsList: React.FC<SelectedProductsListProps> = ({ open, onOpenChange }) => {
  const { selectedProducts, updateQuantity, removeProduct, clearSelection } = useProductSelection();
  const isDesktop = useIsDesktop();

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleSendWhatsApp = () => {
    if (selectedProducts.length === 0) return;

    let message = "Olá! Gostaria de solicitar um orçamento para os seguintes produtos:\n\n";
    
    selectedProducts.forEach((product, index) => {
      message += `${index + 1}. ${product.name}\n`;
      message += `   Quantidade: ${product.quantity}\n`;
      message += `   Descrição: ${product.description}\n\n`;
    });

    message += "Aguardo o orçamento. Obrigado!";

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/5573998503370?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
    
    // Opcionalmente, limpar a seleção após enviar
    // clearSelection();
    onOpenChange(false);
  };

  const ProductList = () => (
    <div className="space-y-4">
      {selectedProducts.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">
          <p>Nenhum produto selecionado ainda.</p>
        </div>
      ) : (
        <>
          {selectedProducts.map((product) => (
            <Card key={product.id}>
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{product.name}</h4>
                    <p className="text-xs text-muted-foreground mb-2">{product.description}</p>
                    
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleQuantityChange(product.id, product.quantity - 1)}
                      >
                        <Minus size={12} />
                      </Button>
                      
                      <Input
                        type="number"
                        min="1"
                        value={product.quantity}
                        onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value) || 1)}
                        className="w-16 h-8 text-center"
                      />
                      
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleQuantityChange(product.id, product.quantity + 1)}
                      >
                        <Plus size={12} />
                      </Button>
                      
                      <Button
                        variant="destructive"
                        size="icon"
                        className="h-8 w-8 ml-2"
                        onClick={() => removeProduct(product.id)}
                      >
                        <Trash2 size={12} />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
          <div className="flex flex-col gap-3 pt-4 border-t">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Total de itens:</span>
              <Badge variant="secondary">
                {selectedProducts.reduce((total, product) => total + product.quantity, 0)}
              </Badge>
            </div>
            
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={clearSelection}
                className="flex-1"
              >
                <Trash2 size={16} className="mr-2" />
                Limpar Lista
              </Button>
              
              <Button
                onClick={handleSendWhatsApp}
                className="flex-1"
              >
                <MessageCircle size={16} className="mr-2" />
                Enviar via WhatsApp
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Lista de Produtos Selecionados</DialogTitle>
          </DialogHeader>
          <ProductList />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="max-h-[80vh]">
        <DrawerHeader>
          <DrawerTitle>Lista de Produtos Selecionados</DrawerTitle>
        </DrawerHeader>
        <div className="px-4 pb-4 overflow-y-auto">
          <ProductList />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default SelectedProductsList;

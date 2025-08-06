
import React from 'react';
import { X, MessageCircle, Trash2, ShoppingCart } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useProductSelection } from '../hooks/useProductSelection';

interface SelectedProductsListProps {
  isOpen: boolean;
  onClose: () => void;
}

const SelectedProductsList: React.FC<SelectedProductsListProps> = ({ isOpen, onClose }) => {
  const { selectedProducts, removeProduct, clearSelection } = useProductSelection();

  const handleSendWhatsApp = () => {
    if (selectedProducts.length === 0) return;

    const productList = selectedProducts
      .map((product, index) => `${index + 1}. ${product.name}`)
      .join('\n');

    const message = `Olá! Gostaria de solicitar orçamento para os seguintes produtos:\n\n${productList}\n\nPor favor, me envie mais informações sobre preços e disponibilidade.`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/5573998503370?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full sm:max-w-md">
        <SheetHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <SheetTitle>Produtos Selecionados</SheetTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="rounded-full"
            >
              <X size={20} />
            </Button>
          </div>
          
          {selectedProducts.length > 0 && (
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                {selectedProducts.length} produto(s) selecionado(s)
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={clearSelection}
                className="text-destructive hover:text-destructive"
              >
                <Trash2 size={16} className="mr-2" />
                Limpar Lista
              </Button>
            </div>
          )}
        </SheetHeader>

        <div className="mt-6 flex-1 space-y-4">
          {selectedProducts.length === 0 ? (
            <div className="text-center text-muted-foreground py-8">
              <ShoppingCart size={48} className="mx-auto mb-4 opacity-50" />
              <p>Nenhum produto selecionado</p>
              <p className="text-sm">Adicione produtos usando as caixas de seleção</p>
            </div>
          ) : (
            <>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {selectedProducts.map((product) => (
                  <Card key={product.id} className="relative">
                    <CardContent className="p-3">
                      <div className="flex items-start gap-3">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm leading-tight mb-1">
                            {product.name}
                          </h4>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {product.description}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeProduct(product.id)}
                          className="h-8 w-8 text-muted-foreground hover:text-destructive flex-shrink-0"
                        >
                          <X size={16} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="space-y-3 pt-4 border-t">
                <Button
                  onClick={handleSendWhatsApp}
                  className="w-full"
                  size="lg"
                >
                  <MessageCircle size={20} className="mr-2" />
                  Enviar Lista via WhatsApp
                </Button>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SelectedProductsList;


import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MessageCircle, User, Phone, Mail } from 'lucide-react';
import { SelectedProduct } from '../hooks/useProductSelection';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: SelectedProduct[];
}

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, products }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const totalItems = products.reduce((sum, product) => sum + product.quantity, 0);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generateWhatsAppMessage = () => {
    let message = `*Solicitação de Orçamento*\n\n`;
    message += `*Dados do Cliente:*\n`;
    message += `Nome: ${formData.name}\n`;
    message += `Telefone: ${formData.phone}\n`;
    if (formData.email) message += `Email: ${formData.email}\n`;
    
    message += `\n*Produtos Solicitados:*\n`;
    products.forEach((product, index) => {
      message += `${index + 1}. ${product.name} - Quantidade: ${product.quantity}\n`;
    });
    
    if (formData.message) {
      message += `\n*Observações:*\n${formData.message}`;
    }
    
    message += `\n\n_Total de itens: ${totalItems}_`;
    
    return message;
  };

  const handleSendQuote = () => {
    if (!formData.name || !formData.phone) {
      alert('Por favor, preencha pelo menos o nome e telefone.');
      return;
    }

    const message = generateWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/5573998503370?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MessageCircle size={20} />
            Finalizar Orçamento
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Products Summary */}
          <div className="bg-gray-50 p-3 rounded-lg">
            <h4 className="font-medium mb-2">Produtos Selecionados:</h4>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {products.map((product) => (
                <div key={product.id} className="flex items-center gap-2 text-sm">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-8 h-8 object-cover rounded"
                  />
                  <span className="flex-1">{product.name}</span>
                  <span className="font-medium">Qtd: {product.quantity}</span>
                </div>
              ))}
            </div>
            <div className="mt-2 pt-2 border-t text-sm font-medium">
              Total: {totalItems} {totalItems === 1 ? 'item' : 'itens'}
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <User size={16} />
                Nome *
              </Label>
              <Input
                id="name"
                placeholder="Seu nome completo"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone size={16} />
                Telefone *
              </Label>
              <Input
                id="phone"
                placeholder="(00) 00000-0000"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail size={16} />
                Email (opcional)
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Observações (opcional)</Label>
              <Textarea
                id="message"
                placeholder="Informações adicionais sobre o orçamento..."
                rows={3}
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2 pt-4">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Cancelar
            </Button>
            <Button onClick={handleSendQuote} className="flex-1">
              <MessageCircle size={16} className="mr-2" />
              Enviar via WhatsApp
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteModal;

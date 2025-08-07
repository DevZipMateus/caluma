
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, ShoppingCart, Plus, Minus, Check } from 'lucide-react';
import { useProductSelection } from '../hooks/useProductSelection';

const ProductGallery = () => {
  const { selectedProducts, addProduct, removeProduct, updateQuantity } = useProductSelection();

  const products = [
    {
      id: 1,
      name: 'Camisa Polo Feminina',
      image: '/lovable-uploads/galeria/camisa polo feminina.jpg',
      description: 'Polo feminina de alta qualidade'
    },
    {
      id: 2,
      name: 'Camisa Polo',
      image: '/lovable-uploads/galeria/camisa polo.jpg',
      description: 'Polo masculina clássica'
    },
    {
      id: 3,
      name: 'Caneca Alumínio',
      image: '/lovable-uploads/galeria/caneca aluminio.jpg',
      description: 'Caneca personalizada em alumínio'
    },
    {
      id: 4,
      name: 'Caneca Inox',
      image: '/lovable-uploads/galeria/caneca inox.jpg',
      description: 'Caneca térmica em inox'
    },
    {
      id: 5,
      name: 'Canecas Chopp',
      image: '/lovable-uploads/galeria/canecas chopp.jpg',
      description: 'Canecas para chopp personalizadas'
    },
    {
      id: 6,
      name: 'Máquina de Corte',
      image: '/lovable-uploads/galeria/maquina de corte.jpg',
      description: 'Equipamento profissional de corte'
    },
    {
      id: 7,
      name: 'Camiseta Masculina Algodão',
      image: '/lovable-uploads/galeria/masculina algodão.jpg',
      description: 'Camiseta 100% algodão masculina'
    },
    {
      id: 8,
      name: 'Camiseta Masculina Raglan',
      image: '/lovable-uploads/galeria/masculina reglan.jpg',
      description: 'Camiseta raglan masculina'
    },
    {
      id: 9,
      name: 'Papéis Adesivos',
      image: '/lovable-uploads/galeria/papeis adesivos.jpg',
      description: 'Variedade de papéis adesivos'
    },
    {
      id: 10,
      name: 'Papel Fotográfico',
      image: '/lovable-uploads/galeria/papel fotografico.jpg',
      description: 'Papel fotográfico de qualidade'
    },
    {
      id: 11,
      name: 'Prensa Plana',
      image: '/lovable-uploads/galeria/prensa plana.jpg',
      description: 'Prensa térmica plana profissional'
    },
    {
      id: 12,
      name: 'Prensa Transfer',
      image: '/lovable-uploads/galeria/prensa transfer.jpg',
      description: 'Prensa para transfer e sublimação'
    },
    {
      id: 13,
      name: 'Regata Feminina',
      image: '/lovable-uploads/galeria/regata feminina.jpg',
      description: 'Regata feminina personalizada'
    },
    {
      id: 14,
      name: 'Regata Masculina',
      image: '/lovable-uploads/galeria/regata masculina.jpg',
      description: 'Regata masculina de qualidade'
    }
  ];

  const handleWhatsAppContact = (productName: string) => {
    const message = `Olá! Gostaria de mais informações sobre: ${productName}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/5573998503370?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  const handleSelectProduct = (product: typeof products[0]) => {
    const selectedProduct = selectedProducts.find(p => p.id === product.id);
    if (selectedProduct) {
      updateQuantity(product.id, selectedProduct.quantity + 1);
    } else {
      addProduct({
        id: product.id,
        name: product.name,
        image: product.image,
        description: product.description,
        quantity: 1
      });
    }
  };

  const getProductQuantity = (productId: number) => {
    const product = selectedProducts.find(p => p.id === productId);
    return product ? product.quantity : 0;
  };

  return (
    <section id="produtos" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <Badge variant="secondary" className="mb-4">Nossos Produtos</Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
            Alguns de nossos
            <span className="block text-accent mt-2">produtos</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Conheça alguns dos produtos e serviços que oferecemos. Selecione os produtos desejados para solicitar um orçamento!
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => {
            const quantity = getProductQuantity(product.id);
            const isSelected = quantity > 0;
            
            return (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden rounded-t-lg relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {isSelected && (
                      <div className="absolute top-2 right-2 bg-primary text-primary-foreground rounded-full p-1">
                        <Check size={16} />
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4 space-y-3">
                    {/* Product Info */}
                    <div>
                      <h3 className="font-semibold text-foreground mb-2 line-clamp-1">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {product.description}
                      </p>
                    </div>

                    {/* Main Selection Button */}
                    <Button
                      onClick={() => handleSelectProduct(product)}
                      className={`w-full ${isSelected ? 'bg-primary hover:bg-primary/90' : 'bg-secondary hover:bg-secondary/80'}`}
                      size="sm"
                    >
                      <ShoppingCart size={16} className="mr-2" />
                      {isSelected ? `Selecionado (${quantity})` : 'Selecionar Produto'}
                    </Button>

                    {/* Quantity Controls - Show when selected */}
                    {isSelected && (
                      <div className="flex items-center justify-between bg-primary/10 rounded-lg p-2">
                        <span className="text-sm font-medium text-primary">Quantidade:</span>
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-7 w-7 p-0"
                            onClick={() => {
                              if (quantity === 1) {
                                removeProduct(product.id);
                              } else {
                                updateQuantity(product.id, quantity - 1);
                              }
                            }}
                          >
                            <Minus size={12} />
                          </Button>
                          <span className="text-sm font-bold min-w-[24px] text-center bg-white px-2 py-1 rounded">
                            {quantity}
                          </span>
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-7 w-7 p-0"
                            onClick={() => updateQuantity(product.id, quantity + 1)}
                          >
                            <Plus size={12} />
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* WhatsApp Contact Button */}
                    <Button
                      onClick={() => handleWhatsAppContact(product.name)}
                      size="sm"
                      variant="ghost"
                      className="w-full"
                    >
                      <MessageCircle size={16} className="mr-2" />
                      Mais Informações
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Não encontrou o que procura? Entre em contato conosco!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90"
          >
            <a 
              href="https://wa.me/5573998503370" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle size={20} />
              Para saber o restante do catálogo clique aqui
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;


import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Criar mensagem para WhatsApp
    const whatsappMessage = `Olá! Gostaria de solicitar um orçamento:

*Nome:* ${formData.name}
*E-mail:* ${formData.email}
*Telefone:* ${formData.phone}
*Assunto:* ${formData.subject}
*Mensagem:* ${formData.message}`;
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/5573998503370?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone / WhatsApp',
      content: '(73) 99850-3370',
      action: 'tel:+5573998503370'
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'calumaconsultoria@gmail.com',
      action: 'mailto:calumaconsultoria@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Localização',
      content: 'Itabuna - BA',
      action: ''
    },
    {
      icon: Clock,
      title: 'Horário de Atendimento',
      content: 'Seg à Sex: 8h às 18h',
      action: ''
    }
  ];

  return (
    <section id="contato" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <Badge variant="secondary" className="mb-4">Entre em Contato</Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
            Vamos transformar sua ideia
            <span className="block text-accent mt-2">em realidade</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos prontos para atender você! Entre em contato e solicite seu orçamento personalizado.
            Resposta rápida garantida.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index}>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                        <info.icon className="text-primary" size={20} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground mb-1">{info.title}</h4>
                        {info.action ? (
                          <a 
                            href={info.action}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.content}</p>
                        )}
                      </div>
                    </div>
                    {index < contactInfo.length - 1 && <Separator className="mt-6" />}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Contato Rápido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  asChild
                  className="w-full"
                  size="lg"
                >
                  <a 
                    href="https://wa.me/5573998503370" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle size={20} />
                    WhatsApp
                  </a>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  className="w-full"
                  size="lg"
                >
                  <a 
                    href="tel:+5573998503370"
                    className="flex items-center gap-2"
                  >
                    <Phone size={20} />
                    Ligar Agora
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary">Solicite seu Orçamento</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Nome Completo *
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        E-mail *
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Telefone *
                      </label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="(73) 99999-9999"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Assunto *
                      </label>
                      <Input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="Sobre o que você precisa?"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      placeholder="Descreva seu projeto, quantidade, prazo desejado..."
                      className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send size={20} className="mr-2" />
                    Enviar Solicitação via WhatsApp
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    * Campos obrigatórios. Sua solicitação será enviada diretamente para nosso WhatsApp.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

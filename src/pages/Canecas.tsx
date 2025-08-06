
import React from 'react';
import { Coffee } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';
import { AppSidebar } from '../components/AppSidebar';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';

const Canecas = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <SidebarProvider>
        <div className="flex min-h-screen w-full pt-14 sm:pt-16 md:pt-18 lg:pt-20">
          <AppSidebar />
          
          <SidebarInset className="flex-1 flex flex-col">
            <main className="flex-grow bg-gray-50">
              {/* Hero Section */}
              <div className="bg-primary text-primary-foreground py-12">
                <div className="container mx-auto px-4">
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <Coffee size={48} />
                    <h1 className="text-3xl md:text-4xl font-bold">Canecas</h1>
                  </div>
                  <p className="text-center text-lg opacity-90 max-w-2xl mx-auto">
                    Grande variedade de canecas para personalização
                  </p>
                </div>
              </div>

              {/* Content Area */}
              <div className="container mx-auto px-4 py-12">
                <div className="text-center">
                  <p className="text-lg text-gray-600 mb-8">
                    Use o menu lateral para navegar pelos tipos de canecas disponíveis.
                  </p>
                  <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold text-primary mb-4">
                      Variedade de Canecas
                    </h2>
                    <p className="text-gray-600">
                      No menu lateral você encontrará todos os tipos de canecas disponíveis, 
                      desde modelos básicos até opções especiais com diferentes acabamentos.
                    </p>
                  </div>
                </div>
              </div>
            </main>
            
            <Footer />
          </SidebarInset>
        </div>
      </SidebarProvider>
      
      <FloatingButton />
    </div>
  );
};

export default Canecas;


import React from 'react';
import { Paintbrush } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';
import CategoryMenu from '../components/CategoryMenu';
import { AppSidebar } from '../components/AppSidebar';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';

const Sublimacao = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <CategoryMenu />
      
      <SidebarProvider>
        <div className="flex min-h-screen w-full pt-2">
          <AppSidebar />
          
          <SidebarInset className="flex-1 flex flex-col">
            <main className="flex-grow bg-gray-50">
              {/* Hero Section */}
              <div className="bg-primary text-primary-foreground py-8">
                <div className="container mx-auto px-4">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <Paintbrush size={40} />
                    <h1 className="text-2xl md:text-3xl font-bold">Sublimação</h1>
                  </div>
                  <p className="text-center opacity-90 max-w-2xl mx-auto">
                    Tudo para sublimação: materiais, equipamentos e acessórios
                  </p>
                </div>
              </div>

              {/* Content Area */}
              <div className="container mx-auto px-4 py-8">
                <div className="text-center">
                  <p className="text-gray-600 mb-6">
                    Use o menu lateral para navegar pelas categorias de sublimação.
                  </p>
                  <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
                    <h2 className="text-xl font-bold text-primary mb-3">
                      Materiais para Sublimação
                    </h2>
                    <p className="text-gray-600">
                      No menu lateral você encontrará todas as categorias organizadas: 
                      squeezes, insumos, suportes, máquinas e kits empreendedor.
                    </p>
                  </div>
                </div>
              </div>
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
      
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default Sublimacao;

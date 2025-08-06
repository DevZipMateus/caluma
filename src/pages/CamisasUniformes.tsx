
import React from 'react';
import { Shirt } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';
import CategoryMenu from '../components/CategoryMenu';
import { AppSidebar } from '../components/AppSidebar';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';

const CamisasUniformes = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <CategoryMenu />
      
      <SidebarProvider>
        <div className="flex flex-1 w-full pt-2 sm:pt-4">
          <AppSidebar />
          
          <SidebarInset className="flex-1 flex flex-col min-w-0">
            <main className="flex-1 bg-gray-50 p-2 sm:p-4 md:p-6">
              {/* Hero Section */}
              <div className="bg-primary text-primary-foreground py-6 sm:py-8 px-4 rounded-lg mb-4 sm:mb-6">
                <div className="max-w-4xl mx-auto">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <Shirt size={32} className="sm:w-10 sm:h-10" />
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
                      Camisas e Uniformes
                    </h1>
                  </div>
                  <p className="text-center opacity-90 text-sm sm:text-base max-w-2xl mx-auto px-2">
                    Camisas personalizadas e uniformes profissionais de alta qualidade
                  </p>
                </div>
              </div>

              {/* Content Area */}
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-6 sm:mb-8 px-2">
                  <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                    Use o menu lateral para navegar pelas categorias de camisas e uniformes.
                  </p>
                  <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 max-w-2xl mx-auto">
                    <h2 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3">
                      Produtos Disponíveis
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      No menu lateral você encontrará todas as categorias organizadas: 
                      camisas personalizadas de diversos tipos e uniformes profissionais.
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

export default CamisasUniformes;

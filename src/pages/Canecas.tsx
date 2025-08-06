
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';
import CategoryMenu from '../components/CategoryMenu';
import SubcategoryImage from '../components/SubcategoryImage';
import { AppSidebar } from '../components/AppSidebar';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { useSelectedSubcategory } from '../hooks/useSelectedSubcategory';
import { useIsDesktop } from '../hooks/useIsDesktop';

const Canecas = () => {
  const { selectedSubcategory } = useSelectedSubcategory();
  const isDesktop = useIsDesktop();

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden w-full">
      <Header />
      <CategoryMenu />
      
      {/* Espaçamento responsivo ajustado para header + CategoryMenu */}
      <div className={`${
        isDesktop 
          ? 'pt-44 lg:pt-48 xl:pt-52 2xl:pt-56' 
          : 'pt-14 sm:pt-16 md:pt-20 lg:pt-24'
      } flex-1 flex flex-col min-h-0`}>
        {isDesktop ? (
          <SidebarProvider>
            <div className="flex flex-1 w-full min-h-0">
              <AppSidebar />
              
              <SidebarInset className="flex-1 flex flex-col min-w-0">
                <main className="flex-1 bg-gray-50 p-2 sm:p-3 md:p-4 lg:p-6 xl:p-8">
                  <div className="bg-primary text-primary-foreground py-4 sm:py-6 lg:py-8 px-3 sm:px-4 lg:px-6 rounded-lg mb-4 sm:mb-6">
                    <div className="max-w-4xl mx-auto text-center">
                      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
                        Canecas
                      </h1>
                    </div>
                  </div>

                  <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                      <div className="lg:w-1/3">
                        <SubcategoryImage subcategory={selectedSubcategory} />
                      </div>
                      
                      <div className="flex-1">
                        <div className="text-center mb-4 sm:mb-6 lg:mb-8 px-2">
                          <p className="text-gray-600 mb-3 sm:mb-4 lg:mb-6 text-xs sm:text-sm lg:text-base">
                            Use o menu lateral para navegar pelos tipos de canecas disponíveis.
                          </p>
                          <div className="bg-white rounded-lg shadow-lg p-3 sm:p-4 lg:p-6">
                            <h2 className="text-base sm:text-lg lg:text-xl font-bold text-primary mb-2 sm:mb-3">
                              Variedade de Canecas
                            </h2>
                            <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">
                              No menu lateral você encontrará todos os tipos de canecas disponíveis, 
                              desde modelos básicos até opções especiais com diferentes acabamentos.
                              {selectedSubcategory && (
                                <span className="block mt-2 text-primary font-medium">
                                  Produto selecionado: {selectedSubcategory}
                                </span>
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </main>
              </SidebarInset>
            </div>
          </SidebarProvider>
        ) : (
          <main className="flex-1 bg-gray-50 p-3 sm:p-4">
            <div className="bg-primary text-primary-foreground py-4 sm:py-6 px-3 sm:px-4 rounded-lg mb-4 sm:mb-6">
              <div className="text-center">
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold">Canecas</h1>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                <SubcategoryImage subcategory={selectedSubcategory} />
              </div>
            </div>
          </main>
        )}
      </div>
      
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default Canecas;


import React from 'react';
import { Settings } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';
import CategoryMenu from '../components/CategoryMenu';
import SubcategoryImage from '../components/SubcategoryImage';
import MobileButtonRow from '../components/MobileButtonRow';
import { AppSidebar } from '../components/AppSidebar';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { useSelectedSubcategory } from '../hooks/useSelectedSubcategory';
import { useIsDesktop } from '../hooks/useIsDesktop';

const Equipamentos = () => {
  const { selectedSubcategory } = useSelectedSubcategory();
  const isDesktop = useIsDesktop();

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden w-full">
      <Header />
      <CategoryMenu />
      
      {/* Espaçamento responsivo ajustado */}
      <div className={`${
        isDesktop 
          ? 'pt-28 lg:pt-32 xl:pt-36 2xl:pt-40' 
          : 'pt-14 sm:pt-16 md:pt-20 lg:pt-24'
      } flex-1 flex flex-col min-h-0`}>
        {isDesktop ? (
          <SidebarProvider>
            <div className="flex flex-1 w-full min-h-0">
              <AppSidebar />
              
              <SidebarInset className="flex-1 flex flex-col min-w-0">
                <main className="flex-1 bg-gray-50 p-2 sm:p-3 md:p-4 lg:p-6 xl:p-8">
                  <div className="bg-primary text-primary-foreground py-4 sm:py-6 lg:py-8 px-3 sm:px-4 lg:px-6 rounded-lg mb-4 sm:mb-6">
                    <div className="max-w-4xl mx-auto">
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 lg:gap-4 mb-2 sm:mb-3 lg:mb-4">
                        <Settings size={24} className="sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center">
                          Equipamentos
                        </h1>
                      </div>
                      <p className="text-center opacity-90 text-xs sm:text-sm lg:text-base max-w-2xl mx-auto px-2">
                        Máquinas e equipamentos profissionais para personalização
                      </p>
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
                            Use o menu lateral para navegar pelas categorias de equipamentos.
                          </p>
                          <div className="bg-white rounded-lg shadow-lg p-3 sm:p-4 lg:p-6">
                            <h2 className="text-base sm:text-lg lg:text-xl font-bold text-primary mb-2 sm:mb-3">
                              Equipamentos Profissionais
                            </h2>
                            <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">
                              No menu lateral você encontrará máquinas de última geração e 
                              kits completos para empreendedores.
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
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold">Equipamentos</h1>
              </div>
            </div>

            <MobileButtonRow />

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

export default Equipamentos;

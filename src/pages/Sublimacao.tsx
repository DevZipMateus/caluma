
import React from 'react';
import { Paintbrush } from 'lucide-react';
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

const Sublimacao = () => {
  const { selectedSubcategory } = useSelectedSubcategory();
  const isDesktop = useIsDesktop();

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <CategoryMenu />
      
      <div className="flex-1 flex flex-col">
        {isDesktop ? (
          <SidebarProvider>
            <div className="flex flex-1 w-full min-h-0">
              <AppSidebar />
              
              <SidebarInset className="flex-1 flex flex-col min-w-0">
                <main className="flex-1 bg-gray-50 p-2 sm:p-4 md:p-6">
                  <div className="bg-primary text-primary-foreground py-6 sm:py-8 px-4 rounded-lg mb-4 sm:mb-6">
                    <div className="max-w-4xl mx-auto">
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <Paintbrush size={32} className="sm:w-10 sm:h-10" />
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
                          Sublimação
                        </h1>
                      </div>
                      <p className="text-center opacity-90 text-sm sm:text-base max-w-2xl mx-auto px-2">
                        Tudo para sublimação: materiais, equipamentos e acessórios
                      </p>
                    </div>
                  </div>

                  <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="lg:w-1/3">
                        <SubcategoryImage subcategory={selectedSubcategory} />
                      </div>
                      
                      <div className="flex-1">
                        <div className="text-center mb-6 sm:mb-8 px-2">
                          <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                            Use o menu lateral para navegar pelas categorias de sublimação.
                          </p>
                          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
                            <h2 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-3">
                              Materiais para Sublimação
                            </h2>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                              No menu lateral você encontrará todas as categorias organizadas: 
                              squeezes, insumos, suportes, máquinas e kits empreendedor.
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
          <main className="flex-1 bg-gray-50 p-4">
            <div className="bg-primary text-primary-foreground py-6 px-4 rounded-lg mb-6">
              <div className="text-center">
                <h1 className="text-2xl font-bold">Sublimação</h1>
              </div>
            </div>

            <MobileButtonRow />

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <SubcategoryImage subcategory={selectedSubcategory} />
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-bold text-primary mb-4 text-center">
                  Materiais para Sublimação
                </h2>
                <p className="text-gray-600 text-center mb-4 leading-relaxed">
                  Tudo que você precisa para sublimação profissional.
                </p>
                
                <div className="grid grid-cols-1 gap-3 mt-6">
                  {[
                    'Tintas para Sublimação',
                    'Papel Transfer',
                    'Papel Fotográfico',
                    'Materiais Diversos'
                  ].map((category, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h3 className="font-medium text-primary">{category}</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Produtos de alta qualidade para sublimação
                      </p>
                    </div>
                  ))}
                </div>

                {selectedSubcategory && (
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                    <p className="text-primary font-medium text-center">
                      Produto selecionado: {selectedSubcategory}
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                <h3 className="text-lg font-semibold text-primary mb-3">
                  Quer começar na sublimação?
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Temos kits completos e materiais avulsos para todos os níveis.
                </p>
                <button className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  Solicitar Orçamento
                </button>
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

export default Sublimacao;

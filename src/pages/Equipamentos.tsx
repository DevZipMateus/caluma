
import React from 'react';
import Header from '../components/Layout/Header';
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
      
      {/* Espaçamento responsivo ajustado para header + CategoryMenu */}
      <div className={`${
        isDesktop 
          ? 'pt-44 lg:pt-48 xl:pt-52 2xl:pt-56' 
          : 'pt-32 sm:pt-36 md:pt-40 lg:pt-44'
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
                        Equipamentos
                      </h1>
                    </div>
                  </div>

                  <div className="max-w-6xl mx-auto">
                    <SubcategoryImage subcategory={selectedSubcategory} />
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

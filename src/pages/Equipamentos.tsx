
import React from 'react';
import { Settings } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';
import { AppSidebar } from '../components/AppSidebar';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';

const Equipamentos = () => {
  const subcategoriasMaquinas = [
    'CAMEO SILHOUETTE',
    'DIAMOND 360º TRANSFER',
    'IMPRESSORA EPSON',
    'PLOTTER DE RECORTE',
    'PRENSA 8 EM 1',
    'PRENSA CILINDRICA',
    'PRENSA LONG DRINK',
    'PRENSA PLANA',
    'PRENSA PORTÁTIL'
  ];

  const subcategoriasKitEmpreendedor = [
    'KIT CILÍNDRICO',
    'KIT PLANO'
  ];

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
                    <Settings size={48} />
                    <h1 className="text-3xl md:text-4xl font-bold">Equipamentos</h1>
                  </div>
                  <p className="text-center text-lg opacity-90 max-w-2xl mx-auto">
                    Máquinas e kits profissionais para seu negócio
                  </p>
                </div>
              </div>

              {/* Categories Content */}
              <div className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Máquinas Section */}
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold text-primary mb-6 border-b border-gray-200 pb-3">
                      Máquinas
                    </h2>
                    <div className="space-y-3">
                      {subcategoriasMaquinas.map((item, index) => (
                        <button
                          key={index}
                          className="block w-full text-left p-4 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 hover:border-primary"
                          onClick={() => console.log(`Clicked: ${item}`)}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Kit Empreendedor Section */}
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold text-primary mb-6 border-b border-gray-200 pb-3">
                      Kit Empreendedor
                    </h2>
                    <div className="space-y-3">
                      {subcategoriasKitEmpreendedor.map((item, index) => (
                        <button
                          key={index}
                          className="block w-full text-left p-4 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 hover:border-primary"
                          onClick={() => console.log(`Clicked: ${item}`)}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
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

export default Equipamentos;

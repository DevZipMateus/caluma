
import React from 'react';
import { Palette } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';
import CategoryMenu from '../components/CategoryMenu';

const Serigrafia = () => {
  const subcategoriasInsumos = [
    'AUX PLÁSTICOS',
    'BARRICA CLEAR',
    'CLEAR FILM',
    'COBERCOLOR',
    'COLA PERMANENTE',
    'COLOR PAPEL',
    'COPO MEDIDOR',
    'CROMA',
    'EMULSÃO',
    'ESPÁTULA',
    'FOTO ESTAMPA',
    'GRAMPEADOR',
    'GRAMPO',
    'LUVA',
    'NYLON',
    'PARAFUSOS'
  ];

  const subcategoriasTintas = [
    'CROMA',
    'HIDROCOLOR',
    'HIDROMIX',
    'PIGMENTO'
  ];

  const subcategoriasMaquinas = [
    'CILINDRICA SMART',
    'CILINDRICA TEX COM SUPORTE 2 BERCOS',
    'PLOTTER SEM SUPORTE'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <CategoryMenu />
      
      <main className="flex-grow bg-gray-50">
        {/* Hero Section */}
        <div className="bg-primary text-primary-foreground py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Palette size={48} />
              <h1 className="text-3xl md:text-4xl font-bold">Serigrafia</h1>
            </div>
            <p className="text-center text-lg opacity-90 max-w-2xl mx-auto">
              Materiais e equipamentos para serigrafia profissional
            </p>
          </div>
        </div>

        {/* Categories Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Insumos Section */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-primary mb-6 border-b border-gray-200 pb-3">
                Insumos
              </h2>
              <div className="space-y-3">
                {subcategoriasInsumos.map((item, index) => (
                  <button
                    key={index}
                    className="block w-full text-left p-3 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 hover:border-primary text-sm"
                    onClick={() => console.log(`Clicked: ${item}`)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Tintas Section */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-primary mb-6 border-b border-gray-200 pb-3">
                Tintas
              </h2>
              <div className="space-y-3">
                {subcategoriasTintas.map((item, index) => (
                  <button
                    key={index}
                    className="block w-full text-left p-3 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 hover:border-primary text-sm"
                    onClick={() => console.log(`Clicked: ${item}`)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Máquinas Section */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-primary mb-6 border-b border-gray-200 pb-3">
                Máquinas
              </h2>
              <div className="space-y-3">
                {subcategoriasMaquinas.map((item, index) => (
                  <button
                    key={index}
                    className="block w-full text-left p-3 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 hover:border-primary text-sm"
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
      <FloatingButton />
    </div>
  );
};

export default Serigrafia;

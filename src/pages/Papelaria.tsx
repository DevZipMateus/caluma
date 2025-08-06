
import React from 'react';
import { FileText } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';

const Papelaria = () => {
  const subcategoriasPapelaria = [
    'ADESIVO 30 FOLHAS',
    'FOTOGRÁFICO A4 20 FOLHAS',
    'FOTOGRÁFICO A4 50 FOLHAS',
    'FOTOGRÁFICO A4 ESPECIAL',
    'PAPEL OBM',
    'SUBLIMÁTICO A3',
    'SUBLIMÁTICO A4',
    'VINIL'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 pt-24 sm:pt-28 md:pt-32">
        {/* Hero Section */}
        <div className="bg-primary text-primary-foreground py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-4 mb-6">
              <FileText size={48} />
              <h1 className="text-3xl md:text-4xl font-bold">Papelaria</h1>
            </div>
            <p className="text-center text-lg opacity-90 max-w-2xl mx-auto">
              Materiais de papelaria para impressão e sublimação
            </p>
          </div>
        </div>

        {/* Categories Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-primary mb-6 border-b border-gray-200 pb-3">
                Produtos de Papelaria
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {subcategoriasPapelaria.map((item, index) => (
                  <button
                    key={index}
                    className="text-left p-4 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 hover:border-primary"
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

export default Papelaria;

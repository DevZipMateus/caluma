
import React from 'react';
import { Coffee } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';

const Canecas = () => {
  const subcategoriasCanecas = [
    'CANECA AÇO INOX',
    'CANECA ALUMÍNIO',
    'CANECA BELLY',
    'CANECA BRANCA',
    'CANECA BASE GLITTER',
    'CANECA BOLINHA',
    'CANECA CHOPP',
    'CANECA COM COLHER',
    'CANECA COM GLITTER',
    'CANECA CÔNICA',
    'CANECA CORAÇÃO',
    'CANECA CROMADA',
    'CANECA FALL',
    'CANECA INOX',
    'CANECA JATEADA',
    'CANECA MÁGICA',
    'CANECA MAZON',
    'CANECA NEON',
    'CANECA PEROLADA',
    'CANECA POLÍMERO',
    'CANECA DE TARJA SUBLIMÁTICA',
    'CANECA WHISKY'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 pt-24 sm:pt-28 md:pt-32">
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

        {/* Categories Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-primary mb-6 border-b border-gray-200 pb-3">
                Tipos de Canecas
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {subcategoriasCanecas.map((item, index) => (
                  <button
                    key={index}
                    className="text-left p-3 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 hover:border-primary text-sm"
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

export default Canecas;


import React from 'react';
import { Shirt } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';
import CategoryMenu from '../components/CategoryMenu';

const CamisasUniformes = () => {
  const subcategoriasCamisas = [
    'Body Infantil',
    'Body Infantil Colorido', 
    'Camisa Polo Feminina',
    'Camisa Polo Feminina Dry',
    'Camisa Polo Masculina',
    'Camisa Polo Masculina Dry',
    'Feminina Algodão',
    'Feminina Algodão Colorida',
    'Feminina Branca',
    'Feminina Colorida',
    'Feminina Raglan',
    'Infantil Branca',
    'Infantil Colorida',
    'Masculina Branca',
    'Masculina Algodão',
    'Masculina Algodão Colorida',
    'Masculina Colorida',
    'Masculina Reglan',
    'Regata Feminina Branca',
    'Regata Feminina Colorida',
    'Regata Masculina Branca',
    'Regata Masculina Colorida'
  ];

  const subcategoriasUniformes = [
    'Avental Napo',
    'Avental Oxford',
    'Bermuda de Brim',
    'Bota Cano Alto',
    'Bota Cano Curto',
    'Calça Carijó',
    'Calça Brim',
    'Colete Futebol',
    'Jaleco de Brim',
    'Jaleco de Enfermagem'
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
              <Shirt size={48} />
              <h1 className="text-3xl md:text-4xl font-bold">Camisas e Uniformes</h1>
            </div>
            <p className="text-center text-lg opacity-90 max-w-2xl mx-auto">
              Encontre a melhor seleção de camisas e uniformes para todas as ocasiões
            </p>
          </div>
        </div>

        {/* Categories Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Camisas Section */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-primary mb-6 border-b border-gray-200 pb-3">
                Camisas
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {subcategoriasCamisas.map((item, index) => (
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

            {/* Uniformes Section */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-primary mb-6 border-b border-gray-200 pb-3">
                Uniformes
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {subcategoriasUniformes.map((item, index) => (
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

export default CamisasUniformes;

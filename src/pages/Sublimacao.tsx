
import React from 'react';
import { Paintbrush } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';

const Sublimacao = () => {
  const subcategoriasSqueezes = [
    'ALUMÍNIO BIG MOUTH',
    'ALUMÍNIO LONG NECK',
    'BOLINHA',
    'COELHINHO',
    'COPO TÉRMICO',
    'CRAZY CAT',
    'CRAZY DOG',
    'GATINHO',
    'INOX COM GLITTER',
    'INOX COROA',
    'INOX TÉRMICA',
    'LATINHA INOX',
    'MOSQUETÃO',
    'NIKE',
    'POLÍMERO',
    'TAMPA BAMBU',
    'TÉRMICA CAFÉ',
    'TÉRMICA DIGITAL'
  ];

  const subcategoriasInsumos = [
    'ALMOCHAVEIRO',
    'AZULEJO',
    'BASE GIRATÓRIA',
    'BOLSA ECOBAG',
    'BONÉ DEKO',
    'BONÉ TACTEL',
    'CANETA',
    'CAPA DE ALMOFADA',
    'CAPA DE ALMOFADA LANTEJOULA',
    'CAVALETES',
    'CHAVEIRO ACRÍLICO',
    'CHAVEIRO POLÍMERO',
    'CHINELO',
    'COLOCADOR DE TIRAS CHINELO',
    'FITA TÉRMICA',
    'LAVABINHO',
    'LAVABO',
    'MANTA SILICONE',
    'MDF',
    'MDF TEMÁTICO',
    'MOTOR RELÓGIO',
    'MOUSE PAD',
    'PLACA ACRÍLICA',
    'QUEBRA CABEÇA',
    'RELÓGIO DE VIDRO',
    'RELÓGIO MDF',
    'SACOLA KRAFT'
  ];

  const subcategoriasSuportes = ['SUPORTES'];

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
    'KIT CILINDRICO',
    'KIT PLANO'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 pt-24 sm:pt-28 md:pt-32">
        {/* Hero Section */}
        <div className="bg-primary text-primary-foreground py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Paintbrush size={48} />
              <h1 className="text-3xl md:text-4xl font-bold">Sublimação</h1>
            </div>
            <p className="text-center text-lg opacity-90 max-w-2xl mx-auto">
              Tudo para sublimação: materiais, equipamentos e acessórios
            </p>
          </div>
        </div>

        {/* Categories Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8">
            {/* Grid layout for multiple sections */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Squeezes */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-bold text-primary mb-4 border-b border-gray-200 pb-2">
                  Squeezes
                </h2>
                <div className="space-y-2">
                  {subcategoriasSqueezes.map((item, index) => (
                    <button
                      key={index}
                      className="block w-full text-left p-2 text-xs rounded hover:bg-gray-100 transition-colors border border-gray-200 hover:border-primary"
                      onClick={() => console.log(`Clicked: ${item}`)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Máquinas */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-bold text-primary mb-4 border-b border-gray-200 pb-2">
                  Máquinas
                </h2>
                <div className="space-y-2">
                  {subcategoriasMaquinas.map((item, index) => (
                    <button
                      key={index}
                      className="block w-full text-left p-2 text-xs rounded hover:bg-gray-100 transition-colors border border-gray-200 hover:border-primary"
                      onClick={() => console.log(`Clicked: ${item}`)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Kit Empreendedor */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-bold text-primary mb-4 border-b border-gray-200 pb-2">
                  Kit Empreendedor
                </h2>
                <div className="space-y-2">
                  {subcategoriasKitEmpreendedor.map((item, index) => (
                    <button
                      key={index}
                      className="block w-full text-left p-2 text-xs rounded hover:bg-gray-100 transition-colors border border-gray-200 hover:border-primary"
                      onClick={() => console.log(`Clicked: ${item}`)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Large sections */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Insumos */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-bold text-primary mb-4 border-b border-gray-200 pb-2">
                  Insumos
                </h2>
                <div className="grid grid-cols-2 gap-2">
                  {subcategoriasInsumos.map((item, index) => (
                    <button
                      key={index}
                      className="text-left p-2 text-xs rounded hover:bg-gray-100 transition-colors border border-gray-200 hover:border-primary"
                      onClick={() => console.log(`Clicked: ${item}`)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Suportes */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-bold text-primary mb-4 border-b border-gray-200 pb-2">
                  Suportes
                </h2>
                <div className="space-y-2">
                  {subcategoriasSuportes.map((item, index) => (
                    <button
                      key={index}
                      className="block w-full text-left p-2 text-xs rounded hover:bg-gray-100 transition-colors border border-gray-200 hover:border-primary"
                      onClick={() => console.log(`Clicked: ${item}`)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
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

export default Sublimacao;

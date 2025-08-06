
import React, { useEffect } from 'react';
import { subcategoryImageMapping } from '../utils/imageMapping';

interface SubcategoryImageProps {
  subcategory: string | null;
}

const SubcategoryImage: React.FC<SubcategoryImageProps> = ({ subcategory }) => {
  useEffect(() => {
    console.log(`SubcategoryImage received subcategory: ${subcategory}`);
  }, [subcategory]);

  if (!subcategory) {
    console.log('No subcategory selected, not rendering image');
    return (
      <div className="w-full mb-4 sm:mb-6 animate-fade-in">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="w-full h-[600px] flex items-center justify-center bg-gray-100">
            <p className="text-gray-500 text-center">
              Selecione uma subcategoria para ver a imagem do produto
            </p>
          </div>
        </div>
      </div>
    );
  }

  const imageSrc = subcategoryImageMapping[subcategory];
  
  if (!imageSrc) {
    console.warn(`No image mapping found for subcategory: ${subcategory}`);
    return (
      <div className="w-full mb-4 sm:mb-6 animate-fade-in">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="w-full h-[600px] flex items-center justify-center bg-gray-100">
            <div className="text-center">
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-primary mb-2">
                {subcategory}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Imagem não disponível no momento
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  console.log(`Rendering image for ${subcategory}: ${imageSrc}`);

  return (
    <div className="w-full mb-4 sm:mb-6 animate-fade-in">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-full h-[600px]">
          <img
            src={imageSrc}
            alt={subcategory}
            className="w-full h-full object-contain"
            onError={(e) => {
              console.error(`Failed to load image for ${subcategory}: ${imageSrc}`);
            }}
            onLoad={() => {
              console.log(`Successfully loaded image for ${subcategory}`);
            }}
          />
        </div>
        <div className="p-3 sm:p-4">
          <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-primary">
            {subcategory}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            Imagem do produto selecionado
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubcategoryImage;

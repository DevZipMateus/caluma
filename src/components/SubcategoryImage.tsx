
import React from 'react';
import { subcategoryImageMapping } from '../utils/imageMapping';

interface SubcategoryImageProps {
  subcategory: string | null;
}

const SubcategoryImage: React.FC<SubcategoryImageProps> = ({ subcategory }) => {
  if (!subcategory) return null;

  const imageSrc = subcategoryImageMapping[subcategory];
  
  if (!imageSrc) return null;

  return (
    <div className="w-full mb-4 sm:mb-6 animate-fade-in">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-full h-[600px]">
          <img
            src={imageSrc}
            alt={subcategory}
            className="w-full h-full object-contain"
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

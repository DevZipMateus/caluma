
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
    <div className="w-full mb-6 animate-fade-in">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={imageSrc}
          alt={subcategory}
          className="w-full h-48 sm:h-56 md:h-64 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-primary">
            {subcategory}
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Imagem do produto selecionado
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubcategoryImage;


import React, { useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useAutoCarousel } from '../hooks/useAutoCarousel';
import { getCategoryImages } from '../utils/categoryImages';
import { getFirstSubcategoryForCategory } from '../hooks/useSelectedSubcategory';
import { getSubcategoryCarouselImages } from '../utils/subcategoryCarouselImages';

interface CategoryCarouselProps {
  categorySlug: string;
  categoryName: string;
}

const CategoryCarousel: React.FC<CategoryCarouselProps> = ({ categorySlug, categoryName }) => {
  // Sempre usar imagens da primeira subcategoria para o carrossel
  const firstSubcategory = getFirstSubcategoryForCategory(categorySlug);
  const subcategoryImages = firstSubcategory ? getSubcategoryCarouselImages(firstSubcategory) : [];
  
  // Fallback para imagens gerais da categoria se não houver imagens específicas da subcategoria
  const fallbackImages = getCategoryImages(categorySlug);
  const images = subcategoryImages.length > 0 ? subcategoryImages : fallbackImages;
  
  const { currentIndex, goToSlide } = useAutoCarousel({ 
    items: images, 
    interval: 3000, 
    enabled: true,
    categorySlug // Pass categorySlug to help with transitions
  });

  // Force re-render when categorySlug changes to ensure correct images display immediately
  useEffect(() => {
    console.log(`[CategoryCarousel] Loading category: ${categorySlug} with first subcategory: ${firstSubcategory}, ${images.length} images`);
  }, [categorySlug, firstSubcategory, images.length]);

  if (images.length === 0) {
    console.warn(`[CategoryCarousel] No images found for category: ${categorySlug}`);
    return null;
  }

  const displayName = firstSubcategory || categoryName;

  return (
    <div className="w-full mb-4 sm:mb-6 animate-fade-in" key={categorySlug}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={`${categorySlug}-${index}`} className={index === currentIndex ? 'block' : 'hidden'}>
                  <div className="w-full h-[600px]">
                    <img
                      src={image}
                      alt={`Produto ${index + 1} - ${displayName}`}
                      className="w-full h-full object-contain transition-opacity duration-500"
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {images.length > 1 && (
              <>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
              </>
            )}
          </Carousel>
          
          {/* Indicadores de slides */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={`${categorySlug}-indicator-${index}`}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary scale-110' 
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
        
        <div className="p-3 sm:p-4">
          <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-primary">
            {displayName}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            {firstSubcategory ? 'Primeira subcategoria - ' : ''}Produtos disponíveis - Selecione um produto específico nos botões acima
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCarousel;

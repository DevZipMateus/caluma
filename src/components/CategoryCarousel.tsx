
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useAutoCarousel } from '../hooks/useAutoCarousel';
import { getCategoryImages } from '../utils/categoryImages';

interface CategoryCarouselProps {
  categorySlug: string;
  categoryName: string;
}

const CategoryCarousel: React.FC<CategoryCarouselProps> = ({ categorySlug, categoryName }) => {
  const images = getCategoryImages(categorySlug);
  const { currentIndex, goToSlide } = useAutoCarousel({ 
    items: images, 
    interval: 3000, 
    enabled: true 
  });

  if (images.length === 0) return null;

  return (
    <div className="w-full mb-4 sm:mb-6 animate-fade-in">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className={index === currentIndex ? 'block' : 'hidden'}>
                  <div className="w-full h-[600px]">
                    <img
                      src={image}
                      alt={`Produto ${index + 1} - ${categoryName}`}
                      className="w-full h-full object-contain transition-opacity duration-500"
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
                  key={index}
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
            {categoryName}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            Produtos disponíveis - Selecione um produto específico nos botões acima
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCarousel;

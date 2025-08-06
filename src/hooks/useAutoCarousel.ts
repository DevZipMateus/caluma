
import { useState, useEffect } from 'react';

interface UseAutoCarouselProps {
  items: string[];
  interval?: number;
  enabled?: boolean;
}

export const useAutoCarousel = ({ 
  items, 
  interval = 3000, 
  enabled = true 
}: UseAutoCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!enabled || items.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval, enabled]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
  };

  return {
    currentIndex,
    goToSlide,
    goToPrevious,
    goToNext
  };
};


import { useState, useEffect } from 'react';

interface UseAutoCarouselProps {
  items: string[];
  interval?: number;
  enabled?: boolean;
  categorySlug?: string; // Add categorySlug to help with transitions
}

export const useAutoCarousel = ({ 
  items, 
  interval = 3000, 
  enabled = true,
  categorySlug 
}: UseAutoCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset currentIndex immediately when category changes
  useEffect(() => {
    console.log(`[useAutoCarousel] Category changed to: ${categorySlug}, resetting to index 0`);
    setCurrentIndex(0);
  }, [categorySlug]);

  // Reset currentIndex when items array changes
  useEffect(() => {
    console.log(`[useAutoCarousel] Items changed, count: ${items.length}, resetting to index 0`);
    setCurrentIndex(0);
  }, [items]);

  useEffect(() => {
    if (!enabled || items.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex === items.length - 1 ? 0 : prevIndex + 1;
        console.log(`[useAutoCarousel] Auto-advancing from ${prevIndex} to ${nextIndex}`);
        return nextIndex;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval, enabled]);

  const goToSlide = (index: number) => {
    console.log(`[useAutoCarousel] Manual navigation to slide ${index}`);
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    console.log(`[useAutoCarousel] Previous: ${currentIndex} -> ${newIndex}`);
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    console.log(`[useAutoCarousel] Next: ${currentIndex} -> ${newIndex}`);
    setCurrentIndex(newIndex);
  };

  return {
    currentIndex,
    goToSlide,
    goToPrevious,
    goToNext
  };
};

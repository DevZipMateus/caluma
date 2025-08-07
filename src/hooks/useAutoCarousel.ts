
import { useState, useEffect, useCallback, useRef } from 'react';

interface UseAutoCarouselProps {
  items: string[];
  interval?: number;
  enabled?: boolean;
  categorySlug?: string;
}

export const useAutoCarousel = ({ 
  items, 
  interval = 3000, 
  enabled = true,
  categorySlug 
}: UseAutoCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout>();
  const previousCategoryRef = useRef<string>();

  // Função para limpar timer
  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = undefined;
    }
  }, []);

  // Reset imediato e agressivo quando categoria muda
  useEffect(() => {
    if (categorySlug && categorySlug !== previousCategoryRef.current) {
      console.log(`[useAutoCarousel] Category change detected: ${previousCategoryRef.current} -> ${categorySlug}`);
      
      // Limpar timer imediatamente
      clearTimer();
      
      // Reset imediato do estado
      setCurrentIndex(0);
      setIsTransitioning(true);
      
      // Atualizar referência da categoria anterior
      previousCategoryRef.current = categorySlug;
      
      // Pequeno delay para garantir que a transição seja visível
      setTimeout(() => {
        setIsTransitioning(false);
      }, 150);
    }
  }, [categorySlug, clearTimer]);

  // Reset quando items mudam
  useEffect(() => {
    console.log(`[useAutoCarousel] Items changed, count: ${items.length}, resetting to index 0`);
    clearTimer();
    setCurrentIndex(0);
    setIsTransitioning(true);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 100);
  }, [items.length, clearTimer]);

  // Timer para auto-advance
  useEffect(() => {
    if (!enabled || items.length <= 1 || isTransitioning) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex === items.length - 1 ? 0 : prevIndex + 1;
        console.log(`[useAutoCarousel] Auto-advancing from ${prevIndex} to ${nextIndex}`);
        return nextIndex;
      });
    }, interval);

    return () => clearTimer();
  }, [items.length, interval, enabled, isTransitioning, clearTimer]);

  // Cleanup ao desmontar
  useEffect(() => {
    return () => clearTimer();
  }, [clearTimer]);

  const goToSlide = useCallback((index: number) => {
    console.log(`[useAutoCarousel] Manual navigation to slide ${index}`);
    setCurrentIndex(index);
  }, []);

  const goToPrevious = useCallback(() => {
    const newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    console.log(`[useAutoCarousel] Previous: ${currentIndex} -> ${newIndex}`);
    setCurrentIndex(newIndex);
  }, [currentIndex, items.length]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    console.log(`[useAutoCarousel] Next: ${currentIndex} -> ${newIndex}`);
    setCurrentIndex(newIndex);
  }, [currentIndex, items.length]);

  return {
    currentIndex,
    isTransitioning,
    goToSlide,
    goToPrevious,
    goToNext
  };
};

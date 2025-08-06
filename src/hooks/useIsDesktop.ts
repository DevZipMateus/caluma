
import { useState, useEffect } from 'react';

const DESKTOP_BREAKPOINT = 1024;

export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= DESKTOP_BREAKPOINT);
    };

    const mediaQuery = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`);
    
    // Set initial value
    checkIsDesktop();
    
    // Listen for changes
    const handleChange = () => checkIsDesktop();
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return !!isDesktop;
}

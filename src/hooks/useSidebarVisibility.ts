
import { useLocation } from 'react-router-dom';

export const useSidebarVisibility = () => {
  const location = useLocation();
  
  const categoryPaths = [
    '/camisas-uniformes',
    '/papelaria',
    '/equipamentos',
    '/canecas',
    '/sublimacao',
    '/serigrafia'
  ];
  
  const shouldShowSidebar = categoryPaths.includes(location.pathname);
  
  return { shouldShowSidebar };
};

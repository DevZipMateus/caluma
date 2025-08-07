
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';
import NotFound from './pages/NotFound';
import CamisasUniformes from './pages/CamisasUniformes';
import Papelaria from './pages/Papelaria';
import Equipamentos from './pages/Equipamentos';
import Canecas from './pages/Canecas';
import Sublimacao from './pages/Sublimacao';
import Serigrafia from './pages/Serigrafia';
import { useScrollToTop } from './hooks/useScrollToTop';
import { useIsDesktop } from './hooks/useIsDesktop';

function MainPage() {
  const isDesktop = useIsDesktop();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <Categories />
      
      {/* Show Hero only on desktop */}
      {isDesktop && (
        <main className="flex-grow">
          <Hero />
        </main>
      )}
      
      <Footer />
      <FloatingButton />
    </div>
  );
}

function AppContent() {
  // Hook to scroll to top on route changes
  useScrollToTop();

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/camisas-uniformes" element={<CamisasUniformes />} />
      <Route path="/papelaria" element={<Papelaria />} />
      <Route path="/equipamentos" element={<Equipamentos />} />
      <Route path="/canecas" element={<Canecas />} />
      <Route path="/sublimacao" element={<Sublimacao />} />
      <Route path="/serigrafia" element={<Serigrafia />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

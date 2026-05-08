import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TranslateWidget from './components/TranslateWidget';
import Home from './pages/Home';
import Events from './pages/Events';
import Join from './pages/Join';
import Volunteer from './pages/Volunteer';
import Donate from './pages/Donate';
import EmbedKit from './pages/EmbedKit';
import Documents from './pages/Documents';
import Sponsors from './pages/Sponsors';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function RouteEffects() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-cream-100">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-scarlet-700 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <TranslateWidget />
      <Header />
      <RouteEffects />
      <main id="main" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/join" element={<Join />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/embed-kit" element={<EmbedKit />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

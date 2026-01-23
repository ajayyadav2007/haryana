import { useState, useEffect } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Search from './pages/Search';
import RouteDetails from './pages/RouteDetails';
import NotFound from './pages/NotFound';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || '/');
  const [routeId, setRouteId] = useState<string | null>(null);
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || '/';
      setCurrentPath(hash);
      
      // Extract route ID if it's a route details page
      const routeMatch = hash.match(/^\/route\/(.+)$/);
      if (routeMatch) {
        setRouteId(routeMatch[1]);
      } else {
        setRouteId(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initialize on mount

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <Navbar currentPath={currentPath} onShowHelp={() => setShowHelp(true)} />
      <main>
        <ErrorBoundary>
          {currentPath === '/' && <Home showHelp={showHelp} onHelpClose={() => setShowHelp(false)} />}
          {currentPath === '/search' && <Search />}
          {currentPath.startsWith('/route/') && routeId && <RouteDetails routeId={routeId} />}
          {!['/', '/search'].includes(currentPath) && !currentPath.startsWith('/route/') && <NotFound />}
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
}
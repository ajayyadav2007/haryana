import { Bus, Clock, Menu, X, HelpCircle } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  currentPath: string;
  onShowHelp?: () => void;
}

export default function Navbar({ currentPath, onShowHelp }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHomePage = currentPath === '/';

  const isActive = (path: string) => currentPath === path;

  const NavLink = ({ to, children, className = '' }: { to: string; children: React.ReactNode; className?: string }) => (
    <a href={`#${to}`} className={className}>
      {children}
    </a>
  );

  return (
    <nav className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 text-white shadow-2xl sticky top-0 z-50 border-b border-white/10 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between ${isHomePage ? 'h-14' : 'h-20'}`}>
          {!isHomePage && (
            <NavLink to="/" className="flex items-center gap-3 hover:opacity-90 transition-all duration-300 group">
              <div className="bg-white p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Bus className="w-7 h-7 text-orange-600" />
              </div>
              <div>
                <div className="font-bold text-2xl tracking-tight">Haryana Roadways</div>
                <div className="text-xs text-orange-100 font-medium tracking-wide">Complete Bus Timetable</div>
              </div>
            </NavLink>
          )}
          
          {isHomePage && (
            <NavLink to="/" className="flex items-center gap-2 hover:opacity-90 transition-all duration-300">
              <Bus className="w-6 h-6 text-white" />
              <span className="font-bold text-lg text-white">Haryana Roadways</span>
            </NavLink>
          )}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-3">
            <NavLink
              to="/"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                isActive('/') 
                  ? 'bg-white text-orange-600 shadow-lg scale-105'
                  : 'hover:bg-white/10 backdrop-blur-sm'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>All Routes</span>
            </NavLink>
            {onShowHelp && (
              <button
                onClick={onShowHelp}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
                title="Show help guide"
              >
                <HelpCircle className="w-4 h-4" />
                <span>Help</span>
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl hover:bg-white/10 transition-all duration-300"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 animate-fadeIn">
            <NavLink
              to="/"
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                isActive('/') 
                  ? 'bg-white text-orange-600 shadow-lg'
                  : 'hover:bg-white/10'
              }`}
            >
              <Clock className="w-5 h-5" />
              <span className="font-medium" onClick={() => setMobileMenuOpen(false)}>All Routes</span>
            </NavLink>
            {onShowHelp && (
              <button
                onClick={() => {
                  onShowHelp();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover:bg-white/10 text-left"
              >
                <HelpCircle className="w-5 h-5" />
                <span className="font-medium">Help</span>
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
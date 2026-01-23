import { useState, useEffect } from 'react';
import { X, Search, Filter, MapPin, Sparkles, Clock, Zap } from 'lucide-react';

interface WelcomeGuideProps {
  onClose?: () => void;
}

export function WelcomeGuide({ onClose }: WelcomeGuideProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('hasVisitedBefore');
    if (!hasVisited) {
      setIsOpen(true);
      localStorage.setItem('hasVisitedBefore', 'true');
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) {
      onClose();
    }
  };

  const handleReset = () => {
    localStorage.removeItem('hasVisitedBefore');
    setIsOpen(true);
  };

  // Expose reset function globally for testing
  if (typeof window !== 'undefined') {
    (window as any).resetWelcomeGuide = handleReset;
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 text-white p-8 rounded-t-2xl">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-white/20 p-3 rounded-xl">
              <Sparkles className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl font-black">Welcome! 🎉</h2>
              <p className="text-orange-100 text-sm">Your guide to Haryana Roadways</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          {/* Quick Start */}
          <div>
            <h3 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-orange-600" />
              Quick Start Guide
            </h3>
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex gap-4 items-start bg-orange-50 p-4 rounded-xl border-2 border-orange-200">
                <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-black flex-shrink-0">
                  1
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-4 h-4 text-orange-600" />
                    <h4 className="font-bold text-gray-900">Enter Source & Destination</h4>
                  </div>
                  <p className="text-sm text-gray-700">
                    Type your starting city and destination. Use the autocomplete for faster input!
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4 items-start bg-blue-50 p-4 rounded-xl border-2 border-blue-200">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-black flex-shrink-0">
                  2
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Search className="w-4 h-4 text-blue-600" />
                    <h4 className="font-bold text-gray-900">Click Search or Press Enter</h4>
                  </div>
                  <p className="text-sm text-gray-700">
                    Hit the "Search Buses" button or simply press Enter to find routes instantly.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4 items-start bg-purple-50 p-4 rounded-xl border-2 border-purple-200">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-black flex-shrink-0">
                  3
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Filter className="w-4 h-4 text-purple-600" />
                    <h4 className="font-bold text-gray-900">Use Advanced Filters (Optional)</h4>
                  </div>
                  <p className="text-sm text-gray-700">
                    Filter by depot, bus type, or operator to find exactly what you need.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pro Tips */}
          <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-5 rounded-xl border-2 border-yellow-200">
            <h3 className="text-lg font-black text-gray-900 mb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-600" />
              Pro Tips
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 font-bold">•</span>
                <span><strong>Popular Routes:</strong> Click any popular route card for instant search</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 font-bold">•</span>
                <span><strong>Swap Cities:</strong> Use the "Swap" button to quickly reverse your route</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 font-bold">•</span>
                <span><strong>Via Routes:</strong> Buses passing through your city will also be shown</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 font-bold">•</span>
                <span><strong>Recent Searches:</strong> Your searches are saved for quick access later</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 font-bold">•</span>
                <span><strong>Keyboard Shortcuts:</strong> Press <kbd className="px-2 py-0.5 bg-white rounded border border-gray-300 font-mono text-xs">Enter</kbd> to search quickly</span>
              </li>
            </ul>
          </div>

          {/* Stats Info */}
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="text-2xl font-black text-orange-600">1300+</div>
              <div className="text-xs text-gray-600 font-semibold">Routes</div>
            </div>
            <div className="text-center bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="text-2xl font-black text-orange-600">11</div>
              <div className="text-xs text-gray-600 font-semibold">Depots</div>
            </div>
            <div className="text-center bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="text-2xl font-black text-orange-600">5800+</div>
              <div className="text-xs text-gray-600 font-semibold">Daily Buses</div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleClose}
            className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 rounded-xl font-black text-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Got it! Let's Start 🚀
          </button>

          <p className="text-center text-xs text-gray-500">
            You can always see this guide again by clicking the help icon in the navbar
          </p>
        </div>
      </div>
    </div>
  );
}
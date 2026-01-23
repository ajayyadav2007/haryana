import { Clock, X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface SearchHistory {
  from: string;
  to: string;
  timestamp: number;
}

interface RecentSearchesProps {
  onSearch: (from: string, to: string) => void;
}

export function RecentSearches({ onSearch }: RecentSearchesProps) {
  const [searches, setSearches] = useState<SearchHistory[]>([]);

  useEffect(() => {
    loadSearches();
  }, []);

  const loadSearches = () => {
    try {
      const saved = localStorage.getItem('recentSearches');
      if (saved) {
        const parsed = JSON.parse(saved) as SearchHistory[];
        // Keep only last 5 searches
        setSearches(parsed.slice(0, 5));
      }
    } catch (error) {
      console.error('Failed to load recent searches:', error);
    }
  };

  const removeSearch = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const updated = searches.filter((_, i) => i !== index);
      setSearches(updated);
      localStorage.setItem('recentSearches', JSON.stringify(updated));
    } catch (error) {
      console.error('Failed to remove search:', error);
    }
  };

  const clearAll = () => {
    setSearches([]);
    localStorage.removeItem('recentSearches');
  };

  if (searches.length === 0) {
    return null;
  }

  return (
    <div className="mb-8 animate-fadeIn">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-black text-gray-900 flex items-center gap-2">
          <Clock className="w-5 h-5 text-orange-600" />
          Recent Searches
        </h2>
        <button
          onClick={clearAll}
          className="text-xs font-semibold text-gray-500 hover:text-gray-700 transition-colors"
        >
          Clear All
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {searches.map((search, index) => (
          <button
            key={index}
            onClick={() => onSearch(search.from, search.to)}
            className="relative bg-white border-2 border-gray-200 rounded-lg p-4 hover:shadow-lg hover:border-orange-300 transition-all duration-300 text-left group hover:scale-105"
          >
            <button
              onClick={(e) => removeSearch(index, e)}
              className="absolute top-2 right-2 p-1 rounded-full bg-gray-100 hover:bg-red-100 opacity-0 group-hover:opacity-100 transition-all"
              aria-label="Remove"
            >
              <X className="w-3 h-3 text-gray-600 hover:text-red-600" />
            </button>
            <div className="text-sm">
              <div className="font-bold text-gray-900 mb-1 truncate">{search.from}</div>
              <div className="text-xs text-gray-500 mb-1">to</div>
              <div className="font-bold text-gray-900 truncate">{search.to}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

// Helper function to save a search
export function saveSearch(from: string, to: string) {
  if (!from || !to) return;

  try {
    const saved = localStorage.getItem('recentSearches');
    let searches: SearchHistory[] = saved ? JSON.parse(saved) : [];

    // Remove duplicate if exists
    searches = searches.filter(
      (s) => !(s.from === from && s.to === to)
    );

    // Add new search at the beginning
    searches.unshift({
      from,
      to,
      timestamp: Date.now(),
    });

    // Keep only last 10 searches
    searches = searches.slice(0, 10);

    localStorage.setItem('recentSearches', JSON.stringify(searches));
  } catch (error) {
    console.error('Failed to save search:', error);
  }
}
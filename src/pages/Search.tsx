import { useState } from 'react';
import { busRoutes, cities } from '../data/busRoutes';
import { RouteCard } from '../components/RouteCard';
import { Search as SearchIcon, MapPin, ArrowRight, Repeat2, Sparkles } from 'lucide-react';

export default function Search() {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSearch = () => {
    setSearchPerformed(true);
  };

  // Smart search that handles via/intermediate stops
  const filteredRoutes = searchPerformed
    ? busRoutes.filter(route => {
        const fromLower = fromCity.toLowerCase();
        const toLower = toCity.toLowerCase();
        const routeFrom = route.from.toLowerCase();
        const routeTo = route.to.toLowerCase();
        const routeVia = route.via.toLowerCase();
        
        // Check if fromCity matches the route (origin or via points)
        const matchFrom = !fromCity || 
          routeFrom.includes(fromLower) ||
          routeVia.includes(fromLower);
        
        // Check if toCity matches the route (destination or via points)
        const matchTo = !toCity || 
          routeTo.includes(toLower) ||
          routeVia.includes(toLower);
        
        // Smart mid-stop logic: If user searches FROM a via city TO destination
        // Example: Bus is Delhi→Chandigarh (via Ambala), user searches Ambala→Chandigarh
        const isValidMidRoute = !fromCity || !toCity || (
          // Case 1: From is via, To is destination
          (routeVia.includes(fromLower) && routeTo.includes(toLower)) ||
          // Case 2: From is origin, To is via
          (routeFrom.includes(fromLower) && routeVia.includes(toLower)) ||
          // Case 3: Both in via (bus passes through both stops)
          (routeVia.includes(fromLower) && routeVia.includes(toLower)) ||
          // Case 4: Normal route (from origin to destination)
          (routeFrom.includes(fromLower) && routeTo.includes(toLower))
        );
        
        return matchFrom && matchTo && isValidMidRoute;
      })
    : [];

  const swapCities = () => {
    const temp = fromCity;
    setFromCity(toCity);
    setToCity(temp);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span className="text-yellow-300 font-semibold text-xs uppercase tracking-wider">Smart Search</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            Find Your Bus
            <span className="block text-2xl md:text-3xl mt-2 text-orange-200 font-bold">Search Routes Instantly</span>
          </h1>
          <p className="text-base md:text-lg text-orange-100 leading-relaxed max-w-2xl">
            Find the perfect bus for your journey across Haryana
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Search Form */}
        <div className="bg-white rounded-xl shadow-2xl p-5 mb-6 border border-gray-100 -mt-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* From City */}
            <div>
              <label className="block text-xs font-black text-gray-700 mb-2 uppercase tracking-wide">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-green-600"></div>
                  Origin City
                </div>
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-600" />
                <input
                  type="text"
                  list="from-cities"
                  value={fromCity}
                  onChange={(e) => setFromCity(e.target.value)}
                  placeholder="Enter source city"
                  className="w-full pl-10 pr-3 py-3 border-2 border-gray-200 rounded-lg focus:ring-4 focus:ring-orange-200 focus:border-orange-500 outline-none transition-all font-semibold text-gray-900 placeholder:text-gray-400 placeholder:font-normal hover:border-gray-300 text-sm"
                />
                <datalist id="from-cities">
                  {cities.map((city) => (
                    <option key={city} value={city} />
                  ))}
                </datalist>
              </div>
            </div>

            {/* To City */}
            <div>
              <label className="block text-xs font-black text-gray-700 mb-2 uppercase tracking-wide">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-400 to-red-600"></div>
                  Destination City
                </div>
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-red-600" />
                <input
                  type="text"
                  list="to-cities"
                  value={toCity}
                  onChange={(e) => setToCity(e.target.value)}
                  placeholder="Enter destination city"
                  className="w-full pl-10 pr-3 py-3 border-2 border-gray-200 rounded-lg focus:ring-4 focus:ring-orange-200 focus:border-orange-500 outline-none transition-all font-semibold text-gray-900 placeholder:text-gray-400 placeholder:font-normal hover:border-gray-300 text-sm"
                />
                <datalist id="to-cities">
                  {cities.map((city) => (
                    <option key={city} value={city} />
                  ))}
                </datalist>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleSearch}
              className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 font-black shadow-lg hover:shadow-xl flex items-center justify-center gap-2 hover:scale-105"
            >
              <SearchIcon className="w-5 h-5" />
              Search Buses
            </button>
            <button
              onClick={swapCities}
              className="sm:w-auto bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-5 py-3 rounded-lg hover:from-gray-200 hover:to-gray-300 transition-all duration-300 font-bold shadow-md hover:shadow-lg flex items-center justify-center gap-2 hover:scale-105"
              title="Swap cities"
            >
              <Repeat2 className="w-4 h-4" />
              <span className="hidden sm:inline">Swap</span>
            </button>
          </div>
        </div>

        {/* Popular Routes */}
        {!searchPerformed && (
          <div>
            <div className="mb-5">
              <h2 className="text-2xl font-black text-gray-900 mb-2 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-orange-600" />
                Popular Routes
              </h2>
              <p className="text-sm text-gray-600 font-medium">Quick access to frequently searched routes</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { from: 'ISBT Delhi', to: 'Chandigarh' },
                { from: 'ISBT Delhi', to: 'Ludhiana' },
                { from: 'ISBT Delhi', to: 'Amritsar' },
                { from: 'ISBT Delhi', to: 'Katra' },
                { from: 'SKK Delhi', to: 'Jaipur' },
                { from: 'Chandigarh ISBT 17', to: 'Delhi' },
              ].map((route, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setFromCity(route.from);
                    setToCity(route.to);
                    setSearchPerformed(true);
                  }}
                  className="bg-white border-2 border-gray-200 rounded-xl p-4 hover:shadow-lg hover:border-orange-300 transition-all duration-300 text-left group hover:scale-105"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="font-black text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">{route.from}</div>
                      <div className="flex items-center gap-2 text-gray-500 text-xs font-semibold my-1.5">
                        <div className="h-px bg-gradient-to-r from-gray-300 to-transparent flex-1"></div>
                        <span className="text-xs">to</span>
                        <div className="h-px bg-gradient-to-l from-gray-300 to-transparent flex-1"></div>
                      </div>
                      <div className="font-black text-gray-900 group-hover:text-orange-600 transition-colors">{route.to}</div>
                    </div>
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2.5 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results */}
        {searchPerformed && (
          <div>
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-1">
                  Search Results
                </h2>
                <p className="text-sm text-gray-600 font-medium">
                  Found <span className="font-black text-orange-600">{filteredRoutes.length}</span> {filteredRoutes.length === 1 ? 'route' : 'routes'}
                  {fromCity && ` from ${fromCity}`}
                  {toCity && ` to ${toCity}`}
                </p>
              </div>
              <button
                onClick={() => {
                  setFromCity('');
                  setToCity('');
                  setSearchPerformed(false);
                }}
                className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-all duration-300 font-bold shadow-md hover:shadow-lg text-sm"
              >
                New Search
              </button>
            </div>

            {filteredRoutes.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {filteredRoutes.map(route => (
                  <RouteCard key={route.id} route={route} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-xl shadow-xl border border-gray-100">
                <div className="bg-gradient-to-r from-orange-100 to-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SearchIcon className="w-10 h-10 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No routes found</h3>
                <p className="text-gray-500 mb-6">
                  Try searching with different cities or check the popular routes above
                </p>
                <button
                  onClick={() => {
                    setFromCity('');
                    setToCity('');
                    setSearchPerformed(false);
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 font-bold shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Try Again
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
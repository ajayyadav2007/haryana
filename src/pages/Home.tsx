import { useState, useMemo, useEffect } from 'react';
import { busRoutes, depots, operators, busTypes, cities } from '../data/busRoutes';
import { RouteCard } from '../components/RouteCard';
import { Search as SearchIcon, MapPin, Repeat2, Sparkles, ArrowRight, Building2, TrendingUp } from 'lucide-react';
import { BusRoute } from '../types/bus';
import { WelcomeGuide } from '../components/WelcomeGuide';
import { RecentSearches, saveSearch } from '../components/RecentSearches';

interface HomeProps {
  showHelp?: boolean;
  onHelpClose?: () => void;
}

export default function Home({ showHelp, onHelpClose }: HomeProps) {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [filterType, setFilterType] = useState<string>('all');
  const [filterDepot, setFilterDepot] = useState<string>('all');
  const [filterOperator, setFilterOperator] = useState<string>('all');
  const [showWelcome, setShowWelcome] = useState(false);

  // Show welcome guide if triggered from navbar
  useEffect(() => {
    if (showHelp) {
      setShowWelcome(true);
      if (onHelpClose) {
        onHelpClose();
      }
    }
  }, [showHelp, onHelpClose]);

  // Consolidated government operators (combining regional depots)
  const govtOperators = [
    { code: 'HR', name: 'Haryana Roadways (HR)', matches: (op: string) => op.toUpperCase().startsWith('HR') },
    { code: 'PRTC', name: 'Punjab Roadways (PRTC)', matches: (op: string) => {
      const opUpper = op.toUpperCase();
      return opUpper === 'PRTC' || (opUpper.startsWith('PR') && opUpper.length <= 5);
    }},
    { code: 'HRTC', name: 'Himachal Roadways (HRTC)', matches: (op: string) => op.toUpperCase() === 'HRTC' },
    { code: 'DTC', name: 'Delhi Transport (DTC)', matches: (op: string) => op.toUpperCase() === 'DTC' },
    { code: 'UP', name: 'UP/Uttarakhand RTC', matches: (op: string) => {
      const opUpper = op.toUpperCase();
      return opUpper === 'UP' || opUpper === 'UPSRTC' || opUpper === 'UTTRANCHAL';
    }},
    { code: 'J&K', name: 'J&K Transport', matches: (op: string) => op.toUpperCase() === 'J&K' },
    { code: 'CTU', name: 'Chandigarh Transport (CTU)', matches: (op: string) => op.toUpperCase() === 'CTU' },
    { code: 'RSRTC', name: 'Rajasthan Roadways (RSRTC)', matches: (op: string) => {
      const opUpper = op.toUpperCase();
      return opUpper === 'RSRTC' || opUpper === 'RSTC';
    }},
    { code: 'PVT', name: 'Private Operators (PVT)', matches: (op: string) => op.toUpperCase() === 'PVT' },
  ].filter(gov => 
    // Only show operators that exist in current data
    operators.some(op => gov.matches(op))
  );

  const handleSearch = () => {
    if (fromCity || toCity) {
      saveSearch(fromCity, toCity);
    }
    setSearchPerformed(true);
  };

  const swapCities = () => {
    const temp = fromCity;
    setFromCity(toCity);
    setToCity(temp);
  };

  const handleRecentSearch = (from: string, to: string) => {
    setFromCity(from);
    setToCity(to);
    setSearchPerformed(true);
    // Scroll to results
    setTimeout(() => {
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }, 100);
  };

  // Smart search that handles via/intermediate stops
  const filteredRoutes = (searchPerformed && (fromCity || toCity))
    ? busRoutes.filter(route => {
        const fromLower = fromCity.toLowerCase();
        const toLower = toCity.toLowerCase();
        const routeFrom = route.from?.toLowerCase() || '';
        const routeTo = route.to?.toLowerCase() || '';
        const routeVia = route.via?.toLowerCase() || '';
        
        // Check if fromCity matches the route (origin, destination, or via points)
        const matchFrom = !fromCity || 
          routeFrom.includes(fromLower) ||
          routeVia.includes(fromLower) ||
          routeTo.includes(fromLower);  // Also show buses going TO this place
        
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
          (routeFrom.includes(fromLower) && routeTo.includes(toLower)) ||
          // Case 5: From is destination, show buses going there
          (routeTo.includes(fromLower) && !toCity)
        );
        
        const matchType = filterType === 'all' || route.busType === filterType;
        const matchDepot = filterDepot === 'all' || route.depot === filterDepot;
        const matchOperator = filterOperator === 'all' || 
          route.departureTimes.some(dt => {
            const selectedGovt = govtOperators.find(g => g.code === filterOperator);
            return selectedGovt ? selectedGovt.matches(dt.operator) : dt.operator === filterOperator;
          });
        
        return matchFrom && matchTo && isValidMidRoute && matchType && matchDepot && matchOperator;
      })
    : busRoutes.filter(route => {
        const matchType = filterType === 'all' || route.busType === filterType;
        const matchDepot = filterDepot === 'all' || route.depot === filterDepot;
        const matchOperator = filterOperator === 'all' || 
          route.departureTimes.some(dt => {
            const selectedGovt = govtOperators.find(g => g.code === filterOperator);
            return selectedGovt ? selectedGovt.matches(dt.operator) : dt.operator === filterOperator;
          });
        return matchType && matchDepot && matchOperator;
      });

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-10 pb-24 sm:pb-32">
          <div className="flex items-center gap-2 mb-2 sm:mb-3 animate-fadeIn">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300" />
            <span className="text-yellow-300 font-semibold text-xs uppercase tracking-wider">Official Timetable</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black mb-2 sm:mb-4 tracking-tight animate-fadeIn">
            Haryana Roadways
            <span className="block text-lg sm:text-2xl md:text-3xl mt-1 sm:mt-2 text-orange-200 font-bold">Complete Bus Timetable</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-orange-100 max-w-2xl leading-relaxed animate-fadeIn">
            Search from {busRoutes.length} routes across {depots.length} depots
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Search Box - Prominent and Elevated */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl p-3 sm:p-6 mb-6 sm:mb-8 border border-gray-100 -mt-16 sm:-mt-24 relative z-10">
          <div className="mb-3 sm:mb-4 text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 mb-1 flex items-center justify-center gap-2">
              <SearchIcon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
              Search Bus Routes
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">Enter your source and destination to find buses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
            {/* From City */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-green-600"></div>
                  From
                </div>
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                <input
                  type="text"
                  list="from-cities"
                  value={fromCity}
                  onChange={(e) => setFromCity(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  placeholder="Enter source city"
                  className="w-full pl-10 sm:pl-11 pr-3 sm:pr-4 py-3 sm:py-3.5 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-4 focus:ring-orange-200 focus:border-orange-500 outline-none transition-all font-semibold text-gray-900 placeholder:text-gray-400 placeholder:font-normal hover:border-gray-300 text-sm sm:text-base"
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
              <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-400 to-red-600"></div>
                  To
                </div>
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                <input
                  type="text"
                  list="to-cities"
                  value={toCity}
                  onChange={(e) => setToCity(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  placeholder="Enter destination city"
                  className="w-full pl-10 sm:pl-11 pr-3 sm:pr-4 py-3 sm:py-3.5 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-4 focus:ring-orange-200 focus:border-orange-500 outline-none transition-all font-semibold text-gray-900 placeholder:text-gray-400 placeholder:font-normal hover:border-gray-300 text-sm sm:text-base"
                />
                <datalist id="to-cities">
                  {cities.map((city) => (
                    <option key={city} value={city} />
                  ))}
                </datalist>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <button
              onClick={handleSearch}
              className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 font-black shadow-lg hover:shadow-xl flex items-center justify-center gap-2 sm:gap-3 hover:scale-105 text-base sm:text-lg"
            >
              <SearchIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              Search Buses
            </button>
            <button
              onClick={swapCities}
              className="sm:w-auto bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl hover:from-gray-200 hover:to-gray-300 transition-all duration-300 font-bold shadow-md hover:shadow-lg flex items-center justify-center gap-2 hover:scale-105"
              title="Swap cities"
            >
              <Repeat2 className="w-5 h-5" />
              <span className="sm:inline">Swap</span>
            </button>
          </div>

          {/* Advanced Filters Toggle */}
          <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="text-xs sm:text-sm font-bold text-orange-600 hover:text-orange-700 transition-colors flex items-center gap-2 mx-auto"
            >
              {showFilters ? '- Hide Advanced Filters' : '+ Show Advanced Filters'}
            </button>
          </div>
        </div>

        {/* Advanced Filters - Collapsible */}
        {showFilters && (
          <div className="bg-white rounded-xl shadow-lg p-5 mb-8 border border-gray-100 animate-fadeIn">
            {/* Depot Filter */}
            <div className="mb-4">
              <h3 className="text-xs font-bold text-gray-700 mb-2 flex items-center gap-1.5 uppercase tracking-wide">
                <Building2 className="w-3.5 h-3.5 text-orange-600" />
                Select Depot
              </h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilterDepot('all')}
                  className={`px-3 py-2 rounded-lg font-bold transition-all duration-300 text-xs shadow-md hover:shadow-lg ${
                    filterDepot === 'all'
                      ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white scale-105 shadow-orange-200'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All Depots
                </button>
                {depots.map(depot => (
                  <button
                    key={depot}
                    onClick={() => setFilterDepot(depot)}
                    className={`px-3 py-2 rounded-lg font-bold transition-all duration-300 text-xs shadow-md hover:shadow-lg ${
                      filterDepot === depot
                        ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white scale-105 shadow-orange-200'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {depot}
                  </button>
                ))}
              </div>
            </div>

            {/* Bus Type Filter */}
            <div className="mb-4">
              <h3 className="text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Bus Type</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilterType('all')}
                  className={`px-3 py-2 rounded-lg font-bold transition-all duration-300 text-xs shadow-md hover:shadow-lg ${
                    filterType === 'all'
                      ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All Types
                </button>
                {busTypes.map(type => (
                  <button
                    key={type}
                    onClick={() => setFilterType(type)}
                    className={`px-3 py-2 rounded-lg font-bold transition-all duration-300 text-xs shadow-md hover:shadow-lg ${
                      filterType === type
                        ? 'bg-gradient-to-r from-slate-600 to-slate-700 text-white scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Operator Filter */}
            <div>
              <h3 className="text-xs font-bold text-gray-700 mb-2 uppercase tracking-wide">Operator</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilterOperator('all')}
                  className={`px-3 py-2 rounded-lg font-bold transition-all duration-300 text-xs shadow-md hover:shadow-lg ${
                    filterOperator === 'all'
                      ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All Operators
                </button>
                {govtOperators.map(operator => (
                  <button
                    key={operator.code}
                    onClick={() => setFilterOperator(operator.code)}
                    className={`px-3 py-2 rounded-lg font-bold transition-all duration-300 text-xs shadow-md hover:shadow-lg ${
                      filterOperator === operator.code
                        ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white scale-105'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {operator.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Recent Searches - Show when no search performed */}
        {(!searchPerformed || (!fromCity && !toCity)) && (
          <RecentSearches onSearch={handleRecentSearch} />
        )}

        {/* Popular Routes - Show when no search performed */}
        {(!searchPerformed || (!fromCity && !toCity)) && (
          <div className="mb-8">
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
              ].map((route) => (
                <button
                  key={`${route.from}-${route.to}`}
                  onClick={() => {
                    setFromCity(route.from);
                    setToCity(route.to);
                    setSearchPerformed(true);
                  }}
                  className="bg-white border-2 border-gray-200 rounded-xl p-5 hover:shadow-xl hover:border-orange-300 transition-all duration-300 text-left group hover:scale-105"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="font-black text-gray-900 mb-1 group-hover:text-orange-600 transition-colors text-base">{route.from}</div>
                      <div className="flex items-center gap-2 text-gray-500 text-xs font-semibold my-2">
                        <div className="h-px bg-gradient-to-r from-gray-300 to-transparent flex-1"></div>
                        <ArrowRight className="w-4 h-4" />
                        <div className="h-px bg-gradient-to-l from-gray-300 to-transparent flex-1"></div>
                      </div>
                      <div className="font-black text-gray-900 group-hover:text-orange-600 transition-colors text-base">{route.to}</div>
                    </div>
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300 ml-3">
                      <SearchIcon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Stats Section - Show when no search performed */}
        {!searchPerformed && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-black mb-2 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">{busRoutes.length}</div>
              <div className="text-gray-600 text-sm font-bold uppercase tracking-wide">Total Routes</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-black mb-2 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">{depots.length}</div>
              <div className="text-gray-600 text-sm font-bold uppercase tracking-wide">Active Depots</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-black mb-2 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                {busRoutes.reduce((sum, route) => sum + route.departureTimes.length, 0)}
              </div>
              <div className="text-gray-600 text-sm font-bold uppercase tracking-wide">Daily Buses</div>
            </div>
          </div>
        )}

        {/* Results Section */}
        {((searchPerformed && (fromCity || toCity)) || filterDepot !== 'all' || filterType !== 'all' || filterOperator !== 'all') && (
          <div className="mb-8">
            {/* Results Header */}
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-1 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                  {searchPerformed ? 'Search Results' : 
                   filterDepot !== 'all' ? `${filterDepot} Routes` : 'Filtered Routes'}
                </h2>
                <p className="text-sm text-gray-600 font-medium">
                  Found <span className="font-bold text-orange-600">{filteredRoutes.length}</span> {filteredRoutes.length === 1 ? 'route' : 'routes'}
                  {fromCity && ` from ${fromCity}`}
                  {toCity && ` to ${toCity}`}
                </p>
              </div>
              {searchPerformed && (
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
              )}
            </div>

            {/* Routes Grid */}
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
                <p className="text-gray-500 mb-6">Try adjusting your search or filters to see more results</p>
                <button
                  onClick={() => {
                    setFromCity('');
                    setToCity('');
                    setSearchPerformed(false);
                    setFilterType('all');
                    setFilterDepot('all');
                    setFilterOperator('all');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 font-bold shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Clear All & Start Over
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Welcome Guide */}
      {showWelcome && (
        <WelcomeGuide onClose={() => setShowWelcome(false)} />
      )}
    </div>
  );
}
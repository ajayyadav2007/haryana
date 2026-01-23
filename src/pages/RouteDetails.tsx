import { useEffect } from 'react';
import { busRoutes } from '../data/busRoutes';
import { MapPin, Clock, Bus, ArrowLeft, Building2, Calendar, Sparkles, Users } from 'lucide-react';

interface RouteDetailsProps {
  routeId: string;
}

export default function RouteDetails({ routeId }: RouteDetailsProps) {
  const route = busRoutes.find(r => r.id === routeId);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [routeId]);

  // Handle back navigation
  const handleBack = () => {
    // Check if there's history to go back to
    if (window.history.length > 1) {
      window.history.back();
    } else {
      // Fallback to home page if no history
      window.location.hash = '#/';
    }
  };

  if (!route) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-100 to-red-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
            <Bus className="w-12 h-12 text-orange-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Route not found</h2>
          <p className="text-gray-600 mb-8">The bus route you're looking for doesn't exist.</p>
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 font-bold shadow-xl hover:shadow-2xl hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
        </div>
      </div>
    );
  }

  const busTypeColors = {
    Ordinary: 'from-slate-600 to-slate-700',
    Express: 'from-blue-600 to-blue-700',
    Deluxe: 'from-purple-600 to-purple-700',
    AC: 'from-emerald-600 to-emerald-700',
    Volvo: 'from-indigo-600 to-indigo-700',
    HVAC: 'from-teal-600 to-cyan-700',
  };

  // Group departure times by bus type AND operator
  const groupedByBusType = route.departureTimes.reduce((acc, departure) => {
    const busType = departure.busType || route.busType || 'Ordinary'; // Add fallback
    if (!acc[busType]) {
      acc[busType] = {};
    }
    const operator = departure.operator || 'HR'; // Add fallback
    if (!acc[busType][operator]) {
      acc[busType][operator] = [];
    }
    acc[busType][operator].push(departure);
    return acc;
  }, {} as Record<string, Record<string, typeof route.departureTimes>>);

  const availableBusTypes = Object.keys(groupedByBusType).sort();

  // Calculate service days from departure times
  const allServiceDays = route.departureTimes.flatMap(dt => dt.serviceDays || []);
  const uniqueServiceDays = Array.from(new Set(allServiceDays));
  const serviceDaysDisplay = uniqueServiceDays.length === 7 ? 'Daily (All Days)' : uniqueServiceDays.join(', ');

  // Operator display configurations
  const getOperatorConfig = (op: string) => {
    const opUpper = op.toUpperCase().trim();
    
    // Haryana Roadways and depot variants
    if (opUpper === 'HR' || opUpper.startsWith('HR,') || opUpper.startsWith('HR.') ||
        opUpper === 'HRK' || opUpper === 'HRY' || opUpper === 'HRC' || 
        opUpper === 'HRA' || opUpper === 'HRD' || opUpper === 'HRB') {
      return { 
        name: `Haryana Roadways (HR)`, 
        gradient: 'from-orange-500 to-red-500',
        bgGradient: 'from-orange-50 to-red-50',
        border: 'border-orange-300',
        hover: 'hover:text-orange-600'
      };
    }
    
    // Punjab Roadways and depot variants
    if (opUpper === 'PRTC' || opUpper.startsWith('PRTC ') || (opUpper.startsWith('PR') && opUpper.length <= 5)) {
      return { 
        name: `Punjab Roadways (PRTC)`, 
        gradient: 'from-blue-500 to-cyan-500',
        bgGradient: 'from-blue-50 to-cyan-50',
        border: 'border-blue-300',
        hover: 'hover:text-blue-600'
      };
    }
    
    // Himachal Transport
    if (opUpper === 'HRTC') {
      return { 
        name: `Himachal Roadways (HRTC)`, 
        gradient: 'from-green-500 to-emerald-500',
        bgGradient: 'from-green-50 to-emerald-50',
        border: 'border-green-300',
        hover: 'hover:text-green-600'
      };
    }
    
    // Delhi Transport
    if (opUpper === 'DTC' || opUpper.includes('DTC')) {
      return { 
        name: `Delhi Transport (DTC)`, 
        gradient: 'from-red-500 to-pink-500',
        bgGradient: 'from-red-50 to-pink-50',
        border: 'border-red-300',
        hover: 'hover:text-red-600'
      };
    }
    
    // J&K Transport
    if (opUpper === 'J&K' || opUpper === 'JKSRTC') {
      return { 
        name: `J&K Roadways (J&K)`, 
        gradient: 'from-green-500 to-lime-500',
        bgGradient: 'from-green-50 to-lime-50',
        border: 'border-green-300',
        hover: 'hover:text-green-600'
      };
    }
    
    // Chandigarh Transport
    if (opUpper === 'CTU') {
      return { 
        name: `Chandigarh Transport (CTU)`, 
        gradient: 'from-teal-500 to-cyan-500',
        bgGradient: 'from-teal-50 to-cyan-50',
        border: 'border-teal-300',
        hover: 'hover:text-teal-600'
      };
    }
    
    // Uttar Pradesh Transport
    if (opUpper === 'UP' || opUpper === 'UPSRTC' || opUpper.includes('UP ')) {
      return { 
        name: `UP Roadways (UP)`, 
        gradient: 'from-amber-500 to-yellow-500',
        bgGradient: 'from-amber-50 to-yellow-50',
        border: 'border-amber-300',
        hover: 'hover:text-amber-600'
      };
    }
    
    // Rajasthan Transport
    if (opUpper === 'RAJ' || opUpper === 'RAJ.' || opUpper === 'RSRTC' || opUpper === 'RAJASTHAN') {
      return { 
        name: `Rajasthan Roadways (RAJ)`, 
        gradient: 'from-pink-500 to-rose-500',
        bgGradient: 'from-pink-50 to-rose-50',
        border: 'border-pink-300',
        hover: 'hover:text-pink-600'
      };
    }
    
    // Jagraon operators
    if (opUpper === 'JAGRAV' || opUpper === 'JAGRAON') {
      return { 
        name: `Jagraon Transport (JAGRAV)`, 
        gradient: 'from-cyan-500 to-sky-500',
        bgGradient: 'from-cyan-50 to-sky-50',
        border: 'border-cyan-300',
        hover: 'hover:text-cyan-600'
      };
    }
    
    // City-based depot codes (treat as HR)
    if (['GURUGRAM', 'DELHI', 'AMBALA', 'CHANDIGARH', 'KARNAL', 
         'KURUKSHETRA', 'PANCHKULA', 'FARIDABAD', 'SONIPAT'].includes(opUpper)) {
      return { 
        name: `Haryana Roadways (HR)`, 
        gradient: 'from-orange-500 to-red-500',
        bgGradient: 'from-orange-50 to-red-50',
        border: 'border-orange-300',
        hover: 'hover:text-orange-600'
      };
    }
    
    // Private operators
    if (['SHIVAM', 'RISHI', 'VIRK', 'EKTA', 'BHUPINDERA', 'DOON'].some(name => opUpper.includes(name))) {
      return { 
        name: 'Private Operators (PVT)', 
        gradient: 'from-purple-500 to-pink-500',
        bgGradient: 'from-purple-50 to-pink-50',
        border: 'border-purple-300',
        hover: 'hover:text-purple-600'
      };
    }
    
    // Default PVT
    if (opUpper === 'PVT') {
      return { 
        name: 'Private Operators (PVT)', 
        gradient: 'from-purple-500 to-pink-500',
        bgGradient: 'from-purple-50 to-pink-50',
        border: 'border-purple-300',
        hover: 'hover:text-purple-600'
      };
    }
    
    // Handle any other operators as private
    return { 
      name: `Private Operators (${op})`, 
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      border: 'border-purple-300',
      hover: 'hover:text-purple-600'
    };
  };

  const busTypeConfig = (type: string) => ({
    Ordinary: { bg: 'bg-slate-100', text: 'text-slate-700', border: 'border-slate-300' },
    Express: { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-300' },
    Deluxe: { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-300' },
    AC: { bg: 'bg-emerald-100', text: 'text-emerald-700', border: 'border-emerald-300' },
    Volvo: { bg: 'bg-indigo-100', text: 'text-indigo-700', border: 'border-indigo-300' },
    HVAC: { bg: 'bg-teal-100', text: 'text-teal-700', border: 'border-teal-300' },
  }[type] || { bg: 'bg-gray-100', text: 'text-gray-700', border: 'border-gray-300' });

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50">
      {/* Header */}
      <div className={`relative bg-gradient-to-r ${busTypeColors[route.busType]} text-white overflow-hidden`}>
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-1.5 sm:gap-2 text-white/90 hover:text-white mb-3 sm:mb-6 transition-all duration-300 bg-white/10 backdrop-blur-sm px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg hover:bg-white/20 font-medium text-xs sm:text-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Back
          </button>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 sm:gap-6">
            <div className="flex items-start md:items-center gap-2 sm:gap-3 md:gap-4">
              <div className="bg-white/95 backdrop-blur-sm p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl shadow-2xl flex-shrink-0">
                <Bus className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-orange-600" />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black tracking-tight drop-shadow-lg">{route.routeNumber}</h1>
                  <div className="bg-white/20 backdrop-blur-sm px-2 sm:px-2.5 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs font-bold">
                    {route.busType}
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 md:gap-3 text-sm sm:text-base md:text-lg mb-1">
                  <span className="font-bold">{route.from}</span>
                  <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 rotate-180 flex-shrink-0" />
                  <span className="font-bold">{route.to}</span>
                </div>
                <div className="text-white/90 text-xs flex items-center gap-1 sm:gap-1.5 font-medium">
                  <Building2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                  Depot: {route.depot}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Main Content - Shows first on mobile */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {/* Route Info Card */}
            <div className="bg-white rounded-lg sm:rounded-xl shadow-xl p-3 sm:p-5 border border-gray-100">
              <h2 className="text-base sm:text-xl font-black text-gray-900 mb-3 sm:mb-4 flex items-center gap-1.5 sm:gap-2">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-1.5 sm:p-2 rounded-lg">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                Route Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:shadow-lg transition-all duration-300">
                  <div className="text-[10px] sm:text-xs text-green-600 mb-1 sm:mb-1.5 font-bold uppercase tracking-wide flex items-center gap-1">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500"></div>
                    Origin
                  </div>
                  <div className="font-black text-gray-900 text-base sm:text-xl">{route.from}</div>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:shadow-lg transition-all duration-300">
                  <div className="text-[10px] sm:text-xs text-red-600 mb-1 sm:mb-1.5 font-bold uppercase tracking-wide flex items-center gap-1">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500"></div>
                    Destination
                  </div>
                  <div className="font-black text-gray-900 text-base sm:text-xl">{route.to}</div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 rounded-lg sm:rounded-xl p-3 sm:p-4 md:col-span-2 hover:shadow-lg transition-all duration-300">
                  <div className="text-[10px] sm:text-xs text-orange-600 mb-1 sm:mb-1.5 font-bold uppercase tracking-wide">Via Route</div>
                  <div className="font-black text-gray-900 text-sm sm:text-lg">{route.via}</div>
                </div>
              </div>
            </div>

            {/* Departure Times by Bus Type and Operator */}
            {Object.keys(groupedByBusType).map(busType => {
              const operators = groupedByBusType[busType];
              const typeConfig = busTypeConfig(busType);
              return (
                <div key={busType} className="bg-white rounded-lg sm:rounded-xl shadow-xl p-3 sm:p-5 border border-gray-100">
                  <div className="mb-3 sm:mb-4">
                    <h2 className="text-base sm:text-xl font-black text-gray-900 flex items-center gap-1.5 sm:gap-2">
                      <div className={`${typeConfig.bg} ${typeConfig.border} border-2 p-1.5 sm:p-2 rounded-lg`}>
                        <Bus className={`w-4 h-4 sm:w-5 sm:h-5 ${typeConfig.text}`} />
                      </div>
                      {busType} Service
                    </h2>
                  </div>
                  
                  {Object.keys(operators).map(operator => {
                    const config = getOperatorConfig(operator);
                    const times = operators[operator];
                    return (
                      <div key={operator} className="mb-3 sm:mb-4 last:mb-0">
                        <div className="flex items-center justify-between mb-2 sm:mb-3">
                          <div>
                            <h3 className="text-sm sm:text-lg font-black text-gray-900 flex items-center gap-1.5 sm:gap-2">
                              <div className={`bg-gradient-to-r ${config.gradient} p-1.5 sm:p-2 rounded-lg`}>
                                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                              </div>
                              {config.name}
                            </h3>
                            <p className="text-[10px] sm:text-xs text-gray-500 ml-8 sm:ml-10 mt-0.5">Departure Times</p>
                          </div>
                          <div className={`bg-gradient-to-r ${config.gradient} text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold shadow-lg`}>
                            {times.length} {times.length === 1 ? 'bus' : 'buses'}
                          </div>
                        </div>
                        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-1.5 sm:gap-2">
                          {times.map((departure, index) => (
                            <div
                              key={index}
                              className={`bg-gradient-to-br ${config.bgGradient} border ${config.border} rounded-lg p-2 sm:p-2.5 text-center hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer group`}
                            >
                              <div className={`text-xs sm:text-sm font-black text-gray-900 ${config.hover} transition-colors`}>{departure.time}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>

          {/* Sidebar - Shows after departure times on mobile, on right side on desktop */}
          <div className="lg:col-span-1 space-y-3 sm:space-y-5">
            {/* Summary */}
            <div className="bg-white rounded-lg sm:rounded-xl shadow-xl p-3 sm:p-5 border border-gray-100">
              <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-1.5 sm:p-2 rounded-lg">
                  <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                </div>
                <h3 className="font-black text-gray-900 text-sm sm:text-base">Service Summary</h3>
              </div>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center justify-between pb-2 sm:pb-3 border-b border-dashed border-gray-200">
                  <span className="text-gray-600 font-semibold text-xs sm:text-sm">Total Buses</span>
                  <span className="font-black text-lg sm:text-xl text-orange-600">{route.departureTimes.length}</span>
                </div>
                <div className="flex items-center justify-between pb-2 sm:pb-3 border-b border-dashed border-gray-200">
                  <span className="text-gray-600 font-semibold text-xs sm:text-sm">First Departure</span>
                  <span className="font-black text-gray-900 text-sm sm:text-base">{route.departureTimes[0].time}</span>
                </div>
                <div className="flex items-center justify-between pb-2 sm:pb-3 border-b border-dashed border-gray-200">
                  <span className="text-gray-600 font-semibold text-xs sm:text-sm">Last Departure</span>
                  <span className="font-black text-gray-900 text-sm sm:text-base">
                    {route.departureTimes[route.departureTimes.length - 1].time}
                  </span>
                </div>
                <div className="flex items-center justify-between pb-2 sm:pb-3 border-b border-dashed border-gray-200">
                  <span className="text-gray-600 font-semibold text-xs sm:text-sm">Service Days</span>
                  <span className="font-black text-gray-900 text-xs sm:text-sm">{serviceDaysDisplay}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 font-semibold text-xs sm:text-sm">Bus Type</span>
                  <span className="font-black text-gray-900 text-xs sm:text-sm">{route.busType}</span>
                </div>
              </div>
            </div>

            {/* Operator Breakdown */}
            <div className="bg-white rounded-lg sm:rounded-xl shadow-xl p-3 sm:p-5 border border-gray-100">
              <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-1.5 sm:p-2 rounded-lg">
                  <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                </div>
                <h3 className="font-black text-gray-900 text-sm sm:text-base">Operators</h3>
              </div>
              <div className="space-y-2 sm:space-y-2.5">
                {Object.keys(groupedByBusType).map(busType => {
                  const operators = groupedByBusType[busType];
                  const typeConfig = busTypeConfig(busType);
                  return Object.keys(operators).map(operator => {
                    const config = getOperatorConfig(operator);
                    const times = operators[operator];
                    return (
                      <div key={`${busType}-${operator}`} className={`p-2 sm:p-3 rounded-lg border bg-gradient-to-r ${config.gradient} text-white shadow-md`}>
                        <div className="font-bold text-xs sm:text-sm">{config.name}</div>
                        <div className="text-xs opacity-90">{busType} • {times.length} buses</div>
                      </div>
                    );
                  });
                })}
              </div>
            </div>

            {/* Important Notice */}
            <div className="bg-gradient-to-br from-orange-100 via-orange-50 to-red-100 rounded-lg sm:rounded-xl shadow-xl p-3 sm:p-5 border-2 border-orange-300">
              <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-700" />
                <h3 className="font-black text-orange-900 text-sm sm:text-base">Important Notice</h3>
              </div>
              <ul className="space-y-1.5 sm:space-y-2 text-[10px] sm:text-xs text-orange-800 font-medium">
                <li className="flex items-start gap-1.5 sm:gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>Timings may vary during festivals and holidays</span>
                </li>
                <li className="flex items-start gap-1.5 sm:gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>Please reach the bus stand 10 minutes early</span>
                </li>
                <li className="flex items-start gap-1.5 sm:gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>Carry a valid ID proof for verification</span>
                </li>
                <li className="flex items-start gap-1.5 sm:gap-2">
                  <span className="text-orange-600 font-bold">•</span>
                  <span>Senior citizens and students get special discounts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
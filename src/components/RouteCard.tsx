import { BusRoute } from '../types/bus';
import { MapPin, Clock, Bus, ArrowRight, Building2, Zap } from 'lucide-react';

interface RouteCardProps {
  route: BusRoute;
}

const busTypeColors = {
  Ordinary: 'from-slate-500 to-slate-600',
  Express: 'from-blue-500 to-blue-600',
  Deluxe: 'from-purple-500 to-purple-600',
  AC: 'from-emerald-500 to-emerald-600',
  Volvo: 'from-indigo-500 to-indigo-600',
};

const busTypeBadges = {
  Ordinary: 'bg-slate-100 text-slate-700 border-slate-300',
  Express: 'bg-blue-100 text-blue-700 border-blue-300',
  Deluxe: 'bg-purple-100 text-purple-700 border-purple-300',
  AC: 'bg-emerald-100 text-emerald-700 border-emerald-300',
  Volvo: 'bg-indigo-100 text-indigo-700 border-indigo-300',
  'Super Deluxe': 'bg-pink-100 text-pink-700 border-pink-300',
  'Semi Deluxe': 'bg-cyan-100 text-cyan-700 border-cyan-300',
  'AC Sleeper': 'bg-teal-100 text-teal-700 border-teal-300',
  'Non-AC Sleeper': 'bg-gray-100 text-gray-700 border-gray-300',
};

// Helper function to get badge classes with fallback
const getBadgeClass = (type: string): string => {
  return busTypeBadges[type as keyof typeof busTypeBadges] || 'bg-gray-100 text-gray-700 border-gray-300';
};

const operatorBadges = {
  HR: { bg: 'bg-gradient-to-r from-orange-500 to-red-500', text: 'text-white', label: 'HR' },
  PVT: { bg: 'bg-gradient-to-r from-purple-500 to-pink-500', text: 'text-white', label: 'Private' },
  PRTC: { bg: 'bg-gradient-to-r from-blue-500 to-cyan-500', text: 'text-white', label: 'PRTC' },
};

export function RouteCard({ route }: RouteCardProps) {
  const hrTimes = route.departureTimes.filter(t => t.operator === 'HR' || t.operator.toUpperCase().startsWith('HR'));
  const pvtTimes = route.departureTimes.filter(t => t.operator === 'PVT');
  const prtcTimes = route.departureTimes.filter(t => {
    const op = t.operator.toUpperCase();
    return op === 'PRTC' || (op.startsWith('PR') && op.length <= 5);
  });

  // Group departures by bus type
  const busTypeGroups = route.departureTimes.reduce((acc, departure) => {
    const type = departure.busType || route.busType || 'Ordinary'; // Add fallback to 'Ordinary'
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(departure);
    return acc;
  }, {} as Record<string, typeof route.departureTimes>);

  const availableBusTypes = Object.keys(busTypeGroups).sort();

  return (
    <a
      href={`#/route/${route.id}`}
      className="block bg-white rounded-lg sm:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-200 overflow-hidden group hover:-translate-y-1"
    >
      {/* Header with gradient */}
      <div className={`bg-gradient-to-r from-orange-500 to-red-500 p-3 sm:p-4 relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500"></div>
        <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full -mr-12 sm:-mr-16 -mt-12 sm:-mt-16 group-hover:scale-150 transition-transform duration-700"></div>
        
        <div className="relative flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
            <div className="bg-white/95 backdrop-blur-sm p-1.5 sm:p-2 rounded-lg shadow-lg group-hover:rotate-12 transition-transform duration-500 flex-shrink-0">
              <Bus className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-white font-bold text-sm sm:text-lg tracking-wide drop-shadow-lg truncate">{route.routeNumber}</div>
              <div className="text-white/90 text-xs flex items-center gap-1 font-medium">
                <Building2 className="w-3 h-3 flex-shrink-0" />
                <span className="truncate">{route.depot}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-1 sm:gap-1.5 justify-end max-w-[40%]">
            {availableBusTypes.map(type => (
              <div key={type} className={`px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs font-bold border backdrop-blur-sm ${getBadgeClass(type)} shadow-lg whitespace-nowrap`}>
                {type}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-3 sm:p-4">
        {/* Route Direction */}
        <div className="mb-2 sm:mb-3">
          <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-gradient-to-r from-green-400 to-green-600 shadow-md flex-shrink-0"></div>
            <span className="font-bold text-gray-900 text-sm sm:text-base truncate">{route.from}</span>
          </div>
          
          <div className="flex items-center gap-2 pl-1 my-1.5 sm:my-2">
            <div className="w-px h-4 sm:h-6 bg-gradient-to-b from-gray-300 to-gray-200 flex-shrink-0"></div>
            <div className="flex-1 flex items-center gap-1.5 sm:gap-2 min-w-0">
              <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-400 flex-shrink-0" />
              <span className="text-[11px] sm:text-xs text-gray-600 font-semibold truncate">via {route.via}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-gradient-to-r from-red-400 to-red-600 shadow-md flex-shrink-0"></div>
            <span className="font-bold text-gray-900 text-sm sm:text-base truncate">{route.to}</span>
          </div>
        </div>

        <div className="border-t border-dashed border-gray-200 pt-2 sm:pt-3 mb-2 sm:mb-3">
          {/* Bus Type breakdown */}
          <div className="mb-2 sm:mb-3">
            <div className="text-[10px] sm:text-xs font-bold text-gray-600 mb-1.5 sm:mb-2 uppercase tracking-wide">Available Services</div>
            <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
              {availableBusTypes.map(type => {
                const typeDepartures = busTypeGroups[type];
                
                // Comprehensive operator normalization
                const normalizeOperator = (op: string): string => {
                  const opUpper = op.toUpperCase().trim();
                  
                  // Haryana Roadways and depot variants
                  if (opUpper === 'HR' || opUpper.startsWith('HR,') || opUpper.startsWith('HR.') ||
                      opUpper === 'HRK' || opUpper === 'HRY' || opUpper === 'HRC' || 
                      opUpper === 'HRA' || opUpper === 'HRD' || opUpper === 'HRB' ||
                      opUpper === 'HR SPL') {
                    return 'HR';
                  }
                  
                  // Punjab Roadways and depot variants
                  if (opUpper === 'PRTC' || opUpper.startsWith('PRTC ') || opUpper.startsWith('PR') && opUpper.length <= 5) {
                    return 'PRTC';
                  }
                  
                  // Delhi Transport
                  if (opUpper === 'DTC' || opUpper.includes('DTC')) {
                    return 'DTC';
                  }
                  
                  // J&K Transport
                  if (opUpper === 'J&K' || opUpper === 'JKSRTC') {
                    return 'J&K';
                  }
                  
                  // Himachal Transport
                  if (opUpper === 'HRTC') {
                    return 'HRTC';
                  }
                  
                  // Chandigarh Transport
                  if (opUpper === 'CTU') {
                    return 'CTU';
                  }
                  
                  // Uttar Pradesh Transport
                  if (opUpper === 'UP' || opUpper === 'UPSRTC' || opUpper.includes('UP ')) {
                    return 'UP';
                  }
                  
                  // Rajasthan Transport
                  if (opUpper === 'RAJ' || opUpper === 'RAJ.' || opUpper === 'RSRTC' || opUpper === 'RAJASTHAN') {
                    return 'RAJ';
                  }
                  
                  // Jagraon operators
                  if (opUpper === 'JAGRAV' || opUpper === 'JAGRAON') {
                    return 'JAGRAV';
                  }
                  
                  // City-based depot codes (treat as HR)
                  if (['GURUGRAM', 'DELHI', 'AMBALA', 'CHANDIGARH', 'KARNAL', 
                       'KURUKSHETRA', 'PANCHKULA', 'FARIDABAD', 'SONIPAT'].includes(opUpper)) {
                    return 'HR';
                  }
                  
                  // Private operators
                  if (['SHIVAM', 'RISHI', 'VIRK', 'EKTA', 'BHUPINDERA', 'DOON', 'PVT.', 'PVT'].some(name => opUpper.includes(name))) {
                    return 'PVT';
                  }
                  
                  // Default to PVT for any unrecognized operators
                  if (opUpper === 'PVT') {
                    return 'PVT';
                  }
                  
                  // Treat unrecognized as private
                  return 'PVT';
                };
                
                // Count all operators
                const operatorCounts: Record<string, number> = {};
                typeDepartures.forEach(t => {
                  const normalized = normalizeOperator(t.operator);
                  operatorCounts[normalized] = (operatorCounts[normalized] || 0) + 1;
                });
                
                return (
                  <div key={type} className="bg-gray-50 border border-gray-200 rounded-lg p-1.5 sm:p-2">
                    <div className={`text-[10px] sm:text-xs font-bold mb-0.5 sm:mb-1 ${getBadgeClass(type).split(' ')[1]} truncate`}>{type}</div>
                    <div className="flex gap-1 sm:gap-1.5 flex-wrap">
                      {operatorCounts['HR'] && (
                        <span className="text-[10px] sm:text-xs bg-orange-100 text-orange-700 px-1.5 sm:px-2 py-0.5 rounded font-bold whitespace-nowrap">
                          HR: {operatorCounts['HR']}
                        </span>
                      )}
                      {operatorCounts['PVT'] && (
                        <span className="text-[10px] sm:text-xs bg-purple-100 text-purple-700 px-1.5 sm:px-2 py-0.5 rounded font-bold whitespace-nowrap">
                          PVT: {operatorCounts['PVT']}
                        </span>
                      )}
                      {operatorCounts['PRTC'] && (
                        <span className="text-[10px] sm:text-xs bg-blue-100 text-blue-700 px-1.5 sm:px-2 py-0.5 rounded font-bold whitespace-nowrap">
                          PRTC: {operatorCounts['PRTC']}
                        </span>
                      )}
                      {operatorCounts['DTC'] && (
                        <span className="text-[10px] sm:text-xs bg-red-100 text-red-700 px-1.5 sm:px-2 py-0.5 rounded font-bold whitespace-nowrap">
                          DTC: {operatorCounts['DTC']}
                        </span>
                      )}
                      {operatorCounts['J&K'] && (
                        <span className="text-[10px] sm:text-xs bg-green-100 text-green-700 px-1.5 sm:px-2 py-0.5 rounded font-bold whitespace-nowrap">
                          J&K: {operatorCounts['J&K']}
                        </span>
                      )}
                      {operatorCounts['CTU'] && (
                        <span className="text-[10px] sm:text-xs bg-teal-100 text-teal-700 px-1.5 sm:px-2 py-0.5 rounded font-bold whitespace-nowrap">
                          CTU: {operatorCounts['CTU']}
                        </span>
                      )}
                      {operatorCounts['HRTC'] && (
                        <span className="text-[10px] sm:text-xs bg-emerald-100 text-emerald-700 px-1.5 sm:px-2 py-0.5 rounded font-bold whitespace-nowrap">
                          HRTC: {operatorCounts['HRTC']}
                        </span>
                      )}
                      {operatorCounts['UP'] && (
                        <span className="text-[10px] sm:text-xs bg-amber-100 text-amber-700 px-1.5 sm:px-2 py-0.5 rounded font-bold whitespace-nowrap">
                          UP: {operatorCounts['UP']}
                        </span>
                      )}
                      {operatorCounts['RAJ'] && (
                        <span className="text-[10px] sm:text-xs bg-pink-100 text-pink-700 px-1.5 sm:px-2 py-0.5 rounded font-bold whitespace-nowrap">
                          RAJ: {operatorCounts['RAJ']}
                        </span>
                      )}
                      {operatorCounts['JAGRAV'] && (
                        <span className="text-[10px] sm:text-xs bg-cyan-100 text-cyan-700 px-1.5 sm:px-2 py-0.5 rounded font-bold whitespace-nowrap">
                          JAGRAV: {operatorCounts['JAGRAV']}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Timing Info */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 p-2 sm:p-3 bg-gradient-to-br from-gray-50 to-orange-50 rounded-lg border border-gray-200">
            <div className="text-center">
              <div className="text-[10px] sm:text-xs text-gray-500 mb-0.5 sm:mb-1 font-semibold">First Bus</div>
              <div className="flex items-center justify-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-bold text-gray-900">
                <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-green-600 flex-shrink-0" />
                {route.departureTimes[0].time}
              </div>
            </div>
            <div className="text-center border-l border-gray-300">
              <div className="text-[10px] sm:text-xs text-gray-500 mb-0.5 sm:mb-1 font-semibold">Last Bus</div>
              <div className="flex items-center justify-center gap-1 sm:gap-1.5 text-xs sm:text-sm font-bold text-gray-900">
                <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-red-600 flex-shrink-0" />
                {route.departureTimes[route.departureTimes.length - 1].time}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-2 sm:pt-3 border-t border-gray-200 flex items-center justify-between">
          <span className="text-[11px] sm:text-xs text-gray-600 font-medium">
            <span className="font-bold text-orange-600">{route.departureTimes.length}</span> departures daily
          </span>
          <span className="text-[11px] sm:text-xs text-orange-600 group-hover:text-orange-700 font-bold flex items-center gap-1 group-hover:gap-1.5 transition-all duration-300">
            View Timetable
            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </span>
        </div>
      </div>
    </a>
  );
}

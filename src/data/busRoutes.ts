import { BusRoute } from '../types/bus';
import { chandigarhRoutes } from './chandigarhRoutes';
import { ambalaRoutes } from './ambalaRoutes';
import { narnaulRoutes } from './narnaulRoutes';
import { delhiRoutes } from './delhiRoutes';
import { faridabadRoutes } from './faridabadRoutes';
import { fatehbadRoutes } from './fatehbadRoutes';
import { gurugramRoutes } from './gurugramRoutes';
import { jhajjarRoutes } from './jhajjarRoutes';
import { jindRoutes } from './jindRoutes';
import { kaithalRoutes } from './kaithalRoutes';
import { karnalRoutes } from './karnalRoutes';
import { kurukshetraRoutes } from './kurukshetraRoutes';
import { nuhRoutes } from './nuhRoutes';
import { palwalRoutes } from './palwalRoutes';
import { panchkulaRoutes } from './panchkulaRoutes';
import { kalkaRoutes } from './kalkaRoutes';
import { panipatRoutes } from './panipatRoutes';
import { rewariRoutes } from './rewariRoutes';
import { rohtakRoutes } from './rohtakRoutes';

// Function to normalize and merge duplicate routes
function normalizeRoutes(routes: any[]): BusRoute[] {
  const groupMap = new Map<string, any>();
  
  routes.forEach((route, index) => {
    // Generate routeNumber and id if not present
    if (!route.routeNumber) {
      const fromCode = route.from.substring(0, 3).toUpperCase();
      const toCode = route.to.substring(0, 3).toUpperCase();
      const busTypeCode = route.busType === 'Ordinary' ? 'ORD' : route.busType.substring(0, 3).toUpperCase();
      route.routeNumber = `${fromCode}-${toCode}-${busTypeCode}`;
    }
    
    if (!route.id) {
      route.id = `route-${index}-${Date.now()}`;
    }
    
    // Normalize departureTimes - ensure serviceDays exists
    if (route.departureTimes) {
      route.departureTimes = route.departureTimes.map((dt: any) => ({
        time: dt.time,
        operator: dt.operator,
        serviceDays: dt.serviceDays || ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        ...(dt.busType && { busType: dt.busType })
      }));
    }
    
    // Create a unique key for grouping
    const key = `${route.from}|${route.to}|${route.via}|${route.depot}`;
    
    if (groupMap.has(key)) {
      // Merge departure times
      const existingRoute = groupMap.get(key);
      const newDepartures = route.departureTimes.map((dt: any) => ({
        ...dt,
        busType: dt.busType || route.busType
      }));
      existingRoute.departureTimes = [
        ...existingRoute.departureTimes,
        ...newDepartures
      ];
      // Sort by time
      existingRoute.departureTimes.sort((a: any, b: any) => {
        const timeA = a.time.split(':').map(Number);
        const timeB = b.time.split(':').map(Number);
        return timeA[0] * 60 + timeA[1] - (timeB[0] * 60 + timeB[1]);
      });
    } else {
      // First occurrence - add to map
      groupMap.set(key, { ...route });
    }
  });
  
  return Array.from(groupMap.values());
}

// Merge all routes from different depots
const allRoutesRaw = [
  ...chandigarhRoutes,
  ...ambalaRoutes,
  ...narnaulRoutes,
  ...delhiRoutes,
  ...faridabadRoutes,
  ...fatehbadRoutes,
  ...gurugramRoutes,
  ...jhajjarRoutes,
  ...jindRoutes,
  ...kaithalRoutes,
  ...karnalRoutes,
  ...kurukshetraRoutes,
  ...nuhRoutes,
  ...palwalRoutes,
  ...panchkulaRoutes,
  ...kalkaRoutes,
  ...panipatRoutes,
  ...rewariRoutes,
  ...rohtakRoutes,
];

// Apply normalization and merging
export const busRoutes = normalizeRoutes(allRoutesRaw);

// Extract unique values for filters
export const depots = Array.from(new Set(busRoutes.map(route => route.depot))).sort();

export const operators = Array.from(
  new Set(busRoutes.flatMap(route => route.departureTimes.map(dt => dt.operator)))
).sort();

export const busTypes = Array.from(new Set(busRoutes.map(route => route.busType))).sort();

export const cities = Array.from(
  new Set([
    ...busRoutes.map(route => route.from),
    ...busRoutes.map(route => route.to),
    ...busRoutes.flatMap(route => {
      if (route.via && typeof route.via === 'string') {
        return route.via.split(',').map(v => v.trim()).filter(v => v.length > 0);
      }
      return [];
    }),
  ])
).sort();
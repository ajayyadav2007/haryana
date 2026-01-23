export interface BusRoute {
  id?: string; // Auto-generated if not provided
  routeNumber?: string; // Auto-generated if not provided
  from: string;
  to: string;
  via: string;
  depot: string;
  busType: 'Ordinary' | 'Express' | 'Deluxe' | 'AC' | 'Volvo' | 'HVAC';
  departureTimes: DepartureTime[];
}

export interface DepartureTime {
  time: string;
  operator: string;
  serviceDays?: string[]; // Days this departure operates (optional, defaults to all days)
  busType?: 'Ordinary' | 'Express' | 'Deluxe' | 'AC' | 'Volvo' | 'HVAC'; // Optional per-departure bus type
}

export interface BusStop {
  name: string;
  arrivalTime: string;
  departureTime: string;
  platform?: string;
}

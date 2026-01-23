import { BusRoute } from '../types/bus';

// JHAJJAR Depot - One of the busiest depots with 2146+ daily departures
// Includes both Jhajjar and Bahadurgarh sub-depots
export const jhajjarRoutes: BusRoute[] = [
  // JHAJJAR → DELHI (via Bahadurgarh) - 23 departures
  {
    id: 'JHJ-DEL-BAH-ORD',
    routeNumber: 'JHJ-DEL-01',
    from: 'Jhajjar',
    to: 'Delhi',
    via: 'Bahadurgarh',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '04:40', operator: 'HR' },
      { time: '05:00', operator: 'HR' },
      { time: '05:35', operator: 'HR' },
      { time: '06:00', operator: 'HR' },
      { time: '06:40', operator: 'HR' },
      { time: '06:50', operator: 'HR' },
      { time: '07:30', operator: 'HR' },
      { time: '08:00', operator: 'HR' },
      { time: '08:30', operator: 'HR' },
      { time: '09:10', operator: 'HR' },
      { time: '10:10', operator: 'HR' },
      { time: '10:40', operator: 'HR' },
      { time: '10:50', operator: 'HR' },
      { time: '11:10', operator: 'HR' },
      { time: '11:40', operator: 'HR' },
      { time: '12:30', operator: 'HR' },
      { time: '14:10', operator: 'HR' },
      { time: '14:35', operator: 'HR' },
      { time: '15:40', operator: 'HR' },
      { time: '17:40', operator: 'HR' },
      { time: '18:10', operator: 'HR' },
    ]
  },

  // JHAJJAR → CHANDIGARH (via Delhi) - 1 departure
  {
    id: 'JHJ-CHD-DEL-ORD',
    routeNumber: 'JHJ-CHD-01',
    from: 'Jhajjar',
    to: 'Chandigarh',
    via: 'Delhi',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '04:50', operator: 'HR' },
    ]
  },

  // JHAJJAR → BAIJNATH (via Delhi) - 1 departure
  {
    id: 'JHJ-BAI-DEL-ORD',
    routeNumber: 'JHJ-BAI-01',
    from: 'Jhajjar',
    to: 'Baijnath',
    via: 'Delhi',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '16:30', operator: 'HR' },
    ]
  },

  // JHAJJAR → SONIPAT/KHARKHODA/CHANDIGARH Routes
  {
    id: 'JHJ-CHD-SON-ORD',
    routeNumber: 'JHJ-SON-01',
    from: 'Jhajjar',
    to: 'Chandigarh',
    via: 'Sonipat',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '05:40', operator: 'HR' },
      { time: '06:36', operator: 'HR' },
      { time: '09:36', operator: 'HR' },
    ]
  },

  {
    id: 'JHJ-SON-KHA-ORD',
    routeNumber: 'JHJ-SON-02',
    from: 'Jhajjar',
    to: 'Sonipat',
    via: 'Kharkhoda',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '06:00', operator: 'HR' },
      { time: '07:12', operator: 'HR' },
      { time: '07:48', operator: 'HR' },
      { time: '08:24', operator: 'HR' },
      { time: '09:00', operator: 'HR' },
      { time: '10:12', operator: 'HR' },
      { time: '10:48', operator: 'HR' },
      { time: '11:24', operator: 'HR' },
      { time: '12:00', operator: 'HR' },
      { time: '12:36', operator: 'HR' },
      { time: '13:12', operator: 'HR' },
      { time: '13:48', operator: 'HR' },
      { time: '14:24', operator: 'HR' },
      { time: '15:00', operator: 'HR' },
      { time: '15:36', operator: 'HR' },
      { time: '16:12', operator: 'HR' },
      { time: '16:48', operator: 'HR' },
      { time: '17:24', operator: 'HR' },
      { time: '18:00', operator: 'HR' },
      { time: '18:36', operator: 'HR' },
      { time: '18:54', operator: 'HR' },
    ]
  },

  {
    id: 'JHJ-KHA-SAM-PVT',
    routeNumber: 'JHJ-KHA-01',
    from: 'Jhajjar',
    to: 'Kharkhoda',
    via: 'Sampla',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '06:18', operator: 'PVT' },
      { time: '06:54', operator: 'PVT' },
      { time: '07:30', operator: 'PVT' },
      { time: '08:06', operator: 'PVT' },
      { time: '08:42', operator: 'PVT' },
      { time: '09:18', operator: 'PVT' },
      { time: '09:54', operator: 'PVT' },
      { time: '10:30', operator: 'PVT' },
      { time: '11:06', operator: 'PVT' },
      { time: '11:42', operator: 'PVT' },
      { time: '12:18', operator: 'PVT' },
      { time: '12:54', operator: 'PVT' },
      { time: '13:30', operator: 'PVT' },
      { time: '14:06', operator: 'PVT' },
      { time: '14:42', operator: 'PVT' },
      { time: '15:18', operator: 'PVT' },
      { time: '15:54', operator: 'PVT' },
      { time: '16:30', operator: 'PVT' },
      { time: '17:06', operator: 'PVT' },
      { time: '17:42', operator: 'PVT' },
      { time: '18:18', operator: 'PVT' },
    ]
  },

  // JHAJJAR → BAHADURGARH → DULHERA - Every 4 minutes! (223 departures)
  {
    id: 'JHJ-DUL-BAH-ORD',
    routeNumber: 'JHJ-DUL-01',
    from: 'Jhajjar',
    to: 'Bahadurgarh',
    via: 'Dulhera',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: Array.from({ length: 56 }, (_, i) => ({
      time: `${String(5 + Math.floor(i / 15)).padStart(2, '0')}:${String(48 + (i % 15) * 4).padStart(2, '0')}`,
      operator: i % 3 === 0 ? 'HR' : 'PVT'
    })).concat(
      Array.from({ length: 167 }, (_, i) => ({
        time: `${String(6 + Math.floor(i / 15)).padStart(2, '0')}:${String((i % 15) * 4).padStart(2, '0')}`,
        operator: i % 3 === 0 ? 'HR' : 'PVT'
      }))
    )
  },

  // JHAJJAR → GURUGRAM (via Farrukhnagar) - Every 5 minutes! (180 departures)
  {
    id: 'JHJ-GGN-FAR-ORD',
    routeNumber: 'JHJ-GGN-01',
    from: 'Jhajjar',
    to: 'Gurugram',
    via: 'Farrukhnagar',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: Array.from({ length: 180 }, (_, i) => ({
      time: `${String(5 + Math.floor(i / 12)).padStart(2, '0')}:${String((i % 12) * 5).padStart(2, '0')}`,
      operator: i % 3 === 0 ? 'HR' : 'PVT'
    }))
  },

  {
    id: 'JHJ-GGN-FAR-AC',
    routeNumber: 'JHJ-GGN-02',
    from: 'Jhajjar',
    to: 'Gurugram',
    via: 'Farrukhnagar',
    depot: 'Jhajjar',
    busType: 'AC',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '10:30', operator: 'HR' },
    ]
  },

  {
    id: 'JHJ-BAL-GGN-ORD',
    routeNumber: 'JHJ-BAL-01',
    from: 'Jhajjar',
    to: 'Ballabgarh',
    via: 'Gurugram',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '05:05', operator: 'HR' },
      { time: '09:15', operator: 'HR' },
    ]
  },

  {
    id: 'JHJ-ALI-GGN-ORD',
    routeNumber: 'JHJ-ALI-01',
    from: 'Jhajjar',
    to: 'Aligarh',
    via: 'Gurugram',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '05:45', operator: 'HR' },
      { time: '06:55', operator: 'HR' },
    ]
  },

  {
    id: 'JHJ-PAL-GGN-ORD',
    routeNumber: 'JHJ-PAL-01',
    from: 'Jhajjar',
    to: 'Palwal',
    via: 'Gurugram',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '06:05', operator: 'HR' },
      { time: '08:15', operator: 'HR' },
      { time: '10:00', operator: 'HR' },
    ]
  },

  {
    id: 'JHJ-MAT-GGN-ORD',
    routeNumber: 'JHJ-MAT-01',
    from: 'Jhajjar',
    to: 'Mathura',
    via: 'Gurugram',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '08:00', operator: 'HR' },
    ]
  },

  {
    id: 'JHJ-AGR-GGN-ORD',
    routeNumber: 'JHJ-AGR-01',
    from: 'Jhajjar',
    to: 'Agra',
    via: 'Gurugram',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '09:25', operator: 'HR' },
      { time: '13:15', operator: 'HR' },
      { time: '14:10', operator: 'HR' },
      { time: '15:10', operator: 'HR' },
    ]
  },

  {
    id: 'JHJ-FBD-GGN-ORD',
    routeNumber: 'JHJ-FBD-01',
    from: 'Jhajjar',
    to: 'Faridabad',
    via: 'Gurugram',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '09:55', operator: 'HR' },
      { time: '12:15', operator: 'HR' },
    ]
  },

  // JHAJJAR → CHARKHI DADRI (via Chhuchhakwas) - Every 7 minutes! (116 departures)
  {
    id: 'JHJ-CDD-CHU-ORD',
    routeNumber: 'JHJ-CDD-01',
    from: 'Jhajjar',
    to: 'Charkhi Dadri',
    via: 'Chhuchhakwas',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: Array.from({ length: 116 }, (_, i) => ({
      time: `${String(5 + Math.floor((51 + i * 7) / 60)).padStart(2, '0')}:${String((51 + i * 7) % 60).padStart(2, '0')}`,
      operator: i % 2 === 0 ? 'HR' : 'PVT'
    }))
  },

  {
    id: 'JHJ-PIL-CDD-ORD',
    routeNumber: 'JHJ-PIL-01',
    from: 'Jhajjar',
    to: 'Pilani',
    via: 'Charkhi Dadri',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '07:43', operator: 'HR' },
      { time: '12:58', operator: 'HR' },
    ]
  },

  {
    id: 'JHJ-LOH-CDD-ORD',
    routeNumber: 'JHJ-LOH-01',
    from: 'Jhajjar',
    to: 'Loharu',
    via: 'Charkhi Dadri',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '14:22', operator: 'HR' },
    ]
  },

  // JHAJJAR → KOSLI Routes
  {
    id: 'JHJ-KOS-DHA-ORD',
    routeNumber: 'JHJ-KOS-01',
    from: 'Jhajjar',
    to: 'Kosli',
    via: 'Dharoli',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: Array.from({ length: 27 }, (_, i) => ({
      time: `${String(6 + Math.floor((56 + i * 28) / 60)).padStart(2, '0')}:${String((56 + i * 28) % 60).padStart(2, '0')}`,
      operator: i % 2 === 0 ? 'HR' : 'PVT'
    }))
  },

  {
    id: 'JHJ-KOS-MAT-ORD',
    routeNumber: 'JHJ-KOS-02',
    from: 'Jhajjar',
    to: 'Kosli',
    via: 'Matanhail',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: Array.from({ length: 37 }, (_, i) => ({
      time: `${String(5 + Math.floor((30 + i * 22) / 60)).padStart(2, '0')}:${String((30 + i * 22) % 60).padStart(2, '0')}`,
      operator: i % 3 === 0 ? 'HR' : 'PVT'
    }))
  },

  {
    id: 'JHJ-KOS-RED-ORD',
    routeNumber: 'JHJ-KOS-03',
    from: 'Jhajjar',
    to: 'Kosli',
    via: 'Redhuwas',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '06:40', operator: 'PVT' },
      { time: '08:10', operator: 'HR' },
      { time: '09:40', operator: 'PVT' },
      { time: '11:10', operator: 'HR' },
      { time: '12:40', operator: 'PVT' },
      { time: '14:10', operator: 'HR' },
      { time: '15:40', operator: 'PVT' },
      { time: '17:10', operator: 'HR' },
      { time: '18:40', operator: 'PVT' },
    ]
  },

  // JHAJJAR → ROHTAK Routes
  {
    id: 'JHJ-CHD-ROH-ORD',
    routeNumber: 'JHJ-ROH-01',
    from: 'Jhajjar',
    to: 'Chandigarh',
    via: 'Rohtak',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '04:45', operator: 'HR' },
      { time: '05:35', operator: 'HR' },
      { time: '06:00', operator: 'HR' },
      { time: '06:25', operator: 'HR' },
      { time: '07:10', operator: 'HR' },
      { time: '07:50', operator: 'HR' },
      { time: '08:40', operator: 'HR' },
      { time: '09:25', operator: 'HR' },
      { time: '09:55', operator: 'HR' },
      { time: '12:10', operator: 'HR' },
      { time: '13:10', operator: 'HR' },
      { time: '15:10', operator: 'HR' },
      { time: '16:40', operator: 'HR' },
      { time: '17:10', operator: 'HR' },
      { time: '17:55', operator: 'HR' },
    ]
  },

  {
    id: 'JHJ-ROH-DIG-ORD',
    routeNumber: 'JHJ-ROH-02',
    from: 'Jhajjar',
    to: 'Rohtak',
    via: 'Dighal',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: Array.from({ length: 187 }, (_, i) => ({
      time: `${String(5 + Math.floor((5 + i * 5) / 60)).padStart(2, '0')}:${String((5 + i * 5) % 60).padStart(2, '0')}`,
      operator: i % 3 === 0 ? 'HR' : 'PVT'
    }))
  },

  {
    id: 'JHJ-HAR-ROH-ORD',
    routeNumber: 'JHJ-HAR-01',
    from: 'Jhajjar',
    to: 'Haridwar',
    via: 'Rohtak',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '05:10', operator: 'HR' },
    ]
  },

  {
    id: 'JHJ-JIN-ROH-ORD',
    routeNumber: 'JHJ-JIN-01',
    from: 'Jhajjar',
    to: 'Jind',
    via: 'Rohtak',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '08:10', operator: 'HR' },
      { time: '10:25', operator: 'HR' },
    ]
  },

  {
    id: 'JHJ-PAN-ROH-ORD',
    routeNumber: 'JHJ-PAN-01',
    from: 'Jhajjar',
    to: 'Panipat',
    via: 'Rohtak',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '10:55', operator: 'HR' },
    ]
  },

  {
    id: 'JHJ-YAM-ROH-ORD',
    routeNumber: 'JHJ-YAM-01',
    from: 'Jhajjar',
    to: 'Yamunanagar',
    via: 'Rohtak',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '14:10', operator: 'HR' },
    ]
  },

  // JHAJJAR → REWARI Routes (via Kulana) - Every 6 minutes! (148 departures)
  {
    id: 'JHJ-REW-KUL-ORD',
    routeNumber: 'JHJ-REW-01',
    from: 'Jhajjar',
    to: 'Rewari',
    via: 'Kulana',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: Array.from({ length: 148 }, (_, i) => ({
      time: `${String(5 + Math.floor((15 + i * 6) / 60)).padStart(2, '0')}:${String((15 + i * 6) % 60).padStart(2, '0')}`,
      operator: i % 2 === 0 ? 'HR' : 'PVT'
    }))
  },

  {
    id: 'JHJ-JAI-REW-ORD',
    routeNumber: 'JHJ-JAI-01',
    from: 'Jhajjar',
    to: 'Jaipur',
    via: 'Rewari',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '05:00', operator: 'HR' },
      { time: '06:16', operator: 'HR' },
      { time: '07:04', operator: 'HR' },
      { time: '12:28', operator: 'HR' },
      { time: '13:22', operator: 'HR' },
      { time: '13:40', operator: 'HR' },
      { time: '15:04', operator: 'HR' },
      { time: '16:04', operator: 'HR' },
    ]
  },

  {
    id: 'JHJ-ALW-REW-ORD',
    routeNumber: 'JHJ-ALW-01',
    from: 'Jhajjar',
    to: 'Alwar',
    via: 'Rewari',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '07:22', operator: 'HR' },
    ]
  },

  {
    id: 'JHJ-KOT-JAI-ORD',
    routeNumber: 'JHJ-KOT-01',
    from: 'Jhajjar',
    to: 'Kota',
    via: 'Jaipur',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '07:28', operator: 'HR' },
      { time: '08:10', operator: 'HR' },
      { time: '09:28', operator: 'HR' },
      { time: '10:40', operator: 'HR' },
    ]
  },

  {
    id: 'JHJ-BAL-REW-ORD',
    routeNumber: 'JHJ-BAL-02',
    from: 'Jhajjar',
    to: 'Bala Ji',
    via: 'Rewari',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '12:10', operator: 'HR' },
    ]
  },

  {
    id: 'JHJ-AJM-REW-ORD',
    routeNumber: 'JHJ-AJM-01',
    from: 'Jhajjar',
    to: 'Ajmer',
    via: 'Rewari',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '12:46', operator: 'HR' },
    ]
  },

  // JHAJJAR → BHIWANI (via Beri) - Every 14 minutes! (83 departures)
  {
    id: 'JHJ-BHI-BER-ORD',
    routeNumber: 'JHJ-BHI-01',
    from: 'Jhajjar',
    to: 'Bhiwani',
    via: 'Beri',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: Array.from({ length: 82 }, (_, i) => ({
      time: `${String(7 + Math.floor(i * 14 / 60)).padStart(2, '0')}:${String((i * 14) % 60).padStart(2, '0')}`,
      operator: i % 5 === 0 ? 'PVT' : 'HR'
    }))
  },

  {
    id: 'JHJ-BHI-BER-AC',
    routeNumber: 'JHJ-BHI-02',
    from: 'Jhajjar',
    to: 'Bhiwani',
    via: 'Beri',
    depot: 'Jhajjar',
    busType: 'AC',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '16:34', operator: 'HR' },
    ]
  },

  // JHAJJAR → HISAR/SIRSA Routes
  {
    id: 'JHJ-FAT-HIS-ORD',
    routeNumber: 'JHJ-HIS-01',
    from: 'Jhajjar',
    to: 'Fatehabad',
    via: 'Hisar',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '06:50', operator: 'HR' },
      { time: '14:16', operator: 'HR' },
    ]
  },

  {
    id: 'JHJ-GAN-SIR-ORD',
    routeNumber: 'JHJ-SIR-01',
    from: 'Jhajjar',
    to: 'Ganga Nagar',
    via: 'Sirsa',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '07:50', operator: 'HR' },
    ]
  },

  {
    id: 'JHJ-HIS-MAH-ORD',
    routeNumber: 'JHJ-HIS-02',
    from: 'Jhajjar',
    to: 'Hisar',
    via: 'Maham',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '08:30', operator: 'HR' },
      { time: '09:30', operator: 'HR' },
      { time: '10:10', operator: 'HR' },
      { time: '10:50', operator: 'HR' },
      { time: '11:35', operator: 'HR' },
      { time: '11:55', operator: 'HR' },
      { time: '13:20', operator: 'HR' },
      { time: '13:30', operator: 'HR' },
      { time: '14:30', operator: 'HR' },
      { time: '15:40', operator: 'HR' },
      { time: '16:15', operator: 'HR' },
      { time: '16:40', operator: 'HR' },
      { time: '18:20', operator: 'HR' },
    ]
  },

  {
    id: 'JHJ-SIR-HIS-ORD',
    routeNumber: 'JHJ-SIR-02',
    from: 'Jhajjar',
    to: 'Sirsa',
    via: 'Hisar',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '12:40', operator: 'HR' },
      { time: '14:00', operator: 'HR' },
      { time: '14:55', operator: 'HR' },
      { time: '15:30', operator: 'HR' },
      { time: '17:20', operator: 'HR' },
    ]
  },

  // JHAJJAR → NARNAUL/BAHU JHOLRI Routes
  {
    id: 'JHJ-NAR-BAH-ORD',
    routeNumber: 'JHJ-NAR-01',
    from: 'Jhajjar',
    to: 'Narnaul',
    via: 'Bahu Jholri',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '06:00', operator: 'HR' },
    ]
  },

  {
    id: 'JHJ-BAH-CHU-ORD',
    routeNumber: 'JHJ-BAH-01',
    from: 'Jhajjar',
    to: 'Bahu Jholri',
    via: 'Chhuchhakwas',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: Array.from({ length: 47 }, (_, i) => ({
      time: `${String(6 + Math.floor((34 + i * 18) / 60)).padStart(2, '0')}:${String((34 + i * 18) % 60).padStart(2, '0')}`,
      operator: i % 3 === 0 ? 'PVT' : 'HR'
    }))
  },

  // JHAJJAR → DHANSA BORDER (via Badli) - Every 10 minutes! (88 departures)
  {
    id: 'JHJ-DHA-BAD-ORD',
    routeNumber: 'JHJ-DHA-01',
    from: 'Jhajjar',
    to: 'Dhansa Border',
    via: 'Badli',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: Array.from({ length: 88 }, (_, i) => ({
      time: `${String(6 + Math.floor(i * 10 / 60)).padStart(2, '0')}:${String((i * 10) % 60).padStart(2, '0')}`,
      operator: i % 3 === 0 ? 'HR' : 'PVT'
    }))
  },

  // JHAJJAR → Other Local Routes
  {
    id: 'JHJ-BIL-BHI-ORD',
    routeNumber: 'JHJ-BIL-01',
    from: 'Jhajjar',
    to: 'Bilochpura',
    via: 'Bhindawas',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '07:50', operator: 'HR' },
      { time: '15:00', operator: 'HR' },
      { time: '16:40', operator: 'HR' },
    ]
  },

  {
    id: 'JHJ-MAJ-MAL-ORD',
    routeNumber: 'JHJ-MAJ-01',
    from: 'Jhajjar',
    to: 'Majra',
    via: 'Malikpur',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '14:30', operator: 'HR' },
      { time: '17:00', operator: 'HR' },
    ]
  },

  // ===== BAHADURGARH SUB-DEPOT ROUTES =====

  // BAHADURGARH → CHANDIGARH Routes
  {
    id: 'BAH-CHD-DEL-ORD',
    routeNumber: 'BAH-CHD-01',
    from: 'Bahadurgarh',
    to: 'Chandigarh',
    via: 'Delhi',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '03:30', operator: 'HR' },
    ]
  },

  {
    id: 'BAH-LUD-DEL-ORD',
    routeNumber: 'BAH-LUD-01',
    from: 'Bahadurgarh',
    to: 'Ludhiana',
    via: 'Delhi',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '08:30', operator: 'HR' },
    ]
  },

  {
    id: 'BAH-BAI-DEL-ORD',
    routeNumber: 'BAH-BAI-01',
    from: 'Bahadurgarh',
    to: 'Baijnath',
    via: 'Delhi',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '08:45', operator: 'HR' },
      { time: '17:30', operator: 'HR' },
    ]
  },

  {
    id: 'BAH-JAL-DEL-ORD',
    routeNumber: 'BAH-JAL-01',
    from: 'Bahadurgarh',
    to: 'Jalandhar',
    via: 'Delhi',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '09:00', operator: 'HR' },
    ]
  },

  {
    id: 'BAH-DHA-DEL-ORD',
    routeNumber: 'BAH-DHA-01',
    from: 'Bahadurgarh',
    to: 'Dharamshala',
    via: 'Delhi',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '10:35', operator: 'HR' },
    ]
  },

  // BAHADURGARH → DELHI (via Nangloi) - 23 departures
  {
    id: 'BAH-DEL-NAN-ORD',
    routeNumber: 'BAH-DEL-01',
    from: 'Bahadurgarh',
    to: 'Delhi',
    via: 'Nangloi',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '04:15', operator: 'HR' },
      { time: '06:30', operator: 'HR' },
      { time: '06:52', operator: 'HR' },
      { time: '07:00', operator: 'HR' },
      { time: '07:35', operator: 'HR' },
      { time: '07:45', operator: 'HR' },
      { time: '09:35', operator: 'HR' },
      { time: '10:55', operator: 'HR' },
      { time: '11:30', operator: 'HR' },
      { time: '11:40', operator: 'HR' },
      { time: '13:10', operator: 'HR' },
      { time: '13:20', operator: 'HR' },
      { time: '14:10', operator: 'HR' },
      { time: '15:15', operator: 'HR' },
      { time: '15:20', operator: 'HR' },
      { time: '16:45', operator: 'HR' },
      { time: '17:05', operator: 'HR' },
      { time: '19:00', operator: 'HR' },
    ]
  },

  {
    id: 'BAH-DEL-NAN-AC',
    routeNumber: 'BAH-DEL-02',
    from: 'Bahadurgarh',
    to: 'Delhi',
    via: 'Nangloi',
    depot: 'Jhajjar',
    busType: 'AC',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '09:52', operator: 'HR' },
      { time: '10:20', operator: 'HR' },
      { time: '11:50', operator: 'HR' },
      { time: '15:00', operator: 'HR' },
      { time: '15:30', operator: 'HR' },
    ]
  },

  // BAHADURGARH → JHAJJAR (via Dulhera) - Reverse direction with similar frequency
  {
    id: 'BAH-JHJ-DUL-ORD',
    routeNumber: 'BAH-JHJ-01',
    from: 'Bahadurgarh',
    to: 'Jhajjar',
    via: 'Dulhera',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: Array.from({ length: 234 }, (_, i) => ({
      time: `${String(5 + Math.floor(i * 4 / 60)).padStart(2, '0')}:${String((i * 4) % 60).padStart(2, '0')}`,
      operator: i % 3 === 0 ? 'HR' : 'PVT'
    }))
  },

  // BAHADURGARH → HISAR/SIRSA Routes (similar to Jhajjar)
  {
    id: 'BAH-HIS-ROH-ORD',
    routeNumber: 'BAH-HIS-01',
    from: 'Bahadurgarh',
    to: 'Hisar',
    via: 'Rohtak',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '05:30', operator: 'HR' },
      { time: '09:25', operator: 'HR' },
      { time: '14:10', operator: 'HR' },
      { time: '15:20', operator: 'HR' },
      { time: '16:00', operator: 'HR' },
      { time: '22:20', operator: 'HR' },
    ]
  },

  {
    id: 'BAH-HIS-ROH-AC',
    routeNumber: 'BAH-HIS-02',
    from: 'Bahadurgarh',
    to: 'Hisar',
    via: 'Rohtak',
    depot: 'Jhajjar',
    busType: 'AC',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '13:00', operator: 'HR' },
      { time: '17:46', operator: 'HR' },
    ]
  },

  {
    id: 'BAH-SIR-ROH-ORD',
    routeNumber: 'BAH-SIR-01',
    from: 'Bahadurgarh',
    to: 'Sirsa',
    via: 'Rohtak',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '07:15', operator: 'HR' },
      { time: '07:25', operator: 'HR' },
      { time: '07:40', operator: 'HR' },
      { time: '08:20', operator: 'HR' },
      { time: '08:47', operator: 'HR' },
      { time: '09:20', operator: 'HR' },
      { time: '10:25', operator: 'HR' },
      { time: '11:00', operator: 'HR' },
      { time: '12:30', operator: 'HR' },
      { time: '13:30', operator: 'HR' },
      { time: '13:50', operator: 'HR' },
      { time: '20:10', operator: 'HR' },
    ]
  },

  {
    id: 'BAH-SIR-ROH-AC',
    routeNumber: 'BAH-SIR-02',
    from: 'Bahadurgarh',
    to: 'Sirsa',
    via: 'Rohtak',
    depot: 'Jhajjar',
    busType: 'AC',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '19:26', operator: 'HR' },
    ]
  },

  {
    id: 'BAH-FAT-ROH-ORD',
    routeNumber: 'BAH-FAT-01',
    from: 'Bahadurgarh',
    to: 'Fatehabad',
    via: 'Rohtak',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '11:20', operator: 'HR' },
    ]
  },

  {
    id: 'BAH-MAH-ROH-ORD',
    routeNumber: 'BAH-MAH-01',
    from: 'Bahadurgarh',
    to: 'Maham',
    via: 'Rohtak',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '14:30', operator: 'HR' },
    ]
  },

  // BAHADURGARH → BHIWANI Routes
  {
    id: 'BAH-BHI-ROH-ORD',
    routeNumber: 'BAH-BHI-01',
    from: 'Bahadurgarh',
    to: 'Bhiwani',
    via: 'Rohtak',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '05:30', operator: 'HR' },
      { time: '06:00', operator: 'HR' },
      { time: '09:50', operator: 'HR' },
      { time: '12:05', operator: 'HR' },
      { time: '13:00', operator: 'HR' },
      { time: '13:55', operator: 'HR' },
      { time: '14:20', operator: 'HR' },
      { time: '14:30', operator: 'HR' },
      { time: '15:25', operator: 'HR' },
      { time: '16:15', operator: 'HR' },
      { time: '16:50', operator: 'HR' },
      { time: '18:50', operator: 'HR' },
      { time: '20:10', operator: 'HR' },
    ]
  },

  {
    id: 'BAH-BHI-ROH-AC',
    routeNumber: 'BAH-BHI-02',
    from: 'Bahadurgarh',
    to: 'Bhiwani',
    via: 'Rohtak',
    depot: 'Jhajjar',
    busType: 'AC',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '13:28', operator: 'HR' },
    ]
  },

  {
    id: 'BAH-JHU-ROH-ORD',
    routeNumber: 'BAH-JHU-01',
    from: 'Bahadurgarh',
    to: 'Jhunjhnu',
    via: 'Rohtak',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '06:30', operator: 'HR' },
      { time: '10:40', operator: 'HR' },
      { time: '15:15', operator: 'HR' },
    ]
  },

  {
    id: 'BAH-TOS-ROH-ORD',
    routeNumber: 'BAH-TOS-01',
    from: 'Bahadurgarh',
    to: 'Tosham',
    via: 'Rohtak',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '10:30', operator: 'HR' },
      { time: '11:45', operator: 'HR' },
    ]
  },

  {
    id: 'BAH-CHU-ROH-ORD',
    routeNumber: 'BAH-CHU-01',
    from: 'Bahadurgarh',
    to: 'Churu',
    via: 'Rohtak',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '10:45', operator: 'HR' },
    ]
  },

  {
    id: 'BAH-KHA-JIN-ORD',
    routeNumber: 'BAH-KHA-01',
    from: 'Bahadurgarh',
    to: 'Khanori',
    via: 'Jind',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '11:00', operator: 'HR' },
    ]
  },

  {
    id: 'BAH-KAI-ROH-ORD',
    routeNumber: 'BAH-KAI-01',
    from: 'Bahadurgarh',
    to: 'Kaithal',
    via: 'Rohtak',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '11:40', operator: 'HR' },
      { time: '15:20', operator: 'HR' },
    ]
  },

  {
    id: 'BAH-JIN-ROH-ORD',
    routeNumber: 'BAH-JIN-01',
    from: 'Bahadurgarh',
    to: 'Jind',
    via: 'Rohtak',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '11:50', operator: 'HR' },
      { time: '14:50', operator: 'HR' },
      { time: '16:00', operator: 'HR' },
    ]
  },

  {
    id: 'BAH-LOH-ROH-ORD',
    routeNumber: 'BAH-LOH-01',
    from: 'Bahadurgarh',
    to: 'Loharu',
    via: 'Rohtak',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '11:55', operator: 'HR' },
      { time: '13:30', operator: 'HR' },
      { time: '13:40', operator: 'HR' },
      { time: '14:00', operator: 'HR' },
    ]
  },

  {
    id: 'BAH-TOH-ROH-ORD',
    routeNumber: 'BAH-TOH-01',
    from: 'Bahadurgarh',
    to: 'Tohana',
    via: 'Rohtak',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '15:45', operator: 'HR' },
      { time: '17:00', operator: 'HR' },
    ]
  },

  {
    id: 'BAH-PIL-ROH-AC',
    routeNumber: 'BAH-PIL-01',
    from: 'Bahadurgarh',
    to: 'Pilani',
    via: 'Rohtak',
    depot: 'Jhajjar',
    busType: 'AC',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '19:15', operator: 'HR' },
    ]
  },

  // BAHADURGARH → ROHTAK (via Sampla)
  {
    id: 'BAH-ROH-SAM-ORD',
    routeNumber: 'BAH-ROH-01',
    from: 'Bahadurgarh',
    to: 'Rohtak',
    via: 'Sampla',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '09:15', operator: 'HR' },
      { time: '09:22', operator: 'HR' },
      { time: '09:55', operator: 'HR' },
      { time: '10:45', operator: 'HR' },
      { time: '11:40', operator: 'HR' },
      { time: '12:40', operator: 'HR' },
      { time: '13:00', operator: 'HR' },
      { time: '13:40', operator: 'HR' },
      { time: '18:00', operator: 'HR' },
      { time: '19:00', operator: 'HR' },
      { time: '22:00', operator: 'HR' },
    ]
  },

  // BAHADURGARH → GURUGRAM (via Najafgarh)
  {
    id: 'BAH-GGN-NAJ-ORD',
    routeNumber: 'BAH-GGN-01',
    from: 'Bahadurgarh',
    to: 'Gurugram',
    via: 'Najafgarh',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '05:30', operator: 'HR' },
      { time: '05:45', operator: 'HR' },
      { time: '06:00', operator: 'HR' },
      { time: '06:40', operator: 'HR' },
      { time: '07:30', operator: 'HR' },
      { time: '08:35', operator: 'HR' },
      { time: '08:45', operator: 'HR' },
      { time: '09:03', operator: 'HR' },
      { time: '10:20', operator: 'HR' },
      { time: '10:35', operator: 'HR' },
      { time: '11:55', operator: 'HR' },
      { time: '12:00', operator: 'HR' },
      { time: '12:08', operator: 'HR' },
      { time: '12:40', operator: 'HR' },
      { time: '17:00', operator: 'HR' },
      { time: '20:18', operator: 'HR' },
    ]
  },

  {
    id: 'BAH-PAL-GGN-ORD',
    routeNumber: 'BAH-PAL-01',
    from: 'Bahadurgarh',
    to: 'Palwal',
    via: 'Gurugram',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '07:15', operator: 'HR' },
      { time: '08:00', operator: 'HR' },
    ]
  },

  {
    id: 'BAH-ALI-GGN-ORD',
    routeNumber: 'BAH-ALI-01',
    from: 'Bahadurgarh',
    to: 'Aligarh',
    via: 'Gurugram',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '07:20', operator: 'HR' },
    ]
  },

  {
    id: 'BAH-AGR-GGN-ORD',
    routeNumber: 'BAH-AGR-01',
    from: 'Bahadurgarh',
    to: 'Agra',
    via: 'Gurugram',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '14:30', operator: 'HR' },
    ]
  },

  // BAHADURGARH → CHANDIGARH (via Sonipat)
  {
    id: 'BAH-CHD-SON-ORD',
    routeNumber: 'BAH-CHD-02',
    from: 'Bahadurgarh',
    to: 'Chandigarh',
    via: 'Sonipat',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '05:30', operator: 'HR' },
      { time: '06:11', operator: 'HR' },
      { time: '07:17', operator: 'HR' },
      { time: '10:57', operator: 'HR' },
    ]
  },

  {
    id: 'BAH-SON-KHA-ORD',
    routeNumber: 'BAH-SON-01',
    from: 'Bahadurgarh',
    to: 'Sonipat',
    via: 'Kharkhoda',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: Array.from({ length: 71 }, (_, i) => ({
      time: `${String(6 + Math.floor(i * 11 / 60)).padStart(2, '0')}:${String((i * 11) % 60).padStart(2, '0')}`,
      operator: i % 2 === 0 ? 'PVT' : 'HR'
    }))
  },

  // BAHADURGARH → BERI Routes
  {
    id: 'BAH-BER-SAM-ORD',
    routeNumber: 'BAH-BER-01',
    from: 'Bahadurgarh',
    to: 'Beri',
    via: 'Sampla',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '08:50', operator: 'HR' },
      { time: '13:20', operator: 'HR' },
      { time: '14:50', operator: 'HR' },
      { time: '16:50', operator: 'HR' },
      { time: '17:50', operator: 'HR' },
    ]
  },

  {
    id: 'BAH-BER-CHA-ORD',
    routeNumber: 'BAH-BER-02',
    from: 'Bahadurgarh',
    to: 'Beri',
    via: 'Chhara',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: Array.from({ length: 31 }, (_, i) => ({
      time: `${String(6 + Math.floor((15 + i * 28) / 60)).padStart(2, '0')}:${String((15 + i * 28) % 60).padStart(2, '0')}`,
      operator: i % 4 === 0 ? 'HR' : 'PVT'
    }))
  },

  // BAHADURGARH → BADSA (via Badli)
  {
    id: 'BAH-BAD-BAD-ORD',
    routeNumber: 'BAH-BAD-01',
    from: 'Bahadurgarh',
    to: 'Badsa',
    via: 'Badli',
    depot: 'Jhajjar',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '08:00', operator: 'HR' },
      { time: '09:00', operator: 'HR' },
      { time: '12:00', operator: 'HR' },
      { time: '12:45', operator: 'HR' },
      { time: '14:30', operator: 'HR' },
      { time: '15:30', operator: 'HR' },
      { time: '17:00', operator: 'HR' },
    ]
  },
];

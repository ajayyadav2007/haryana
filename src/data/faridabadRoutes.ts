import { BusRoute } from '../types/bus';

// Faridabad Depot (Ballabgarh) - Routes to North India
// Major connectivity to Himachal, Uttarakhand, Punjab, Rajasthan & Haryana

export const faridabadRoutes: BusRoute[] = [
  // BALLABGARH → SHIMLA - HVAC
  {
    id: 'FBD-SML-01',
    routeNumber: 'FBD-SML-01',
    from: 'Ballabgarh',
    to: 'Shimla',
    via: 'Delhi, Chandigarh',
    depot: 'Faridabad',
    busType: 'HVAC',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '07:00', operator: 'HR' },
    ],
  },

  // BALLABGARH → BAIJNATH
  {
    id: 'FBD-BJN-01',
    routeNumber: 'FBD-BJN-01',
    from: 'Ballabgarh',
    to: 'Baijnath',
    via: 'Delhi, Chandigarh',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '15:45', operator: 'HR' },
    ],
  },

  // BALLABGARH → DHARAMSHALA
  {
    id: 'FBD-DHS-01',
    routeNumber: 'FBD-DHS-01',
    from: 'Ballabgarh',
    to: 'Dharamshala',
    via: 'Delhi, Chandigarh',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '18:30', operator: 'HR' },
    ],
  },

  // BALLABGARH → HAMIRPUR
  {
    id: 'FBD-HPR-01',
    routeNumber: 'FBD-HPR-01',
    from: 'Ballabgarh',
    to: 'Hamirpur',
    via: 'Delhi, Chandigarh',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '20:00', operator: 'HR' },
    ],
  },

  // BALLABGARH → DEHRADUN - HVAC
  {
    id: 'FBD-DDN-01',
    routeNumber: 'FBD-DDN-01',
    from: 'Ballabgarh',
    to: 'Dehradun',
    via: 'Delhi, Meerut',
    depot: 'Faridabad',
    busType: 'HVAC',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '09:30', operator: 'HR' },
    ],
  },

  // BALLABGARH → HALDWANI
  {
    id: 'FBD-HDW-01',
    routeNumber: 'FBD-HDW-01',
    from: 'Ballabgarh',
    to: 'Haldwani',
    via: 'Delhi, Hapur',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '08:30', operator: 'HR' },
    ],
  },

  // BALLABGARH → HARIDWAR
  {
    id: 'FBD-HRD-01',
    routeNumber: 'FBD-HRD-01',
    from: 'Ballabgarh',
    to: 'Haridwar',
    via: 'Delhi, Meerut',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '05:30', operator: 'HR' },
      { time: '20:15', operator: 'HR' },
    ],
  },

  // BALLABGARH → JAIPUR
  {
    id: 'FBD-JPR-01',
    routeNumber: 'FBD-JPR-01',
    from: 'Ballabgarh',
    to: 'Jaipur',
    via: 'Gurugram, Behror',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '06:00', operator: 'HR' },
      { time: '06:20', operator: 'HR' },
    ],
  },

  // BALLABGARH → ALWAR
  {
    id: 'FBD-ALW-01',
    routeNumber: 'FBD-ALW-01',
    from: 'Ballabgarh',
    to: 'Alwar',
    via: 'Gurugram, Bhiwadi',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '06:35', operator: 'HR' },
    ],
  },

  // BALLABGARH → BALAJI
  {
    id: 'FBD-BLJ-01',
    routeNumber: 'FBD-BLJ-01',
    from: 'Ballabgarh',
    to: 'Balaji',
    via: 'Palwal, Mathura',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '08:30', operator: 'HR' },
    ],
  },

  // BALLABGARH → BHARATPUR
  {
    id: 'FBD-BTP-01',
    routeNumber: 'FBD-BTP-01',
    from: 'Ballabgarh',
    to: 'Bharatpur',
    via: 'Palwal, Mathura',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '07:00', operator: 'HR' },
      { time: '07:30', operator: 'HR' },
    ],
  },

  // BALLABGARH → KHATUSHYAM
  {
    id: 'FBD-KTS-01',
    routeNumber: 'FBD-KTS-01',
    from: 'Ballabgarh',
    to: 'Khatushyam',
    via: 'Gurugram, Narnaul',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '09:00', operator: 'HR' },
    ],
  },

  // BALLABGARH → AMRITSAR
  {
    id: 'FBD-ASR-01',
    routeNumber: 'FBD-ASR-01',
    from: 'Ballabgarh',
    to: 'Amritsar',
    via: 'Delhi, Ambala',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '06:00', operator: 'HR' },
    ],
  },

  // BALLABGARH → BULANDSHAHAR
  {
    id: 'FBD-BSR-01',
    routeNumber: 'FBD-BSR-01',
    from: 'Ballabgarh',
    to: 'Bulandshahar',
    via: 'Palwal, Jewar',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '07:00', operator: 'HR' },
      { time: '08:00', operator: 'HR' },
    ],
  },

  // BALLABGARH → ALIGARH - 10 departures
  {
    id: 'FBD-ALG-01',
    routeNumber: 'FBD-ALG-01',
    from: 'Ballabgarh',
    to: 'Aligarh',
    via: 'Palwal, Jattari',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '06:00', operator: 'HR' },
      { time: '06:40', operator: 'HR' },
      { time: '07:00', operator: 'HR' },
      { time: '07:30', operator: 'HR' },
      { time: '08:00', operator: 'HR' },
      { time: '08:30', operator: 'HR' },
      { time: '09:00', operator: 'HR' },
      { time: '09:30', operator: 'HR' },
      { time: '10:00', operator: 'HR' },
      { time: '11:00', operator: 'HR' },
    ],
  },

  // BALLABGARH → AGRA - 7 departures
  {
    id: 'FBD-AGR-01',
    routeNumber: 'FBD-AGR-01',
    from: 'Ballabgarh',
    to: 'Agra',
    via: 'Palwal, Mathura',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '06:00', operator: 'HR' },
      { time: '06:30', operator: 'HR' },
      { time: '07:00', operator: 'HR' },
      { time: '07:30', operator: 'HR' },
      { time: '08:00', operator: 'HR' },
      { time: '08:30', operator: 'HR' },
      { time: '09:00', operator: 'HR' },
    ],
  },

  // BALLABGARH → PANCHKULA
  {
    id: 'FBD-PKL-01',
    routeNumber: 'FBD-PKL-01',
    from: 'Ballabgarh',
    to: 'Panchkula',
    via: 'Delhi, Panipat',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '08:30', operator: 'HR' },
    ],
  },

  // BALLABGARH → CHANDIGARH - Ordinary
  {
    id: 'FBD-CHD-ORD',
    routeNumber: 'FBD-CHD-01',
    from: 'Ballabgarh',
    to: 'Chandigarh',
    via: 'Delhi, Panipat',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '03:20', operator: 'HR' },
      { time: '03:50', operator: 'HR' },
      { time: '04:00', operator: 'HR' },
      { time: '04:40', operator: 'HR' },
      { time: '05:00', operator: 'HR' },
      { time: '09:05', operator: 'HR' },
      { time: '10:00', operator: 'HR' },
      { time: '10:30', operator: 'HR' },
      { time: '12:00', operator: 'HR' },
    ],
  },

  // BALLABGARH → CHANDIGARH - HVAC
  {
    id: 'FBD-CHD-HVAC',
    routeNumber: 'FBD-CHD-02',
    from: 'Ballabgarh',
    to: 'Chandigarh',
    via: 'Delhi, Panipat',
    depot: 'Faridabad',
    busType: 'HVAC',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '05:30', operator: 'HR' },
      { time: '06:15', operator: 'HR' },
      { time: '07:30', operator: 'HR' },
      { time: '11:00', operator: 'HR' },
      { time: '12:30', operator: 'HR' },
      { time: '13:10', operator: 'HR' },
      { time: '13:45', operator: 'HR' },
    ],
  },

  // BALLABGARH → NARNAUL
  {
    id: 'FBD-NRN-01',
    routeNumber: 'FBD-NRN-01',
    from: 'Ballabgarh',
    to: 'Narnaul',
    via: 'Sohna, Bhiwadi',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '06:00', operator: 'HR' },
      { time: '14:20', operator: 'HR' },
    ],
  },

  // BALLABGARH → ROHTAK
  {
    id: 'FBD-RTK-01',
    routeNumber: 'FBD-RTK-01',
    from: 'Ballabgarh',
    to: 'Rohtak',
    via: 'Gurugram, Najafgarh',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '13:40', operator: 'HR' },
      { time: '14:16', operator: 'HR' },
      { time: '14:52', operator: 'HR' },
    ],
  },

  // BALLABGARH → BHIWANI
  {
    id: 'FBD-BWN-01',
    routeNumber: 'FBD-BWN-01',
    from: 'Ballabgarh',
    to: 'Bhiwani',
    via: 'Gurugram, Jhajjar',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '12:46', operator: 'HR' },
    ],
  },

  // BALLABGARH → PANIPAT
  {
    id: 'FBD-PNP-01',
    routeNumber: 'FBD-PNP-01',
    from: 'Ballabgarh',
    to: 'Panipat',
    via: 'Delhi, Murthal',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '12:40', operator: 'HR' },
    ],
  },

  // BALLABGARH → KOSLI
  {
    id: 'FBD-KSL-01',
    routeNumber: 'FBD-KSL-01',
    from: 'Ballabgarh',
    to: 'Kosli',
    via: 'Sohna, Patodi',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '14:40', operator: 'HR' },
    ],
  },

  // BALLABGARH → CHARKHI DADRI
  {
    id: 'FBD-CDD-01',
    routeNumber: 'FBD-CDD-01',
    from: 'Ballabgarh',
    to: 'Charkhi Dadri',
    via: 'Gurugram, Jhajjar',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '13:58', operator: 'HR' },
    ],
  },

  // BALLABGARH → GOHANA
  {
    id: 'FBD-GOH-01',
    routeNumber: 'FBD-GOH-01',
    from: 'Ballabgarh',
    to: 'Gohana',
    via: 'Delhi, Sonipat',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '13:50', operator: 'HR' },
    ],
  },

  // BALLABGARH → MAHENDERGARH
  {
    id: 'FBD-MGH-01',
    routeNumber: 'FBD-MGH-01',
    from: 'Ballabgarh',
    to: 'Mahendergarh',
    via: 'Gurugram, Rewari',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '11:43', operator: 'HR' },
    ],
  },

  // BALLABGARH → HISAR
  {
    id: 'FBD-HSR-01',
    routeNumber: 'FBD-HSR-01',
    from: 'Ballabgarh',
    to: 'Hisar',
    via: 'Gurugram, Najafgarh',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '03:40', operator: 'HR' },
      { time: '13:04', operator: 'HR' },
    ],
  },

  // BALLABGARH → HANSI
  {
    id: 'FBD-HNS-01',
    routeNumber: 'FBD-HNS-01',
    from: 'Ballabgarh',
    to: 'Hansi',
    via: 'Gurugram, Najafgarh',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '10:49', operator: 'HR' },
    ],
  },

  // BALLABGARH → MAHEM
  {
    id: 'FBD-MHM-01',
    routeNumber: 'FBD-MHM-01',
    from: 'Ballabgarh',
    to: 'Mahem',
    via: 'Gurugram, Najafgarh',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '12:19', operator: 'HR' },
    ],
  },

  // BALLABGARH → REWARI
  {
    id: 'FBD-RWR-01',
    routeNumber: 'FBD-RWR-01',
    from: 'Ballabgarh',
    to: 'Rewari',
    via: 'Gurugram, Manesar',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '15:30', operator: 'HR' },
      { time: '16:04', operator: 'HR' },
      { time: '16:40', operator: 'HR' },
    ],
  },

  // BALLABGARH → BAWAL
  {
    id: 'FBD-BWL-01',
    routeNumber: 'FBD-BWL-01',
    from: 'Ballabgarh',
    to: 'Bawal',
    via: 'Gurugram, Rewari',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '15:00', operator: 'HR' },
    ],
  },

  // BALLABGARH → PATODI
  {
    id: 'FBD-PTD-01',
    routeNumber: 'FBD-PTD-01',
    from: 'Ballabgarh',
    to: 'Patodi',
    via: 'Sohna, Tavru',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '15:00', operator: 'HR' },
      { time: '16:58', operator: 'HR' },
    ],
  },

  // BALLABGARH → PALLAWAS
  {
    id: 'FBD-PLW-01',
    routeNumber: 'FBD-PLW-01',
    from: 'Ballabgarh',
    to: 'Pallawas',
    via: 'Gurugram, Patodi',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '13:22', operator: 'HR' },
    ],
  },

  // BALLABGARH → HATHIN
  {
    id: 'FBD-HTN-01',
    routeNumber: 'FBD-HTN-01',
    from: 'Ballabgarh',
    to: 'Hathin',
    via: 'Palwal',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '14:30', operator: 'HR' },
      { time: '15:30', operator: 'HR' },
    ],
  },

  // BALLABGARH → HATHIN (via Sohna)
  {
    id: 'FBD-HTN-02',
    routeNumber: 'FBD-HTN-02',
    from: 'Ballabgarh',
    to: 'Hathin',
    via: 'Sohna',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '14:00', operator: 'HR' },
      { time: '17:00', operator: 'HR' },
    ],
  },

  // BALLABGARH → CHIRSI
  {
    id: 'FBD-CHR-01',
    routeNumber: 'FBD-CHR-01',
    from: 'Ballabgarh',
    to: 'Chirsi',
    via: 'Tigaon',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '15:30', operator: 'HR' },
    ],
  },

  // BALLABGARH → SAHABAD
  {
    id: 'FBD-SHB-01',
    routeNumber: 'FBD-SHB-01',
    from: 'Ballabgarh',
    to: 'Sahabad',
    via: 'Tigaon',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '16:00', operator: 'HR' },
    ],
  },

  // BALLABGARH → HODAL
  {
    id: 'FBD-HDL-01',
    routeNumber: 'FBD-HDL-01',
    from: 'Ballabgarh',
    to: 'Hodal',
    via: 'Palwal',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '16:00', operator: 'HR' },
      { time: '16:30', operator: 'HR' },
      { time: '17:00', operator: 'HR' },
    ],
  },

  // BALLABGARH → MANDKOLA
  {
    id: 'FBD-MDK-01',
    routeNumber: 'FBD-MDK-01',
    from: 'Ballabgarh',
    to: 'Mandkola',
    via: 'Prithla, Dathir',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '16:00', operator: 'HR' },
    ],
  },

  // BALLABGARH → SOHNA
  {
    id: 'FBD-SOH-01',
    routeNumber: 'FBD-SOH-01',
    from: 'Ballabgarh',
    to: 'Sohna',
    via: 'Pali Dhoj',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '14:00', operator: 'HR' },
      { time: '18:00', operator: 'HR' },
      { time: '19:00', operator: 'HR' },
    ],
  },

  // BALLABGARH → SOHNA (via Sirmithla)
  {
    id: 'FBD-SOH-02',
    routeNumber: 'FBD-SOH-02',
    from: 'Ballabgarh',
    to: 'Sohna',
    via: 'Sirmithla',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '16:00', operator: 'HR' },
      { time: '16:30', operator: 'HR' },
    ],
  },

  // BALLABGARH → NUH
  {
    id: 'FBD-NUH-01',
    routeNumber: 'FBD-NUH-01',
    from: 'Ballabgarh',
    to: 'Nuh',
    via: 'Sohna',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '18:30', operator: 'HR' },
    ],
  },

  // BALLABGARH → TAVRU
  {
    id: 'FBD-TVR-01',
    routeNumber: 'FBD-TVR-01',
    from: 'Ballabgarh',
    to: 'Tavru',
    via: 'Sohna',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '15:15', operator: 'HR' },
    ],
  },

  // BALLABGARH → MOHNA (via Chhainsa) - HR
  {
    id: 'FBD-MOH-01',
    routeNumber: 'FBD-MOH-01',
    from: 'Ballabgarh',
    to: 'Mohna',
    via: 'Chhainsa',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '15:00', operator: 'HR' },
      { time: '16:00', operator: 'HR' },
    ],
  },

  // BALLABGARH → MOHNA (via Hirapur)
  {
    id: 'FBD-MOH-02',
    routeNumber: 'FBD-MOH-02',
    from: 'Ballabgarh',
    to: 'Mohna',
    via: 'Hirapur',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '16:30', operator: 'HR' },
      { time: '17:00', operator: 'HR' },
    ],
  },

  // BALLABGARH → MOHNA (via Chhainsa) - PVT - 9 departures
  {
    id: 'FBD-MOH-PVT',
    routeNumber: 'FBD-MOH-03',
    from: 'Ballabgarh',
    to: 'Mohna',
    via: 'Chhainsa',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '07:40', operator: 'PVT' },
      { time: '10:00', operator: 'PVT' },
      { time: '10:30', operator: 'PVT' },
      { time: '12:30', operator: 'PVT' },
      { time: '13:30', operator: 'PVT' },
      { time: '15:30', operator: 'PVT' },
      { time: '16:30', operator: 'PVT' },
      { time: '18:20', operator: 'PVT' },
      { time: '19:00', operator: 'PVT' },
    ],
  },

  // BALLABGARH → NANGLA
  {
    id: 'FBD-NGL-01',
    routeNumber: 'FBD-NGL-01',
    from: 'Ballabgarh',
    to: 'Nangla',
    via: 'Sahabad',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '17:00', operator: 'HR' },
      { time: '17:30', operator: 'HR' },
    ],
  },

  // BALLABGARH → MANJHAWALI
  {
    id: 'FBD-MJH-01',
    routeNumber: 'FBD-MJH-01',
    from: 'Ballabgarh',
    to: 'Manjhawali',
    via: 'Old FBD',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '17:00', operator: 'HR' },
    ],
  },

  // BALLABGARH → MANJHAWALI (via Tigaon)
  {
    id: 'FBD-MJH-02',
    routeNumber: 'FBD-MJH-02',
    from: 'Ballabgarh',
    to: 'Manjhawali',
    via: 'Tigaon',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '17:30', operator: 'HR' },
    ],
  },

  // BALLABGARH → HASSANPUR
  {
    id: 'FBD-HSP-01',
    routeNumber: 'FBD-HSP-01',
    from: 'Ballabgarh',
    to: 'Hassanpur',
    via: 'Palwal, Dighot',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '15:15', operator: 'HR' },
    ],
  },

  // BALLABGARH → PUNHANA
  {
    id: 'FBD-PNH-01',
    routeNumber: 'FBD-PNH-01',
    from: 'Ballabgarh',
    to: 'Punhana',
    via: 'Palwal, Hodal',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '16:00', operator: 'HR' },
    ],
  },

  // BALLABGARH → PUNHANA (via Sohna)
  {
    id: 'FBD-PNH-02',
    routeNumber: 'FBD-PNH-02',
    from: 'Ballabgarh',
    to: 'Punhana',
    via: 'Sohna',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '16:20', operator: 'HR' },
    ],
  },

  // BALLABGARH → PINAGWA
  {
    id: 'FBD-PNG-01',
    routeNumber: 'FBD-PNG-01',
    from: 'Ballabgarh',
    to: 'Pinagwa',
    via: 'Palwal, Hathin',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '14:20', operator: 'HR' },
      { time: '15:20', operator: 'HR' },
      { time: '16:00', operator: 'HR' },
    ],
  },

  // BALLABGARH → GURUGRAM - HR Services (18 departures)
  {
    id: 'FBD-GGN-HR',
    routeNumber: 'FBD-GGN-01',
    from: 'Ballabgarh',
    to: 'Gurugram',
    via: 'BK, Manger',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '05:30', operator: 'HR' },
      { time: '06:01', operator: 'HR' },
      { time: '06:37', operator: 'HR' },
      { time: '07:13', operator: 'HR' },
      { time: '07:31', operator: 'HR' },
      { time: '07:49', operator: 'HR' },
      { time: '08:25', operator: 'HR' },
      { time: '08:43', operator: 'HR' },
      { time: '09:01', operator: 'HR' },
      { time: '09:19', operator: 'HR' },
      { time: '09:55', operator: 'HR' },
      { time: '10:13', operator: 'HR' },
      { time: '10:31', operator: 'HR' },
      { time: '11:00', operator: 'HR' },
      { time: '11:16', operator: 'HR' },
      { time: '12:00', operator: 'HR' },
      { time: '12:30', operator: 'HR' },
      { time: '15:46', operator: 'HR' },
    ],
  },

  // BALLABGARH → GURUGRAM - PVT Services (48 departures - 24/7!)
  {
    id: 'FBD-GGN-PVT',
    routeNumber: 'FBD-GGN-02',
    from: 'Ballabgarh',
    to: 'Gurugram',
    via: 'BK, Manger',
    depot: 'Faridabad',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '00:10', operator: 'PVT' }, { time: '01:10', operator: 'PVT' },
      { time: '02:10', operator: 'PVT' }, { time: '03:10', operator: 'PVT' },
      { time: '04:10', operator: 'PVT' }, { time: '05:10', operator: 'PVT' },
      { time: '06:10', operator: 'PVT' }, { time: '07:10', operator: 'PVT' },
      { time: '08:10', operator: 'PVT' }, { time: '09:10', operator: 'PVT' },
      { time: '10:10', operator: 'PVT' }, { time: '11:10', operator: 'PVT' },
      { time: '12:10', operator: 'PVT' }, { time: '13:10', operator: 'PVT' },
      { time: '14:10', operator: 'PVT' }, { time: '15:10', operator: 'PVT' },
      { time: '16:10', operator: 'PVT' }, { time: '17:10', operator: 'PVT' },
      { time: '18:10', operator: 'PVT' }, { time: '19:10', operator: 'PVT' },
      { time: '20:10', operator: 'PVT' }, { time: '21:10', operator: 'PVT' },
      { time: '22:10', operator: 'PVT' }, { time: '23:10', operator: 'PVT' },
    ],
  },
];

import { BusRoute } from '../types/bus';

// Helper function to parse service days
function parseServiceDays(serviceDays: string): string[] {
  if (serviceDays.toLowerCase().includes('all days') || serviceDays.toLowerCase().includes('daily')) {
    return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  }
  return serviceDays.split(',').map(day => day.trim()).filter(day => day.length > 0);
}

export const nuhRoutes: BusRoute[] = [
  {
    from: 'PUNHANA',
    to: 'CHANDIGARH',
    via: 'ISBT DELHI',
    depot: 'NUH',
    busType: 'Ordinary',
    departureTimes: [
      { time: '04:40', serviceDays: parseServiceDays('All Days'), operator: 'HR' }
    ]
  },
  {
    from: 'NUH',
    to: 'CHANDIGARH',
    via: 'TAURU, ISBT DELHI',
    depot: 'NUH',
    busType: 'Ordinary',
    departureTimes: [
      { time: '04:40', serviceDays: parseServiceDays('All Days'), operator: 'HR' }
    ]
  },
  {
    from: 'NUH',
    to: 'CHANDIGARH',
    via: 'ISBT DELHI',
    depot: 'NUH',
    busType: 'Ordinary',
    departureTimes: [
      { time: '08:30', serviceDays: parseServiceDays('All Days'), operator: 'HR' },
      { time: '11:15', serviceDays: parseServiceDays('All Days'), operator: 'HR' },
      { time: '12:30', serviceDays: parseServiceDays('All Days'), operator: 'HR' }
    ]
  },
  {
    from: 'FIROJPUR JHIRKA',
    to: 'CHANDIGARH',
    via: 'ISBT DELHI',
    depot: 'NUH',
    busType: 'Ordinary',
    departureTimes: [
      { time: '18:30', serviceDays: parseServiceDays('All Days'), operator: 'HR' }
    ]
  },
  {
    from: 'NUH',
    to: 'AJMER',
    via: 'ISBT SKK DELHI',
    depot: 'NUH',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:15', serviceDays: parseServiceDays('All Days'), operator: 'HR' }
    ]
  },
  {
    from: 'NUH',
    to: 'JAIPUR',
    via: 'ISBT SKK DELHI',
    depot: 'NUH',
    busType: 'Ordinary',
    departureTimes: [
      { time: '11:00', serviceDays: parseServiceDays('All Days'), operator: 'HR' },
      { time: '11:40', serviceDays: parseServiceDays('All Days'), operator: 'HR' }
    ]
  },
  {
    from: 'NUH',
    to: 'JAIPUR',
    via: 'ALWAR',
    depot: 'NUH',
    busType: 'Ordinary',
    departureTimes: [
      { time: '06:00', serviceDays: parseServiceDays('All Days'), operator: 'HR' },
      { time: '14:30', serviceDays: parseServiceDays('All Days'), operator: 'HR' }
    ]
  },
  {
    from: 'NUH',
    to: 'BALAJI',
    via: 'ISBT SKK DELHI, SOHNA',
    depot: 'NUH',
    busType: 'Ordinary',
    departureTimes: [
      { time: '08:45', serviceDays: parseServiceDays('All Days'), operator: 'HR' }
    ]
  },
  {
    from: 'NUH',
    to: 'MAHAVIRJI',
    via: 'ALWAR',
    depot: 'NUH',
    busType: 'Ordinary',
    departureTimes: [
      { time: '10:00', serviceDays: parseServiceDays('All Days'), operator: 'HR' }
    ]
  },
  {
    from: 'NUH',
    to: 'BHARATPUR',
    via: 'GURUGRAM, F.PUR JHIRKA',
    depot: 'NUH',
    busType: 'Ordinary',
    departureTimes: [
      { time: '10:30', serviceDays: parseServiceDays('All Days'), operator: 'HR' }
    ]
  },
  {
    from: 'NUH',
    to: 'ALWAR',
    via: 'ISBT SKK DELHI, SOHNA',
    depot: 'NUH',
    busType: 'Ordinary',
    departureTimes: [
      { time: '12:30', serviceDays: parseServiceDays('All Days'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'MATHURA',
    via: 'NUH, HODAL',
    depot: 'NUH',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:10', serviceDays: parseServiceDays('All Days'), operator: 'HR' }
    ]
  },
  {
    from: 'NUH',
    to: 'ALIGARH',
    via: 'PALWAL',
    depot: 'NUH',
    busType: 'Ordinary',
    departureTimes: [
      { time: '08:00', serviceDays: parseServiceDays('All Days'), operator: 'HR' }
    ]
  },
  {
    from: 'NUH',
    to: 'ALWAR',
    via: 'F.PUR JHIRKA',
    depot: 'NUH',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:00', serviceDays: parseServiceDays('All Days'), operator: 'HR' },
      { time: '08:00', serviceDays: parseServiceDays('All Days'), operator: 'HR' },
      { time: '08:30', serviceDays: parseServiceDays('All Days'), operator: 'HR' },
      { time: '08:45', serviceDays: parseServiceDays('All Days'), operator: 'HR' },
      { time: '09:00', serviceDays: parseServiceDays('All Days'), operator: 'HR' },
      { time: '10:15', serviceDays: parseServiceDays('All Days'), operator: 'HR' },
      { time: '15:30', serviceDays: parseServiceDays('All Days'), operator: 'HR' },
      { time: '17:30', serviceDays: parseServiceDays('All Days'), operator: 'HR' }
    ]
  },
  {
    from: 'NUH',
    to: 'DELHI',
    via: 'GURUGRAM',
    depot: 'NUH',
    busType: 'Ordinary',
    departureTimes: [
      { time: '08:40', serviceDays: parseServiceDays('All Days'), operator: 'RAJ' },
      { time: '09:15', serviceDays: parseServiceDays('All Days'), operator: 'RAJ' },
      { time: '09:40', serviceDays: parseServiceDays('All Days'), operator: 'RAJ' },
      { time: '10:00', serviceDays: parseServiceDays('All Days'), operator: 'RAJ' },
      { time: '10:30', serviceDays: parseServiceDays('All Days'), operator: 'RAJ' },
      { time: '11:00', serviceDays: parseServiceDays('All Days'), operator: 'RAJ' },
      { time: '11:30', serviceDays: parseServiceDays('All Days'), operator: 'RAJ' },
      { time: '11:45', serviceDays: parseServiceDays('All Days'), operator: 'RAJ' },
      { time: '12:00', serviceDays: parseServiceDays('All Days'), operator: 'RAJ' }
    ]
  },
  {
    from: 'NUH',
    to: 'ALWAR',
    via: 'F.PUR JHIRKA',
    depot: 'NUH',
    busType: 'Ordinary',
    departureTimes: [
      { time: '12:00', serviceDays: parseServiceDays('All Days'), operator: 'RAJ' },
      { time: '12:30', serviceDays: parseServiceDays('All Days'), operator: 'RAJ' },
      { time: '12:40', serviceDays: parseServiceDays('All Days'), operator: 'RAJ' },
      { time: '13:00', serviceDays: parseServiceDays('All Days'), operator: 'RAJ' },
      { time: '13:30', serviceDays: parseServiceDays('All Days'), operator: 'RAJ' },
      { time: '13:45', serviceDays: parseServiceDays('All Days'), operator: 'RAJ' },
      { time: '16:00', serviceDays: parseServiceDays('All Days'), operator: 'RAJ' },
      { time: '16:30', serviceDays: parseServiceDays('All Days'), operator: 'UP' }
    ]
  },
  {
    from: 'NUH',
    to: 'BHARATPUR',
    via: 'BADKALI, PUNHANA',
    depot: 'NUH',
    busType: 'Ordinary',
    departureTimes: [
      { time: '14:00', serviceDays: parseServiceDays('All Days'), operator: 'RAJ' }
    ]
  },
  {
    from: 'NUH',
    to: 'KOSLI',
    via: 'KULANA',
    depot: 'NUH',
    busType: 'Ordinary',
    departureTimes: [
      { time: '15:30', serviceDays: parseServiceDays('All Days'), operator: 'HR' }
    ]
  },
  {
    from: 'NUH',
    to: 'NARNAUL',
    via: 'REWARI',
    depot: 'NUH',
    busType: 'Ordinary',
    departureTimes: [
      { time: '14:40', serviceDays: parseServiceDays('All Days'), operator: 'HR' }
    ]
  },
  {
    from: 'NUH',
    to: 'GURUGRAM',
    via: 'SOHNA',
    depot: 'NUH',
    busType: 'Ordinary',
    departureTimes: [
      { time: '15:00', serviceDays: parseServiceDays('All Days'), operator: 'HR' },
      { time: '16:00', serviceDays: parseServiceDays('All Days'), operator: 'HR' },
      { time: '17:15', serviceDays: parseServiceDays('All Days'), operator: 'HR' }
    ]
  },
  {
    from: 'NUH',
    to: 'ROHTAK',
    via: 'KULANA',
    depot: 'NUH',
    busType: 'Ordinary',
    departureTimes: [
      { time: '10:40', serviceDays: parseServiceDays('All Days'), operator: 'HR' },
      { time: '12:00', serviceDays: parseServiceDays('All Days'), operator: 'HR' }
    ]
  },
  {
    from: 'NUH',
    to: 'ROHTAK',
    via: 'KMP',
    depot: 'NUH',
    busType: 'Ordinary',
    departureTimes: [
      { time: '14:40', serviceDays: parseServiceDays('All Days'), operator: 'HR' }
    ]
  },
  {
    from: 'NUH',
    to: 'CH. DADRI',
    via: 'KULANA',
    depot: 'NUH',
    busType: 'Ordinary',
    departureTimes: [
      { time: '12:30', serviceDays: parseServiceDays('All Days'), operator: 'HR' }
    ]
  },
  {
    from: 'NUH',
    to: 'JHAJJAR',
    via: 'KULANA',
    depot: 'NUH',
    busType: 'Ordinary',
    departureTimes: [
      { time: '16:00', serviceDays: parseServiceDays('All Days'), operator: 'HR' }
    ]
  },
  {
    from: 'NUH',
    to: 'PALWAL',
    via: 'MINDKOLA',
    depot: 'NUH',
    busType: 'Ordinary',
    departureTimes: [
      { time: '16:00', serviceDays: parseServiceDays('All Days'), operator: 'HR' }
    ]
  },
  {
    from: 'NUH',
    to: 'HODAL',
    via: 'UTAWAR',
    depot: 'NUH',
    busType: 'Ordinary',
    departureTimes: [
      { time: '17:20', serviceDays: parseServiceDays('All Days'), operator: 'HR' }
    ]
  },
  {
    from: 'PUNHANA BUS STAND',
    to: 'NUH',
    via: 'KOT',
    depot: 'NUH',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:15', serviceDays: parseServiceDays('All Days'), operator: 'HR' }
    ]
  },
  {
    from: 'PUNHANA BUS STAND',
    to: 'GURUGRAM',
    via: 'BADKALI',
    depot: 'NUH',
    busType: 'Ordinary',
    departureTimes: [
      { time: '06:30', serviceDays: parseServiceDays('All Days'), operator: 'HR' }
    ]
  },
  {
    from: 'PUNHANA BUS STAND',
    to: 'ALWAR',
    via: 'TIGAON',
    depot: 'NUH',
    busType: 'Ordinary',
    departureTimes: [
      { time: '08:00', serviceDays: parseServiceDays('All Days'), operator: 'HR' }
    ]
  },
  {
    from: 'SAHAPUR',
    to: 'ALWAR',
    via: 'NUH',
    depot: 'NUH',
    busType: 'Ordinary',
    departureTimes: [
      { time: '06:45', serviceDays: parseServiceDays('All Days'), operator: 'HR' }
    ]
  },
  {
    from: 'F.PUR JHIRKA BUS STAND',
    to: 'GURUGRAM',
    via: 'NUH',
    depot: 'NUH',
    busType: 'Ordinary',
    departureTimes: [
      { time: '06:15', serviceDays: parseServiceDays('All Days'), operator: 'HR' }
    ]
  },
  {
    from: 'F.PUR JHIRKA BUS STAND',
    to: 'NUH',
    via: 'BADKALI',
    depot: 'NUH',
    busType: 'Ordinary',
    departureTimes: [
      { time: '09:00', serviceDays: parseServiceDays('All Days'), operator: 'HR' },
      { time: '10:00', serviceDays: parseServiceDays('All Days'), operator: 'HR' }
    ]
  },
  {
    from: 'NUH',
    to: 'F.PUR JHIRKA',
    via: 'BADKALI',
    depot: 'NUH',
    busType: 'Ordinary',
    departureTimes: [
      { time: '08:30', serviceDays: parseServiceDays('All Days'), operator: 'PRIVATE' },
      { time: '09:30', serviceDays: parseServiceDays('All Days'), operator: 'PRIVATE' },
      { time: '10:10', serviceDays: parseServiceDays('All Days'), operator: 'PRIVATE' },
      { time: '11:50', serviceDays: parseServiceDays('All Days'), operator: 'PRIVATE' },
      { time: '12:30', serviceDays: parseServiceDays('All Days'), operator: 'PRIVATE' },
      { time: '13:10', serviceDays: parseServiceDays('All Days'), operator: 'PRIVATE' },
      { time: '14:00', serviceDays: parseServiceDays('All Days'), operator: 'PRIVATE' },
      { time: '15:10', serviceDays: parseServiceDays('All Days'), operator: 'PRIVATE' },
      { time: '15:50', serviceDays: parseServiceDays('All Days'), operator: 'PRIVATE' },
      { time: '17:10', serviceDays: parseServiceDays('All Days'), operator: 'PRIVATE' }
    ]
  },
  {
    from: 'NUH',
    to: 'TAURU',
    via: 'SILKHO',
    depot: 'NUH',
    busType: 'Ordinary',
    departureTimes: [
      { time: '09:30', serviceDays: parseServiceDays('All Days'), operator: 'PRIVATE' },
      { time: '16:00', serviceDays: parseServiceDays('All Days'), operator: 'PRIVATE' }
    ]
  },
  {
    from: 'NUH',
    to: 'PANIPAT',
    via: 'GURUGRAM',
    depot: 'NUH',
    busType: 'Ordinary',
    departureTimes: [
      { time: '13:30', serviceDays: parseServiceDays('All Days'), operator: 'HR' }
    ]
  },
  {
    from: 'NUH',
    to: 'GURUGRAM',
    via: 'SOHNA',
    depot: 'NUH',
    busType: 'Ordinary',
    departureTimes: [
      { time: '12:45', serviceDays: parseServiceDays('All Days'), operator: 'HR' },
      { time: '13:30', serviceDays: parseServiceDays('All Days'), operator: 'HR' },
      { time: '14:00', serviceDays: parseServiceDays('All Days'), operator: 'HR' }
    ]
  },
  {
    from: 'NUH',
    to: 'PALWAL',
    via: 'MINDKOLA',
    depot: 'NUH',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:00', serviceDays: parseServiceDays('All Days'), operator: 'HR' },
      { time: '08:00', serviceDays: parseServiceDays('All Days'), operator: 'HR' },
      { time: '10:00', serviceDays: parseServiceDays('All Days'), operator: 'HR' },
      { time: '13:00', serviceDays: parseServiceDays('All Days'), operator: 'HR' },
      { time: '14:00', serviceDays: parseServiceDays('All Days'), operator: 'HR' },
      { time: '15:00', serviceDays: parseServiceDays('All Days'), operator: 'HR' }
    ]
  },
  {
    from: 'NUH',
    to: 'REWARI',
    via: 'BHIWADI',
    depot: 'NUH',
    busType: 'Ordinary',
    departureTimes: [
      { time: '16:15', serviceDays: parseServiceDays('All Days'), operator: 'HR' },
      { time: '17:15', serviceDays: parseServiceDays('All Days'), operator: 'HR' }
    ]
  },
  {
    from: 'NUH',
    to: 'BHIWANI',
    via: 'KULANA',
    depot: 'NUH',
    busType: 'Ordinary',
    departureTimes: [
      { time: '13:00', serviceDays: parseServiceDays('All Days'), operator: 'HR' }
    ]
  },
  {
    from: 'NUH',
    to: 'SOHNA',
    via: 'REWASAN',
    depot: 'NUH',
    busType: 'Ordinary',
    departureTimes: [
      { time: '10:00', serviceDays: parseServiceDays('All Days'), operator: 'HR' },
      { time: '15:00', serviceDays: parseServiceDays('All Days'), operator: 'HR' }
    ]
  }
];

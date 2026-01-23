import { BusRoute } from '../types/bus';

// Helper function to parse service days
function parseServiceDays(serviceDays: string): string[] {
  if (serviceDays.toLowerCase().includes('all days') || serviceDays.toLowerCase().includes('daily')) {
    return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  }
  return serviceDays.split(',').map(day => day.trim()).filter(day => day.length > 0);
}

export const kalkaRoutes: BusRoute[] = [
  {
    from: 'KALKA',
    to: 'DELHI',
    via: 'CHD.17',
    depot: 'KALKA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '04:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '07:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '10:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KALKA',
    to: 'DADRI',
    via: 'PANCHKULA',
    depot: 'KALKA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '05:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KALKA',
    to: 'DELHI',
    via: 'CHD.17',
    depot: 'KALKA',
    busType: 'HVAC',
    departureTimes: [
      { time: '05:10', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KALKA',
    to: 'REWARI',
    via: 'PANCHKULA',
    depot: 'KALKA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '05:15', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KALKA',
    to: 'DAKHROG',
    via: 'PINJORE',
    depot: 'KALKA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '05:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KALKA',
    to: 'CHD.43-SHIMLA',
    via: 'PINJORE',
    depot: 'KALKA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '05:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '07:45', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '08:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '08:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '09:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KALKA',
    to: 'CHD.43-SHIMLA',
    via: 'PINJORE',
    depot: 'KALKA',
    busType: 'HVAC',
    departureTimes: [
      { time: '09:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KALKA',
    to: 'HISAR',
    via: 'PANCHKULA',
    depot: 'KALKA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '05:50', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KALKA',
    to: 'GAWAHI',
    via: 'PINJORE',
    depot: 'KALKA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '06:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '06:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KALKA',
    to: 'CHD-DEHRADOON',
    via: 'CHD.43',
    depot: 'KALKA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '06:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '06:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KALKA',
    to: 'ROHTAK',
    via: 'PANCHKULA',
    depot: 'KALKA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '06:10', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '08:10', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KALKA',
    to: 'BAIJNATH',
    via: 'PANCHKULA',
    depot: 'KALKA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '06:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KALKA',
    to: 'DELHI',
    via: 'PANCHKULA',
    depot: 'KALKA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '06:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '08:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '11:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KALKA',
    to: 'DELHI',
    via: 'PANCHKULA',
    depot: 'KALKA',
    busType: 'HVAC',
    departureTimes: [
      { time: '12:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '14:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KALKA',
    to: 'MORNI',
    via: 'MALLAH',
    depot: 'KALKA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '06:50', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KALKA',
    to: 'KHOLMOLA',
    via: 'PINJORE',
    depot: 'KALKA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:10', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KALKA',
    to: 'AMBALA CANTT',
    via: 'PANCHKULA',
    depot: 'KALKA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:15', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '09:15', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '09:45', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '13:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '14:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '15:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '17:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '17:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' }
    ]
  },
  {
    from: 'KALKA',
    to: 'JIND',
    via: 'PANCHKULA',
    depot: 'KALKA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KALKA',
    to: 'CHD-PONTA SAHIB',
    via: 'CHD.43',
    depot: 'KALKA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KALKA',
    to: 'BADGODAM',
    via: 'KHERAWALI',
    depot: 'KALKA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KALKA',
    to: 'CHD.43',
    via: 'PINJORE',
    depot: 'KALKA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:35', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '07:50', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '09:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '10:05', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '11:52', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '12:35', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '13:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '14:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '14:50', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '16:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' }
    ]
  },
  {
    from: 'KALKA',
    to: 'JABROT',
    via: 'PINJORE',
    depot: 'KALKA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '08:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KALKA',
    to: 'PREMPURA',
    via: 'PINJORE',
    depot: 'KALKA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '08:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KALKA',
    to: 'NANAKPUR',
    via: 'PINJORE',
    depot: 'KALKA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '08:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KALKA',
    to: 'VIRAT NAGAR',
    via: 'PINJORE',
    depot: 'KALKA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '08:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KALKA',
    to: 'PANCHKULA',
    via: 'PINJORE',
    depot: 'KALKA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '11:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '13:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '14:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '15:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '19:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '19:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KALKA',
    to: 'JAMMU-KATRA',
    via: 'CHD.43',
    depot: 'KALKA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '16:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  }
];

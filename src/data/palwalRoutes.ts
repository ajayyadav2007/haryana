import { BusRoute } from '../types/bus';

// Helper function to parse service days
function parseServiceDays(serviceDays: string): string[] {
  if (serviceDays.toLowerCase().includes('all days') || serviceDays.toLowerCase().includes('daily')) {
    return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  }
  return serviceDays.split(',').map(day => day.trim()).filter(day => day.length > 0);
}

export const palwalRoutes: BusRoute[] = [
  {
    from: 'PALWAL',
    to: 'CHANDIGARH',
    via: 'DELHI',
    depot: 'PALWAL',
    busType: 'Ordinary',
    departureTimes: [
      { time: '03:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '04:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '05:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '06:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '07:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '07:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '09:15', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '12:30', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'HODAL',
    to: 'CHANDIGARH',
    via: 'DELHI',
    depot: 'PALWAL',
    busType: 'Ordinary',
    departureTimes: [
      { time: '04:20', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'HASANPUR',
    to: 'CHANDIGARH',
    via: 'DELHI',
    depot: 'PALWAL',
    busType: 'Ordinary',
    departureTimes: [
      { time: '03:40', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PALWAL',
    to: 'KAITHAL',
    via: 'DELHI',
    depot: 'PALWAL',
    busType: 'Ordinary',
    departureTimes: [
      { time: '05:40', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PALWAL',
    to: 'YAMUNA NAGAR',
    via: 'DELHI',
    depot: 'PALWAL',
    busType: 'Ordinary',
    departureTimes: [
      { time: '05:15', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PALWAL',
    to: 'HARIDWAR',
    via: 'DELHI',
    depot: 'PALWAL',
    busType: 'Ordinary',
    departureTimes: [
      { time: '06:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '11:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PALWAL',
    to: 'JAIPUR',
    via: 'GURUGRAM',
    depot: 'PALWAL',
    busType: 'Ordinary',
    departureTimes: [
      { time: '05:30', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PALWAL',
    to: 'GURUGRAM',
    via: 'SOHNA',
    depot: 'PALWAL',
    busType: 'Ordinary',
    departureTimes: [
      { time: '05:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '05:40', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '06:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '06:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '07:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '07:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '08:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '08:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '11:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '11:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '12:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '13:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '13:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '14:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '14:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '14:50', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '15:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '15:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '16:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '17:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '18:30', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PALWAL',
    to: 'HISSAR',
    via: 'SOHNA',
    depot: 'PALWAL',
    busType: 'Ordinary',
    departureTimes: [
      { time: '05:40', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PALWAL',
    to: 'JHAJJAR',
    via: 'SOHNA',
    depot: 'PALWAL',
    busType: 'Ordinary',
    departureTimes: [
      { time: '11:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '11:30', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PALWAL',
    to: 'ROHTAK',
    via: 'SOHNA',
    depot: 'PALWAL',
    busType: 'Ordinary',
    departureTimes: [
      { time: '12:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '14:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PALWAL',
    to: 'BERI',
    via: 'SOHNA',
    depot: 'PALWAL',
    busType: 'Ordinary',
    departureTimes: [
      { time: '12:50', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PALWAL',
    to: 'BAWAL',
    via: 'SOHNA',
    depot: 'PALWAL',
    busType: 'Ordinary',
    departureTimes: [
      { time: '13:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PALWAL',
    to: 'KALANOUR',
    via: 'SOHNA',
    depot: 'PALWAL',
    busType: 'Ordinary',
    departureTimes: [
      { time: '13:30', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PALWAL',
    to: 'SEHLANGH',
    via: 'SOHNA',
    depot: 'PALWAL',
    busType: 'Ordinary',
    departureTimes: [
      { time: '14:30', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PALWAL',
    to: 'KOSHLI',
    via: 'SOHNA',
    depot: 'PALWAL',
    busType: 'Ordinary',
    departureTimes: [
      { time: '14:50', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PALWAL',
    to: 'KULANA',
    via: 'SOHNA',
    depot: 'PALWAL',
    busType: 'Ordinary',
    departureTimes: [
      { time: '15:30', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PALWAL',
    to: 'BAHADURGARH',
    via: 'SOHNA',
    depot: 'PALWAL',
    busType: 'Ordinary',
    departureTimes: [
      { time: '16:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PALWAL',
    to: 'HASANPUR',
    via: 'KYAROLI',
    depot: 'PALWAL',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '10:30', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PALWAL',
    to: 'HASANPUR',
    via: 'JATOLI',
    depot: 'PALWAL',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '14:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PALWAL',
    to: 'HASANPUR',
    via: 'DHIGHOT',
    depot: 'PALWAL',
    busType: 'Ordinary',
    departureTimes: [
      { time: '08:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '09:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '11:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '12:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '12:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '13:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '14:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '15:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '15:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '16:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '16:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '17:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PALWAL',
    to: 'HASANPUR',
    via: 'BADOLI',
    depot: 'PALWAL',
    busType: 'Ordinary',
    departureTimes: [
      { time: '08:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '11:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '17:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PALWAL',
    to: 'HASANPUR',
    via: 'ASAVATA',
    depot: 'PALWAL',
    busType: 'Ordinary',
    departureTimes: [
      { time: '15:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PALWAL',
    to: 'NUH',
    via: 'MINDKOLA',
    depot: 'PALWAL',
    busType: 'Ordinary',
    departureTimes: [
      { time: '09:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '09:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '12:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '13:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '14:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '15:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '16:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '17:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PALWAL',
    to: 'REWARI',
    via: 'SOHNA',
    depot: 'PALWAL',
    busType: 'Ordinary',
    departureTimes: [
      { time: '11:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PALWAL',
    to: 'DHARUHERA',
    via: 'SOHNA',
    depot: 'PALWAL',
    busType: 'Ordinary',
    departureTimes: [
      { time: '05:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '05:40', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '05:50', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '06:00', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '06:10', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '06:20', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '06:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '06:40', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '06:50', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '07:00', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '07:10', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '07:20', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '07:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '07:40', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '07:50', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '08:00', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '08:10', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '08:20', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '08:30', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '08:40', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '08:50', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '09:00', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '09:10', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '09:20', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '09:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '09:40', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '09:50', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '10:00', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '10:10', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '10:20', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '10:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '10:40', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '10:50', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '11:00', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '11:10', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '11:20', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '11:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '11:40', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '11:50', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '12:00', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '12:10', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '12:20', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '12:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '12:40', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '12:50', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '13:00', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '13:10', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '13:20', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '13:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '13:40', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '13:50', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '14:00', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '14:10', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '14:20', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '14:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '14:40', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '14:50', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '15:00', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '15:10', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '15:20', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '15:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '15:40', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '15:50', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '16:00', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '16:10', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '16:20', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '16:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '16:40', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '16:50', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '17:00', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '17:10', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '17:20', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '17:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '17:40', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '17:50', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '18:00', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '18:10', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '18:20', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '18:30', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '18:40', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '18:50', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '19:00', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '19:10', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '19:20', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '19:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '19:40', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '19:50', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '20:00', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' }
    ]
  },
  {
    from: 'PALWAL',
    to: 'HODAL',
    via: 'MITROL',
    depot: 'PALWAL',
    busType: 'Ordinary',
    departureTimes: [
      { time: '15:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '16:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '17:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '17:10', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '17:20', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '17:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '18:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PALWAL',
    to: 'UTAWAR',
    via: 'HATHIN',
    depot: 'PALWAL',
    busType: 'Ordinary',
    departureTimes: [
      { time: '08:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '13:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '17:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '18:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PALWAL',
    to: 'HATHIN',
    via: 'DURGAPUR',
    depot: 'PALWAL',
    busType: 'Ordinary',
    departureTimes: [
      { time: '18:10', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PALWAL',
    to: 'GURVARI',
    via: 'KITHWARI',
    depot: 'PALWAL',
    busType: 'Ordinary',
    departureTimes: [
      { time: '08:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '14:30', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PALWAL',
    to: 'MOHNA',
    via: 'ALALPUR',
    depot: 'PALWAL',
    busType: 'Ordinary',
    departureTimes: [
      { time: '15:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PALWAL',
    to: 'REWARI',
    via: 'TAORU',
    depot: 'PALWAL',
    busType: 'Ordinary',
    departureTimes: [
      { time: '11:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '17:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PALWAL',
    to: 'REWARI',
    via: 'GURUGRAM',
    depot: 'PALWAL',
    busType: 'Ordinary',
    departureTimes: [
      { time: '17:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PALWAL',
    to: 'NARNOUL',
    via: 'TAORU, REWARI',
    depot: 'PALWAL',
    busType: 'Ordinary',
    departureTimes: [
      { time: '13:15', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '14:10', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'HASSANPUR',
    to: 'PALWAL',
    via: 'DHIGHOT',
    depot: 'PALWAL',
    busType: 'Ordinary',
    departureTimes: [
      { time: '03:40', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '05:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '05:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '07:15', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '07:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '08:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '08:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '09:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '11:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '12:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '13:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '14:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '16:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'HASSANPUR',
    to: 'PALWAL',
    via: 'KYAROLI',
    depot: 'PALWAL',
    busType: 'Ordinary',
    departureTimes: [
      { time: '05:45', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '08:45', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '12:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'HASSANPUR',
    to: 'PALWAL',
    via: 'JATOLI',
    depot: 'PALWAL',
    busType: 'Ordinary',
    departureTimes: [
      { time: '06:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '09:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '15:30', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'HASSANPUR',
    to: 'PALWAL',
    via: 'BADOLI',
    depot: 'PALWAL',
    busType: 'Ordinary',
    departureTimes: [
      { time: '06:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '07:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '10:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '13:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'HASSANPUR',
    to: 'BALLABGARH',
    via: 'DHIGHOT',
    depot: 'PALWAL',
    busType: 'Ordinary',
    departureTimes: [
      { time: '05:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'HODAL',
    to: 'PALWAL',
    via: 'MITROL',
    depot: 'PALWAL',
    busType: 'Ordinary',
    departureTimes: [
      { time: '04:20', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '05:20', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '07:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '07:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '08:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '08:15', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '08:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '09:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'HODAL',
    to: 'BALLABGARH',
    via: 'MITROL',
    depot: 'PALWAL',
    busType: 'Ordinary',
    departureTimes: [
      { time: '08:15', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PALWAL',
    to: 'PINGAVA',
    via: 'HATHIN',
    depot: 'PALWAL',
    busType: 'Ordinary',
    departureTimes: [
      { time: '08:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '12:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '15:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '15:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '17:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  }
];

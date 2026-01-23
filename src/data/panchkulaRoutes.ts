import { BusRoute } from '../types/bus';

// Helper function to parse service days
function parseServiceDays(serviceDays: string): string[] {
  if (serviceDays.toLowerCase().includes('all days') || serviceDays.toLowerCase().includes('daily')) {
    return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  }
  return serviceDays.split(',').map(day => day.trim()).filter(day => day.length > 0);
}

export const panchkulaRoutes: BusRoute[] = [
  {
    from: 'PANCHKULA',
    to: 'FATHEBAD',
    via: 'AMBALA CITY',
    depot: 'PANCHKULA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '03:50', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'PANCHKULA',
    to: 'DELHI',
    via: 'AMBALA CANTT',
    depot: 'PANCHKULA',
    busType: 'HVAC',
    departureTimes: [
      { time: '05:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '09:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '11:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '12:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '13:15', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '14:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '15:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'PANCHKULA',
    to: 'DADRI',
    via: 'ROHTAK',
    depot: 'PANCHKULA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '05:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'PANCHKULA',
    to: 'REWARI',
    via: 'ROHTAK',
    depot: 'PANCHKULA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '05:45', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'PANCHKULA',
    to: 'ROHTAK',
    via: 'AMBALA CANTT',
    depot: 'PANCHKULA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '06:05', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '06:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '07:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '08:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '10:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '13:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '14:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' }
    ]
  },
  {
    from: 'PANCHKULA',
    to: 'AMRITSAR',
    via: 'CHD.43',
    depot: 'PANCHKULA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '06:10', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '07:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'PANCHKULA',
    to: 'SHAHTALAI',
    via: 'CHD.43',
    depot: 'PANCHKULA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '06:10', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'PANCHKULA',
    to: 'HISAR',
    via: 'AMBALA CITY',
    depot: 'PANCHKULA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '06:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '08:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '09:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '12:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '14:10', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'PANCHKULA',
    to: 'DHAMAN',
    via: 'THAPLI',
    depot: 'PANCHKULA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '06:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'PANCHKULA',
    to: 'TALWARA',
    via: 'CHD.43',
    depot: 'PANCHKULA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '06:25', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'PANCHKULA',
    to: 'CHD.17',
    via: 'H.BOARD',
    depot: 'PANCHKULA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '06:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '07:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '10:45', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '11:15', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '11:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '12:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '13:15', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '13:45', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '14:45', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '15:45', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '16:15', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '16:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '18:45', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'PANCHKULA',
    to: 'SHAHZADPUR',
    via: 'BARWALA',
    depot: 'PANCHKULA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '06:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '09:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '09:50', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '10:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '13:15', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '14:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '18:45', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '19:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'PANCHKULA',
    to: 'DELHI',
    via: 'AMBALA CANTT',
    depot: 'PANCHKULA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '06:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '07:15', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '08:45', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '10:15', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '11:45', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '17:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'PANCHKULA',
    to: 'MANDHANA',
    via: 'NADA SAHIB',
    depot: 'PANCHKULA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '06:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'PANCHKULA',
    to: 'BAIJNATH',
    via: 'CHD.43',
    depot: 'PANCHKULA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '06:50', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'PANCHKULA',
    to: 'BATALA',
    via: 'CHD.43',
    depot: 'PANCHKULA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'PANCHKULA',
    to: 'NARAINGARH',
    via: 'RAIPUR RANI',
    depot: 'PANCHKULA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '07:09', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '07:27', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '07:36', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '07:54', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '08:03', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '08:12', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '08:21', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '08:39', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '08:48', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '09:06', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '09:15', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '09:24', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '09:33', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '09:42', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '10:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '10:09', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '10:18', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '10:27', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '10:36', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '10:54', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '11:03', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '11:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '11:21', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '11:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '11:48', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '11:57', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '12:15', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '12:24', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '12:42', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '12:51', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '13:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '13:09', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '13:27', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '13:36', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '13:54', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '14:02', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '14:18', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '14:26', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '14:34', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '14:42', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '14:50', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '15:14', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '15:22', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '15:34', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '15:46', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '16:02', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '16:10', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '16:34', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '16:42', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '16:58', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '17:14', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '17:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '17:38', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '17:46', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '18:02', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '18:18', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '18:26', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '18:50', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '18:58', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '19:22', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '19:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '19:54', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '20:02', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' }
    ]
  },
  {
    from: 'PANCHKULA',
    to: 'SONIPAT',
    via: 'AMBALA CANTT',
    depot: 'PANCHKULA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '14:45', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'PANCHKULA',
    to: 'TIKKARTAAL-BARAT',
    via: 'THAPLI',
    depot: 'PANCHKULA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'PANCHKULA',
    to: 'KALKA',
    via: 'PINJORE',
    depot: 'PANCHKULA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:15', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '08:05', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '10:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '11:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '11:45', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '12:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '13:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '14:45', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '15:50', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '16:15', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '18:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '18:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '18:45', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '19:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' }
    ]
  },
  {
    from: 'PANCHKULA',
    to: 'DEHRADOON',
    via: 'NARAINGARH',
    depot: 'PANCHKULA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:18', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '07:45', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '08:57', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '13:45', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'PANCHKULA',
    to: 'BHIWANI',
    via: 'AMBALA CITY',
    depot: 'PANCHKULA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '09:15', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'PANCHKULA',
    to: 'CHD.43',
    via: 'H.BOARD',
    depot: 'PANCHKULA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '08:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '09:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '11:50', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '13:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'PANCHKULA',
    to: 'NARAINGARH',
    via: 'SHAHZADPUR',
    depot: 'PANCHKULA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:45', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '08:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '10:45', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '11:15', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '11:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '12:15', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '15:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '16:15', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '17:45', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'PANCHKULA',
    to: 'JIND',
    via: 'AMBALA CITY',
    depot: 'PANCHKULA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:50', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '12:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'PANCHKULA',
    to: 'AMBALA CANTT',
    via: 'RAMGARH',
    depot: 'PANCHKULA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:55', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '09:55', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '10:25', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '13:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '14:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '15:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '17:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '18:10', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' }
    ]
  },
  {
    from: 'PANCHKULA',
    to: 'SAHA',
    via: 'SHAHZADPUR',
    depot: 'PANCHKULA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '08:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '08:45', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '09:45', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '10:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '12:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '12:45', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '13:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '13:45', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '16:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '16:45', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '17:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' },
      { time: '18:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'PRIVATE' }
    ]
  },
  {
    from: 'PANCHKULA',
    to: 'ZIRAKPUR',
    via: 'AMARTEX CHOWK',
    depot: 'PANCHKULA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '08:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'ELECTRIC' },
      { time: '08:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'ELECTRIC' },
      { time: '08:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'ELECTRIC' },
      { time: '09:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'ELECTRIC' },
      { time: '09:45', serviceDays: parseServiceDays('ALL DAYS'), operator: 'ELECTRIC' },
      { time: '10:10', serviceDays: parseServiceDays('ALL DAYS'), operator: 'ELECTRIC' },
      { time: '10:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'ELECTRIC' },
      { time: '10:50', serviceDays: parseServiceDays('ALL DAYS'), operator: 'ELECTRIC' },
      { time: '11:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'ELECTRIC' },
      { time: '12:10', serviceDays: parseServiceDays('ALL DAYS'), operator: 'ELECTRIC' },
      { time: '12:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'ELECTRIC' },
      { time: '13:10', serviceDays: parseServiceDays('ALL DAYS'), operator: 'ELECTRIC' },
      { time: '13:35', serviceDays: parseServiceDays('ALL DAYS'), operator: 'ELECTRIC' },
      { time: '14:15', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '14:25', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '14:55', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '15:05', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '15:35', serviceDays: parseServiceDays('ALL DAYS'), operator: 'ELECTRIC' },
      { time: '15:45', serviceDays: parseServiceDays('ALL DAYS'), operator: 'ELECTRIC' },
      { time: '16:25', serviceDays: parseServiceDays('ALL DAYS'), operator: 'ELECTRIC' },
      { time: '16:45', serviceDays: parseServiceDays('ALL DAYS'), operator: 'ELECTRIC' },
      { time: '17:25', serviceDays: parseServiceDays('ALL DAYS'), operator: 'ELECTRIC' },
      { time: '17:45', serviceDays: parseServiceDays('ALL DAYS'), operator: 'ELECTRIC' },
      { time: '18:15', serviceDays: parseServiceDays('ALL DAYS'), operator: 'ELECTRIC' },
      { time: '18:55', serviceDays: parseServiceDays('ALL DAYS'), operator: 'ELECTRIC' },
      { time: '19:35', serviceDays: parseServiceDays('ALL DAYS'), operator: 'ELECTRIC' },
      { time: '20:05', serviceDays: parseServiceDays('ALL DAYS'), operator: 'ELECTRIC' },
      { time: '20:35', serviceDays: parseServiceDays('ALL DAYS'), operator: 'ELECTRIC' }
    ]
  },
  {
    from: 'PANCHKULA',
    to: 'CHD.17',
    via: 'H.BOARD',
    depot: 'PANCHKULA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '08:10', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'PANCHKULA',
    to: 'YAMUNANAGAR',
    via: 'SHAHZADPUR',
    depot: 'PANCHKULA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '08:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '16:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'PANCHKULA',
    to: 'BADIYAL',
    via: 'MANDHNA',
    depot: 'PANCHKULA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:15', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '08:45', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '12:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '18:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'PANCHKULA',
    to: 'PATIALA',
    via: 'ZIRAKPUR',
    depot: 'PANCHKULA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '09:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '17:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'PANCHKULA',
    to: 'PONTA SAHIB',
    via: 'NARAINGARH',
    depot: 'PANCHKULA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '09:51', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'PANCHKULA',
    to: 'NIMWALA',
    via: 'MANDHNA',
    depot: 'PANCHKULA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '10:10', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '13:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '16:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'PANCHKULA',
    to: 'MORNI',
    via: 'THAPLI',
    depot: 'PANCHKULA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '11:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '12:15', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '13:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'PANCHKULA',
    to: 'BAHADURGARH',
    via: 'AMBALA CANTT',
    depot: 'PANCHKULA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '11:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'PANCHKULA',
    to: 'RAIPUR RANI',
    via: 'RAMGARH',
    depot: 'PANCHKULA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '13:18', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'PANCHKULA',
    to: 'TOHANA',
    via: 'AMBALA CITY',
    depot: 'PANCHKULA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '13:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'PANCHKULA',
    to: 'RAIPUR RANI',
    via: 'KHETPURALI',
    depot: 'PANCHKULA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '14:10', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'PANCHKULA',
    to: 'TIKKARTAAL',
    via: 'THAPLI',
    depot: 'PANCHKULA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '14:50', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'PANCHKULA',
    to: 'FARIDABAD',
    via: 'AMBALA CANTT',
    depot: 'PANCHKULA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '16:15', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'PANCHKULA',
    to: 'SADHURA',
    via: 'RAIPUR RANI',
    depot: 'PANCHKULA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '16:18', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'PANCHKULA',
    to: 'KESRI',
    via: 'SHAHZADPUR',
    depot: 'PANCHKULA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '16:25', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'PANCHKULA',
    to: 'JAMMU-KATRA',
    via: 'CHD.43',
    depot: 'PANCHKULA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '17:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'PANCHKULA',
    to: 'NARAINGARH',
    via: 'RAIPUR RANI',
    depot: 'PANCHKULA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '17:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'PANCHKULA',
    to: 'BADIYAL',
    via: 'THAPLI',
    depot: 'PANCHKULA',
    busType: 'Ordinary',
    departureTimes: [
      { time: '17:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '19:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  }
];

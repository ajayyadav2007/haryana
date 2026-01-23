import { BusRoute } from '../types/bus';

// Helper function to parse service days
function parseServiceDays(serviceDays: string): string[] {
  if (serviceDays.toLowerCase().includes('all days') || serviceDays.toLowerCase().includes('daily')) {
    return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  }
  return serviceDays.split(',').map(day => day.trim()).filter(day => day.length > 0);
}

export const rewariRoutes: BusRoute[] = [
  // Rajasthan Routes - Jaipur
  {
    from: 'REWARI',
    to: 'JAIPUR',
    via: 'KOTPUTLI',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '04:50', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '05:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '06:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '06:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '06:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '07:10', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '07:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '08:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '08:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '08:50', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '09:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '10:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '11:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '12:50', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '13:10', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '15:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '16:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '17:10', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'KOTA',
    via: 'JAIPUR',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '09:10', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '09:50', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '10:50', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '11:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '12:10', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'AJMER',
    via: 'JAIPUR',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '14:15', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'KOPAR',
    via: 'NARNAUL',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '19:10', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'KOTKASIM',
    via: 'BOLNI',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:10', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '08:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '09:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '10:50', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '11:55', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '13:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '14:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '14:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '15:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '17:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '17:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '19:10', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'ALWAR',
    via: 'KOTKASIM',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '09:15', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '11:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '16:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'ALWAR',
    via: 'BOLNI',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '13:10', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'BALAJI',
    via: 'TIJARA, ALWAR',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '13:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  // Haryana Regional Routes - Kosli
  {
    from: 'REWARI',
    to: 'KOSLI',
    via: 'JATUSANA',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '06:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '07:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '07:50', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '08:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '09:10', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '09:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '10:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '11:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '11:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '12:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '12:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '13:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '14:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '16:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '17:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '18:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'MUNDHARA',
    via: 'JATUSANA',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '16:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'LILODH',
    via: 'KOSLI',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '17:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'KOSLI',
    via: 'BERLI',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '19:15', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  // Narnaul Routes
  {
    from: 'REWARI',
    to: 'NARNAUL',
    via: 'KUND, ATELI',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '06:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '06:55', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '08:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '08:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '08:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '08:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '09:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '09:10', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '09:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '09:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '10:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '10:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '10:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '10:50', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '11:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '11:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '11:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '12:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '12:50', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '13:10', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '13:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '14:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '14:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '15:55', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '16:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '17:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '18:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '22:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'ATELI',
    via: 'KUND',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '17:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'KHATUSYAM',
    via: 'NARNAUL',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '09:50', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '11:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'BIKANER',
    via: 'NARNAUL',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '12:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'JUNJHUNU',
    via: 'NARNAUL',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '14:26', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  // Mahendergarh Routes
  {
    from: 'REWARI',
    to: 'MAHENDERGARH',
    via: 'DAHINA',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '06:08', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '17:01', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '17:49', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '18:13', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '18:37', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '19:01', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '19:49', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '20:13', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'BHIWANI',
    via: 'KANINA',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '06:32', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'MAHENDERGARH',
    via: 'KANINA',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '08:08', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '08:32', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '08:56', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '09:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '09:44', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '10:08', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '10:32', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '10:56', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '11:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '11:44', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '12:32', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '12:56', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '13:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '13:44', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '14:08', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '14:32', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '14:56', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '15:25', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '15:49', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '16:13', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '16:37', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '17:25', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'DADRI',
    via: 'KANINA',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:44', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'BAHU-JHOLRI',
    via: 'KANINA',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '12:08', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '17:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  // NCR Routes
  {
    from: 'REWARI',
    to: 'AGRA',
    via: 'SOHNA',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '06:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '06:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'MATHURA',
    via: 'SOHNA',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '06:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'NUH',
    via: 'TAURU',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:10', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '07:50', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'ALIGARH',
    via: 'SOHNA',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'PALWAL',
    via: 'SOHNA',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '08:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '08:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '08:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '08:50', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '09:50', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '11:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '13:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '13:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'SOHNA',
    via: 'TAURU',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '09:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '10:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '11:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'FARIDABAD',
    via: 'SOHNA',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '12:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'HATHRAS (UP)',
    via: 'SOHNA',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '14:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'UP' }
    ]
  },
  {
    from: 'REWARI',
    to: 'AKERA',
    via: 'BHIWADI',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '14:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '16:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'PATAUDI',
    via: 'KAKORIYA',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '07:54', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '08:48', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '09:42', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '10:36', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '11:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '12:22', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '13:18', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '14:12', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '15:06', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '16:54', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'PATUDI',
    via: 'MEERPUR',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '17:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'CHANDIGARH',
    via: 'PATAUDI',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '19:15', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  // Rohtak Routes
  {
    from: 'REWARI',
    to: 'CHANDIGARH',
    via: 'ROHTAK',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '04:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '05:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'ROHTAK',
    via: 'JHAJJAR',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '08:10', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '09:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '09:15', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '09:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '10:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '10:10', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '10:34', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '10:58', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '11:46', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '12:10', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '12:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '12:58', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '13:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '13:58', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '14:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '14:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '15:10', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '15:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '15:54', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '16:22', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '16:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '18:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '22:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  // Delhi & Gurugram Routes
  {
    from: 'REWARI',
    to: 'MURADABAD',
    via: 'DELHI',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '05:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'GURUGRAM',
    via: 'DHARUHERA',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '05:10', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '06:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '06:15', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '07:10', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'SIMLA',
    via: 'DELHI',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '06:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'CHANDIGARH',
    via: 'DELHI',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '08:10', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '08:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '10:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '14:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'DK DELHI',
    via: 'GURUGRAM',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '04:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'DELHI',
    via: 'GURUGRAM',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '05:45', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '05:55', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '06:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '06:32', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '07:10', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '07:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '08:15', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '08:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '09:10', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '09:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '09:51', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '10:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '11:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '12:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '12:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '16:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '17:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '17:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '18:10', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'HARIDAWAR',
    via: 'DELHI',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '12:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'JAMMU KATRA',
    via: 'DELHI',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '15:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'JALANDHAR',
    via: 'DELHI',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '18:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  // Local Village Routes
  {
    from: 'REWARI',
    to: 'NANDHA',
    via: 'KHORI',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '17:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'BAWWA',
    via: 'DAHINA',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '17:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'KANUKA',
    via: 'RAJYAKI',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '17:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'DAWANA',
    via: 'MUNDI',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '17:15', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'MALYAKI',
    via: 'NOORGARH',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '17:15', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'BOHKA',
    via: 'KUND',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '17:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'BHATSANA',
    via: 'DHARUHERA',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '17:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'MUMTAJPUR',
    via: 'GARHI',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '17:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'TAKRI',
    via: 'BHARAWAS',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '17:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'RAJGARH',
    via: 'BANIPUR CHOWK',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '17:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'KHOL',
    via: 'AHROD',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '17:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'KHANDORA',
    via: 'BANIPUR CHOWK',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '17:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'DAHINA',
    via: 'MANDOLA',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '17:50', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'BABROLI',
    via: 'JATUSANA',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '17:45', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  // KOSLI SUB-DEPOT ROUTES
  {
    from: 'KOSLI',
    to: 'JHAJJAR',
    via: 'CHUCHAKWAS',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '05:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '06:14', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '07:42', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KOSLI',
    to: 'JHAJJAR',
    via: 'SUBANA',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '05:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '11:08', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '13:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '13:56', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KOSLI',
    to: 'JHAJJAR',
    via: 'GUDYANI',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:24', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KOSLI',
    to: 'JHAJJAR',
    via: 'DHAKLA, SUBANA',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '08:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '10:12', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KOSLI',
    to: 'JHAJJAR',
    via: 'DHAROLI, SUBANA',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '08:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KOSLI',
    to: 'JHAJJAR',
    via: 'MATANHEL, CHUCHAKWAS',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '08:26', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '09:10', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '10:58', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '11:22', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '12:06', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '12:50', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '13:34', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '14:18', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '15:02', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KOSLI',
    to: 'JHAJJAR',
    via: 'GUDYANI, SUBANA',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '09:16', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '12:04', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KOSLI',
    to: 'GURUGRAM',
    via: 'PATAUDI',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '05:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '05:25', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '06:25', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '07:25', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '07:55', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '10:25', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '10:55', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '11:25', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '11:55', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '12:25', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '12:55', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '13:25', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KOSLI',
    to: 'MURADABAD',
    via: 'PATAUDI',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '05:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KOSLI',
    to: 'AGRA',
    via: 'PATAUDI',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '05:55', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KOSLI',
    to: 'NUH',
    via: 'PATAUDI',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '06:55', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KOSLI',
    to: 'FARIDABAD',
    via: 'PATAUDI',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '08:25', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KOSLI',
    to: 'PALWAL',
    via: 'PATAUDI',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '08:55', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KOSLI',
    to: 'CHARKHI DADRI',
    via: 'BAHU-JHOLRI',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '14:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KOSLI',
    to: 'CHARKHI DADRI',
    via: 'SASROLI',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '09:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '11:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '12:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '13:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '15:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '17:15', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KOSLI',
    to: 'JAIPUR',
    via: 'KUND, BAHROD',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '06:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KOSLI',
    to: 'CHANDIGARH',
    via: 'ROHTAK PANIPAT',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '05:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '09:10', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KOSLI',
    to: 'ROHTAK',
    via: 'BERI, DIGHAL',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '05:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '06:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '07:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '10:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '11:25', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '12:50', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '14:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '15:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '15:50', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '16:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '18:10', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KOSLI',
    to: 'KHATUSHYAM',
    via: 'KANINA, M/GARH',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '06:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KOSLI',
    to: 'MAHENDER GARH',
    via: 'NAHAR, KANINA',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '09:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KOSLI',
    to: 'MAHENDER GARH',
    via: 'NAHAR',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '16:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KOSLI',
    to: 'REWARI',
    via: 'JATUSANA',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '05:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '06:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '07:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '07:25', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '07:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '08:15', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '08:50', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '09:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '09:50', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '10:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '11:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '12:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '12:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '13:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '13:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '14:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '15:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '15:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '16:15', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '17:15', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '18:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KOSLI',
    to: 'ALWAR',
    via: 'JATUSANA, REWARI',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '06:30', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KOSLI',
    to: 'REWARI',
    via: 'BERLI',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:50', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' },
      { time: '10:20', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KOSLI',
    to: 'REWARI',
    via: 'JATUSANA, IGU MEERPUR',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '08:00', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KOSLI',
    to: 'REWARI',
    via: 'PALAHAWAS',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '10:10', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KOSLI',
    to: 'REWARI',
    via: 'BABDOLI, JATUSANA',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '13:15', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  },
  {
    from: 'KOSLI',
    to: 'REWARI',
    via: 'GURAWARA',
    depot: 'REWARI',
    busType: 'Ordinary',
    departureTimes: [
      { time: '13:40', serviceDays: parseServiceDays('ALL DAYS'), operator: 'HR' }
    ]
  }
];

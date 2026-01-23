import { BusRoute } from '../types/bus';

// Helper function to parse service days
function parseServiceDays(serviceDays: string): string[] {
  if (serviceDays.toLowerCase().includes('all days') || serviceDays.toLowerCase().includes('daily')) {
    return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  }
  return serviceDays.split(',').map(day => day.trim()).filter(day => day.length > 0);
}

export const panipatRoutes: BusRoute[] = [
  // INTER STATE ROUTES - Uttarakhand (Haridwar, Dehradun, etc.)
  {
    from: 'PANIPAT',
    to: 'HARIDWAR',
    via: 'SHAMLI',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '05:10', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '05:40', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '07:20', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '08:45', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '09:20', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '09:45', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '10:45', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '11:40', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '13:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '14:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '14:15', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '15:15', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '15:45', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '16:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '17:40', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '21:20', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'ROHTAK',
    to: 'HARIDWAR',
    via: 'PANIPAT',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '06:10', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '06:20', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '15:30', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'SONIPAT',
    to: 'HARIDWAR',
    via: 'PANIPAT',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '06:50', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '12:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '13:30', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'JIND',
    to: 'HARIDWAR',
    via: 'PANIPAT',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:35', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '08:05', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '10:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '11:55', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'JHAJJAR',
    to: 'HARIDWAR',
    via: 'PANIPAT',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '08:15', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'DADRI',
    to: 'HARIDWAR',
    via: 'PANIPAT',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '11:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'BHIWANI',
    to: 'HARIDWAR',
    via: 'PANIPAT',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '12:25', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '14:30', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'HISAR',
    to: 'HARIDWAR',
    via: 'PANIPAT',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '13:15', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'FATHEABAD',
    to: 'HARIDWAR',
    via: 'PANIPAT',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '23:05', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'KOTHDWAR',
    via: 'BIJNOR',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '06:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'KATHGODAM',
    via: 'BIJNOR',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:30', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'RUDERPUR',
    via: 'KASHIPUR',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '08:30', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'DEHRADUN',
    via: 'SHARNPUR',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '06:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '08:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'SONIPAT',
    to: 'DEHRADUN',
    via: 'PANIPAT',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '06:50', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'JIND',
    to: 'DEHRADUN',
    via: 'PANIPAT',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '09:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'BHIWANI',
    to: 'DEHRADUN',
    via: 'PANIPAT',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '11:15', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'ROHTAK',
    to: 'DEHRADUN',
    via: 'PANIPAT',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '16:10', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  // Uttar Pradesh Routes
  {
    from: 'PANIPAT',
    to: 'ALIGARH',
    via: 'NOIDA',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '05:40', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'MEERUT',
    via: 'KANDHLA',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '06:30', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'BIJNOR',
    via: 'SHAMLI',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '06:40', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'SHARNPUR',
    via: 'THANA BHAWAN',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '08:45', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'BARELY',
    via: 'BIJNOR',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '10:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'SHAMLI',
    via: 'KERINA',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '00:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  // Rajasthan Routes
  {
    from: 'PANIPAT',
    to: 'ALWAR',
    via: 'SOHANA',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '05:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'ALWAR',
    via: 'TIJARA',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '05:30', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'KAITHAL',
    to: 'PUSHKER',
    via: 'PANIPAT',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '06:45', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'BALAJI',
    via: 'MATHURA',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'AJMER',
    via: 'KOTHPUTALI',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:10', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'SH SALASAR JI',
    via: 'HANUMANGARH',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:40', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '09:20', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'CHANDIGARH',
    to: 'JAIPUR',
    via: 'PANIPAT',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '08:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'KAITHAL',
    to: 'JAIPUR',
    via: 'PANIPAT',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '10:25', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'JAIPUR',
    via: 'KOTHPUTALI',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '11:30', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  // Punjab Routes
  {
    from: 'PANIPAT',
    to: 'LUDHIANA',
    via: 'AMBALA',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '05:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'SONIPAT',
    to: 'LUDHIANA',
    via: 'AMBALA',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '08:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'KARNAL',
    to: 'LUDHIANA',
    via: 'AMBALA',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '11:35', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '12:10', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'JHAJJAR',
    to: 'LUDHIANA',
    via: 'AMBALA',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '12:25', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'DELHI',
    to: 'LUDHIANA',
    via: 'AMBALA',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '13:15', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '14:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '14:40', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '15:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '15:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '16:10', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PEHWA',
    to: 'LUDHIANA',
    via: 'AMBALA',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '13:45', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'GURUGRAM',
    to: 'LUDHIANA',
    via: 'AMBALA',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '17:50', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'KURUSHETRA',
    to: 'AMRITSAR',
    via: 'AMBALA',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '09:30', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'DELHI',
    to: 'AMRITSAR',
    via: 'AMBALA',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '12:15', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'PATIALA',
    via: 'AMBALA',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '09:35', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'KURUSHETRA',
    to: 'PATIALA',
    via: 'AMBALA',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '14:30', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'DERABYAS',
    via: 'AMBALA',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '13:15', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'ROHTAK',
    to: 'JALHENDER',
    via: 'AMBALA',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '09:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '09:55', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'KARNAL',
    to: 'JALHENDER',
    via: 'AMBALA',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '12:40', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'JHAJJAR',
    to: 'JALHENDER',
    via: 'AMBALA',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '13:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'DELHI',
    to: 'HOSIYARPUR',
    via: 'AMBALA',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '09:45', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  // Himachal Pradesh Routes
  {
    from: 'PANIPAT',
    to: 'BEJNATH',
    via: 'UNA',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '11:10', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'RAMPUR',
    via: 'SHIMLA',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '19:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'SONIPAT',
    to: 'SUJANPUR',
    via: 'CHANDIGARH',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '06:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'SONIPAT',
    to: 'SHIMLA',
    via: 'CHANDIGARH',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:50', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '10:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'SHIMLA',
    via: 'CHANDIGARH',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '11:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'DELHI',
    to: 'SHIMLA',
    via: 'CHANDIGARH',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '11:30', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'REWARI',
    to: 'MANALI',
    via: 'CHANDIGARH',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '10:10', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '17:10', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'JHAJJAR',
    to: 'BEJNATH',
    via: 'CHANDIGARH',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '12:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '22:45', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'FARIDABAD',
    to: 'BEJNATH',
    via: 'CHANDIGARH',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '20:50', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  // J&K Routes
  {
    from: 'SONIPAT',
    to: 'KATRA',
    via: 'JALHENDER',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '11:45', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '14:55', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'KATRA',
    via: 'JALHENDER',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '21:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'DELHI',
    to: 'JAMMU',
    via: 'JALHENDER',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '08:30', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  // Chandigarh & Delhi Routes
  {
    from: 'PANIPAT',
    to: 'DELHI',
    via: 'AMBALA',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '08:05', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'CHANDIGARH',
    via: 'AMBALA',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '05:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '08:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '12:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '12:45', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '21:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  // INTER DISTRICT ROUTES
  {
    from: 'PANIPAT',
    to: 'SIRSA',
    via: 'HISAR',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '04:50', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '05:50', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '06:50', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '07:40', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'ASSANDH',
    via: 'KOHAND',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '05:34', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '05:47', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '06:00', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '06:13', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '06:26', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '06:39', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '06:52', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '07:05', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '07:18', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '07:31', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '07:44', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '07:57', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '08:10', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '08:23', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '08:36', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '08:49', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '09:02', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '09:15', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '09:28', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '09:41', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '09:54', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '10:07', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '10:20', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '10:33', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '10:37', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '10:59', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '11:12', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '11:25', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '11:38', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '11:51', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '12:04', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '12:17', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '12:30', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '12:43', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '12:56', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '13:09', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '13:22', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '13:35', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '13:48', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '14:01', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '14:14', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '14:27', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '14:40', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '14:53', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '15:06', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '15:19', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '15:32', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '15:45', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '15:58', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '16:11', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '16:24', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '16:37', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '16:50', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '17:03', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '17:16', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '17:29', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '17:42', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '17:55', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '18:08', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '18:21', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '18:34', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '18:47', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '19:00', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '19:13', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '19:26', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '19:39', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '19:52', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '20:05', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '20:18', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'ASSANDH',
    via: 'GOLI',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '09:15', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '14:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '15:15', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '19:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'ASSANDH',
    via: 'MUNAK PUL',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '08:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '13:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '17:17', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'JIND',
    via: 'SAFIDON',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '05:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '05:50', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '06:10', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '06:27', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '06:37', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '06:44', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '06:51', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '06:58', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '07:05', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '07:12', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '07:19', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '07:26', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '07:33', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '07:40', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '07:47', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '07:54', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '08:01', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '08:08', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '08:15', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '08:22', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '08:29', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '08:36', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '08:43', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '08:50', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '08:57', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '09:04', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '09:11', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '09:18', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '09:25', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '09:32', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '09:39', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '09:46', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '09:53', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '10:00', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '10:07', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '10:14', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '10:21', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '10:28', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '10:35', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '10:42', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '10:49', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '10:56', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '11:03', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '11:10', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '11:17', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '11:24', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '11:31', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '11:38', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '11:45', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '11:52', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '11:59', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '12:06', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '12:13', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '12:20', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '12:27', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '12:34', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '12:41', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '12:48', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '12:55', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '13:02', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '13:09', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '13:16', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '13:23', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '13:30', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '13:37', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '13:44', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '13:51', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '13:58', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '14:05', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '14:12', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '14:19', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '14:06', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '14:33', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '14:40', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '14:47', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '14:54', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '15:01', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '15:08', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '15:15', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '15:22', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '15:29', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '15:36', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '15:43', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '15:50', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '15:57', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '16:04', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '16:11', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '16:18', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '16:25', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '16:32', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '16:39', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '16:46', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '16:53', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '17:00', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '17:07', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '17:14', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '17:21', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '17:28', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '17:35', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '17:42', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '17:49', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '17:56', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '18:03', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '18:10', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '18:17', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '18:24', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '18:31', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '18:38', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '18:45', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '18:52', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '18:59', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '19:06', serviceDays: parseServiceDays('All days'), operator: 'PRIVATE' },
      { time: '19:20', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '19:40', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '20:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '20:20', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  // LOCAL ROUTES
  {
    from: 'PANIPAT',
    to: 'JOSHI',
    via: 'MADLAUDA',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '17:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'RAIR',
    via: 'ASSAND',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '14:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '17:25', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'URLANA',
    via: 'MADLAUDA',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '11:10', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '14:10', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '17:20', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'URLANA',
    via: 'NAULTHA',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '08:20', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '14:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '17:50', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'PATHRI',
    via: 'ISRANA',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:20', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '09:20', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '13:15', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '14:20', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '17:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '18:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'KURANA',
    via: 'JAWAHRA',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '17:10', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'KURANA',
    via: 'MADLAUDA',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '11:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '14:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '17:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'KALKHA',
    via: 'JATTAL',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '14:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '17:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'PUTHER',
    via: 'MANDI',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '15:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '18:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'KHANPUR',
    via: 'LAKHU BUANA',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '12:15', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'LAKHU BUANA',
    via: 'SHAPUR',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '16:30', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'KHANPUR',
    via: 'PUGTHALA',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:45', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '13:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '17:30', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'GAWALRA',
    via: 'TITANA',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '14:10', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '17:20', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'TITANA',
    via: 'NARYANA',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '09:40', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '14:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '17:45', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'KHOJKIPUR',
    via: 'SAMALKHA',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '08:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '09:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '10:10', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '11:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '13:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '14:20', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '15:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '16:40', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '17:30', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'TAJPUR',
    via: 'SAMALKHA',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '13:40', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '16:20', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'RAKSHERA',
    via: 'SAMALKHA',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '08:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '09:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '10:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '11:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '13:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '14:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '15:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '16:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '17:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '18:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'DEHRA',
    via: 'SAMALKHA',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '08:35', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '10:40', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '13:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '15:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '17:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'KURAR',
    via: 'NIMBARI',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '09:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '10:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '14:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '17:30', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'SIMLA GUJRAN',
    via: 'SIWAH',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '14:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '17:10', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'BARANA',
    via: 'CHANDOLI',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '09:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '12:20', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '14:20', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'HALDANA',
    via: 'SAMALKHA',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '16:30', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'RANA MAJRA',
    via: 'BABIL',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '08:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '14:15', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '17:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'KHALILA',
    via: 'DIWANA',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '14:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '17:10', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'KHANPUR',
    via: 'ISRANA',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '12:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'PASINA',
    via: 'SIWAH',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '14:30', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'NANGLA BABIL',
    via: 'RAJA KHERI',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:20', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '09:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '12:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '14:30', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'MAHMUDPUR',
    via: 'BADOLI',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '14:15', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'TAMSABAD',
    via: 'SANOLI',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:30', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'GOYLA KHURD',
    via: 'NIMBARI',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '08:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '09:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '11:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '14:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '14:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '15:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '17:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '17:50', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'NANEHRA',
    via: 'NIMBARI',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:30', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '13:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'BAPOLI',
    via: 'NIMBARI',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '07:50', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '09:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '10:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '12:00', serviceDays: parseServiceDays('All days'), operator: 'HR' },
      { time: '13:30', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  },
  {
    from: 'PANIPAT',
    to: 'GARHI BHLOR',
    via: 'NIMBARI',
    depot: 'PANIPAT',
    busType: 'Ordinary',
    departureTimes: [
      { time: '18:00', serviceDays: parseServiceDays('All days'), operator: 'HR' }
    ]
  }
];

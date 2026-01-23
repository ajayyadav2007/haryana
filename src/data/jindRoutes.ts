import { BusRoute } from '../types/bus';

// JIND Depot - One of the largest depots with 1000+ daily departures
// Includes Jind main depot, Narwana sub-depot, and Safidon sub-depot
export const jindRoutes: BusRoute[] = [
  // ===== COUNTER 4: JIND → ROHTAK (via Julana) - Every 15 minutes! =====
  {
    id: 'JIN-ROH-JUL-ORD',
    routeNumber: 'JIN-ROH-01',
    from: 'Jind',
    to: 'Rohtak',
    via: 'Julana',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '04:40', operator: 'HR' },
      { time: '05:35', operator: 'HR' },
      { time: '05:50', operator: 'HR' },
      { time: '06:05', operator: 'HR' },
      { time: '06:30', operator: 'HR' },
      { time: '06:50', operator: 'HR' },
      { time: '07:05', operator: 'HR' },
      { time: '07:20', operator: 'HR' },
      { time: '07:40', operator: 'HR' },
      { time: '08:00', operator: 'HR' },
      { time: '08:10', operator: 'HR' },
      { time: '08:25', operator: 'HR' },
      { time: '08:40', operator: 'HR' },
      { time: '08:55', operator: 'HR' },
      { time: '09:10', operator: 'HR' },
      { time: '09:25', operator: 'HR' },
      { time: '09:40', operator: 'HR' },
      { time: '09:55', operator: 'HR' },
      { time: '10:10', operator: 'HR' },
      { time: '10:25', operator: 'HR' },
      { time: '10:40', operator: 'HR' },
      { time: '10:55', operator: 'HR' },
      { time: '11:10', operator: 'HR' },
      { time: '11:25', operator: 'HR' },
      { time: '11:40', operator: 'HR' },
      { time: '11:55', operator: 'HR' },
      { time: '12:10', operator: 'HR' },
      { time: '12:25', operator: 'HR' },
      { time: '12:40', operator: 'HR' },
      { time: '12:55', operator: 'HR' },
      { time: '13:10', operator: 'HR' },
      { time: '13:25', operator: 'HR' },
      { time: '13:40', operator: 'HR' },
      { time: '13:55', operator: 'HR' },
      { time: '14:10', operator: 'HR' },
      { time: '14:25', operator: 'HR' },
      { time: '14:40', operator: 'HR' },
      { time: '14:55', operator: 'HR' },
      { time: '15:10', operator: 'HR' },
      { time: '15:25', operator: 'HR' },
      { time: '15:40', operator: 'HR' },
      { time: '15:55', operator: 'HR' },
      { time: '16:10', operator: 'HR' },
      { time: '16:25', operator: 'HR' },
      { time: '16:50', operator: 'HR' },
      { time: '17:05', operator: 'HR' },
      { time: '17:20', operator: 'HR' },
    ]
  },

  // ===== COUNTER 5: DELHI/GURUGRAM/MATHURA/PUNJAB ROUTES =====
  {
    id: 'JIN-MAT-DEL-ORD',
    routeNumber: 'JIN-MAT-01',
    from: 'Jind',
    to: 'Mathura',
    via: 'Delhi',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '04:00', operator: 'HR' },
    ]
  },

  {
    id: 'JIN-DEL-ROH-ORD',
    routeNumber: 'JIN-DEL-01',
    from: 'Jind',
    to: 'Delhi',
    via: 'Rohtak',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '05:10', operator: 'HR' },
      { time: '06:20', operator: 'HR' },
      { time: '13:40', operator: 'HR' },
      { time: '16:20', operator: 'HR' },
      { time: '17:40', operator: 'HR' },
    ]
  },

  {
    id: 'JIN-GGN-BAD-ORD',
    routeNumber: 'JIN-GGN-01',
    from: 'Jind',
    to: 'Gurugram',
    via: 'Badli',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '05:30', operator: 'HR' },
      { time: '07:50', operator: 'HR' },
      { time: '11:20', operator: 'HR' },
      { time: '12:40', operator: 'HR' },
      { time: '14:10', operator: 'HR' },
      { time: '16:40', operator: 'HR' },
    ]
  },

  {
    id: 'JIN-GGN-BAH-ORD',
    routeNumber: 'JIN-GGN-02',
    from: 'Jind',
    to: 'Gurugram',
    via: 'Bahadurgarh',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '06:30', operator: 'HR' },
      { time: '11:30', operator: 'HR' },
      { time: '12:50', operator: 'HR' },
    ]
  },

  {
    id: 'NAR-DEL-ROH-ORD',
    routeNumber: 'NAR-DEL-01',
    from: 'Narwana',
    to: 'Delhi',
    via: 'Rohtak',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '06:00', operator: 'HR' },
    ]
  },

  {
    id: 'KAI-BAH-GGN-ORD',
    routeNumber: 'KAI-GGN-01',
    from: 'Kaithal',
    to: 'Bahadurgarh',
    via: 'Gurugram',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '06:40', operator: 'HR' },
    ]
  },

  {
    id: 'NAR-GGN-BAH-ORD',
    routeNumber: 'NAR-GGN-01',
    from: 'Narwana',
    to: 'Gurugram',
    via: 'Bahadurgarh',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '07:00', operator: 'HR' },
    ]
  },

  {
    id: 'NAR-ROH-JUL-ORD',
    routeNumber: 'NAR-ROH-01',
    from: 'Narwana',
    to: 'Rohtak',
    via: 'Julana',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '07:10', operator: 'HR' },
    ]
  },

  {
    id: 'NAR-BAH-ROH-ORD',
    routeNumber: 'NAR-BAH-01',
    from: 'Narwana',
    to: 'Bahadurgarh',
    via: 'Rohtak',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '07:15', operator: 'HR' },
    ]
  },

  {
    id: 'SAN-DEL-BAH-PRTC',
    routeNumber: 'SAN-DEL-01',
    from: 'Sangrur',
    to: 'Delhi',
    via: 'Bahadurgarh',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '07:40', operator: 'PRTC' },
      { time: '08:20', operator: 'PRTC' },
      { time: '13:10', operator: 'PRTC' },
      { time: '18:10', operator: 'PRTC' },
    ]
  },

  {
    id: 'NAR-GGN-BAD-ORD',
    routeNumber: 'NAR-GGN-02',
    from: 'Narwana',
    to: 'Gurugram',
    via: 'Badli',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '08:10', operator: 'HR' },
    ]
  },

  {
    id: 'KAI-GGN-BAD-ORD',
    routeNumber: 'KAI-GGN-02',
    from: 'Kaithal',
    to: 'Gurugram',
    via: 'Badli',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '08:40', operator: 'HR' },
    ]
  },

  {
    id: 'KAI-GGN-BAH-ORD',
    routeNumber: 'KAI-GGN-03',
    from: 'Kaithal',
    to: 'Gurugram',
    via: 'Bahadurgarh',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '08:50', operator: 'HR' },
      { time: '09:50', operator: 'HR' },
    ]
  },

  {
    id: 'TOH-DEL-BAH-ORD',
    routeNumber: 'TOH-DEL-01',
    from: 'Tohana',
    to: 'Delhi',
    via: 'Bahadurgarh',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '09:10', operator: 'HR' },
      { time: '14:50', operator: 'HR' },
    ]
  },

  {
    id: 'JIN-BAH-ROH-ORD',
    routeNumber: 'JIN-BAH-01',
    from: 'Jind',
    to: 'Bahadurgarh',
    via: 'Rohtak',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '09:40', operator: 'HR' },
      { time: '12:00', operator: 'HR' },
      { time: '12:10', operator: 'HR' },
    ]
  },

  {
    id: 'LUD-DEL-BAH-ORD',
    routeNumber: 'LUD-DEL-01',
    from: 'Ludhiana',
    to: 'Delhi',
    via: 'Bahadurgarh',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '10:15', operator: 'HR' },
      { time: '10:40', operator: 'HR' },
      { time: '12:20', operator: 'HR' },
      { time: '13:03', operator: 'HR' },
      { time: '13:50', operator: 'HR' },
      { time: '15:20', operator: 'HR' },
    ]
  },

  {
    id: 'LUD-DEL-BAH-PRTC',
    routeNumber: 'LUD-DEL-02',
    from: 'Ludhiana',
    to: 'Delhi',
    via: 'Bahadurgarh',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '14:20', operator: 'PRTC' },
      { time: '17:00', operator: 'PRTC' },
      { time: '19:30', operator: 'PRTC' },
    ]
  },

  {
    id: 'TOH-JAI-GGN-ORD',
    routeNumber: 'TOH-JAI-01',
    from: 'Tohana',
    to: 'Jaipur',
    via: 'Gurugram',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '10:25', operator: 'HR' },
    ]
  },

  {
    id: 'KAI-JAI-REW-ORD',
    routeNumber: 'KAI-JAI-01',
    from: 'Kaithal',
    to: 'Jaipur',
    via: 'Rewari',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '11:05', operator: 'HR' },
    ]
  },

  {
    id: 'SAN-JAI-NAR-ORD',
    routeNumber: 'SAN-JAI-01',
    from: 'Sangrur',
    to: 'Jaipur',
    via: 'Narnaul',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '11:40', operator: 'HR' },
    ]
  },

  {
    id: 'PAT-DEL-BAH-ORD',
    routeNumber: 'PAT-DEL-01',
    from: 'Patiala',
    to: 'Delhi',
    via: 'Bahadurgarh',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '15:00', operator: 'HR' },
      { time: '15:50', operator: 'HR' },
    ]
  },

  {
    id: 'LUD-NAR-ROH-PRTC',
    routeNumber: 'LUD-NAR-01',
    from: 'Ludhiana',
    to: 'Narnaul',
    via: 'Rohtak',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '15:10', operator: 'PRTC' },
    ]
  },

  {
    id: 'PAT-CDD-ROH-ORD',
    routeNumber: 'PAT-CDD-01',
    from: 'Patiala',
    to: 'Charkhi Dadri',
    via: 'Rohtak',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '16:00', operator: 'HR' },
    ]
  },

  {
    id: 'JAG-DEL-BAH-PRTC',
    routeNumber: 'JAG-DEL-01',
    from: 'Jagraon',
    to: 'Delhi',
    via: 'Bahadurgarh',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '16:50', operator: 'PRTC' },
    ]
  },

  {
    id: 'JIN-ROH-JUL-2-ORD',
    routeNumber: 'JIN-ROH-02',
    from: 'Jind',
    to: 'Rohtak',
    via: 'Julana',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '18:00', operator: 'HR' },
      { time: '18:40', operator: 'HR' },
    ]
  },

  {
    id: 'PAT-ROH-JUL-ORD',
    routeNumber: 'PAT-ROH-01',
    from: 'Patiala',
    to: 'Rohtak',
    via: 'Julana',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '19:20', operator: 'HR' },
    ]
  },

  {
    id: 'LUD-ROH-JUL-ORD',
    routeNumber: 'LUD-ROH-01',
    from: 'Ludhiana',
    to: 'Rohtak',
    via: 'Julana',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '20:20', operator: 'HR' },
    ]
  },

  // ===== COUNTER 6: JIND → BHIWANI (via Mundhal) - Every 15 minutes! =====
  {
    id: 'JIN-BHI-MUN-ORD',
    routeNumber: 'JIN-BHI-01',
    from: 'Jind',
    to: 'Bhiwani',
    via: 'Mundhal',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: Array.from({ length: 51 }, (_, i) => ({
      time: `${String(5 + Math.floor((20 + i * 15) / 60)).padStart(2, '0')}:${String((20 + i * 15) % 60).padStart(2, '0')}`,
      operator: 'HR'
    }))
  },

  {
    id: 'JIN-NAR-BHI-ORD',
    routeNumber: 'JIN-NAR-01',
    from: 'Jind',
    to: 'Narnaul',
    via: 'Bhiwani',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '09:05', operator: 'HR' },
    ]
  },

  {
    id: 'CHD-BHI-MUN-ORD',
    routeNumber: 'CHD-BHI-01',
    from: 'Chandigarh',
    to: 'Bhiwani',
    via: 'Mundhal',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '09:50', operator: 'HR' },
      { time: '16:50', operator: 'HR' },
      { time: '18:50', operator: 'HR' },
      { time: '23:00', operator: 'HR' },
    ]
  },

  {
    id: 'KAI-NAR-BHI-ORD',
    routeNumber: 'KAI-NAR-01',
    from: 'Kaithal',
    to: 'Narnaul',
    via: 'Bhiwani',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '12:35', operator: 'HR' },
    ]
  },

  {
    id: 'PAN-BHI-MUN-ORD',
    routeNumber: 'PAN-BHI-01',
    from: 'Panchkula',
    to: 'Bhiwani',
    via: 'Mundhal',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '13:05', operator: 'HR' },
    ]
  },

  // ===== COUNTER 7: JIND → KAITHAL (via Kithana) =====
  {
    id: 'JIN-KAI-KIT-ORD',
    routeNumber: 'JIN-KAI-01',
    from: 'Jind',
    to: 'Kaithal',
    via: 'Kithana',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '05:40', operator: 'HR' },
      { time: '06:00', operator: 'HR' },
      { time: '06:20', operator: 'HR' },
      { time: '06:50', operator: 'HR' },
      { time: '07:10', operator: 'HR' },
      { time: '07:30', operator: 'HR' },
      { time: '07:40', operator: 'HR' },
      { time: '08:15', operator: 'HR' },
      { time: '08:40', operator: 'HR' },
      { time: '08:50', operator: 'HR' },
      { time: '09:00', operator: 'HR' },
      { time: '09:10', operator: 'HR' },
      { time: '09:30', operator: 'HR' },
      { time: '09:40', operator: 'HR' },
      { time: '10:00', operator: 'HR' },
      { time: '10:30', operator: 'HR' },
      { time: '10:40', operator: 'HR' },
      { time: '11:00', operator: 'HR' },
      { time: '11:30', operator: 'HR' },
      { time: '11:40', operator: 'HR' },
      { time: '11:50', operator: 'HR' },
      { time: '12:10', operator: 'HR' },
      { time: '12:30', operator: 'HR' },
      { time: '12:40', operator: 'HR' },
      { time: '13:00', operator: 'HR' },
      { time: '13:10', operator: 'HR' },
      { time: '13:30', operator: 'HR' },
      { time: '13:50', operator: 'HR' },
      { time: '14:10', operator: 'HR' },
      { time: '14:20', operator: 'HR' },
      { time: '14:40', operator: 'HR' },
      { time: '14:50', operator: 'HR' },
      { time: '15:10', operator: 'HR' },
      { time: '15:20', operator: 'HR' },
      { time: '15:30', operator: 'HR' },
      { time: '15:40', operator: 'HR' },
      { time: '16:00', operator: 'HR' },
      { time: '16:20', operator: 'HR' },
      { time: '16:30', operator: 'HR' },
      { time: '17:00', operator: 'HR' },
      { time: '17:20', operator: 'HR' },
      { time: '17:40', operator: 'HR' },
      { time: '18:00', operator: 'HR' },
      { time: '18:20', operator: 'HR' },
      { time: '18:40', operator: 'HR' },
      { time: '19:15', operator: 'HR' },
    ]
  },

  // ===== COUNTER 8: CHANDIGARH/PANCHKULA Routes (via Kaithal) =====
  {
    id: 'JIN-CHD-KAI-ORD',
    routeNumber: 'JIN-CHD-01',
    from: 'Jind',
    to: 'Chandigarh',
    via: 'Kaithal',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '04:20', operator: 'HR' },
      { time: '05:10', operator: 'HR' },
      { time: '06:20', operator: 'HR' },
      { time: '06:40', operator: 'HR' },
      { time: '07:00', operator: 'HR' },
      { time: '07:20', operator: 'HR' },
      { time: '07:30', operator: 'HR' },
      { time: '07:50', operator: 'HR' },
      { time: '08:10', operator: 'HR' },
      { time: '08:30', operator: 'HR' },
      { time: '08:50', operator: 'HR' },
      { time: '09:20', operator: 'HR' },
      { time: '09:35', operator: 'HR' },
      { time: '10:10', operator: 'HR' },
      { time: '10:25', operator: 'HR' },
      { time: '10:50', operator: 'HR' },
      { time: '12:00', operator: 'HR' },
      { time: '12:10', operator: 'HR' },
      { time: '12:50', operator: 'HR' },
      { time: '14:20', operator: 'HR' },
      { time: '14:50', operator: 'HR' },
      { time: '15:50', operator: 'HR' },
    ]
  },

  {
    id: 'JIN-CHD-KAI-AC',
    routeNumber: 'JIN-CHD-02',
    from: 'Jind',
    to: 'Chandigarh',
    via: 'Kaithal',
    depot: 'Jind',
    busType: 'AC',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '15:00', operator: 'CTU' },
    ]
  },

  {
    id: 'HAN-CHD-KAI-ORD',
    routeNumber: 'HAN-CHD-01',
    from: 'Hansi',
    to: 'Chandigarh',
    via: 'Kaithal',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '05:30', operator: 'HR' },
      { time: '06:00', operator: 'HR' },
      { time: '08:00', operator: 'HR' },
      { time: '09:50', operator: 'HR' },
      { time: '11:10', operator: 'HR' },
      { time: '12:20', operator: 'HR' },
    ]
  },

  {
    id: 'JIN-PAN-KAI-ORD',
    routeNumber: 'JIN-PAN-01',
    from: 'Jind',
    to: 'Panchkula',
    via: 'Kaithal',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '05:40', operator: 'HR' },
    ]
  },

  {
    id: 'BHI-CHD-KAI-ORD',
    routeNumber: 'BHI-CHD-01',
    from: 'Bhiwani',
    to: 'Chandigarh',
    via: 'Kaithal',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '06:10', operator: 'HR' },
      { time: '08:40', operator: 'HR' },
      { time: '13:20', operator: 'HR' },
      { time: '16:10', operator: 'HR' },
      { time: '16:30', operator: 'HR' },
    ]
  },

  {
    id: 'TOS-CHD-KAI-ORD',
    routeNumber: 'TOS-CHD-01',
    from: 'Tosham',
    to: 'Chandigarh',
    via: 'Kaithal',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '06:50', operator: 'HR' },
    ]
  },

  {
    id: 'BHI-PAN-KAI-ORD',
    routeNumber: 'BHI-PAN-01',
    from: 'Bhiwani',
    to: 'Panchkula',
    via: 'Kaithal',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '11:20', operator: 'HR' },
      { time: '13:40', operator: 'HR' },
      { time: '16:50', operator: 'HR' },
    ]
  },

  // ===== COUNTER 9: PUNJAB ROUTES (Patiala, Ludhiana, Amritsar, Katra) =====
  {
    id: 'JIN-PAT-PAT-ORD',
    routeNumber: 'JIN-PAT-01',
    from: 'Jind',
    to: 'Patiala',
    via: 'Patran',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '05:30', operator: 'HR' },
      { time: '07:00', operator: 'HR' },
      { time: '07:40', operator: 'HR' },
      { time: '08:05', operator: 'HR' },
      { time: '09:00', operator: 'HR' },
      { time: '09:35', operator: 'HR' },
      { time: '11:18', operator: 'HR' },
    ]
  },

  {
    id: 'JIN-PAT-PAT-PRTC',
    routeNumber: 'JIN-PAT-02',
    from: 'Jind',
    to: 'Patiala',
    via: 'Patran',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '11:40', operator: 'PRTC' },
      { time: '13:00', operator: 'PRTC' },
    ]
  },

  {
    id: 'DEL-KAT-PAT-ORD',
    routeNumber: 'DEL-KAT-01',
    from: 'Delhi',
    to: 'Katra',
    via: 'Patran',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '05:50', operator: 'HR' },
    ]
  },

  {
    id: 'ROH-PAT-PAT-ORD',
    routeNumber: 'ROH-PAT-01',
    from: 'Rohtak',
    to: 'Patiala',
    via: 'Patran',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '06:21', operator: 'HR' },
    ]
  },

  {
    id: 'JIN-LUD-PAT-PRTC',
    routeNumber: 'JIN-LUD-01',
    from: 'Jind',
    to: 'Ludhiana',
    via: 'Patran',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '06:30', operator: 'PRTC' },
      { time: '12:00', operator: 'PRTC' },
    ]
  },

  {
    id: 'DEL-LUD-PAT-PRTC',
    routeNumber: 'DEL-LUD-01',
    from: 'Delhi',
    to: 'Ludhiana',
    via: 'Patran',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '07:10', operator: 'PRTC' },
      { time: '07:30', operator: 'PRTC' },
      { time: '09:45', operator: 'PRTC' },
      { time: '11:02', operator: 'PRTC' },
      { time: '11:28', operator: 'PRTC' },
    ]
  },

  {
    id: 'JIN-LUD-PAT-ORD',
    routeNumber: 'JIN-LUD-02',
    from: 'Jind',
    to: 'Ludhiana',
    via: 'Patran',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '08:20', operator: 'HR' },
    ]
  },

  {
    id: 'DEL-BAR-PAT-PRTC',
    routeNumber: 'DEL-BAR-01',
    from: 'Delhi',
    to: 'Barnala',
    via: 'Patran',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '08:25', operator: 'PRTC' },
    ]
  },

  {
    id: 'DAD-PAT-PAT-ORD',
    routeNumber: 'DAD-PAT-01',
    from: 'Dadri',
    to: 'Patiala',
    via: 'Patran',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '08:35', operator: 'HR' },
    ]
  },

  {
    id: 'DEL-JAG-PAT-PRTC',
    routeNumber: 'DEL-JAG-01',
    from: 'Delhi',
    to: 'Jagrav',
    via: 'Patran',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '08:40', operator: 'PRTC' },
    ]
  },

  {
    id: 'ROH-AMR-PAT-ORD',
    routeNumber: 'ROH-AMR-01',
    from: 'Rohtak',
    to: 'Amritsar',
    via: 'Patran',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '09:20', operator: 'HR' },
    ]
  },

  {
    id: 'JIN-SAN-PAT-ORD',
    routeNumber: 'JIN-SAN-01',
    from: 'Jind',
    to: 'Sangrur',
    via: 'Patran',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '10:04', operator: 'HR' },
    ]
  },

  {
    id: 'NAR-LUD-PAT-PRTC',
    routeNumber: 'NAR-LUD-01',
    from: 'Narnaul',
    to: 'Ludhiana',
    via: 'Patran',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '10:10', operator: 'PRTC' },
    ]
  },

  {
    id: 'DEL-PAT-PAT-PRTC',
    routeNumber: 'DEL-PAT-01',
    from: 'Delhi',
    to: 'Patiala',
    via: 'Patran',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '10:23', operator: 'PRTC' },
    ]
  },

  {
    id: 'DEL-SAN-PAT-JAGRAV',
    routeNumber: 'DEL-SAN-01',
    from: 'Delhi',
    to: 'Sangrur',
    via: 'Patran',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '10:30', operator: 'JAGRAV' },
      { time: '00:30', operator: 'HR' },
    ]
  },

  {
    id: 'JIN-KHA-NAR-ORD',
    routeNumber: 'JIN-KHA-01',
    from: 'Jind',
    to: 'Khanori',
    via: 'Narwana',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '10:46', operator: 'HR' },
      { time: '12:50', operator: 'HR' },
      { time: '13:15', operator: 'HR' },
    ]
  },

  {
    id: 'DEL-LUD-PAT-ORD',
    routeNumber: 'DEL-LUD-02',
    from: 'Delhi',
    to: 'Ludhiana',
    via: 'Patran',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '12:35', operator: 'HR' },
      { time: '14:10', operator: 'HR' },
    ]
  },

  {
    id: 'JIN-TOH-NAR-ORD',
    routeNumber: 'JIN-TOH-01',
    from: 'Jind',
    to: 'Tohana',
    via: 'Narwana',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '13:35', operator: 'HR' },
    ]
  },

  {
    id: 'JAI-SAN-PAT-PRTC',
    routeNumber: 'JAI-SAN-01',
    from: 'Jaipur',
    to: 'Sangrur',
    via: 'Patran',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '14:35', operator: 'PRTC' },
    ]
  },

  {
    id: 'GGN-KHA-NAR-ORD',
    routeNumber: 'GGN-KHA-01',
    from: 'Gurugram',
    to: 'Khanori',
    via: 'Narwana',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '14:55', operator: 'HR' },
    ]
  },

  {
    id: 'JAI-KHA-NAR-ORD',
    routeNumber: 'JAI-KHA-01',
    from: 'Jaipur',
    to: 'Khanori',
    via: 'Narwana',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '15:30', operator: 'HR' },
    ]
  },

  {
    id: 'DEL-SAN-PAT-PRTC',
    routeNumber: 'DEL-SAN-02',
    from: 'Delhi',
    to: 'Sangrur',
    via: 'Patran',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '15:40', operator: 'PRTC' },
    ]
  },

  {
    id: 'GGN-PAT-PAT-ORD',
    routeNumber: 'GGN-PAT-01',
    from: 'Gurugram',
    to: 'Patiala',
    via: 'Patran',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '16:20', operator: 'HR' },
    ]
  },

  {
    id: 'DEL-TOH-NAR-ORD',
    routeNumber: 'DEL-TOH-01',
    from: 'Delhi',
    to: 'Tohana',
    via: 'Narwana',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '16:30', operator: 'HR' },
      { time: '17:30', operator: 'HR' },
      { time: '18:20', operator: 'HR' },
      { time: '22:45', operator: 'HR' },
    ]
  },

  {
    id: 'DEL-SAN-PAT-ORD',
    routeNumber: 'DEL-SAN-03',
    from: 'Delhi',
    to: 'Sangrur',
    via: 'Patran',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '16:50', operator: 'HR' },
    ]
  },

  // ===== COUNTER 10: JIND → NARWANA (via Uchana) - Every 6 minutes! =====
  {
    id: 'JIN-NAR-UCH-ORD',
    routeNumber: 'JIN-NAR-02',
    from: 'Jind',
    to: 'Narwana',
    via: 'Uchana',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: Array.from({ length: 100 }, (_, i) => ({
      time: `${String(5 + Math.floor((57 + i * 6) / 60)).padStart(2, '0')}:${String((57 + i * 6) % 60).padStart(2, '0')}`,
      operator: i % 4 === 0 ? 'HR' : 'PVT'
    }))
  },

  // ===== COUNTER 12: JIND → PANIPAT (via Safidon) - Every 7 minutes! =====
  {
    id: 'JIN-HAR-PAN-ORD',
    routeNumber: 'JIN-HAR-01',
    from: 'Jind',
    to: 'Haridwar',
    via: 'Panipat',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '05:50', operator: 'HR' },
      { time: '06:20', operator: 'HR' },
      { time: '08:01', operator: 'HR' },
      { time: '09:25', operator: 'HR' },
    ]
  },

  {
    id: 'JIN-PAN-SAF-ORD',
    routeNumber: 'JIN-PAN-02',
    from: 'Jind',
    to: 'Panipat',
    via: 'Safidon',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: Array.from({ length: 107 }, (_, i) => ({
      time: `${String(6 + Math.floor((10 + i * 7) / 60)).padStart(2, '0')}:${String((10 + i * 7) % 60).padStart(2, '0')}`,
      operator: i % 2 === 0 ? 'HR' : 'PVT'
    }))
  },

  {
    id: 'HIS-PAN-SAF-ORD',
    routeNumber: 'HIS-PAN-01',
    from: 'Hisar',
    to: 'Panipat',
    via: 'Safidon',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '07:47', operator: 'HR' },
      { time: '08:29', operator: 'HR' },
      { time: '09:53', operator: 'HR' },
      { time: '10:07', operator: 'HR' },
      { time: '10:49', operator: 'HR' },
      { time: '12:27', operator: 'HR' },
      { time: '13:51', operator: 'HR' },
      { time: '17:07', operator: 'HR' },
    ]
  },

  {
    id: 'HIS-HAR-PAN-ORD',
    routeNumber: 'HIS-HAR-01',
    from: 'Hisar',
    to: 'Haridwar',
    via: 'Panipat',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '10:35', operator: 'HR' },
    ]
  },

  {
    id: 'HIS-RIS-PAN-ORD',
    routeNumber: 'HIS-RIS-01',
    from: 'Hisar',
    to: 'Rishikesh',
    via: 'Panipat',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '11:59', operator: 'HR' },
    ]
  },

  {
    id: 'SIR-PAN-SAF-ORD',
    routeNumber: 'SIR-PAN-01',
    from: 'Sirsa',
    to: 'Panipat',
    via: 'Safidon',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '12:55', operator: 'HR' },
      { time: '13:23', operator: 'HR' },
      { time: '14:47', operator: 'HR' },
      { time: '15:43', operator: 'HR' },
      { time: '16:53', operator: 'HR' },
    ]
  },

  {
    id: 'GAN-PAN-SAF-ORD',
    routeNumber: 'GAN-PAN-01',
    from: 'Ganganagar',
    to: 'Panipat',
    via: 'Safidon',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '13:09', operator: 'HR' },
    ]
  },

  {
    id: 'JIN-SAF-JAM-ORD',
    routeNumber: 'JIN-SAF-01',
    from: 'Jind',
    to: 'Safidon',
    via: 'Jamni',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '13:37', operator: 'HR' },
    ]
  },

  {
    id: 'SAL-PAN-SAF-ORD',
    routeNumber: 'SAL-PAN-01',
    from: 'Salasar',
    to: 'Panipat',
    via: 'Safidon',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '14:19', operator: 'HR' },
    ]
  },

  {
    id: 'SIR-SAF-JAM-ORD',
    routeNumber: 'SIR-SAF-01',
    from: 'Sirsa',
    to: 'Safidon',
    via: 'Jamni',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '15:29', operator: 'HR' },
    ]
  },

  {
    id: 'SIR-HAR-PAN-ORD',
    routeNumber: 'SIR-HAR-01',
    from: 'Sirsa',
    to: 'Haridwar',
    via: 'Panipat',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '21:40', operator: 'HR' },
    ]
  },

  // ===== COUNTER 13: ASANDH/KARNAL Routes =====
  {
    id: 'JIN-PON-KAR-ORD',
    routeNumber: 'JIN-PON-01',
    from: 'Jind',
    to: 'Ponta Sahib',
    via: 'Karnal',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '05:40', operator: 'HR' },
    ]
  },

  {
    id: 'JIN-ASA-ALE-ORD',
    routeNumber: 'JIN-ASA-01',
    from: 'Jind',
    to: 'Asandh',
    via: 'Alewa',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: Array.from({ length: 75 }, (_, i) => ({
      time: `${String(6 + Math.floor(i * 10 / 60)).padStart(2, '0')}:${String((i * 10) % 60).padStart(2, '0')}`,
      operator: i % 3 === 0 ? 'HR' : 'PVT'
    }))
  },

  {
    id: 'JIN-KAR-ASA-ORD',
    routeNumber: 'JIN-KAR-01',
    from: 'Jind',
    to: 'Karnal',
    via: 'Asandh',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '06:15', operator: 'HR' },
      { time: '09:00', operator: 'HR' },
    ]
  },

  {
    id: 'HIS-KAR-ASA-ORD',
    routeNumber: 'HIS-KAR-01',
    from: 'Hisar',
    to: 'Karnal',
    via: 'Asandh',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '13:00', operator: 'HR' },
      { time: '17:30', operator: 'HR' },
    ]
  },

  // ===== COUNTER 14: PUNDRI/KURUKSHETRA Routes =====
  {
    id: 'JIN-PUN-ALE-ORD',
    routeNumber: 'JIN-PUN-01',
    from: 'Jind',
    to: 'Pundri',
    via: 'Alewa',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '07:10', operator: 'HR' },
      { time: '07:40', operator: 'PVT' },
      { time: '09:50', operator: 'PVT' },
      { time: '13:00', operator: 'PVT' },
      { time: '15:20', operator: 'PVT' },
      { time: '17:00', operator: 'PVT' },
    ]
  },

  {
    id: 'JIN-KUR-ALE-ORD',
    routeNumber: 'JIN-KUR-01',
    from: 'Jind',
    to: 'Kurukshetra',
    via: 'Alewa',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '08:30', operator: 'HR' },
      { time: '09:20', operator: 'HR' },
      { time: '11:10', operator: 'HR' },
      { time: '14:00', operator: 'HR' },
      { time: '16:20', operator: 'HR' },
    ]
  },

  // ===== COUNTER 15: GOHANA Routes (via Bhambheva) =====
  {
    id: 'JIN-GOH-BHA-ORD',
    routeNumber: 'JIN-GOH-01',
    from: 'Jind',
    to: 'Gohana',
    via: 'Bhambheva',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: Array.from({ length: 85 }, (_, i) => ({
      time: `${String(5 + Math.floor((40 + i * 10) / 60)).padStart(2, '0')}:${String((40 + i * 10) % 60).padStart(2, '0')}`,
      operator: i % 3 === 0 ? 'HR' : 'PVT'
    }))
  },

  {
    id: 'JIN-DEL-SON-ORD',
    routeNumber: 'JIN-DEL-02',
    from: 'Jind',
    to: 'Delhi',
    via: 'Sonipat',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '09:10', operator: 'HR' },
      { time: '10:10', operator: 'HR' },
    ]
  },

  {
    id: 'SIR-GOH-BHA-ORD',
    routeNumber: 'SIR-GOH-01',
    from: 'Sirsa',
    to: 'Gohana',
    via: 'Bhambheva',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '15:22', operator: 'HR' },
      { time: '16:22', operator: 'HR' },
    ]
  },

  // ===== COUNTER 16: HISAR/SIRSA Routes (via Hansi) =====
  {
    id: 'JIN-HIS-HAN-ORD',
    routeNumber: 'JIN-HIS-01',
    from: 'Jind',
    to: 'Hisar',
    via: 'Hansi',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '05:30', operator: 'HR' },
      { time: '07:00', operator: 'HR' },
      { time: '07:20', operator: 'HR' },
      { time: '07:40', operator: 'HR' },
      { time: '08:15', operator: 'HR' },
      { time: '08:30', operator: 'HR' },
      { time: '09:00', operator: 'HR' },
      { time: '09:20', operator: 'HR' },
      { time: '09:30', operator: 'HR' },
      { time: '10:25', operator: 'HR' },
      { time: '10:40', operator: 'HR' },
      { time: '10:50', operator: 'HR' },
      { time: '11:25', operator: 'HR' },
      { time: '11:40', operator: 'HR' },
      { time: '12:00', operator: 'HR' },
      { time: '12:30', operator: 'HR' },
      { time: '13:05', operator: 'HR' },
      { time: '15:15', operator: 'HR' },
      { time: '16:20', operator: 'HR' },
    ]
  },

  {
    id: 'JIN-DAB-HAN-ORD',
    routeNumber: 'JIN-DAB-01',
    from: 'Jind',
    to: 'Dabwali',
    via: 'Hansi',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '06:10', operator: 'HR' },
    ]
  },

  {
    id: 'PAN-SIR-HAN-ORD',
    routeNumber: 'PAN-SIR-01',
    from: 'Panipat',
    to: 'Sirsa',
    via: 'Hansi',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '06:20', operator: 'HR' },
      { time: '08:40', operator: 'HR' },
      { time: '09:40', operator: 'HR' },
      { time: '10:10', operator: 'HR' },
      { time: '12:15', operator: 'HR' },
      { time: '13:40', operator: 'HR' },
      { time: '14:20', operator: 'HR' },
      { time: '14:40', operator: 'HR' },
      { time: '15:40', operator: 'HR' },
    ]
  },

  {
    id: 'JIN-SIR-HAN-ORD',
    routeNumber: 'JIN-SIR-01',
    from: 'Jind',
    to: 'Sirsa',
    via: 'Hansi',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '06:40', operator: 'HR' },
      { time: '16:30', operator: 'HR' },
    ]
  },

  {
    id: 'GOH-SIR-HAN-ORD',
    routeNumber: 'GOH-SIR-01',
    from: 'Gohana',
    to: 'Sirsa',
    via: 'Hansi',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '06:50', operator: 'HR' },
      { time: '09:50', operator: 'HR' },
    ]
  },

  {
    id: 'SAF-SIR-HAN-ORD',
    routeNumber: 'SAF-SIR-01',
    from: 'Safidon',
    to: 'Sirsa',
    via: 'Hansi',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '07:10', operator: 'HR' },
      { time: '08:05', operator: 'HR' },
    ]
  },

  {
    id: 'PAN-HIS-HAN-ORD',
    routeNumber: 'PAN-HIS-01',
    from: 'Panipat',
    to: 'Hisar',
    via: 'Hansi',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '10:00', operator: 'HR' },
      { time: '13:20', operator: 'HR' },
      { time: '14:00', operator: 'HR' },
    ]
  },

  {
    id: 'PAN-GAN-DAB-ORD',
    routeNumber: 'PAN-GAN-01',
    from: 'Panipat',
    to: 'Ganganagar',
    via: 'Dabwali',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '11:00', operator: 'HR' },
    ]
  },

  {
    id: 'PAN-FAT-HAN-ORD',
    routeNumber: 'PAN-FAT-01',
    from: 'Panipat',
    to: 'Fatehabad',
    via: 'Hansi',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '12:45', operator: 'HR' },
    ]
  },

  {
    id: 'CHD-HAN-NAR-ORD',
    routeNumber: 'CHD-HAN-01',
    from: 'Chandigarh',
    to: 'Hansi',
    via: 'Narnond',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '19:30', operator: 'HR' },
      { time: '20:15', operator: 'HR' },
      { time: '22:30', operator: 'HR' },
    ]
  },

  // ===== COUNTER 17: HANSI LOCAL (via Narnond) - Every 6 minutes! =====
  {
    id: 'JIN-HAN-NAR-ORD',
    routeNumber: 'JIN-HAN-01',
    from: 'Jind',
    to: 'Hansi',
    via: 'Narnond',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: Array.from({ length: 158 }, (_, i) => ({
      time: `${String(5 + Math.floor((30 + i * 6) / 60)).padStart(2, '0')}:${String((30 + i * 6) % 60).padStart(2, '0')}`,
      operator: i % 4 === 0 ? 'HR' : 'PVT'
    }))
  },

  // ===== COUNTER 18: BARWALA Routes (via Kheri-Chopta) =====
  {
    id: 'JIN-BAR-KHE-ORD',
    routeNumber: 'JIN-BAR-01',
    from: 'Jind',
    to: 'Barwala',
    via: 'Kheri-Chopta',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: Array.from({ length: 71 }, (_, i) => ({
      time: `${String(6 + Math.floor(i * 12 / 60)).padStart(2, '0')}:${String((i * 12) % 60).padStart(2, '0')}`,
      operator: i % 5 === 0 ? 'HR' : 'PVT'
    }))
  },

  // ===== NARWANA SUB-DEPOT ROUTES =====
  {
    id: 'NAR-JIN-UCH-ORD',
    routeNumber: 'NAR-JIN-01',
    from: 'Narwana',
    to: 'Jind',
    via: 'Uchana',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '07:27', operator: 'HR' },
      { time: '07:51', operator: 'HR' },
      { time: '08:03', operator: 'HR' },
      { time: '08:45', operator: 'HR' },
      { time: '08:57', operator: 'HR' },
      { time: '09:15', operator: 'HR' },
      { time: '09:33', operator: 'HR' },
      { time: '09:51', operator: 'HR' },
      { time: '10:09', operator: 'HR' },
      { time: '10:27', operator: 'HR' },
      { time: '10:51', operator: 'HR' },
      { time: '11:09', operator: 'HR' },
      { time: '11:27', operator: 'HR' },
      { time: '11:45', operator: 'HR' },
      { time: '12:03', operator: 'HR' },
      { time: '12:21', operator: 'HR' },
      { time: '12:33', operator: 'HR' },
      { time: '12:51', operator: 'HR' },
      { time: '13:09', operator: 'HR' },
      { time: '13:27', operator: 'HR' },
      { time: '13:45', operator: 'HR' },
      { time: '14:09', operator: 'HR' },
      { time: '14:27', operator: 'HR' },
      { time: '14:45', operator: 'HR' },
      { time: '15:03', operator: 'HR' },
      { time: '15:21', operator: 'HR' },
      { time: '15:39', operator: 'HR' },
      { time: '15:57', operator: 'HR' },
      { time: '16:57', operator: 'HR' },
      { time: '17:15', operator: 'HR' },
    ]
  },

  {
    id: 'NAR-DEL-ROH-ORD-2',
    routeNumber: 'NAR-DEL-02',
    from: 'Narwana',
    to: 'Delhi',
    via: 'Rohtak',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '05:00', operator: 'HR' },
    ]
  },

  {
    id: 'NAR-GGN-BAD-ORD-2',
    routeNumber: 'NAR-GGN-03',
    from: 'Narwana',
    to: 'Gurugram',
    via: 'Badli',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '05:40', operator: 'HR' },
      { time: '06:35', operator: 'HR' },
    ]
  },

  {
    id: 'NAR-GGN-JHA-ORD',
    routeNumber: 'NAR-GGN-04',
    from: 'Narwana',
    to: 'Gurugram',
    via: 'Jhajjar',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '07:50', operator: 'HR' },
    ]
  },

  {
    id: 'NAR-BAH-ROH-ORD-2',
    routeNumber: 'NAR-BAH-02',
    from: 'Narwana',
    to: 'Bahadurgarh',
    via: 'Rohtak',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '06:00', operator: 'HR' },
    ]
  },

  {
    id: 'NAR-ROH-JIN-ORD',
    routeNumber: 'NAR-ROH-02',
    from: 'Narwana',
    to: 'Rohtak',
    via: 'Jind',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '06:15', operator: 'HR' },
    ]
  },

  {
    id: 'NAR-JAI-GGN-ORD',
    routeNumber: 'NAR-JAI-01',
    from: 'Narwana',
    to: 'Jaipur',
    via: 'Gurugram',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '09:25', operator: 'HR' },
    ]
  },

  {
    id: 'NAR-CHD-PAT-ORD',
    routeNumber: 'NAR-CHD-01',
    from: 'Narwana',
    to: 'Chandigarh',
    via: 'Patiala',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '05:10', operator: 'HR' },
      { time: '07:50', operator: 'HR' },
    ]
  },

  {
    id: 'NAR-PAT-KHA-ORD',
    routeNumber: 'NAR-PAT-01',
    from: 'Narwana',
    to: 'Patiala',
    via: 'Khanori',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '10:05', operator: 'HR' },
      { time: '10:35', operator: 'HR' },
    ]
  },

  {
    id: 'NAR-KHA-GAR-ORD',
    routeNumber: 'NAR-KHA-01',
    from: 'Narwana',
    to: 'Khanori',
    via: 'Garhi',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '12:00', operator: 'HR' },
      { time: '13:00', operator: 'HR' },
      { time: '14:20', operator: 'HR' },
      { time: '14:40', operator: 'HR' },
      { time: '16:20', operator: 'HR' },
      { time: '16:40', operator: 'HR' },
    ]
  },

  {
    id: 'NAR-CHD-KAI-ORD',
    routeNumber: 'NAR-CHD-02',
    from: 'Narwana',
    to: 'Chandigarh',
    via: 'Kaithal',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '04:30', operator: 'HR' },
      { time: '04:50', operator: 'HR' },
      { time: '05:20', operator: 'HR' },
      { time: '05:40', operator: 'HR' },
    ]
  },

  {
    id: 'NAR-KAI-KAL-ORD',
    routeNumber: 'NAR-KAI-01',
    from: 'Narwana',
    to: 'Kaithal',
    via: 'Kalayat',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '06:40', operator: 'HR' },
    ]
  },

  {
    id: 'NAR-HIS-BAR-ORD',
    routeNumber: 'NAR-HIS-01',
    from: 'Narwana',
    to: 'Hisar',
    via: 'Barwala',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '06:11', operator: 'HR' },
      { time: '06:47', operator: 'HR' },
      { time: '07:14', operator: 'HR' },
    ]
  },

  {
    id: 'NAR-TOH-FUL-ORD',
    routeNumber: 'NAR-TOH-01',
    from: 'Narwana',
    to: 'Tohana',
    via: 'Fuliyan',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '06:50', operator: 'HR' },
      { time: '07:30', operator: 'HR' },
      { time: '09:20', operator: 'HR' },
      { time: '11:20', operator: 'HR' },
      { time: '12:20', operator: 'HR' },
      { time: '13:40', operator: 'HR' },
      { time: '15:00', operator: 'HR' },
      { time: '16:40', operator: 'HR' },
    ]
  },

  {
    id: 'NAR-TOH-DHA-ORD',
    routeNumber: 'NAR-TOH-02',
    from: 'Narwana',
    to: 'Tohana',
    via: 'Dhamtan',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '07:10', operator: 'HR' },
      { time: '08:20', operator: 'HR' },
      { time: '08:40', operator: 'HR' },
      { time: '09:40', operator: 'HR' },
      { time: '10:00', operator: 'HR' },
      { time: '10:20', operator: 'HR' },
      { time: '12:00', operator: 'HR' },
      { time: '12:40', operator: 'HR' },
      { time: '14:00', operator: 'HR' },
      { time: '15:20', operator: 'HR' },
      { time: '17:20', operator: 'HR' },
    ]
  },

  {
    id: 'NAR-TOH-SAM-ORD',
    routeNumber: 'NAR-TOH-03',
    from: 'Narwana',
    to: 'Tohana',
    via: 'Samain',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '16:10', operator: 'HR' },
    ]
  },

  // ===== SAFIDON SUB-DEPOT ROUTES =====
  {
    id: 'SAF-CHD-PAN-ORD',
    routeNumber: 'SAF-CHD-01',
    from: 'Safidon',
    to: 'Chandigarh',
    via: 'Panipat, Ambala',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '05:20', operator: 'HR' },
    ]
  },

  {
    id: 'SAF-CHD-ASA-ORD',
    routeNumber: 'SAF-CHD-02',
    from: 'Safidon',
    to: 'Chandigarh',
    via: 'Assandh, Karnal',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '06:20', operator: 'HR' },
    ]
  },

  {
    id: 'SAF-CHD-MUA-ORD',
    routeNumber: 'SAF-CHD-03',
    from: 'Safidon',
    to: 'Chandigarh',
    via: 'Muana, Karnal',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '05:40', operator: 'HR' },
    ]
  },

  {
    id: 'SAF-DEL-PAN-ORD',
    routeNumber: 'SAF-DEL-01',
    from: 'Safidon',
    to: 'Delhi ISBT',
    via: 'Panipat, Murthal',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '05:00', operator: 'HR' },
      { time: '06:20', operator: 'HR' },
      { time: '06:40', operator: 'HR' },
      { time: '08:00', operator: 'HR' },
    ]
  },

  {
    id: 'SAF-SIR-JIN-ORD',
    routeNumber: 'SAF-SIR-02',
    from: 'Safidon',
    to: 'Sirsa',
    via: 'Jind, Hisar',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '06:10', operator: 'HR' },
      { time: '09:00', operator: 'HR' },
    ]
  },

  {
    id: 'SAF-HIS-JIN-ORD',
    routeNumber: 'SAF-HIS-01',
    from: 'Safidon',
    to: 'Hisar',
    via: 'Jind, Hansi',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '06:25', operator: 'HR' },
      { time: '11:30', operator: 'HR' },
    ]
  },

  {
    id: 'SAF-JIN-JAM-ORD',
    routeNumber: 'SAF-JIN-01',
    from: 'Safidon',
    to: 'Jind',
    via: 'Jamni',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '07:40', operator: 'HR' },
      { time: '08:20', operator: 'HR' },
      { time: '13:00', operator: 'HR' },
      { time: '15:00', operator: 'HR' },
      { time: '15:30', operator: 'HR' },
      { time: '16:00', operator: 'HR' },
      { time: '17:00', operator: 'HR' },
    ]
  },

  {
    id: 'SAF-PAN-MAT-ORD',
    routeNumber: 'SAF-PAN-01',
    from: 'Safidon',
    to: 'Panipat',
    via: 'Matlouda',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '05:50', operator: 'HR' },
      { time: '09:00', operator: 'HR' },
      { time: '12:30', operator: 'HR' },
    ]
  },

  {
    id: 'SAF-DEH-PAN-ORD',
    routeNumber: 'SAF-DEH-01',
    from: 'Safidon',
    to: 'Dehradun',
    via: 'Panipat, Shamli',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '07:30', operator: 'HR' },
    ]
  },

  {
    id: 'SAF-ROH-GOH-ORD',
    routeNumber: 'SAF-ROH-01',
    from: 'Safidon',
    to: 'Rohtak',
    via: 'Gohana',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '06:40', operator: 'HR' },
    ]
  },

  {
    id: 'SAF-ASA-KHE-ORD',
    routeNumber: 'SAF-ASA-01',
    from: 'Safidon',
    to: 'Asandh',
    via: 'Khera',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '16:30', operator: 'HR' },
      { time: '17:00', operator: 'HR' },
    ]
  },

  {
    id: 'SAF-GOH-URL-ORD',
    routeNumber: 'SAF-GOH-01',
    from: 'Safidon',
    to: 'Gohana',
    via: 'Urlana',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '11:00', operator: 'HR' },
    ]
  },

  {
    id: 'SAF-GOH-HAT-ORD',
    routeNumber: 'SAF-GOH-02',
    from: 'Safidon',
    to: 'Gohana',
    via: 'Hatt',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '14:10', operator: 'HR' },
    ]
  },

  {
    id: 'SAF-ANC-HAT-ORD',
    routeNumber: 'SAF-ANC-01',
    from: 'Safidon',
    to: 'Anchra Kalan',
    via: 'Hatt',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '17:00', operator: 'HR' },
    ]
  },

  {
    id: 'SAF-MOR-JAM-ORD',
    routeNumber: 'SAF-MOR-01',
    from: 'Safidon',
    to: 'Morkhi',
    via: 'Jamni',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '17:10', operator: 'HR' },
    ]
  },

  {
    id: 'SAF-PIL-JAM-ORD',
    routeNumber: 'SAF-PIL-01',
    from: 'Safidon',
    to: 'Pillu Khera',
    via: 'Jamni',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '16:30', operator: 'HR' },
    ]
  },

  {
    id: 'SAF-LUD-HAT-ORD',
    routeNumber: 'SAF-LUD-01',
    from: 'Safidon',
    to: 'Ludana',
    via: 'Hatt',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '17:30', operator: 'HR' },
    ]
  },

  {
    id: 'SAF-BHA-MOR-ORD',
    routeNumber: 'SAF-BHA-01',
    from: 'Safidon',
    to: 'Bhambhewa',
    via: 'Morkhi',
    depot: 'Jind',
    busType: 'Ordinary',
    serviceDays: 'All Days',
    departureTimes: [
      { time: '17:00', operator: 'HR' },
    ]
  },
];

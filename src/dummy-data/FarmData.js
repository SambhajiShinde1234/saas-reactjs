export const FARMS = [
  {
    farmId: 1,
    name: 'Green Acres Farm',
    location: 'Valley Creek, TX',
    manager: 'Anna Thompson',
    totalArea: '150 acres',
    crops: ['Wheat', 'Corn', 'Soybean'],
    revenue: 60000,
    expenses: 10500,
    netProfit: 49500,
    todaysWhether: {
      day: 'Monday',
      date: '10 Nov, 2024',
      temparature: {
        value: 20,
        unit: 'c',
      },
      windSpeed: {
        value: 25,
        unit: 'km/h',
      },
      humidity: {
        value: 10,
        unit: '%',
      },
    },
    fields: [
      {
        fieldId: 101,
        name: 'North Field',
        crop: 'Wheat',
        irrigationStatus: 'Active',
        area: '50 acres',
        soilMoistureLevels: [
          { day: '2024-11-01', moisture: 22 },
          { day: '2024-11-02', moisture: 28 },
          { day: '2024-11-03', moisture: 25 },
          { day: '2024-11-04', moisture: 22 },
          { day: '2024-11-05', moisture: 28 },
          { day: '2024-11-06', moisture: 25 },
          { day: '2024-11-07', moisture: 22 },
          { day: '2024-11-08', moisture: 28 },
        ],
        tempratureHumidityReadings: [
          { day: '2024-11-01', temparature: 22, humidity: 80 },
          { day: '2024-11-02', temparature: 28, humidity: 70 },
          { day: '2024-11-03', temparature: 25, humidity: 75 },
          { day: '2024-11-04', temparature: 22, humidity: 80 },
          { day: '2024-11-05', temparature: 28, humidity: 70 },
          { day: '2024-11-06', temparature: 25, humidity: 75 },
          { day: '2024-11-07', temparature: 22, humidity: 80 },
          { day: '2024-11-08', temparature: 28, humidity: 70 },
        ],
        humidityReadings: [
          { timestamp: '2024-11-01T06:00:00Z', value: 80 },
          { timestamp: '2024-11-01T12:00:00Z', value: 70 },
          { timestamp: '2024-11-01T18:00:00Z', value: 75 },
        ],
        fertilizerUsage: [
          { month: '2024-01', value: 20 },
          { month: '2024-02', value: 25 },
          { month: '2024-03', value: 22 },
        ],
        pesticideFertilizerUsage: [
          { month: '2024-01', pesticide: 5, fertilizer: 20 },
          { month: '2024-02', pesticide: 4, fertilizer: 10 },
          { month: '2024-03', pesticide: 6, fertilizer: 30 },
          { month: '2024-04', pesticide: 5, fertilizer: 20 },
          { month: '2024-05', pesticide: 5, fertilizer: 20 },
          { month: '2024-06', pesticide: 5, fertilizer: 20 },
          { month: '2024-07', pesticide: 5, fertilizer: 20 },
        ],
        yield: [
          { year: 2021, production: 18 },
          { year: 2022, production: 18 },
          { year: 2023, production: 15 },
          { year: 2024, production: 18 },
        ],
      },
      {
        fieldId: 102,
        name: 'South Field',
        crop: 'Corn',
        irrigationStatus: 'Active',
        area: '60 acres',
        soilMoistureLevels: [
          { timestamp: '2024-11-01T06:00:00Z', value: 45 },
          { timestamp: '2024-11-01T12:00:00Z', value: 48 },
          { timestamp: '2024-11-01T18:00:00Z', value: 47 },
        ],
        temperatureReadings: [
          { timestamp: '2024-11-01T06:00:00Z', value: 21 },
          { timestamp: '2024-11-01T12:00:00Z', value: 27 },
          { timestamp: '2024-11-01T18:00:00Z', value: 24 },
        ],
        humidityReadings: [
          { timestamp: '2024-11-01T06:00:00Z', value: 78 },
          { timestamp: '2024-11-01T12:00:00Z', value: 73 },
          { timestamp: '2024-11-01T18:00:00Z', value: 76 },
        ],
        fertilizerUsage: [
          { month: '2024-01', value: 30 },
          { month: '2024-02', value: 32 },
          { month: '2024-03', value: 35 },
        ],
        pesticideUsage: [
          { month: '2024-01', value: 6 },
          { month: '2024-02', value: 7 },
          { month: '2024-03', value: 5 },
        ],
        yield: [
          { year: 2023, value: 25 },
          { year: 2024, value: 27 },
        ],
      },
    ],
    weather: {
      temperature: [
        { timestamp: '2024-11-01T00:00:00Z', value: 24 },
        { timestamp: '2024-11-01T06:00:00Z', value: 22 },
        { timestamp: '2024-11-01T12:00:00Z', value: 28 },
        { timestamp: '2024-11-01T18:00:00Z', value: 25 },
      ],
      humidity: [
        { timestamp: '2024-11-01T00:00:00Z', value: 85 },
        { timestamp: '2024-11-01T06:00:00Z', value: 80 },
        { timestamp: '2024-11-01T12:00:00Z', value: 70 },
        { timestamp: '2024-11-01T18:00:00Z', value: 75 },
      ],
      rainfall: [
        { month: '2024-01', value: 120 },
        { month: '2024-02', value: 90 },
        { month: '2024-03', value: 85 },
      ],
    },
    alerts: [
      {
        timestamp: '2024-11-01T05:00:00Z',
        type: 'Irrigation Required',
        severity: 'High',
        details: 'Soil moisture level below threshold in North Field.',
      },
      {
        timestamp: '2024-11-01T12:00:00Z',
        type: 'Temperature Drop',
        severity: 'Medium',
        details: 'Sudden temperature drop detected in South Field.',
      },
    ],
    financials: {
      fertilizerCost: [
        { month: '2024-01', value: 1000 },
        { month: '2024-02', value: 1200 },
        { month: '2024-03', value: 1100 },
      ],
      pesticideCost: [
        { month: '2024-01', value: 500 },
        { month: '2024-02', value: 550 },
        { month: '2024-03', value: 600 },
      ],
      totalRevenue: [
        { year: 2023, value: 50000 },
        { year: 2024, value: 60000 },
      ],
    },
  },
];

export const LABOR_MANAGEMENT = [
  {
    task: 'Harvesting',
    date: '2024-11-01',
    workers: 10,
    cost: 500,
    duration: '6 hours',
    output: '10 tons',
    efficiency: '1.67 tons/worker-hour',
  },
  {
    task: 'Irrigation',
    date: '2024-11-02',
    workers: 5,
    cost: 250,
    duration: '3 hours',
    output: 'N/A',
    efficiency: '1 field/hour',
  },
  {
    task: 'Planting',
    date: '2024-11-03',
    workers: 8,
    cost: 400,
    duration: '5 hours',
    output: '15 acres planted',
    efficiency: '1.875 acres/worker-hour',
  },
];

export const ALERT_WITH_NOTIFICATIONS = [
  { 
    alertId: 1, 
    timestamp: '2024-11-01T05:00:00Z', 
    type: 'Irrigation Required', 
    severity: 'High', 
    field: 'North Field', 
    action: 'Increase irrigation by 20%' 
  },
  { 
    alertId: 2, 
    timestamp: '2024-11-01T12:00:00Z', 
    type: 'Temperature Drop', 
    severity: 'Medium', 
    field: 'South Field', 
    action: 'Apply protective covers for crops' 
  },
];

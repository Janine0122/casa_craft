export type ReportPeriod = 'Week' | 'Month' | 'Year';

export type SalesBar = {
  label: string;
  collected: number;
  unpaid: number;
};

export type TopSeller = {
  name: string;
  amount: number;
  unitsSold: number;
  percentOfTop: number; // 0-100, relative to the top seller
};

export type ReportData = {
  totalSales: number;
  salesLabel: string;
  percentChange: number;
  bars: SalesBar[];
  collected: number;
  unpaidBalances: number;
  deliveryPercent: number;
  pickupPercent: number;
  topSellers: TopSeller[];
};

export const reportsByPeriod: Record<ReportPeriod, ReportData> = {
  Week: {
    totalSales: 215000,
    salesLabel: 'Sales, last 7 days',
    percentChange: 8,
    bars: [
      { label: 'Mon', collected: 22000, unpaid: 3000 },
      { label: 'Tue', collected: 18000, unpaid: 2000 },
      { label: 'Wed', collected: 30000, unpaid: 5000 },
      { label: 'Thu', collected: 25000, unpaid: 4000 },
      { label: 'Fri', collected: 35000, unpaid: 6000 },
      { label: 'Sat', collected: 40000, unpaid: 7000 },
      { label: 'Sun', collected: 15000, unpaid: 3000 },
    ],
    collected: 185000,
    unpaidBalances: 30000,
    deliveryPercent: 58,
    pickupPercent: 42,
    topSellers: [
      { name: 'Marlo sofa', amount: 51000, unitsSold: 2, percentOfTop: 100 },
      { name: 'Tala table', amount: 32850, unitsSold: 1.5, percentOfTop: 64 },
      { name: 'Kaya bed', amount: 28000, unitsSold: 1, percentOfTop: 55 },
    ],
  },
  Month: {
    totalSales: 842000,
    salesLabel: 'Sales, last 4 weeks',
    percentChange: 12,
    bars: [
      { label: 'W1', collected: 92000, unpaid: 8000 },
      { label: 'W2', collected: 112000, unpaid: 15000 },
      { label: 'W3', collected: 78000, unpaid: 12000 },
      { label: 'W4', collected: 95000, unpaid: 18000 },
    ],
    collected: 771000,
    unpaidBalances: 71000,
    deliveryPercent: 64,
    pickupPercent: 36,
    topSellers: [
      { name: 'Marlo sofa', amount: 207000, unitsSold: 6, percentOfTop: 100 },
      { name: 'Kaya bed', amount: 112000, unitsSold: 4, percentOfTop: 54 },
      { name: 'Tala table', amount: 109500, unitsSold: 5, percentOfTop: 53 },
    ],
  },
  Year: {
    totalSales: 9450000,
    salesLabel: 'Sales, last 12 months',
    percentChange: 21,
    bars: [
      { label: 'Q1', collected: 1900000, unpaid: 210000 },
      { label: 'Q2', collected: 2300000, unpaid: 260000 },
      { label: 'Q3', collected: 2050000, unpaid: 190000 },
      { label: 'Q4', collected: 2400000, unpaid: 280000 },
    ],
    collected: 8650000,
    unpaidBalances: 940000,
    deliveryPercent: 61,
    pickupPercent: 39,
    topSellers: [
      { name: 'Marlo sofa', amount: 2480000, unitsSold: 72, percentOfTop: 100 },
      { name: 'Kaya bed', amount: 1340000, unitsSold: 48, percentOfTop: 54 },
      { name: 'Tala table', amount: 1215000, unitsSold: 55, percentOfTop: 49 },
    ],
  },
};
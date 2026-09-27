export type AdminOrderStatus =
  | 'Awaiting approval'
  | 'Scheduled'
  | 'Ready for pickup'
  | 'Completed';

export type AdminOrder = {
  id: string;
  code: string;
  customerName: string;
  productLabel: string;
  status: AdminOrderStatus;
  // Quotation-specific
  requestedAgo?: string;
  changes?: { label: string; from: string; to: string }[];
  newPrice?: number;
  priceDelta?: number;
  // Fulfillment-specific
  fulfillmentType?: 'Pickup' | 'Delivery';
  fulfillmentNote?: string;
  amountPaid?: number;
  orderTotal?: number;
  completedNote?: string;
};

export const adminOrders: AdminOrder[] = [
  {
    id: 'o1',
    code: 'CC-1045',
    customerName: 'Paolo Diaz',
    productLabel: 'Kaya platform bed, Queen',
    status: 'Awaiting approval',
    requestedAgo: 'Requested 2 hours ago',
    changes: [
      { label: 'Color', from: 'Walnut', to: 'Charcoal oak' },
      { label: 'Headboard', from: 'Standard', to: 'Tall, +10 cm' },
    ],
    newPrice: 30500,
    priceDelta: 2500,
  },
  {
    id: 'o2',
    code: 'CC-1044',
    customerName: 'Rina Alvarez',
    productLabel: 'Tala dining table',
    status: 'Awaiting approval',
    requestedAgo: 'Requested 5 hours ago',
    changes: [{ label: 'Size', from: '150 cm', to: '180 cm, +₱1,800' }],
    newPrice: 23700,
    priceDelta: 1800,
  },
  {
    id: 'o3',
    code: 'CC-1038',
    customerName: 'Lea Ramos',
    productLabel: 'Isla rattan chair',
    status: 'Ready for pickup',
    fulfillmentType: 'Pickup',
    fulfillmentNote: 'Pickup today, 9:30 AM',
    amountPaid: 6800,
    orderTotal: 6800,
  },
  {
    id: 'o4',
    code: 'CC-1041',
    customerName: 'Jo Ortega',
    productLabel: '2 × Bano bookshelf, Oat',
    status: 'Scheduled',
    fulfillmentType: 'Delivery',
    fulfillmentNote: 'Delivery today, 1:00 PM',
    amountPaid: 7440,
    orderTotal: 24800,
  },
  {
    id: 'o5',
    code: 'CC-1030',
    customerName: 'Ana Reyes',
    productLabel: 'Tala dining table, 180 cm',
    status: 'Completed',
    completedNote: 'Picked up Sep 12',
    amountPaid: 21900,
    orderTotal: 21900,
  },
];
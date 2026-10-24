export type AdminOrderStatus =
  | 'Awaiting approval'
  | 'Scheduled'
  | 'Ready for pickup'
  | 'Completed';

export type FulfillmentStepState = 'done' | 'current' | 'upcoming';

export type FulfillmentStep = {
  label: string;
  date?: string;
  state: FulfillmentStepState;
};

export type AdminOrder = {
  id: string;
  code: string;
  customerName: string;
  customerInitials: string;
  productLabel: string;
  status: AdminOrderStatus;
  reservedDate?: string;
  // Quotation-specific
  requestedAgo?: string;
  changes?: { label: string; from: string; to: string }[];
  newPrice?: number;
  priceDelta?: number;
  // Item specifics
  itemFinish?: string;
  itemSize?: string;
  itemQuantity?: number;
  itemPrice?: number;
  // Fulfillment-specific
  fulfillmentType?: 'Pickup' | 'Delivery';
  fulfillmentNote?: string;
  fulfillmentSteps?: FulfillmentStep[];
  deliveryWindow?: string;
  deliveryAddress?: string;
  amountPaid?: number;
  orderTotal?: number;
  depositPercent?: number;
  completedNote?: string;
};

export const adminOrders: AdminOrder[] = [
  {
    id: 'o1',
    code: 'CC-1045',
    customerName: 'Paolo Diaz',
    customerInitials: 'PD',
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
    customerInitials: 'RA',
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
    customerInitials: 'LR',
    productLabel: 'Isla rattan chair',
    status: 'Ready for pickup',
    reservedDate: 'Sep 10',
    itemFinish: 'Natural rattan',
    itemSize: 'Standard',
    itemQuantity: 1,
    itemPrice: 6800,
    fulfillmentType: 'Pickup',
    fulfillmentNote: 'Pickup today, 9:30 AM',
    fulfillmentSteps: [
      { label: 'Reserved', date: 'Sep 10', state: 'done' },
      { label: 'Deposit paid', date: 'Sep 10, ₱2,040', state: 'done' },
      { label: 'Packed and ready', date: 'Sep 18', state: 'done' },
      { label: 'Ready for pickup', date: 'Today, 9:30 AM', state: 'current' },
      { label: 'Picked up', state: 'upcoming' },
    ],
    amountPaid: 6800,
    orderTotal: 6800,
    depositPercent: 30,
  },
  {
    id: 'o4',
    code: 'CC-1041',
    customerName: 'Jo Ortega',
    customerInitials: 'JO',
    productLabel: 'Bano bookshelf',
    status: 'Scheduled',
    reservedDate: 'Sep 14',
    itemFinish: 'Oat finish',
    itemSize: '90 × 180 cm',
    itemQuantity: 2,
    itemPrice: 24800,
    fulfillmentType: 'Delivery',
    fulfillmentNote: 'Delivery today, 1:00 PM',
    fulfillmentSteps: [
      { label: 'Reserved', date: 'Sep 14', state: 'done' },
      { label: 'Deposit paid', date: 'Sep 14, ₱7,440', state: 'done' },
      { label: 'Packed and ready', date: 'Sep 19', state: 'done' },
      { label: 'Out for delivery', date: 'Today, 1:00 to 2:00 PM', state: 'current' },
      { label: 'Delivered', date: 'Balance collected on arrival', state: 'upcoming' },
    ],
    deliveryWindow: 'Today, 1:00 to 2:00 PM',
    deliveryAddress: 'Blk 4 Lot 12, Sampaguita Street',
    amountPaid: 7440,
    orderTotal: 24800,
    depositPercent: 30,
  },
  {
    id: 'o5',
    code: 'CC-1030',
    customerName: 'Ana Reyes',
    customerInitials: 'AR',
    productLabel: 'Tala dining table',
    status: 'Completed',
    reservedDate: 'Sep 5',
    itemFinish: 'Walnut',
    itemSize: '180 cm',
    itemQuantity: 1,
    itemPrice: 21900,
    fulfillmentType: 'Pickup',
    fulfillmentSteps: [
      { label: 'Reserved', date: 'Sep 5', state: 'done' },
      { label: 'Deposit paid', date: 'Sep 5, ₱6,570', state: 'done' },
      { label: 'Packed and ready', date: 'Sep 11', state: 'done' },
      { label: 'Picked up', date: 'Sep 12', state: 'done' },
    ],
    completedNote: 'Picked up Sep 12',
    amountPaid: 21900,
    orderTotal: 21900,
    depositPercent: 30,
  },
];
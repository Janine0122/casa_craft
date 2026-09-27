export type AttentionItem = {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  actionLabel: string;
};

export const attentionItems: AttentionItem[] = [
  {
    id: 'a1',
    icon: '📋',
    title: "Paolo's custom request",
    subtitle: 'Kaya bed, Charcoal oak',
    actionLabel: 'Review',
  },
  {
    id: 'a2',
    icon: '⏰',
    title: 'Deposit unpaid',
    subtitle: 'Marco Tan, Marlo sofa',
    actionLabel: 'Follow up',
  },
  {
    id: 'a3',
    icon: '⚠️',
    title: 'Isla rattan chair',
    subtitle: '1 left in stock',
    actionLabel: 'Restock',
  },
];

export type ScheduleItem = {
  id: string;
  time: string;
  type: 'Pickup' | 'Delivery';
  customerName: string;
  description: string;
  status: string;
};

export const todaySchedule: ScheduleItem[] = [
  {
    id: 'sch1',
    time: '9:30 AM',
    type: 'Pickup',
    customerName: 'Lea Ramos',
    description: 'Isla chair, paid in full',
    status: 'Ready for pickup',
  },
  {
    id: 'sch2',
    time: '1:00 PM',
    type: 'Delivery',
    customerName: 'Jo Ortega',
    description: '2 × Bano bookshelf, collect ₱17,360',
    status: 'Scheduled',
  },
  {
    id: 'sch3',
    time: '4:30 PM',
    type: 'Delivery',
    customerName: 'Dina Cruz',
    description: 'Marlo sofa, paid in full',
    status: 'Scheduled',
  },
];

export const lowStockCount = 2;
export const dueTodayCount = 3;
export const toApproveCount = 2;
export type NotificationItem = {
  id: string;
  icon: string;
  title: string;
  description: string;
  time: string;
  section: 'Today' | 'Earlier';
  type: 'Orders' | 'Quotation';
};

export const notificationData: NotificationItem[] = [
  {
    id: 'n1',
    icon: '✓',
    title: 'Quotation Approved',
    description: 'Your quotation for the Center Table was approved.',
    time: '10 minutes ago',
    section: 'Today',
    type: 'Quotation',
  },
  {
    id: 'n2',
    icon: '📦',
    title: 'Order Update',
    description: 'Your Custom Chair is now in production.',
    time: '20 minutes ago',
    section: 'Today',
    type: 'Orders',
  },
  {
    id: 'n3',
    icon: '📍',
    title: 'Payment Confirmed',
    description: 'Your deposit of ₱2,500 has been received.',
    time: '25 minutes ago',
    section: 'Today',
    type: 'Orders',
  },
  {
    id: 'n4',
    icon: '✓',
    title: 'Quotation Approved',
    description: 'Your quotation for the Spencer Bed was approved.',
    time: 'Yesterday',
    section: 'Earlier',
    type: 'Quotation',
  },
  {
    id: 'n5',
    icon: '📍',
    title: 'Payment Confirmed',
    description: 'Your deposit of ₱3,500 has been received.',
    time: 'Yesterday',
    section: 'Earlier',
    type: 'Orders',
  },
];
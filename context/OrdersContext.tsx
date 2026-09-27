import { createContext, useContext, useState, ReactNode } from 'react';
import { FurnitureItem } from '../data/furniture_data';

export type OrderStatus = 'To Pay' | 'To Receive' | 'Completed';

export type Order = {
  id: string;
  item: FurnitureItem;
  size: string;
  color: string;
  material?: string;
  specialRequest?: string;
  quantity: number;
  fulfillment: 'Pickup' | 'Delivery';
  deliveryAddress?: string;
  deliveryTime?: string;
  preferredDate: string;
  total: number;
  deposit: number;
  status: OrderStatus;
};

type OrdersContextType = {
  orders: Order[];
  addOrder: (order: Omit<Order, 'id' | 'status'>) => void;
};

const OrdersContext = createContext<OrdersContextType | undefined>(undefined);

export function OrdersProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useState<Order[]>([]);

  const addOrder = (order: Omit<Order, 'id' | 'status'>) => {
    const newOrder: Order = {
      ...order,
      id: `order-${Date.now()}`,
      status: 'To Pay',
    };
    setOrders((prev) => [newOrder, ...prev]);
  };

  return (
    <OrdersContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrdersContext.Provider>
  );
}

export function useOrders() {
  const context = useContext(OrdersContext);
  if (!context) {
    throw new Error('useOrders must be used within an OrdersProvider');
  }
  return context;
}
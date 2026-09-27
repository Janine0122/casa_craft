import { furnitureData, FurnitureItem } from '../data/furniture_data';

export type AdminProduct = {
  item: FurnitureItem;
  visible: boolean;
  stockQty: number; // only meaningful for "In Stock" items
  leadTime?: string; // only meaningful for "Made Order" items
};

export const initialAdminProducts: AdminProduct[] = furnitureData.map((item) => ({
  item,
  visible: true,
  stockQty: item.stockCount ?? 0,
  leadTime: item.readyDays ? `Made to order, ${item.readyDays} days` : undefined,
}));
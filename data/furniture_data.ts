export type FurnitureItem = {
  id: string;
  name: string;
  price: number;
  category: 'Shelf' | 'Chairs' | 'Tables' | 'Bed';
  stockStatus: 'In Stock' | 'Made Order';
  featured?: boolean;
  description: string;
  materials: string[];
  sizes: string[];
  colors: string[];
  stockCount?: number;
  readyDays?: number;
};

export const colorHex: Record<string, string> = {
  'Natural Oak': '#C9A876',
  Walnut: '#5C3A21',
  White: '#F7F1E8',
  'Blush Pink': '#E8B4B8',
  'Sage Green': '#9CAF88',
  Charcoal: '#3B3B3B',
  'White Wash': '#EDE6DA',
  'Natural Rattan': '#C9A876',
  Beige: '#E8DCC8',
  Gray: '#A9A9A9',
  Terracotta: '#C1633A',
  Espresso: '#3B2A1A',
  Natural: '#D8C3A0',
  Navy: '#2C3E63',
  Cream: '#F2E9DC',
  Bamboo: '#D8C48A',
  Black: '#2B2B2B',
};

export const furnitureData: FurnitureItem[] = [
  // Shelf
  {
    id: 's1', name: 'Floating Shelf', price: 3500, category: 'Shelf', stockStatus: 'In Stock', featured: true, stockCount: 6,
    description: 'A sleek floating shelf that adds display space without taking up floor room. Perfect for books, plants, or decor.',
    materials: ['Solid Wood', 'Metal Bracket'], sizes: ['24"', '36"', '48"'], colors: ['Natural Oak', 'Walnut', 'White'],
  },
  {
    id: 's2', name: 'Corner Wall Shelf', price: 1500, category: 'Shelf', stockStatus: 'Made Order', readyDays: 5,
    description: 'A space-saving corner shelf, ideal for small rooms or awkward wall corners that need a functional touch.',
    materials: ['Plywood', 'Steel Frame'], sizes: ['Small', 'Medium'], colors: ['Natural Oak', 'Black'],
  },
  {
    id: 's3', name: 'Modern Shelf', price: 1500, category: 'Shelf', stockStatus: 'In Stock', featured: true, stockCount: 8,
    description: 'Minimalist multi-tier shelving with clean lines, built for contemporary living spaces.',
    materials: ['Engineered Wood', 'Metal Frame'], sizes: ['3-Tier', '5-Tier'], colors: ['White', 'Black', 'Walnut'],
  },
  {
    id: 's4', name: 'Low Shelf', price: 3500, category: 'Shelf', stockStatus: 'In Stock', stockCount: 4,
    description: 'A low-profile shelf unit great for under windows or as a TV console with open storage.',
    materials: ['Solid Wood'], sizes: ['32"', '48"', '60"'], colors: ['Natural Oak', 'Walnut'],
  },
  {
    id: 's5', name: 'Hale Shelf', price: 1500, category: 'Shelf', stockStatus: 'Made Order', featured: true, readyDays: 7,
    description: 'An open ladder-style shelf that leans against the wall, combining storage and display in a compact footprint.',
    materials: ['Bamboo', 'Metal'], sizes: ['5-Tier'], colors: ['Natural', 'Black'],
  },

  // Chairs
  {
    id: 'c1', name: 'Serena Chair', price: 1500, category: 'Chairs', stockStatus: 'In Stock', featured: true, stockCount: 10,
    description: 'A cozy upholstered accent chair with soft curves, great for a reading nook or living room corner.',
    materials: ['Velvet Fabric', 'Wood Legs'], sizes: ['Standard'], colors: ['Blush Pink', 'Sage Green', 'Charcoal'],
  },
  {
    id: 'c2', name: 'Norwood Chair', price: 1500, category: 'Chairs', stockStatus: 'Made Order', readyDays: 6,
    description: 'A classic wooden dining chair with a curved backrest for everyday comfort.',
    materials: ['Solid Wood'], sizes: ['Standard'], colors: ['Natural Oak', 'Walnut', 'White Wash'],
  },
  {
    id: 'c3', name: 'Dining Chair', price: 1500, category: 'Chairs', stockStatus: 'In Stock', stockCount: 12,
    description: 'A simple, sturdy dining chair designed to complement most table styles.',
    materials: ['Solid Wood', 'Foam Padding'], sizes: ['Standard'], colors: ['Natural Oak', 'Black'],
  },
  {
    id: 'c4', name: 'Ancient Chair', price: 4500, category: 'Chairs', stockStatus: 'In Stock', featured: true, stockCount: 3,
    description: 'A statement rattan armchair with a woven backrest, inspired by vintage craftsmanship.',
    materials: ['Rattan', 'Solid Wood Frame'], sizes: ['Standard'], colors: ['Natural Rattan'],
  },
  {
    id: 'c5', name: 'Lounge Chair', price: 1500, category: 'Chairs', stockStatus: 'In Stock', stockCount: 5,
    description: 'A relaxed lounge chair with generous cushioning, built for long, comfortable sits.',
    materials: ['Linen Fabric', 'Wood Frame'], sizes: ['Standard'], colors: ['Beige', 'Gray', 'Terracotta'],
  },

  // Tables
  {
    id: 't1', name: 'Center Table', price: 3500, category: 'Tables', stockStatus: 'In Stock', featured: true, stockCount: 6,
    description: "A sturdy center table with a clean silhouette, perfect as your living room's focal point.",
    materials: ['Solid Wood', 'Metal Legs'], sizes: ['36" x 20"', '48" x 24"'], colors: ['Walnut', 'Natural Oak'],
  },
  {
    id: 't2', name: 'Madrid', price: 2500, category: 'Tables', stockStatus: 'Made Order', readyDays: 5,
    description: 'A refined side table with subtle Spanish-inspired detailing, great for pairing with a sofa or bed.',
    materials: ['Mango Wood'], sizes: ['Standard'], colors: ['Natural', 'Espresso'],
  },
  {
    id: 't3', name: 'Office Table', price: 2500, category: 'Tables', stockStatus: 'In Stock', stockCount: 7,
    description: 'A functional work desk with clean lines and enough surface space for a full home office setup.',
    materials: ['Engineered Wood', 'Steel Frame'], sizes: ['40"', '48"'], colors: ['White', 'Black', 'Oak'],
  },
  {
    id: 't4', name: 'Trinity', price: 3500, category: 'Tables', stockStatus: 'In Stock', featured: true, stockCount: 4,
    description: 'A three-legged accent table with a sculptural design that doubles as a decor piece.',
    materials: ['Solid Wood'], sizes: ['Standard'], colors: ['Walnut', 'Natural'],
  },
  {
    id: 't5', name: 'Kitchen Table', price: 1500, category: 'Tables', stockStatus: 'Made Order', readyDays: 4,
    description: 'A compact kitchen table suited for small dining spaces and everyday meals.',
    materials: ['Solid Wood'], sizes: ['30" x 30"', '36" x 36"'], colors: ['Natural Oak', 'White'],
  },

  // Bed
  {
    id: 'b1', name: 'Beatrice Bed', price: 12500, category: 'Bed', stockStatus: 'In Stock', featured: true, stockCount: 3,
    description: 'An upholstered platform bed with a tall tufted headboard for a soft, elegant bedroom centerpiece.',
    materials: ['Linen Upholstery', 'Solid Wood Frame'], sizes: ['Queen', 'King'], colors: ['Beige', 'Gray', 'Navy'],
  },
  {
    id: 'b2', name: 'Spencer Bed', price: 15500, category: 'Bed', stockStatus: 'Made Order', readyDays: 10,
    description: 'A modern wooden bed frame with clean geometric lines and a low-profile headboard.',
    materials: ['Solid Wood'], sizes: ['Queen', 'King'], colors: ['Walnut', 'Natural Oak'],
  },
  {
    id: 'b3', name: 'Bianca Bed', price: 15500, category: 'Bed', stockStatus: 'In Stock', featured: true, stockCount: 2,
    description: 'A luxurious upholstered bed with a curved headboard, designed for a soft hotel-like feel.',
    materials: ['Boucle Fabric', 'Wood Frame'], sizes: ['Queen', 'King'], colors: ['Cream', 'Gray'],
  },
  {
    id: 'b4', name: 'Ellie Bed', price: 17500, category: 'Bed', stockStatus: 'In Stock', stockCount: 2,
    description: 'A statement canopy-style bed frame that adds height and drama to any bedroom.',
    materials: ['Solid Wood'], sizes: ['Queen', 'King'], colors: ['Natural', 'Espresso'],
  },
  {
    id: 'b5', name: 'Brielle Single Bed', price: 12500, category: 'Bed', stockStatus: 'Made Order', readyDays: 8,
    description: "A compact single bed frame ideal for kids' rooms or smaller bedrooms.",
    materials: ['Solid Wood'], sizes: ['Single', 'Twin XL'], colors: ['White', 'Natural Oak'],
  },
];
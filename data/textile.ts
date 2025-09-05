import { Product } from './types';

export const textileProducts: Product[] = [
  {
    id: 11,
    name: 'Hedamo Organic Cotton Shirt',
    image: 'https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D',
    gallery: [
      'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D',
      'https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D'
    ],
    category: 'Textile',
    description: 'Soft, breathable shirt made from 100% organic cotton.',
    features: ['Organic Cotton', 'Breathable', 'Eco-Friendly'],
    traceability: { origin: 'India', batchId: 'T12345', processedAt: '2024-06' },
    reviews: [
      { user: 'Sophia', comment: 'Very comfortable to wear.', rating: 5 },
      { user: 'Ethan', comment: 'Good fabric quality.', rating: 4 },
    ],
    price: { amount: 29.99, currency: 'USD' },
    inStock: true,
  },
  {
    id: 12,
    name: 'Hedamo Wool Scarf',
    image: 'https://images.unsplash.com/photo-1457545195570-67f207084966?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2NhcnZlc3xlbnwwfHwwfHx8MA%3D%3D',
    gallery: [
      'https://images.unsplash.com/photo-1485527691629-8e370684924c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2NhcmZ8ZW58MHx8MHx8fDA%3D',
      'https://images.unsplash.com/photo-1677878064929-6f102c6ddaf2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdpbnRlciUyMHNjYXJmfGVufDB8fDB8fHww'
    ],
    category: 'Textile',
    description: 'Handwoven wool scarf, warm and stylish.',
    features: ['Handwoven', 'Warm', 'Sustainable'],
    traceability: { origin: 'Nepal', batchId: 'W67890', processedAt: '2024-04' },
    reviews: [{ user: 'Liam', comment: 'Keeps me warm in winter.', rating: 5 }],
    price: { amount: 39.99, currency: 'USD' },
    inStock: true,
  },
];

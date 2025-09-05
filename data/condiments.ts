import { Product } from './types';

export const condimentProducts: Product[] = [
  {
    id: 9,
    name: 'Hedamo Organic Olive Oil',
    image: 'https://images.unsplash.com/photo-1527756898251-203e9ce0d9c4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2xpdmUlMjBvaWx8ZW58MHx8MHx8fDA%3D',
    gallery: [
      'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2xpdmUlMjBvaWx8ZW58MHx8MHx8fDA%3D',
    ],
    category: 'Condiments',
    description: 'Cold-pressed organic olive oil from Mediterranean groves.',
    features: ['Cold-Pressed', 'Organic', 'Extra Virgin'],
    nutrition: {
      calories: 120,
      sugar: '0g',
      fat: '14g',
    },
    traceability: { origin: 'Italy', batchId: 'O12345', harvestedAt: '2024-04' },
    reviews: [
      { user: 'Isabella', comment: 'Perfect for salads!', rating: 5 },
      { user: 'Lucas', comment: 'Rich taste.', rating: 4 },
    ],
    price: { amount: 17.99, currency: 'USD' },
    inStock: true,
  },
  {
    id: 10,
    name: 'Hedamo Balsamic Vinegar',
    image: 'https://images.unsplash.com/photo-1499126167718-c87f5c1387e8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmluZWdhcnxlbnwwfHwwfHx8MA%3D%3D',
    gallery: [
      'https://images.unsplash.com/photo-1649533689664-55c670b25124?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZpbmVnYXJ8ZW58MHx8MHx8fDA%3D',
    ],
    category: 'Condiments',
    description: 'Aged balsamic vinegar with a rich, tangy flavor.',
    features: ['Aged', 'Organic', 'No Additives'],
    nutrition: {
      calories: 88,
      sugar: '15g',
      carbs: '17g',
    },
    traceability: { origin: 'Modena, Italy', batchId: 'V67890', processedAt: '2024-05' },
    reviews: [{ user: 'Charlotte', comment: 'Great for dressings!', rating: 5 }],
    price: { amount: 13.99, currency: 'USD' },
    inStock: true,
  },
];
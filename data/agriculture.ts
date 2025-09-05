import { Product } from './types';

export const agricultureProducts: Product[] = [
  {
    id: 13,
    name: 'Hedamo Organic Wheat',
    image: 'https://images.unsplash.com/photo-1437252611977-07f74518abd7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hlYXQlMjBoYXJ2ZXN0fGVufDB8fDB8fHww',
    gallery: [
      'https://plus.unsplash.com/premium_photo-1670909649532-d1d68ee475cd?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2hlYXR8ZW58MHx8MHx8fDA%3D',
    ],
    category: 'Agriculture',
    description: 'High-quality organic wheat grains, perfect for bread and chapati.',
    features: ['Organic', 'Whole Grain', 'Non-GMO'],
    traceability: { origin: 'Punjab, India', batchId: 'A12345', harvestedAt: '2024-03' },
    reviews: [
      { user: 'Aarav', comment: 'Makes soft chapatis.', rating: 5 },
      { user: 'Mia', comment: 'Very fresh grains.', rating: 4 },
    ],
    price: { amount: 18.99, currency: 'USD' },
    inStock: true,
  },
  {
    id: 14,
    name: 'Hedamo Fresh Rice',
    image: 'https://images.unsplash.com/photo-1723475158232-819e29803f4d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8',
    gallery: [
      'https://images.unsplash.com/photo-1596560548464-f010549b84d7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29va2VkJTIwcmljZXxlbnwwfHwwfHx8MA%3D%3D',
    ],
    category: 'Agriculture',
    description: 'Premium basmati rice with aromatic flavor.',
    features: ['Aromatic', 'Long Grain', 'Gluten-Free'],
    traceability: { origin: 'Haryana, India', batchId: 'R67890', harvestedAt: '2024-02' },
    reviews: [{ user: 'Noah', comment: 'Best rice for biryani!', rating: 5 }],
    price: { amount: 24.99, currency: 'USD' },
    inStock: true,
  },
];

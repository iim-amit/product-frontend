import { Product } from './types';

export const seafoodProducts: Product[] = [
  {
    id: 7,
    name: 'Hedamo Wild-Caught Salmon',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2FsbW9ufGVufDB8fDB8fHww',
    gallery: [
      'https://images.unsplash.com/photo-1499125562588-29fb8a56b5d5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsbW9ufGVufDB8fDB8fHww',
    ],
    category: 'Seafood',
    description: 'Wild-caught salmon from sustainable fisheries.',
    features: ['Wild-Caught', 'Sustainable', 'Rich in Omega-3'],
    nutrition: {
      calories: 200,
      sugar: '0g',
      protein: '22g',
      fat: '13g',
    },
    traceability: { origin: 'Alaska, USA', batchId: 'S34567', harvestedAt: '2024-06' },
    reviews: [
      { user: 'James', comment: 'Fresh and flavorful!', rating: 5 },
      { user: 'Mia', comment: 'Perfect for baking.', rating: 4 },
    ],
    price: { amount: 29.99, currency: 'USD' },
    inStock: true,
  },
  {
    id: 8,
    name: 'Hedamo Shrimp',
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hyaW1wc3xlbnwwfHwwfHx8MA%3D%3D',
    gallery: [
      'https://images.unsplash.com/photo-1657856198189-fbfaa6f798bb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hyaW1wJTIwZmFybXxlbnwwfHwwfHx8MA%3D%3D',
    ],
    category: 'Seafood',
    description: 'Sustainably sourced shrimp, peeled and deveined.',
    features: ['Sustainable', 'No Preservatives', 'High Protein'],
    nutrition: {
      calories: 85,
      sugar: '0g',
      protein: '18g',
      fat: '1g',
    },
    traceability: { origin: 'Gulf of Mexico', batchId: 'S89012', harvestedAt: '2024-08' },
    reviews: [{ user: 'Ethan', comment: 'Great for stir-fry!', rating: 5 }],
    price: { amount: 22.99, currency: 'USD' },
    inStock: true,
  },
];
import { Product } from './types';

export const meatProducts: Product[] = [
  {
    id: 5,
    name: 'Hedamo Fresh Mutton',
    image: 'https://images.unsplash.com/photo-1630334337820-84afb05acf3a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFtYiUyMG1lYXR8ZW58MHx8MHx8fDA%3D',
    gallery: [
      'https://images.unsplash.com/photo-1559203244-78de52adba0e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG11dHRvbnxlbnwwfHwwfHx8MA%3D%3D',
      'https://images.unsplash.com/photo-1627366422957-3efa9c6df0fc?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG11dHRvbiUyMGN1cnJ5fGVufDB8fDB8fHww'
    ],
    category: 'Meat',
    description: 'Premium mutton from sustainable farms.',
    features: ['Grass-Fed', 'Organic', 'No Antibiotics'],
    nutrition: {
      calories: 250,
      sugar: '0g',
      protein: '26g',
      fat: '17g',
    },
    traceability: { origin: 'Montana, USA', batchId: 'B23456', harvestedAt: '2024-08' },
    reviews: [
      { user: 'Noah', comment: 'Tender and flavorful!', rating: 5 },
      { user: 'Sophia', comment: 'Great for grilling.', rating: 4 },
    ],
    price: { amount: 24.99, currency: 'USD' },
    inStock: true,
  },
  {
    id: 6,
    name: 'Hedamo Free-Range Chicken',
    image: 'https://images.unsplash.com/photo-1612170153139-6f881ff067e0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D',
    gallery: [
      'https://images.unsplash.com/photo-1606728035253-49e8a23146de?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoaWNrZW58ZW58MHx8MHx8fDA%3D',
    ],
    category: 'Meat',
    description: 'Free-range chicken raised without hormones.',
    features: ['Free-Range', 'Organic', 'No Hormones'],
    nutrition: {
      calories: 165,
      sugar: '0g',
      protein: '31g',
      fat: '3.6g',
    },
    traceability: { origin: 'Iowa, USA', batchId: 'C78901', harvestedAt: '2024-07' },
    reviews: [{ user: 'Ava', comment: 'Juicy and delicious!', rating: 5 }],
    price: { amount: 15.99, currency: 'USD' },
    inStock: true,
  },
];
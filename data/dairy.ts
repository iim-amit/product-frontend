import { Product } from './types';

export const dairyProducts: Product[] = [
  {
    id: 3,
    name: 'Hedamo Organic Milk',
    image: 'https://images.unsplash.com/photo-1635436338433-89747d0ca0ef?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JnYW5pYyUyMG1pbGt8ZW58MHx8MHx8fDA%3D',
    gallery: [
      'https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWlsa3xlbnwwfHwwfHx8MA%3D%3D',
    ],
    category: 'Dairy',
    description: 'Fresh organic milk from pasture-raised cows.',
    features: ['Organic', 'Grass-Fed', 'No Hormones'],
    nutrition: {
      calories: 150,
      sugar: '12g',
      carbs: '12g',
      protein: '8g',
      fat: '8g',
    },
    traceability: { origin: 'Vermont, USA', batchId: 'M45678', processedAt: '2024-07' },
    reviews: [
      { user: 'Emma', comment: 'Creamy and fresh!', rating: 5 },
      { user: 'Liam', comment: 'Perfect for cereal.', rating: 4 },
    ],
    price: { amount: 5.99, currency: 'USD' },
    inStock: true,
  },
  {
    id: 4,
    name: 'Hedamo Artisan Cheese',
    image: 'https://images.unsplash.com/photo-1692311590333-11db3b128650?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hlZXNlc3xlbnwwfHwwfHx8MA%3D%3D',
    gallery: [
      'https://images.unsplash.com/photo-1683314573424-b0da0c795a07?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hlZXNlfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1589881133595-a3c085cb731d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hlZXNlfGVufDB8fDB8fHww',
      //'https://images.unsplash.com/photo-1683314573422-649a3c6ad784?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZXNlfGVufDB8fDB8fHww'
    ],
    category: 'Dairy',
    description: 'Handcrafted cheddar cheese aged for 12 months.',
    features: ['Organic', 'Aged', 'Rich Flavor'],
    nutrition: {
      calories: 110,
      sugar: '0g',
      carbs: '1g',
      protein: '7g',
      fat: '9g',
    },
    traceability: { origin: 'Vermont, USA', batchId: 'C90123', processedAt: '2024-03' },
    reviews: [{ user: 'Olivia', comment: 'Amazing with wine!', rating: 5 }],
    price: { amount: 12.99, currency: 'USD' },
    inStock: true,
  },
];
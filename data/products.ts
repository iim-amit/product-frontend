import { Product } from './types';
import { showcaseProducts } from './showcase-products';
import { dairyProducts } from './dairy';
import { meatProducts } from './meat';
import { seafoodProducts } from './seafood';
import { condimentProducts } from './condiments';

export const products: Product[] = [
  ...showcaseProducts,
  ...dairyProducts,
  ...meatProducts,
  ...seafoodProducts,
  ...condimentProducts,
];
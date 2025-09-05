import { dairyProducts } from './dairy';
import { meatProducts } from './meat';
import { seafoodProducts } from './seafood';
import { agricultureProducts } from './agriculture';
import { condimentProducts } from './condiments';
import { textileProducts } from './textile';
import { Product } from './types';

export const showcaseProducts: Product[] = [
  ...dairyProducts,
  ...meatProducts,
  ...seafoodProducts,
  ...agricultureProducts,
  ...condimentProducts,
  ...textileProducts,
];

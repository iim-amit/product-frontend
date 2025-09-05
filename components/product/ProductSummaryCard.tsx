
import React from 'react';
import Image from 'next/image';
//import { Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Product } from '@/data/types';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface ProductSummaryCardProps {
  product: Product;
  onClick: () => void;
}

export const ProductSummaryCard: React.FC<ProductSummaryCardProps> = ({ product, onClick }) => {
  return (
    <motion.div
      className={cn('cursor-pointer')}
      onClick={onClick}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${product.name}`}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      whileHover={{ scale: 1.03 }}
    >
      <Card className="p-4">
        <div className="w-full h-60 flex items-center justify-center bg-gray-50 rounded-md overflow-hidden mb-4">
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-xl font-semibold text-left mb-2 text-green-700 border-b-2 border-green-500 inline-block pb-1
">{product.name}</h2>
        <p className="text-gray-900 mb-4 line-clamp-2">{product.description}</p>
        <div className="flex gap-8 items-center">
          <span className="text-primary font-bold">
            {product.price ? `$${product.price.amount}` : 'N/A'}
          </span>
          <Button variant="outline" className="bg-primary hover:bg-secondary border border-emerald-500 text-emerald-600 hover:bg-emerald-50 rounded-lg px-4 py-1 transition
">
            Know More
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};


import React from 'react';
import { ArrowLeft, Share2, Heart } from 'lucide-react';
import { Product } from '@/data/types';
import { Button } from '@/components/ui/button';

interface ProductHeaderProps {
  product: Product;
  onBack: () => void;
}

export const ProductHeader: React.FC<ProductHeaderProps> = ({ product, onBack }) => {
  return (
    <header className="max-w-7xl mx-auto mb-6 flex items-center justify-between bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 py-3 px-1 rounded-xl">
      <div className="flex items-center gap-4 mx-3">
        <Button variant="outline" size="sm" onClick={onBack} className="group">
          <ArrowLeft className="text-white group-hover:text-emerald-700" size={24} />
        </Button>

        <h1 className="text-2xl font-bold text-white">{product.name}</h1>
      </div>
      <div className="flex gap-3 mx-3">
        <Button variant="outline" size="sm" onClick={onBack} className="group">
          <Share2 className="text-white group-hover:text-emerald-700" size={24} />
        </Button>
        <Button variant="outline" size="sm" onClick={onBack} className="group">
          <Heart className="text-white group-hover:text-emerald-700" size={24} />
        </Button>
      </div>
    </header>
  );
};

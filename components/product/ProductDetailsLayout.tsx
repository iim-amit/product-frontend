
import React from 'react';
import { Product } from '@/data/types';
import { FeaturesCard, NutritionCard, TraceabilityCard, ReviewsCard, GalleryCard } from './cards';

interface ProductDetailsLayoutProps {
  product: Product;
}

export const ProductDetailsLayout: React.FC<ProductDetailsLayoutProps> = ({ product }) => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-6 gap-6 ">
      {/* Left Column (2/6) */}
      <div className="col-span-6 md:col-span-2 flex flex-col gap-6">
        <FeaturesCard features={product.features} />
        {product.nutrition && <NutritionCard nutrition={product.nutrition} />}
      </div>

      {/* Middle Column (2/6) */}
      <div className="col-span-6 md:col-span-2">
        {product.gallery && <GalleryCard gallery={product.gallery} productName={product.name} />}
      </div>

      {/* Right Column (2/6) */}
      <div className="col-span-6 md:col-span-2 flex flex-col gap-6">
        {product.traceability && <TraceabilityCard traceability={product.traceability} />}
        {product.reviews && <ReviewsCard reviews={product.reviews} />}
      </div>
    </div>
  );
};

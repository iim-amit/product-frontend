'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useProducts } from '@/hooks/useProducts';
import { MainHeader } from '@/components/layout/Header';
import { CategoryFilter } from '@/components/layout/CategoryFilter';
import { ProductSummaryCard } from '@/components/product/ProductSummaryCard';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
  const router = useRouter();
  const {
    filteredProducts,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    categories,
  } = useProducts();

  const handleProductClick = (productId: number) => {
    router.push(`/product/${productId}`);
  };

  return (
    // <div className="min-h-screen bg-gray-50 p-4 bg-gradient-to-br from-green-50 via-white to-green-100">
    <div className="min-h-screen p-4 bg-gradient-to-br from-green-50 via-white to-green-100 flex flex-col">
      {/* Header */}
      <MainHeader searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {/* Categories */}
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* Products Grid - 3 columns */}
      <div className="max-w-7xl mx-auto flex-grow">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-8 text-gray-900" role="alert" aria-live="polite">
            No products found. Try adjusting your search or category.
          </div>
        ) : (
          <div className="flex flex-wrap items-center justify-center gap-14 text-black">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <ProductSummaryCard product={product} onClick={() => handleProductClick(product.id)} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
'use client';

import { useState, useMemo } from 'react';
import { showcaseProducts } from '@/data/showcase-products';

export function useProducts() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // ✅ Extract categories dynamically
  const categories = useMemo(() => {
    const cats = showcaseProducts.map((p) => p.category);
    return ['All', ...Array.from(new Set(cats))];
  }, []);

  // ✅ Filter products
  const filteredProducts = useMemo(() => {
    let products = showcaseProducts;

    if (selectedCategory !== 'All') {
      products = products.filter((p) => p.category === selectedCategory);
    }

    if (searchQuery) {
      products = products.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return products;
  }, [searchQuery, selectedCategory]);

  return {
    filteredProducts,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    categories,
  };
}

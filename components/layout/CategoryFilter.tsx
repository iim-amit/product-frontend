import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex justify-center mb-6 flex-wrap gap-2">
      {categories.map((category) => (
        <Button
          key={category}
          onClick={() => onCategoryChange(category)}
          variant={selectedCategory === category ? 'default' : 'outline'}
          className={cn(
            selectedCategory === category
              ? 'bg-primary text-black'
              : 'bg-white text-black'
          )}
          aria-pressed={selectedCategory === category}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

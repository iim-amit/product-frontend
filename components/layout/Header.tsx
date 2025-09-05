import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface MainHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const MainHeader: React.FC<MainHeaderProps> = ({ searchQuery, onSearchChange }) => {
  return (
    <header className="bg-white shadow-md p-4 mb-6 rounded-lg bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700">
      <div className="flex items-center justify-between px-6 border-amber-600">
        <h1 className=" text-primary text-white font-bold text-2xl drop-shadow-sm tracking-wide">Hedamo Showcase</h1>
        <div className="flex items-center justify-between gap-2 px-6 py-1 text-black mr-150 bg-white/90 rounded-full focus:ring-2 focus:ring-emerald-400">
          <Input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search ..."
            className="w-64"
            aria-label="Search products"
          />
          <Search size={20} className="text-black" />
        </div>
      </div>
    </header>
  );
};
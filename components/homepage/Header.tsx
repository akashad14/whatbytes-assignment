'use client';

import { Search, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface HeaderProps {
  cartCount: number;
  onSearchChange: (value: string) => void;
}

export function Header({ cartCount, onSearchChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-purple-900 text-primary-foreground shadow-md">
      <div className="container flex items-center justify-between gap-4 px-8 py-4">
        {/* Logo */}
        <div className="shrink-0">
          <h1 className="text-2xl font-bold">Logo</h1>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for products..."
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 bg-white text-foreground border-0"
            />
          </div>
        </div>

        {/* Cart Button */}
        <Button
          variant="outline"
          size="lg"
          className="gap-2 bg-[#002a59] text-white border-none hover:bg-gray-600"
        >
          <ShoppingCart className="w-5 h-5" />
          Cart
          {cartCount > 0 && (
            <span className="ml-2 bg-accent text-accent-foreground rounded-full px-2 py-0.5 text-sm font-semibold">
              {cartCount}
            </span>
          )}
        </Button>
      </div>
    </header>
  );
}

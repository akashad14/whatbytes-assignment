'use client';

import { Search, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';


 

export default function Header () {
  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-md">
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
             
              className="pl-10 bg-white text-foreground border-0"
            />
          </div>
        </div>

        {/* Cart Button */}
        <Button
          variant="outline"
          size="lg"
          className="gap-2 bg-white text-primary border-white hover:bg-gray-100"
        >
          <ShoppingCart className="w-5 h-5" />
          Cart
         
          
        </Button>
      </div>
    </header>
  );
}

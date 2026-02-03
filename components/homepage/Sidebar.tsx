'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';

interface SidebarProps {
  onCategoryChange: (categories: string[]) => void;
  onPriceChange: (price: number[]) => void;
  onBrandChange: (brands: string[]) => void;
}

const CATEGORIES = ['All', 'Electronics', 'Clothing', 'Footwear', 'Bags', 'Eyewear'];
const BRANDS = ['All', 'Electronics', 'Clothing', 'Footwear', 'Bags', 'Eyewear'];

export function Sidebar({
  onCategoryChange,
  onPriceChange,
  onBrandChange,
}: SidebarProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['All']);
  const [selectedBrands, setSelectedBrands] = useState<string[]>(['All']);
  const [priceRange, setPriceRange] = useState<number[]>([0, 1000]);

  const handleCategoryChange = (category: string) => {
    let newCategories;
    if (category === 'All') {
      newCategories = ['All'];
    } else {
      newCategories = selectedCategories.filter((c) => c !== 'All');
      if (newCategories.includes(category)) {
        newCategories = newCategories.filter((c) => c !== category);
      } else {
        newCategories.push(category);
      }
      if (newCategories.length === 0) {
        newCategories = ['All'];
      }
    }
    setSelectedCategories(newCategories);
    onCategoryChange(newCategories);
  };

  const handleBrandChange = (brand: string) => {
    let newBrands;
    if (brand === 'All') {
      newBrands = ['All'];
    } else {
      newBrands = selectedBrands.filter((b) => b !== 'All');
      if (newBrands.includes(brand)) {
        newBrands = newBrands.filter((b) => b !== brand);
      } else {
        newBrands.push(brand);
      }
      if (newBrands.length === 0) {
        newBrands = ['All'];
      }
    }
    setSelectedBrands(newBrands);
    onBrandChange(newBrands);
  };

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value);
    onPriceChange(value);
  };

  return (
    <aside className="w-full md:w-64 space-y-4">
      {/* Category Filter */}
      <Card className="p-6 bg-sidebar text-sidebar-foreground rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Filters</h3>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-base mb-3">Category</h4>
            <div className="space-y-2">
              {CATEGORIES.map((category) => (
                <div key={category} className="flex items-center gap-2">
                  <Checkbox
                    id={`category-${category}`}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => handleCategoryChange(category)}
                    className="accent-sidebar-primary"
                  />
                  <Label
                    htmlFor={`category-${category}`}
                    className="cursor-pointer text-sidebar-foreground hover:text-sidebar-accent"
                  >
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div className="pt-4 border-t border-sidebar-border">
            <h4 className="font-semibold text-base mb-3">Price</h4>
            <Slider
              min={0}
              max={1000}
              step={20}
              value={priceRange}
              onValueChange={handlePriceChange}
              className="w-full"
            />
            <div className="flex justify-between items-center text-sm mt-2 text-sidebar-foreground">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>

          {/* Brand Filter */}
          <div className="pt-4 border-t border-sidebar-border">
            <h4 className="font-semibold text-base mb-3">Cacyroy</h4>
            <div className="space-y-2">
              {BRANDS.map((brand) => (
                <div key={brand} className="flex items-center gap-2">
                  <Checkbox
                    id={`brand-${brand}`}
                    checked={selectedBrands.includes(brand)}
                    onCheckedChange={() => handleBrandChange(brand)}
                    className="accent-sidebar-primary"
                  />
                  <Label
                    htmlFor={`brand-${brand}`}
                    className="cursor-pointer text-sidebar-foreground hover:text-sidebar-accent"
                  >
                    {brand}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </aside>
  );
}

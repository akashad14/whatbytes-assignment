'use client';

import { useState, useMemo, ReactNode } from 'react';

export interface Product {
  id: string;
  image: string;
  title: string;
  price: number;
  category: string;
  rating: number;
  brand: string;
}

interface ProductFilterProps {
  products: Product[];
  onFilterChange?: (filtered: Product[]) => void;
  children?: (props: {
    filteredProducts: Product[];
    searchQuery: string;
    selectedCategories: string[];
    selectedBrands: string[];
    priceRange: number[];
    cart: string[];
    onSearchChange: (value: string) => void;
    onCategoryChange: (categories: string[]) => void;
    onBrandChange: (brands: string[]) => void;
    onPriceChange: (price: number[]) => void;
    onAddToCart: (productId: string) => void;
  }) => ReactNode;
}

export function ProductFilter({
  products,
  onFilterChange,
  children,
}: ProductFilterProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    'All',
  ]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>(['All']);
  const [priceRange, setPriceRange] = useState<number[]>([0, 1000]);
  const [cart, setCart] = useState<string[]>([]);

  // Filter products based on search, categories, brands, and price
  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategories.includes('All') ||
        selectedCategories.includes(product.category);

      const matchesBrand =
        selectedBrands.includes('All') ||
        selectedBrands.includes(product.brand);

      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];

      return matchesSearch && matchesCategory && matchesBrand && matchesPrice;
    });

    // Notify parent component of filter changes
    onFilterChange?.(filtered);

    return filtered;
  }, [searchQuery, selectedCategories, selectedBrands, priceRange, products, onFilterChange]);

  const handleAddToCart = (productId: string) => {
    setCart((prev) => [...prev, productId]);
    console.log('[v0] Product added to cart:', productId);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  const handleCategoryChange = (categories: string[]) => {
    setSelectedCategories(categories);
  };

  const handleBrandChange = (brands: string[]) => {
    setSelectedBrands(brands);
  };

  const handlePriceChange = (price: number[]) => {
    setPriceRange(price);
  };

  // If using render props pattern
  if (children && typeof children === 'function') {
    return (
      <>
        {children({
          filteredProducts,
          searchQuery,
          selectedCategories,
          selectedBrands,
          priceRange,
          cart,
          onSearchChange: handleSearchChange,
          onCategoryChange: handleCategoryChange,
          onBrandChange: handleBrandChange,
          onPriceChange: handlePriceChange,
          onAddToCart: handleAddToCart,
        })}
      </>
    );
  }

  return null;
}

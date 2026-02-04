'use client';

import { Header } from '@/components/homepage/Header';
import { Sidebar } from '@/components/homepage/Sidebar';
import { ProductListing } from '@/components/homepage/ProductListing';
import { Footer } from '@/components/homepage/footer';
import { ProductFilter } from '@/components/filters/ProductFilter';
import { PRODUCTS } from '@/components/types/data';

export default function Home() {
  return (
    <ProductFilter products={PRODUCTS}>
      {({
        filteredProducts,
        cart,
        onSearchChange,
        onCategoryChange,
        onBrandChange,
        onPriceChange,
        onAddToCart,
      }) => (
        <div className="min-h-screen bg-background flex flex-col">
          <Header cartCount={cart.length} onSearchChange={onSearchChange} />

          {/* Main Content */}
          <div className="flex-1 container px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8">
              {/* Sidebar */}
              <Sidebar
                onCategoryChange={onCategoryChange}
                onBrandChange={onBrandChange}
                onPriceChange={onPriceChange}
              />

              
              <ProductListing
                products={filteredProducts}
                onAddToCart={onAddToCart}
              />
            </div>
          </div>

        
          <Footer />
        </div>
      )}
    </ProductFilter>
  );
}

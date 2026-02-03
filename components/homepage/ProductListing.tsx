'use client'

import { ProductGrid } from './ProductGrid'

interface Product {
  id: string
  image: string
  title: string
  price: number
  rating?: number
}

interface ProductListingProps {
  products: Product[]
  onAddToCart: (id: string) => void
  isLoading?: boolean
}

export function ProductListing({
  products,
  onAddToCart,
  isLoading = false,
}: ProductListingProps) {
  return (
    <main className="flex-1">
      {/* Page title */}
      <header className="mb-6">
        <h2 className="text-3xl font-bold text-foreground">
          Product Listing
        </h2>
      </header>

      {/* Products */}
      <section>
        <ProductGrid
          products={products}
          onAddToCart={onAddToCart}
          isLoading={isLoading}
        />
      </section>
    </main>
  )
}

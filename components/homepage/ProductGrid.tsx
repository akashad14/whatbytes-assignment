'use client'

import { ProductCard } from './product-card'

interface Product {
  id: string
  image: string
  title: string
  price: number
  rating?: number
}

interface ProductGridProps {
  products: Product[]
  onAddToCart: (id: string) => void
  isLoading?: boolean
}

const GRID_CLASSES =
  'grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'

export function ProductGrid({
  products,
  onAddToCart,
  isLoading = false,
}: ProductGridProps) {
  // Loading state → show skeletons
  if (isLoading) {
    const skeletonCount = 6

    return (
      <div className={GRID_CLASSES}>
        {Array.from({ length: skeletonCount }).map((_, index) => (
          <div
            key={index}
            className="h-80 rounded-lg bg-muted animate-pulse"
          />
        ))}
      </div>
    )
  }

  // Empty state → no results
  if (products.length === 0) {
    return (
      <div className="flex items-center justify-center py-16">
        <p className="text-lg text-muted-foreground">
          No products found
        </p>
      </div>
    )
  }

  // Normal state → render products
  return (
    <div className={GRID_CLASSES}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  )
}

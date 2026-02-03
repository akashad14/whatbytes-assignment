'use client'

import Image from 'next/image'
import { Star, ShoppingCart } from 'lucide-react'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface ProductCardProps {
  id: string
  image: string
  title: string
  price: number
  rating?: number
  onAddToCart: (id: string) => void
}

export function ProductCard({
  id,
  image,
  title,
  price,
  rating = 0,
  onAddToCart,
}: ProductCardProps) {
  const hasRating = rating > 0

  return (
    <Card className="flex h-full flex-col overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      {/* Image */}
      <div className="relative h-48 w-full bg-muted overflow-hidden">
        <Image
          src={image || '/placeholder.svg'}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        <h3 className="line-clamp-2 font-semibold text-foreground">
          {title}
        </h3>

        {/* Rating */}
        {hasRating && (
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, index) => {
              const isFilled = index < Math.floor(rating)

              return (
                <Star
                  key={index}
                  className={`h-4 w-4 ${
                    isFilled
                      ? 'fill-accent text-accent'
                      : 'text-muted-foreground'
                  }`}
                />
              )
            })}

            <span className="ml-1 text-sm text-muted-foreground">
              ({rating.toFixed(1)})
            </span>
          </div>
        )}

        {/* Price */}
        <p className="text-lg font-bold text-primary">
          ${price}
        </p>

        {/* Action */}
        <Button
          onClick={() => onAddToCart(id)}
          className="mt-auto w-full gap-2"
        >
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </Card>
  )
}

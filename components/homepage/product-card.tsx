'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  price: number;
  onAddToCart: (id: string) => void;
}

export function ProductCard({
  id,
  image,
  title,
  price,
  onAddToCart,
}: ProductCardProps) {
  return (
    <div className="flex flex-col items-start text-left gap-0">
      {/* Product Image */}
      <div className="relative w-full h-60 bg-muted rounded-lg overflow-hidden flex items-center justify-center mb-2">
        <Image
          src={image || '/placeholder.svg'}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="w-full flex flex-col gap-1">
        {/* Title */}
        <h3 className="font-semibold text-foreground line-clamp-2 text-sm">{title}</h3>

        {/* Price */}
        <div className="text-base font-bold text-foreground">${price}</div>

        {/* Add to Cart Button */}
        <Button
          onClick={() => onAddToCart(id)}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm py-2 mt-1"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

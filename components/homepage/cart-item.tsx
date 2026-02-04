'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Trash2, Plus, Minus } from 'lucide-react';
import type { Product } from '@/components/filters/ProductFilter';
import { getCartItems } from '@/lib/cart-utils';

interface CartItemsProps {
  cartIds: string[];
  products: Product[];
  onRemoveItem: (productId: string) => void;
  onAddItem: (productId: string) => void;
}

export function CartItems({
  cartIds,
  products,
  onRemoveItem,
  onAddItem,
}: CartItemsProps) {
  const cartItems = getCartItems(cartIds);

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <p className="text-lg text-muted-foreground mb-4">Your cart is empty</p>
        <Link href="/">
        <Button className="bg-primary hover:bg-primary/90">
          Continue Shopping
        </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {cartItems.map((cartItem) => {
        const product = products.find((p) => p.id === cartItem.id);
        if (!product) return null;

        return (
          <div
            key={cartItem.id}
            className="flex gap-4 p-4 border border-border rounded-lg bg-card"
          >
            {/* Product Image */}
            <div className="relative w-24 h-24 bg-muted rounded-lg overflow-hidden shrink-0">
              <Image
                src={product.image || '/placeholder.svg'}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="flex-1 flex flex-col gap-2">
              <h3 className="font-semibold text-foreground">{product.title}</h3>
              <p className="text-sm text-muted-foreground">${product.price}</p>

              {/* Quantity Controls */}
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onRemoveItem(cartItem.id)}
                  className="p-1 h-8 w-8"
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="px-3 py-1 border border-border rounded text-center min-w-12">
                  {cartItem.quantity}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onAddItem(cartItem.id)}
                  className="p-1 h-8 w-8"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Subtotal and Remove Button */}
            <div className="flex flex-col items-end justify-between">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
               
                  for (let i = 0; i < cartItem.quantity; i++) {
                    onRemoveItem(cartItem.id);
                  }
                }}
                className="text-destructive hover:text-destructive/80"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Subtotal</p>
                <p className="font-bold text-foreground">
                  ${(product.price * cartItem.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

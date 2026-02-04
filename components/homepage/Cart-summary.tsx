'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface CartSummaryProps {
  subtotal: number;
  tax: number;
  total: number;
  itemCount: number;
}

export function CartSummary({
  subtotal,
  tax,
  total,
  itemCount,
}: CartSummaryProps) {
  return (
    <Card className="p-6 space-y-4 bg-card sticky top-20">
      <h2 className="text-lg font-bold text-foreground">Order Summary</h2>

      <div className="space-y-2 border-b border-border pb-4">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Items ({itemCount})</span>
          <span className="text-foreground">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Tax (10%)</span>
          <span className="text-foreground">${tax.toFixed(2)}</span>
        </div>
      </div>

      <div className="flex justify-between text-lg font-bold">
        <span className="text-foreground">Total</span>
        <span className="text-primary">${total.toFixed(2)}</span>
      </div>

      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base">
        Proceed to Checkout
      </Button>

      <Link href="/">
        <Button variant="outline" className="w-full bg-transparent">
          Continue Shopping
        </Button>
      </Link>
    </Card>
  );
}

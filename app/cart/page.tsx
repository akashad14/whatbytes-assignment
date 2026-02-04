'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Header } from '@/components/homepage/Header';
import { Footer } from '@/components/homepage/footer';
import { CartItems } from '@/components/homepage/cart-item';
import { CartSummary } from '@/components/homepage/Cart-summary';
import { PRODUCTS } from '@/components/types/data';
import { removeItemFromCart, addItemToCart, getCartItems, calculateTotal } from '@/lib/cart-utils';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CartPage() {
  const [cartIds, setCartIds] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    setIsMounted(true);
    const savedCart = localStorage.getItem('shopping-cart');
    if (savedCart) {
      try {
        setCartIds(JSON.parse(savedCart));
      } catch (error) {
        console.log('[v0] Error loading cart:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('shopping-cart', JSON.stringify(cartIds));
    }
  }, [cartIds, isMounted]);

  const handleRemoveItem = (productId: string) => {
    setCartIds((prev) => removeItemFromCart(prev, productId));
  };

  const handleAddItem = (productId: string) => {
    setCartIds((prev) => addItemToCart(prev, productId));
  };

  const handleSearchChange = (value: string) => {
    // Search functionality for header
    console.log('[v0] Search:', value);
  };

  const cartItems = getCartItems(cartIds);
  const subtotal = calculateTotal(cartItems, (id) => {
    const product = PRODUCTS.find((p) => p.id === id);
    return product?.price || 0;
  });
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-background flex flex-col">

      <Header cartCount={cartIds.length} onSearchChange={handleSearchChange} />

      {/* Main Content */}
      <div className="flex-1 container px-4 py-8">
        {/* Back Button */}
        <Link href="/" className="inline-block mb-6">
          <Button variant="outline" className="gap-2 bg-transparent">
            <ChevronLeft className="w-4 h-4" />
            Back to Shopping
          </Button>
        </Link>

        {/* Page Title */}
        <h1 className="text-3xl font-bold text-foreground mb-8">Shopping Cart</h1>

        {/* Cart Content */}
        {isMounted ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
       
            <div className="lg:col-span-2">
              <CartItems
                cartIds={cartIds}
                products={PRODUCTS}
                onRemoveItem={handleRemoveItem}
                onAddItem={handleAddItem}
              />
            </div>

            <div>
              <CartSummary
                subtotal={subtotal}
                tax={tax}
                total={total}
                itemCount={cartItems.length}
              />
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center py-16">
            <p className="text-lg text-muted-foreground">Loading cart...</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

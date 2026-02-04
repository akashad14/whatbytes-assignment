export interface CartItem {
  id: string;
  quantity: number;
}

export function getCartItems(cartIds: string[]): CartItem[] {
  const itemMap = new Map<string, number>();

  // Count occurrences of each product ID
  cartIds.forEach((id) => {
    itemMap.set(id, (itemMap.get(id) || 0) + 1);
  });

  // Convert to array of CartItem
  return Array.from(itemMap.entries()).map(([id, quantity]) => ({
    id,
    quantity,
  }));
}

export function removeItemFromCart(cartIds: string[], productId: string): string[] {
  const index = cartIds.indexOf(productId);
  if (index > -1) {
    return cartIds.slice(0, index).concat(cartIds.slice(index + 1));
  }
  return cartIds;
}

export function addItemToCart(cartIds: string[], productId: string): string[] {
  return [...cartIds, productId];
}

export function calculateTotal(
  cartItems: CartItem[],
  getProductPrice: (id: string) => number
): number {
  return cartItems.reduce((total, item) => {
    return total + getProductPrice(item.id) * item.quantity;
  }, 0);
}

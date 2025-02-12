"use client";

import { useCart } from "../contexts/cart-context";

interface AddtoCartButtonProps {
  productId: number;
}

export function AddtoCartButton({ productId }: AddtoCartButtonProps) {
  const { addToCart } = useCart();

  function handleAddToCart() {
    addToCart(productId);
  }

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
    >
      Adicionar ao carrinho
    </button>
  );
}

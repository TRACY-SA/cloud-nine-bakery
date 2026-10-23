"use client";

import { ProductCard } from "@/components/products/product-card";
import type { Product } from "@/types";

export function ProductGrid({
  products,
  onView,
}: {
  products: Product[];
  onView: (product: Product) => void;
}) {
  return (
    <ul className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <li key={product.id} className="min-w-0">
          <ProductCard product={product} onView={onView} />
        </li>
      ))}
    </ul>
  );
}

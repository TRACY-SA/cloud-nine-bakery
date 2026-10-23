"use client";

import { Badge } from "@/components/ui/badge";
import { BakeryImage } from "@/components/ui/bakery-image";
import { categoryLabel } from "@/data/categories";
import { formatCurrency } from "@/lib/format-currency";
import type { Product } from "@/types";

export function ProductCard({
  product,
  onView,
}: {
  product: Product;
  onView: (product: Product) => void;
}) {
  return (
    <article className="flex h-full flex-col">
      <button type="button" onClick={() => onView(product)} className="block text-left">
        <span className="media-zoom block">
          <BakeryImage
            src={product.image}
            alt={product.imageAlt}
            sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            frameClassName="aspect-[4/5]"
            className="transition-transform duration-700 group-hover:scale-[1.04]"
            objectPosition={product.objectPosition}
          />
        </span>
        <span className="mt-4 flex items-center gap-3">
          <span className="eyebrow text-stone">{categoryLabel(product.category)}</span>
          {product.bestseller ? <Badge>Bestseller</Badge> : null}
        </span>
        <h3 className="mt-2 font-display text-[1.7rem] leading-tight text-espresso">{product.name}</h3>
      </button>
      <p className="mt-2 flex-1 text-sm leading-6 text-cocoa">{product.description}</p>
      <p className="mt-4 text-sm text-espresso">
        <span className="font-medium">{formatCurrency(product.price)}</span>{" "}
        <span className="text-muted">{product.unit}</span>
      </p>
      <button
        type="button"
        onClick={() => onView(product)}
        className="mt-3 inline-flex min-h-11 items-center text-[0.75rem] font-semibold tracking-[0.14em] text-espresso uppercase underline-offset-4 hover:underline"
      >
        View details
      </button>
    </article>
  );
}

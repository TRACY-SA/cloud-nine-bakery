"use client";

import { productCategories } from "@/data/categories";
import { cn } from "@/lib/utils";
import type { CatalogueCategoryId } from "@/types";

export function ProductCategories({
  selected,
  onSelect,
}: {
  selected: CatalogueCategoryId;
  onSelect: (category: CatalogueCategoryId) => void;
}) {
  return (
    <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
      {productCategories.map((category) => {
        const active = category.id === selected;
        return (
          <button
            key={category.id}
            type="button"
            aria-pressed={active}
            onClick={() => onSelect(category.id)}
            className={cn(
              "min-h-11 border px-4 text-sm transition-colors",
              active
                ? "border-espresso bg-espresso text-cream"
                : "border-line bg-white text-espresso hover:border-cocoa",
            )}
          >
            {category.label}
          </button>
        );
      })}
    </div>
  );
}

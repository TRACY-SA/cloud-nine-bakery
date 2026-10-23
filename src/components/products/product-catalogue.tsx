"use client";

import { ProductCategories } from "@/components/products/product-categories";
import { ProductDetailDialog } from "@/components/products/product-detail-dialog";
import { ProductGrid } from "@/components/products/product-grid";
import { ProductSearch } from "@/components/products/product-search";
import { EmptyState } from "@/components/ui/empty-state";
import { categoryLabel, isCatalogueCategory } from "@/data/categories";
import { getProduct, products } from "@/data/products";
import type { CatalogueCategoryId, Product } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import { useLayoutEffect, useMemo, useState } from "react";

export function ProductCatalogue() {
  const params = useSearchParams();
  const router = useRouter();
  const categoryParam = params.get("category");
  const category: CatalogueCategoryId = isCatalogueCategory(categoryParam) ? categoryParam : "all";
  const requestedProduct = params.get("product");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Product | null>(() =>
    requestedProduct ? (getProduct(requestedProduct) ?? null) : null,
  );

  useLayoutEffect(() => {
    return () => setSelected(null);
  }, []);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory = category === "all" || product.category === category;
      if (!matchesCategory) return false;
      if (!needle) return true;
      const haystack = [
        product.name,
        product.description,
        product.portion,
        categoryLabel(product.category),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(needle);
    });
  }, [category, query]);

  function selectCategory(next: CatalogueCategoryId) {
    const search = new URLSearchParams(params.toString());
    if (next === "all") search.delete("category");
    else search.set("category", next);
    search.delete("product");
    const queryString = search.toString();
    router.replace(queryString ? `/our-products?${queryString}` : "/our-products", { scroll: false });
  }

  function openProduct(product: Product) {
    setSelected(product);
    const search = new URLSearchParams(params.toString());
    search.set("product", product.id);
    router.replace(`/our-products?${search.toString()}`, { scroll: false });
  }

  function closeProduct() {
    setSelected(null);
    const search = new URLSearchParams(params.toString());
    if (!search.has("product")) return;
    search.delete("product");
    const queryString = search.toString();
    router.replace(queryString ? `/our-products?${queryString}` : "/our-products", { scroll: false });
  }

  function clearFilters() {
    setQuery("");
    router.replace("/our-products", { scroll: false });
  }

  const filtersActive = category !== "all" || query.trim().length > 0;

  return (
    <div>
      <div className="grid gap-5 lg:grid-cols-[minmax(0,16rem)_1fr] lg:items-end">
        <ProductSearch value={query} onChange={setQuery} />
        <ProductCategories selected={category} onSelect={selectCategory} />
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <p aria-live="polite" className="text-sm text-muted">
          Showing {filtered.length} {filtered.length === 1 ? "treat" : "treats"}
        </p>
        {filtersActive ? (
          <button
            type="button"
            onClick={clearFilters}
            className="min-h-11 text-sm text-espresso underline underline-offset-4"
          >
            Clear filters
          </button>
        ) : null}
      </div>
      <div className="mt-10">
        {filtered.length > 0 ? (
          <ProductGrid products={filtered} onView={openProduct} />
        ) : (
          <EmptyState
            title="Nothing matches just yet"
            action={{ label: "Clear filters", onClick: clearFilters }}
          >
            Try another word, or clear the filters to see the full collection.
          </EmptyState>
        )}
      </div>
      <ProductDetailDialog product={selected} onClose={closeProduct} />
    </div>
  );
}

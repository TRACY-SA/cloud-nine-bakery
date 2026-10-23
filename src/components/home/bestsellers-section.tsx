"use client";

import { ProductDetailDialog } from "@/components/products/product-detail-dialog";
import { ProductGrid } from "@/components/products/product-grid";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { getFavouriteProducts } from "@/data/products";
import type { Product } from "@/types";
import { useLayoutEffect, useState } from "react";

const favourites = getFavouriteProducts();

export function BestsellersSection() {
  const [selected, setSelected] = useState<Product | null>(null);

  useLayoutEffect(() => {
    return () => setSelected(null);
  }, []);

  return (
    <section className="bg-ivory">
      <Container className="py-16 lg:py-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="From the counter" title="Customer favourites">
            <p>The treats everyone loves, made for moments worth remembering.</p>
          </SectionHeading>
          <Button href="/our-products" variant="secondary">
            View all products
          </Button>
        </div>
        <div className="mt-10">
          <ProductGrid products={favourites} onView={setSelected} />
        </div>
        <ProductDetailDialog product={selected} onClose={() => setSelected(null)} />
      </Container>
    </section>
  );
}

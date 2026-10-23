import { ProductCatalogue } from "@/components/products/product-catalogue";
import { BakeryImage } from "@/components/ui/bakery-image";
import { Container } from "@/components/ui/container";
import { media } from "@/data/media";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Browse celebration cakes, cupcakes, bread, pastries, and desserts from Cloud Nine Bakery in Ashongman Estate, Accra.",
  alternates: { canonical: "/our-products" },
  openGraph: {
    title: "Our Products | Cloud Nine Bakery",
    description:
      "Browse celebration cakes, cupcakes, bread, pastries, and desserts from Cloud Nine Bakery in Ashongman Estate, Accra.",
  },
};

function CatalogueFallback() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-hidden="true">
      {Array.from({ length: 6 }, (_, index) => (
        <div key={index} className="aspect-[4/5] bg-ivory" />
      ))}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <>
      <section className="bg-cream">
        <Container className="grid items-end gap-8 py-12 lg:grid-cols-12 lg:py-16">
          <div className="lg:col-span-5">
            <p className="eyebrow text-cocoa">The collection</p>
            <h1 className="mt-3 font-display text-[clamp(2.4rem,5vw,4.4rem)] leading-[1.05] text-espresso">
              Good things are baking.
            </h1>
            <p className="mt-5 max-w-md text-lg leading-7 text-cocoa">
              Discover beautiful cakes, delicate pastries, fluffy cupcakes, and little treats made to brighten your day.
            </p>
          </div>
          <div className="lg:col-span-7">
            <BakeryImage
              src={media.productsBanner.src}
              alt={media.productsBanner.alt}
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
              frameClassName="aspect-[16/10]"
              objectPosition={media.productsBanner.objectPosition}
            />
          </div>
        </Container>
      </section>
      <section className="bg-cream pb-20">
        <Container>
          <Suspense fallback={<CatalogueFallback />}>
            <ProductCatalogue />
          </Suspense>
        </Container>
      </section>
    </>
  );
}

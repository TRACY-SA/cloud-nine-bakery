import { BakeryImage } from "@/components/ui/bakery-image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { media } from "@/data/media";
import Link from "next/link";

function CategoryCard({
  title,
  description,
  href,
  action,
  image,
  frame,
  sizes,
}: {
  title: string;
  description: string;
  href: string;
  action: string;
  image: { src: string; alt: string; objectPosition?: string };
  frame: string;
  sizes: string;
}) {
  return (
    <article>
      <Link href={href} className="group block">
        <span className="media-zoom block">
          <BakeryImage
            src={image.src}
            alt={image.alt}
            sizes={sizes}
            frameClassName={frame}
            objectPosition={image.objectPosition}
          />
        </span>
        <h3 className="mt-4 font-display text-3xl text-espresso">{title}</h3>
        <p className="mt-2 max-w-md text-sm leading-6 text-cocoa">{description}</p>
        <span className="mt-3 inline-flex min-h-11 items-center text-[0.75rem] font-semibold tracking-[0.14em] uppercase">
          {action}
        </span>
      </Link>
    </article>
  );
}

export function CategoryShowcase() {
  return (
    <section className="bg-cream">
      <Container className="py-16 lg:py-24">
        <SectionHeading eyebrow="The collection" title="Something delicious for every craving.">
          <p>Cakes for the big moments, and smaller treats for the days in between.</p>
        </SectionHeading>
        <div className="mt-12 grid items-start gap-8 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-7">
            <CategoryCard
              title="Celebration Cakes"
              description="Layer cakes and floral designs for birthdays, weddings, and milestones."
              href="/our-products?category=cakes"
              action="Browse cakes"
              image={media.categoryCakes}
              frame="aspect-[4/5]"
              sizes="(min-width: 1024px) 55vw, 100vw"
            />
          </div>
          <div className="grid content-start gap-8 lg:col-span-5">
            <CategoryCard
              title="Cupcakes"
              description="Frosted cupcakes for parties, gifts, and sweet little gatherings."
              href="/our-products?category=cupcakes"
              action="Browse cupcakes"
              image={media.categoryCupcakes}
              frame="aspect-[4/3]"
              sizes="(min-width: 1024px) 35vw, 100vw"
            />
            <CategoryCard
              title="Bread"
              description="Soft milk bread and a rustic loaf for breakfast, lunch, and the table."
              href="/our-products?category=bread"
              action="Browse bread"
              image={media.categoryBread}
              frame="aspect-[4/3]"
              sizes="(min-width: 1024px) 35vw, 100vw"
            />
          </div>
          <div className="border-t border-line pt-8 lg:col-span-7">
            <CategoryCard
              title="Pastries"
              description="Croissants, cinnamon rolls, and other morning bakes."
              href="/our-products?category=pastries"
              action="Browse pastries"
              image={media.categoryPastries}
              frame="aspect-[4/3]"
              sizes="(min-width: 1024px) 55vw, 100vw"
            />
          </div>
          <div className="border-t border-line pt-8 lg:col-span-5">
            <CategoryCard
              title="Desserts"
              description="Brownies, cookies, and slices for a quieter sweet moment."
              href="/our-products?category=desserts"
              action="Browse desserts"
              image={media.categoryDesserts}
              frame="aspect-[4/3]"
              sizes="(min-width: 1024px) 35vw, 100vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

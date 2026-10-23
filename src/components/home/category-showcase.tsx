import { BakeryImage } from "@/components/ui/bakery-image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { media } from "@/data/media";
import Link from "next/link";

const categories = [
  {
    title: "Celebration Cakes",
    description: "Layer cakes and floral designs for birthdays, weddings, and milestones.",
    href: "/our-products?category=cakes",
    action: "Browse cakes",
    image: media.categoryCakes,
    frame: "aspect-[4/5] lg:aspect-[4/5] lg:h-full",
    className: "lg:col-span-7 lg:row-span-2",
  },
  {
    title: "Cupcakes",
    description: "Frosted cupcakes for parties, gifts, and sweet little gatherings.",
    href: "/our-products?category=cupcakes",
    action: "Browse cupcakes",
    image: media.categoryCupcakes,
    frame: "aspect-[4/3]",
    className: "lg:col-span-5",
  },
  {
    title: "Bread",
    description: "Soft milk bread and a rustic loaf for breakfast, lunch, and the table.",
    href: "/our-products?category=bread",
    action: "Browse bread",
    image: media.categoryBread,
    frame: "aspect-[4/3]",
    className: "lg:col-span-5",
  },
] as const;

export function CategoryShowcase() {
  return (
    <section className="bg-cream">
      <Container className="py-16 lg:py-24">
        <SectionHeading eyebrow="The collection" title="Something delicious for every craving.">
          <p>Cakes for the big moments, and smaller treats for the days in between.</p>
        </SectionHeading>
        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-6">
          {categories.map((category) => (
            <article key={category.title} className={category.className}>
              <Link href={category.href} className="group block h-full">
                <span className="media-zoom block h-full">
                  <BakeryImage
                    src={category.image.src}
                    alt={category.image.alt}
                    sizes={category.title === "Celebration Cakes" ? "(min-width: 1024px) 55vw, 100vw" : "(min-width: 1024px) 35vw, 100vw"}
                    frameClassName={category.frame}
                    objectPosition={category.image.objectPosition}
                  />
                </span>
                <h3 className="mt-4 font-display text-3xl text-espresso">{category.title}</h3>
                <p className="mt-2 max-w-md text-sm leading-6 text-cocoa">{category.description}</p>
                <span className="mt-3 inline-flex min-h-11 items-center text-[0.75rem] font-semibold tracking-[0.14em] uppercase">
                  {category.action}
                </span>
              </Link>
            </article>
          ))}
          <article className="border-t border-line pt-8 lg:col-span-7">
            <Link href="/our-products?category=pastries" className="group block">
              <span className="media-zoom block">
                <BakeryImage
                  src={media.categoryPastries.src}
                  alt={media.categoryPastries.alt}
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  frameClassName="aspect-[4/3]"
                  objectPosition={media.categoryPastries.objectPosition}
                />
              </span>
              <h3 className="mt-4 font-display text-3xl text-espresso">Pastries</h3>
              <p className="mt-2 max-w-md text-sm leading-6 text-cocoa">
                Croissants, cinnamon rolls, and other morning bakes.
              </p>
              <span className="mt-3 inline-flex min-h-11 items-center text-[0.75rem] font-semibold tracking-[0.14em] uppercase">
                Browse pastries
              </span>
            </Link>
          </article>
          <article className="border-t border-line pt-8 lg:col-span-5">
            <Link href="/our-products?category=desserts" className="group block">
              <span className="media-zoom block">
                <BakeryImage
                  src={media.categoryDesserts.src}
                  alt={media.categoryDesserts.alt}
                  sizes="(min-width: 1024px) 35vw, 100vw"
                  frameClassName="aspect-[4/3]"
                  objectPosition={media.categoryDesserts.objectPosition}
                />
              </span>
              <h3 className="mt-4 font-display text-3xl text-espresso">Desserts</h3>
              <p className="mt-2 max-w-md text-sm leading-6 text-cocoa">
                Brownies, cookies, and slices for a quieter sweet moment.
              </p>
              <span className="mt-3 inline-flex min-h-11 items-center text-[0.75rem] font-semibold tracking-[0.14em] uppercase">
                Browse desserts
              </span>
            </Link>
          </article>
        </div>
      </Container>
    </section>
  );
}

import { BakeryImage } from "@/components/ui/bakery-image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { media } from "@/data/media";
import { siteConfig } from "@/lib/site-config";

export function HeroSection() {
  return (
    <section className="bg-cream">
      <Container className="grid items-center gap-8 py-8 sm:py-12 lg:grid-cols-12 lg:gap-14 lg:py-16">
        <div className="order-1 lg:order-2 lg:col-span-7">
          <BakeryImage
            src={media.hero.src}
            alt={media.hero.alt}
            sizes="(min-width: 1024px) 58vw, 100vw"
            priority
            frameClassName="mx-auto aspect-[4/5] w-[min(100%,18rem)] sm:w-[min(100%,26rem)] lg:w-full"
            objectPosition={media.hero.objectPosition}
          />
        </div>
        <div className="order-2 lg:order-1 lg:col-span-5">
          <p className="eyebrow text-cocoa">Artisan bakery · Accra, Ghana</p>
          <h1 className="mt-4 font-display text-[clamp(2.15rem,4.7vw,4.5rem)] leading-[1.04] font-medium tracking-[-0.025em] text-espresso">
            Life is sweeter when there&apos;s something to celebrate.
          </h1>
          <p className="mt-5 max-w-md text-base leading-7 text-cocoa sm:text-lg">
            From beautiful celebration cakes to flaky pastries and little everyday indulgences, Cloud Nine Bakery makes every moment a little more memorable.
          </p>
          <p className="mt-5 border-l-2 border-gold pl-4 font-display text-[1.65rem] leading-snug text-espresso italic">
            {siteConfig.tagline}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button href="/our-products">Explore Our Treats</Button>
            <Button href="/custom-cakes" variant="secondary">
              Create Your Custom Cake
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

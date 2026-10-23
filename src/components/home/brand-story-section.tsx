import { BakeryImage } from "@/components/ui/bakery-image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { media } from "@/data/media";
import { siteConfig } from "@/lib/site-config";

export function BrandStorySection() {
  return (
    <section className="bg-cream">
      <Container className="grid items-center gap-10 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-5 lg:col-start-8 lg:row-start-1">
          <BakeryImage
            src={media.story.src}
            alt={media.story.alt}
            sizes="(min-width: 1024px) 36vw, 100vw"
            frameClassName="aspect-[4/5]"
            objectPosition={media.story.objectPosition}
          />
        </div>
        <div className="lg:col-span-6 lg:row-start-1">
          <p className="eyebrow text-cocoa">Since {siteConfig.established}</p>
          <h2 className="mt-3 font-display text-[clamp(2.1rem,4vw,3.5rem)] leading-[1.08] text-espresso">
            Made with care. Shared with joy.
          </h2>
          <div className="mt-5 max-w-xl space-y-4 leading-7 text-cocoa">
            <p>
              Cloud Nine Bakery is a new patisserie with an old-fashioned aim: make something people are glad they stopped for. We pay attention to how a cake looks, how a pastry breaks, and how it feels to be welcomed.
            </p>
            <p>
              There is no long legend to tell yet. {siteConfig.established} is our first year. What we can promise is care in the making, delight in the flavour, and the pleasure of sharing something special.
            </p>
          </div>
          <div className="mt-7">
            <Button href="/about-us" variant="secondary">
              Get to Know Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

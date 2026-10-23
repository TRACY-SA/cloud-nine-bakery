import { BakeryImage } from "@/components/ui/bakery-image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { media } from "@/data/media";

export function CustomCakePromo() {
  return (
    <section className="bg-blush/45">
      <Container className="grid items-center gap-10 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-7">
          <BakeryImage
            src={media.customPromo.src}
            alt={media.customPromo.alt}
            sizes="(min-width: 1024px) 55vw, 100vw"
            frameClassName="aspect-[4/5] sm:aspect-[5/4]"
            objectPosition={media.customPromo.objectPosition}
          />
        </div>
        <div className="lg:col-span-5">
          <p className="eyebrow text-cocoa">Custom cakes</p>
          <h2 className="mt-3 font-display text-[clamp(2.1rem,4vw,3.5rem)] leading-[1.08] text-espresso">
            Your celebration deserves a cake of its own.
          </h2>
          <p className="mt-5 leading-7 text-cocoa">
            Tell us what you&apos;re celebrating, share your favourite flavours, and let us help you imagine a cake that feels just right for your moment.
          </p>
          <div className="mt-7">
            <Button href="/custom-cakes">Design Your Celebration Cake</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

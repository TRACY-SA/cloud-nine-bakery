import { BakeryImage } from "@/components/ui/bakery-image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { media } from "@/data/media";
import { siteConfig } from "@/lib/site-config";

export function BrandIntro() {
  return (
    <section className="bg-ivory">
      <Container className="grid items-center gap-10 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-5">
          <BakeryImage
            src={media.brandIntro.src}
            alt={media.brandIntro.alt}
            sizes="(min-width: 1024px) 36vw, 100vw"
            frameClassName="aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]"
            objectPosition={media.brandIntro.objectPosition}
          />
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <SectionHeading eyebrow="The bakery" title="A little sweetness goes a long way.">
            <p>
              At Cloud Nine Bakery, we believe the best memories often begin with something delicious. Whether you&apos;re celebrating a milestone or simply treating yourself, we&apos;re here to make the moment special.
            </p>
          </SectionHeading>
          <p className="mt-6 max-w-xl leading-7 text-cocoa">
            We opened in {siteConfig.address.area} in {siteConfig.established}. The idea is simple: a cake, a loaf, or a small pastry can turn an ordinary day into something people want to share.
          </p>
        </div>
      </Container>
    </section>
  );
}

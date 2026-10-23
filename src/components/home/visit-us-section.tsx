import { BakeryImage } from "@/components/ui/bakery-image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { media } from "@/data/media";
import { addressLine, mapsSearchUrl, siteConfig, telHref } from "@/lib/site-config";

export function VisitUsSection() {
  return (
    <section className="bg-ivory">
      <Container className="grid items-center gap-10 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-6">
          <p className="eyebrow text-cocoa">Ashongman Estate</p>
          <h2 className="mt-3 font-display text-[clamp(2.1rem,4vw,3.5rem)] leading-[1.08] text-espresso">
            Come by for something lovely.
          </h2>
          <dl className="mt-8 grid gap-5 text-cocoa">
            <div>
              <dt className="text-xs tracking-[0.16em] text-muted uppercase">Address</dt>
              <dd className="mt-1 text-lg text-espresso">{addressLine()}</dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.16em] text-muted uppercase">Telephone</dt>
              <dd className="mt-1 text-lg">
                <a href={telHref()} className="text-espresso underline decoration-gold underline-offset-4">
                  {siteConfig.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.16em] text-muted uppercase">Hours</dt>
              <dd className="mt-1 text-lg text-espresso">
                {siteConfig.hours.summary}
                <span className="mt-1 block text-base text-muted">{siteConfig.hours.sunday}</span>
              </dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={mapsSearchUrl()} target="_blank" rel="noopener noreferrer">
              Get Directions
            </Button>
            <Button href={telHref()} variant="secondary">
              Call the Bakery
            </Button>
          </div>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <BakeryImage
            src={media.visit.src}
            alt={media.visit.alt}
            sizes="(min-width: 1024px) 34vw, 100vw"
            frameClassName="aspect-[4/5]"
            objectPosition={media.visit.objectPosition}
          />
          <p className="mt-3 text-sm text-muted">
            The photograph is a sample of the kind of treats we hope to serve. It is not a picture of the shop.
          </p>
        </div>
      </Container>
    </section>
  );
}

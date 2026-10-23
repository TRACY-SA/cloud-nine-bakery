import { BakeryImage } from "@/components/ui/bakery-image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { media } from "@/data/media";
import { siteConfig } from "@/lib/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Cloud Nine Bakery was established in 2026 in Ashongman Estate, Accra, to make celebrations and everyday moments a little sweeter.",
  openGraph: {
    title: "About Us | Cloud Nine Bakery",
    description:
      "Cloud Nine Bakery was established in 2026 in Ashongman Estate, Accra, to make celebrations and everyday moments a little sweeter.",
  },
};

const pillars = [
  {
    title: "Made for Moments",
    copy: "Treats for birthdays, milestones, and the spontaneous celebrations that arrive on a Tuesday.",
  },
  {
    title: "Crafted with Care",
    copy: "Attention to presentation, flavour, and the details that make a treat feel special.",
  },
  {
    title: "Sweetness Worth Sharing",
    copy: "A warm, welcoming experience for customers choosing something for themselves or someone they love.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-cream">
        <Container className="grid items-center gap-10 py-12 lg:grid-cols-12 lg:py-16">
          <div className="lg:col-span-6">
            <p className="eyebrow text-cocoa">Established {siteConfig.established}</p>
            <h1 className="mt-3 font-display text-[clamp(2.4rem,5vw,4.6rem)] leading-[1.02] text-espresso">
              A little bakery. A whole lot of joy.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-7 text-cocoa">
              Cloud Nine Bakery was established in {siteConfig.established} with a simple idea: every bite can make a moment feel a little more special.
            </p>
          </div>
          <div className="lg:col-span-6">
            <BakeryImage
              src={media.aboutHero.src}
              alt={media.aboutHero.alt}
              sizes="(min-width: 1024px) 46vw, 100vw"
              priority
              frameClassName="aspect-[4/5] sm:aspect-[5/4]"
            />
          </div>
        </Container>
      </section>

      <section className="bg-ivory">
        <Container className="grid gap-10 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl text-espresso">Our story</h2>
          </div>
          <div className="max-w-2xl space-y-4 leading-7 text-cocoa lg:col-span-7">
            <p>
              Celebration is the heart of the bakery. A birthday, a wedding, a graduation, or a quiet reason of your own — dessert has a way of gathering people around the same table.
            </p>
            <p>
              We also care about the ordinary days. A soft loaf. A croissant on the way somewhere. A box of cupcakes chosen just because. Those smaller pleasures deserve the same attention as the cake with the candles.
            </p>
            <p>
              Cloud Nine Bakery is new. We will not pretend otherwise. There is no invented founder story here, and no list of awards. What we are building is a welcoming place in {siteConfig.address.area}, where the cakes are beautiful, the flavours are joyful, and customers feel looked after.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-cream">
        <Container className="py-16 lg:py-24">
          <h2 className="font-display text-4xl text-espresso">Our philosophy</h2>
          <ol className="mt-10 grid gap-8 lg:grid-cols-3">
            {pillars.map((pillar, index) => (
              <li key={pillar.title} className="border-t border-line pt-5">
                <p className="font-display text-3xl text-cocoa">0{index + 1}</p>
                <h3 className="mt-3 font-display text-3xl text-espresso">{pillar.title}</h3>
                <p className="mt-3 leading-7 text-cocoa">{pillar.copy}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-ivory">
        <Container className="grid gap-10 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl text-espresso">What makes a visit feel like Cloud Nine</h2>
            <ul className="mt-6 grid gap-4 leading-7 text-cocoa">
              <li>A thoughtfully arranged range of cakes, cupcakes, bread, pastries, and desserts.</li>
              <li>A straightforward way to enquire about a custom celebration cake.</li>
              <li>An atmosphere that feels polished and warm, never stiff.</li>
              <li>Clear hours, a real telephone number, and simple directions to {siteConfig.address.area}.</li>
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            <BakeryImage src={media.aboutJars.src} alt={media.aboutJars.alt} sizes="(min-width: 1024px) 22vw, 50vw" frameClassName="aspect-[3/4]" />
            <BakeryImage src={media.aboutSlice.src} alt={media.aboutSlice.alt} sizes="(min-width: 1024px) 22vw, 50vw" frameClassName="aspect-[3/4] sm:mt-10" />
            <BakeryImage src={media.aboutCinnamon.src} alt={media.aboutCinnamon.alt} sizes="(min-width: 1024px) 22vw, 50vw" frameClassName="aspect-square" />
            <BakeryImage src={media.aboutTarts.src} alt={media.aboutTarts.alt} sizes="(min-width: 1024px) 22vw, 50vw" frameClassName="aspect-square sm:mt-10" />
          </div>
        </Container>
      </section>

      <section className="bg-cream">
        <Container className="py-16 text-center lg:py-24">
          <h2 className="font-display text-[clamp(2.1rem,4vw,3.6rem)] text-espresso">
            Let&apos;s make something worth celebrating.
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/our-products">Explore Our Products</Button>
            <Button href="/custom-cakes" variant="secondary">
              Plan a Custom Cake
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

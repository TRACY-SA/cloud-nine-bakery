import { CakeRequestForm } from "@/components/custom-cakes/cake-request-form";
import { BakeryImage } from "@/components/ui/bakery-image";
import { Container } from "@/components/ui/container";
import { cakeSteps } from "@/data/cake-options";
import { media } from "@/data/media";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Cakes",
  description:
    "Enquire about a custom celebration cake from Cloud Nine Bakery in Accra. Share your occasion, flavour, size, and date for the bakery to confirm.",
  alternates: { canonical: "/custom-cakes" },
  openGraph: {
    title: "Custom Cakes | Cloud Nine Bakery",
    description:
      "Enquire about a custom celebration cake from Cloud Nine Bakery in Accra. Share your occasion, flavour, size, and date for the bakery to confirm.",
  },
};

const inspiration = [
  { title: "Elegant floral", copy: "Fresh flowers, pale frosting, and a softer finish.", image: media.inspirationElegant },
  { title: "Minimal celebration", copy: "Pale frosting, a few fresh flowers, and a quiet finish.", image: media.inspirationMinimal },
  { title: "Chocolate", copy: "Deep cocoa layers for a richer celebration.", image: media.inspirationChocolate },
  { title: "Romantic berries", copy: "Fruit, white frosting, and a softer mood.", image: media.inspirationRomantic },
  { title: "Children's birthday", copy: "Playful colour for a smaller guest of honour.", image: media.inspirationChildren },
  { title: "Modern finish", copy: "A glossy, graphic cake with a simple garnish.", image: media.inspirationModern },
];

export default function CustomCakesPage() {
  return (
    <>
      <section className="bg-cream">
        <Container className="grid items-center gap-10 py-12 lg:grid-cols-12 lg:py-16">
          <div className="lg:col-span-5">
            <p className="eyebrow text-cocoa">Cake enquiries</p>
            <h1 className="mt-3 font-display text-[clamp(2.4rem,5vw,4.4rem)] leading-[1.05] text-espresso">
              A cake as special as the moment.
            </h1>
            <p className="mt-5 text-lg leading-7 text-cocoa">
              Birthdays, weddings, graduations, anniversaries, and everything in between. Tell us about your celebration and the cake you have in mind.
            </p>
            <p className="mt-4 text-sm leading-6 text-muted">
              This page prepares an enquiry. It is not a confirmed booking or a paid order. Cloud Nine Bakery confirms the date, design, and price with you directly.
            </p>
          </div>
          <div className="lg:col-span-7">
            <BakeryImage
              src={media.customLead.src}
              alt={media.customLead.alt}
              sizes="(min-width: 1024px) 52vw, 100vw"
              priority
              frameClassName="aspect-[4/5] sm:aspect-[5/4]"
              objectPosition={media.customLead.objectPosition}
            />
          </div>
        </Container>
      </section>

      <section className="bg-ivory">
        <Container className="py-16 lg:py-20">
          <h2 className="font-display text-4xl text-espresso">A little inspiration</h2>
          <p className="mt-4 max-w-2xl leading-7 text-cocoa">
            These styles are starting points, not a menu of guaranteed designs. The final cake, its availability, and the price must be confirmed with the bakery.
          </p>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {inspiration.map((item) => (
              <li key={item.title}>
                <BakeryImage
                  src={item.image.src}
                  alt={item.image.alt}
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  frameClassName="aspect-[4/5]"
                  objectPosition={"objectPosition" in item.image ? item.image.objectPosition : undefined}
                />
                <h3 className="mt-4 font-display text-2xl text-espresso">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-cocoa">{item.copy}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-cream">
        <Container className="grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-7">
            <h2 className="font-display text-4xl text-espresso">Tell us about your cake</h2>
            <p className="mt-4 max-w-xl leading-7 text-cocoa">
              Flavour and size choices are requests. They are not a promise that every option is available on your date.
            </p>
            <div className="mt-8">
              <CakeRequestForm />
            </div>
          </div>
          <aside className="lg:col-span-4 lg:col-start-9">
            <h2 className="font-display text-3xl text-espresso">How it works</h2>
            <ol className="mt-6 grid gap-6">
              {cakeSteps.map((step, index) => (
                <li key={step.title} className="border-t border-line pt-4">
                  <p className="font-display text-2xl text-cocoa">0{index + 1}</p>
                  <h3 className="mt-1 text-lg text-espresso">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-cocoa">{step.copy}</p>
                </li>
              ))}
            </ol>
          </aside>
        </Container>
      </section>
    </>
  );
}

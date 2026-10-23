import { ContactDetails } from "@/components/contact/contact-details";
import { ContactForm } from "@/components/contact/contact-form";
import { LocationSection } from "@/components/contact/location-section";
import { OpeningHours } from "@/components/contact/opening-hours";
import { Container } from "@/components/ui/container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Visit Cloud Nine Bakery at GS 5562 – 234, Ashongman Estate, Accra, or call +233 55 767 3345. Open Monday to Saturday, 8:00 AM to 5:00 PM.",
  openGraph: {
    title: "Contact | Cloud Nine Bakery",
    description:
      "Visit Cloud Nine Bakery at GS 5562 – 234, Ashongman Estate, Accra, or call +233 55 767 3345. Open Monday to Saturday, 8:00 AM to 5:00 PM.",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-cream">
        <Container className="py-12 lg:py-16">
          <p className="eyebrow text-cocoa">Accra, Ghana</p>
          <h1 className="mt-3 max-w-3xl font-display text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.05] text-espresso">
            We&apos;d love to hear from you.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-7 text-cocoa">
            Planning a celebration, looking for something delicious, or simply have a question? Get in touch with Cloud Nine Bakery.
          </p>
          <div className="mt-12 grid gap-12 lg:grid-cols-12">
            <div className="grid gap-10 lg:col-span-5">
              <ContactDetails />
              <OpeningHours />
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <h2 className="font-display text-4xl text-espresso">Send a note</h2>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <LocationSection />
    </>
  );
}

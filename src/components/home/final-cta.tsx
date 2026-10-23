import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function FinalCta() {
  return (
    <section className="bg-cream">
      <Container className="pb-16 lg:pb-24">
        <div className="border border-blush bg-blush/35 px-6 py-14 text-center sm:px-12">
          <h2 className="font-display text-[clamp(2.1rem,4vw,3.6rem)] leading-[1.08] text-espresso">
            Make your next moment a little sweeter.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-7 text-cocoa">
            Find your new favourite treat or start planning something special.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/our-products">Browse Our Products</Button>
            <Button href="/custom-cakes" variant="secondary">
              Request a Custom Cake
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <Container className="py-24">
      <p className="eyebrow text-cocoa">404</p>
      <h1 className="mt-3 font-display text-5xl text-espresso">This page has left the counter.</h1>
      <p className="mt-4 max-w-md leading-7 text-cocoa">
        The link may be out of date. The cakes, pastries, and contact details are still right where you left them.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/">Back to Home</Button>
        <Button href="/our-products" variant="secondary">
          Browse Our Products
        </Button>
      </div>
    </Container>
  );
}

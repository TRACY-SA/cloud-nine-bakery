import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="dark-surface bg-espresso text-cream">
      <Container className="py-16 lg:py-24">
        <SectionHeading title="Sweet words from our customers" tone="dark" />
        <ul className="mt-12 grid gap-10 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <li key={testimonial.id} className="border-t border-gold/70 pt-6">
              <blockquote>
                <p className="font-display text-[1.7rem] leading-snug text-cream">“{testimonial.quote}”</p>
                <footer className="mt-5 text-sm text-blush">{testimonial.context}</footer>
              </blockquote>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

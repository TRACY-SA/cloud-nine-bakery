import { BestsellersSection } from "@/components/home/bestsellers-section";
import { BrandIntro } from "@/components/home/brand-intro";
import { BrandStorySection } from "@/components/home/brand-story-section";
import { CategoryShowcase } from "@/components/home/category-showcase";
import { CustomCakePromo } from "@/components/home/custom-cake-promo";
import { FinalCta } from "@/components/home/final-cta";
import { HeroSection } from "@/components/home/hero-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { VisitUsSection } from "@/components/home/visit-us-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandIntro />
      <CategoryShowcase />
      <BestsellersSection />
      <CustomCakePromo />
      <BrandStorySection />
      <TestimonialsSection />
      <VisitUsSection />
      <FinalCta />
    </>
  );
}

import { DesktopNavigation } from "@/components/layout/desktop-navigation";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { Button } from "@/components/ui/button";
import { CloudMark } from "@/components/ui/cloud-mark";
import { Container } from "@/components/ui/container";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header id="top" className="sticky top-0 z-40 border-b border-line bg-cream">
      <Container className="relative flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
        <Link href="/" className="flex items-center gap-2.5 text-espresso">
          <CloudMark className="h-5 w-8 text-cocoa" />
          <span>
            <span className="block font-display text-[1.65rem] leading-none">Cloud Nine</span>
            <span className="mt-1 block text-[0.62rem] tracking-[0.28em] text-muted uppercase">Bakery</span>
          </span>
        </Link>
        <DesktopNavigation />
        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <Button href="/custom-cakes">Order a Custom Cake</Button>
          </div>
          <MobileNavigation />
        </div>
      </Container>
    </header>
  );
}

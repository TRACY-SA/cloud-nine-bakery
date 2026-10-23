import { CopyrightNotice } from "@/components/layout/copyright-notice";
import { CloudMark } from "@/components/ui/cloud-mark";
import { Container } from "@/components/ui/container";
import { productCategories } from "@/data/categories";
import { mainNavigation } from "@/data/navigation";
import {
  addressLine,
  configuredEmail,
  configuredUrl,
  mapsSearchUrl,
  siteConfig,
  telHref,
} from "@/lib/site-config";
import Link from "next/link";

export function SiteFooter() {
  const email = configuredEmail(siteConfig.email);
  const socials = [
    { label: "Instagram", href: configuredUrl(siteConfig.social.instagram) },
    { label: "Facebook", href: configuredUrl(siteConfig.social.facebook) },
  ].filter((item): item is { label: string; href: string } => Boolean(item.href));

  return (
    <footer className="dark-surface bg-espresso text-cream">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <CloudMark className="h-6 w-10 text-gold" />
          <p className="mt-4 font-display text-4xl leading-none">Cloud Nine Bakery</p>
          <p className="mt-4 font-display text-2xl text-blush italic">{siteConfig.tagline}</p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-cream/75">{siteConfig.shortDescription}</p>
          <p className="mt-5 text-xs tracking-[0.18em] text-gold uppercase">
            Established {siteConfig.established}
          </p>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-xs tracking-[0.18em] text-gold uppercase">Explore</h2>
          <ul className="mt-4 grid gap-2">
            {mainNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-10 items-center text-sm hover:text-blush">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-xs tracking-[0.18em] text-gold uppercase">Treats</h2>
          <ul className="mt-4 grid gap-2">
            {productCategories
              .filter((category) => category.id !== "all")
              .map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/our-products?category=${category.id}`}
                    className="inline-flex min-h-10 items-center text-sm hover:text-blush"
                  >
                    {category.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-xs tracking-[0.18em] text-gold uppercase">Visit</h2>
          <address className="mt-4 text-sm leading-6 text-cream/85 not-italic">
            {addressLine()}
          </address>
          <p className="mt-3 text-sm leading-6">
            <a href={telHref()} className="underline decoration-gold/70 underline-offset-4">
              {siteConfig.phoneDisplay}
            </a>
          </p>
          {email ? (
            <p className="mt-2 text-sm">
              <a href={`mailto:${email}`} className="underline decoration-gold/70 underline-offset-4">
                {email}
              </a>
            </p>
          ) : null}
          <p className="mt-4 text-sm leading-6 text-cream/75">
            {siteConfig.hours.summary}
            <br />
            {siteConfig.hours.sunday}
          </p>
          <p className="mt-4">
            <a
              href={mapsSearchUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline decoration-gold/70 underline-offset-4"
            >
              Get directions
            </a>
          </p>
          {socials.length > 0 ? (
            <ul className="mt-4 flex flex-wrap gap-4">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline decoration-gold/70 underline-offset-4"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-5 text-xs tracking-wide text-cream/70 sm:flex-row sm:items-center sm:justify-between">
          <CopyrightNotice />
          <a href="#top" className="inline-flex min-h-10 items-center uppercase tracking-[0.16em]">
            Back to top
          </a>
        </Container>
      </div>
    </footer>
  );
}

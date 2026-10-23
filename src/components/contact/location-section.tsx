import { addressLine, mapsSearchUrl, siteConfig, telHref } from "@/lib/site-config";

export function LocationSection() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto grid w-full max-w-[1180px] gap-8 px-5 py-14 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="eyebrow text-cocoa">Find us</p>
          <h2 className="mt-3 font-display text-4xl text-espresso">Ashongman Estate, Accra</h2>
          <p className="mt-4 max-w-xl leading-7 text-cocoa">
            We have not published a map pin, because the exact coordinates still need to be confirmed. Use the address below to search for directions.
          </p>
          <p className="mt-6 text-lg text-espresso">{addressLine()}</p>
          <p className="mt-3 text-cocoa">
            {siteConfig.hours.summary}
            <span className="block">{siteConfig.hours.sunday}</span>
          </p>
          <p className="mt-3">
            <a href={telHref()} className="text-espresso underline decoration-gold underline-offset-4">
              {siteConfig.phoneDisplay}
            </a>
          </p>
        </div>
        <div className="flex items-end lg:col-span-5">
          <a
            href={mapsSearchUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center bg-espresso px-6 text-[0.78rem] font-semibold tracking-[0.14em] text-cream uppercase"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}

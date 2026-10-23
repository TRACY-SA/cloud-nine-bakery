import { addressLine, mapsSearchUrl, siteConfig, telHref } from "@/lib/site-config";
import { buildWhatsAppUrl, generalEnquiryMessage } from "@/lib/whatsapp";

export function ContactDetails() {
  const whatsapp = buildWhatsAppUrl(generalEnquiryMessage());

  return (
    <div>
      <h2 className="font-display text-4xl text-espresso">Talk to the bakery</h2>
      <dl className="mt-6 grid gap-5">
        <div>
          <dt className="text-xs tracking-[0.16em] text-muted uppercase">Telephone</dt>
          <dd className="mt-1 text-2xl">
            <a href={telHref()} className="text-espresso underline decoration-gold underline-offset-4">
              {siteConfig.phoneDisplay}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-xs tracking-[0.16em] text-muted uppercase">Address</dt>
          <dd className="mt-1 text-lg leading-7 text-espresso">{addressLine()}</dd>
        </div>
      </dl>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a
          href={telHref()}
          className="inline-flex min-h-12 items-center justify-center bg-espresso px-6 text-[0.78rem] font-semibold tracking-[0.14em] text-cream uppercase"
        >
          Call the Bakery
        </a>
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center border border-espresso/25 px-6 text-[0.78rem] font-semibold tracking-[0.14em] text-espresso uppercase"
        >
          WhatsApp the Bakery
        </a>
        <a
          href={mapsSearchUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center px-2 text-[0.78rem] font-semibold tracking-[0.14em] text-espresso uppercase underline underline-offset-4"
        >
          Get Directions
        </a>
      </div>
      <p className="mt-4 max-w-md text-sm leading-6 text-muted">
        WhatsApp opens a chat with a short greeting. It does not send a message until you do.
      </p>
    </div>
  );
}

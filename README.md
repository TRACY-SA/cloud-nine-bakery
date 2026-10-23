# Cloud Nine Bakery

A static, multi-page website for Cloud Nine Bakery in Ashongman Estate, Accra. Visitors can browse the sample catalogue, prepare a custom-cake enquiry, and contact the bakery. There is no database, checkout, or server-side form delivery.

## Requirements

- Node.js 20.9 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
npm run lint
npm run typecheck
npm run build
```

`npm run build` prerenders every page as static content. Start the production server with `npm start` after a build.

The project uses Next.js image optimization, so it is intended for a Node host or Vercel. It is not configured with `output: "export"`.

## Where to edit the business

| What | File |
| --- | --- |
| Name, tagline, phone, WhatsApp number, address, hours | `src/lib/site-config.ts` |
| Optional public site URL, email, and social links | `.env.example`, copied to `.env.local` |
| Products, sample prices, and product photos | `src/data/products.ts` |
| Editorial photographs | `src/data/media.ts` and `public/images/` |
| Sample testimonials | `src/data/testimonials.ts` |
| Cake flavour, size, and occasion options | `src/data/cake-options.ts` |

Leave `NEXT_PUBLIC_BUSINESS_EMAIL`, `NEXT_PUBLIC_INSTAGRAM_URL`, and `NEXT_PUBLIC_FACEBOOK_URL` empty until the bakery supplies real values. The site hides them when they are blank. Set `NEXT_PUBLIC_SITE_URL` to the production origin before launch so canonical links and the sitemap use the real domain. Until then, the sitemap falls back to `http://localhost:3000`.

## WhatsApp enquiries

The bakery number used in `wa.me` links is `233539740552`, from `src/lib/site-config.ts`. The displayed number is `+233 53 974 0552`.

Custom-cake and contact forms validate in the browser, then open a WhatsApp chat with a prepared message. Opening the chat does not send the message and does not confirm an order, price, or date. If the window is blocked, the visitor can copy the enquiry. Nothing is stored in the browser.

Product details include an enquiry link that pre-fills the product name and the sample price.

Dates on the cake form use the Accra calendar (`Africa/Accra`), not the visitor's local timezone. A chosen date is a request, not a reservation.

## Confirm before publication

- Product names, descriptions, and prices are demonstration content.
- Photographs are sample food images and should be replaced with Cloud Nine Bakery's own photography.
- Homepage quotes are sample wording attributed to John, Sandra, and Christine. Replace them with genuine customer words before treating them as reviews.
- No email address or social profile is invented. Add only real ones.
- Do not publish delivery promises, payment methods, awards, or lead times that the bakery has not set.
- Confirm the street address before relying on the Google Maps search link. The site does not place a map pin.

## Deploy

Deploy the Next.js app to a host that supports `next build` and `next start`, such as Vercel. Set `NEXT_PUBLIC_SITE_URL` in the production environment to the live origin.

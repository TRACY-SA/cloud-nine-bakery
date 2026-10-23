import type { Product } from "@/types";

/**
 * Demonstration catalogue.
 * Prices are sample figures for development and have not been approved
 * by Cloud Nine Bakery. Photography is sample food imagery and should be
 * replaced with the bakery's own photos before publication.
 */
export const products: Product[] = [
  {
    id: "classic-vanilla-celebration-cake",
    name: "Classic Vanilla Celebration Cake",
    description:
      "Smooth white frosting over a pale, tender cake, finished with a dark chocolate drip and a scatter of chocolate shards.",
    category: "cakes",
    price: 320,
    unit: "per cake",
    portion: "8-inch celebration cake",
    image: "/images/vanilla-drip.jpg",
    imageAlt: "A white-frosted celebration cake with a dark chocolate drip and chocolate shards on top",
    objectPosition: "center 42%",
    bestseller: true,
  },
  {
    id: "chocolate-fudge-cake",
    name: "Chocolate Fudge Cake",
    description:
      "A rich chocolate cake with a glossy ganache drip, piped cocoa swirls, and a soft, deeply chocolate crumb.",
    category: "cakes",
    price: 350,
    unit: "per cake",
    portion: "8-inch celebration cake",
    image: "/images/chocolate-fudge.jpg",
    imageAlt: "A chocolate fudge cake with ganache drips and piped chocolate swirls on a white stand",
    bestseller: true,
  },
  {
    id: "red-velvet-cake",
    name: "Red Velvet Cake",
    description:
      "Deep red layers with a pale, lightly tangy frosting. The photograph shows the slice; the cake is offered whole.",
    category: "cakes",
    price: 380,
    unit: "per cake",
    portion: "Whole celebration cake",
    image: "/images/red-velvet-slice.jpg",
    imageAlt: "A slice of red velvet cake with white frosting and fresh strawberries beside the plate",
    objectPosition: "center center",
  },
  {
    id: "strawberry-shortcake",
    name: "Strawberry Shortcake",
    description:
      "White frosting, ripe strawberries, and a bright berry finish on a tiered celebration cake.",
    category: "cakes",
    price: 420,
    unit: "per cake",
    portion: "Tiered celebration cake",
    image: "/images/berry-tier.jpg",
    imageAlt: "A two-tier white cake decorated with strawberries, blueberries, and a dusting of sugar",
    objectPosition: "center 40%",
  },
  {
    id: "floral-celebration-cake",
    name: "Floral Celebration Cake",
    description:
      "A tall white cake dressed with blush and cream roses, for weddings, anniversaries, and other milestone gatherings.",
    category: "cakes",
    price: 560,
    unit: "per cake",
    portion: "Tiered celebration cake. Design confirmed with the bakery.",
    image: "/images/floral-roses.jpg",
    imageAlt: "A three-tier white celebration cake decorated with blush and cream roses",
    objectPosition: "center 35%",
  },
  {
    id: "vanilla-buttercream-cupcakes",
    name: "Vanilla Buttercream Cupcakes",
    description:
      "Vanilla cupcakes with a tall swirl of pale pink buttercream, a strawberry, and a thread of white chocolate.",
    category: "cupcakes",
    price: 18,
    unit: "each",
    portion: "Single cupcake",
    image: "/images/vanilla-cupcakes.jpg",
    imageAlt: "Pink-frosted vanilla cupcakes topped with strawberries and white chocolate drizzle",
    bestseller: true,
  },
  {
    id: "double-chocolate-cupcakes",
    name: "Double Chocolate Cupcakes",
    description:
      "Chocolate cupcakes with a generous cocoa frosting swirl and a few chocolate chips on top.",
    category: "cupcakes",
    price: 20,
    unit: "each",
    portion: "Single cupcake",
    image: "/images/chocolate-cupcakes.jpg",
    imageAlt: "Chocolate cupcakes with swirled cocoa frosting and chocolate chips",
  },
  {
    id: "red-velvet-cupcakes",
    name: "Red Velvet Cupcakes",
    description:
      "Red velvet cupcakes crowned with a swirl of pale frosting and a sprinkle of crimson crumbs.",
    category: "cupcakes",
    price: 22,
    unit: "each",
    portion: "Single cupcake",
    image: "/images/red-velvet-cupcake.jpg",
    imageAlt: "A red velvet cupcake with cream frosting and red crumbs on a wooden board",
  },
  {
    id: "soft-milk-bread",
    name: "Soft Milk Bread",
    description:
      "A soft, square loaf with a fine, pillowy crumb and a golden crust, sliced and ready for the table.",
    category: "bread",
    price: 24,
    unit: "per loaf",
    portion: "Sliced loaf",
    image: "/images/milk-bread.jpg",
    imageAlt: "A sliced loaf of soft milk bread with a golden crust on a wooden board",
    objectPosition: "72% center",
  },
  {
    id: "artisan-loaf",
    name: "Artisan Loaf",
    description:
      "Rustic round loaves with a floury crust and a scatter of seeds, baked for soups and sharing.",
    category: "bread",
    price: 32,
    unit: "per loaf",
    portion: "Round loaf",
    image: "/images/artisan-loaves.jpg",
    imageAlt: "Three rustic round loaves, one topped with sunflower seeds and another with mixed seeds",
  },
  {
    id: "butter-croissants",
    name: "Butter Croissants",
    description:
      "Deeply golden, flaky croissants with visible layers and a light fall of sugar.",
    category: "pastries",
    price: 14,
    unit: "each",
    portion: "Single croissant",
    image: "/images/croissants.jpg",
    imageAlt: "Two golden butter croissants on a dark board as sugar falls over them",
    objectPosition: "center 60%",
  },
  {
    id: "cinnamon-rolls",
    name: "Cinnamon Rolls",
    description:
      "Soft spirals with a warm cinnamon filling and a sparkle of sugar, baked close together.",
    category: "pastries",
    price: 16,
    unit: "each",
    portion: "Single roll",
    image: "/images/cinnamon-rolls.jpg",
    imageAlt: "A tray of cinnamon rolls dusted with sugar",
    bestseller: true,
  },
  {
    id: "fudgy-brownies",
    name: "Fudgy Brownies",
    description:
      "Dense chocolate squares with a moist crumb, finished with a ribbon of melted chocolate.",
    category: "desserts",
    price: 18,
    unit: "each",
    portion: "Single square",
    image: "/images/brownies.jpg",
    imageAlt: "Stacked chocolate brownies with melted chocolate poured over the top",
    objectPosition: "center 30%",
  },
  {
    id: "chocolate-chip-cookies",
    name: "Chocolate Chip Cookies",
    description:
      "Golden cookies with pockets of melted chocolate and a soft, chewy centre.",
    category: "desserts",
    price: 12,
    unit: "each",
    portion: "Single cookie",
    image: "/images/cookies.jpg",
    imageAlt: "Chocolate chip cookies on parchment, one broken open to show melted chocolate",
  },
  {
    id: "layered-dessert-slice",
    name: "Layered Dessert Slice",
    description:
      "A neat slice of layered cocoa and cream dessert, dusted and finished with chocolate shards.",
    category: "desserts",
    price: 28,
    unit: "per slice",
    portion: "Single slice",
    image: "/images/layered-slice.jpg",
    imageAlt: "A layered cocoa and cream dessert slice on a wooden board, with the whole dessert behind it",
    objectPosition: "center 55%",
  },
];

const favouriteOrder = [
  "chocolate-fudge-cake",
  "classic-vanilla-celebration-cake",
  "red-velvet-cake",
  "vanilla-buttercream-cupcakes",
  "cinnamon-rolls",
  "fudgy-brownies",
];

export function getFavouriteProducts(): Product[] {
  return favouriteOrder.flatMap((id) => {
    const product = products.find((item) => item.id === id);
    return product ? [product] : [];
  });
}

export function getProduct(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

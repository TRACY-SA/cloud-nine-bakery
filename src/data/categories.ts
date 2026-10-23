import type { CatalogueCategoryId, ProductCategoryId } from "@/types";

export const productCategories: Array<{
  id: CatalogueCategoryId;
  label: string;
  description: string;
}> = [
  {
    id: "all",
    label: "All Products",
    description: "The full Cloud Nine collection.",
  },
  {
    id: "cakes",
    label: "Cakes",
    description: "Celebration cakes for birthdays, weddings, and milestones.",
  },
  {
    id: "cupcakes",
    label: "Cupcakes",
    description: "Swirled cupcakes for parties, gifts, and dessert tables.",
  },
  {
    id: "bread",
    label: "Bread",
    description: "Soft milk bread and a rustic loaf for the table.",
  },
  {
    id: "pastries",
    label: "Pastries",
    description: "Flaky croissants and warm cinnamon rolls.",
  },
  {
    id: "desserts",
    label: "Desserts",
    description: "Brownies, cookies, and slices for a smaller treat.",
  },
];

const labels: Record<ProductCategoryId, string> = {
  cakes: "Cakes",
  cupcakes: "Cupcakes",
  bread: "Bread",
  pastries: "Pastries",
  desserts: "Desserts",
};

export function categoryLabel(id: ProductCategoryId): string {
  return labels[id];
}

export function isCatalogueCategory(value: string | null): value is CatalogueCategoryId {
  return productCategories.some((category) => category.id === value);
}

export type ProductCategoryId = "cakes" | "cupcakes" | "bread" | "pastries" | "desserts";

export type CatalogueCategoryId = ProductCategoryId | "all";

export type Product = {
  id: string;
  name: string;
  description: string;
  category: ProductCategoryId;
  price: number;
  unit: string;
  portion: string;
  image: string;
  imageAlt: string;
  objectPosition?: string;
  bestseller?: boolean;
};

export type Testimonial = {
  id: string;
  quote: string;
  context: string;
};

export type NavItem = {
  href: string;
  label: string;
};

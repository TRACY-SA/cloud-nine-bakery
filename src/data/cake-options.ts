export const occasions = [
  { value: "Birthday", label: "Birthday" },
  { value: "Wedding", label: "Wedding" },
  { value: "Anniversary", label: "Anniversary" },
  { value: "Graduation", label: "Graduation" },
  { value: "Baby shower", label: "Baby shower" },
  { value: "Corporate celebration", label: "Corporate celebration" },
  { value: "Other", label: "Other" },
] as const;

export const flavours = [
  { value: "Vanilla", label: "Vanilla" },
  { value: "Chocolate", label: "Chocolate" },
  { value: "Red Velvet", label: "Red Velvet" },
  { value: "Strawberry", label: "Strawberry" },
  { value: "Lemon", label: "Lemon" },
  { value: "Marble", label: "Marble" },
  { value: "Other / Discuss with the Bakery", label: "Other / Discuss with the Bakery" },
] as const;

export const sizes = [
  { value: "6-inch cake", label: "6-inch cake", servings: "About 8–10 slices" },
  { value: "8-inch cake", label: "8-inch cake", servings: "About 12–16 slices" },
  { value: "10-inch cake", label: "10-inch cake", servings: "About 20–28 slices" },
  { value: "Two-tier cake", label: "Two-tier cake", servings: "About 30–40 slices" },
  { value: "Three-tier cake", label: "Three-tier cake", servings: "About 50–70 slices" },
  { value: "Not sure yet", label: "Not sure yet", servings: "We can help you decide" },
] as const;

export const contactSubjects = [
  "General question",
  "Product availability",
  "Custom cake",
  "Visiting the bakery",
  "Something else",
] as const;

export const cakeSteps = [
  {
    title: "Tell us about your celebration",
    copy: "Share the occasion, the date you have in mind, and who the cake is for.",
  },
  {
    title: "Share flavour, size, and design",
    copy: "Choose a starting point, then describe colours, wording, and any details that matter.",
  },
  {
    title: "Contact the bakery to confirm",
    copy: "Send the prepared enquiry on WhatsApp. The bakery confirms availability and the details.",
  },
  {
    title: "Finalise directly with the bakery",
    copy: "Price, design, and collection are agreed with Cloud Nine Bakery, not through this website.",
  },
] as const;

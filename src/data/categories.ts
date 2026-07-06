import type { LocalizedString } from "./products";

export type Category = {
  id: string;
  label: LocalizedString;
};

export const categories: Category[] = [
  { id: "all", label: { en: "All Products", ar: "جميع المنتجات" } },
  { id: "clothing", label: { en: "Clothing", ar: "الملابس" } },
  { id: "accessories", label: { en: "Accessories", ar: "الإكسسوارات" } },
  { id: "bags", label: { en: "Bags", ar: "الحقائب" } },
  {
    id: "home-decoration",
    label: { en: "Home Decoration", ar: "ديكور المنزل" },
  },
  { id: "shoes", label: { en: "Shoes", ar: "الأحذية" } },
];

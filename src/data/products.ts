export type LocalizedText = {
  en: string;
  ar: string;
};

export type Product = {
  id: number;
  name: LocalizedText;
  description: LocalizedText;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  inStock: boolean;
  image: string;
  tags: string[];
};

export const products: Product[] = [
  {
    id: 1,
    name: {
      en: "Tatreez Embroidered Dress",
      ar: "فستان مطرز بالتطريز الفلسطيني",
    },
    description: {
      en: "A stunning traditional Palestinian dress with hand-embroidered tatreez patterns.",
      ar: "فستان فلسطيني تقليدي مذهل مطرز يدوياً بنقشات التطريز.",
    },
    category: "clothing",
    price: 120,
    rating: 4.9,
    reviews: 84,
    inStock: true,
    image:
      "https://i.pinimg.com/webp/1200x/f3/6e/42/f36e423affc26c3ed47b8f15f21ab889.webp",
    tags: ["New"],
  },
  // ...add the rest of your 12 products in this same shape
];

export type Category = {
  id: string;
  label: LocalizedText;
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

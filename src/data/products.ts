export type LocalizedString = {
  en: string;
  ar: string;
};

export type Product = {
  id: number;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  inStock: boolean;
  image: string;
  tags: string[];
  name: LocalizedString;
  description: LocalizedString;
};

export const products: Product[] = [
  {
    id: 1,
    category: "clothing",
    price: 120,
    rating: 4.9,
    reviews: 84,
    inStock: true,
    image:
      "https://i.pinimg.com/webp/1200x/f3/6e/42/f36e423affc26c3ed47b8f15f21ab889.webp?w=400&h=400&fit=crop",
    tags: ["New"],
    name: {
      en: "Tatreez Embroidered Dress",
      ar: "فستان مطرز بالتطريز الفلسطيني",
    },
    description: {
      en: "A stunning traditional Palestinian dress with hand-embroidered tatreez patterns.",
      ar: "فستان فلسطيني تقليدي رائع مع نقشات تطريز مطرزة يدوياً.",
    },
  },
  {
    id: 2,
    category: "clothing",
    price: 65,
    rating: 4.7,
    reviews: 52,
    inStock: true,
    image:
      "https://i.pinimg.com/webp/1200x/e4/f7/9e/e4f79e5bc8216242baac6b41eac78499.webp?w=400&h=400&fit=crop",
    tags: [],
    name: {
      en: "Tatreez Hoodie",
      ar: "هودي مطرز",
    },
    description: {
      en: "A cozy hoodie featuring embroidered tatreez sleeve details.",
      ar: "هودي دافئ يحتوي على تفاصيل تطريز على الأكمام.",
    },
  },
];

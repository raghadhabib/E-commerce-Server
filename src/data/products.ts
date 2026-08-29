import { LocalizedString } from "./sharedType";

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
    rating: 2,
    reviews: 84,
    inStock: true,
    image:
      "https://i.pinimg.com/webp/1200x/f3/6e/42/f36e423affc26c3ed47b8f15f21ab889.webp?w=400&h=400&fit=crop",
    tags: ["New"],
    name: {
      en: "Tatreez Embroidered Dress",
      ar: "فستان تطريز",
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
    rating: 4,
    reviews: 52,
    inStock: true,
    image:
      "https://i.pinimg.com/webp/1200x/e4/f7/9e/e4f79e5bc8216242baac6b41eac78499.webp?w=400&h=400&fit=crop",
    tags: [],
    name: {
      en: "Tatreez Hoodie",
      ar: "هودي مطرزة",
    },
    description: {
      en: "A cozy hoodie featuring embroidered tatreez sleeve details.",
      ar: "هودي دافئ يحتوي على تفاصيل تطريز على الأكمام.",
    },
  },
  {
    id: 3,
    category: "clothing",
    price: 40,
    rating: 4.6,
    reviews: 39,
    inStock: true,
    image:
      "https://i.pinimg.com/736x/22/a2/8f/22a28f73e5cdd2c02f7d39436ca1f416.jpg?w=400&h=400&fit=crop",
    tags: ["Trending"],
    name: {
      en: "Embroidered T-Shirt",
      ar: "تيشيرت مطرزة",
    },
    description: {
      en: "A minimalist t-shirt with a tatreez embroidery patch on the chest.",
      ar: "تيشيرت بتصميم بسيط مع رقعة تطريز على الصدر.",
    },
  },
  // Accessories
  {
    id: 4,
    category: "accessories",
    price: 30,
    rating: 1,
    reviews: 67,
    inStock: true,
    image:
      "https://i.pinimg.com/1200x/b4/4f/b4/b44fb463e9ddf7320a8e42cfae4ef082.jpg?w=400&h=400&fit=crop",
    tags: ["New"],
    name: {
      en: "Tatreez Wallet",
      ar: "محفظة مطرزة",
    },
    description: {
      en: "A slim leather wallet with traditional embroidery on the cover.",
      ar: "محفظة جلدية أنيقة مزينة بتطريز تقليدي على الغلاف.",
    },
  },
  {
    id: 5,
    category: "accessories",
    price: 55,
    rating: 2,
    reviews: 28,
    inStock: false,
    image:
      "https://i.pinimg.com/1200x/1e/e0/e9/1ee0e9e7fea4ccdb835e1b89e67d7a0f.jpg?w=400&h=400&fit=crop",
    tags: ["Trending"],
    name: {
      en: "Home Clock",
      ar: "ساعة حائط بالتطريز",
    },
    description: {
      en: "A handcrafted wall clock decorated with tatreez motifs.",
      ar: "ساعة حائط مصنوعة يدوياً ومزينة بنقشات التطريز الفلسطيني.",
    },
  },
  // Bags
  {
    id: 6,
    category: "bags",
    price: 45,
    rating: 4.9,
    reviews: 112,
    inStock: true,
    image:
      "https://i.pinimg.com/736x/22/a3/dc/22a3dcdfffe00e5b7149a360d3365181.jpg?w=400&h=400&fit=crop",
    tags: ["New"],
    name: {
      en: "Embroidered Tote Bag",
      ar: "حقيبة مطرزة",
    },
    description: {
      en: "A spacious canvas tote bag with bold tatreez embroidery.",
      ar: "حقيبة قماشية واسعة مزينة بتطريز فلسطيني بارز.",
    },
  },
  {
    id: 7,
    category: "bags",
    price: 95,
    rating: 3,
    reviews: 43,
    inStock: true,
    image:
      "https://i.pinimg.com/736x/bd/8d/aa/bd8daa1e04f44620f57abf9de66c4e55.jpg?w=400&h=400&fit=crop",
    tags: ["Trending"],
    name: {
      en: "Tatreez cross Bag",
      ar: "حقيبة كروس مطرزة",
    },
    description: {
      en: "An elegant handbag with intricate Palestinian embroidery details.",
      ar: "حقيبة يد أنيقة بتفاصيل تطريز فلسطيني دقيقة.",
    },
  },
  // Home Decoration
  {
    id: 8,
    category: "home-decoration",
    price: 70,
    rating: 4.7,
    reviews: 35,
    inStock: true,
    image:
      "https://i.pinimg.com/webp/1200x/d2/92/0a/d2920ab195a7f1bfda893bdf9bab7ee7.webp?w=400&h=400&fit=crop",
    tags: ["New"],
    name: {
      en: "Embroidered Serving Tray",
      ar: "صينية تقديم مطرزة",
    },
    description: {
      en: "A decorative serving tray with hand-embroidered tatreez borders.",
      ar: "صينية تقديم مزخرفة بحواف مطرزة يدوياً بنقشات التطريز.",
    },
  },
  {
    id: 9,
    category: "home-decoration",
    price: 35,
    rating: 4.6,
    reviews: 19,
    inStock: true,
    image:
      "https://i.pinimg.com/736x/b0/a6/38/b0a638a1207067917e7465f934fde2f4.jpg?w=400&h=400&fit=crop",
    tags: ["New"],
    name: {
      en: "Tatreez Sugar Bowl",
      ar: "وعاء سكر مطرز",
    },
    description: {
      en: "A ceramic sugar bowl wrapped in embroidered fabric.",
      ar: "وعاء سكر خزفي ملفوف بقماش مطرز.",
    },
  },
  {
    id: 10,
    category: "home-decoration",
    price: 50,
    rating: 4.8,
    reviews: 24,
    inStock: false,
    image:
      "https://i.pinimg.com/736x/fe/8c/cd/fe8ccd74d31b2b6746365f44313c07bc.jpg?w=400&h=400&fit=crop",
    tags: ["Trending"],
    name: {
      en: "Palestinian Embroidered Tissue Holder",
      ar: "علبة مناديل مطرزة ",
    },
    description: {
      // NOTE: source description talks about a "plate," not a tissue holder — mismatch carried over as-is
      en: "A decorative plate with tatreez patterns, perfect for guest rooms.",
      ar: "طبق ديكوري بنقشات تطريز، مثالي لغرف الضيوف.",
    },
  },
  // Shoes
  {
    id: 11,
    category: "shoes",
    price: 80,
    rating: 4.9,
    reviews: 58,
    inStock: true,
    image:
      "https://i.pinimg.com/1200x/d2/22/68/d22268490408c4f7446f20fad3e4aa4b.jpg?w=400&h=400&fit=crop",
    tags: ["New"],
    name: {
      en: "Embroidered Sandals",
      ar: "صنادل مطرزة",
    },
    description: {
      en: "Handcrafted sandals with tatreez embroidery straps.",
      ar: "صنادل مصنوعة يدوياً بأحزمة مطرزة بنقشات التطريز.",
    },
  },
  {
    id: 12,
    category: "shoes",
    price: 90,
    rating: 4.7,
    reviews: 31,
    inStock: true,
    image:
      "https://i.pinimg.com/1200x/6c/bf/44/6cbf44e7c9599084438cffe4331747e4.jpg?w=400&h=400&fit=crop",
    tags: ["New"],
    name: {
      en: "Tatreez Heel Shoes",
      ar: "حذاء بكعب مطرز",
    },
    description: {
      en: "Comfortable slip-on shoes featuring traditional embroidery on the upper.",
      ar: "حذاء مريح سهل الارتداء يتميز بتطريز تقليدي على الجزء العلوي.",
    },
  },
];

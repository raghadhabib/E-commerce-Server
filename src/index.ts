import express from "express";
import cors from "cors";
import { products, type LocalizedString } from "./data/products";
import { categories } from "./data/categories";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

function resolveLang(query: unknown): "en" | "ar" {
  return query === "ar" ? "ar" : "en";
}

function localize(value: LocalizedString, lang: "en" | "ar"): string {
  return value[lang];
}

app.get("/api/products", (req, res) => {
  const lang = resolveLang(req.query.lang);

  const localizedProducts = products.map((product) => ({
    id: product.id,
    category: product.category,
    price: product.price,
    rating: product.rating,
    reviews: product.reviews,
    inStock: product.inStock,
    image: product.image,
    tags: product.tags,
    name: localize(product.name, lang),
    description: localize(product.description, lang),
  }));

  res.json(localizedProducts);
});

app.get("/api/products/:id", (req, res) => {
  const lang = resolveLang(req.query.lang);
  const product = products.find((p) => p.id === Number(req.params.id));

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  res.json({
    ...product,
    name: localize(product.name, lang),
    description: localize(product.description, lang),
  });
});

app.get("/api/categories", (req, res) => {
  const lang = resolveLang(req.query.lang);

  const localizedCategories = categories.map((cat) => ({
    id: cat.id,
    label: localize(cat.label, lang),
  }));

  res.json(localizedCategories);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

import express from "express";
import cors from "cors";
import { products, categories } from "./data/products";
import { isValidLang, localize } from "./utils/localize";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/api/products", (req, res) => {
  const lang = isValidLang(req.query.lang) ? req.query.lang : "en";
  const localized = products.map((product) => localize(product, lang));
  res.json(localized);
});

app.get("/api/categories", (req, res) => {
  const lang = isValidLang(req.query.lang) ? req.query.lang : "en";
  const localized = categories.map((category) => localize(category, lang));
  res.json(localized);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

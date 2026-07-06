import type { LocalizedText } from "../data/products";

type Lang = "en" | "ar";

export function isValidLang(lang: unknown): lang is Lang {
  return lang === "en" || lang === "ar";
}

// Recursively walk an object and replace any LocalizedText fields with a plain string
export function localize<T>(item: T, lang: Lang): unknown {
  if (item === null || typeof item !== "object") return item;

  if ("en" in item && "ar" in item && Object.keys(item).length === 2) {
    return (item as LocalizedText)[lang];
  }

  if (Array.isArray(item)) {
    return item.map((entry) => localize(entry, lang));
  }

  const result: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(item)) {
    result[key] = localize(value, lang);
  }
  return result;
}

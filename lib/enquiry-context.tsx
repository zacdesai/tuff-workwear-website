"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import type { Product } from "@/lib/products";
import { whatsappHref } from "@/lib/site";

type EnquiryContextValue = {
  items: Product[];
  itemCount: number;
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  clearEnquiry: () => void;
  enquiryWhatsappHref: string;
};

const EnquiryContext = createContext<EnquiryContextValue | null>(null);

const STORAGE_KEY = "tuff-enquiry";

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Product[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setItems(JSON.parse(stored));
    } catch {
      // ignore parse errors
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
  }, [items, mounted]);

  function addItem(product: Product) {
    setItems((prev) =>
      prev.some((p) => p.id === product.id) ? prev : [...prev, product],
    );
  }

  function removeItem(productId: string) {
    setItems((prev) => prev.filter((p) => p.id !== productId));
  }

  function clearEnquiry() {
    setItems([]);
  }

  const message =
    items.length === 0
      ? "Hi Tuff, I'd like to browse your workwear range."
      : `Hi Tuff, I'd like to enquire about the following:\n\n${items
          .map((p, i) => `${i + 1}. ${p.name} — ${p.price} (${p.moq})`)
          .join("\n")}\n\nPlease confirm stock, sizes and delivery to my location.`;

  return (
    <EnquiryContext.Provider
      value={{
        items,
        itemCount: items.length,
        addItem,
        removeItem,
        clearEnquiry,
        enquiryWhatsappHref: whatsappHref(message),
      }}
    >
      {children}
    </EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const ctx = useContext(EnquiryContext);
  if (!ctx) throw new Error("useEnquiry must be used within EnquiryProvider");
  return ctx;
}

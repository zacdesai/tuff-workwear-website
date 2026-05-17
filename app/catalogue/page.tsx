import type { Metadata } from "next";
import Link from "next/link";

import { categories } from "@/lib/products";

export const metadata: Metadata = {
  title: "Catalogue",
  description:
    "Tuff Workwear product catalogue. Conti suits, hi-viz, safety boots, rain gear, golfers and t-shirts. MOQ 10. WhatsApp for pricing.",
};

export default function CataloguePage() {
  return (
    <>
      <section className="bg-brand-charcoal py-16 text-white lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-neutral-300">What we stock</p>
          <h1 className="mt-5 text-5xl uppercase sm:text-6xl">Our range.</h1>
          <span className="tuff-rule mt-6" />
          <p className="mt-7 max-w-xl text-lg text-neutral-200">
            Pick a category. Check specs and pricing. WhatsApp us with sizes and quantities — we'll come back with stock availability and a quote.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <Link
                className="group relative min-h-64 overflow-hidden border border-neutral-200 bg-neutral-900 p-6 text-white shadow-sm"
                href={category.href}
                key={category.name}
              >
                <div
                  className="absolute inset-0 opacity-80 transition-transform duration-300 group-hover:scale-105"
                  style={{
                    background:
                      index % 2 === 0
                        ? "linear-gradient(135deg, #2d2d2d, #111111 55%, #e8611a)"
                        : "linear-gradient(135deg, #111111, #2d2d2d 70%, #7c2e08)",
                  }}
                />
                <div className="industrial-grid absolute inset-0 opacity-60" aria-hidden="true" />
                <div className="relative flex h-full min-h-52 flex-col justify-end">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-100">
                    {category.count}
                  </p>
                  <h2 className="mt-2 text-3xl font-black uppercase">{category.name}</h2>
                  <p className="mt-3 max-w-sm text-sm text-neutral-200">{category.tone}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

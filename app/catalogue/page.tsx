import type { Metadata } from "next";

import { ProductCard } from "@/components/home/product-card";
import { allProducts, categories } from "@/lib/products";

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

      <div className="bg-white">
        {categories.map((category) => {
          const slugPrefix = category.href.replace("/catalogue/", "");
          const products = allProducts.filter(
            (p) =>
              p.slug.startsWith(slugPrefix + "/") ||
              p.extraCategories?.includes(slugPrefix),
          );
          if (products.length === 0) return null;
          const sectionId = slugPrefix.replace("/", "-");

          return (
            <section
              key={category.name}
              id={sectionId}
              className="border-t border-neutral-100 py-14 lg:py-20"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl uppercase sm:text-5xl">{category.name}</h2>
                <span className="tuff-rule mt-4" />
                <p className="mt-4 text-base text-neutral-500">{category.tone}</p>
                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}

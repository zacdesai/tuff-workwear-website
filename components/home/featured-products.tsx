import { ProductCard } from "@/components/home/product-card";
import { featuredProducts } from "@/lib/products";

export function FeaturedProducts() {
  return (
    <section className="bg-neutral-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Fast-moving lines</p>
            <h2 className="mt-3 text-4xl uppercase sm:text-5xl">Prices buyers can read.</h2>
            <span className="tuff-rule mt-4" />
          </div>
          <p className="max-w-sm text-sm text-neutral-500">
            MOQ 10 on most lines. WhatsApp us for stock, colours and a freight quote.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

import { categories } from "@/lib/products";

export function CategoryGrid() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow">Catalogue</p>
          <h2 className="mt-3 text-4xl uppercase sm:text-5xl">Workwear by the job.</h2>
          <span className="tuff-rule mt-4" />
          <p className="mt-5 text-neutral-500">
            Start with the crew, the site and the job. Our catalogue makes the choice simple.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                <h3 className="mt-2 text-3xl font-black uppercase">{category.name}</h3>
                <p className="mt-3 max-w-sm text-sm text-neutral-200">{category.tone}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

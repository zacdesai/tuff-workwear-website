import Image from "next/image";
import Link from "next/link";

import { categories } from "@/lib/products";

export function CategoryGrid() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow">Catalogue</p>
          <h2 className="mt-3 text-4xl uppercase sm:text-5xl">Workwear by the job.</h2>
          <span className="tuff-rule mt-4" />
          <p className="mt-5 text-neutral-500">
            Start with the crew, the site and the job. Our catalogue makes the choice simple.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              className="group flex flex-col overflow-hidden border border-neutral-200 bg-brand-charcoal text-white transition-colors duration-150 hover:border-brand-orange"
              href={category.href}
              key={category.name}
            >
              <div className="relative aspect-square bg-white">
                <Image
                  src={category.image}
                  alt=""
                  fill
                  unoptimized
                  className="object-cover object-[center_20%]"
                />
              </div>
              <div className="flex flex-1 flex-col border-t-4 border-brand-orange p-4 sm:p-5">
                <h3 className="font-display text-lg uppercase leading-tight sm:text-2xl">{category.name}</h3>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-orange-300">
                  {category.count}
                </p>
                <p className="mt-2 hidden text-sm text-neutral-300 sm:block">{category.tone}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

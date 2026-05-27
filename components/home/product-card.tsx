import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { AddToEnquiryButton } from "@/components/home/add-to-enquiry-button";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const productHref = `/catalogue/${product.slug}`;

  return (
    <article className="group flex h-full flex-col border border-neutral-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <Link href={productHref} tabIndex={-1} aria-hidden="true">
        <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-6 bg-gradient-to-br from-neutral-300 via-white to-neutral-200 transition-transform duration-300 group-hover:scale-105" />
          )}
          {product.badge ? (
            <span className="absolute left-4 top-4 bg-brand-charcoal px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-white">
              {product.badge}
            </span>
          ) : null}
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="eyebrow">{product.category}</p>
        <h3 className="mt-2 text-xl font-bold">{product.name}</h3>
        <p className="mt-2 text-sm text-neutral-500">
          {product.spec} · {product.moq}
        </p>
        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="price-emphasis-light text-2xl">{product.price}</p>
          <div className="flex gap-1">
            {product.colours.slice(0, 4).map((colour) => (
              <span
                aria-hidden="true"
                className="size-3 rounded-full border border-neutral-200"
                key={colour}
                style={{ backgroundColor: colour }}
              />
            ))}
          </div>
        </div>
        <div className="mt-5 grid gap-2 sm:grid-cols-2">
          <AddToEnquiryButton product={product} size="sm" />
          <Button asChild size="sm" variant="secondary">
            <Link href={productHref}>Details</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}

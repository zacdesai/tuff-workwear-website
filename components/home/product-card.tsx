import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AddToEnquiryButton } from "@/components/home/add-to-enquiry-button";
import type { Product } from "@/lib/products";
import { whatsappHref } from "@/lib/site";

export function ProductCard({ product }: { product: Product }) {
  const productHref = `/catalogue/${product.slug}`;

  return (
    <article className="group flex h-full flex-col border border-neutral-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
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
          <Button asChild size="sm" variant="primary">
            <a
              href={whatsappHref(
                `Hi Tuff, I'm interested in the ${product.name} (${product.price}). Can you send stock availability?`,
              )}
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Enquire
            </a>
          </Button>
          <Button asChild size="sm" variant="secondary">
            <Link href={productHref}>Details</Link>
          </Button>
        </div>
        <AddToEnquiryButton product={product} className="mt-2 w-full" />
      </div>
    </article>
  );
}

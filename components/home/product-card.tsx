import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { AddToEnquiryButton } from "@/components/home/add-to-enquiry-button";
import { allProducts, type Product } from "@/lib/products";

// Spec rows pulled from the product's own data, so a buyer can compare cards
// at a glance instead of reading one grey line.
function specRows(product: Product) {
  const info = product.additionalInfo ?? allProducts.find((p) => p.id === product.id)?.additionalInfo ?? [];
  const lookup = (label: string) => info.find((row) => row.label === label)?.value;

  const upper = lookup("Upper material");

  return [
    upper
      ? { label: "Upper", value: upper }
      : { label: "Fabric", value: lookup("Fabric type") ?? lookup("Outer shell") ?? product.spec.split(" · ")[0] },
    { label: "Sizes", value: lookup("Sizes") },
    { label: "MOQ", value: product.moq.replace(/^MOQ\s*/i, "") },
  ].filter((row): row is { label: string; value: string } => Boolean(row.value));
}

export function ProductCard({ product }: { product: Product }) {
  const productHref = `/catalogue/${product.slug}`;
  const rows = specRows(product);

  return (
    <article className="group flex h-full flex-col border border-neutral-200 bg-white transition-colors duration-150 hover:border-brand-charcoal">
      <Link href={productHref} tabIndex={-1} aria-hidden="true">
        <div className="relative aspect-[4/5] overflow-hidden bg-white">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              unoptimized
              className="object-cover object-top"
            />
          ) : (
            <div className="absolute inset-6 bg-gradient-to-br from-neutral-300 via-white to-neutral-200" />
          )}
          {product.badge ? (
            <span className="absolute left-4 top-4 bg-brand-charcoal px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-white">
              {product.badge}
            </span>
          ) : null}
        </div>
      </Link>
      <div className="flex flex-1 flex-col border-t border-neutral-200 p-5">
        <p className="eyebrow">{product.category}</p>
        <h3 className="mt-2 text-xl font-bold">
          <Link className="hover:text-orange-700" href={productHref}>
            {product.name}
          </Link>
        </h3>

        <div className="mt-3 flex items-end justify-between gap-4">
          <p className="price-emphasis-light text-3xl leading-none">{product.price}</p>
          <div className="flex gap-1 pb-1">
            {product.colours.slice(0, 5).map((colour) => (
              <span
                aria-hidden="true"
                className="size-3.5 rounded-full border border-neutral-300"
                key={colour}
                style={{ backgroundColor: colour }}
              />
            ))}
          </div>
        </div>

        <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 border-y border-neutral-200 py-3 text-sm">
          {rows.map((row) => (
            <div className="contents" key={row.label}>
              <dt className="pt-0.5 text-[11px] font-bold uppercase tracking-[0.12em] text-neutral-500">{row.label}</dt>
              <dd className="text-neutral-900">{row.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-auto grid gap-2 pt-5 sm:grid-cols-2">
          <AddToEnquiryButton product={product} size="sm" />
          <Button asChild size="sm" variant="secondary">
            <Link href={productHref}>Details</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}

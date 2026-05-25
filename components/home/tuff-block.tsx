import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AddToEnquiryButton } from "@/components/home/add-to-enquiry-button";
import type { Product } from "@/lib/products";

type TuffBlockProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  features: string[];
  price: string;
  image?: string;
  product?: Product;
  primaryCta?: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  badge?: string;
};

export function TuffBlock({
  eyebrow,
  title,
  subtitle,
  features,
  price,
  image,
  product,
  primaryCta,
  secondaryCta,
  badge = "Best value",
}: TuffBlockProps) {
  return (
    <section className="bg-brand-charcoal text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
        <div className="relative min-h-[24rem] overflow-hidden border border-white/10 bg-neutral-900">
          <div className="industrial-grid absolute inset-0 opacity-80" aria-hidden="true" />
          {image && (
            <img
              src={image}
              alt={title}
              className="absolute inset-0 h-full w-full object-cover object-top opacity-60"
            />
          )}
          <div className="absolute left-6 top-6 rounded-full bg-brand-orange px-4 py-2 text-xs font-black uppercase tracking-[0.14em]">
            {badge}
          </div>
          <div className="absolute inset-x-10 bottom-10 rounded-sm border border-white/10 bg-white/[0.08] p-6 backdrop-blur-sm">
            <span className="inline-block bg-brand-orange px-2 py-0.5 text-xs font-bold uppercase tracking-[0.14em] text-white">
              Featured line
            </span>
            <p className="price-emphasis mt-3 text-5xl">{price}</p>
            <p className="mt-2 text-sm text-neutral-300">bulk pricing from MOQ 10</p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="eyebrow text-neutral-300">{eyebrow}</p>
          <h2 className="mt-4 max-w-xl text-5xl uppercase sm:text-6xl">{title}</h2>
          <span className="tuff-rule mt-5" />
          <p className="mt-6 max-w-xl text-lg italic text-orange-100">{subtitle}</p>

          <ul className="mt-8 grid gap-3 text-neutral-100 sm:grid-cols-2">
            {features.map((feature) => (
              <li className="flex gap-3 text-sm" key={feature}>
                <span className="mt-2 size-1.5 shrink-0 bg-brand-orange" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            {product ? (
              <AddToEnquiryButton product={product} size="lg" className="sm:w-auto" />
            ) : primaryCta ? (
              <Button asChild size="lg" variant="primary">
                <a href={primaryCta.href}>{primaryCta.label}</a>
              </Button>
            ) : null}
            <Button asChild size="lg" variant="outlineDark">
              <Link href={secondaryCta.href}>
                {secondaryCta.label}
                <ArrowRight className="size-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

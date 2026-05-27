import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AddToEnquiryButton } from "@/components/home/add-to-enquiry-button";
import { ImageGallery } from "@/components/catalogue/image-gallery";
import { ProductCard } from "@/components/home/product-card";
import { allProducts, categories } from "@/lib/products";
import { whatsappHref } from "@/lib/site";

type Props = { params: Promise<{ path: string[] }> };

export async function generateStaticParams() {
  const params: { path: string[] }[] = [];

  for (const category of categories) {
    const segments = category.href.replace("/catalogue/", "").split("/");
    params.push({ path: segments });
  }

  for (const product of allProducts) {
    params.push({ path: product.slug.split("/") });
  }

  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { path } = await params;
  const pathStr = path.join("/");

  const product = allProducts.find((p) => p.slug === pathStr);
  if (product) {
    return {
      title: product.name,
      description: `${product.name} — ${product.spec}. ${product.price}. ${product.moq}. WhatsApp Tuff Workwear for stock and delivery.`,
    };
  }

  const category = categories.find((c) => c.href === `/catalogue/${pathStr}`);
  if (category) {
    return {
      title: category.name,
      description: `${category.name} — ${category.tone} MOQ 10. WhatsApp Tuff Workwear for pricing and stock.`,
    };
  }

  return { title: "Not found" };
}

export default async function CatalogueCatchAll({ params }: Props) {
  const { path } = await params;
  const pathStr = path.join("/");

  const product = allProducts.find((p) => p.slug === pathStr);
  if (product) return <ProductDetailPage product={product} />;

  const category = categories.find((c) => c.href === `/catalogue/${pathStr}`);
  if (category) return <CategoryListingPage categoryHref={`/catalogue/${pathStr}`} categoryName={category.name} categoryTone={category.tone} />;

  notFound();
}

// ─── Product detail ────────────────────────────────────────────────────────────

function ProductDetailPage({ product }: { product: (typeof allProducts)[number] }) {
  const categoryHref = `/catalogue/${product.slug.split("/").slice(0, -1).join("/")}`;
  const categoryObj = categories.find((c) => c.href === categoryHref);

  const enquireHref = whatsappHref(
    `Hi Tuff, I'm interested in the ${product.name} (${product.price}). Can you send stock availability and a freight quote?`,
  );

  return (
    <>
      {/* Breadcrumb */}
      <nav className="border-b border-neutral-200 bg-white py-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-neutral-500">
            <li>
              <Link href="/catalogue" className="hover:text-brand-orange">
                Catalogue
              </Link>
            </li>
            <li aria-hidden="true">›</li>
            {categoryObj && (
              <>
                <li>
                  <Link href={categoryHref} className="hover:text-brand-orange">
                    {categoryObj.name}
                  </Link>
                </li>
                <li aria-hidden="true">›</li>
              </>
            )}
            <li className="text-neutral-800">{product.name}</li>
          </ol>
        </div>
      </nav>

      {/* Above-fold CTA strip */}
      <div className="bg-brand-charcoal py-4">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-3 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p className="text-sm text-neutral-200">
            <span className="font-bold text-white">{product.name}</span> — {product.moq} · WhatsApp for stock and delivery
          </p>
          <Button asChild size="sm" variant="whatsapp">
            <a href={enquireHref}>
              <MessageCircle className="size-4" aria-hidden="true" />
              Enquire on WhatsApp
            </a>
          </Button>
        </div>
      </div>

      {/* Product layout */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
            {/* Image / gallery */}
            {product.images && product.images.length > 0 ? (
              <ImageGallery images={product.images} alt={product.name} badge={product.badge} />
            ) : product.image ? (
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
                <Image
                  src={product.image!}
                  alt={product.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
                {product.badge && (
                  <span className="absolute left-4 top-4 bg-brand-charcoal px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-white">
                    {product.badge}
                  </span>
                )}
              </div>
            ) : (
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
                <div className="absolute inset-8 bg-gradient-to-br from-neutral-300 via-white to-neutral-200" />
              </div>
            )}

            {/* Details */}
            <div className="flex flex-col">
              <p className="eyebrow">{product.category}</p>
              <h1 className="mt-3 text-4xl uppercase sm:text-5xl">{product.name}</h1>
              <span className="tuff-rule mt-5" />

              <p className="price-emphasis-light mt-6 text-5xl">{product.price}</p>
              <p className="mt-1 text-sm text-neutral-500">{product.moq}</p>

              <p className="mt-6 text-neutral-600">{product.spec}</p>

              {product.colours.length > 0 && (
                <div className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-neutral-500">
                    Available colours
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {product.colours.map((colour) => (
                      <span
                        key={colour}
                        aria-hidden="true"
                        className="size-6 rounded-full border border-neutral-300 shadow-sm"
                        style={{ backgroundColor: colour }}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <AddToEnquiryButton product={product} size="xl" className="flex-1" />
                <Button asChild size="xl" variant="secondary">
                  <Link href="/enquiry">
                    View enquiry
                    <ArrowRight className="size-5" aria-hidden="true" />
                  </Link>
                </Button>
              </div>

              <p className="mt-6 text-sm text-neutral-400">
                Send sizes, quantities and delivery address. We'll confirm stock and quote freight.
              </p>

              <Link
                href={categoryHref}
                className="mt-8 flex items-center gap-1.5 text-sm text-neutral-400 hover:text-brand-orange"
              >
                <ArrowLeft className="size-4" />
                Back to {categoryObj?.name ?? "catalogue"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional information */}
      {product.additionalInfo && product.additionalInfo.length > 0 && (
        <section className="border-t border-neutral-200 bg-white py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl uppercase">Additional information</h2>
            <span className="tuff-rule mt-4" />
            <dl className="mt-8 divide-y divide-neutral-100 border border-neutral-200">
              {product.additionalInfo.map(({ label, value }) => (
                <div key={label} className="flex gap-8 px-5 py-3">
                  <dt className="w-44 shrink-0 text-xs font-bold uppercase tracking-[0.12em] text-neutral-400 pt-0.5">
                    {label}
                  </dt>
                  <dd className="text-sm text-neutral-800">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}
    </>
  );
}

// ─── Category listing ──────────────────────────────────────────────────────────

function CategoryListingPage({
  categoryHref,
  categoryName,
  categoryTone,
}: {
  categoryHref: string;
  categoryName: string;
  categoryTone: string;
}) {
  const pathStr = categoryHref.replace("/catalogue/", "");
  const products = allProducts.filter((p) => p.slug.startsWith(pathStr));

  return (
    <>
      {/* Breadcrumb */}
      <nav className="border-b border-neutral-200 bg-white py-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-1 text-sm text-neutral-500">
            <li>
              <Link href="/catalogue" className="hover:text-brand-orange">
                Catalogue
              </Link>
            </li>
            <li aria-hidden="true">›</li>
            <li className="text-neutral-800">{categoryName}</li>
          </ol>
        </div>
      </nav>

      <section className="bg-brand-charcoal py-16 text-white lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-neutral-300">Catalogue</p>
          <h1 className="mt-5 text-5xl uppercase sm:text-6xl">{categoryName}.</h1>
          <span className="tuff-rule mt-6" />
          <p className="mt-5 max-w-xl text-lg text-neutral-200">{categoryTone}</p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/catalogue"
            className="mb-8 flex items-center gap-1.5 text-sm text-neutral-400 hover:text-brand-orange"
          >
            <ArrowLeft className="size-4" />
            Back to catalogue
          </Link>
          {products.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-neutral-500">No products listed yet. WhatsApp us to ask about stock.</p>
          )}
        </div>
      </section>
    </>
  );
}

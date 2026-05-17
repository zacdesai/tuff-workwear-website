"use client";

import Link from "next/link";
import { ArrowLeft, MessageCircle, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useEnquiry } from "@/lib/enquiry-context";

export function EnquiryView() {
  const { items, removeItem, clearEnquiry, enquiryWhatsappHref } = useEnquiry();

  if (items.length === 0) {
    return (
      <section className="bg-white py-24">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h1 className="text-4xl uppercase">Your enquiry list is empty</h1>
          <p className="mt-4 text-neutral-500">
            Browse the catalogue and add products you'd like to enquire about.
          </p>
          <Button asChild size="lg" variant="primary" className="mt-8">
            <Link href="/catalogue">Browse catalogue</Link>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-brand-charcoal py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-neutral-300">Ready to order?</p>
          <h1 className="mt-4 text-5xl uppercase">Your enquiry</h1>
          <span className="tuff-rule mt-5" />
          <p className="mt-4 text-neutral-200">
            {items.length} item{items.length !== 1 ? "s" : ""} · Send to Tuff via WhatsApp and
            we'll confirm stock, sizing and freight.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
            <div className="space-y-4">
              {items.map((product) => (
                <div
                  key={product.id}
                  className="flex gap-4 border border-neutral-200 bg-white p-4"
                >
                  <div className="relative h-24 w-20 shrink-0 overflow-hidden bg-neutral-100">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="absolute inset-0 h-full w-full object-cover object-top"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-neutral-200" />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col">
                    <p className="eyebrow">{product.category}</p>
                    <h3 className="mt-1 font-bold">{product.name}</h3>
                    <p className="mt-1 text-sm text-neutral-500">{product.moq}</p>
                    <p className="price-emphasis-light mt-2 text-xl">{product.price}</p>
                  </div>
                  <button
                    onClick={() => removeItem(product.id)}
                    className="self-start rounded p-1 text-neutral-400 hover:text-brand-orange"
                    aria-label={`Remove ${product.name} from enquiry`}
                  >
                    <X className="size-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="border border-neutral-200 p-6">
                <h2 className="text-lg font-bold uppercase">Send your enquiry</h2>
                <p className="mt-2 text-sm text-neutral-500">
                  We'll reply with stock availability, size options and a freight quote.
                </p>
                <Button asChild size="lg" variant="whatsapp" className="mt-6 w-full">
                  <a href={enquiryWhatsappHref}>
                    <MessageCircle className="size-5" aria-hidden="true" />
                    Send via WhatsApp
                  </a>
                </Button>
                <button
                  onClick={clearEnquiry}
                  className="mt-3 w-full text-center text-xs text-neutral-400 hover:text-neutral-600"
                >
                  Clear enquiry list
                </button>
              </div>

              <Link
                href="/catalogue"
                className="flex items-center gap-2 text-sm text-neutral-500 hover:text-brand-orange"
              >
                <ArrowLeft className="size-4" />
                Continue shopping
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

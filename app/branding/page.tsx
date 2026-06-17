import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Branding services",
  description:
    "Screen printing and embroidery on conti suits, golfers, t-shirts and jackets. Add your logo to any order of 10 or more garments. WhatsApp Tuff Workwear for a quote.",
};

export default function BrandingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-charcoal text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="eyebrow text-neutral-300">Branding services</p>
            <h1 className="mt-5 text-5xl uppercase sm:text-6xl">
              Put your name where the work happens.
            </h1>
            <span className="tuff-rule mt-6" />
            <p className="mt-7 max-w-xl text-lg text-neutral-200">
              Screen printing and embroidery on most lines we stock. If you're already
              ordering 10 or more garments, branding is worth adding — the cost per unit
              is low and the result looks professional on site.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="whatsapp">
                <a
                  href={whatsappHref(
                    "Hi Tuff, I'm interested in branded workwear. Can you help?",
                  )}
                >
                  <MessageCircle className="size-5" aria-hidden="true" />
                  WhatsApp us your logo
                </a>
              </Button>
              <Button asChild size="lg" variant="outlineDark">
                <Link href="/catalogue">Browse the range</Link>
              </Button>
            </div>
          </div>
          <div className="relative min-h-[22rem] overflow-hidden">
            <img
              src="/images/branding-crew.jpg"
              alt="A crew in matching branded hi-viz vests and hard hats on site"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-brand-charcoal/20" />
          </div>
        </div>
      </section>

      {/* What we can brand */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="eyebrow">What we can brand</p>
              <h2 className="mt-3 text-4xl uppercase sm:text-5xl">The garments.</h2>
              <span className="tuff-rule mt-4" />
              <p className="mt-7 text-lg text-neutral-600">
                Conti suits, golfers, t-shirts and jackets. Most Vicbay apparel takes
                embroidery well. For larger runs, screen printing is available on select
                garments. If you're unsure what works on a specific item, ask — we'll
                tell you straight.
              </p>
            </div>

            <div>
              <p className="eyebrow">Turnaround</p>
              <h2 className="mt-3 text-4xl uppercase sm:text-5xl">5 to 10 working days.</h2>
              <span className="tuff-rule mt-4" />
              <p className="mt-7 text-lg text-neutral-600">
                Unbranded stock ships fast. Branded orders run 5 to 10 working days
                depending on quantities and technique. We confirm the timeline before you
                commit.
              </p>
              <p className="mt-4 text-lg text-neutral-600">
                WhatsApp us with the product, quantities and your logo file. We'll come
                back with what's possible and what it costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border border-neutral-200 bg-white p-8 shadow-sm lg:p-12">
            <p className="eyebrow">Ready to brand your crew?</p>
            <h2 className="mt-3 text-4xl uppercase sm:text-5xl">How to get started.</h2>
            <span className="tuff-rule mt-4" />
            <ol className="mt-8 space-y-4 text-lg text-neutral-600">
              <li className="flex gap-4">
                <span className="flex size-8 shrink-0 items-center justify-center bg-brand-orange font-bold text-white text-sm">
                  1
                </span>
                <span>Pick the garments from the catalogue</span>
              </li>
              <li className="flex gap-4">
                <span className="flex size-8 shrink-0 items-center justify-center bg-brand-orange font-bold text-white text-sm">
                  2
                </span>
                <span>WhatsApp us your product codes, quantities, sizes and logo file</span>
              </li>
              <li className="flex gap-4">
                <span className="flex size-8 shrink-0 items-center justify-center bg-brand-orange font-bold text-white text-sm">
                  3
                </span>
                <span>We confirm what's possible, the cost and the timeline</span>
              </li>
              <li className="flex gap-4">
                <span className="flex size-8 shrink-0 items-center justify-center bg-brand-orange font-bold text-white text-sm">
                  4
                </span>
                <span>Approve the quote. We handle the rest</span>
              </li>
            </ol>
            <Button asChild className="mt-10" size="xl" variant="whatsapp">
              <a
                href={whatsappHref(
                  "Hi Tuff, I'm interested in branded workwear. Can you help?",
                )}
              >
                <MessageCircle className="size-5" aria-hidden="true" />
                WhatsApp us your logo
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

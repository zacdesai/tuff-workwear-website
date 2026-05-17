import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Bulk orders",
  description:
    "MOQ 10 on most lines. We work with mining companies, construction firms, cleaning services and hospitality groups. WhatsApp 083 474 4343 for a freight-included quote.",
};

export default function BulkOrdersPage() {
  return (
    <>
      {/* Intro */}
      <section className="bg-brand-charcoal py-16 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow text-neutral-300">Volume pricing</p>
            <h1 className="mt-5 text-5xl uppercase sm:text-6xl">
              Kit out the whole crew.
            </h1>
            <span className="tuff-rule mt-6" />
            <p className="mt-7 text-lg text-neutral-200">
              Most lines run at MOQ 10. Larger orders get better freight terms and we can
              work directly with the factory on lead times for very large runs.
            </p>
            <p className="mt-4 text-lg text-neutral-200">
              We work with mining companies, construction firms, cleaning services, food
              processors and hospitality groups. If you kit out 20 or more people
              regularly, talk to us about an ongoing supply arrangement.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="xl" variant="whatsapp">
                <a
                  href={whatsappHref(
                    "Hi Tuff, I need a bulk order quote. Can you help?",
                  )}
                >
                  <MessageCircle className="size-5" aria-hidden="true" />
                  WhatsApp a quote request
                </a>
              </Button>
              <Button asChild size="xl" variant="inverse">
                <a href={siteConfig.phoneHref}>
                  <Phone className="size-5" aria-hidden="true" />
                  Call {siteConfig.phoneDisplay}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="eyebrow">How it works</p>
              <h2 className="mt-3 text-4xl uppercase sm:text-5xl">
                Quote, pack and dispatch.
              </h2>
              <span className="tuff-rule mt-4" />
              <p className="mt-7 text-lg text-neutral-600">
                WhatsApp or call with your product list, quantities, sizes and colours.
                We check stock, confirm a quote and arrange delivery. Nationwide courier
                on all bulk orders — freight is included in the quote.
              </p>
              <p className="mt-4 text-lg text-neutral-600">
                We come back within a business day with availability and pricing. No
                forms to fill in. No automated responses.
              </p>
            </div>

            <div className="space-y-0">
              {[
                { step: "1", label: "Send your list", desc: "Product codes, quantities, sizes and colours via WhatsApp or call." },
                { step: "2", label: "We check stock", desc: "We confirm availability, colour options and lead times." },
                { step: "3", label: "Approve the quote", desc: "Freight included. We don't add surprises at checkout." },
                { step: "4", label: "Collect or dispatch", desc: "Pick up from Durban or courier nationwide." },
              ].map(({ step, label, desc }) => (
                <div
                  key={step}
                  className="flex gap-5 border-b border-neutral-200 py-6 last:border-0"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center bg-brand-charcoal font-bold text-white">
                    {step}
                  </span>
                  <div>
                    <p className="font-bold text-neutral-900">{label}</p>
                    <p className="mt-1 text-neutral-500">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key details strip */}
      <section className="bg-neutral-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { label: "Minimum order", value: "MOQ 10", note: "on most lines" },
              { label: "Freight", value: "Included", note: "in the quote" },
              { label: "Response", value: "1 business day", note: "or faster" },
            ].map(({ label, value, note }) => (
              <div key={label} className="border border-neutral-200 bg-white p-6 shadow-sm">
                <p className="eyebrow">{label}</p>
                <p className="mt-2 font-display text-4xl tracking-tight">{value}</p>
                <p className="mt-1 text-sm text-neutral-500">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-700 py-12 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-100">
              Ready to order?
            </p>
            <h2 className="mt-2 font-sans text-2xl font-black uppercase">
              Send sizes, colours and quantities. We come back within a business day.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="inverse">
              <a href={siteConfig.phoneHref}>
                <Phone className="size-4" aria-hidden="true" />
                Call {siteConfig.phoneDisplay}
              </a>
            </Button>
            <Button asChild variant="whatsapp">
              <a href={whatsappHref("Hi Tuff, I need a bulk order quote.")}>
                <MessageCircle className="size-4" aria-hidden="true" />
                WhatsApp quote
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Browse catalogue nudge */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-neutral-500">
            Not sure what you need?{" "}
            <Link href="/catalogue" className="font-bold text-brand-charcoal hover:text-brand-orange">
              Browse the catalogue
            </Link>{" "}
            or{" "}
            <Link href="/about" className="font-bold text-brand-charcoal hover:text-brand-orange">
              read about our range
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}

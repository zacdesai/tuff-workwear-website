import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Tuff Workwear is Taurus Workwear's Durban operation. 20 years of workwear supply to mines, factories, contractors and small businesses across South Africa.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero — who we are */}
      <section className="bg-brand-charcoal text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="eyebrow text-neutral-300">Who we are</p>
            <h1 className="mt-5 text-5xl uppercase sm:text-6xl">
              Taurus Workwear's Durban base.
            </h1>
            <span className="tuff-rule mt-6" />
            <p className="mt-7 max-w-xl text-lg text-neutral-200">
              Tuff Workwear is Taurus Workwear's Durban operation. Taurus has been in the
              workwear trade for over 20 years — supplying mines, construction crews, food
              processing plants, garden services and local businesses across South Africa.
            </p>
            <p className="mt-5 max-w-xl text-lg text-neutral-200">
              We bring that stock, those supplier relationships and 20 years of trade
              experience to Durban. You deal with us directly.
            </p>
          </div>
          <div className="relative min-h-[22rem] overflow-hidden">
            <img
              src="/images/about-worker.jpg"
              alt="Worker in safety gear"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-charcoal/30" />
          </div>
        </div>
      </section>

      {/* The product range */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow">The range</p>
            <h2 className="mt-3 text-4xl uppercase sm:text-5xl">
              Vulcan Workwear. SABS approved.
            </h2>
            <span className="tuff-rule mt-4" />
            <p className="mt-7 text-lg text-neutral-600">
              Our gear comes from Vulcan Workwear — a South African manufacturer with
              decades of technical workwear heritage and SABS-approved production.
            </p>
            <p className="mt-4 text-lg text-neutral-600">
              Conti suits from econo to premium, safety boots, hi-viz worksuits, rain
              gear, freezer wear and branded apparel. For SABS flame and acid suits or
              specialist protective clothing, call us — some lines need a proper
              conversation before we confirm stock.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="primary">
                <Link href="/catalogue">Browse the catalogue</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/branding">Branding services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="bg-neutral-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow">Our clients</p>
          <h2 className="mt-3 text-4xl uppercase sm:text-5xl">
            Mining companies to the corner butcher.
          </h2>
          <span className="tuff-rule mt-4" />
          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-lg text-neutral-600">
                Our clients cover the full range of South African working environments.
                Mining operations ordering bulk safety gear. Construction contractors
                kitting out a crew before a big job. Garden services sorting their team
                before the summer rush. Local butchers and food businesses that need
                protective clothing for staff.
              </p>
              <p className="mt-5 text-lg text-neutral-600">
                Most lines run at MOQ 10. Some go lower. Ask us.
              </p>
              <Button asChild className="mt-8" size="lg" variant="primary">
                <a href={whatsappHref("Hi Tuff, I'd like to discuss a bulk order.")}>
                  <MessageCircle className="size-5" aria-hidden="true" />
                  Talk to us about your crew
                </a>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="/images/serve-construction.jpg"
                  alt="Construction workers in hard hats on a building site"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="/images/serve-food.jpg"
                  alt="Food factory workers in protective uniforms"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-brand-charcoal py-16 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="eyebrow text-neutral-300">How it works</p>
              <h2 className="mt-4 text-4xl uppercase sm:text-5xl">
                One call. Within a business day.
              </h2>
              <span className="tuff-rule mt-5" />
              <p className="mt-7 text-lg text-neutral-200">
                WhatsApp or call{" "}
                <a className="text-brand-orange hover:underline" href={siteConfig.phoneHref}>
                  083 474 4343
                </a>
                . You get a person who knows the stock and can confirm sizes, colours and
                availability on the spot.
              </p>
              <p className="mt-4 text-lg text-neutral-200">
                Bulk orders get a freight quote to anywhere in the country. We take
                enquiries anytime and respond during business hours.
              </p>
            </div>
            <div className="space-y-4 lg:pl-8">
              <div className="border border-white/10 bg-white/[0.05] p-6">
                <address className="not-italic text-neutral-200">
                  <p className="font-bold text-white">{siteConfig.name}</p>
                  <p className="mt-2 text-sm">{siteConfig.address}</p>
                  <p className="mt-1 text-sm">
                    <a className="hover:text-white" href={siteConfig.phoneHref}>
                      {siteConfig.phoneDisplay}
                    </a>
                  </p>
                  <p className="mt-1 text-sm">
                    <a className="hover:text-white" href={`mailto:${siteConfig.email}`}>
                      {siteConfig.email}
                    </a>
                  </p>
                </address>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" variant="whatsapp">
                  <a href={whatsappHref("Hi Tuff, I need a quote for workwear.")}>
                    <MessageCircle className="size-5" aria-hidden="true" />
                    WhatsApp us
                  </a>
                </Button>
                <Button asChild size="lg" variant="inverse">
                  <a href={siteConfig.phoneHref}>
                    <Phone className="size-5" aria-hidden="true" />
                    Call us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

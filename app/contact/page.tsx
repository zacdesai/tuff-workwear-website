import type { Metadata } from "next";
import { MapPin, MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { EnquiryCallout } from "@/components/site/enquiry-callout";
import { localBusinessJsonLd, siteConfig, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call or WhatsApp Tuff Workwear on 083 474 4343. Based on Daintree Avenue, Durban. Nationwide courier on bulk orders.",
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      {/* Intro */}
      <section className="bg-brand-charcoal py-16 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col justify-center">
            <h1 className="text-5xl uppercase sm:text-6xl">Get hold of us.</h1>
            <span className="tuff-rule mt-6" />
            <p className="mt-7 text-lg text-neutral-200">
              WhatsApp or call{" "}
              <a className="text-brand-orange hover:underline" href={siteConfig.phoneHref}>
                083 474 4343
              </a>
              . You'll get a response from someone who knows the stock.
            </p>
            <p className="mt-4 text-lg text-neutral-200">
              Send sizes, quantities and colours. We confirm availability and come back
              with a quote. Bulk orders include a freight quote to anywhere in the country.
              We take enquiries anytime and respond during business hours.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="xl" variant="whatsapp">
                <a href={whatsappHref("Hi Tuff, I need a quote for workwear.")}>
                  <MessageCircle className="size-5" aria-hidden="true" />
                  WhatsApp 083 474 4343
                </a>
              </Button>
              <Button asChild size="xl" variant="inverse">
                <a href={siteConfig.phoneHref}>
                  <Phone className="size-5" aria-hidden="true" />
                  Call us
                </a>
              </Button>
            </div>
            </div>
            <div className="relative min-h-[22rem] overflow-hidden">
              <img
                src="/images/contact-suits-rail.jpg"
                alt="Tuff conti suits on a rail in the workshop"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-charcoal/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact details */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-3">
            <ContactCard
              icon={Phone}
              title="Phone and WhatsApp"
              lines={[
                <a key="phone" href={siteConfig.phoneHref} className="hover:text-brand-orange">
                  {siteConfig.phoneDisplay}
                </a>,
              ]}
            />
            <ContactCard
              icon={MessageCircle}
              title="Email"
              lines={[
                <a
                  key="email"
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-brand-orange"
                >
                  {siteConfig.email}
                </a>,
              ]}
            />
            <ContactCard
              icon={MapPin}
              title="Address"
              lines={[siteConfig.address, "Durban, KwaZulu-Natal"]}
            />
          </div>

          <EnquiryCallout />

          <div className="mt-16 border-t border-neutral-200 pt-12">
            <p className="eyebrow">Business hours</p>
            <p className="mt-3 text-lg text-neutral-600">
              We take enquiries at any time. Responses during business hours,
              Monday to Friday.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  icon: Icon,
  title,
  lines,
}: {
  icon: React.ElementType;
  title: string;
  lines: React.ReactNode[];
}) {
  return (
    <div className="border border-neutral-200 bg-white p-6 shadow-sm">
      <Icon className="size-8 text-brand-orange" aria-hidden="true" />
      <h2 className="mt-4 font-sans text-sm font-bold uppercase tracking-[0.14em] text-neutral-500">
        {title}
      </h2>
      <address className="mt-3 space-y-1 not-italic text-lg text-neutral-800">
        {lines.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </address>
    </div>
  );
}

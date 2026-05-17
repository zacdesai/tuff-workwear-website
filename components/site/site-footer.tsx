import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig, whatsappHref } from "@/lib/site";

type FooterLink = { label: string; href: string };

const catalogueLinks: FooterLink[] = [
  { label: "Conti suits", href: "/catalogue/conti-suits" },
  { label: "Hi-viz", href: "/catalogue/hi-viz" },
  { label: "Boots", href: "/catalogue/safety-boots" },
  { label: "Apparel", href: "/catalogue" },
];
const companyLinks: FooterLink[] = [
  { label: "About", href: "/about" },
  { label: "Branding services", href: "/branding" },
  { label: "Quote request", href: "/bulk-orders" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <p className="font-display text-4xl tracking-[-0.08em]">TUFF</p>
            <span className="tuff-rule mt-2 max-w-36" />
            <p className="mt-5 max-w-xs text-sm text-neutral-300">
              Built Tough. Priced Right. Workwear, safety gear and branding support from Durban.
            </p>
          </div>

          <FooterColumn title="Catalogue" items={catalogueLinks} />
          <FooterColumn title="Company" items={companyLinks} />

          <div>
            <h2 className="font-sans text-sm font-bold uppercase tracking-[0.14em] text-neutral-300">
              Contact
            </h2>
            <address className="mt-4 space-y-2 text-sm not-italic text-neutral-300">
              <p>{siteConfig.address}</p>
              <p>
                <a className="hover:text-white" href={siteConfig.phoneHref}>
                  {siteConfig.phoneDisplay}
                </a>
              </p>
              <p>
                <a className="hover:text-white" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
              </p>
            </address>
            <Button asChild className="mt-5" size="sm" variant="whatsapp">
              <a href={whatsappHref("Hi Tuff, I need help choosing workwear.")}>
                <MessageCircle className="size-4" aria-hidden="true" />
                WhatsApp us
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-neutral-400">
          © 2026 Tuff Workwear · Part of the Taurus Workwear group · POPIA · Terms · Privacy
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: FooterLink[] }) {
  return (
    <div>
      <h2 className="font-sans text-sm font-bold uppercase tracking-[0.14em] text-neutral-300">
        {title}
      </h2>
      <ul className="mt-4 space-y-2 text-sm text-neutral-300">
        {items.map((item) => (
          <li key={item.label}>
            <Link className="hover:text-white" href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

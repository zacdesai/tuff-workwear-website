import Link from "next/link";
import { Menu, Phone, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { EnquiryCartBadge } from "@/components/site/enquiry-cart-badge";
import { heroWhatsappHref } from "@/lib/products";
import { siteConfig } from "@/lib/site";

const navItems = [
  { label: "Catalogue", href: "/catalogue" },
  { label: "Branding", href: "/branding" },
  { label: "Bulk Orders", href: "/bulk-orders" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[72px] lg:px-8">
        <Link className="group flex items-center gap-3" href="/" aria-label="Tuff Workwear home">
          <span className="grid size-10 place-items-center bg-brand-charcoal text-white">
            <ShieldCheck className="size-5 text-brand-orange" aria-hidden="true" />
          </span>
          <span className="leading-none">
            <span className="block font-display text-2xl tracking-[-0.08em]">TUFF</span>
            <span className="block h-1 w-full bg-brand-orange transition-all group-hover:w-2/3" />
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              className="text-xs font-bold uppercase tracking-[0.14em] text-neutral-700 transition-colors hover:text-orange-700"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <EnquiryCartBadge />
          <Button asChild size="sm" variant="ghost">
            <a href={siteConfig.phoneHref}>
              <Phone className="size-4" aria-hidden="true" />
              {siteConfig.phoneDisplay}
            </a>
          </Button>
          <Button asChild size="sm" variant="whatsapp">
            <a href={heroWhatsappHref}>WhatsApp</a>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Button asChild size="icon" variant="whatsapp">
            <a href={heroWhatsappHref} aria-label="WhatsApp Tuff Workwear">
              <Phone className="size-4" aria-hidden="true" />
            </a>
          </Button>
          <Button size="icon" variant="secondary" aria-label="Open menu">
            <Menu className="size-5" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </header>
  );
}

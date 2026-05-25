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
            <div className="flex items-center gap-3">
              <svg viewBox="-5 -10 110 102" aria-hidden="true" className="h-12 w-12 shrink-0">
                <path fill="#E8611A" d="m93.91 69.246-6.125-9.9062c-0.66016-26.75-12.191-38.684-21.883-43.988-3.0195-3.4102-6.7734-5.6484-11.461-5.8359-17.555-0.70703-21.945 3.3398-23.043 5.3477-14.148 5.3203-19.82 24.352-20.668 35.598-0.28516 0.070312-0.55859 0.19141-0.77344 0.42187l-3.6914 3.9336c-2.043 2.1758-2.1172 5.5273-0.17578 7.793l4.8555 5.668c1.3633 1.5859 3.2344 2.7148 5.2773 3.168l9.0664 2.0234 11.488 8.5195c10.469 7.7773 23.812 10.406 36.34 7.3086 0 0 14.008-3.4531 14.008-3.4531 7.1367-1.5391 10.809-10.504 6.7812-16.605zm-9.2656-10.559c-0.58984 0.19141-1.3516 0.44922-2.1406 0.73047v-2.9414c0-0.46484-0.20703-0.90625-0.5625-1.1992-0.35547-0.29688-0.82422-0.41406-1.2852-0.33594-1.3906 0.29297-2.8086-0.79297-2.9023-2.207-0.64844-7.4023-2.4414-20.512-7.2812-30.363 7.0352 6.1953 13.547 17.09 14.172 36.32zm-30.324-46.047c15.633 0.62109 19.508 31.055 20.324 40.363 0.18359 2.5195 2.2422 4.7031 4.7383 5.0391v5.9922c-1.5703 1.4141-9.0859 6.8242-31.273 5.5977v-5.8438c5.6875-0.26953 10.281-5.043 9.6562-10.836-1.418-12.117-4.9531-35.984-20.891-38.484 2.6445-1.1172 7.7383-2.2109 17.453-1.8281zm-33.035 14.746c3.7266 1.6719 15.609 7.8516 19.207 20.062 0.62109 1.9648 3.5469 1.0898 2.9961-0.88672-3.8203-12.965-15.582-19.57-20.297-21.754 4.9844-5.9258 12.031-10.414 19.246-4.6562 8.3906 6.6055 11.25 23.582 12.211 33.117 0.35547 3.5273-2.1055 6.6992-5.5977 7.2227l-2.7383 0.41016c-0.76562 0.11328-1.332 0.77344-1.332 1.5469v6.1367c-12.449-0.29688-25.027-7.9141-29.996-11.262-0.93359-0.62891-1.4609-1.668-1.4141-2.7852 0.21094-4.8711 1.3867-17.605 7.7148-27.148zm70.57 50.707c-0.97266 2.3867-2.9688 4.1094-5.4688 4.7266l-14.004 3.4531c-11.734 2.8828-24.023 0.41016-33.73-6.7891l-11.754-8.7148c-0.17578-0.12891-0.375-0.22266-0.58984-0.26953l-9.3906-2.0977c-1.3867-0.3125-2.6602-1.0742-3.5859-2.1562l-4.8555-5.668c-0.90234-1.0547-0.86719-2.6094 0.082032-3.625 0 0 1.9062-2.0352 1.9062-2.0352 0.078125 2.0117 1.0859 3.8516 2.7812 4.9922 5.2305 3.5156 18.531 11.484 31.867 11.789 0.22266 0.53125 0.72656 0.91406 1.332 0.95703 19.27 1.7109 33.309-3.3047 35.746-7.0469 0.5625-0.57812 0.23438-2.1719 0.32031-2.8672 1.0664-0.40234 2.2227-0.79297 3.0508-1.0664 0 0 5.6992 9.2148 5.6992 9.2148 1.3555 2.1914 1.5742 4.8164 0.60156 7.1992z" />
              </svg>
              <div className="leading-none">
                <p className="font-display text-4xl tracking-[-0.08em]">TUFF</p>
                <span className="tuff-rule mt-2 max-w-36" />
              </div>
            </div>
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

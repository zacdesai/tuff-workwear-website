import { MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { heroWhatsappHref } from "@/lib/products";
import { siteConfig } from "@/lib/site";

// Phones only: WhatsApp and Call pinned in thumb reach on every page.
// Rendered from the footer, which also carries a spacer so the bar never
// covers the last of the page.
export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t-[3px] border-brand-orange bg-brand-black/95 px-3 pt-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] lg:hidden">
      <Button asChild size="md" variant="whatsapp" className="px-3">
        <a href={heroWhatsappHref}>
          <MessageCircle className="size-5" aria-hidden="true" />
          WhatsApp
        </a>
      </Button>
      <Button asChild size="md" variant="outlineDark" className="px-3">
        <a href={siteConfig.phoneHref}>
          <Phone className="size-5" aria-hidden="true" />
          Call now
        </a>
      </Button>
    </div>
  );
}

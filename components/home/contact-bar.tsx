import { MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig, whatsappHref } from "@/lib/site";

export function ContactBar() {
  return (
    <section className="bg-orange-700 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-100">
            Ready for a quote?
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
            <a href={whatsappHref("Hi Tuff, I need a quote for workwear.")}>
              <MessageCircle className="size-4" aria-hidden="true" />
              WhatsApp quote
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

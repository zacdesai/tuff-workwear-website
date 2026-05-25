import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { heroWhatsappHref } from "@/lib/products";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-brand-charcoal text-white">
      <div className="industrial-grid absolute inset-0 opacity-80" aria-hidden="true" />
      <div className="absolute -right-24 top-14 h-72 w-72 rounded-full bg-brand-orange/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="eyebrow text-neutral-300">Durban's workwear crew</p>
          <h1 className="mt-5 max-w-4xl text-6xl uppercase sm:text-7xl lg:text-8xl">
            Built Tough.
            <br />
            Priced Right.
          </h1>
          <span className="tuff-rule mt-6" />
          <p className="mt-7 max-w-xl text-lg text-neutral-200">
            Conti suits from R149. Boots from R295. We're Taurus Workwear's Durban base — 20 years of supply to mines, factories, contractors and small businesses that need their gear sorted.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="xl" variant="whatsapp">
              <a href={heroWhatsappHref}>
                <MessageCircle className="size-5" aria-hidden="true" />
                WhatsApp 083 474 4343
              </a>
            </Button>
            <Button asChild size="xl" variant="outlineDark">
              <Link href="/catalogue">
                View catalogue
                <ArrowRight className="size-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative min-h-[28rem]">
          <div className="absolute inset-x-8 bottom-0 top-16 rotate-[-3deg] border-2 border-white/15 bg-neutral-900 shadow-2xl" />
          <img
            src="https://vulcanworkwear.co.za/wp-content/uploads/2023/01/PREMIUM-GREY-65-35-14-700x933.jpg"
            alt="Premium Conti Suit"
            className="absolute inset-x-8 bottom-0 top-16 h-[calc(100%-4rem)] w-[calc(100%-4rem)] object-cover object-top opacity-80"
          />
          <div className="absolute inset-x-0 bottom-12 rounded-sm border border-white/10 bg-white/[0.08] p-6 backdrop-blur-sm">
            <span className="inline-block bg-brand-orange px-2 py-0.5 text-xs font-bold uppercase tracking-[0.14em] text-white">Launch specials</span>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <HeroPrice label="Premium suit" price="R225.00" />
              <HeroPrice label="Safety boots" price="R295.00" />
            </div>
          </div>
          <div className="absolute right-8 top-0 border border-brand-orange/60 bg-brand-orange px-5 py-4 text-center shadow-glow-orange">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white">Popular combo</p>
            <p className="mt-1 text-sm text-orange-100">The site starter kit</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroPrice({ label, price }: { label: string; price: string }) {
  return (
    <div className="border border-white/10 bg-neutral-950/60 p-4">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-neutral-300">{label}</p>
      <p className="price-emphasis mt-2 text-3xl">{price}</p>
    </div>
  );
}

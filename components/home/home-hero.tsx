import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { heroWhatsappHref } from "@/lib/products";

export function HomeHero() {
  return (
    <section className="bg-brand-charcoal text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-14">
        <div className="max-w-3xl">
          <p className="eyebrow text-neutral-300">Durban's workwear crew</p>
          <h1 className="mt-5 max-w-4xl text-6xl uppercase sm:text-7xl 2xl:text-8xl">
            Built Tough.
            <br />
            Priced Right.
          </h1>
          <span className="tuff-rule mt-6" />
          <p className="mt-7 max-w-xl text-lg text-neutral-200">
            Conti suits from R149. Boots from R295. We're Taurus Workwear's Durban base, with 20 years of supply to mines, factories, contractors and small businesses that need their gear sorted.
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

        <div className="relative min-h-[26rem]">
          <div className="absolute inset-x-8 bottom-0 top-16 overflow-hidden border border-white/10 bg-white">
            <Image
              src="/products/premium-conti-suit-1.webp"
              alt="Premium Conti Suit"
              fill
              priority
              unoptimized
              className="object-cover object-top"
            />
          </div>
          <div className="absolute inset-x-0 bottom-12 border-t-4 border-brand-orange bg-brand-black p-6">
            <span className="inline-block bg-brand-orange px-2 py-0.5 text-xs font-bold uppercase tracking-[0.14em] text-white">Launch specials</span>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <HeroPrice label="Premium suit" price="R225.00" />
              <HeroPrice label="Safety boots" price="R295.00" />
            </div>
          </div>
          <div className="absolute right-2 top-0 z-10 flex aspect-square w-32 flex-col items-center justify-center gap-0.5 rounded-full border-2 border-brand-orange bg-brand-black text-center sm:right-6">
            <p className="text-sm font-black uppercase leading-none tracking-tight text-white">Popular</p>
            <p className="text-xs font-black uppercase leading-none tracking-tight text-brand-orange">Combo</p>
            <span className="my-1.5 w-10 border-t border-brand-orange/70" />
            <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-neutral-300">starter kit</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroPrice({ label, price }: { label: string; price: string }) {
  return (
    <div className="border border-white/10 bg-brand-charcoal p-4">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-neutral-300">{label}</p>
      <p className="price-emphasis mt-2 text-3xl">{price}</p>
    </div>
  );
}

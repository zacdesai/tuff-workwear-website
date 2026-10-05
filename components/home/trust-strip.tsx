import Image from "next/image";

const trustItems = [
  {
    title: "Triple stitched",
    body: "Built for repeat wash, wear and work.",
  },
  {
    title: "Conti suits made in South Africa",
    logo: { src: "/vulcan-logo.webp", alt: "Vulcan Workwear", width: 800, height: 165 },
  },
  {
    title: "Taurus Workwear group",
    body: "20 years supplying South African businesses. The stock, pricing and supplier relationships are in place.",
  },
  {
    title: "Nationwide delivery",
    body: "Quote, pack and dispatch for bulk orders.",
  },
];

// Full-bleed orange band, cells split by hairlines. The one place orange is
// allowed as a section fill (Zak, Oct 2026), modelled on the Taurus trust strip.
// Text is near-black: white on Tuff orange fails contrast at this size.
// The Vulcan cell names conti suits on purpose: boots and apparel come from
// other suppliers (Pinnacle, Vicbay), so the mark must not imply the whole range.
export function TrustStrip() {
  return (
    <section className="bg-brand-orange text-brand-black">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid gap-px bg-brand-black/20 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div className="bg-brand-orange px-5 py-5 sm:px-6 lg:py-6" key={item.title}>
              <h2 className="text-base uppercase leading-tight tracking-[-0.01em]">{item.title}</h2>
              {item.body ? <p className="mt-1.5 text-sm leading-snug text-brand-black/85">{item.body}</p> : null}
              {item.logo ? (
                <Image
                  src={item.logo.src}
                  alt={item.logo.alt}
                  width={item.logo.width}
                  height={item.logo.height}
                  unoptimized
                  className="mt-3 h-auto w-full max-w-[240px] rounded-sm"
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

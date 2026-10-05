const trustItems = [
  {
    title: "Triple stitched",
    body: "Built for repeat wash, wear and work.",
  },
  {
    title: "All crew sizes",
    body: "Core lines cover the popular sizes teams need.",
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
export function TrustStrip() {
  return (
    <section className="bg-brand-orange text-brand-black">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid gap-px bg-brand-black/20 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div className="bg-brand-orange px-5 py-5 sm:px-6 lg:py-6" key={item.title}>
              <h2 className="text-base uppercase leading-tight tracking-[-0.01em]">{item.title}</h2>
              <p className="mt-1.5 text-sm leading-snug text-brand-black/85">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

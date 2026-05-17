import { BadgeCheck, MapPinned, Ruler, Truck } from "lucide-react";

const trustItems = [
  {
    title: "Triple stitched",
    body: "Built for repeat wash, wear and work.",
    icon: BadgeCheck,
  },
  {
    title: "All crew sizes",
    body: "Core lines cover the popular sizes teams need.",
    icon: Ruler,
  },
  {
    title: "Taurus Workwear group",
    body: "20 years supplying South African businesses. The stock, pricing and supplier relationships are in place.",
    icon: MapPinned,
  },
  {
    title: "Nationwide delivery",
    body: "Quote, pack and dispatch for bulk orders.",
    icon: Truck,
  },
];

export function TrustStrip() {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {trustItems.map((item) => (
          <div className="border border-neutral-200 bg-white p-5 shadow-sm" key={item.title}>
            <item.icon className="size-8 text-brand-orange" aria-hidden="true" />
            <h2 className="mt-4 font-sans text-base font-bold">{item.title}</h2>
            <p className="mt-2 text-sm text-neutral-500">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

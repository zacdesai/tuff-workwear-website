const steps = [
  "Pick your category",
  "Send product codes",
  "Confirm sizes and colours",
  "Approve the quote",
  "Collect or dispatch",
];

export function HowToOrder() {
  return (
    <section className="border-y border-neutral-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div>
            <p className="eyebrow">How to order</p>
            <h2 className="mt-3 text-4xl uppercase">No checkout. No confusion.</h2>
          </div>
          <ol className="grid gap-3 sm:grid-cols-5">
            {steps.map((step, index) => (
              <li className="border-l-4 border-brand-orange bg-neutral-50 p-4" key={step}>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-orange-700">
                  Step {index + 1}
                </p>
                <p className="mt-2 text-sm font-bold">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="bg-brand-charcoal text-white">
      <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-start justify-center px-4 py-24 sm:px-6 lg:px-8">
        <p className="eyebrow text-neutral-300">404</p>
        <h1 className="mt-5 text-6xl uppercase sm:text-7xl">Page not found.</h1>
        <span className="tuff-rule mt-6" />
        <p className="mt-7 max-w-lg text-lg text-neutral-200">
          This page doesn't exist. Try the catalogue or get in touch and we'll point
          you in the right direction.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="xl" variant="primary">
            <Link href="/catalogue">
              Browse the catalogue
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild size="xl" variant="outlineDark">
            <Link href="/contact">Contact us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

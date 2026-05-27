"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ImageGallery({
  images,
  alt,
  badge,
}: {
  images: string[];
  alt: string;
  badge?: string;
}) {
  const [selected, setSelected] = useState(0);

  function prev() {
    setSelected((i) => (i === 0 ? images.length - 1 : i - 1));
  }

  function next() {
    setSelected((i) => (i === images.length - 1 ? 0 : i + 1));
  }

  return (
    <div>
      <div className="group relative aspect-[4/5] overflow-hidden bg-neutral-100">
        <Image
          src={images[selected]}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-top"
        />
        {badge && (
          <span className="absolute left-4 top-4 bg-brand-charcoal px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-white">
            {badge}
          </span>
        )}

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-brand-charcoal/70 p-1.5 text-white opacity-0 transition-opacity group-hover:opacity-100 hover:bg-brand-charcoal"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-brand-charcoal/70 p-1.5 text-white opacity-0 transition-opacity group-hover:opacity-100 hover:bg-brand-charcoal"
            >
              <ChevronRight className="size-5" />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setSelected(i)}
              aria-label={`View image ${i + 1}`}
              className={`shrink-0 overflow-hidden border-2 transition-colors ${
                i === selected
                  ? "border-brand-orange"
                  : "border-transparent hover:border-neutral-300"
              }`}
            >
              <Image
                src={src}
                alt={`${alt} — colour ${i + 1}`}
                width={48}
                height={64}
                className="object-cover object-top"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

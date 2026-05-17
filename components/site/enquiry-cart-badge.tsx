"use client";

import Link from "next/link";

import { useEnquiry } from "@/lib/enquiry-context";

export function EnquiryCartBadge() {
  const { itemCount } = useEnquiry();
  if (itemCount === 0) return null;

  return (
    <Link
      href="/enquiry"
      className="relative flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-neutral-700 transition-colors hover:text-brand-orange"
    >
      Enquiry list
      <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-orange px-1 text-[10px] font-black text-white">
        {itemCount}
      </span>
    </Link>
  );
}

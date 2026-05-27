"use client";

import Link from "next/link";
import { ClipboardList } from "lucide-react";

import { useEnquiry } from "@/lib/enquiry-context";

export function EnquiryCallout() {
  const { itemCount } = useEnquiry();

  if (itemCount === 0) return null;

  return (
    <div className="mt-8 flex items-start gap-4 rounded-md border border-brand-orange/20 bg-orange-50 p-5">
      <ClipboardList className="mt-0.5 size-6 shrink-0 text-brand-orange" aria-hidden="true" />
      <div className="flex-1">
        <p className="font-semibold text-neutral-800">
          You have {itemCount} item{itemCount !== 1 ? "s" : ""} in your enquiry list.
        </p>
        <p className="mt-1 text-sm text-neutral-600">
          Review and send your list before you call — we can quote faster when we know exactly what you need.
        </p>
        <Link
          href="/enquiry"
          className="mt-3 inline-flex items-center text-sm font-bold text-brand-orange hover:underline"
        >
          View enquiry list →
        </Link>
      </div>
    </div>
  );
}

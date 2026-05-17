"use client";

import { useState } from "react";
import { ClipboardList } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useEnquiry } from "@/lib/enquiry-context";
import type { Product } from "@/lib/products";

export function AddToEnquiryButton({
  product,
  size = "sm",
  className,
}: {
  product: Product;
  size?: "sm" | "lg" | "xl";
  className?: string;
}) {
  const { addItem, items } = useEnquiry();
  const [justAdded, setJustAdded] = useState(false);
  const isInList = items.some((p) => p.id === product.id);

  function handleClick() {
    addItem(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  }

  return (
    <Button
      size={size}
      variant="secondary"
      onClick={handleClick}
      disabled={isInList}
      className={className}
    >
      <ClipboardList className="size-4" aria-hidden="true" />
      {isInList ? "In enquiry list" : justAdded ? "Added" : "Add to enquiry"}
    </Button>
  );
}

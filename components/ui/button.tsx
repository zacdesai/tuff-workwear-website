import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-bold uppercase tracking-[0.08em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-orange text-white shadow-[0_10px_24px_rgba(232,97,26,0.22)] hover:bg-orange-600 active:bg-orange-700 active:scale-[0.98]",
        secondary:
          "border border-brand-charcoal bg-white text-brand-charcoal hover:bg-neutral-100 active:scale-[0.98]",
        inverse:
          "bg-white text-brand-charcoal hover:bg-neutral-100 active:scale-[0.98]",
        ghost:
          "text-brand-charcoal underline-offset-4 hover:text-orange-700 hover:underline",
        outlineDark:
          "border border-white/50 bg-transparent text-white hover:border-white hover:bg-white hover:text-brand-charcoal",
        whatsapp:
          "bg-[#25D366] text-white shadow-[0_10px_24px_rgba(37,211,102,0.2)] hover:bg-[#1fb85a] active:scale-[0.98]",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-11 px-6",
        lg: "h-[52px] px-8 text-base",
        xl: "h-16 px-10 text-base",
        icon: "size-11 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

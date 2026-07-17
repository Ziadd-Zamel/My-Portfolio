import * as React from "react";
import { Slot } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-lg border border-transparent text-sm font-semibold whitespace-nowrap transition-all outline-none select-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        brand:
          "bg-brand text-brand-foreground shadow-[0_8px_20px_-10px_var(--glow-brand)] hover:bg-brand-hover",
        copper:
          "bg-copper text-copper-foreground shadow-[0_8px_20px_-10px_var(--glow-copper)] hover:bg-copper-hover",
        outline:
          "border-line bg-canvas-raised text-ink hover:border-brand/40 hover:text-brand",
        ghost: "text-ink hover:bg-canvas-muted hover:text-brand",
        soft: "bg-brand-subtle text-brand hover:bg-brand-muted/30",
        "copper-soft": "bg-copper-subtle text-copper hover:bg-copper-muted/30",
        danger:
          "bg-danger text-ink-inverse hover:brightness-110 focus-visible:ring-danger/40",
        "danger-soft":
          "bg-danger-subtle text-danger hover:brightness-95 focus-visible:ring-danger/40",
        success: "bg-success text-ink-inverse hover:brightness-110",
        link: "h-auto border-transparent bg-transparent p-0 text-brand underline-offset-4 hover:underline",
        inverse:
          "bg-canvas-inverse text-ink-inverse hover:bg-ink-secondary dark:hover:bg-ink-muted",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 gap-1.5 px-3 text-xs",
        lg: "h-11 px-5 text-base",
        icon: "size-10",
        "icon-sm": "size-8",
        "icon-lg": "size-11",
      },
    },
    defaultVariants: {
      variant: "brand",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "brand",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };

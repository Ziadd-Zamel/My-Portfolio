import * as React from "react";
import { Slot } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex w-fit items-center justify-center gap-1 px-2.5 py-1 text-xs font-semibold leading-none whitespace-nowrap transition-colors [&_svg]:size-3",
  {
    variants: {
      variant: {
        brand: "",
        copper: "",
        success: "",
        warning: "",
        danger: "",
        info: "",
        neutral: "",
      },
      tone: {
        solid: "",
        soft: "",
        outline: "border bg-transparent",
      },
      shape: {
        rounded: "rounded-md",
        pill: "rounded-full",
      },
    },
    compoundVariants: [
      { variant: "brand", tone: "solid", class: "bg-brand text-brand-foreground" },
      { variant: "brand", tone: "soft", class: "bg-brand-subtle text-brand" },
      {
        variant: "brand",
        tone: "outline",
        class: "border-brand/40 text-brand",
      },
      {
        variant: "copper",
        tone: "solid",
        class: "bg-copper text-copper-foreground",
      },
      { variant: "copper", tone: "soft", class: "bg-copper-subtle text-copper" },
      {
        variant: "copper",
        tone: "outline",
        class: "border-copper/40 text-copper",
      },
      {
        variant: "success",
        tone: "solid",
        class: "bg-success text-ink-inverse",
      },
      {
        variant: "success",
        tone: "soft",
        class: "bg-success-subtle text-success",
      },
      {
        variant: "success",
        tone: "outline",
        class: "border-success/40 text-success",
      },
      {
        variant: "warning",
        tone: "solid",
        class: "bg-warning text-ink-inverse",
      },
      {
        variant: "warning",
        tone: "soft",
        class: "bg-warning-subtle text-warning",
      },
      {
        variant: "warning",
        tone: "outline",
        class: "border-warning/40 text-warning",
      },
      { variant: "danger", tone: "solid", class: "bg-danger text-ink-inverse" },
      { variant: "danger", tone: "soft", class: "bg-danger-subtle text-danger" },
      {
        variant: "danger",
        tone: "outline",
        class: "border-danger/40 text-danger",
      },
      { variant: "info", tone: "solid", class: "bg-info text-ink-inverse" },
      { variant: "info", tone: "soft", class: "bg-info-subtle text-info" },
      { variant: "info", tone: "outline", class: "border-info/40 text-info" },
      {
        variant: "neutral",
        tone: "solid",
        class: "bg-canvas-inverse text-ink-inverse",
      },
      {
        variant: "neutral",
        tone: "soft",
        class: "bg-canvas-muted text-ink-muted",
      },
      {
        variant: "neutral",
        tone: "outline",
        class: "border-line text-ink-muted",
      },
    ],
    defaultVariants: {
      variant: "brand",
      tone: "solid",
      shape: "rounded",
    },
  },
);

function Badge({
  className,
  variant,
  tone,
  shape,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, tone, shape }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };

import * as React from "react";
import { cn } from "@/lib/utils";

function Input({
  className,
  type,
  leftIcon,
  rightIcon,
  wrapperClassName,
  ...props
}: React.ComponentProps<"input"> & {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  wrapperClassName?: string;
}) {
  return (
    <div className={cn("relative flex h-10 w-full items-center", wrapperClassName)}>
      {leftIcon && (
        <span className="pointer-events-none absolute start-3 flex size-4 items-center justify-center text-field-icon">
          {leftIcon}
        </span>
      )}

      <input
        type={type}
        data-slot="input"
        className={cn(
          "h-10 w-full min-w-0 rounded-lg border border-line bg-field px-3 text-sm text-ink outline-none transition",
          "placeholder:text-ink-faint",
          "focus:border-brand focus:ring-2 focus:ring-brand/25",
          "aria-invalid:border-danger aria-invalid:bg-field-invalid aria-invalid:ring-danger/20",
          "disabled:cursor-not-allowed disabled:bg-field-disabled disabled:opacity-60",
          leftIcon && "ps-9",
          rightIcon && "pe-9",
          className,
        )}
        {...props}
      />

      {rightIcon && (
        <span className="pointer-events-none absolute end-3 flex size-4 items-center justify-center text-field-icon">
          {rightIcon}
        </span>
      )}
    </div>
  );
}

export { Input };

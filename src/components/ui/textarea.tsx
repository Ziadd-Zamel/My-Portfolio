import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "min-h-24 w-full min-w-0 resize-y rounded-lg border border-line bg-field px-3 py-2 text-sm text-ink outline-none transition",
        "placeholder:text-ink-faint",
        "focus:border-brand focus:ring-2 focus:ring-brand/25",
        "aria-invalid:border-danger aria-invalid:bg-field-invalid aria-invalid:ring-danger/20",
        "disabled:cursor-not-allowed disabled:bg-field-disabled disabled:opacity-60",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };

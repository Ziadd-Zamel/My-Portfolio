"use client";

import type { CSSProperties } from "react";
import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";
import {
  CircleCheckIcon,
  InfoIcon,
  TriangleAlertIcon,
  OctagonXIcon,
  Loader2Icon,
} from "lucide-react";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4 text-success" />,
        info: <InfoIcon className="size-4 text-info" />,
        warning: <TriangleAlertIcon className="size-4 text-warning" />,
        error: <OctagonXIcon className="size-4 text-danger" />,
        loading: <Loader2Icon className="size-4 animate-spin text-brand" />,
      }}
      style={
        {
          "--normal-bg": "var(--canvas-raised)",
          "--normal-text": "var(--ink)",
          "--normal-border": "var(--line)",
          "--success-bg": "var(--success-subtle)",
          "--success-text": "var(--success)",
          "--success-border": "var(--success)",
          "--error-bg": "var(--danger-subtle)",
          "--error-text": "var(--danger)",
          "--error-border": "var(--danger)",
          "--warning-bg": "var(--warning-subtle)",
          "--warning-text": "var(--warning)",
          "--warning-border": "var(--warning)",
          "--border-radius": "var(--radius)",
        } as CSSProperties
      }
      toastOptions={{
        classNames: {
          toast: "border border-line shadow-md",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };

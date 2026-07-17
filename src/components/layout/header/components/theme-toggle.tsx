"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const t = useTranslations("Header");
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon-sm"
      aria-label={isDark ? t("switchLight") : t("switchDark")}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? (
        <Sun className="size-4 text-copper" />
      ) : (
        <Moon className="size-4" />
      )}
    </Button>
  );
}

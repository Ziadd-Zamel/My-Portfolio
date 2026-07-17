import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function Brand() {
  const t = await getTranslations("Header");

  return (
    <Link
      href="/"
      className="group flex min-w-0 items-center gap-3 transition-opacity hover:opacity-90"
    >
      <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-brand text-sm font-black tracking-tight text-brand-foreground shadow-[0_10px_24px_-12px_var(--glow-brand)]">
        Z
      </span>
      <span className="min-w-0 leading-tight">
        <span className="block truncate text-sm font-bold tracking-tight text-ink sm:text-base">
          {t("brandName")}
        </span>
        <span className="block truncate text-xs text-ink-muted">
          {t("brandRole")}
        </span>
      </span>
    </Link>
  );
}

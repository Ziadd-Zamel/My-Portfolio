import Image from "next/image";
import { getCompany, type CompanyId } from "@/components/constants/projects/companies.constant";
import { cn } from "@/lib/utils";

type ProjectCompanyBadgeProps = {
  companyId?: CompanyId;
  className?: string;
  size?: "sm" | "md";
};

export function ProjectCompanyBadge({
  companyId = "freelance",
  className,
  size = "sm",
}: ProjectCompanyBadgeProps) {
  const company = getCompany(companyId);
  const isSvg = company.logo.endsWith(".svg");
  const box = size === "md" ? 28 : 22;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-line bg-canvas/90 font-medium text-ink backdrop-blur",
        size === "md" ? "px-3 py-1.5 text-sm" : "px-2.5 py-1 text-xs",
        className,
      )}
    >
      <span
        className="relative shrink-0 overflow-hidden rounded-md bg-canvas-raised"
        style={{ width: box, height: box }}
      >
        {isSvg ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={company.logo}
            alt=""
            width={box}
            height={box}
            className="size-full object-contain p-0.5"
          />
        ) : (
          <Image
            src={company.logo}
            alt=""
            fill
            className="object-contain p-0.5"
            sizes={`${box}px`}
          />
        )}
      </span>
      <span>{company.name}</span>
    </span>
  );
}

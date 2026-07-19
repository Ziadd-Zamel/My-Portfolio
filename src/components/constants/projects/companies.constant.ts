export type CompanyId = "freelance" | "acwady" | "evyx" | "xai" | "goe";

export type Company = {
  id: CompanyId;
  name: string;
  logo: string;
};

export const COMPANIES: Record<CompanyId, Company> = {
  freelance: {
    id: "freelance",
    name: "Freelance",
    logo: "/companies/Freelance/freelance-logo.svg",
  },
  acwady: {
    id: "acwady",
    name: "Acwady",
    logo: "/companies/Acwady/acwady-logo.png",
  },
  evyx: {
    id: "evyx",
    name: "Evyx",
    logo: "/companies/Evyx/evyx-logo.webp",
  },
  xai: {
    id: "xai",
    name: "XAI",
    logo: "/companies/XAI/XAILogo.png",
  },
  goe: {
    id: "goe",
    name: "GOE",
    logo: "/companies/GOE/logo.png",
  },
};

export function getCompany(id: CompanyId = "freelance"): Company {
  return COMPANIES[id] ?? COMPANIES.freelance;
}

import type { ProjectContent } from "./project.types";

const pages = Array.from({ length: 9 }, (_, i) => `/assets/goe/pages/page-${i + 1}.png`);

export const GOE_PROJECT: ProjectContent = {
  id: "goe",
  company: "goe",
  year: "2025",
  completedAt: "2025",
  accent: "copper",
  featured: false,
  coverImage: "/assets/goe/brand/main-preview.png",
  brandImages: [
    "/assets/goe/brand/main-preview.png",
    "/assets/goe/brand/sub-preview.png",
    "/assets/goe/brand/third-preview.png",
    "/assets/goe/brand/force-preview.png",
  ],
  gallery: pages,
  tech: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "next-intl",
    "Clerk",
    "TanStack Query",
    "Zustand",
    "Embla Carousel",
    "shadcn/ui",
  ],
  links: [],
  tags: ["team", "frontend"],
  content: {
    en: {
      title: "Gates of Egypt",
      category: "Travel",
      headline: "Gates of Egypt — Activities, Hotels & VR Tours",
      cardDescription:
        "Gates of Egypt is a travel marketplace for Egyptian experiences — curated activities, hotel stays, and EgyTales VR tours — plus an internal CMS for operators, with deep localization including Arabic RTL.",
      overview:
        "Gates of Egypt (GOE) is a multi-surface travel platform for discovering and booking Egyptian experiences: curated activities, hotel stays, and immersive EgyTales VR tours. A public Next.js marketplace and a Clerk-protected Admin CMS share one API, with gold/green/cream brand identity for travelers and a zinc ops shell for content operators.",
      typeLabel: "Frontend development",
      teamLabel: "Team project",
      features: [
        "Public marketplace for Activities, Hotels, and EgyTales VR tours",
        "URL-driven activity search with price/category/city filters and shareable queries",
        "Activity detail with Embla gallery, booking sidebar, and package timelines",
        "Hotels search and Airbnb-style detail with amenities and room types",
        "VR funnel: catalog → subscribe → subscribed player / downloads / feedback",
        "Admin CMS: activities CRUD, nested packages, dashboard inventory views",
        "Locale-first App Router with next-intl — 9 languages including Arabic RTL",
      ],
      challenges: [
        "Composing Clerk + next-intl middleware without breaking API or onboarding",
        "RTL as a product requirement across pickers, carousels, and icon buttons",
        "Resilient API UX with revalidate and mock fallbacks",
        "Multi-tab CMS editors with FormData PATCH diffs and image delete tracking",
        "Dual design systems — consumer gold/green vs admin zinc",
      ],
    },
    ar: {
      title: "بوابات مصر",
      category: "سفر",
      headline: "بوابات مصر — أنشطة وفنادق وجولات VR",
      cardDescription:
        "بوابات مصر سوق سفر لتجارب مصرية — أنشطة منتقاة، إقامات فندقية، وجولات EgyTales VR — مع لوحة إدارة للمحتوى وتوطين عميق يشمل العربية وRTL.",
      overview:
        "بوابات مصر منصة سفر متعددة الأسطح لاكتشاف وحجز التجارب المصرية: أنشطة وفنادق وجولات VR. سوق عام بـ Next.js ولوحة إدارة محمية بـ Clerk على API واحد، بهوية ذهبية/خضراء للمسافرين وواجهة تشغيل منفصلة للمشغّلين.",
      typeLabel: "تطوير واجهات",
      teamLabel: "مشروع فريق",
      features: [
        "سوق عام للأنشطة والفنادق وجولات VR",
        "بحث أنشطة بفلاتر السعر والتصنيف والمدينة",
        "تفاصيل نشاط بمعرض وحجز وحزم زمنية",
        "بحث فنادق وتفاصيل بغرف ومرافق",
        "مسار VR: كتالوج → اشتراك → مشغّل وملاحظات",
        "لوحة إدارة: CRUD أنشطة وحزم ولوحة مخزون",
        "تسع لغات مع next-intl بما فيها العربية وRTL",
      ],
      challenges: [
        "دمج Clerk مع next-intl دون كسر المسارات",
        "RTL عبر المنتقي والمعارض والأيقونات",
        "واجهة API مرنة مع mock fallbacks",
        "نماذج CMS متعددة التبويب مع FormData",
        "نظاما تصميم للمستهلك والمشغّل",
      ],
    },
    fr: {
      title: "Gates of Egypt",
      category: "Voyage",
      headline: "Gates of Egypt — Activités, hôtels & VR",
      cardDescription:
        "Gates of Egypt est une marketplace voyage pour expériences égyptiennes — activités, hôtels et tours VR EgyTales — plus un CMS interne, avec localisation profonde incluant l'arabe RTL.",
      overview:
        "Gates of Egypt est une plateforme voyage multi-surfaces : activités, hôtels et VR EgyTales. Marketplace Next.js publique et CMS Admin protégé Clerk sur une API partagée, identité or/vert/crème pour voyageurs et shell zinc pour ops.",
      typeLabel: "Développement frontend",
      teamLabel: "Projet d'équipe",
      features: [
        "Marketplace Activities, Hotels et VR EgyTales",
        "Recherche activités avec filtres URL partageables",
        "Détail activité : galerie Embla, booking rail, packages",
        "Hôtels search + détail type Airbnb",
        "Funnel VR : catalogue → subscribe → player",
        "CMS admin : CRUD activités et packages",
        "9 langues via next-intl dont arabe RTL",
      ],
      challenges: [
        "Middleware Clerk + next-intl",
        "RTL produit sur pickers et carousels",
        "API résiliente avec mocks",
        "Éditeurs CMS multi-onglets FormData",
        "Deux design systems consumer vs ops",
      ],
    },
  },
};

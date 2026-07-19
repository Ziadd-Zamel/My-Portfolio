import type { ProjectContent } from "./project.types";

const pages = Array.from({ length: 10 }, (_, i) => `/assets/dirbal-website/pages/page-${i + 1}.png`);

export const DIRBAL_PROJECT: ProjectContent = {
  id: "dirbal-website",
  year: "2025",
  completedAt: "2025",
  accent: "copper",
  featured: false,
  coverImage: "/assets/dirbal-website/brand/main-preview.png",
  brandImages: ["/assets/dirbal-website/brand/main-preview.png"],
  gallery: pages,
  tech: [
    "Next.js 15",
    "React 19",
    "TypeScript",
    "Tailwind CSS 4",
    "Embla Carousel",
    "next-themes",
    "JSON-LD SEO",
    "shadcn/ui",
  ],
  links: [],
  tags: ["solo", "frontend"],
  content: {
    en: {
      title: "Dirbal",
      category: "Editorial / Legal",
      headline: "Dirbal — Judicial & Cultural Arabic Content Site",
      cardDescription:
        "Dirbal is a premium Arabic RTL content website for judicial, legal, and cultural writing — curated articles, scholarly quotes, deep category browsing, search, bookmarks, and a biography experience.",
      overview:
        "موقع د. عياد دربال (Dirbal) is a public Arabic content website for judicial, legal, and cultural writing. It publishes curated articles, rotating scholarly quotes (قبسات), category-based browsing across judicial branches, full-text search, tags, bookmarks, and a biography page — a headless Next.js frontend consuming an external CMS with gold brand identity and Tajawal typography.",
      typeLabel: "Frontend development",
      teamLabel: "Solo project",
      features: [
        "Arabic-only RTL reading experience with gold brand accents and Basmala identity",
        "Homepage hero, قبسات carousel, curated picks, and latest articles",
        "Deep category / subcategory browsing with tabs, pagination, and in-list search",
        "Article workspace: body, tags, related topics, audio/PDF, share, comments, bookmark",
        "Client-side favorites archive without login",
        "SEO: metadata, Open Graph, JSON-LD Article / Organization / SearchAction",
        "Accessibility panel — font scale and light/dark theme",
      ],
      challenges: [
        "Headless content hierarchy — category → subcategory → article URL design",
        "Arabic RTL polish as native layout, not late LTR flip",
        "Public personalization without accounts via localStorage bookmarks",
        "SEO for a content-heavy judicial publishing brand",
        "Resilient homepage assembly with Promise.allSettled across CMS assets",
      ],
    },
    ar: {
      title: "دربال",
      category: "محتوى قضائي",
      headline: "موقع د. عياد دربال — مدونة قضائية قانونية ثقافية",
      cardDescription:
        "دربال موقع عربي RTL للمحتوى القضائي والقانوني والثقافي — مدونات منتقاة، قبسات، تصفح بالتصنيفات، بحث، مفضلة، وصفحة سيرة بهوية ذهبية.",
      overview:
        "موقع د. عياد دربال موقع محتوى عام بالعربية ينشر مدونات قضائية وقانونية وثقافية، مع قبسات علمية، وتصفح هرمي للتصنيفات، وبحث ووسوم ومفضلة، وتجربة قراءة فاخرة بخط تجوال وهوية ذهبية — واجهة Next.js أمام نظام محتوى خارجي.",
      typeLabel: "تطوير واجهات",
      teamLabel: "مشروع فردي",
      features: [
        "تجربة قراءة عربية RTL بهوية ذهبية والبَسملة",
        "الرئيسية: بطل، قبسات، مدونات منتقاة، أحدث الموضوعات",
        "تصفح تصنيفات/فرعية مع تبويب وترقيم وبحث داخل القائمة",
        "صفحة مقال: نص، وسوم، مرتبط، صوت/PDF، مشاركة، تعليقات، مفضلة",
        "أرشيف مفضلة محلي دون تسجيل",
        "SEO وبيانات منظمة JSON-LD",
        "لوحة وصولية لحجم الخط والثيم",
      ],
      challenges: [
        "تسلسل محتوى headless وتصميم مسارات URL",
        "RTL أصلي وليس انعكاساً لاحقاً",
        "تخصيص عام بلا حسابات",
        "SEO لموقع نشر قضائي",
        "تجميع الصفحة الرئيسية بمرونة عند فشل جزء من الـ CMS",
      ],
    },
    fr: {
      title: "Dirbal",
      category: "Éditorial / Droit",
      headline: "Dirbal — Site de contenu judiciaire arabe",
      cardDescription:
        "Dirbal est un site RTL arabe premium pour l'écriture judiciaire, juridique et culturelle — articles, citations, navigation par catégories, recherche et favoris.",
      overview:
        "Dirbal est un site public arabe pour contenus judiciaires et culturels : articles, قبسات, navigation hiérarchique, recherche, tags, favoris locaux — frontend Next.js headless avec identité or et typographie Tajawal.",
      typeLabel: "Développement frontend",
      teamLabel: "Projet solo",
      features: [
        "Lecture RTL arabe avec accents or et identité Basmala",
        "Home : hero, carousel قبسات, sélection et récents",
        "Navigation catégories / sous-catégories avec tabs et pagination",
        "Article : corps, tags, liés, audio/PDF, partage, commentaires, bookmark",
        "Archive favoris localStorage sans compte",
        "SEO metadata + JSON-LD",
        "Accessibilité : échelle de police et thème",
      ],
      challenges: [
        "Hiérarchie headless et URLs",
        "RTL natif",
        "Personnalisation sans comptes",
        "SEO pour marque éditoriale",
        "Homepage résiliente face aux échecs CMS partiels",
      ],
    },
  },
};

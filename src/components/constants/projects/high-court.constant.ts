import type { ProjectContent } from "./project.types";

export const HIGH_COURT_PROJECT: ProjectContent = {
  id: "high-court",
  year: "2025",
  completedAt: "2025",
  accent: "copper",
  coverImage: "/assets/high-court/brand/main-brand.png",
  videoUrl:
    "https://drive.google.com/file/d/1TnzxImBz_npq-3hMRAKPTCywiwz50mvR/preview",
  gallery: [
    "/assets/high-court/pages/page-1.png",
    "/assets/high-court/pages/page-2.png",
    "/assets/high-court/pages/page-3.png",
    "/assets/high-court/pages/page-4.png",
    "/assets/high-court/pages/page-5.png",
    "/assets/high-court/pages/page-6.png",
    "/assets/high-court/pages/page-7.png",
    "/assets/high-court/pages/page-8.png",
    "/assets/high-court/pages/page-9.png",
    "/assets/high-court/pages/page-10.png",
  ],
  tech: [
    "Next.js 15",
    "React 19",
    "TypeScript",
    "Tailwind CSS 4",
    "TanStack Query",
    "nuqs",
    "Zod",
    "React Hook Form",
    "Framer Motion",
    "Recharts",
    "EmbedPDF",
    "shadcn/ui",
  ],
  links: [
    {
      label: "alolya.gov.ly",
      href: "https://www.alolya.gov.ly/",
      kind: "live",
    },
  ],
  tags: ["team", "frontend"],
  content: {
    en: {
      title: "Libyan Supreme Court",
      category: "Government / Civic Tech",
      headline:
        "Libyan Supreme Court Portal — المحكمة العليا الليبية",
      cardDescription:
        "Public judicial portal for Libya’s Supreme Court — cassation inquiry, binding legal principles search, constitutional and cassation modules, digital library with RTL flipbook, and institutional transparency pages. Arabic-first, brand-faithful, built for litigants, lawyers, and researchers.",
      overview:
        "A production public website for المحكمة العليا الليبية (the Libyan Supreme Court) — the apex of Libya’s judiciary. The portal gives citizens, litigants, and legal professionals remote access to cassation jurisprudence, binding legal principles, constitutional chamber materials, court publications, appeal-case inquiry, performance indicators, and institutional information. It is a single Arabic-first institutional portal with rich content browsing, specialized legal search, PDF viewing/printing, and a digital library experience — wired to a content CMS and an inquiry API through a Next.js BFF.",
      typeLabel: "Frontend development",
      teamLabel: "Team project",
      features: [
        "Arabic RTL institutional portal with 30+ App Router screens and Court brand tokens (gold #e6c599, cream, Zain)",
        "Litigants portal: appeal inquiry with printable results, notices, publications, and admitted lawyers directory",
        "Legal principles platform with advanced Arabic search, orthography toggles, and URL-synced state via nuqs",
        "Constitutional chamber and cassation judiciary modules with tabbed research workspaces",
        "Supreme Court library with book search, detail pages, RTL flipbook, and EmbedPDF streaming viewer",
        "About-court ecosystem: counselors, general assembly, org chart, laws, news, and performance charts",
        "مجلدي client-side bookmarks across content types — no login wall",
        "Next.js BFF proxies for cases, lawyers, principles search, and same-origin PDF streaming",
      ],
      challenges: [
        "Arabic legal search as a product — include/exclude, sentence similarity, and orthography switches with shareable URL state",
        "Dual upstreams (CMS + inquiry API) cleaned through same-origin /api route handlers",
        "RTL + PDF + flipbook alignment with official Court print expectations",
        "Institutional design system consistency across 30+ routes without visual drift",
        "Deep personalization (مجلدي) without accounts, plus honest SEO boundaries for utility routes",
        "Turning inquiry performance stats into clear Recharts narratives for non-specialists",
      ],
    },
    ar: {
      title: "المحكمة العليا الليبية",
      category: "حكومي / تقني مدني",
      headline: "بوابة المحكمة العليا الليبية — alolya.gov.ly",
      cardDescription:
        "بوابة قضائية عامة للمحكمة العليا الليبية — استعلام عن الطعون، بحث المبادئ القانونية الملزمة، الدائرة الدستورية وقضاء النقض، مكتبة رقمية بقلب صفحات RTL، وصفحات شفافية مؤسسية. عربية أولاً، بهوية المحكمة، للمتقاضين والمحامين والباحثين.",
      overview:
        "موقع عام إنتاجي للمحكمة العليا الليبية — قمة هرم السلطة القضائية في ليبيا. تمنح البوابة المواطنين والمتقاضين والقانونيين وصولاً عن بُعد لاجتهادات النقض، والمبادئ الملزمة، ومواد الدائرة الدستورية، وإصدارات المحكمة، والاستعلام عن الطعون، ومؤشرات الأداء، والمعلومات المؤسسية. بوابة مؤسسية عربية أولاً مع تصفح محتوى غني، وبحث قانوني متخصص، وعرض وطباعة PDF، وتجربة مكتبة رقمية — مربوطة بنظام محتوى وواجهة استعلام عبر طبقة BFF في Next.js.",
      typeLabel: "تطوير واجهات",
      teamLabel: "مشروع فريق",
      features: [
        "بوابة عربية RTL بأكثر من 30 شاشة App Router وهوية ذهبية للمؤسسة (#e6c599، كريمي، خط زين)",
        "بوابة المتقاضين: استعلام عن طعن مع طباعة، معلومات مهمة، إصدارات، ودليل المحامين المقبولين",
        "منصة المبادئ القانونية ببحث عربي متقدم وخيارات إملاء وحالة URL عبر nuqs",
        "الدائرة الدستورية وقضاء النقض بواجهات تبويب للبحث",
        "مكتبة المحكمة العليا مع بحث الكتب وقلب صفحات RTL وعارض EmbedPDF",
        "التنظيم وشؤون المحكمة: مستشارون، جمعية عمومية، هيكل، قوانين، أخبار، ومؤشرات أداء",
        "مجلدي لإشارات مرجعية محلية دون تسجيل دخول",
        "وكلاء Next.js لطلبات القضايا والمحامين وبحث المبادئ وبث PDF من نفس الأصل",
      ],
      challenges: [
        "البحث القانوني العربي كمنتج — تضمين/استبعاد وتشابه الجمل وخيارات الإملاء مع حالة قابلة للمشاركة",
        "مصدران خلفيان (محتوى + استعلام) عبر مسارات /api من نفس الأصل",
        "محاذاة RTL مع PDF وقلب الصفحات وتوقعات الطباعة الرسمية",
        "ثبات نظام التصميم المؤسسي عبر أكثر من 30 مساراً",
        "تخصيص عميق (مجلدي) بلا حسابات مع حدود SEO واضحة للمسارات الخدمية",
        "تحويل إحصاءات الأداء إلى رسوم بيانية مفهومة لغير المتخصصين",
      ],
    },
    fr: {
      title: "Cour suprême libyenne",
      category: "Gouvernement / Civic tech",
      headline:
        "Portail de la Cour suprême libyenne — المحكمة العليا الليبية",
      cardDescription:
        "Portail judiciaire public de la Cour suprême de Libye — enquête de cassation, recherche de principes juridiques, modules constitutionnel et cassation, bibliothèque numérique avec flipbook RTL, et pages de transparence institutionnelle. Arabe d'abord, fidèle à la marque, pour justiciables, avocats et chercheurs.",
      overview:
        "Site public de production pour المحكمة العليا الليبية (Cour suprême de Libye) — sommet du pouvoir judiciaire. Le portail donne aux citoyens, justiciables et professionnels du droit un accès distant à la jurisprudence de cassation, aux principes contraignants, aux matériaux de la chambre constitutionnelle, aux publications, à l'enquête d'appel, aux indicateurs de performance et aux informations institutionnelles. Portail institutionnel arabe d'abord, avec recherche juridique spécialisée, PDF/impression et bibliothèque numérique — branché sur un CMS et une API d'enquête via un BFF Next.js.",
      typeLabel: "Développement frontend",
      teamLabel: "Projet d'équipe",
      features: [
        "Portail RTL arabe avec 30+ écrans App Router et tokens de marque (or #e6c599, crème, Zain)",
        "Portail justiciables : enquête d'appel imprimable, notices, publications et annuaire d'avocats admis",
        "Plateforme de principes avec recherche arabe avancée, orthographe et état URL via nuqs",
        "Modules chambre constitutionnelle et cassation avec espaces à onglets",
        "Bibliothèque : recherche de livres, flipbook RTL et viewer EmbedPDF en streaming",
        "Écosystème About : conseillers, assemblée générale, organigramme, lois, news et charts de performance",
        "Favoris مجلدي côté client — sans mur de login",
        "Proxies BFF Next.js pour dossiers, avocats, recherche de principes et streaming PDF same-origin",
      ],
      challenges: [
        "La recherche juridique arabe comme produit — include/exclude, similarité de phrases et orthographe avec état partageable",
        "Deux upstreams (CMS + inquiry) nettoyés via handlers /api same-origin",
        "Aligner RTL + PDF + flipbook avec les attentes d'impression officielles",
        "Cohérence du design system institutionnel sur 30+ routes",
        "Personnalisation profonde (مجلدي) sans comptes, avec limites SEO honnêtes",
        "Transformer les stats d'inquiry en récits Recharts clairs pour non-spécialistes",
      ],
    },
  },
};

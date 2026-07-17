import type { ProjectContent } from "./project.types";

export const ACWADY_PROJECT: ProjectContent = {
  id: "acwady",
  year: "2025",
  completedAt: "2025",
  accent: "info",
  coverImage: "/assets/acwady/main-preview.png",
  videoUrl: "https://www.youtube.com/watch?v=DucQwagcgXk",
  /** Drop screenshot paths here later — e.g. "/assets/acwady/01-homepage.png" */
  gallery: [],
  tech: [
    "Next.js 15",
    "React 19",
    "TypeScript",
    "Tailwind CSS 4",
    "next-intl",
    "next-auth",
    "TanStack Query",
    "Zustand",
    "Zod",
    "Chart.js",
    "Sentry",
  ],
  links: [
    {
      label: "acwady.com",
      href: "https://acwady.com",
      kind: "live",
    },
  ],
  tags: ["team", "fullStack"],
  content: {
    en: {
      title: "Acwady",
      category: "Digital Commerce",
      headline:
        "Acwady — Gulf Digital Gift Cards & Top-ups Platform",
      cardDescription:
        "Acwady is a Gulf digital store for gift cards and top-ups — gaming, iTunes, PlayStation, Steam, and more. Shoppers browse in Arabic or English, pay with local and international methods, and get codes instantly. Behind the shop, a full admin dashboard runs catalog, orders, suppliers, risk, rewards, and content.",
      overview:
        "Acwady is a bilingual (English / Arabic) digital gift-card and top-up e-commerce platform focused on Kuwait and the Arabian Gulf. Customers buy digital cards and services — gaming, iTunes, PlayStation, Steam, Roblox, PUBG, Google Play, Razer Gold, and more — pay online, and receive codes instantly. Behind the storefront sits a full admin operations dashboard to run catalog, suppliers and serials, orders, risk, rewards, marketing, CMS, and SEO across Gulf zones.",
      typeLabel: "Full-stack development",
      teamLabel: "Team project",
      features: [
        "Bilingual storefront (EN/AR) with RTL, regional zones, and multi-currency shopping",
        "Full commerce journey: catalog, cart, coupons, checkout, and digital code delivery",
        "Local and international payments including KNET, Visa, Mastercard, and wallet flows",
        "Role-based admin dashboard for products, categories, zones, users, and orders",
        "Digital inventory: supplier code-sources, nested products, and serial management",
        "Risk tools: login logs, blocklists, order limits, and trust controls",
        "Loyalty rewards, coupons, reviews, and messaging logs (email, WhatsApp, SMS)",
        "CMS and SEO managers for slideshows, FAQs, blogs, policies, and support pages",
      ],
      challenges: [
        "Running a multi-zone Gulf digital-goods business with fraud controls and code inventory",
        "Unifying customer commerce and operator tooling in one Next.js App Router codebase",
        "Building high-traffic admin modules — tables, filters, forms, and dialogs — that ops use daily",
        "Shipping reliable supplier/serial workflows with live refresh and soft-delete restore",
        "Keeping bilingual RTL UX, brand fidelity, and audit-driven quality across storefront and admin",
        "Wiring complex APIs into rewards, risk, marketing, records, and code-source surfaces",
        "Stabilizing production flows under real constraints: orders, codes, payments, and messaging",
      ],
    },
    ar: {
      title: "أكوادي",
      category: "تجارة رقمية",
      headline: "أكوادي — منصة بطاقات رقمية وشحن إلكتروني للخليج",
      cardDescription:
        "أكوادي متجر خليجي للبطاقات الرقمية وخدمات الشحن — ألعاب، آيتونز، بلاي ستيشن، ستيم وأكثر. العميل يتسوق بالعربي أو الإنجليزي، يدفع بطرق محلية ودولية، ويستلم الكود فورًا. وخلف المتجر لوحة تشغيل كاملة تدير المنتجات والطلبات والموردين والمخاطر والمكافآت والمحتوى.",
      overview:
        "أكوادي منصة تجارة إلكترونية ثنائية اللغة (عربي / إنجليزي) للبطاقات الرقمية وخدمات الشحن، تركز على الكويت والخليج. يشتري العملاء بطاقات وخدمات رقمية — ألعاب، آيتونز، بلاي ستيشن، ستيم، روبلوكس، ببجي، جوجل بلاي، ريزر جولد والمزيد — ويدفعون عبر الإنترنت ويستلمون الأكواد فورًا. خلف المتجر لوحة تشغيل كاملة تدير الكتالوج والموردين والأرقام التسلسلية والطلبات والمخاطر والمكافآت والتسويق والمحتوى وSEO عبر مناطق الخليج.",
      typeLabel: "تطوير متكامل",
      teamLabel: "مشروع فريق",
      features: [
        "واجهة متجر ثنائية اللغة مع دعم RTL والمناطق الإقليمية والعملات المتعددة",
        "رحلة شراء كاملة: كتالوج، سلة، كوبونات، دفع، وتسليم أكواد رقمية",
        "مدفوعات محلية ودولية تشمل كي نت وفيزا وماستركارد ومحافظ رقمية",
        "لوحة تحكم بصلاحيات للأدوار: منتجات، تصنيفات، مناطق، مستخدمون، وطلبات",
        "مخزون رقمي: مصادر الأكواد والموردين والمنتجات المتداخلة والأرقام التسلسلية",
        "أدوات مخاطر: سجلات الدخول، قوائم الحظر، حدود الطلبات، وضوابط الثقة",
        "مكافآت ولاء، كوبونات، تقييمات، وسجلات رسائل (بريد، واتساب، SMS)",
        "إدارة محتوى وSEO للشرائح والأسئلة والمدونات والسياسات وصفحات الدعم",
      ],
      challenges: [
        "تشغيل تجارة سلع رقمية متعددة المناطق مع ضوابط احتيال ومخزون أكواد",
        "توحيد متجر العملاء وأدوات التشغيل في قاعدة Next.js واحدة",
        "بناء وحدات لوحة تحكم عالية الاستخدام — جداول وفلاتر ونماذج — يعتمد عليها التشغيل يوميًا",
        "تسليم سير عمل الموردين والأرقام التسلسلية مع تحديث مباشر واستعادة من المهملات",
        "الحفاظ على تجربة RTL ثنائية اللغة وهوية العلامة وجودة التدقيق عبر المتجر واللوحة",
        "ربط واجهات برمجية معقدة بالمكافآت والمخاطر والتسويق والسجلات ومصادر الأكواد",
        "استقرار التدفقات الإنتاجية تحت قيود حقيقية: طلبات، أكواد، مدفوعات، ورسائل",
      ],
    },
    fr: {
      title: "Acwady",
      category: "Commerce digital",
      headline:
        "Acwady — Plateforme de cartes cadeaux et recharges pour le Golfe",
      cardDescription:
        "Acwady est une boutique du Golfe pour cartes cadeaux et recharges numériques — jeux, iTunes, PlayStation, Steam et plus. Le client shoppe en arabe ou en anglais, paie via des méthodes locales et internationales, et reçoit son code immédiatement. Derrière la boutique, un dashboard complet gère produits, commandes, fournisseurs, risque, récompenses et contenu.",
      overview:
        "Acwady est une plateforme e-commerce bilingue (anglais / arabe) de cartes cadeaux et recharges numériques, centrée sur le Koweït et le Golfe. Les clients achètent des cartes et services numériques — jeux, iTunes, PlayStation, Steam, Roblox, PUBG, Google Play, Razer Gold et plus — paient en ligne et reçoivent leurs codes instantanément. Derrière la vitrine, un tableau de bord d'opérations gère catalogue, fournisseurs et serials, commandes, risque, rewards, marketing, CMS et SEO sur les zones du Golfe.",
      typeLabel: "Développement full-stack",
      teamLabel: "Projet d'équipe",
      features: [
        "Vitrine bilingue (EN/AR) avec RTL, zones régionales et multi-devises",
        "Parcours commerce complet : catalogue, panier, coupons, checkout et livraison de codes",
        "Paiements locaux et internationaux : KNET, Visa, Mastercard et flux wallet",
        "Dashboard admin par rôles : produits, catégories, zones, utilisateurs et commandes",
        "Inventaire digital : sources de codes, catalogues imbriqués et gestion des serials",
        "Outils risque : logs de connexion, blocklists, limites de commandes et contrôles de confiance",
        "Fidélité, coupons, avis et logs messaging (email, WhatsApp, SMS)",
        "CMS et SEO pour slideshows, FAQ, blogs, politiques et pages support",
      ],
      challenges: [
        "Opérer un commerce multi-zones de biens numériques avec fraude et inventaire de codes",
        "Unifier commerce client et outillage ops dans une seule codebase Next.js",
        "Livrer des modules admin à fort usage — tables, filtres, formulaires — pour le quotidien ops",
        "Fiabiliser les workflows fournisseurs/serials avec refresh live et restauration soft-delete",
        "Maintenir UX RTL bilingue, fidélité de marque et qualité auditée sur vitrine et admin",
        "Brancher des APIs complexes sur rewards, risque, marketing, records et code-sources",
        "Stabiliser les flux production sous contraintes réelles : commandes, codes, paiements, messaging",
      ],
    },
  },
};

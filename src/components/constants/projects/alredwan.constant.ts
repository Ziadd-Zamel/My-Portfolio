import type { ProjectContent } from "./project.types";

const pages = Array.from({ length: 12 }, (_, i) => `/assets/alredwan/pages/page-${i + 1}.png`);

export const ALREDWAN_PROJECT: ProjectContent = {
  id: "alredwan",
  year: "2025",
  completedAt: "2025",
  accent: "copper",
  featured: false,
  coverImage: "/assets/alredwan/brand/main-preview.png",
  brandImages: [
    "/assets/alredwan/brand/main-preview.png",
    "/assets/alredwan/brand/sub-preview.png",
    "/assets/alredwan/brand/third-preview.png",
  ],
  gallery: pages,
  tech: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "NextAuth",
    "Django REST",
    "WebSocket",
    "QR Scanning",
    "shadcn/ui",
  ],
  links: [],
  tags: ["team", "frontend"],
  content: {
    en: {
      title: "Alredwan Oasis",
      category: "Education",
      headline: "واحة الرضوان — Mosque Educational Center Platform",
      cardDescription:
        "Alredwan Courses Center is a full-stack mosque education platform for Quran circles, language courses, and youth activities — serving visitors, students, parents, instructors, and admins with fingerprint and QR attendance.",
      overview:
        "واحة الرضوان التعليمية (Alredwan Courses Center) is a mosque educational center platform for Quran memorization circles, language courses, and youth activities. It serves visitors on a public landing site, students and parents with enrollment workflows, instructors with lecture and QR attendance tools, and admins with live fingerprint attendance, schedules, and exports — Arabic RTL-first with olive/beige brand identity.",
      typeLabel: "Frontend development",
      teamLabel: "Team project",
      features: [
        "Public RTL marketing site — hero, courses, instructors, testimonials, WhatsApp CTA",
        "Role-based dashboard for students, parents, instructors, supervisors, and admins",
        "Enrollment-request workflow instead of instant checkout",
        "Instructor lecture tools with QR ID-card scanning for student attendance",
        "Admin live fingerprint attendance board with WebSocket updates",
        "Parent–child management, season schedules, memories feed, and Excel/CSV export",
        "Olive/beige design system with Medad Platinum and El Messiri typography",
      ],
      challenges: [
        "RTL as a first-class constraint — leaf cards, nav, and tables designed RTL-native",
        "Five personas in one dashboard shell without five separate apps",
        "Realtime ops UI with WebSocket attendance boards",
        "Physical-world integrations — fingerprint devices and QR ID cards",
        "Enrollment as workflow with pending/processing states and season capacity",
      ],
    },
    ar: {
      title: "واحة الرضوان",
      category: "تعليم",
      headline: "واحة الرضوان التعليمية — منصة حلقات ومقررات",
      cardDescription:
        "واحة الرضوان منصة تعليمية لمراكز المساجد — حلقات قرآن ودورات لغات وأنشطة شبابية، تخدم الزوار والطلاب وأولياء الأمور والمدرسين والإدارة مع حضور بالبصمة وQR.",
      overview:
        "واحة الرضوان التعليمية منصة لإدارة حلقات تحفيظ القرآن والدورات اللغوية والأنشطة الشبابية. موقع عام للزوار، ولوحات للطالب وولي الأمر والمدرس والمشرف/المدير مع حضور بصمة مباشر وحضور محاضرات بـ QR — عربية وRTL بهوية زيتونية.",
      typeLabel: "تطوير واجهات",
      teamLabel: "مشروع فريق",
      features: [
        "موقع تسويقي RTL — بطل، دورات، مدرسون، شهادات، واتساب",
        "لوحة بصلاحيات للأدوار: طالب، ولي أمر، مدرس، مشرف، مدير",
        "سير طلبات التحاق بدل شراء فوري",
        "أدوات المحاضر مع مسح QR لحضور الطلاب",
        "لوحة حضور بصمة مباشرة عبر WebSocket",
        "إدارة الأبناء والجداول والذكريات وتصدير Excel/CSV",
      ],
      challenges: [
        "RTL كقيد أساسي وليس انعكاساً لاحقاً",
        "خمس شخصيات في لوحة واحدة",
        "واجهة تشغيل لحظية للحضور",
        "تكامل أجهزة البصمة وبطاقات QR",
        "الالتحاق كسير عمل بحالات معلقة ومعالجة",
      ],
    },
    fr: {
      title: "Alredwan Oasis",
      category: "Éducation",
      headline: "واحة الرضوان — Plateforme éducative de mosquée",
      cardDescription:
        "Alredwan est une plateforme éducative pour cercles Coran, cours de langues et activités jeunes — visiteurs, élèves, parents, instructeurs et admins, avec présence empreinte et QR.",
      overview:
        "واحة الرضوان التعليمية gère cercles de mémorisation, cours de langues et activités. Site public RTL, dashboards par rôle, enrollment workflow, présence instructeur QR et board admin empreinte en WebSocket.",
      typeLabel: "Développement frontend",
      teamLabel: "Projet d'équipe",
      features: [
        "Site marketing RTL — hero, cours, instructeurs, témoignages",
        "Dashboard multi-rôles : élève, parent, instructeur, admin",
        "Workflow demandes d'inscription",
        "Présence cours via scan QR",
        "Board empreinte live WebSocket",
        "Gestion enfants, plannings, souvenirs, export Excel/CSV",
      ],
      challenges: [
        "RTL first-class",
        "Cinq personas dans une seule coque",
        "UI ops temps réel",
        "Intégrations empreinte + QR",
        "Enrollment comme workflow, pas checkout",
      ],
    },
  },
};

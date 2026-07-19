import type { ProjectContent } from "./project.types";

const pages = Array.from({ length: 13 }, (_, i) => `/assets/ai-chat/pages/page-${i + 1}.png`);

export const AI_CHAT_PROJECT: ProjectContent = {
  id: "ai-chat",
  year: "2025",
  completedAt: "2025",
  accent: "brand",
  featured: false,
  coverImage: "/assets/ai-chat/brand/main.png",
  brandImages: [
    "/assets/ai-chat/brand/main.png",
    "/assets/ai-chat/brand/sub.png",
    "/assets/ai-chat/brand/third.png",
  ],
  gallery: pages,
  tech: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "next-intl",
    "next-auth",
    "TanStack Query",
    "Zod",
    "SSE Streaming",
    "TipTap",
  ],
  links: [
    {
      label: "tuwaiq-ia.com",
      href: "https://www.tuwaiq-ia.com",
      kind: "live",
    },
  ],
  tags: ["team", "frontend"],
  content: {
    en: {
      title: "Tuwaiq IA",
      category: "AI Platform",
      headline: "Tuwaiq Intelligent Assistant — AI Chat & Bot Builder",
      cardDescription:
        "Tuwaiq Intelligent Assistant is a bilingual AI platform with streaming chat, a website chatbot builder (QnA, Dynamic, Booking), and a light admin CMS for legal content — branded in-product as Tawan AI.",
      overview:
        "Tuwaiq Intelligent Assistant combines a public streaming chat experience with a chatbot builder for websites — three deployable app types (QnA / Chat Bot, Dynamic Chat, Booking) — plus marketing surfaces and a light Admin CMS for Privacy / Terms. Built for businesses that want embeddable AI, end users who want zero-setup chat, and admins who maintain bilingual legal content.",
      typeLabel: "Frontend development",
      teamLabel: "Team project",
      features: [
        "Public streaming chat with SSE, markdown bubbles, and deep-link via chatId",
        "Applications hub: QnA, Dynamic Chat, and Booking builders with create/manage flows",
        "Booking reservation setup — resources, schedules, and external provider fields",
        "Auth lifecycle: register, OTP verify, login, forgot/reset password",
        "Bilingual EN/AR with RTL, Inter / Zain typography, and mint brand system",
        "Admin RBAC gate plus TipTap bilingual Privacy/Terms CMS",
        "Marketing home with live preview cards and contact form",
      ],
      challenges: [
        "Streaming UX — mapping SSE chunks into immutable message state without flicker",
        "Three app types in one shell with clear schema boundaries",
        "Soft vs hard auth — public try-before-login chat with login-gated builders",
        "Bilingual RTL across marketing, chat, and forms",
        "Admin CMS living beside product UI with dual-language TipTap editors",
      ],
    },
    ar: {
      title: "توان AI",
      category: "منصة ذكاء اصطناعي",
      headline: "مساعد طويق الذكي — دردشة وبناء روبوتات",
      cardDescription:
        "مساعد طويق الذكي منصة ثنائية اللغة بدردشة بث مباشر، وبناء روبوتات للمواقع (أسئلة/دردشة ديناميكية/حجز)، ولوحة إدارة خفيفة للمحتوى القانوني — بهوية توان AI داخل المنتج.",
      overview:
        "يجمع مساعد طويق الذكي بين تجربة دردشة عامة ببث مباشر وبناء روبوتات للمواقع — ثلاثة أنواع تطبيقات (أسئلة وأجوبة، دردشة ديناميكية، حجز) — مع صفحات تسويقية ولوحة إدارة للمحتوى القانوني ثنائي اللغة.",
      typeLabel: "تطوير واجهات",
      teamLabel: "مشروع فريق",
      features: [
        "دردشة بث مباشر مع SSE وفقاعات Markdown وروابط عميقة",
        "مركز التطبيقات: أسئلة وأجوبة ودردشة ديناميكية وحجز",
        "إعداد حجوزات — موارد وجداول وحقول مزوّد خارجي",
        "دورة مصادقة: تسجيل، OTP، دخول، استعادة كلمة المرور",
        "عربي/إنجليزي مع RTL ونظام لوني نعناعي",
        "صلاحيات إدارة ومحرر TipTap ثنائي اللغة للخصوصية والشروط",
      ],
      challenges: [
        "تجربة البث — دمج أجزاء SSE في حالة رسائل مستقرة",
        "ثلاثة أنواع تطبيقات في واجهة واحدة",
        "موازنة الدردشة العامة مع أدوات البناء المحمية",
        "RTL ثنائي اللغة عبر التسويق والدردشة والنماذج",
      ],
    },
    fr: {
      title: "Tuwaiq IA",
      category: "Plateforme IA",
      headline: "Tuwaiq Intelligent Assistant — Chat IA & bot builder",
      cardDescription:
        "Tuwaiq Intelligent Assistant est une plateforme IA bilingue avec chat streaming, builder de chatbots (QnA, Dynamic, Booking) et CMS légal léger — marque in-product Tawan AI.",
      overview:
        "Tuwaiq Intelligent Assistant combine un chat public en streaming et un builder de chatbots pour sites — trois types d'apps (QnA, Dynamic, Booking) — plus marketing et CMS Admin pour Privacy / Terms bilingues.",
      typeLabel: "Développement frontend",
      teamLabel: "Projet d'équipe",
      features: [
        "Chat streaming SSE avec markdown et deep-link chatId",
        "Hub Applications : QnA, Dynamic Chat et Booking",
        "Config réservations — ressources, plages, provider externe",
        "Auth : register, OTP, login, reset password",
        "EN/AR + RTL et système mint brand",
        "RBAC admin + TipTap bilingue Privacy/Terms",
      ],
      challenges: [
        "UX streaming SSE sans flicker",
        "Trois types d'apps dans une même coque",
        "Auth soft vs hard pour chat public et builders",
        "RTL bilingue sur marketing, chat et formulaires",
      ],
    },
  },
};

# Tebbie (طبي) — Portfolio Project Description

> Healthcare platform for hospitals and medical service providers in Libya — clinic bookings, home visits, wallets, staff roles, and full platform administration.

---

## 1. Project Overview

**Tebbie** is a digital healthcare operations platform that connects hospitals, doctors, medical service providers, and patients. It covers in-clinic appointments, home-visit services (doctor / nursing / physiotherapy), payments and wallets, staff permissions, reviews, and refunds.

The product is delivered as **two React web applications** that talk to a shared backend API:

| App | Audience | Purpose |
|-----|----------|---------|
| **Tebbie Hospital** (`tebbie-hospital-`) | Hospital / medical-service staff | Day-to-day operations: clinics, doctors, bookings, home visits, wallet, employees |
| **Tebbie Admin** (`tebbie-admin`) | Platform administrators & customer service | Full platform control: hospitals, doctors, geo data, finance, reports, WhatsApp, chat, CMS |

**Brand identity**
- Name: **tibbi / Tebbie** (طبي)
- Primary colors: teal → green gradient `#33A9C7` → `#3AAB95` (logo greens `#41AF4B` → `#439ECF`)
- Accent: `#02A09B`
- Soft backgrounds: mint / sky radial washes (`#7ee9b0`, `#aee5ff`)
- Fonts: **Alexandria** + **Tajawal** (hospital); Almarai + i18n (admin)
- Currency shown in UI: **LD** (Libyan Dinar)

---

## 2. My Role on the Project

**Role:** Frontend Developer (React)

**Scope of work**
- Built and maintained the **Hospital operations dashboard** (mobile-first, RTL Arabic) end-to-end: routing, auth gates, permission-aware screens, booking/home-visit flows, wallet UI, employees & roles, services & slots.
- Contributed to / worked across the **Admin platform** surfaces: entity management, reports, wallets, notifications, and related ops tooling.
- Implemented **role-based access control (RBAC)** in the UI with permission wrappers so each hospital employee only sees what their role allows.
- Integrated **Firebase Cloud Messaging (FCM)** for foreground push notifications and WebView FCM token handling on login.
- Built data-heavy screens with **TanStack Query**, Formik + Yup forms, MUI date pickers, and **Excel export** (xlsx) for bookings, visits, and wallets.
- Designed and shipped **marketing / portfolio preview HTML** (`preview.html` + `preview-shots/`) matching real brand tokens, assets, and UI layouts for screenshots.

**Responsibilities in practice**
- Feature implementation from API contract → UI → edge cases (empty states, loaders, errors)
- Auth middleware (guest vs authenticated), token storage, logout
- Dual product modes: **hospital clinics** vs **medical-service packages**
- Responsive mobile shell (`max-w-md`) optimized for hospital staff on phones / WebViews
- Consistent branding (gradients, icons, logo, typography) across screens
- Permission-gated navigation and actions
- Export and reporting UX for operations teams

---

## 3. Problem We Solved

Hospitals and home-care providers were managing appointments, visit logistics, staff access, and money flows with fragmented tools (calls, paper, spreadsheets). Tebbie centralizes:

1. **Clinic appointments** — doctors, slots, attendance, reschedule
2. **Home visits** — doctor / nursing / physio, regions, pricing, live status
3. **Money** — wallets, transactions, Excel export, commissions (admin)
4. **People** — employees, roles, fine-grained permissions
5. **Platform ops** — multi-hospital admin, geo (states/cities/regions), CMS, WhatsApp, CS chat

---

## 4. Product Architecture (High Level)

```
┌─────────────────────┐     ┌─────────────────────┐
│  Tebbie Hospital    │     │   Tebbie Admin      │
│  (hospital staff)   │     │   (platform ops)    │
│  Vite + React 18    │     │   Vite + React 18   │
└─────────┬───────────┘     └─────────┬───────────┘
          │  Bearer JWT               │  Bearer JWT
          ▼                           ▼
     /hospital/v1/*              /dashboard/v1/*
          │                           │
          └────────────┬──────────────┘
                       ▼
              Shared Backend API
                       │
          ┌────────────┼────────────┐
          ▼            ▼            ▼
      Firebase      Wallets /    Chat / Maps
        FCM         Payments     WhatsApp
```

---

## 5. App A — Tebbie Hospital (Operations Dashboard)

### 5.1 Product personality
- **Mobile-first** web app (phone-width layout, bottom navigation)
- **Arabic RTL** UI (`dir="rtl"`, Alexandria / Tajawal)
- Two runtime modes after login:
  - **Hospital mode** — clinics / specializations, doctors, classic bookings
  - **Medical service mode** — packages, items, medical bookings & wallet

### 5.2 Authentication & security
- Login with email + password (`POST /hospital/login-hospital`)
- Optional **FCM token** from WebView cookie attached on login
- Stores: `authToken`, `hospital_id`, `role`, `permissions`, `is_medical_service`
- **AuthMiddleware** protects app routes; **GuestMiddleware** protects `/login`
- Token validation via backend `checkToken`
- Logout clears auth storage and returns to login
- **PermissionWrapper** gates pages/actions by permission name

### 5.3 Dashboard (Home)
- Gradient action chips:
  - Home visit pricing
  - Edit services
  - Home visit regions
- Grid of **clinic / specialization cards** with image, name, edit shortcut
- Medical-service mode shows a different dashboard (bookings, wallet, packages, items, reviews)

### 5.4 Specializations & clinics
- List and open a specialization
- Update specialization details
- Drill into **doctors** under a clinic
- Permission: `view-specializations` (and related)

### 5.5 Doctors
- Searchable doctor list per specialization
- Doctor profile card (image, name, status)
- **Doctor bookings** screen with date filters and attendance flows
- Confirm attendance / approve future bookings / cancel / reschedule
- WhatsApp contact affordances on booking cards where applicable

### 5.6 Bookings
- Global **Bookings** page (`get-booking-for-all`)
- Date range filters (MUI DatePicker + date-fns, Arabic locales)
- Search by patient / doctor
- Booking cards: doctor, patient, time, specialty, status, payment status
- Actions: confirm attendance, approve, cancel, reschedule, upload lab PDFs (medical flows)
- CSV / Excel-oriented export patterns for operations

### 5.7 Home visits
- Tabs: **Doctor / Nursing / Physio / All**
- Search visits
- Cards show patient, service type, city, phone, price (LD), status
- Statuses such as confirmed, on the way, completed, pending
- Linked pricing configuration and **regions** management (areas covered for home visits)
- Service edit for home-visit offerings
- Export visit datasets

### 5.8 Services & slots
- List hospital home-visit **services**
- Per service:
  - **View slots** — interval / slot management (add & update forms)
  - **View bookings** — bookings tied to that service
- Active / inactive service status

### 5.9 Wallet
- **New wallet** and **Old wallet** paths
- Balance header with Tebbie gradient card
- Transaction list (name, type, amount, date)
- Details drill-down
- **Export Excel** of transactions (`xlsx` + `file-saver`)
- Permission: `get-wallet-total`

### 5.10 Employees & roles (RBAC)
- Employees list (add / edit / delete) with permission checks
- **Add role** / **Add new role** pages
- Roles bound to granular **employee permissions**
- UI actions hidden or blocked when permission missing

### 5.11 Reviews & refunds
- Hospital **reviews** listing
- **Refunds** flow for booking-related refund handling

### 5.12 Notifications & settings
- In-app notifications center
- Firebase **foreground** notification setup on app boot
- Settings page for hospital-side configuration
- Search page for quick lookup

### 5.13 Medical-service module (alternate mode)
When `is_medical_service` is true:
- Medical bookings
- Medical wallet
- Medical packages
- Medical items
- Medical reviews  
Separate bottom navigation for this mode.

### 5.14 Hospital tech stack
- React 18, Vite 6, React Router 7
- TanStack Query, Formik, Yup
- Tailwind CSS, MUI 6, MUI X Date Pickers
- Framer Motion, Lucide / React Icons
- Firebase (Messaging + related SDKs)
- jwt-decode, js-cookie
- xlsx, file-saver
- date-fns, dayjs

---

## 6. App B — Tebbie Admin (Platform Control Plane)

### 6.1 Product personality
- Desktop-oriented admin console
- **i18n** via i18next (Arabic default, English available) with dynamic `dir`
- Fine-grained RBAC on almost every module
- Dual login: **Admin** (full app) vs **Customer service** (chat-only)

### 6.2 Dashboard & reports
Permission-gated widgets / reports, including:
- Today’s sales
- Hospitals overview
- States / cities coverage
- Cancelled bookings
- Home visits reports
- Users / doctors stats
- Hospital accounts & payments
- User wallets
- Financial charts (**Recharts**)

### 6.3 Hospitals management
- CRUD hospitals
- Soft delete (trash) + restore
- Hospital details, services reports
- **Google Maps** integration for hospital location
- Hospital wallet views

### 6.4 Doctors management
- Add / update / list doctors
- Trash / restore
- Doctor detail pages
- Commission-related views (with communication module)

### 6.5 Catalog & clinical structure
- Specializations
- Hospital services (main services + sub-services)
- Clinics / hospital employees
- Employee roles (admin-side)
- Platform **admins** CRUD

### 6.6 Geography
- States (incl. trashed)
- Cities (add / update / trash)
- Regions (add / update)
Supports multi-market / multi-city home-visit coverage.

### 6.7 Commerce & finance
- Coupons
- Recharge cards (add / list)
- **Tebbie wallet**
- **Hospital wallets**
- Tebbie communication / home-visit **commissions**
- Financial analytics page
- Excel exports across money modules

### 6.8 CMS & content
- Home sliders (add / update)
- Common questions (FAQ)
- Settings key/value
- Terms & conditions
- Request forms
- Refunds management

### 6.9 Engagement & support
- Send push **notifications** to users
- **WhatsApp** settings (`viewAnySettingWhatsapp`, international phone inputs)
- **Admin chat** + dedicated `/chat` route for customer service
- WebSocket-based chat (`wss` token for CS agents)
- Customer service agent CRUD

### 6.10 Home visit (platform side)
- Home visit services catalog
- Home visit reports & booking detail pages per hospital / service

### 6.11 Admin tech stack
- React 18, Vite 5, React Router 6
- TanStack Query (+ Redux Toolkit available)
- Tailwind, MUI 5, Data Grid, Date Pickers
- i18next / react-i18next
- Firebase Messaging
- Google Maps API, Leaflet (deps)
- Recharts, SweetAlert2, React Toastify
- xlsx, Framer Motion, Formik + Yup
- International phone inputs

---

## 7. Cross-Cutting Features (Both Apps)

| Feature | Description |
|---------|-------------|
| **JWT auth** | Bearer token in localStorage; middleware-protected routes |
| **RBAC** | Permission names drive route access and UI affordances |
| **FCM push** | Login registration + foreground handling |
| **Excel export** | Operational downloads for bookings, visits, wallets, reports |
| **Brand system** | Shared teal/green gradient language and Tebbie logo |
| **Forms validation** | Formik + Yup across login and CRUD |
| **Async data** | TanStack Query for caching, loading, refetch |
| **Motion** | Framer Motion for modal / UI transitions |
| **Date tooling** | MUI X Date Pickers + date-fns / dayjs |

---

## 8. Feature Matrix (Portfolio Snapshot)

### Hospital app — feature checklist
- [x] Login + guest/auth middleware  
- [x] Dashboard with clinics grid  
- [x] Specializations CRUD / update  
- [x] Doctors list + doctor bookings  
- [x] Global bookings + filters + search  
- [x] Attendance confirm / approve / cancel / reschedule  
- [x] Home visits (multi-type tabs)  
- [x] Home visit pricing  
- [x] Home visit regions  
- [x] Services + slots + service bookings  
- [x] Old / new wallet + details + Excel export  
- [x] Employees CRUD  
- [x] Roles & permissions  
- [x] Reviews  
- [x] Refunds  
- [x] Notifications (in-app + FCM)  
- [x] Settings  
- [x] Medical-service mode (bookings, wallet, packages, items, reviews)  
- [x] Permission-gated navigation  

### Admin app — feature checklist
- [x] Dual login (admin / customer service)  
- [x] Dashboard reports & charts  
- [x] Hospitals (+ trash/restore, map)  
- [x] Doctors (+ trash/restore)  
- [x] Specializations  
- [x] Hospital services (main / sub)  
- [x] Clinics & employee roles  
- [x] Admins management  
- [x] States / cities / regions  
- [x] Coupons & recharge cards  
- [x] Tebbie + hospital wallets  
- [x] Commissions / communication  
- [x] Financial analytics  
- [x] Sliders, FAQ, settings, terms  
- [x] Request forms & refunds  
- [x] Push notifications  
- [x] WhatsApp settings  
- [x] Customer service chat (WebSocket)  
- [x] Home visit services & reports  
- [x] i18n Arabic / English  
- [x] Excel exports  

---

## 9. UX & Design Notes

- Hospital UI is intentionally **phone-shaped** for staff using handheld devices / in-app WebViews.
- Bottom nav highlights the active section with the brand gradient.
- Status pills communicate booking / visit state at a glance (Confirmed, Pending, Paid, On the way, etc.).
- Soft radial backgrounds reinforce a calm healthcare aesthetic without heavy illustration.
- Admin UI prioritizes tables, filters, maps, and charts for high-volume operations.

---

## 10. Challenges & What I Learned

1. **Dual product modes** — one codebase serving hospital clinics and medical-service providers with different dashboards and nav trees.
2. **Permission-first UI** — designing screens that remain usable when many actions are hidden by RBAC.
3. **Ops-grade booking flows** — attendance rules differ for “today” vs future dates; reschedule and lab-file upload add complexity.
4. **Home-visit logistics** — regions + pricing + multi-profession types need clear filters and status clarity.
5. **Realtime + push** — FCM in WebViews and CS chat over WebSockets require careful token lifecycle handling.
6. **RTL + bilingual admin** — layout direction and copy must stay consistent when switching languages.
7. **Exportability** — turning live API lists into Excel without blocking the UI.

---

## 11. Impact (How to Phrase Results)

Use / adapt these bullets with real metrics when you have them:

- Gave hospital staff a **single mobile dashboard** for clinics, home visits, and wallets instead of scattered tools.
- Reduced booking mishandling with **explicit attendance / approve / cancel / reschedule** actions.
- Enabled **role-based staffing** so reception, finance, and management see only their modules.
- Supported **home-care expansion** via regions, pricing, and multi-service visit types.
- Equipped platform admins with **multi-hospital control**, finance reports, and CS chat / WhatsApp ops.

---

## 12. Short Portfolio Blurb (Copy-Paste)

**Tebbie** is a healthcare operations platform for Libyan hospitals and medical providers. I worked as a **Frontend Developer** on the Hospital React app (mobile-first, Arabic RTL) and related Admin surfaces — implementing clinic & doctor management, booking workflows, home visits, wallets with Excel export, employee roles & permissions, Firebase push notifications, and a dual hospital / medical-service mode. Stack: React, Vite, TanStack Query, Tailwind, MUI, Formik, Firebase FCM.

---

## 13. Medium Portfolio Case Study (Copy-Paste)

### Tebbie — Hospital & Platform Operations

**Role:** Frontend Developer  
**Type:** Healthcare SaaS (Hospital dashboard + Admin console)  
**Stack:** React 18, Vite, React Router, TanStack Query, Tailwind CSS, Material UI, Formik/Yup, Firebase Cloud Messaging, xlsx

**Overview**  
Tebbie helps hospitals run clinics and home-visit services while a central admin console manages the whole marketplace — providers, geography, finance, content, and support.

**What I built**  
On the hospital side, I implemented the authenticated mobile shell, permission-aware routing, dashboard of specializations, doctor and booking management (including attendance and reschedule), home-visit tabs with pricing/regions, wallet balances and transaction export, and employee/role administration. The app supports a second “medical service” mode with packages and items. On the platform side, I worked with admin modules spanning hospitals, doctors, reports, wallets, notifications, and support tooling.

**Outcome**  
A cohesive teal-branded product language, operational screens that staff can use on phones, and a permission model that scales from a single receptionist to full hospital management.

---

## 14. Long-Form “Every Feature” Narrative (Portfolio Page Body)

Tebbie is not a simple booking widget — it is an **operations system**.

A hospital employee logs into the Hospital app, lands on a dashboard of clinics, and can jump into pricing for home visits, edit services, or manage service regions. From the bottom navigation they reach bookings with date filters and search; each card surfaces the doctor, patient, schedule, and payment state, with actions to confirm attendance, approve upcoming visits, cancel, or reschedule. Home visits are split by profession — doctor, nursing, physiotherapy — so dispatch and follow-up stay organized. Money sits in a dedicated wallet module with totals, transaction history, details pages, and one-click Excel export for accounting.

Behind the scenes, not everyone can do everything. Employees are assigned roles; roles carry permissions. The UI wraps sensitive routes so unauthorized staff never open wallets or employee management. Push notifications keep teams aware through Firebase Messaging, including WebView token support for embedded hospital apps.

Medical-service providers see a parallel product: packages, items, medical bookings, and their own wallet and reviews — same brand, different operational model.

On the Admin console, platform operators oversee every hospital and doctor, soft-delete and restore records, place hospitals on a map, configure states/cities/regions, run coupons and recharge cards, inspect Tebbie and hospital wallets, track commissions, and read financial charts. Content teams manage sliders, FAQs, terms, and settings. Growth and support teams send push notifications, configure WhatsApp, and chat with users in a dedicated customer-service mode.

Together, the two apps form a full loop: **care delivery on the ground**, **platform governance at the center**.

---

## 15. Suggested Portfolio Tags

`React` `Vite` `TanStack Query` `Tailwind CSS` `Material UI` `Formik` `Yup` `Firebase` `FCM` `RBAC` `RTL` `i18n` `Healthcare` `SaaS` `Excel Export` `WebSockets` `Google Maps` `Framer Motion`

---

## 16. Suggested Screenshots (from `preview-shots/`)

| File | Use as |
|------|--------|
| `preview.html` | Hero / branding device mock |
| `01-homepage-showcase.html` | Product overview (marketing) |
| `03-home-visits.html` | Capability — home care |
| `05-wallet-capability.html` | Capability — finance |
| `06-brand-splash.html` | Brand splash |
| `02-dashboard.html` | App screen — dashboard |
| `04-bookings.html` | App screen — bookings |
| `07-home-visit.html` | App screen — home visits |
| `08-wallet.html` | App screen — wallet |
| `09-doctors.html` | App screen — doctors |
| `10-services.html` | App screen — services |

---

## 17. Repo Structure (for context)

```
tebbi/
├── tebbie-hospital-/     # Hospital / medical-service ops app
├── tebbie-admin/         # Platform admin + CS chat
├── preview.html          # Marketing preview (1280×720)
└── preview-shots/        # Screenshot HTML set
```

---

*This document is written for portfolio / case-study use. Replace placeholder impact metrics with real numbers (users, hospitals, booking volume, time saved) when available. Adjust the “My Role” section if your official title or ownership split differs.*

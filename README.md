# Yesupadam Infra Projects

A production-ready marketing website for **Yesupadam Infra Projects**, an infrastructure and civil works company established in 2011 and operating out of Hyderabad, Telangana. The site presents the company's services, leadership, and client portfolio through a modern, responsive, motion-driven interface built on the Next.js App Router.

---

## Overview

The website serves as the company's primary digital presence. It introduces the business, details the range of civil and infrastructure services offered, showcases the organizations the company has worked with, and gives prospective clients a direct way to get in touch.

Yesupadam Infra Projects delivers civil, infrastructure, construction, maintenance, road, electrical, plumbing, HVAC, painting, and drain line solutions for residential, corporate, commercial, industrial, and institutional projects.

The site is a front-end presentation layer: all content is defined in the codebase, and inquiries are directed to the company's published phone numbers and email address.

---

## Services

The company's service catalogue is represented consistently across the home page, the Services page, the footer, and the contact form's service selector.

| # | Service | Scope |
|---|---------|-------|
| 01 | IT Facility Maintenance Works | Building maintenance, corporate facility maintenance, repair and preventive maintenance |
| 02 | Road Works | Road construction and development, road maintenance and repair, surface preparation and finishing |
| 03 | Civil Works | Building and structural works, concrete and masonry works, general civil construction |
| 04 | Electrical Works | Electrical installation, maintenance and repair, electrical infrastructure works |
| 05 | Plumbing Works | Water supply systems, plumbing installation and repair, maintenance and pipeline works |
| 06 | HVAC Works | HVAC installation, maintenance and servicing, building ventilation solutions |
| 07 | Painting Works | Interior and exterior painting, surface preparation, professional finishing works |
| 08 | Drain Line Works | Drain line installation, pipeline and drainage works, repair and maintenance |

> The home page grid labels the maintenance offering as **Maintenance Works**; the Services page and contact form present the same offering as **IT Facility Maintenance Works / Maintenance Works**.

---

## Features

### Layout & Navigation
- Sticky, blurred responsive Navbar with brand logo, desktop links, and a prominent call-to-action.
- Collapsible mobile menu with animated height/opacity transitions and staggered link entry.
- Responsive four-column footer with quick links, service list, contact details, client strip, and back-to-top control.
- Active-page-free simple navigation across Home, About Us, Services, Clients, and Contact Us.
- Brand and footer logo clicks scroll smoothly to the top when already on the home page.

### Pages & Content
- Full-screen video hero on the home page with layered gradient overlays and a scroll indicator.
- About section with company philosophy, leadership, and four value pillars.
- Home page service grid covering eight services with hover imagery and per-service inquiry links.
- Dedicated Services page with alternating image/content layouts, per-service bullet points, and inquiry links.
- Dedicated Clients page with client logo cards, a client-first introduction, and three partnership values.
- Dedicated About page with hero, company story, leadership profiles, approach highlights, and a client strip.
- Contact page combining company details with a structured project inquiry form.
- Custom branded 404 / Not Found page with recovery links.

### Interface & Motion
- Framer Motion entrance animations on hero content and staggered list items.
- Scroll-triggered reveal animations (`whileInView`, `once: true`) across all major sections.
- Hover interactions: image zoom, card lift, border/shadow transitions, arrow translation, and growing accent rules.
- Animated mobile menu mounting/unmounting via `AnimatePresence`.
- Looping scroll indicator animation in the hero.
- Reduced-motion support through `MotionConfig reducedMotion="user"` and a `prefers-reduced-motion` CSS rule that disables smooth scrolling.
- Native smooth scrolling site-wide with a fixed scroll offset for the sticky header.

### Rendering & Delivery
- Next.js App Router with server-rendered route shells and client components for interactive sections.
- Automatic image optimization through `next/image` for all local photography and logos.
- Responsive `sizes` attributes on full-bleed and grid imagery.
- Priority loading for above-the-fold hero imagery and the navbar logo.
- Self-hosted font loading via `next/font` (Geist and Geist Mono).
- Metadata-driven SEO configuration applied at the root layout.
- Fluid `dvh`-based hero and page heights that adapt to mobile browser chrome.
- React Compiler enabled through the Next.js configuration.

---

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Video hero, company philosophy, eight-service grid, and contact call-to-action |
| `/about` | About Us | Company hero, story, leadership profiles, approach highlights, and client strip |
| `/services` | Services | Service hero plus eight detailed service sections and a closing call-to-action |
| `/clients` | Clients | Client hero, partnership introduction, six client logo cards, and partnership values |
| `/contact` | Contact Us | Office address, phone numbers, email, and project inquiry form |
| `*` | Not Found | Custom 404 page with links back to the home page and contact page |

---

## Clients

Client logos are stored in `public/images/clients/` and rendered on the Clients page; client names also appear on the About page and in the footer's trusted-by strip.

| Client | Logo file |
|--------|-----------|
| Wipro | `wipro.webp` |
| ISB | `isb.webp` |
| LTI Mindtree | `lti-mindtree.webp` |
| Franklin Templeton | `franklin-templeton.webp` |
| Netlec | `netlec.webp` |
| Bluspring | `bluspring.webp` |

---

## Technology Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 (App Router) |
| UI Runtime | React 19, React DOM 19 |
| Language | JavaScript (JSX) |
| Styling | Tailwind CSS 4 with the Turbopack Tailwind loader |
| Animation | Framer Motion |
| Icons | Lucide React, React Icons (`react-icons/fi`) |
| Imaging | `next/image` with local JPG, PNG, and WebP assets |
| Typography | `next/font` (Geist, Geist Mono) |
| Components | React Compiler (`babel-plugin-react-compiler`) |
| Linting | ESLint 9 with `eslint-config-next` core web vitals |

---

## Project Structure

```text
project/
├── public/
│   ├── images/
│   │   ├── clients/            # Client logos (WebP)
│   │   ├── services/           # Service photography
│   │   ├── about-infra.jpg
│   │   ├── client-meeting.jpg
│   │   ├── clients-hero.jpg
│   │   └── ...                 # Section and category imagery
│   ├── logo/
│   │   └── yp-logo.png         # Company logo
│   ├── videos/
│   │   └── yp-infra-hero.mp4   # Home page hero video
│   └── staffarc-logo.avif      # Footer credit logo
├── src/
│   ├── app/
│   │   ├── about/page.jsx
│   │   ├── clients/page.jsx
│   │   ├── contact/page.jsx
│   │   ├── services/page.jsx
│   │   ├── layout.js           # Root layout, fonts, metadata
│   │   ├── page.js             # Home page composition
│   │   ├── not-found.jsx       # Custom 404
│   │   ├── globals.css
│   │   └── icon.png
│   └── components/
│       ├── common/
│       │   └── DevelopedByStaffArc.jsx
│       ├── home/
│       │   ├── Hero.jsx
│       │   ├── About.jsx
│       │   ├── Services.jsx
│       │   └── CTA.jsx
│       └── layout/
│           ├── Navbar.jsx
│           └── Footer.jsx
├── eslint.config.mjs
├── jsconfig.json                # `@/*` path alias to `src/*`
├── next.config.mjs
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js 20 LTS or newer
- npm (a `package-lock.json` is committed)

### 1. Clone the project

```bash
git clone <repository-url>
cd <project-folder>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

### 4. Open the website

```text
http://localhost:3000
```

The development server uses Turbopack and reloads automatically as files change.

---

## Available Scripts

| Script | Command | Purpose |
|--------|---------|---------|
| Development | `npm run dev` | Starts the Next.js development server |
| Build | `npm run build` | Creates an optimized production build |
| Start | `npm run start` | Serves the production build |
| Lint | `npm run lint` | Runs ESLint across the project |

---

## Environment Variables

**No environment variables are currently required.** The project contains no `.env` files, no API keys, and no third-party service integrations. All content, assets, and contact details are defined statically in the codebase.

If a form backend, analytics provider, or hosted media service is added later, document its variables here and keep secrets out of version control.

---

## Design & Branding

The visual identity pairs a deep navy base with bright blue accents and a yellow highlight, using white and near-white surfaces for content sections. Typography combines the Geist Sans family for body copy with bold, tight tracking for headings, plus a serif treatment in the home philosophy section.

| Token | Color | Usage |
|-------|-------|-------|
| Navy | `#012F7B` | Primary brand color, headers, footers, dark sections |
| Blue | `#0151AD` | Hover states and secondary emphasis |
| Bright Blue | `#0182DE` | Accents, icons, decorative glows |
| Cyan | `#00B6FD` | Highlights, footer icons, hero accents |
| Yellow | `#F6BB03` | Primary accent, buttons, rules, calls-to-action |
| Background | `#F8FAFC` | Alternate light section backgrounds |
| Text | `#0F172A` | Primary body and heading text |

A muted gold (`#C9A84E` / `#C99D20`) is also used for eyebrow labels and accent lines on the home and contact pages.

---

## Responsive Design

The interface is built mobile-first with Tailwind breakpoints covering small phones through wide desktop displays:

- **Mobile** — single-column layouts, stacked hero actions, hamburger navigation, and full-width cards.
- **Tablet** — two-column service and highlight grids, wider content margins.
- **Laptop** — desktop navigation appears at the `lg` breakpoint alongside the header call-to-action.
- **Desktop** — multi-column grids, alternating service layouts, and four-column footer.
- **Large / wide screens** — content constrained to a `max-w-7xl` container with generous gutters.

Responsive details include fluid `dvh` hero heights, adaptive typography scales, `sizes` attributes on responsive imagery, and layouts that reflow rather than overflow. Decorative glows and large background letterforms are clipped by `overflow-hidden` wrappers.

---

## Animations & Interactions

| Interaction | Implementation |
|-------------|----------------|
| Scroll reveal | Framer Motion `whileInView` with `once: true` across sections |
| Hero entrance | Staggered fade and vertical offsets on badge, heading, copy, actions, and highlights |
| Card stagger | Index-based transition delays in service, client, leadership, and value grids |
| Mobile menu | `AnimatePresence` with animated height and opacity, plus per-link stagger |
| Hover image zoom | `group-hover:scale-105` with long duration transitions on service and client imagery |
| Card hover | Lift, border color shift, and shadow increase on client, value, and highlight cards |
| Button feedback | Background, shadow, and arrow translation transitions on all primary actions |
| Accent rules | Growing gold underline on service cards and nav links |
| Scroll indicator | Looping vertical motion on the hero scroll cue |
| Smooth scrolling | Native `scroll-behavior: smooth` with `scroll-padding-top` and in-page scroll-to-top |
| Reduced motion | `MotionConfig reducedMotion="user"` plus a `prefers-reduced-motion` override for smooth scroll |

---

## Contact & Communication

The Contact page and footer publish the company's direct channels:

- **Office** — EWSH 305, 306, Road No. 3, KPHB Phase 2, Hyderabad, Telangana, with a Google Maps directions link.
- **Phone** — `+91 89788 14567` and `+91 98878 71313`, both as tappable `tel:` links.
- **Email** — `civil@yesupadaminfradevelop.com` as a `mailto:` link.

The Contact page also includes a **Project Inquiry form** with fields for name, contact number, email address, service required (all eight services plus "Other"), and project details.

> **Implementation note:** the form is currently a presentation-only interface — it has no submit handler, no API route, and no third-party submission service. Submitting the form does not send a message. Inquiries are handled through the published phone numbers, email address, or in-person office contact until a form backend is connected.

There is no WhatsApp integration in the current codebase.

---

## SEO

Search engine configuration is defined once in the root layout (`src/app/layout.js`) and applies site-wide:

- **Title template** — `%s | Yesupadam Infra Projects`, with a default site title.
- **Description** — a single company summary describing the full service range and target project types.
- **Keywords** — company name, all service categories, and Hyderabad / Telangana location terms.
- **Authorship** — author, creator, and publisher set to the company name.
- **`metadataBase`** — configured for the production deployment domain; update it if the site is deployed elsewhere.
- **Open Graph** — title, description, site name, `website` type, and `en_IN` locale.
- **Twitter / X** — `summary_large_image` card with title and description.
- **Robots** — `index: true`, `follow: true`.
- **Document language** — `<html lang="en">` with smooth scroll behavior declared.

Individual pages do not export their own `metadata`; titles and descriptions are inherited from the shared root configuration.

---

## Performance

- **Next.js Image optimization** for every photograph, logo, and client mark, served through the built-in image pipeline.
- **Responsive `sizes` attributes** on full-bleed heroes, grid tiles, client logos, and content imagery so the browser downloads an appropriately sized variant.
- **Priority loading** for above-the-fold hero images and the navbar logo; all other images load lazily by default.
- **Local assets only** — no external image hosts, so no remote pattern configuration is required.
- **WebP client logos** to keep the client grid lightweight.
- **Static generation** of all routes at build time, with client components limited to interactive and animated sections.
- **Optimized font delivery** through `next/font`, which self-hosts Geist and Geist Mono with no external font requests.
- **React Compiler** enabled in `next.config.mjs` to reduce unnecessary re-renders.
- **Lightweight icon imports** from Lucide React and React Icons rather than full icon bundles.

---

## Accessibility

- Descriptive `alt` text on all content images, logos, and the footer credit mark.
- `aria-label` on the brand link, mobile menu toggle, and back-to-top button.
- `aria-expanded` reflecting the open/closed state of the mobile menu.
- Every form control has an associated `<label>` via `htmlFor`/`id`.
- Semantic structure using `header`, `nav`, `main`, `section`, `article`, and `footer` elements.
- Single `h1` per page with a logical heading hierarchy beneath it.
- Keyboard-accessible navigation, buttons, and links with visible hover and focus styling.
- `lang="en"` on the document root and a `prefers-reduced-motion` fallback for users who disable animation.

---

## Deployment

The project is a standard Next.js application and can be deployed to any Node.js-capable host. Vercel is the natural fit and matches the configured production domain.

**Build and run locally:**

```bash
npm run build
npm run start
```

**Deploying to Vercel:**

1. Import the project into Vercel.
2. Keep the detected framework preset as Next.js — the default build command (`npm run build`) and output settings apply as-is.
3. No environment variables need to be configured.
4. After the first deployment, update `metadataBase` in `src/app/layout.js` to the final production URL so Open Graph and Twitter URLs resolve correctly.

Any platform that supports Node.js long-running servers (for example a container, VPS, or managed Next.js host) can run the production build with `npm run start`.

---

## Maintenance

### Adding a service
A service is represented in four places. Update all of them to keep the site consistent:

1. `src/components/home/Services.jsx` — the home page grid entry (number, title, image).
2. `src/app/services/page.jsx` — the full entry with description, icon, and bullet points.
3. `src/components/layout/Footer.jsx` — the footer services list.
4. `src/app/contact/page.jsx` — the "Service Required" select options.

Add the corresponding image to `public/images/services/`.

### Adding a client
- Add the logo to `public/images/clients/`.
- Add a `{ name, logo }` entry to the `clients` array in `src/app/clients/page.jsx`.
- Add the client name to the list in `src/app/about/page.jsx` and the trusted-by strip in `src/components/layout/Footer.jsx`.

### Updating images
All public assets live under `public/`. Replace a file in place using the same path to avoid code changes, or update the path where the image is referenced. Service and client imagery is referenced through local paths inside the relevant component arrays.

### Updating company information
Company copy, leadership names, and highlight cards are defined in the page and section components:

- Home philosophy and leadership — `src/components/home/About.jsx`
- About page story, leadership, and highlights — `src/app/about/page.jsx`
- Footer summary and copyright — `src/components/layout/Footer.jsx`
- Site title, description, and keywords — `src/app/layout.js`

### Modifying navigation
Navigation is defined in two arrays:

- `navLinks` in `src/components/layout/Navbar.jsx`
- `quickLinks` in `src/components/layout/Footer.jsx`

Add a route entry and create the matching folder under `src/app/` with a `page.jsx` file.

### Updating contact information
Address, phone numbers, and email appear in both `src/app/contact/page.jsx` and `src/components/layout/Footer.jsx`. The Google Maps link is constructed from the address query string in both files, so update it whenever the office location changes.

---

## License

> No license has been specified for this project.

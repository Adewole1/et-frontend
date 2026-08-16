# Portfolio redesign — living design doc

> **Status:** Preview v2 · full-screen sections (Shinya-style scroll)  
> **Preview:** open [`index.html`](index.html) in a browser  
> **Mockups:** `design-preview-*.png` in this folder (static references; live UI in `index.html`)

This document grows as we decide things. Add dated notes under [Changelog](#changelog).

---

## Product intent

| | |
|---|---|
| **Who** | Emmanuel Tobiloba — data analyst, project manager, operations |
| **Goal** | Personal brand site: work, **Insights** (blog), contact, admin |
| **Tone** | Professional but creative; data-themed abstracts; **not** a dev-resume template |
| **Photos** | **Two** — hero (`GMAN.png`) with chart overlay; about (`about-hero.jpg`) only in About |

---

## Approved direction (v2)

- [x] Full-bleed hero: portrait **+** teal data charts (not solo full-screen photo)
- [x] Accent **slate teal** `#3d6b8c` — avoid Substack-style orange
- [x] Blog label: **INSIGHTS** (keep)
- [x] Custom cursor: dot + lagging ring (see preview)
- [x] Sparse **data/number** abstract SVGs in margins
- [x] **Full-viewport sections** on home (scroll-snap, one “chapter” per screen)
- [x] **Day / night theme toggle** (light default, dark mode, `localStorage` + system preference)
- [ ] Page transitions between routes (TBD — Swup / View Transitions)
- [x] Keep **Django** as the backend (unchanged); implement the frontend in **Next.js** (replaces CRA only) — see [`NEXTJS_REFACTOR_NOTES.md`](NEXTJS_REFACTOR_NOTES.md)

---

## Home — scroll sections

Each panel = **100vh** (`scroll-snap`). Order:

| # | ID | Panel | Background |
|---|-----|--------|------------|
| 1 | `hero` | Headline, type roles, portrait + charts | `#0a0a0a` |
| 2 | `impact` | KPI metrics (4-up) | `#f4f2ee` |
| 3 | `work` | Selected work cards | `#e8e6e1` |
| 4 | `about` | Photo + bio | `#fafafa` |
| 5 | `contact` | Email, social, CTA | `#0a0a0a` |

**Nav:** fixed top bar + right **section dots** (updates on scroll).

---

## Insights (blog index)

| # | Panel | Notes |
|---|--------|------|
| 1 | Intro | `INSIGHTS` label + H1 + filters |
| 2 | Featured | Large featured post + trending sidebar |
| 3 | Grid | Post cards (paginated in app) |

Article page: **normal scroll** (long read); optional ghost metric gutter on desktop.

---

## Auth & admin (preview)

Maps to current CRA routes (`/blogPosts/account/Login`, etc.).

| Preview tab | Mockup | Route (current) | Fields / actions |
|-------------|--------|-----------------|------------------|
| Sign in | `design-preview-signin.png` | `/blogPosts/account/Login` | Username, password → JWT |
| Sign up | — (HTML only) | `/blogPosts/account/Register` | Name, username, email, password ×2 |
| New post | `design-preview-new-post.png` | `/blogPosts/new` | Title, backdrop, rich editor |
| Project | `design-preview-new-project.png` | `/blogPosts/project/new` | Title, link, thumbnail |
| Newsletter | `design-preview-new-mail.png` | `/blogPosts/mail/new` | Subject, HTML body |
| Email templates | `design-preview-email-templates.png` | TBD | Reusable mail layouts |
| Admin dashboard | `design-preview-admin-dashboard.png` | TBD | KPIs, activity, quick actions |

Shared **admin nav**: Insights link, admin badge, theme toggle, cross-links between editor screens.

---

## Design tokens

Set on `html[data-theme="light"]` and `html[data-theme="dark"]`.

| Token | Light | Dark |
|-------|-------|------|
| `--ink` | `#0a0a0a` | `#ececea` |
| `--paper` | `#f4f2ee` | `#101014` |
| `--paper-cool` | `#e8e6e1` | `#18181e` |
| `--card-bg` | `#ffffff` | `#1c1c22` |
| `--accent` | `#3d6b8c` | `#7eb8d4` |
| `--accent-chart` | `#7eb8d4` | `#9ccfe8` |
| `--text-body` | `#333` | `#b8b8b4` |

**Toggle:** moon icon = switch to night; sun icon = switch to day. Persists in `localStorage` key `et-preview-theme`.

```css
--font-sans: "DM Sans", …;
--font-serif: "Source Serif 4", …;  /* article body */
--font-mono: "IBM Plex Mono", …;   /* labels, KPIs */
```

---

## Motion & interaction

| Element | Spec | Status |
|---------|------|--------|
| Custom cursor | 6px dot + 36px ring, lerp 0.18, expand on hover | Preview ✓ |
| Theme toggle | `data-theme` on `<html>`, 0.35s transition on surfaces | Preview ✓ |
| Hero type cycle | Emmanuel / Data Analyst / PM & ops | Preview ✓ |
| Section scroll | `scroll-snap-type: y mandatory` on home/blog | Preview ✓ |
| Section dots | IntersectionObserver → active dot | Preview ✓ |
| Card hover | translateY −4–6px | Preview ✓ |
| Page enter/leave | Subtle fade or shared layout | **TODO** |
| Parallax abstracts | Low amplitude on data deco | **TODO** |
| KPI count-up | On `impact` panel enter | **TODO** |

---

## Abstract / data decoration

Use **lightly** — never compete with copy.

- Bar/sparkline SVG (teal)
- Dot grids, faint `%` / `Σ` watermarks
- Hero: charts overlaid on portrait
- **No** heavy Shinya dot-field on every page
- **No** old site `bg.png` unless we explicitly revisit texture

---

## Content mapping (Django model → frontend treatment)

Django keeps owning these models/endpoints; this is how they surface in the new frontend.

| Django model | Frontend treatment |
|---------|--------|
| `Project` | Case study card (add optional `kpi`, `tools[]`) |
| `Post` | Insights article |
| `Comment` | Unchanged |
| `MailingList` / `Mailing` | Newsletter |
| `ReachUs` | Contact |
| JWT admin | New post / project / mail routes |

---

## Tech stack (target)

Two services — see [`NEXTJS_REFACTOR_NOTES.md`](NEXTJS_REFACTOR_NOTES.md) for the full split.

- **Backend:** Django REST Framework (existing, unchanged) — models, JWT auth, media, email
- **Frontend:** **Next.js** App Router, TypeScript — replaces CRA, consumes the Django API
- **Motion:** Framer Motion or GSAP + optional Lenis smooth scroll

---

## Open questions

- [ ] Real KPI numbers for Impact panel or remove until verified?
- [ ] Resume: PDF link or generated page?
- [ ] Insights filters: real categories or tags on posts?
- [ ] Featured post: manual flag vs `views` ordering (current API)?

---

## Changelog

### 2026-08-14

- **Architecture reversed:** dropped the "Next.js does everything" plan (Next.js + SQLite replacing Django + CRA). Now: Django REST API stays as-is (backend of record); Next.js replaces only the CRA frontend and consumes the Django API. Updated `NEXTJS_REFACTOR_NOTES.md` and the tech-stack/content-mapping sections here accordingly.
- Design workflow for the next visual pass: keep iterating directly in `index.html` (no Figma/external tool for now).

### 2026-06-03

- Created living design doc (`DESIGN.md`) + `README.md`.
- Preview v2: teal accent, portrait+charts hero, Insights blog/post layouts.
- Home: **5 full-screen panels** (Intro → Impact → Work → About → Contact) with `scroll-snap` + right dot nav + fixed top nav (Shinya-style chapter scroll).
- Insights: **3 full-screen panels** (Intro → Featured → Grid).
- Article: normal long-scroll (not snap).
- Day/night toggle in site nav (Home, Insights, Article); persists via `localStorage`.
- Preview toolbar: Sign in, Sign up, New post, Project, Newsletter artboards (v2 styling).
- Static mockups: signin, new-post, new-project, new-mail, email-templates, admin-dashboard PNGs.
- Removed v1 static mockups; renamed v2 PNGs to `design-preview-{home,blog,post}.png`.
- Rejected: Substack orange, clone of current split hero, site-wide Shinya grid.

---

## How to add to this doc

1. Edit the relevant section or add a row to a table.
2. Append a bullet under **Changelog** with the date.
3. Check/uncheck items in **Approved direction** and **Open questions**.

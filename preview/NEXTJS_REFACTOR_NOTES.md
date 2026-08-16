# Next.js Refactor Notes

## Feasibility

**Decision (2026-08-14): keep Django + Next.js as two services** — Django REST API stays the backend of record; Next.js replaces the CRA frontend only. This reverses the earlier plan below of collapsing everything into a single Next.js app with its own SQLite DB and server actions acting as the backend.

The current project is a Django REST API plus a Create React App frontend. The backend surface is compact and stays in Django, unchanged in shape:

- `Post`: title, body, image backdrop, slug, views, author
- `Comment`: author, email, body, post relation
- `Project`: title, image backdrop, external link
- `MailingList` / `Mailing`: subscribers and newsletter sends
- `ReachUs`: contact form messages
- Auth: JWT login/register for admin routes

Next.js talks to these over the existing (or lightly evolved) DRF endpoints — the same relationship CRA has today, just a different frontend framework.

## Recommended Target Stack

**Backend — Django (existing, unchanged in role)**
- Django REST Framework, same apps/models (`portfolio`, `blog`)
- JWT auth for admin routes (as today)
- Django handles media/file uploads, email sending (contact + newsletter), and any DB migrations

**Frontend — Next.js (new, replaces CRA)**
- Next.js App Router, TypeScript
- Data fetching: `fetch`/React Query against the Django REST API (server components can fetch server-side for SEO on public pages; admin/mutating actions call the API from route handlers or client code)
- Auth: forward credentials to Django's JWT endpoints; store the token in an httpOnly cookie set by a Next.js route handler (avoid client-side token storage)
- Tailwind CSS plus CSS variables for light/dark themes
- Framer Motion for route/page transitions, section reveals, cursor motion, and small chart interactions
- TipTap, Lexical, or MDX/Markdown editor for post writing (still POSTs content to Django)

## Migration Shape

| Current Django/CRA | Next.js Equivalent |
|---|---|
| `/` CRA home | `app/(site)/page.tsx` (fetches from Django API) |
| `/blogPosts` | `app/(site)/insights/page.tsx` |
| `/blogPosts/:slug` | `app/(site)/insights/[slug]/page.tsx` |
| `/blogPosts/account/Login` | `app/(auth)/sign-in/page.tsx` (posts to Django JWT endpoint) |
| `/blogPosts/new` | `app/(admin)/posts/new/page.tsx` (posts to `PostViewSet`) |
| `/blogPosts/project/new` | `app/(admin)/projects/new/page.tsx` (posts to `ProjectViewSet`) |
| `/blogPosts/mail/new` | `app/(admin)/newsletter/new/page.tsx` (posts to Django mailing endpoint) |
| `PostViewSet` | unchanged, called from Next.js |
| `ProjectViewSet` | unchanged, called from Next.js |
| `ReachUs` endpoint | unchanged, called from Next.js contact form |
| JWT admin auth | unchanged, session cookie bridges it on the Next.js side |

## Design Direction

Keep the existing approved neutral/slate-teal direction, but make it more personal and less SaaS-like:

- Full-bleed home hero with portrait + data overlays
- `INSIGHTS` as the blog identity
- Editorial serif headings with functional sans UI
- Custom cursor dot/ring with interactive hover expansion
- Day/night toggle persisted in local storage or user preference
- Abstract data terrain, sparse dot grids, bars, numeric watermarks, and line charts
- Admin dashboard that shows visitor metrics, projects, posts, subscribers, sources, and activity
- Creation screens that feel like a polished personal CMS, not a plain form page

## New Mockups

Generated design templates are saved here:

- `design-preview-next-home.png`
- `design-preview-next-insights.png`
- `design-preview-next-dashboard.png`
- `design-preview-next-editor-project.png`
- `design-preview-next-signin.png`

## Open Implementation Questions

- Should posts be stored as HTML, Markdown/MDX, or structured rich-text JSON? (Django model/field decision)
- Django serves media today — does Next.js hit those media URLs directly (e.g. via `next/image` remote patterns), or does something proxy/rewrite them?
- CORS/auth: does Django need CORS opened for the Next.js origin, and does the JWT flow change at all to work well with server components (e.g. httpOnly cookie set by a Next.js route handler vs. raw token in the client)?
- Should analytics be real first-party events or placeholder/admin-entered metrics at launch?
- Should comments remain public, require moderation, or be removed for a cleaner personal site?
- Should the admin support one user only or multiple staff users?
- Deployment: same host/process as today (Procfile) for Django, with Next.js deployed separately (e.g. Vercel) — or both together?

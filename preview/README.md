# Design preview

Interactive HTML mockup for the Next.js portfolio rebuild.

| File | Purpose |
|------|---------|
| [`index.html`](index.html) | Live preview — open in browser |
| [`DESIGN.md`](DESIGN.md) | **Living design doc** — add decisions here |
| `assets/` | `GMAN.png`, `about-hero.jpg` |
| `design-preview-home.png` | Static home mockup |
| `design-preview-blog.png` | Static Insights mockup |
| `design-preview-post.png` | Static article mockup |
| `design-preview-signin.png` | Sign in |
| `design-preview-new-post.png` | New post (admin) |
| `design-preview-new-project.png` | New project (admin) |
| `design-preview-new-mail.png` | Newsletter composer |
| `design-preview-email-templates.png` | Email templates library |
| `design-preview-admin-dashboard.png` | Admin dashboard |

```bash
xdg-open /home/joy/Projects/fullstack/ET/design-preview/index.html
```

## Preview pages (toolbar)

| Group | Tabs |
|-------|------|
| **Public** | Home · Insights · Article |
| **Auth** | Sign in · Sign up |
| **Admin** | New post · Project · Newsletter |

**Home & Insights:** scroll one full screen per section (scroll-snap). Use right-side dots or nav links.

**Auth / admin / article:** normal vertical scroll inside the artboard.

**Theme:** moon/sun button in each nav; preference saved in the browser.

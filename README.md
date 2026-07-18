# GB Web Solutions — Website

A 14-page static website prototype (HTML/CSS/JS, no build step needed).

## How to view
Open `index.html` directly in a browser, or serve the folder with any static server, e.g.:
    npx serve .

## Structure
- `index.html` — Home
- `about.html`, `services.html`, `portfolio.html`, `pricing.html`, `process.html`,
  `testimonials.html`, `faq.html`, `blog.html`, `careers.html`, `contact.html`,
  `privacy-policy.html`, `terms-conditions.html`, `404.html`
- `assets/css/style.css` — shared design system (colors, type, components)
- `assets/js/main.js` — shared behavior (nav, theme toggle, reveal animations, counters, FAQ accordion, cookie banner, contact form demo)

## Notes
- This is a static HTML/CSS/JS build, not the Next.js/TypeScript/shadcn stack
  originally requested — it's meant as a fast, fully-clickable design reference.
  Ask Claude to port it to Next.js if you want the production codebase next.
- Contact form and newsletter signup are front-end only (no backend wired up).
- Replace placeholder phone/email/social links in `assets/js/main.js` and the
  footer markup with real business details before going live.

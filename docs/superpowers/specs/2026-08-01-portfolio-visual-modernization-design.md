# Portfolio Visual Modernization — Design Spec

Date: 2026-08-01

## Goal

Modernize the visual design of the existing single-page portfolio (React + Vite + Tailwind + Bootstrap) without changing its structure, content, or functionality. Same sections in the same order (Navbar, Home, About, Skills, Projects, Contact, Footer), same dark-blue theme family, refined and made consistent. No light/dark toggle.

## Current State (baseline)

- React 19 + Tailwind 3 + Bootstrap 5, single-page scroll layout.
- Heavy use of inline `style={{ ... }}` objects duplicated across sections (cards, badges, buttons, hover handlers via `onMouseEnter`/`onMouseLeave`).
- Bootstrap grid (`row`/`col-lg-*`) mixed with Tailwind flex/grid in the same sections.
- Font is plain `Arial`.
- `Footer.jsx` exists but is unused — `Contact.jsx` renders its own inline duplicate footer instead.
- Each section hardcodes its own dark background gradient with slightly different hex values (`#151515`, `#0e1117`, `#0c0f14`, `#050b1c`, etc.) instead of a shared token set.
- `width: 100vw` + `overflowX: hidden` inline hacks repeated on every section.
- Scroll-reveal animation system (`src/utils/scrollAnimations.js`, `userFriendlyAnimations.js`) works and stays as-is.

## Scope

**In scope:** visual refresh only — colors/tokens, typography, spacing, card/button/badge styling, hover/motion polish, de-duplication of styling code into shared UI components and Tailwind utilities, wiring up the unused `Footer.jsx`, removing the Bootstrap grid dependency where Tailwind already covers it.

**Out of scope:** section reordering, new sections, content changes, light/dark theme toggle, EmailJS logic, CV download logic, routing, scroll-animation trigger logic.

## A. Foundations

### Color tokens

Extend `tailwind.config.js` `theme.extend.colors` with a `surface` scale to replace the scattered hardcoded dark hex values:

```js
surface: {
  900: '#0b0f19', // page base background
  800: '#111827', // card background
  700: '#1a2332', // elevated / hover state
}
```

Keep the existing `primary` scale (`50`–`900`, blue family) — it's already coherent and matches the "keep dark blue theme, refine it" direction. Accent gradient for primary CTAs: `from-primary-500 to-primary-400`.

### Typography

- Replace `fontFamily.sans: ['Arial', 'sans-serif']` with `Inter` (via `@fontsource/inter` npm package — no extra build config needed), falling back to system sans-serif.
- Add a small type scale to `theme.extend.fontSize` for headings (e.g. `display`, `h2`, `h3`) so section titles stop being hand-set inline (`fontSize: '3rem'` etc. scattered per section).

### Shared UI components

New directory `src/components/ui/`:

- **`SectionHeading.jsx`** — props: `title`, `subtitle?`. Renders the title + accent underline bar + optional subtitle paragraph. Replaces the repeated title/divider/paragraph block currently copy-pasted in Skills, Projects, Contact.
- **`Card.jsx`** — props: `children`, `className?`. Renders the glass-card wrapper (`bg-surface-800/60 backdrop-blur-xl border border-white/10 rounded-2xl`) with a `hover:-translate-y-1 hover:shadow-lg transition` lift on hover where used interactively. Replaces the `animated-border` + inline blur/border style repeated in About, Skills, Projects, Contact.
- **`Badge.jsx`** — props: `children`. Renders the small tech-tag pill (`bg-primary-500 text-white rounded px-2 py-1 text-xs`). Replaces ~15 copy-pasted inline `<span>` style objects in Projects.jsx and Skills.jsx.
- **`Button.jsx`** — props: `variant` (`primary` | `secondary`), `as` (`a` | `button`), plus standard anchor/button props. `primary` = gradient fill; `secondary` = outline. Replaces inline style + `onMouseEnter`/`onMouseLeave` hover handlers in Home.jsx and Contact.jsx with Tailwind `hover:` classes.

These components take only the props actually needed by existing call sites — no speculative configurability.

## B. Section-by-section changes

- **Navbar** — add scroll-aware bottom border/shadow once the page scrolls (via a scroll listener + conditional class), active-section link highlight (accent underline under the current in-view section, computed the same way scroll animations already detect sections), smoother mobile menu open/close transition (`transition-all` slide/fade instead of instant conditional render).
- **Home** — hero buttons become `<Button variant="primary">` (Download CV) and `<Button variant="secondary">` (View My Work); typography sizes moved to the shared scale; profile image border/shadow updated to a soft glow ring consistent with the new surface tokens; existing drop/fade-in animation classes unchanged.
- **About** — "What I Do" panel becomes a `<Card>`; each service item (Web/Mobile/Cloud) gets a small consistent icon treatment alongside its existing emoji, on the same `text-primary-400` accent color.
- **Skills** — Bootstrap `row/col-lg-4` replaced with Tailwind `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6` inside each category `<Card>`; each skill item gets a hover lift/glow consistent with `Card`'s hover treatment.
- **Projects** — each project becomes a `<Card>`; tech tags become `<Badge>`; slideshow logic and indicator dots kept, indicator dot styling aligned to token colors; add subtle image scale-on-hover for the cover image.
- **Contact** — info panel and form panel become `<Card>`s; submit button becomes `<Button variant="primary">`; hardcoded colors (`#050b1c`, `#4a9eff`, etc.) replaced with tokens; EmailJS submit logic and success/error message logic unchanged.
- **Footer** — `Footer.jsx` restyled with `surface` tokens as a minimal single-line footer (not the current heavy blue bar), rendered from `App.jsx` after `Contact`; the duplicate inline footer block inside `Contact.jsx` is removed.

## C. Motion & technical approach

- Standardize hover/transition timing via Tailwind utility classes (`transition duration-300 ease-out`) instead of inline `transition: 'all 0.3s ease'` strings; hover effects move from JS `onMouseEnter`/`onMouseLeave` handlers to Tailwind `hover:` classes wherever the effect is a pure style change (removes the JS-driven hover code in Home.jsx and Contact.jsx).
- Existing scroll-reveal system (`scrollAnimations.js`, `userFriendlyAnimations.js`, the `scroll-animate*` classes) is unchanged — sections keep their existing reveal-on-scroll classes.
- Implementation steps:
  1. Update `tailwind.config.js` (surface colors, Inter font, type scale).
  2. Add `@fontsource/inter` dependency and import it once in `main.jsx` (or `index.css`).
  3. Build `src/components/ui/{Card,Badge,Button,SectionHeading}.jsx`.
  4. Refactor `Navbar.jsx`, `Home.jsx`, `About.jsx`, `Skills.jsx`, `Projects.jsx`, `Contact.jsx`, `Footer.jsx` in place — same exports, same section `id`s/anchors, inline styles replaced with Tailwind + shared components.
  5. Remove Bootstrap grid classes (`row`/`col-*`) from the sections above; after confirming no other file depends on Bootstrap, remove the `bootstrap` dependency from `package.json`.
  6. Wire `Footer.jsx` into `App.jsx`; delete the duplicate footer markup from `Contact.jsx`.
  7. Investigate the `width: 100vw` / `overflowX: hidden` per-section hack; once inline styles are removed, re-test for horizontal scroll — if the issue persists, fix once globally (e.g. `overflow-x-hidden` on `body`/root) instead of per-section.

## Testing

- Visual/manual verification only (no existing test suite for UI). After implementation, run the dev server and check each section at mobile/tablet/desktop breakpoints, verify no horizontal scroll, verify EmailJS form still submits successfully, verify CV download link still works, verify nav links still scroll to correct sections.

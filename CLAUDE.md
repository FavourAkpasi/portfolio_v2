# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with
code in this repository.

## Commands

- `npm run dev` — start the dev server (Turbopack) at http://localhost:3000
- `npm run build` — production build (Turbopack)
- `npm start` — serve the production build
- `npm run lint` — run ESLint (`next/core-web-vitals` + `next/typescript`)
- `npm run format` — Prettier write (`format:check` to verify only)
- `npm run test` — run the Vitest suite once; `npm run test:watch` for watch
  mode
  - `npm run test:integration:coverage` — run with V8 coverage (writes
    `coverage/`); `test:integration:ui` opens the Vitest UI
  - Run a single file:
    `npm run test -- components/sections/__tests__/about.test.tsx`
  - Filter by name: `npm run test -- -t "renders the section heading"`

## Deployment

Deployed on **Vercel**; merging a branch into `main` triggers a production
deploy. `npm run build` runs the same build Vercel does — run it before merging
to catch type/lint failures locally.

## Environment

`services/index.ts` sends the contact form via EmailJS from the **browser**
(`@emailjs/browser`), so its three `NEXT_PUBLIC_`-prefixed vars are exposed in
the client bundle **by design** — the "Public Key" is meant to be public; abuse
protection is EmailJS's dashboard allowlist/rate limits, not key secrecy:
`NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`,
`NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`.

- `.env` is git-ignored — these must also be set in **Vercel → Settings →
  Environment Variables** for the deployed site. `.env.example` documents every
  var (and is the one `.env*` file that IS committed).
- `NEXT_PUBLIC_` vars are inlined **at build time**, so changing them in Vercel
  requires a **redeploy** to take effect.
- ⚠️ Never put a genuine secret behind `NEXT_PUBLIC_` — it ships in the client
  bundle. Only truly public values belong there.

**Sentry env vars:** `NEXT_PUBLIC_SENTRY_DSN` (public, client-side). Source-map
upload at build time needs `SENTRY_ORG`, `SENTRY_PROJECT`, and the **secret**
`SENTRY_AUTH_TOKEN` (Vercel only — never `NEXT_PUBLIC_`, never committed). All
are optional: missing them just no-ops the SDK / skips map upload; the build
still passes.

## Architecture

Single-page portfolio on **Next.js 15 App Router** (React 19, Tailwind CSS v4,
TypeScript strict). The entire visible page is one client component
(`app/page.tsx`) that stacks four sections inside a scrollable pane; there is no
routing beyond the root.

**Scroll-spy is the core mechanism.** Navigation highlighting is driven by
intersection observation, not the URL:

- `context/active-section-context.tsx` holds the shared state: `activeSection`,
  `scrollPercentage`, and `timeOfLastClick`. Access it only via the
  `useActiveSectionContext()` hook (throws if used outside the provider).
- `useScrollSpy(id, threshold)` wraps `react-intersection-observer` and sets
  `activeSection` when a section scrolls into view — **but suppresses updates
  for 1s after `timeOfLastClick`** so that clicking a nav link doesn't get
  overridden by mid-scroll intersections.
- `useActiveLink()` is what nav components call on click: it sets the active
  section AND stamps `timeOfLastClick`. This is the counterpart to the
  suppression logic above — changing one requires understanding the other.
- `scrollPercentage` is computed in `page.tsx`'s `handleScroll` (rAF-throttled
  via a `ticking` ref) and consumed by decorative components (e.g. parallax
  orbs, `StarSpotlight`).

**Section IDs come from `lib/constants.ts` `LINKS`** — `page.tsx` maps
`LINKS[0..3].href` to sections positionally, so section order and count are
coupled to the `LINKS` array. The "Products" section is consistently named
across the link, the `Products` component (`components/sections/products.tsx`),
the `PRODUCTS` array, and the `IProduct` type. All page content (experiences,
products, education, socials) is hardcoded as typed arrays in
`lib/constants.ts`; this is the file to edit for content changes.

**Provider stack** (`app/providers.tsx`, wrapped in `app/layout.tsx`): TanStack
Query → `next-themes` `ThemeProvider` → `ActiveSectionContextProvider` →
`Suspense` → children, plus the sonner `Toaster`. TanStack Query's only real use
is the contact form mutation.

**Contact form** (`components/sections/contact-form.tsx`): react-hook-form + Zod
resolver, submitted through a `useMutation` calling `apiServices.sendEmail`.
Feedback is via sonner toasts.

**Error tracking** — Sentry (`@sentry/nextjs`), lean/error-focused setup.
`next.config.ts` is wrapped with `withSentryConfig` (source-map upload, works
under Turbopack). Init lives in `instrumentation-client.ts` (browser),
`sentry.server.config.ts` / `sentry.edge.config.ts` (loaded by
`instrumentation.ts`'s `register()`), and `app/global-error.tsx` reports root
render errors. Tracing and session-replay sample rates are intentionally very
low (`0.01`); replay-on-error is `1.0`. The replay integration is the bulk of
the client bundle cost — drop `Sentry.replayIntegration()` from
`instrumentation-client.ts` if you need a leaner bundle.

## Conventions

- **Path alias:** `@/*` maps to the repo root (e.g. `@/components`,
  `@/lib/utils`).
- **UI components** in `components/ui/` are shadcn/ui (new-york style, `neutral`
  base, CSS variables). Add new ones with the shadcn CLI; aliases are configured
  in `components.json`. `cn()` in `lib/utils.ts` merges Tailwind classes.
- **Theming** is CSS-variable driven in `app/globals.css` with `next-themes`
  (`attribute="class"`, `defaultTheme="dark"`, `enableSystem={false}`; `.dark`
  variant). Read the current theme with `useTheme()` from `next-themes` — prefer
  `resolvedTheme` for rendering, and toggle via
  `setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')` (there is no
  `toggleTheme`). `<html>` has `suppressHydrationWarning` because next-themes
  sets the class pre-hydration. Fonts are Geist Sans/Mono via `next/font`.
  - ⚠️ **Do not branch SSR markup on `resolvedTheme` directly** — it is
    `undefined` on the server but resolved on the first client render, which
    causes a hydration mismatch. Gate theme-dependent UI behind a `mounted`
    state (`useEffect(() => setMounted(true), [])`). The reusable
    `components/ui/theme-toggle.tsx` already does this; reuse it instead of
    re-implementing the toggle. (Theme used only inside effects/canvas drawing —
    e.g. `star-spotlight.tsx` — is safe since it doesn't affect SSR markup.)
- **Prettier** (`.prettierrc`): single quotes, no bracket spacing, avoid arrow
  parens, 80 col, trailing commas. The repo is fully formatted — run
  `npm run format` after edits (`format:check` in CI). `.prettierignore`
  excludes build output and lockfiles.
- Directories: `components/layout/` (header, navbar, mobile-sidebar),
  `components/sections/` (page sections), `context/`, `hooks/`, `lib/`,
  `services/`, `types/` (shared `I*` interfaces).

## Testing

- **Vitest + Testing Library** (jsdom). Config in `vitest.config.ts`; global
  setup and shared helpers live in `test/integration/` (setup mocks
  `matchMedia`/`IntersectionObserver`/`ResizeObserver` which jsdom lacks).
- Tests live in `__tests__/` folders next to the code — currently
  `components/layout/__tests__/` and `components/sections/__tests__/`, one file
  per component. They are shallow render/presence checks only; there are no API
  mocks (EmailJS only fires on submit, which these tests don't trigger).
- **Always render via `renderWithProviders` from `@/test/integration`**, not
  RTL's raw `render` — it wraps the component in the app's real provider stack
  (Query, next-themes, active-section) so hooks resolve. That barrel also
  re-exports `screen`/`fireEvent`/etc., so import everything from it.
- `vitest.config.ts` disables PostCSS (`css.postcss.plugins: []`) so CSS-module
  imports (e.g. `time-portal.module.css`) don't try to run the app's Tailwind v4
  pipeline, which fails under Vite's test CSS transform.
- Header renders a mobile **and** a desktop copy, so duplicated text needs
  `getAllByText`, not `getByText`.
- CI (`.github/workflows/test.yml`) runs on **pull requests to `main`**, gating
  the merge (and the Vercel deploy that follows it). Two jobs: `build` (runs
  `npm run build`) then `test` (`needs: build`, so tests only run if the
  production build passes). The `test` job runs
  `npm run test:integration:coverage` and posts a coverage summary as a PR
  comment via `davelosert/vitest-coverage-report-action` — this needs the
  `json-summary`/`json` coverage reporters (set in `vitest.config.ts`) and
  `pull-requests: write` permission.

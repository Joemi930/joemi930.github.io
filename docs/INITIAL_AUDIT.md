# Initial Audit - Portfolio Admin Mission

Date: 2026-06-29

## Scope

Mission: build a separate secured portfolio admin on Vercel, backed by Supabase Auth, PostgreSQL and Storage, then connect the public portfolio to published Supabase content with local fallback.

## Current Public Portfolio

- Public site: `https://joemi930.github.io/`
- Public repo: `https://github.com/Joemi930/joemi930.github.io`
- Visibility: public
- Default branch: `main`
- Current stack: React, Vite, HashRouter, GitHub Pages
- Existing content sources: `src/data/profile.js`, `src/data/projects.js`, `src/data/skills.js`, `src/data/socials.js`, `src/data/siteContent.js`, `src/data/navigation.js`, `src/data/experience.js`

## GitHub

- `Joemi930/joemi-portfolio-admin`: not found at audit time.
- `Joemi930/portfolio-admin`: not found at audit time.
- `Joemi930/gold-sniper`: public.
- `Joemi930/clipwave`: private.

## Vercel

- Team: `Joemi930's projects`
- Team slug: `joemi930-s-projects`
- Team id: `team_SRMsGPZLoZSbu1T4s0RkTxgW`
- Existing project: `joemi930-github-io`
- Existing project id: `prj_AVe92O5z7qssjDmA1Qu2HNveDGgY`
- Framework: Vite
- Connected repo: `Joemi930/joemi930.github.io`
- Latest deployment commit: `be2b21176241eb98637f5e88c27cebfa882b9e2a`
- Decision: do not reuse or delete this accidental public portfolio project for the admin.
- Recommended admin project: `joemi-portfolio-admin`

## Supabase

- Existing project found: `joemi930.github.io`
- Project ref: `wkpcrxsvhfogegrcddgb`
- Organization id: `wdlgtxrhjdvdfxqsuxxc`
- Region: `us-east-1`
- Status: `ACTIVE_HEALTHY`
- Database: PostgreSQL 17
- Decision: use this project because it is the only Supabase project found and matches the portfolio.

## Security Baseline

- Public portfolio is static and has no backend write surface.
- `.env` and `.env.*` are ignored.
- Public portfolio currently stores no service role key.
- Admin must remain separate and private.
- Server-only secrets must remain in Vercel/Supabase configuration, never in Git.
- Supabase publishable key may be used in public/admin clients, with security enforced by RLS and server-side authorization.

## Immediate Next Steps

1. Create the private admin repository `Joemi930/joemi-portfolio-admin`.
2. Scaffold a Next.js App Router + TypeScript admin app.
3. Add Supabase schema migrations, RLS policies, storage policies and seed scripts.
4. Build the admin with auth guards, validation, upload restrictions, audit logs and security headers.
5. Add Supabase read-with-fallback integration to the public portfolio.
6. Deploy the admin to a new Vercel project and verify production.


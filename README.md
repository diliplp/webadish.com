# WebAdish

WebAdish project workspace for the brand sites and supporting web apps.

## Tech Stack

- `pnpm` workspace monorepo
- Main marketing site at `artifacts/webadish`
- React 18 + Vite 5 + TypeScript
- Wouter for routing
- Tailwind CSS 4
- Radix UI primitives
- React Query
- Vercel Speed Insights
- Secondary app at `artifacts/webadish-next`
- Next.js 16 + React 19 + TypeScript

## Workspace Layout

- `artifacts/webadish`: current `webadish.com` app
- `artifacts/webadish-next`: Next.js app in the same project

## Local Setup

Use `pnpm` for this repo. `npm` can create an unnecessary `package-lock.json` and is not the intended package manager.

```bash
cd /Users/dilipparmar/projects2/webadish-websites/webadish-com
pnpm install
```

## Useful Commands

Run all workspace dev servers:

```bash
pnpm run -r dev
```

Run only the Vite site:

```bash
pnpm --filter @workspace/webadish dev
```

Run only the Next.js app:

```bash
pnpm --filter @workspace/webadish-next dev
```

Build the Vite site:

```bash
pnpm --filter @workspace/webadish build
```

Build the Next.js app:

```bash
pnpm --filter @workspace/webadish-next build
```

## Notes

- Root package manager: `pnpm@10.33.0`
- The Vite app includes an SSR/prerender build step for production output
- Local dev for the Vite app runs on the configured Vite port, commonly `3002`

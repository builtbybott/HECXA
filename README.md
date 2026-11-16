# HECXA — Productivity Workspace

HECXA is being migrated to a React-based frontend in controlled phases. The existing vanilla implementation and Supabase backend are being preserved during the transition.

## Current migration status

- Active branch: `feature/phase-01-react-foundation`
- Current work: Phase 01 — frontend foundation
- Frontend: React 19.3.1 + Vite 8.3.8
- Styling: Tailwind CSS 4.3.5
- Language: JavaScript / JSX
- Backend: Existing Supabase integration is not connected in Phase 01
- Glassy UI registry: planned for Phase 02, not installed yet

## Requirements

- Node.js `^20.19.0 || >=22.12.0`
- npm 10 or compatible npm version
- Git

## Run locally

After cloning this branch:

```bash
npm install
npm run dev
```

Vite is configured for `http://127.0.0.1:5173`.

Create a production build:

```bash
npm run build
npm run preview
```

The first successful `npm install` generates `package-lock.json`. Commit that lockfile with the foundation before considering Phase 01 complete. The lockfile is not yet committed because dependency installation and build verification could not be run in the repository environment.

## Legacy application

The previous HTML entry document is preserved at `legacy/index.html` and in Git history. Existing root-level legacy JavaScript, CSS, Supabase schema and configuration files have not been removed or migrated. The old HTML document's referenced `css/` and `js/` paths require reconciliation against the full legacy tree before feature migration.

## Supabase and security

Phase 01 does not connect to Supabase and does not make database changes. Do not add production credentials. Never put a Supabase service-role key or secret in browser code or any `VITE_*` variable. Supabase client integration is planned for a later approved phase.

## Phase boundaries

- Phase 01: React/Vite/Tailwind foundation only.
- Phase 02: Glassy UI registry evaluation and HECXA design system.
- Later phases: application shell, feature migration, Supabase integration and consolidated QA.

Do not deploy publicly or modify the existing Supabase project without separate explicit approval.

## Open source

See [LICENSE](LICENSE). The MIT license for repository code does not automatically cover third-party brand assets or services.

# HECXA React + Glassy UI Migration

**Status:** Phase 00 documentation prepared; awaiting user review/approval to begin Phase 01.  
**Repository:** [builtbybott/HECXA](https://github.com/builtbybott/HECXA)  
**Documentation branch:** `docs/phase-00-react-migration`

## Purpose

Migrate HECXA's frontend from vanilla HTML/CSS/JavaScript to React 19+, Tailwind CSS 4 and selected Glassy UI registry components, while retaining the existing Supabase project contract, authentication, database records and RLS security boundaries.

This documentation is repository-specific and based on the files inspected on the default branch during Phase 00. It is not authorization to start implementation.

## Phase 00 deliverables

- [Repository audit](./00-repository-audit.md)
- [Target architecture](./01-target-architecture.md)
- [Feature migration map](./02-feature-migration-map.md)
- [Supabase and data preservation plan](./03-data-and-security-plan.md)
- [Phase plan and approval gates](./04-phase-plan-and-gates.md)
- [Implementation-agent instructions](./05-implementation-instructions.md)
- [Progress tracker](./progress.md)

## Non-negotiable constraints

1. Do not reset, recreate, or casually modify the existing Supabase project, tables, records, triggers, functions or RLS policies.
2. Do not expose service-role/secret keys in browser code, repository files, prompts, logs or screenshots.
3. Preserve the current product's working behavior and logo/brand assets; do not silently remove features.
4. Use JavaScript/JSX for the initial migration. TypeScript is not part of the approved baseline.
5. Use React 19+, Tailwind CSS 4, Vite and the Glassy UI registry where appropriate. Confirm current official installation instructions during Phase 01 rather than guessing CLI flags.
6. Do not deploy publicly, connect a new paid service, spend money, or change account/security settings without separate approval.
7. Do not begin Phase 01 until the user explicitly approves Phase 00 documentation.

## Source-of-truth rule

The checked-in repository files and current Supabase project are authoritative. README claims, old screenshots, generated summaries and this plan are not proof that a feature or schema object exists. Reconcile discrepancies by inspecting code and the actual development database before implementation.

# Phase 00 — Repository audit

**Audit status:** Documentation inspection completed; runtime/database verification remains outstanding.  
**Repository:** `builtbybott/HECXA`  
**Default branch inspected:** `main`

## Files inspected

| File | Observation |
|---|---|
| `README.md` | Describes HECXA features, vanilla frontend, Supabase and safe local setup. |
| `index.html` | Legacy entry document; references `css/style.css`, `css/components.css`, `css/responsive.css`, `config.js`, and `js/app-final.js`. |
| `config.js` | Contains placeholder Supabase URL and publishable/anon key. |
| `script.js` | Legacy application implementation fetched at repository root; uses the global Supabase client and DOM-driven rendering. |
| `style.css` | Legacy stylesheet fetched at repository root; dark UI with `#050505` background and `#78a9ff` accent. |
| `supabase_schema.sql` | Defines four application tables, a profile trigger/function and RLS policies. |
| `SECURITY.md` | Requires a dedicated development Supabase project and RLS verification; says no independent security audit has been performed. |
| `LICENSE` | MIT license for the repository code, subject to the license text and third-party asset rights. |

## Repository path discrepancy — resolve before implementation

The inspected `index.html` references stylesheet and module paths under `css/` and `js/`, while the inspected legacy files `style.css` and `script.js` were fetched from the repository root. The referenced `css/components.css`, `css/responsive.css`, and `js/app-final.js` were not found at the paths checked during the audit.

This may indicate a stale entry document, incomplete commit, or source/version mismatch. Do not assume which explanation is correct. At the start of Phase 01, inspect the complete Git tree and branch/commit state, reproduce the current app locally, and record the exact working entrypoint. Do not overwrite or delete either set of files until this is understood.

## Current frontend characteristics observed in legacy JavaScript

- A Supabase client is created from `window.HECXA_CONFIG` and the global CDN-provided `supabase` object.
- Authentication uses `signUp`, `signInWithPassword`, `resetPasswordForEmail`, `getSession`, `onAuthStateChange`, and `signOut`.
- Data reads and writes use Supabase tables `profiles`, `tasks`, `notes`, and `projects`.
- UI is rendered through DOM lookup, `innerHTML`, event handlers and page-name switching.
- The assistant logic observed is local/rule-based. It is not an external generative-AI integration.
- The clock uses a repeating interval; toast notifications use timeouts.
- Search filters the in-memory tasks, notes and projects collections.

These are migration observations, not a complete runtime test report.

## README versus implementation discrepancy

The README advertises tags, task sorting/filters, note tags/pinning/favourites, milestones, calendar events, goals, analytics and profile/appearance/AI preferences.

The inspected legacy `script.js` directly demonstrates dashboard, tasks, notes, projects, analytics, assistant, profile and settings functions. Its page renderer does not show a calendar page implementation; its visible data model and CRUD calls cover the four tables listed above. Do not mark the README-only capabilities as implemented until the full tree and runtime confirm them.

## SQL schema observations

The inspected schema defines:

- `public.profiles`: UUID primary key linked to `auth.users`.
- `public.tasks`: bigint identity, `user_id`, title, text due date, priority check, done flag, created timestamp.
- `public.notes`: bigint identity, `user_id`, title, body, created/updated timestamps.
- `public.projects`: bigint identity, `user_id`, title, progress integer constrained to 0–100, created timestamp.
- `public.handle_new_user()` and `on_auth_user_created` trigger.
- RLS enabled for all four tables and ownership policies.

The SQL includes policy drops/recreates and drops/recreates the auth trigger. It must not be rerun against a live or existing project as a casual migration step. Inspect actual database state and use reviewed, additive migrations only when needed.

## Baseline blockers and unknowns

- Complete repository tree and exact default-branch commit should be captured at implementation start.
- The current default-branch runtime has not been reproduced in a local browser in this audit.
- The Supabase project URL is a placeholder in the committed config; the actual project, schema state, data volume and Auth settings are not known from repository source.
- Browser support matrix, hosting provider/build settings and deployment pipeline need confirmation.
- The complete feature set advertised by README needs code-level verification.
- No dependency manifest/build system was present among the inspected root files.

## Required Phase 01 preflight

1. Capture `git status`, current branch, commit SHA and full tracked file tree.
2. Clone a clean copy and reproduce the documented legacy launch path.
3. Determine which HTML/CSS/JS entrypoint is actually current and working.
4. Inventory every route/page, DOM interaction, Supabase query, table, RPC, storage bucket and Auth callback.
5. Inspect Supabase schema/policies read-only; do not apply SQL.
6. Record baseline screenshots and a feature smoke-test checklist.
7. Only after the explicit Phase 01 approval, create the React/Vite application in a migration branch or isolated directory.

# Implementation-agent instructions — HECXA migration

These instructions are intended for the coding agent used by the project owner. They are binding project constraints.

## Role

Act as a senior frontend migration architect and implementation engineer. Make routine low-risk technical decisions independently, explain consequential trade-offs, and preserve user control over high-impact actions.

## Current authorization

**Only Phase 00 documentation is authorized. Phase 01 implementation is not authorized.**

Do not install dependencies, create the React app, change application source, alter Supabase, or deploy until the user explicitly approves Phase 01.

## Required workflow after Phase 01 approval

1. Read every file in `docs/migration/`.
2. Inspect the current branch, commit SHA, Git status and complete repository tree.
3. Reproduce the existing application and reconcile the entrypoint/path discrepancy recorded in the audit.
4. Create/use a dedicated migration branch. Never perform the migration directly on the default branch.
5. Preserve the legacy implementation in Git and keep a documented rollback path.
6. Before coding, write a short Phase 01 execution plan and list any blockers that require user input.
7. Implement only the approved phase. Do not begin the next phase.
8. Update `progress.md` with completed tasks, evidence, decisions, risks and next gate.
9. Run only the basic checks needed to establish that the current phase is viable. Record failures honestly.
10. Stop at the phase boundary and present a concise completion report for approval.

## Engineering rules

- Use JavaScript/JSX initially; do not silently convert the project to TypeScript.
- Use React 19+, Vite and Tailwind CSS 4.
- Verify current official installation instructions and exact supported versions before choosing package versions or registry commands.
- Use Glassy UI as the intended component source, but inspect copied source, dependencies, accessibility and browser support.
- Avoid unnecessary UI libraries, state libraries, routers or animation packages. Add dependencies only when they solve a documented requirement.
- Do not paste large generated components without understanding their props, state and accessibility.
- Do not use `dangerouslySetInnerHTML` for user-generated task, note or project content.
- Keep application logic, data access and presentation separated.
- Use semantic HTML and accessible labels/focus behavior.
- Preserve HECXA logo and current brand identity.
- Do not claim a feature is complete unless its implementation and verification evidence exist.

## Supabase and secrets

- Existing Supabase project and data are to be preserved.
- Use browser-safe publishable/anon key only.
- Never use a service-role/secret key in frontend code or Vite environment variables.
- Do not run `supabase_schema.sql` against an existing project as part of migration.
- Do not modify RLS, triggers, functions, Auth settings or schema without separate approval.
- Use a separate development project if a live backend is needed for testing; creating or changing external accounts/projects requires user approval.
- Do not commit local `.env` files or real credentials.

## Prohibited without explicit approval

- Public deployment or domain/DNS changes.
- Paid plans, purchases or services.
- Production database writes or schema changes.
- Destructive Git operations, force pushes or deleting legacy files.
- Changing authentication/security settings.
- Sending external communications or exposing private user data.

## Required phase report

At the end of each phase provide:
- Scope completed.
- Files added/changed.
- Commands and checks run, with results.
- Screenshots or reproducible evidence where relevant.
- Decisions and trade-offs.
- Known issues and risks.
- Updated progress tracker.
- Exact next phase and the approval required.

Do not proceed beyond the approved phase.

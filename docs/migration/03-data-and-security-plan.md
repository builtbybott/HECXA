# Supabase data and security preservation plan

## Existing schema observed in repository SQL

The inspected `supabase_schema.sql` defines four public tables:

### `profiles`
- `id uuid` primary key referencing `auth.users(id)` with cascade delete
- `name text`, `email text`
- `created_at`, `updated_at`

### `tasks`
- `id bigint` identity primary key
- `user_id uuid` referencing `auth.users(id)`
- `title text`
- `due_date text` defaulting to `Today`
- `priority text` constrained to Low/Medium/High
- `done boolean`
- `created_at`

### `notes`
- `id bigint` identity primary key
- `user_id uuid` referencing `auth.users(id)`
- `title text`, `body text`
- `created_at`, `updated_at`

### `projects`
- `id bigint` identity primary key
- `user_id uuid` referencing `auth.users(id)`
- `title text`
- `progress integer` constrained to 0–100
- `created_at`

The SQL also defines `public.handle_new_user()`, an `on_auth_user_created` trigger, enables RLS on all four tables and creates owner-scoped policies.

**Important:** This is the repository SQL definition, not proof that the connected Supabase project has exactly this schema. The live project must be inspected separately and read-only before any schema decision.

## Hard data-preservation rules

- Do not run the repository's full schema SQL against an existing project as part of frontend migration.
- Do not drop/recreate tables, policies, triggers or functions to make the new UI work.
- Do not reset Supabase Auth users or existing records.
- Do not change primary key types, column names, nullability, defaults or constraints in this migration without a separately approved database change.
- Do not introduce mock records into the real project.
- Do not log access tokens, passwords, private notes or personal records.
- Do not commit real Supabase credentials or user data.

## Supabase client design

- Use the supported Supabase JavaScript client package installed through the frontend dependency manager.
- Read project URL and publishable/anon key from Vite environment variables (for example, `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`).
- Validate missing configuration and show a safe configuration error; never print secrets.
- Keep the service-role key out of Vite variables and all browser bundles.
- Centralize client creation so the application has one client instance.
- Keep data access in feature-specific modules and preserve RLS-enforced user isolation.
- Use explicit error handling for loading, empty, success and failure states.

## Authentication migration checklist

- Verify existing Supabase Auth provider settings and redirect URLs without changing them.
- Preserve email/password signup and login behavior.
- Preserve email verification behavior where enabled.
- Preserve password reset redirect/callback behavior.
- Preserve session refresh and sign-out behavior.
- Verify protected routes/screens wait for initial session resolution to avoid flashing private UI.
- Verify a signed-out user cannot access private workspace data.
- Verify account A cannot read or mutate account B's records.

## Data validation

Before migration:
1. Record current table names, columns, constraints, indexes, triggers, functions, policies and relevant Auth settings using read-only inspection.
2. Confirm which Supabase project is development and whether any real user data exists.
3. Capture a backup/export using the project's supported process before any future database change.
4. Establish test accounts and non-production test records.

After migration:
1. Compare row counts and representative records without exposing personal data.
2. Test CRUD operations for each migrated feature.
3. Test cross-user isolation for SELECT, INSERT, UPDATE and DELETE.
4. Test expired/invalid sessions and sign-out.
5. Confirm no schema write occurred during frontend-only migration.

## Database change process

Any required schema evolution must be proposed separately with:
- Reason and affected feature.
- Current versus proposed schema.
- Backward-compatibility plan.
- Data backfill and rollback strategy.
- RLS/policy impact.
- Test plan.
- Explicit user approval before applying it to any shared or production project.

# Feature migration map

This document distinguishes observed implementation from README claims. A feature is not considered migrated until its behavior has been verified against the legacy baseline and the React implementation.

| Feature | Evidence in inspected legacy JS | Migration approach | Acceptance evidence |
|---|---|---|---|
| Sign in / sign up | Supabase Auth methods present | Auth feature module and React forms | Login, signup, verification and error states tested |
| Password reset | `resetPasswordForEmail` present | Preserve redirect behavior | Reset email request and callback tested |
| Session persistence | `getSession`, `onAuthStateChange` present | Central auth provider/session boundary | Refresh retains valid session; sign-out clears UI |
| Dashboard | Dashboard renderer and workspace metrics present | Dashboard feature using shared data modules | Counts match database rows and task states |
| Tasks CRUD | Read/insert/update/delete paths present | Task repository + React feature components | CRUD, completion, priority and due-date behavior verified |
| Notes CRUD | Read/insert/update/delete paths present | Notes repository + React feature components | CRUD and text persistence verified |
| Projects CRUD | Read/insert/update/delete paths present | Project repository + React feature components | CRUD and 0–100 progress behavior verified |
| Analytics | Counts and static weekly activity chart present | Preserve calculations; clearly label any mock/static data | Values reconcile with source records; no fabricated metrics |
| HECXA assistant | Local rule-based commands present | Preserve local behavior; do not imply remote LLM | Existing supported prompts return equivalent outcomes |
| Profile | Profile read/update paths present | Profile feature | Name updates persist and render |
| Settings | Settings page and logout path present | Settings feature | Existing settings behavior preserved |
| Global search | In-memory task/note/project filtering present | React search UI with equivalent search scope | Same records are discoverable; safe text rendering |
| Calendar | README and nav markup mention it; inspected renderer does not establish a working page | Audit full tree; implement only if product scope is confirmed | Documented calendar behavior and persistence tested |
| Goals / milestones / tags / pinning / favourites / filters | README claims; not established by inspected schema/JS | Verify repository and database before planning implementation | Feature-specific evidence and data contract required |

## Migration ordering

1. Build the app shell and auth boundary.
2. Prove session persistence and protected application state.
3. Migrate one vertical slice (tasks) end-to-end as the reference pattern.
4. Migrate notes and projects using the proven pattern.
5. Migrate dashboard and analytics after feature data contracts are stable.
6. Migrate assistant behavior without changing its rule-based nature.
7. Add or migrate calendar/other README-only features only after verifying intended scope and schema.
8. Finish profile, settings, global search, responsive navigation and accessibility.

## Behavior preservation checklist

For every migrated feature, record:

- Legacy page/entry point and current behavior.
- User actions and validation rules.
- Supabase table/columns and query filters.
- Loading, empty, success and error states.
- Authorization assumptions and RLS dependency.
- React implementation path.
- Manual verification steps and result.
- Any intentional behavior change, with explicit rationale and approval if it changes product scope.

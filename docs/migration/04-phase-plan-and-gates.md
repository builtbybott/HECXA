# Migration phases, gates and acceptance criteria

## Phase sequence

| Phase | Scope | Exit deliverable |
|---|---|---|
| 00 | Repository audit, architecture, feature map, security plan, instructions | This documentation reviewed and approved |
| 01 | React 19 + Vite + Tailwind CSS 4 foundation | Buildable isolated shell; no feature/data migration yet |
| 02 | Glassy UI registry evaluation/integration and HECXA tokens | Reusable accessible component foundation |
| 03 | Application shell, responsive navigation and route structure | Authenticated shell with navigation |
| 04 | Feature migration | Verified feature parity for approved scope |
| 05 | Supabase integration and data validation | Existing backend contract preserved and tested |
| 06 | Responsive/accessibility/performance hardening | Cross-device and accessibility report |
| 07 | Consolidated QA, bug fixing and regression | Release-readiness report and unresolved issue list |

## Approval gates

- Phase 00 is approved by the user's explicit approval already given in chat. This authorizes documentation preparation only.
- Phase 01 was explicitly approved by the user and is now in progress on `feature/phase-01-react-foundation`.
- Phase 02 must not start until Phase 01 is reviewed as complete and the user explicitly approves Phase 02.
- At each later phase boundary, stop and present deliverables for approval before starting the next phase.
- Do not ask the user to approve routine implementation decisions inside an approved phase. Make low-risk technical choices, document them and proceed.
- Ask for approval before destructive, external, paid, security-sensitive, irreversible or public actions.

## Testing policy

The user prefers a consolidated testing and bug-fixing phase after all planned implementation phases. Therefore:
- Do not impose a full QA/bug-fix gate after every implementation phase.
- Run only necessary local build, lint/syntax, type-independent static checks and smoke checks needed to continue safely.
- Record issues discovered during implementation in the tracker.
- Perform comprehensive visual, functional, security-regression and browser QA in Phase 07.

## Phase 01 acceptance criteria

- React 19+ and Vite are installed with reproducible package manifest and lockfile.
- Tailwind CSS 4 is configured using current official documentation.
- App starts locally and produces a production build.
- No Supabase schema writes, migrations or data changes occur.
- Legacy source remains intact and recoverable.
- No production deployment or paid service is created.
- Basic app shell loads without console errors.
- Environment variables are documented; secrets are not committed.
- Documentation records exact dependency versions and commands.

## Phase 02 acceptance criteria

- Glassy UI registry compatibility is confirmed against the selected React and Tailwind versions.
- Installed component source and transitive dependencies are reviewed.
- Components are locally owned and can be customized.
- HECXA logo, dark base and blue accent are preserved.
- Keyboard focus, contrast, reduced transparency and reduced motion are supported.
- Unsupported browser effects have a readable fallback.

## Phase 04/05 acceptance criteria

- Every migrated feature has a completed behavior-preservation checklist.
- Supabase tables and existing records remain intact.
- Auth/session lifecycle is correct.
- RLS isolation is verified using separate test accounts.
- No private data or credentials are exposed.
- README-only features are either verified and implemented or explicitly marked out of scope.

## Phase 07 consolidated QA

Test:
- Authentication, verification, password reset, refresh and logout.
- Tasks, notes, projects and each approved feature's CRUD paths.
- Search, dashboard metrics and assistant behavior.
- Responsive layouts and keyboard navigation.
- Browser console/network errors and failed requests.
- RLS cross-account isolation.
- Build and deployment artifact.
- Glass blur performance and fallback behavior.
- Visual consistency against approved HECXA design direction.

Final output: pass/fail matrix, defects fixed, known limitations, security notes, rollback instructions and release recommendation.

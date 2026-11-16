# Target architecture — HECXA

## Approved direction

- React 19+
- JavaScript and JSX initially
- Vite development/build tooling
- Tailwind CSS 4
- Glassy UI registry components, selectively adopted
- Existing Supabase backend and project retained
- Existing HECXA identity and logo retained
- Full Glass visual direction with dark base and electric-blue accent

## High-level architecture

```text
Browser
  |
  v
Vite-built React application
  |
  +-- App shell / route composition
  +-- Feature modules
  |     +-- Auth
  |     +-- Dashboard
  |     +-- Tasks
  |     +-- Notes
  |     +-- Projects
  |     +-- Calendar (only if verified/approved as a feature)
  |     +-- Assistant
  |     +-- Analytics
  |     +-- Profile / Settings
  |
  +-- Shared UI
  |     +-- Glassy UI registry components
  |     +-- HECXA-specific wrappers and tokens
  |
  +-- Supabase client boundary
        +-- Auth/session
        +-- Typed-by-contract data access (JS modules and documented row shapes)
        +-- Existing PostgreSQL tables and RLS
```

## Proposed directory layout

This is the target proposal, not a command to move files during Phase 00.

```text
HECXA/
├── public/
│   └── assets/                 # logo and static public assets
├── src/
│   ├── app/                    # app bootstrap, route composition, providers
│   ├── components/
│   │   ├── ui/                 # registry components installed/copied locally
│   │   ├── layout/             # sidebar, header, shell
│   │   └── shared/             # HECXA-specific reusable components
│   ├── features/
│   │   ├── auth/
│   │   ├── dashboard/
│   │   ├── tasks/
│   │   ├── notes/
│   │   ├── projects/
│   │   ├── calendar/
│   │   ├── assistant/
│   │   ├── analytics/
│   │   └── settings/
│   ├── lib/
│   │   └── supabase/           # client, auth adapter, data modules
│   ├── styles/                 # Tailwind entry, tokens, global styles
│   └── main.jsx
├── docs/
│   └── migration/
├── supabase/
│   └── migrations/             # reviewed additive SQL only, if required
├── index.html
├── package.json
└── vite.config.js
```

## Architectural rules

### React boundary

- React owns rendered UI state and component lifecycle.
- Do not mix legacy `innerHTML` page rendering into React-managed DOM.
- Do not use direct DOM mutation for ordinary component state.
- Use controlled inputs where state needs to be reflected in UI.
- Keep feature-specific UI and data operations close to their feature modules.
- Avoid adding a global state library unless verified complexity requires one.

### Supabase boundary

- Initialize one browser client from environment variables.
- Use only a Supabase publishable/anon key in the browser.
- Never embed a service-role/secret key.
- Keep Supabase calls behind feature data modules or a small repository/service layer; do not scatter raw queries through presentational components.
- Preserve table/column names and current row shapes until a separately reviewed schema migration is approved.
- RLS remains the authorization boundary; hiding UI controls is not authorization.

### UI and Glassy UI boundary

- Follow the current official Glassy UI installation/registry documentation when Phase 01 is authorized. Do not invent CLI arguments or assume every registry component is compatible with every browser.
- Registry components are copied/adapted into the project; inspect their source and dependencies.
- Use the registry's React/Tailwind prerequisites as actual prerequisites, not as a reason to adopt unrelated framework dependencies.
- Wrap or theme registry components to express HECXA identity consistently.
- Use full-glass treatments for shell, navigation, cards, overlays and controls, but preserve text contrast and data-table readability.
- Do not add decorative 3D/WebGL scenes or expensive continuous blur animation without a clear product need.

## Design tokens — initial proposal

| Token | Initial value |
|---|---|
| Background | `#050505` |
| Elevated dark | `#0B0D12` |
| Primary text | `#F4F6FA` |
| Muted text | `#9299A6` |
| Accent | `#78A9FF` (existing stylesheet value) |
| Glass fill | `rgba(18, 23, 34, 0.58)` |
| Glass border | `rgba(255, 255, 255, 0.13)` |
| Highlight | `rgba(255, 255, 255, 0.09)` |

These values are starting tokens for design exploration. Validate them against the supplied HECXA logo and actual page content before freezing the design system.

## Browser and accessibility requirements

- Provide a legible solid/translucent fallback when backdrop filtering is unavailable.
- Respect reduced transparency, reduced motion, forced-colors and increased-contrast preferences where supported.
- Maintain keyboard focus visibility, semantic labels, dialog focus handling and accessible names.
- Avoid relying on color alone for status.
- Test blur performance on lower-powered mobile devices.
- Avoid animating large blur regions or stacking many expensive filters.

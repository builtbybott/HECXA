# HECXA — Productivity Workspace

**A premium, dark-mode personal productivity workspace built by BOTT.** HECXA brings tasks, notes, projects, milestones, calendar events, goals, analytics, and a rule-based productivity assistant into one responsive web app.

> This repository is an open-source development build. It is not a hosted service, and it is not a security or compliance certification.

## Features

- Email/password authentication and persistent sessions via Supabase Auth
- Dashboard and workspace metrics
- Tasks with priorities, due dates, status, tags, projects, sorting, and filters
- Notes with tags, pinning, and favourites
- Projects, milestones, and progress tracking
- Calendar with task deadlines and events
- Goals and productivity analytics
- HECXA AI: local rule-based productivity assistance (not a remote LLM)
- Profile, appearance, and AI preference settings
- Global search and responsive desktop/mobile navigation

## Tech stack

- HTML, CSS, and vanilla JavaScript ES modules
- Supabase JavaScript client (loaded from CDN)
- Supabase Auth and PostgreSQL with Row Level Security (RLS)

## Run locally

1. Install a current version of a modern browser and a local static web server. For example, use the **Live Server** extension in Visual Studio Code.
2. Create a new Supabase project for your own development/testing.
3. In the Supabase dashboard, open **Project Settings → API** and copy the Project URL and **publishable** key (or legacy anon key).
4. Edit `config.js` and replace the two placeholder values with your own project URL and publishable/anon key.
5. Open the repository folder in VS Code and launch `index.html` using Live Server. Do not open it as a `file://` URL; ES modules require a local HTTP server.
6. In Supabase SQL Editor, review `supabase_schema.sql` and apply the schema to your **new test project**. Review any existing tables and policies first.
7. In Supabase Auth settings, configure the Site URL and redirect URLs for your local server address. For production, configure the exact deployed domain.
8. Create a test account and verify authentication, data isolation, and all CRUD actions before using the app with real data.

## Supabase configuration and security

- `config.js` is intentionally committed with placeholders. Add your own project settings locally.
- A Supabase publishable/anon key is designed for browser use, but **RLS policies are essential**. Never put a `service_role` key, secret key, database password, or payment-provider secret in frontend code or GitHub.
- Use a separate Supabase project for local testing; this repository does not include or promise access to the original developer's backend.
- Before production, audit every table, RLS policy, database function, storage bucket, and Auth redirect setting. Test that one user cannot read or alter another user's records.
- The SQL schema may need alignment with the exact app version and Supabase project. Back up data and review the SQL before applying it to an existing project.

## AI behaviour

The included HECXA assistant uses local rule-based logic over the signed-in user's workspace state. It does not call an external AI provider. Do not describe it as a generative AI integration unless one is added separately.

## Open source

This project is released under the [MIT License](LICENSE). Contributions, bug reports, and improvements are welcome. Please do not submit credentials, private user data, or production database dumps in issues or pull requests.

## Project status

- Stage: community/dev build
- Deployment: not included; deploy only after your own configuration and testing
- Payments: not implemented
- External LLM API: not implemented
- Security review: not independently audited

## Credits

HECXA is a BOTT project. Product identity and included brand assets remain subject to their respective rights; the MIT license covers the code as stated in the license, not third-party assets or services.

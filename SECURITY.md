# Security Policy

## Reporting a vulnerability

Please do not publish credentials, personal information, or a working exploit in a public issue. For now, open a private communication with the repository maintainer before sharing sensitive details.

## Important notes

- Never commit Supabase `service_role`/secret keys, database passwords, access tokens, or real user data.
- Use a dedicated development Supabase project.
- Verify Row Level Security on every exposed table before deployment.
- This project has not received an independent security audit. Do not use it for sensitive or production workloads without a review.

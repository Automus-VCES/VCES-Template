# Secure Development Skill

## Purpose
Apply security controls that match the app's real exposure, data, and impact.

## When to use
Use during app design and implementation, and whenever handling authentication, authorization, personal or sensitive data, file uploads, external input, payments, secrets, integrations, or deployment configuration. Apply the baseline to every project; deepen the review as risk increases.

## Workflow
1. Identify assets, users, trust boundaries, sensitive data, and likely abuse cases.
2. Enforce server-side authentication and authorization where applicable; never trust client-only checks.
3. Validate untrusted input at boundaries and use safe output encoding, parameterized queries, and safe process invocation.
4. Protect credentials, sessions, tokens, logs, uploads, and stored data.
5. Apply least privilege to users, services, CI, and integrations.
6. Review dependencies and security-sensitive configuration.
7. For exposed or high-impact systems, perform proportionate threat modeling and targeted security tests.
8. Record findings with severity, evidence, impact, remediation, and disposition.

## Verification
- Relevant access-control paths are tested, including denied access.
- Input and data boundaries are validated.
- No secrets or sensitive payloads are exposed in code or logs.
- High-risk findings have an authorized disposition.
- Controls match the app's exposure and impact.

## Avoid
Do not add security products or complex controls without a threat or requirement. Do not treat a checklist, scan, or passing build as proof that an app is secure.

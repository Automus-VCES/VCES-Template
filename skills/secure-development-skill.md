# Secure Development Skill

## Purpose
Apply security controls that match the app's real exposure, data, and impact.

## When to use
Use during app design and implementation, and whenever handling authentication, authorization, personal or sensitive data, file uploads, external input, payments, secrets, integrations, or deployment configuration. Apply the baseline to every project; deepen the review as risk increases.

## Workflow
1. Identify assets, users, trust boundaries, sensitive data, public entry points, and likely abuse cases.
2. Enforce server-side authentication and object/action/tenant-level authorization on every protected request; test denied access and entitlement boundaries.
3. Validate untrusted input at server-side trust boundaries; use context-aware output encoding, parameterized queries, and safe process invocation.
4. For uploads, ignore client MIME claims, validate content, enforce size/type/authorization, generate storage names, isolate storage outside executable roots, and disable script execution there.
5. For URL-fetch/import features, allow only approved destinations; block private, loopback, link-local, and metadata targets; validate DNS results and redirects; apply egress, timeout, and response-size limits.
6. Protect credentials, sessions, tokens, logs, uploaded files, and stored data. Keep secrets out of prompts, source, browser bundles, logs, and artifacts; revoke/rotate suspected exposures.
7. Apply least privilege to users, services, database accounts, CI, and integrations. Keep databases, caches, queues, and admin interfaces private by default.
8. Review dependencies, deployment configuration, DNS/resource decommissioning, and externally exposed ports/services.
9. For exposed or high-impact systems, perform proportionate threat modeling and targeted negative security tests.
10. Record findings with severity, evidence, impact, remediation, owner, and disposition.

## Verification
- Relevant access-control paths are tested, including denied, cross-user, cross-tenant, and unentitled access where applicable.
- Input and data boundaries are validated server-side.
- Uploads cannot execute as application code and are isolated from executable paths.
- URL-fetch features cannot reach prohibited internal or metadata destinations, including through redirects.
- Secrets and sensitive payloads are absent from code, prompts, browser bundles, logs, and artifacts.
- Public network exposure matches the approved architecture; internal data services and admin surfaces are restricted.
- High-risk findings have an authorized disposition.
- Controls match the app's exposure and impact.

## Avoid
Do not add security products or complex controls without a threat or requirement. Do not treat a checklist, scan, or passing build as proof that an app is secure.

# Secure Vibe Coding Checklist

> Use this as a risk-based implementation and review aid. It complements VCES; it is not a security certification. Mark controls N/A only with a reason. Record evidence for applicable controls.

## 1. Before prompting or implementing
- [ ] Identify the app's users, assets, sensitive data, trust boundaries, and externally reachable components.
- [ ] Define server-side authorization rules for every protected resource and action.
- [ ] Identify abuse cases for authentication, input, uploads, URL fetching, payments/entitlements, admin functions, and data changes where applicable.
- [ ] Confirm the target environment, deployment model, data classification, and required security level.
- [ ] Give the coding agent project-specific constraints, protected data/paths, approval boundaries, and required verification commands.

## 2. While vibe coding
- [ ] Treat AI-generated code and dependencies as untrusted proposals; inspect security-sensitive code and understand its behavior before accepting it.
- [ ] Validate all untrusted input on the server; do not trust client validation, MIME headers, filenames, hidden fields, or frontend route guards.
- [ ] Enforce authentication and object/action-level authorization on every server-side request; test both allowed and denied cases.
- [ ] Use parameterized database queries and safe process/API invocation; avoid dynamic evaluation and unsafe deserialization.
- [ ] Keep secrets in approved secret storage; never place them in source, prompts, logs, browser bundles, test fixtures, or committed environment files.
- [ ] Restrict uploads by authorization, size, type, content inspection, generated filenames, and storage isolation; disable execution in upload storage.
- [ ] Restrict server-side URL fetching to approved destinations; block loopback, private, link-local, metadata, and other prohibited destinations; validate redirects and resolved addresses.
- [ ] Keep databases, caches, queues, admin panels, and internal services off public interfaces unless explicitly required and protected.
- [ ] Apply least privilege to application identities, database accounts, cloud roles, CI tokens, and third-party integrations.
- [ ] Protect sensitive data in transit and at rest; minimize collection, retention, and exposure.
- [ ] Use generic external errors; keep diagnostic details in access-controlled logs without secrets or sensitive payloads.
- [ ] Review dependency provenance, known vulnerabilities, install scripts, and unnecessary packages.

## 3. Before merge or release
- [ ] Test authentication, authorization, tenant/object isolation, and entitlement checks at API level.
- [ ] Test malformed input, injection boundaries, upload isolation, URL-fetch restrictions, and error handling where applicable.
- [ ] Scan for committed secrets and dependency vulnerabilities using tools supported by the project.
- [ ] Run applicable static analysis, security tests, regression tests, and production build; record checks not run as not run.
- [ ] Verify production configuration: debug disabled, safe headers/TLS, restricted network exposure, secure cookies/sessions, and no default credentials.
- [ ] Verify migrations, backup scope/access, restore evidence, and rollback readiness for data-bearing systems.
- [ ] Review the complete diff, generated files, dependency lockfiles, workflow permissions, and deployment changes.
- [ ] Resolve critical findings before routine release; document authorized disposition and compensating controls for other material findings.

## 4. After deployment
- [ ] Verify externally exposed routes and services match the approved architecture.
- [ ] Confirm logs, alerts, backups, restore procedures, and incident contacts are operational.
- [ ] Revoke and rotate any credential suspected or confirmed exposed; investigate the exposure window.
- [ ] Reassess controls after material incidents, new integrations, data changes, or architecture changes.

## 5. Evidence record

| Control / finding | Result (pass / fail / N/A / not run) | Evidence or reason | Owner / follow-up |
|---|---|---|---|
| | | | |

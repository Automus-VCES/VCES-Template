# Project Engineering Standard

> Copy to the repository root as `PROJECT-STANDARD.md`. Replace bracketed prompts and remove genuinely irrelevant sections. Do not weaken VCES without an approved exception.

## 1. Identity and scope
- Project / repository:
- Purpose and supported users:
- Accountable owner:
- Risk level: [low / moderate / high / critical]
- Adopted VCES version and level: [Basic / Standard / Production]
- Supported platforms and compatibility commitments:
- Explicit non-goals:

## 2. Technology baseline

| Area | Choice | Version / constraint |
|---|---|---|
| Language | | |
| Runtime / framework | | |
| Database / storage | | |
| Package manager | | |
| Build / packaging | | |
| Hosting / deployment | | |

## 3. Engineering level and simplicity
- Selected level: [Basic / Standard / Production]
- Why this level fits the app's impact, exposure, and data sensitivity:
- Explicit complexity to avoid:
- Additional controls required by actual risks:

Start with the simplest maintainable design. Do not add architecture layers, dependencies, services, or process steps for hypothetical future needs. Mark genuinely irrelevant controls N/A with a short reason; do not treat missing evidence as N/A.

## 4. Architecture and boundaries
Describe architecture, module responsibilities, dependency direction, external services, trust boundaries, data ownership, and key constraints. Link to architecture docs and ADRs.

## 5. Coding conventions
- Formatting:
- Lint:
- Type/static analysis:
- Error handling and logging:
- Dependency policy:
- Generated files and runtime data:

## 6. Testing strategy

| Test type | Tool / command | Required scope |
|---|---|---|
| Unit | | |
| Integration | | |
| Regression | | |
| Acceptance / E2E | | |
| Security | | |
| Performance | | |
| Build / package | | |

Define critical journeys, failure scenarios, test data policy, and environment requirements.

## 7. Security and privacy

Document the controls that apply to this project's exposure, data, and impact. Mark N/A with a reason; do not leave material risks implicit.

- Authentication and authorization: server-side enforcement, object/action/tenant boundaries, entitlement checks, admin access.
- Trust boundaries and abuse cases: public APIs, webhooks, imports, external integrations, AI-generated code.
- Input/output and database safety: validation, encoding, parameterized queries, safe process invocation.
- File handling: allowed formats, content validation, size limits, storage isolation, non-executable upload paths.
- URL fetching/SSRF: destination allowlist, private/loopback/link-local/metadata blocking, redirect/DNS rebinding controls, egress limits.
- Secrets: approved storage, scope/rotation, scanning, prohibited locations (source, prompts, logs, browser bundles, artifacts).
- Infrastructure/runtime: public ports, database/cache/admin isolation, TLS/session/debug settings, least privilege.
- Dependencies and supply chain: lockfiles, provenance, vulnerability scanning, update policy.
- Data privacy: classification, minimization, retention, access, encryption, audit logging.
- Threat model and required negative security tests.
- Incident response, exposure notification, credential revocation, and remediation owner.

Use the [Secure Vibe Coding Checklist](SECURE-VIBE-CODING-CHECKLIST.md) as an adoption aid.

## 8. Data integrity and recovery
Document schemas, migrations, backup scope/schedule/retention, restore verification, recovery objectives, destructive-operation approval, and rollback.

## 9. Performance and reliability
Document workload, baselines, resource limits, database/query expectations, timeouts/retries/concurrency, monitoring, and recovery expectations.

## 10. Git and review
Define stable branch, short-lived branch convention, commit format, PR requirements, reviewers, required CI, merge strategy, and release tags.

## 11. CI/CD and deployment
Define workflows, required checks, artifact retention, environment promotion, approvals, health checks, and rollback.

## 12. AI agent constraints
Define instruction files, autonomous actions, approval-required actions, protected paths/data, required validation commands, and documentation expectations.

## 13. Definition of Done
Acceptance criteria satisfied; relevant checks actually run; final diff reviewed; necessary docs updated; remaining risks/blockers reported.

## 14. Approved exceptions

| Requirement | Rationale | Compensating control | Approver | Review / expiry |
|---|---|---|---|---|
| | | | | |

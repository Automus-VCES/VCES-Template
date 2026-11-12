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

## 3. Architecture and boundaries
Describe architecture, module responsibilities, dependency direction, external services, trust boundaries, data ownership, and key constraints. Link to architecture docs and ADRs.

## 4. Coding conventions
- Formatting:
- Lint:
- Type/static analysis:
- Error handling and logging:
- Dependency policy:
- Generated files and runtime data:

## 5. Testing strategy

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

## 6. Security and privacy
Document authentication, authorization, secret storage, input validation, encryption, dependency scanning, audit logging, privacy/retention, threat model, and required security reviews.

## 7. Data integrity and recovery
Document schemas, migrations, backup scope/schedule/retention, restore verification, recovery objectives, destructive-operation approval, and rollback.

## 8. Performance and reliability
Document workload, baselines, resource limits, database/query expectations, timeouts/retries/concurrency, monitoring, and recovery expectations.

## 9. Git and review
Define stable branch, short-lived branch convention, commit format, PR requirements, reviewers, required CI, merge strategy, and release tags.

## 10. CI/CD and deployment
Define workflows, required checks, artifact retention, environment promotion, approvals, health checks, and rollback.

## 11. AI agent constraints
Define instruction files, autonomous actions, approval-required actions, protected paths/data, required validation commands, and documentation expectations.

## 12. Definition of Done
Acceptance criteria satisfied; relevant checks actually run; final diff reviewed; necessary docs updated; remaining risks/blockers reported.

## 13. Approved exceptions

| Requirement | Rationale | Compensating control | Approver | Review / expiry |
|---|---|---|---|---|
| | | | | |

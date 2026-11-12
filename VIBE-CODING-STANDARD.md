# Vibe Coding Engineering Standard (VCES)

**Version:** 1.0.0 · **Status:** Initial baseline · **Scope:** Human-led, AI-assisted, and hybrid software engineering

## 1. Purpose and authority

VCES defines minimum controls for planning, implementing, validating, securing, documenting, and releasing software. It is technology-agnostic. Each adopting repository MUST define its own stack, architecture, domain constraints, and operational requirements in PROJECT-STANDARD.md. Project requirements may add stricter controls; project conventions MUST NOT silently weaken VCES mandatory requirements.

Apply this precedence: applicable law and binding organizational policy; approved project-specific security and operational requirements; VCES mandatory requirements; project conventions. Higher-level requirements may impose stricter controls but do not authorize weakening VCES. A deviation from a VCES requirement is permitted only through an explicitly authorized, documented exception where the requirement itself allows an exception or the accountable VCES owner approves it. Record scope, rationale, approver, compensating controls, and review/expiry date.

## 2. Normative language

**MUST / MUST NOT** are mandatory. **SHOULD / SHOULD NOT** are recommended unless a documented reason justifies deviation. **MAY** is optional. Claims of completion require evidence: test output, CI results, reviewed diffs, runtime checks, or documented inspection.

## 3. Core principles

1. Understand before changing.
2. Plan proportionately to risk.
3. Fix root causes, not symptoms.
4. Prefer the simplest maintainable solution.
5. Preserve existing behavior unless change is intentional.
6. Protect security, privacy, and data integrity.
7. Automate repeatable checks.
8. Keep documentation aligned with implementation.
9. Make changes reviewable and traceable.
10. Separate facts, assumptions, blockers, and risks.

### 3.1 Minimum sufficient engineering

VCES MUST be applied proportionately. Choose the simplest solution that satisfies the actual requirement and reduces a real risk.

- Start with the smallest maintainable design; add layers, abstractions, services, frameworks, dependencies, and infrastructure only when justified by a current requirement or evidenced risk.
- Do not design for hypothetical scale, speculative future features, or fashionable patterns.
- Select Basic, Standard, or Production controls using impact, exposure, data sensitivity, and operational dependency—not app size or developer preference.
- Small, low-risk work MAY use a short plan and focused tests. Material changes require explicit acceptance criteria and proportionate review. High-impact or externally exposed systems require stronger security, recovery, and release controls.
- Create ADRs only for consequential decisions. Do not create documents, tests, automation, or process steps that add no meaningful assurance.
- Reuse existing project capabilities before adding new dependencies or services. Prefer removing unnecessary complexity when doing so is safe.

**Decision test:** Does this addition satisfy an actual requirement or reduce a real risk? If not, do not add it.

## 4. Engineering lifecycle

**Discover → Assess → Plan → Implement → Validate → Secure → Document → Release → Maintain**

### 4.1 Discover

Before modifying an existing repository, inspect the Git branch and working tree, repository structure, project instructions, README and relevant architecture docs, stack and dependencies, build/test commands, CI/CD, deployment, data boundaries, and affected implementation/call sites. Do not assume the working tree is clean or documentation is current.

### 4.2 Assess and plan

For material work, define the objective, scope, current behavior, root cause, affected interfaces/data, risks, acceptance criteria, verification commands, approval points, and rollback considerations. Routine low-risk changes may use a short plan; broad refactors, migrations, security-sensitive work, and production changes need explicit plans and review.

### 4.3 Implement

Code MUST follow project conventions, validate untrusted input at trust boundaries, handle errors intentionally, avoid leaking secrets, preserve compatibility or document breaking changes, and include/update tests for changed behavior. Avoid unnecessary dependencies, abstractions, duplication, unrelated rewrites, and committing credentials, personal data, runtime state, or generated artifacts unless explicitly required.

### 4.4 Validate

Run applicable formatting, lint, type/static checks, unit/integration/regression/acceptance tests, security/dependency scans, production build, migration/data-integrity checks, and runtime smoke tests. Mandatory release checks MUST pass. A check that did not run is **not run** or **blocked**, never passed. Do not weaken checks just to get a green result.

### 4.5 Document and report

Update docs when setup, behavior, configuration, architecture, security, operations, or release procedures change. Substantial work reports MUST distinguish completed, verified, pending, blocked, and residual risks, with branch/commit/CI/artifact evidence where available.

## 5. Architecture and code quality

Document material architecture and constraints. Maintain understandable module boundaries, dependency direction, cohesive responsibilities, and clear interfaces. Use ADRs for consequential decisions. Define applicable format, lint, static analysis, and test commands. Review warnings; narrow suppressions require a documented reason. Do not add abstractions or optimize for hypothetical needs without justification.

## 6. Security and privacy

Security MUST be considered throughout design, implementation, review, and operations. Minimum controls:
- Keep secrets out of code, logs, artifacts, and issue reports; use approved secret storage and rotate exposed credentials.
- Apply least privilege to users, services, tokens, and CI workflows.
- Enforce authentication and authorization server-side.
- Validate input and encode output for its context.
- Use parameterized queries and safe process invocation.
- Protect sessions, tokens, passwords, and cryptographic material.
- Restrict file access and uploads.
- Minimize sensitive data collection, retention, and exposure.
- Review dependency vulnerabilities and updates.
- Log security events without credentials or sensitive payloads.

An unresolved critical vulnerability or active compromise blocks routine release. A critical vulnerability may proceed only under a formally approved incident/risk process with an accountable decision owner, documented impact, compensating controls, explicit scope, and review/expiry; active compromise requires incident response and is not eligible for an ordinary release exception. High-severity findings require documented assessment and authorized disposition. Threat modeling SHOULD match system exposure and impact.

## 7. Data integrity, backup, and recovery

Projects that store/process data MUST define data ownership/classification/retention, consistency rules, migration and rollback strategy, backup scope/frequency/access/retention, and recovery objectives proportionate to impact. Test migrations against representative data. Destructive data operations require explicit authorization and a verified recovery plan. A backup is not proven until restore has been tested.

## 8. Performance and reliability

Measure or establish a credible baseline where feasible. Review CPU, memory, resource lifetimes, database query plans/indexes/transactions, network and file I/O, latency, caching/invalidation, timeouts, retries, concurrency, and failure handling. Optimize evidenced bottlenecks; avoid speculative complexity and unbounded retries, queues, caches, or resource use.

## 9. Testing and release gates

Tests MUST be repeatable and relevant to risk. Include unit, integration, regression, acceptance, security, and performance tests as appropriate. Coverage percentages are indicators, not proof. Before release, acceptance criteria, mandatory tests/build, critical defect/security gates, migration/recovery checks, configuration, documentation, version/changelog, final diff, artifact, deployment, and rollback readiness MUST be verified.

A high health score never overrides a failed mandatory gate. Exceptions require an authorized decision, rationale, compensating controls, owner, and review/expiry. The critical-vulnerability exception process in Section 6 does not authorize release during active compromise.

## 10. Git, CI/CD, and supply chain

Keep changes scoped, reviewable, and attributable. Protect stable branches with appropriate checks and review. Do not rewrite shared history, force-push, or delete branches/tags without authorization. Review the complete diff.

CI MUST validate proposed changes and stable branches. Workflows SHOULD use least-privilege permissions, reviewed immutable action SHAs for production-grade use, reproducible dependency installation, and safe handling of untrusted pull requests. Separate validation, release, and deployment permissions. Identify and retain release artifacts; use provenance/checksums where appropriate. Production deployments and irreversible migrations require explicit authorization unless an approved automation policy says otherwise.

## 11. AI coding agent requirements

AI agents MUST read repository instructions, inspect actual code and Git state, distinguish facts from assumptions, identify risks, make the smallest coherent change, add/update tests and docs, run available verification, inspect the final diff, and report exact outcomes. They MUST NOT fabricate tests, files, commits, CI status, or deployment success.

Obtain approval before destructive data operations, production deployment, consequential security-policy changes, credential rotation, external-service changes, or merging/deleting important branches unless an explicit standing policy authorizes the action. Never expose secrets.

## 12. Documentation baseline

Maintain applicable documents: README, PROJECT-STANDARD, PROJECT-STATUS, AGENTS, CONTRIBUTING, SECURITY, CHANGELOG, architecture and development guides. Do not create empty documents just to satisfy a checklist. Keep documentation accurate and relevant.

## 13. Engineering health and exceptions

Use [the Engineering Health Check](docs/ENGINEERING-HEALTH-CHECK.md). Scores summarize evidence and do not override mandatory gates. Exceptions MUST be scoped, approved by the appropriate owner, and time-bound where possible. Review the standard periodically and after significant incidents or changes.

**Core rule:** Software is not production-ready merely because it runs, builds, or passes one test. It must be fit for purpose, maintainable, secure, tested, documented, and verifiable.

# Vibe Coding Engineering Standard (VCES)

**Version:** 1.0.0 · **Status:** Initial baseline · **Scope:** Human-led, AI-assisted, and hybrid software engineering

## 1. Purpose and authority

VCES defines minimum controls for planning, implementing, validating, securing, documenting, and releasing software. It is technology-agnostic. Each adopting repository MUST make applicable stack, architecture, domain constraints, and operational requirements discoverable. These MAY live in existing README/agent instructions/configuration or an optional PROJECT-STANDARD.md; a separate file is not mandatory. Project requirements may add stricter controls; project conventions MUST NOT silently weaken VCES mandatory requirements.

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

## 3.2 User-first engineering

The user should focus on the outcome they want; VCES and the coding agent handle engineering decisions. The agent MUST make routine technical choices using repository conventions and the simplest suitable approach; ask only questions that materially affect correctness, safety, scope, or irreversible decisions. Explain material risks and trade-offs in plain language. Avoid unnecessary plans, documents, checklists, and progress narration.

## 3.3 Automatic request-intent workflow

Classify natural-language requests automatically; users do not need special commands or to manage engineering steps:
- **Build/change:** understand the desired outcome; inspect context; clarify only essentials; choose a proportionate design; implement; verify; review the diff.
- **Audit/review:** inspect the existing implementation and configuration against applicable VCES requirements; report evidence-based findings and gaps; do not modify audited code unless remediation is requested.
- **Fix/debug:** establish evidence, identify root cause, make a focused correction, add regression coverage where useful, and verify.
- **Explain/advise:** explain observed state, reason, impact, and recommendation without unrequested changes.

#### Practical use: Build or Audit

Users can simply state the outcome. The agent MUST select the applicable path:

- **Build a new project:** understand the goal and essential constraints; select a suitable stack and simple architecture; establish project instructions and structure only as needed; implement security and reliability controls applicable to the project; test important behavior; verify the build and report remaining risks.
- **Audit an existing project:** inspect the repository and running/deployment context available; assess applicable VCES requirements; identify what is satisfied, missing, unsafe, or unverified; prioritize findings by severity and impact; report evidence and recommended fixes. Do not rewrite or remediate the project unless asked.

The agent MUST NOT require users to provide a technical checklist, choose skills, create every template, or run every possible tool. Ask only for information that materially changes the solution or risk.

## 3.4 Automatic skill selection

Skills are optional focused references, not mandatory rituals. Read only relevant files. If the host does not auto-load Markdown skills, explicitly open the relevant repository file; never claim a skill was loaded unless read.

| Skill file | Trigger |
|---|---|
| `skills/project-planning-skill.md` | New project, substantial feature, unclear scope, material risk |
| `skills/architecture-review-skill.md` | Stack/data model, boundaries, major integration, structural decision |
| `skills/secure-development-skill.md` | Baseline implementation; deepen for trust boundaries, auth, sensitive data, uploads, integrations, deployment |
| `skills/testing-debugging-skill.md` | Defects, behavior changes, regression, verification |
| `skills/code-review-skill.md` | Meaningful changes, security-sensitive work, pre-merge/release review |
| `security/application-security-skill.md` | Input/output, injection, uploads, SSRF |
| `security/authentication-security-skill.md` | Identity, sessions, passwords, MFA, recovery |
| `security/api-security-skill.md` | API authorization, tokens, rate limits, webhooks |
| `security/business-logic-security-skill.md` | Payments, pricing, workflows, entitlements |
| `security/data-security-skill.md` | Sensitive data, database access, exports, retention, backups |
| `security/infrastructure-security-skill.md` | Cloud, network, DNS, runtime, hosting, containers |
| `security/supply-chain-security-skill.md` | Dependencies, package scripts, CI/CD, build provenance |
| `security/ai-security-skill.md` | LLMs, agents, tools, RAG, prompt injection |
| `security/threat-modeling-security-skill.md` | New system/feature, trust boundaries, sensitive data, external integrations, material architecture changes |
| `security/security-testing-skill.md` | Security test design, vulnerability lifecycle, scanning, remediation verification |
| `security/incident-response-skill.md` | Suspected compromise, containment, recovery |

Load the smallest relevant set; do not load all skills by default. The canonical Standard takes precedence over skill guidance. Security severity and release decisions MUST follow Section 6.6; supporting skills MUST NOT introduce weaker or conflicting exception rules.

## 3.5 Audit finding format

Each audit finding MUST include **Severity** (Critical/High/Medium/Low/Informational), **Finding**, **Evidence** (file/line, configuration, test, or reproducible observation), **Impact**, **Recommended fix**, and **Confidence/status** (Confirmed/Suspected/Not verified). Order by severity and impact. State audit scope and checks not run; never present suspicion as confirmed fact.

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

Security MUST be considered throughout design, implementation, review, and operations. The following controls are mandatory where applicable; project-specific implementation details belong in PROJECT-STANDARD.md.

### 6.1 Identity, authorization, and API boundaries
- Authentication and authorization MUST be enforced server-side for every protected operation. Frontend visibility, route guards, hidden fields, and client-supplied roles are not security controls.
- Authorization MUST be checked for the requested object, tenant, action, and entitlement on every request. Tests MUST cover both permitted and denied access, including cross-user and cross-tenant access where applicable.
- Administrative functions and internal APIs MUST have explicit access controls, least privilege, and auditable security events.

### 6.2 Input, output, and server-side requests
- Treat all client input, uploaded content, webhooks, imported files, third-party responses, and AI-generated code as untrusted.
- Validate input server-side at trust boundaries; use context-appropriate output encoding, parameterized queries, and safe process invocation.
- Server-side URL fetching MUST use an explicit destination policy. Block loopback, private, link-local, multicast, and cloud metadata destinations unless specifically required and isolated. Validate resolved IPs and every redirect; defend against DNS rebinding; apply egress restrictions and response size/time limits.
- Avoid exposing stack traces, environment values, filesystem paths, internal addresses, credentials, or sensitive records in client errors.

### 6.3 File upload and execution isolation
- Upload endpoints MUST enforce authentication/authorization where required, size limits, generated storage names, content inspection, and an explicit allowlist of supported formats.
- Do not trust filename extensions or client-supplied MIME types. Validate file content; re-encode images/documents where appropriate.
- Store untrusted uploads outside executable application/web roots or in isolated object storage. Script execution MUST be disabled in upload storage. Serve files with safe content types and download policies.
- Test that uploaded content cannot execute as server-side code and cannot overwrite application files.

### 6.4 Secrets, data, and dependencies
- Keep secrets out of source, prompts, browser bundles, logs, artifacts, fixtures, and issue reports. Use approved secret storage, narrowly scoped credentials, and rotation/revocation after suspected exposure.
- Apply least privilege to application identities, database users, cloud roles, service accounts, CI tokens, and third-party integrations.
- Minimize sensitive data collection, retention, and exposure. Encrypt sensitive data in transit and at rest where appropriate.
- Review dependency provenance, vulnerabilities, lockfiles, lifecycle/install scripts, and unnecessary packages before adoption and during maintenance.

### 6.5 Infrastructure, runtime, and operations
- Databases, caches, queues, control panels, debug interfaces, and internal services MUST NOT be exposed to public networks unless explicitly required, isolated, authenticated, monitored, and approved.
- Non-standard ports, hidden URLs, CORS restrictions, or obscurity MUST NOT substitute for network isolation and authentication.
- Production MUST disable debug mode and default credentials, restrict management access, apply supported security updates, and use secure transport and session settings.
- DNS records and external resources MUST be reviewed during decommissioning; remove stale records and release cloud/hosting resources safely to prevent dangling-resource takeover.
- Security logging MUST avoid credentials and sensitive payloads. Define alerting and incident response appropriate to exposure and impact.

### 6.6 Security verification and release disposition
- Security-sensitive changes MUST include focused negative tests for denied access, invalid input, unsafe uploads, prohibited network destinations, and secret leakage as applicable.
- Use suitable static analysis, dependency and secret scanning, configuration checks, and dynamic tests proportionate to project risk. A scan or checklist is evidence of a check, not proof of security.
- An unresolved critical vulnerability or active compromise blocks routine release. A critical vulnerability may proceed only under a formally approved incident/risk process with an accountable decision owner, documented impact, compensating controls, explicit scope, and review/expiry; active compromise requires incident response and is not eligible for an ordinary release exception. High-severity findings require documented assessment and authorized disposition. Threat modeling MUST be performed for material changes involving new trust boundaries, sensitive data flows, privileged operations, external integrations, or significant exposure changes; use a lightweight review for low-risk changes. Record assets, entry points, trust boundaries, key abuse cases, mitigations, and residual risks.
- The [Security Standards Mapping](docs/SECURITY-STANDARDS-MAPPING.md) is an informative crosswalk to established references, not a blanket requirement to implement every control in every project.
- The [Secure Vibe Coding Checklist](templates/SECURE-VIBE-CODING-CHECKLIST.md) provides a practical adoption aid; it does not replace project-specific threat analysis or verification.

## 7. Data integrity, backup, and recovery

Projects that store/process data MUST define data ownership/classification/retention, consistency rules, migration and rollback strategy, backup scope/frequency/access/retention, and recovery objectives proportionate to impact. Test migrations against representative data. Destructive data operations require explicit authorization and a verified recovery plan. A backup is not proven until restore has been tested.

## 8. Performance and reliability

Measure or establish a credible baseline where feasible. Review CPU, memory, resource lifetimes, database query plans/indexes/transactions, network and file I/O, latency, caching/invalidation, timeouts, retries, concurrency, and failure handling. Optimize evidenced bottlenecks; avoid speculative complexity and unbounded retries, queues, caches, or resource use.

## 9. Testing and release gates

Tests MUST be repeatable and relevant to risk. Include unit, integration, regression, acceptance, security, and performance tests as appropriate. Coverage percentages are indicators, not proof. Before release, verify applicable acceptance criteria, required tests/build, critical defect and security disposition, migration/recovery checks, configuration, documentation, version/changelog, final diff, artifact, deployment, and rollback readiness. Controls that do not apply to the project MUST be recorded as not applicable only when there is a clear reason; do not create work for hypothetical components.

A high health score never overrides a failed mandatory gate. Exceptions require an authorized decision, rationale, compensating controls, owner, and review/expiry. The critical-vulnerability exception process in Section 6 does not authorize release during active compromise.

## 10. Git, CI/CD, and supply chain

Keep changes scoped, reviewable, and attributable. Protect stable branches with appropriate checks and review. Do not rewrite shared history, force-push, or delete branches/tags without authorization. Review the complete diff.

CI and automated workflows are OPTIONAL for projects where their setup and maintenance provide meaningful repeatable assurance. When CI is used, it MUST run the checks the project relies on and report failures accurately. Workflows SHOULD use least-privilege permissions, reviewed immutable action SHAs for production-grade use, reproducible dependency installation, and safe handling of untrusted pull requests. Separate validation, release, and deployment permissions. Identify and retain release artifacts; use provenance/checksums where appropriate when risk warrants them. Production deployments and irreversible migrations require explicit authorization unless an approved automation policy says otherwise.

## 11. AI coding agent requirements

AI agents MUST read repository instructions, inspect actual code and Git state, distinguish facts from assumptions, identify risks, make the smallest coherent change, add/update tests and docs, run available verification, inspect the final diff, and report exact outcomes. They MUST NOT fabricate tests, files, commits, CI status, or deployment success.

Obtain approval before destructive data operations, production deployment, consequential security-policy changes, credential rotation, external-service changes, or merging/deleting important branches unless an explicit standing policy authorizes the action. Never expose secrets.

## 12. Documentation baseline

Maintain documentation that the project actually needs. A concise README and useful agent instructions may be sufficient for a small project. Add PROJECT-STANDARD, PROJECT-STATUS, CONTRIBUTING, SECURITY, CHANGELOG, architecture, or development documents only when they solve a real coordination, security, operational, or maintenance need. Do not create empty documents or duplicate the standard just to satisfy a checklist. Keep maintained documentation accurate and relevant.

## 13. Engineering health and exceptions

Use [the Engineering Health Check](docs/ENGINEERING-HEALTH-CHECK.md). Scores summarize evidence and do not override mandatory gates. Exceptions MUST be scoped, approved by the appropriate owner, and time-bound where possible. Review the standard periodically and after significant incidents or changes.

**Core rule:** Software is not production-ready merely because it runs, builds, or passes one test. It must be fit for purpose, maintainable, secure, tested, documented, and verifiable.

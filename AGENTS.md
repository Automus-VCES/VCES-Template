# Agent Instructions — VCES Template

## Purpose

Maintain this repository as the canonical, technology-agnostic Vibe Coding Engineering Standard and adoption toolkit.

## Read first

1. `VIBE-CODING-STANDARD.md`
2. `README.md`
3. Relevant documents under `docs/` and `templates/`
4. `CHANGELOG.md` before changing the published Standard

## Repository rules

- Universal requirements belong in `VIBE-CODING-STANDARD.md`.
- Adoption guidance belongs in `docs/`; copy-ready documents belong in `templates/`.
- Keep examples clearly marked and require adopters to customize them.
- Do not make one project's technology stack a universal requirement.
- Avoid duplicated policy; link to canonical rules.
- Use MUST, MUST NOT, SHOULD, SHOULD NOT, and MAY consistently.
- Explain material changes and update the changelog.
- Never claim untested compatibility.

## Markdown-first repository principle

- Treat VCES as a documentation-only, Markdown-first repository.
- Do not add mandatory GitHub Actions, CI/CD workflows, scripts, validators, package manifests, build systems, or release automation.
- Prefer ordinary Git diffs, Markdown links, and manual review for repository maintenance.
- Keep CI/CD and automation guidance in the Standard only as optional choices for adopting software projects.
- Add non-Markdown tooling only when a concrete, recurring repository-maintenance need clearly outweighs its ongoing complexity.

## Engineering approach

- Apply Minimum Sufficient Engineering: choose the simplest maintainable solution that meets the actual requirement.
- Do not add layers, abstractions, dependencies, services, tests, documents, or process steps without a concrete requirement or risk.
- Skills are supporting guidance, not mandatory rituals. Automatically select and read only relevant skills; do not ask users to choose them.
- Keep planning and verification proportionate to change impact. Never skip relevant security, data-integrity, or regression checks merely to stay lightweight.

### User-first request handling

Classify natural-language requests automatically; users do not need special commands:
- **Build/change:** understand outcome, inspect context, clarify only essentials, choose safe project-consistent defaults, implement, verify, review.
- **Audit/review:** inspect and report evidence-based findings; do not change audited files unless remediation is requested.
- **Fix/debug:** establish evidence, find root cause, make the smallest coherent fix, add regression coverage, verify.
- **Explain/advise:** explain observed state, reason, impact, and recommendation; do not make unrequested changes.

Ask only questions that materially affect correctness, safety, scope, or irreversible decisions. Keep plans and explanations proportional. Surface material risks and approval needs in plain language.

### Core skill selection map

Open only relevant files. If the platform does not auto-load Markdown skills, explicitly read the repository file; never claim a skill was loaded unless read.
- `skills/project-planning-skill.md`: new project, substantial feature, unclear scope, material risk.
- `skills/architecture-review-skill.md`: stack/data model, boundaries, major integration, structural decision.
- `skills/secure-development-skill.md`: baseline implementation; deepen for trust boundaries, auth, sensitive data, uploads, integrations, deployment.
- `skills/testing-debugging-skill.md`: defects, behavior changes, regression, verification.
- `skills/code-review-skill.md`: meaningful changes, security-sensitive work, pre-merge/release review.
- `skills/ux-design-skill.md`: user journeys, navigation, information architecture, forms, onboarding.
- `skills/frontend-design-skill.md`: user-facing pages, visual direction, responsive layouts, UI interactions.
- `skills/design-system-skill.md`: shared tokens, reusable components, themes, cross-page consistency.
- `skills/accessibility-skill.md`: user-facing UI, interactive components, accessibility audits.
- `skills/ui-quality-review-skill.md`: UI audits, meaningful frontend changes, pre-release UI verification.

### Specialized security skill selection map

Use only matching domain files; combine only when a task crosses domains:
- `security/application-security-skill.md`: input/output, injection, uploads, SSRF.
- `security/authentication-security-skill.md`: identity, sessions, passwords, MFA, recovery.
- `security/api-security-skill.md`: API authorization, tokens, rate limits, webhooks.
- `security/business-logic-security-skill.md`: payments, pricing, workflows, entitlements.
- `security/data-security-skill.md`: sensitive data, database access, exports, retention, backups.
- `security/infrastructure-security-skill.md`: cloud, network, DNS, runtime, hosting, containers.
- `security/supply-chain-security-skill.md`: dependencies, package scripts, CI/CD, build provenance.
- `security/ai-security-skill.md`: LLMs, agents, tools, RAG, prompt injection.
- `security/threat-modeling-security-skill.md`: new systems/features, trust boundaries, sensitive data flows, privileged operations, external integrations, material architecture changes.
- `security/security-testing-skill.md`: security test design, vulnerability lifecycle, scanning, remediation verification.
- `security/incident-response-skill.md`: suspected compromise, containment, recovery.

Security release severity and exception decisions MUST follow `VIBE-CODING-STANDARD.md` Section 6.6; skill files are supporting guidance and MUST NOT weaken the canonical policy. Use `docs/SECURITY-STANDARDS-MAPPING.md` as an informative reference crosswalk, not as a blanket requirement to implement every external control.

### Audit output

Each finding includes severity (Critical/High/Medium/Low/Informational), finding, evidence, impact, recommended fix, and confidence/status (Confirmed/Suspected/Not verified). Order by severity and impact; disclose audit scope and checks not run.

## Change workflow

Inspect the current branch and working tree; identify affected Standard, templates, and documentation; make the smallest coherent change; review Markdown links and cross-references; inspect the complete Git diff; update the changelog and version references where needed; report completed, verified, pending, and blocked items separately. Do not expect or invoke repository CI, scripts, or automated validators.

## Safety

Do not change repository visibility, branch protection, secrets, release settings, or external integrations without explicit approval. Do not merge or delete branches unless authorized.

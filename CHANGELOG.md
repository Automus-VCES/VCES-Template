# Changelog

All notable changes are recorded here. VCES uses Semantic Versioning for normative requirements.

## [Unreleased]

### Changed
- Make the VCES repository Markdown-first and documentation-only; remove repository CI/CD, workflow examples, scripts, validators, and automated release requirements while keeping automation optional for adopting software projects.

### Changed
- Add proportionate pre-implementation design and post-implementation UI/UX verification gates to reduce avoidable rework; clarify that unavailable visual/accessibility checks must be reported as not run or blocked.

### Added
- Add five focused UI/UX skills for UX design, frontend design, design systems, accessibility, and UI quality review, with source references and verification criteria rather than duplicated external documentation.
- Add a lightweight threat-modeling security skill for material trust-boundary, data-flow, privilege, and integration changes.
- Add an informative crosswalk from VCES security requirements to OWASP, NIST SSDF, Microsoft SDL, and OpenSSF/SLSA references.

### Changed
- Align security-testing release disposition with the canonical Critical/High severity policy and clarify vulnerability ownership, remediation, retesting, and closure.
- Strengthen application security guidance for browser security headers, CSP, CORS, clickjacking protection, and credential storage.
- Add threat-modeling skill routing and clarify that external standards mapping is informative rather than a blanket adoption mandate.
- Extend repository validation to require the threat-modeling skill and security standards mapping, with regression coverage for the expanded skill set.


### Changed
- Clarify the practical Build and Audit paths so users can state an outcome while agents select proportionate engineering steps automatically.
- Make templates, separate project documents, scanners, CI, and branch-protection policies explicitly optional unless a project-specific need justifies them.
- Remove the VCES repository's blocking Trivy filesystem gate and release dependency; retain focused template validation and GitHub Actions workflow analysis for repository maintenance.
- Align README, adoption, security, and release guidance with VCES as a reusable engineering Standard rather than a mandatory toolchain.


### Added
- Keep an optional application security scanning workflow example for adopters to tailor to their technology and risk.

### Changed
- Document optional GitHub security settings and Dependency Review capability without making branch protection a VCES prerequisite.

### Changed
- Make separate PROJECT-STANDARD.md optional; project-specific requirements may live in existing project documentation or agent instructions.
- Define automatic Build, Audit, Fix, and Explain workflows with clear boundaries between review and remediation.
- Add explicit core and domain security skill filename-to-trigger mapping, including fallback guidance for agents that do not auto-load Markdown skills.
- Standardize audit finding severity, evidence, impact, remediation, and confidence/status reporting.
- Add user-first interaction rules: ask only essential questions, choose safe technical defaults, and keep plans and explanations proportionate.

### Changed
- Clarify that adoption templates, checklists, health assessments, and CI/security workflows are optional and project-tailored.
- Add automatic core and domain skill-selection guidance for coding agents so users do not need to invoke skills manually.
- Reduce adoption guidance to focus on the Standard and relevant project instructions, with supporting artifacts added only when useful.

### Added
- Add a risk-based Secure Vibe Coding Checklist covering authorization, uploads, SSRF, secrets, infrastructure exposure, verification, and post-deployment checks.
- Add explicit secure implementation and runtime controls to the canonical standard and project/agent templates.
- Add five focused flat Markdown skills for planning, architecture, secure development, testing/debugging, and code review.
- Add a flat `security/` skill library covering application, authentication, API, business logic, data, infrastructure, supply chain, AI, security testing, and incident response.
- Extend repository validation to require all security skills and their core guidance sections.

### Changed
- Define Minimum Sufficient Engineering and explicit anti-overengineering decision rules.
- Clarify that skill use, documentation, planning, and verification are triggered by need and scaled to risk.
- Keep repository validation and workflow analysis proportionate to maintaining the Standard; application scanning and branch protection remain project-specific choices.
- Clarify VCES requirement precedence and align critical-vulnerability exception handling with release override gates.
- Add evidence-based N/A scoring with normalized weights to the engineering health assessment.
- Strengthen repository validation with required workflow examples, Markdown link safety checks, and automated regression tests.
- Harden reusable Node.js, Python, Flutter, and CodeQL workflows with configurable toolchains and immutable action pins.
- Validate workflow YAML syntax in CI and require Node test/build scripts in the Node.js starter.
- Validate VCES releases against canonical SemVer tags and verified main-branch ancestry.
- Clarify private vulnerability reporting setup and maintainer responsibilities.

## [1.0.0] - 2026-11-11

### Added
- Initial technology-agnostic engineering standard.
- AI coding agent operating requirements and approval boundaries.
- Project standard, status, agent, contribution, security, and ADR templates.
- Adoption guide, engineering health check, and release process.
- Starter CI workflows for Node.js, Python, and Flutter.
- Repository self-validation, dependency review, and Dependabot configuration.

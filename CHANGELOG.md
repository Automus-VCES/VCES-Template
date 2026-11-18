# Changelog

All notable changes are recorded here. VCES uses Semantic Versioning for normative requirements.

## [Unreleased]

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
- Keep the existing security, release, and CI controls while prioritizing a compact personal-use workflow.
- Clarify VCES requirement precedence and align critical-vulnerability exception handling with release override gates.
- Add evidence-based N/A scoring with normalized weights to the engineering health assessment.
- Strengthen repository validation with required workflow examples, Markdown link safety checks, and automated regression tests.
- Harden reusable Node.js, Python, Flutter, and CodeQL workflows with configurable toolchains and immutable action pins.
- Validate workflow YAML syntax in CI and require Node test/build scripts in the Node.js starter.
- Gate releases on canonical SemVer tag matching and verified main-branch ancestry.
- Clarify private vulnerability reporting setup and maintainer responsibilities.

## [1.0.0] - 2026-11-11

### Added
- Initial technology-agnostic engineering standard.
- AI coding agent operating requirements and approval boundaries.
- Project standard, status, agent, contribution, security, and ADR templates.
- Adoption guide, engineering health check, and release process.
- Starter CI workflows for Node.js, Python, and Flutter.
- Repository self-validation, dependency review, and Dependabot configuration.

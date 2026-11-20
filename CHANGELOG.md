# Changelog

All notable changes are recorded here. VCES uses Semantic Versioning for normative requirements.

## [Unreleased]

No unreleased changes.

## [1.0.0] - 2026-11-20

Personal-use release. This release consolidates the initial baseline (first published 2026-11-11) and the refinements finalized for the VCES v1 standard.

### Added
- Initial technology-agnostic engineering standard and AI coding agent operating requirements, including approval boundaries.
- Project instructions and optional project-document templates, adoption guide, engineering health check, and manual release process.
- Focused skills for planning, architecture, secure development, testing/debugging, code review, UX, frontend design, design systems, accessibility, and UI quality review.
- Domain-specific security skills covering application, authentication, API, business logic, data, infrastructure, supply chain, AI, threat modeling, security testing, and incident response.
- Risk-based Secure Vibe Coding Checklist and informative mapping to OWASP, NIST SSDF, Microsoft SDL, and OpenSSF/SLSA.
- Optional guidance for GitHub security configuration and adopter-tailored application security scanning.

### Changed
- Make VCES Markdown-first and documentation-only: remove repository CI/CD, workflow examples, scripts, validators, and automated release requirements. Automation remains optional for adopting software projects.
- Define Minimum Sufficient Engineering and proportionate controls based on impact, exposure, data sensitivity, and operational dependency.
- Establish automatic Build, Audit, Fix, and Explain request-intent workflows and automatic selection of only relevant skills.
- Clarify that templates, separate project documents, scanners, CI, and branch-protection policies are optional unless justified by a concrete project need.
- Add lightweight design and post-implementation UI/UX verification gates; unavailable checks must be reported as not run or blocked.
- Strengthen security requirements for authorization, input validation, SSRF, uploads, secrets, dependencies, infrastructure exposure, threat modeling, and security verification.
- Align security-testing guidance with the canonical Critical/High severity and release-disposition policy.
- Standardize audit findings around severity, evidence, impact, remediation, and confidence/status.
- Clarify VCES requirement precedence, exception handling, evidence-based N/A scoring, and verification claims.
- Align README, adoption, security, and release guidance with VCES as a reusable engineering Standard rather than a mandatory toolchain.

### Initial baseline
- First baseline published 2026-11-11.
- Included the initial standard, agent requirements, adoption and health-check guidance, templates, starter CI workflows, repository validation, dependency review, and Dependabot configuration.

### Release note
- Designated for personal use. No open-source or other reuse license is granted by this designation.
- Real-world Build/Audit trial remains pending and is not represented as completed.

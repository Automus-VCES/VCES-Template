# Changelog

All notable changes are recorded here. VCES uses Semantic Versioning for normative requirements.

## [Unreleased]

### Changed
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

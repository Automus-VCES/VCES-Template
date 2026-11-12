# VCES Repository Remediation Implementation Plan

> **For agentic workers:** Use the executing-plans workflow to implement this plan task-by-task. Steps use checkbox syntax for tracking.

**Goal:** Close the audit's highest-priority gaps in repository self-validation, reusable workflow safety, release verification, policy consistency, health scoring, and governance without changing `main`.

**Architecture:** Keep VCES technology-agnostic. Strengthen the existing zero-dependency Node validator, add built-in Node tests, validate workflow YAML in CI, harden example workflows, and make release checks fail closed. Clarify policy and N/A scoring in the canonical documents.

**Tech Stack:** Node.js 22+ built-in test runner; GitHub Actions; Ruby YAML parser on GitHub-hosted Ubuntu; Markdown.

**Spec:** Audit findings and user-approved remediation request in the conversation.

## Global Constraints

- Work only on `vces/remediation-v1`, based on main commit `18c2316d04f849efa031af0c8f438bf83691fa21`.
- Do not modify main, merge any PR, or delete any branch.
- Keep the validator dependency-free.
- Mandatory tests and build commands must not silently skip.
- Third-party actions in reusable workflows must use verified immutable commit SHAs.
- Keep license selection with the repository owner; do not choose a license.
- Do not invent a security contact or claim private vulnerability reporting is enabled.
- Keep release permissions limited to the publishing job.

## Review Focus

- Missing starter workflow example must make validation fail.
- Broken, encoded, and repository-escaping Markdown links must be rejected.
- Invalid YAML in starter or repository workflows must fail CI.
- A missing Node test or build script must fail the Node starter workflow.
- A release tag that does not match the canonical version or is not reachable from main must not publish.
- N/A dimensions must not distort the health score or bypass release gates.

---

### Task 1: Validator regression tests and required-file coverage

**Files:**
- Create: `scripts/validate-template.test.mjs`
- Modify: `scripts/validate-template.mjs`
- Modify: `.github/workflows/ci.yml`

**Interfaces:**
- Validator exports `validateTemplate(root)` returning `{ errors, requiredCount, markdownCount }`.
- CLI remains `node scripts/validate-template.mjs`.

- [ ] Add tests for missing starter workflow, broken internal link, repository path escape, and a valid fixture.
- [ ] Run tests and confirm they fail against the current validator behavior.
- [ ] Refactor validator into importable function and include every starter workflow in required files.
- [ ] Run the Node test suite and validator.

### Task 2: Workflow starter hardening and syntax validation

**Files:**
- Modify: `templates/workflows/node-ci.yml.example`
- Modify: `templates/workflows/python-ci.yml.example`
- Modify: `templates/workflows/flutter-ci.yml.example`
- Modify: `templates/workflows/security-codeql.yml.example`
- Modify: `.github/workflows/ci.yml`
- Modify: `docs/ADOPTION-GUIDE.md`
- Modify: `docs/GITHUB-SECURITY-CONFIGURATION.md`

- [ ] Make Node test and build steps mandatory; clearly document optional lint/typecheck steps.
- [ ] Make Node, Python, and Flutter versions configurable through repository variables with documented defaults.
- [ ] Pin third-party actions to verified immutable SHAs.
- [ ] Validate all repository workflows and starter workflow examples as YAML during CI.
- [ ] Run the validator, its tests, and YAML parser against every workflow.

### Task 3: Release gate hardening

**Files:**
- Modify: `.github/workflows/release.yml`
- Modify: `scripts/validate-template.mjs`
- Create: `scripts/validate-release.mjs`
- Create: `scripts/validate-release.test.mjs`
- Modify: `docs/RELEASE-PROCESS.md`

- [ ] Add failing tests for malformed tags, version mismatch, and tag commit not reachable from main.
- [ ] Implement SemVer and canonical version validation.
- [ ] Require the tagged commit to be reachable from main.
- [ ] Run repository validation before publishing.
- [ ] Run all Node tests.

### Task 4: Standard consistency and health scoring

**Files:**
- Modify: `VIBE-CODING-STANDARD.md`
- Modify: `docs/ENGINEERING-HEALTH-CHECK.md`
- Modify: `README.md`

- [ ] Clarify precedence: law/organizational policy and approved project requirements may impose stricter controls; VCES mandatory requirements cannot be weakened except by documented, authorized, time-bounded exception.
- [ ] Align critical vulnerability release gates with the documented incident/risk exception process.
- [ ] Add N/A scoring: remove N/A dimensions from denominator and normalize remaining weights; document evidence and rationale.
- [ ] Clarify that mandatory release gates remain independent of the weighted score.

### Task 5: Security reporting and release/CI evidence

**Files:**
- Modify: `SECURITY.md`
- Modify: `templates/SECURITY.md`
- Modify: `CHANGELOG.md`
- Modify: `README.md`

- [ ] Add clear setup guidance for private vulnerability reporting without inventing a contact or claiming the feature is enabled.
- [ ] Document the repository owner's licensing decision remains pending.
- [ ] Record all remediation changes in an unreleased changelog section.
- [ ] Run full validation, tests, YAML parsing, and workflow security analysis via PR CI.
- [ ] Inspect the complete branch diff and report verified evidence.

## Review Focus / Acceptance

The branch must have a passing template validator, passing Node tests, parseable workflow YAML, mandatory Node test/build examples, pinned action references, and a release workflow that validates tag/version/main ancestry before publishing. CI and security checks must be observed on the branch/PR. Main remains unchanged; PR may be opened for review but must not be merged.

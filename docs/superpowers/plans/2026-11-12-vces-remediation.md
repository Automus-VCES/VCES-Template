# VCES Repository Remediation Implementation Plan

> **For agentic workers:** Execution completed on the isolated remediation branch. Main and branch cleanup were intentionally left untouched.

**Goal:** Close the audit's highest-priority gaps in repository self-validation, reusable workflow safety, release verification, policy consistency, health scoring, and governance without changing main.

**Architecture:** Keep VCES technology-agnostic. Strengthen the existing zero-dependency Node validator, add built-in Node tests, validate workflow YAML in CI, harden example workflows, and make release checks fail closed. Clarify policy and N/A scoring in the canonical documents.

**Tech Stack:** Node.js 22+ built-in test runner; GitHub Actions; Ruby YAML parser on GitHub-hosted Ubuntu; Markdown.

**Spec:** Audit findings and user-approved remediation request in the conversation.

## Global Constraints

- Work only on vces/remediation-v1, based on main commit 18c2316d04f849efa031af0c8f438bf83691fa21.
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

**Files:** scripts/validate-template.test.mjs, scripts/validate-template.mjs, .github/workflows/ci.yml

**Interfaces:** Validator exports validateTemplate(root) returning { errors, requiredCount, markdownCount }. CLI remains node scripts/validate-template.mjs.

- [x] Add tests for missing starter workflow, broken internal link, repository path escape, malformed encoding, and a valid fixture.
- [x] Run tests and confirm they fail against the current validator behavior (RED observed in GitHub Actions).
- [x] Refactor validator into importable function and include every starter workflow in required files.
- [x] Run the Node test suite and validator.

### Task 2: Workflow starter hardening and syntax validation

**Files:** templates/workflows/*, .github/workflows/ci.yml, docs/ADOPTION-GUIDE.md, docs/GITHUB-SECURITY-CONFIGURATION.md

- [x] Make Node test and build steps mandatory; document optional lint/typecheck steps.
- [x] Make Node, Python, and Flutter versions configurable through repository variables with documented defaults.
- [x] Pin third-party actions to verified immutable SHAs.
- [x] Validate all repository workflows and starter workflow examples as YAML during CI.
- [x] Run the validator, its tests, and YAML parser against every workflow.

### Task 3: Release gate hardening

**Files:** .github/workflows/release.yml, scripts/validate-release.mjs, scripts/validate-release.test.mjs, docs/RELEASE-PROCESS.md

- [x] Add tests for malformed tags, version mismatch, invalid canonical version, and tag commit not reachable from main.
- [x] Implement strict vMAJOR.MINOR.PATCH and canonical version validation.
- [x] Require the tagged commit to be reachable from origin/main.
- [x] Run tests, template validation, YAML parsing, and zizmor in the read-only validation job.
- [x] Publish only from a separate job with contents: write after validation succeeds.

### Task 4: Standard consistency and health scoring

**Files:** VIBE-CODING-STANDARD.md, docs/ENGINEERING-HEALTH-CHECK.md, README.md

- [x] Clarify requirement precedence and approved exception boundaries.
- [x] Align critical-vulnerability release gates with the documented incident/risk exception process.
- [x] Add N/A scoring with normalized weights, evidence, and rationale.
- [x] Keep mandatory release gates independent of the weighted score.

### Task 5: Security reporting and repository governance

**Files:** SECURITY.md, templates/SECURITY.md, CHANGELOG.md, README.md

- [x] Clarify private vulnerability reporting setup without inventing a contact or claiming the feature is enabled.
- [x] Preserve the repository owner's pending licensing decision; no license was selected.
- [x] Record remediation changes in an Unreleased changelog section.
- [x] Run full validation, tests, YAML parsing, and workflow security analysis via PR CI.
- [x] Inspect the complete branch diff and record remaining owner decisions.

## Final review

- [x] Validator regression tests: 10 passed, 0 failed.
- [x] Required files: 28 present.
- [x] Markdown links: 16 files checked.
- [x] Workflow YAML: 7 files parsed.
- [x] Workflow security analysis: zizmor passed.
- [x] Main remains unchanged.
- [x] PR #5 remains draft/open and unmerged.
- [x] No branches deleted.

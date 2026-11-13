# Security Automation Gate Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox syntax for tracking.

**Goal:** Add CI security scanning and make critical security findings block release readiness.

**Architecture:** Extend the existing least-privilege GitHub Actions security workflow instead of introducing a parallel pipeline. Use pinned, supported scanners; wire the security job into release validation and document repository-level required-check setup.

**Tech Stack:** GitHub Actions, Node.js test runner, existing VCES Markdown/YAML validation, pinned security scanner tooling.

**Spec:** docs/superpowers/specs/2026-11-13-security-automation-gate-design.md

## Global Constraints
- Keep workflow permissions least-privilege; default to no permissions and grant per job.
- Pin third-party actions to immutable full commit SHAs.
- Do not require GitHub Advanced Security to run baseline checks.
- Fail closed for confirmed secrets, critical vulnerabilities, and scanner execution failures.
- Never claim security certification from a passing scan.
- Do not run intrusive tests against production systems.

## Review Focus
- Forked pull requests must not receive write-capable tokens or secrets.
- Scanner failures/timeouts must not be converted into successful/skipped results.
- False positives must have explicit, reviewable suppression with expiry/reason where supported.
- Lockfile absence or unsupported package ecosystems must be visible rather than silently treated as scanned.
- Release workflow must depend on the security gate and not allow a skipped gate to satisfy the dependency.

---

### Task 1: Add policy tests and reusable security gate policy

**Files:**
- Create: `scripts/security-gate-policy.mjs`
- Create: `scripts/security-gate-policy.test.mjs`
- Modify: `scripts/validate-template.mjs`
- Modify: `scripts/validate-template.test.mjs`

**Interfaces:**
- Produces: `evaluateSecurityFindings(findings, policy) -> { blocked, blockingFindings }`; each finding has `severity`, `ruleId`, and `message`.

- [ ] Write tests for critical/high blocking findings, low/informational non-blocking findings, and malformed/unknown severities failing closed.
- [ ] Run `node --test scripts/security-gate-policy.test.mjs` and confirm expected failures before implementation.
- [ ] Implement the smallest pure policy helper.
- [ ] Run focused tests and then `node --test scripts/*.test.mjs`.
- [ ] Add the helper and tests to required repository files and verify validator coverage.

### Task 2: Add security scanner workflow

**Files:**
- Modify: `.github/workflows/security.yml`
- Create: `.github/workflows/security-gate.yml` only if separation is needed to preserve existing optional jobs.
- Modify: `templates/workflows/security-codeql.yml.example` if reusable starter guidance changes.
- Test: YAML parser via existing CI.

**Interfaces:**
- Consumes: scanner policy from Task 1 if a local report adapter is required.
- Produces: a stable required check named `security-gate`.

- [ ] Keep zizmor workflow analysis.
- [ ] Add secret scanning and dependency/source scanning with immutable action/tool versions.
- [ ] Explicitly configure severity thresholds and fail behavior.
- [ ] Ensure fork PRs run read-only and never receive secrets or write permissions.
- [ ] Parse all workflow YAML and verify permissions/action pinning.

### Task 3: Enforce gate before release and document operations

**Files:**
- Modify: `.github/workflows/release.yml`
- Modify: `docs/GITHUB-SECURITY-CONFIGURATION.md`
- Modify: `docs/ADOPTION-GUIDE.md`
- Modify: `README.md`
- Modify: `CHANGELOG.md`
- Modify: `scripts/validate-template.mjs` and tests as needed.

- [ ] Make release validation depend on the security gate; skipped or failed security jobs must block release.
- [ ] Document required status-check name, repository branch protection settings, severity policy, suppression policy, and unsupported capabilities.
- [ ] Validate all internal Markdown links and required files.
- [ ] Run full test and template validation suite.
- [ ] Review workflow permissions, event triggers, and release dependencies.

### Task 4: Final verification and review

- [ ] Inspect every changed file and confirm the final diff matches the design.
- [ ] Verify GitHub Actions results for the implementation commit.
- [ ] Verify branch protection status if the integration exposes it; otherwise record the precise owner action.
- [ ] Report verified checks separately from unverified repository settings.

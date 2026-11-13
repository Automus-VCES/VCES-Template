# Security Automation Gate Implementation Plan

> **For agentic workers:** Implementation completed on `feat/security-automation-gate`; steps below record the delivered scope and verification still required.

**Goal:** Add CI security scanning and make high/critical security findings block release readiness.

**Architecture:** Extend the existing least-privilege GitHub Actions security workflow. Aggregate pinned zizmor workflow analysis with a pinned Trivy filesystem scan under one stable required check. Repeat Trivy on release candidates and make publishing depend on both release validation and the security scan.

**Tech Stack:** GitHub Actions, Trivy filesystem scanner, zizmor, Node.js test runner, existing Markdown/YAML validation.

**Spec:** docs/superpowers/specs/2026-11-13-security-automation-gate-design.md

## Global Constraints
- Keep workflow permissions least-privilege; default to no permissions and grant per job.
- Pin third-party actions to immutable full commit SHAs.
- Do not require GitHub Advanced Security to run baseline checks.
- Fail closed for HIGH/CRITICAL findings and scanner execution failures.
- Never claim security certification from a passing scan.
- Do not run intrusive tests against production systems.

## Delivered
- [x] Added Trivy filesystem scanning for `vuln,misconfig,secret`, blocking HIGH/CRITICAL findings and scanner failures.
- [x] Aggregated zizmor workflow analysis into the stable `Security Automation Gate` job; upstream failure/skipping blocks the aggregate.
- [x] Added the same security scan as a required dependency of release publication.
- [x] Added reusable `templates/workflows/security-gate.yml.example`.
- [x] Added validator regression assertions for scanner policy and release dependency.
- [x] Updated adoption, GitHub security configuration, README, and changelog.
- [ ] Verify GitHub Actions checks on the pull request.
- [ ] Repository owner must require `Security Automation Gate` in branch protection; available integration does not expose that setting.

## Review Focus
- Forked pull requests must not receive write-capable tokens or secrets.
- Scanner failures/timeouts must not be converted into successful/skipped results.
- False positives must have explicit, reviewable suppression with expiry/reason where supported.
- Lockfile absence or unsupported package ecosystems must be visible rather than silently treated as scanned.
- Release workflow must depend on the security gate and not allow a skipped gate to satisfy the dependency.

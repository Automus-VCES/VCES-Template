# Security Automation Gate Implementation Plan

**Status:** Implementation prepared on `feat/vces-security-gate-finalize`; PR CI and repository-owner branch protection remain pending verification.

**Goal:** Make actionable HIGH/CRITICAL security findings block pull-request checks and release publication.

**Implementation:** Extend the existing least-privilege workflow with pinned zizmor and Trivy actions. Trivy scans supported filesystem content for secrets, dependency vulnerabilities, and infrastructure misconfiguration. Release publishing explicitly depends on both release validation and the same security scan.

## Delivered in this branch

- [x] Preserve zizmor workflow analysis with immutable action pin and explicit scanner version.
- [x] Add stable **Security Automation Gate** aggregate job; upstream workflow-analysis failure or skip fails the aggregate check.
- [x] Add Trivy filesystem scanning for `vuln,misconfig,secret`, blocking HIGH/CRITICAL findings and scanner execution failures.
- [x] Keep workflow and job permissions least-privilege; checkout does not persist credentials.
- [x] Add a reusable starter workflow at `templates/workflows/security-gate.yml.example`.
- [x] Add a release-candidate security scan and make publishing depend on both validation and security gate.
- [x] Document scanner coverage limitations, optional GitHub Dependency Review capability, and required branch-protection owner action.
- [x] Update README and Unreleased changelog.

## Verification still required

- [ ] GitHub Actions CI and security workflow complete successfully for the PR head.
- [ ] Review Trivy output to confirm expected scan coverage; unsupported/missing project manifests or lockfiles remain a coverage gap, not a pass.
- [ ] Repository owner configures **Security Automation Gate** and template validation as required checks on `main`, then verifies branch protection.
- [ ] Validate the release workflow on a release candidate before publishing a version.

## Security boundaries

- No GitHub Advanced Security entitlement is required for the baseline Trivy/zizmor checks.
- Dependency Review remains optional and must only be enabled when the repository supports it.
- No scanner result is a security certification.
- Accepted risk must be documented with owner, rationale, scope, and expiry.

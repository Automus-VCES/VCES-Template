# Security Automation Gate — Design

**Date:** 2026-11-13
**Status:** Approved by user request to implement the Security Automation Gate.

## Intent
Turn VCES security requirements into repeatable CI checks that fail closed on actionable critical findings, so unsafe changes cannot be treated as release-ready.

## Goals
- Run security checks on pull requests and protected-branch pushes.
- Detect committed secrets, vulnerable dependencies, insecure GitHub Actions workflows, and supported source-code security issues.
- Preserve least-privilege workflow permissions and immutable action references.
- Make critical findings block the security job and release workflow.
- Keep checks usable without assuming GitHub Advanced Security features are enabled.

## Non-goals
- Claim that CI proves an application is secure.
- Run intrusive dynamic tests against production.
- Require paid GitHub Advanced Security features.
- Treat every informational scanner warning as a critical release blocker.

## Approach
Use GitHub Actions with native, pinned scanners and explicit severity policy. Keep the existing zizmor workflow analysis. Add secret scanning and source/dependency scanning where the repository's stack supports it. Make the security gate a dependency of release validation. Keep optional GitHub-hosted code-scanning uploads and Dependency Review behind capability checks because repository entitlement is not guaranteed.

## Security policy
- Confirmed secret findings: fail.
- Critical dependency vulnerabilities: fail.
- High dependency vulnerabilities: fail by default for production release; document exceptions through an approved risk process, never silently suppress.
- Critical/high actionable source-code findings: fail where supported by the selected scanner and language.
- Workflow security findings: fail according to zizmor's actionable findings.
- Scanner execution errors or missing required tools: fail closed.
- Unsupported scanner capabilities must be reported as skipped with a reason, not represented as passed.

## Verification
- Unit tests cover severity mapping, fail-closed behavior, and optional capability handling for any local gate helper.
- Existing template tests and YAML syntax validation pass.
- GitHub Actions run must complete successfully on the implementation commit/PR before claiming operational verification.
- Branch protection must require the security gate check before merging; if repository settings cannot be changed through available integration permissions, document the owner action explicitly.

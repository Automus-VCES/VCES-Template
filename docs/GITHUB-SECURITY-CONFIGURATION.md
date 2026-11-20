# Optional GitHub Security Guidance

This document is an optional reference for software projects that use GitHub. It does not describe required infrastructure for the VCES repository and does not make any scanner, GitHub feature, CI workflow, or branch-protection rule a VCES adoption requirement.

## 1. Decide whether automation is useful

Use GitHub automation only when it provides repeatable assurance that matters to the project and someone can maintain it. A small, single-maintainer, low-risk project may reasonably rely on focused manual review and testing.

The VCES repository itself is Markdown-first and does not require GitHub Actions, CI/CD, scripts, or automated release tooling.

## 2. Application security checks

Choose checks based on the application's actual stack, deployment model, and threat model:

- Secret scanning where credentials could be committed.
- Dependency scanning where third-party packages are used.
- Container or infrastructure scanning where those assets exist.
- Static analysis and dynamic testing where they provide relevant coverage.

A scanner is optional as a tool, but applicable security requirements are not optional. Use suitable manual or automated verification and record checks that were not run. A clean scan is not proof of security.

## 3. Repository access controls

For collaborative repositories, owners may configure rulesets or branch protection to require review and selected validation checks, restrict force pushes, and prevent accidental deletion. Choose controls based on maintainer count, collaboration model, and risk.

These settings are not prerequisites for using VCES. Avoid imposing enterprise-grade controls on a personal repository without a concrete need.

## 4. Dependency Review

GitHub Dependency Review may help identify vulnerable or disallowed dependency changes in supported repositories. Availability and capabilities depend on repository configuration and GitHub plan.

Enable it only when available and useful. It is not required by VCES.

## 5. Least-privilege practices

When a project chooses to use GitHub Actions:

- Default workflow permissions to the minimum needed.
- Grant permissions per job rather than broadly.
- Use `persist-credentials: false` for checkout when later authenticated Git operations are not needed.
- Pin third-party actions to reviewed immutable commit SHAs for production-grade workflows.
- Do not grant `security-events: write` unless a workflow intentionally uploads SARIF and the repository supports it.
- Keep validation, release, and deployment permissions separate.
- Do not expose secrets to untrusted pull-request code.

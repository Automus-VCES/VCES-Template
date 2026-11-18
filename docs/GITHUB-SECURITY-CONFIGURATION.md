# GitHub Security Configuration

This document describes optional repository-maintenance controls and examples. It does not make any particular scanner, GitHub feature, or branch-protection rule a VCES adoption requirement.

## 1. Workflow security analysis

The VCES repository runs zizmor against its own GitHub Actions workflows on pull requests and pushes to the default branch. This is relevant because this repository maintains reusable workflow examples and CI configuration.

The check is a repository-maintenance safeguard, not a universal application security gate. Adopting projects should choose workflow analysis appropriate to their CI platform and risk.

## 2. Application security scanning

Application dependency, secret, container, and infrastructure scanning belongs to the adopting application where those assets exist. Choose tools based on the actual languages, lockfiles, deployment model, and threat model.

- Secret scanning is useful where credentials could be committed.
- Dependency scanning is useful where the project has third-party packages.
- Infrastructure/container scanning is useful where those assets are part of the project.
- Dynamic testing is useful where a running application and safe test environment are available.

A scanner is optional as a tool, but applicable security requirements are not optional. Use suitable manual or automated verification and record checks that were not run. A clean scan is not proof of security.

## 3. Optional starter workflow

`templates/workflows/security-gate.yml.example` is an optional example for application repositories. Review its scanners, supported files, severity thresholds, permissions, action pins, and failure behavior before adopting it. Do not copy it blindly or require it for projects where it adds no useful coverage.

## 4. Optional GitHub repository settings

For collaborative repositories, owners may configure rulesets or branch protection to require review and selected validation checks, restrict force pushes, and prevent accidental deletion. The appropriate policy depends on maintainer count, collaboration model, and risk.

These settings are not a prerequisite for using VCES. A single-maintainer experimental project may reasonably use a simpler workflow.

## 5. Optional Dependency Review

The Dependency Review action is conditional on `ENABLE_DEPENDENCY_REVIEW=true` and requires supported GitHub dependency graph / Advanced Security capability. Enable it only when available and useful. It is not required by VCES.

## 6. Least-privilege practices

When GitHub Actions are used:
- Default workflow permissions to the minimum needed.
- Grant permissions per job rather than broadly.
- Use `persist-credentials: false` for checkout when later authenticated Git operations are not needed.
- Pin third-party actions to reviewed immutable commit SHAs for production-grade workflows.
- Do not grant `security-events: write` unless a workflow intentionally uploads SARIF and the repository supports it.

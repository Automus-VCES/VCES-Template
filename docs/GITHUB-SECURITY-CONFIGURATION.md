# GitHub Security Configuration

VCES uses complementary security controls. They are not interchangeable, and a passing scan is not a security certification.

## 1. Always-on workflow security and security gate

`.github/workflows/security.yml` runs zizmor on pull requests and pushes to `main` and `vces/**`. The workflow includes a stable job named **Security Automation Gate** that aggregates zizmor and Trivy filesystem scanning.

Trivy scans repository content for:
- Secrets (`secret`)
- Dependency vulnerabilities (`vuln`)
- Infrastructure-as-code and configuration misconfiguration (`misconfig`)

HIGH and CRITICAL findings block the gate. Unfixed findings are not silently ignored. Scanner errors fail the job. The aggregate gate uses `if: always()` and explicitly fails when workflow-security analysis did not succeed, so an upstream failure or skip cannot appear green through job skipping.

The action references and scanner versions are pinned. Jobs use read-only permissions and checkout does not persist credentials. No GitHub Advanced Security entitlement is required for this baseline.

**Coverage limitation:** Trivy can only scan ecosystems and configuration formats it recognizes. This template repository may not contain application lockfiles or infrastructure definitions, so those scanner categories can report no supported files. That is not evidence that an adopting application is vulnerability-free. Confirm scan output lists the expected manifests, lockfiles, and infrastructure files. A missing expected file or unsupported ecosystem is a coverage gap; the adopting project must add an appropriate scanner.

## 2. Release enforcement

The release workflow runs the same HIGH/CRITICAL Trivy scan against the tagged release candidate. The publish job explicitly depends on both `validate` and `security-gate`; a failed or skipped prerequisite blocks publication.

## 3. Reusable starter workflow

Copy `templates/workflows/security-gate.yml.example` to `.github/workflows/security-gate.yml` and review it for the project's actual languages, manifests, lockfiles, infrastructure, and threat model. Do not broaden exclusions or lower severity thresholds merely to obtain a green build. Record accepted risk with an owner, rationale, scope, and expiry.

## 4. Required branch protection (owner action)

A workflow file does not enforce branch protection. In GitHub repository Settings → Rules → Rulesets (or Branches → branch protection rules), configure the default branch to:
- Require a pull request before merging.
- Require the **Security Automation Gate** status check.
- Require the repository template-validation CI check.
- Require branches to be up to date before merging where practical.
- Restrict force pushes and deletion.

The connected GitHub integration used for this implementation does not expose branch-protection read/write operations. Repository owners must configure and verify these rules in GitHub settings. Until then, the workflow runs but the default branch is not protected by this required-check policy.

## 5. Optional Dependency Review

The Dependency Review action is conditional on `ENABLE_DEPENDENCY_REVIEW=true` and requires GitHub dependency graph / supported Advanced Security capability. Keep it disabled unless the repository owner has confirmed the feature is available and enabled. The baseline Trivy scan does not depend on this optional GitHub capability.

## 6. Repository owner verification

Review Settings → Advanced Security for dependency graph, Dependabot alerts/security updates (if supported), and private vulnerability reporting (if desired). The workflow does not claim these settings are enabled; verify them directly in GitHub.

## 7. Least-privilege policy

- Workflow-level permissions default to none.
- Each job grants only the permissions it needs.
- Checkout uses `persist-credentials: false`.
- Third-party actions are pinned to immutable full commit SHAs.
- Do not grant `security-events: write` unless a workflow intentionally uploads SARIF and the repository supports that feature.

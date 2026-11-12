# GitHub Security Configuration

This repository uses two different GitHub security controls. They are not interchangeable.

## 1. Workflow security analysis (always enabled)

.github/workflows/security.yml runs zizmor on pull requests and pushes to main and vces/**. It statically analyzes GitHub Actions workflows and does not require GitHub Advanced Security or code-scanning upload permissions.

The action is pinned to a full commit SHA. Findings are emitted as workflow annotations/log output.

## 2. Dependency Review (optional; requires GitHub support)

GitHub's Dependency Review action requires the repository's dependency graph and GitHub Advanced Security entitlement/configuration. The previous workflow failed because GitHub explicitly reported that Dependency Review was unsupported for this repository.

The dependency-review job is now gated by the repository variable:

ENABLE_DEPENDENCY_REVIEW=true

Leave the variable unset or false unless the repository owner has confirmed that Dependency Graph and the required GitHub Advanced Security feature are available and enabled. If enabled without that prerequisite, the job will fail again. This is an explicit capability gate, not a substitute for enabling the feature.

## 3. Repository owner verification

In GitHub repository Settings → Advanced Security, check the actual availability and state of:
- Dependency graph
- Dependency review / GitHub Advanced Security entitlement
- Dependabot alerts and security updates, if supported by the plan
- Private vulnerability reporting, if the repository intends to accept confidential reports

The workflow failure establishes that Dependency Review was not supported at the time of the failed run. The connected GitHub integration does not expose repository security settings for direct inspection, so an owner must confirm the settings in GitHub.

## 4. Least-privilege workflow policy

- Workflow-level permissions default to none in the security workflow.
- Each job declares only the permissions it needs.
- Checkout does not persist the token in the local Git configuration.
- Third-party actions in the security workflow are pinned to full commit SHAs.
- Dependency Review receives read-only contents and pull-request permissions.

Do not grant security-events: write unless a workflow intentionally uploads SARIF to GitHub code scanning and the repository supports that feature.

## 5. Reusable workflow examples

The starter examples pin external actions to immutable commit SHAs and set persist-credentials: false for checkout. The CodeQL example requests security-events: write only for the analysis job that uploads results. Before adoption, verify action releases, runner compatibility, selected languages, and required repository security features; Dependabot updates must be reviewed before merging.

# VCES Adoption Guide

Adopt VCES incrementally. Do not begin by rewriting a working project or forcing every repository into an identical architecture.

## 1. Choose a level

| Level | Suitable for | Minimum focus |
|---|---|---|
| Basic | Small, low-risk standalone apps | Setup docs, lint, tests, build, secrets/dependencies |
| Standard | Actively maintained apps | Architecture, integration tests, security checks, CI, review, releases |
| Production | Business-critical or externally exposed systems | Threat model, recovery, monitoring, deployment approvals, rollback, auditability |

Choose based on impact, exposure, data sensitivity, and operational dependency—not repository size.

## 2. Keep adoption lightweight

Use only the controls that fit the app's actual impact, exposure, and data sensitivity. Basic projects do not need production infrastructure, formal threat models, exhaustive documentation, or multi-agent workflows by default. Use a skill only when its trigger applies. Do not copy every template automatically; keep only documents that the project will maintain and use. The five files under `skills/` use VCES's simple flat Markdown convention; they are repository guidance, not a claim of native compatibility with every agent's skill-discovery format.

## 3. New repository

1. Record the canonical VCES URL and adopted version.
2. Copy `templates/PROJECT-STANDARD.md`, `PROJECT-STATUS.md`, and `AGENTS.md` to the repository root.
3. Copy and customize `CONTRIBUTING.md` and `SECURITY.md`.
4. Add architecture/development docs when relevant.
5. Select and customize CI/security workflows for the actual stack.
6. Define real commands, constraints, and approval boundaries.
7. Run checks and record evidence in project status.

## 4. Existing repository

### Baseline audit
Inspect implementation, instructions, architecture, tests, workflows, security, data handling, releases, and Git state. Record controls already satisfied, gaps, stale/conflicting docs, critical risks, and unknowns.

### Prioritize gaps
1. Active security exposure and data-integrity risks.
2. Broken core functionality and release blockers.
3. Missing essential tests and CI.
4. Unsafe dependencies or unclear architecture.
5. Recovery, monitoring, and deployment gaps.
6. Documentation and developer experience.

Give material gaps an owner and acceptance criteria. Do not treat every recommendation as an immediate requirement.

### Adopt incrementally
Introduce templates and automation in reviewable changes. Preserve existing behavior. Do not replace working CI or architecture merely to match an example.

### Verify
Run actual project checks and update `PROJECT-STATUS.md` with results, blockers, and residual risks.

## 5. Document responsibilities
- VCES: universal engineering requirements.
- PROJECT-STANDARD: project stack, architecture, commands, and risk controls.
- AGENTS: how agents apply both in this repository.
- CONTRIBUTING: human contribution and review process.
- PROJECT-STATUS: current verified state.
- CI: automated repeatable enforcement.

Avoid duplicating the full standard. Link to the canonical source and record its version.

## 6. Workflow template configuration

The starter workflows are examples, not universal drop-ins. Before copying one, confirm its action versions, runner requirements, dependency installation, and required scripts match the target project. All action references in maintained examples are pinned to immutable commit SHAs; review Dependabot updates before adoption.

- Node.js: `npm test` and `npm run build` are mandatory. Add those scripts to `package.json`; lint and typecheck steps use `--if-present` only because they are optional checks. Configure the `NODE_VERSION` repository variable when the default Node 22 does not match the project.
- Python: adapt dependency installation to the project's lockfile and test extras. The example installs pytest and runs compileall plus pytest. Configure `PYTHON_VERSION` when needed.
- Flutter: configure `FLUTTER_VERSION` to pin the SDK; otherwise the example uses the stable channel.

The template repository CI parses all workflow YAML and example workflow YAML. Adopting repositories should add equivalent syntax and security checks for their own workflows.

## 7. Keep projects current

Review VCES during planned maintenance and after material security, AI-agent, or delivery changes. Compare versions, assess changed requirements, update project controls, and record verification.

## 8. Acceptance checklist
- [ ] Owner, adoption level, and VCES version recorded.
- [ ] Project Standard customized with real stack and commands.
- [ ] Agent instructions define constraints and approvals.
- [ ] Status baseline contains evidence, not guesses.
- [ ] Contribution and security policies are usable.
- [ ] CI matches the actual toolchain.
- [ ] Secret and dependency controls are enabled.
- [ ] Backup/restore addressed where applicable.
- [ ] Release gates and rollback expectations defined.

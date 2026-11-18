# VCES Adoption Guide

Adopt VCES incrementally. Do not rewrite a working project or force every repository into an identical architecture, document set, or workflow.

## 1. Choose a level

| Level | Suitable for | Focus |
|---|---|---|
| Basic | Small, low-risk standalone apps | Correct functionality, simple verification, safe handling of secrets and data |
| Standard | Actively maintained apps | Maintainable architecture, relevant tests, security, repeatable checks |
| Production | Business-critical or externally exposed systems | Risk-specific threat analysis, recovery, monitoring, release controls, and operational readiness |

Choose based on impact, exposure, data sensitivity, and operational dependency—not repository size.

## 2. Keep adoption lightweight

VCES Standard is the source of requirements. Instructions, skills, templates, checklists, status documents, health assessments, CI workflows, and scanners are aids to apply those requirements—not mandatory additions to every project.

- Copy only templates that the project will use and maintain.
- Remove or mark irrelevant sections in copied templates; do not fill every section just for completeness.
- A small project may use its README and concise agent instructions instead of maintaining separate status, contribution, security, or architecture documents.
- Use skills automatically when their triggers apply; do not read or invoke every skill on every task.
- Add CI or security automation only when it creates useful, repeatable assurance. Do not require starter workflows by default.
- The secure coding checklist is optional; use it when a focused checklist improves a security review.

## 3. New repository

1. Record the VCES version and selected level (in project docs if useful).
2. Tailor a project standard only if project-specific stack, architecture, or constraints need to be recorded.
3. Provide agent instructions with real project constraints, protected paths/data, approval boundaries, and verification commands.
4. Add contribution and security-reporting documents if the project needs them (for example, collaboration or public vulnerability reporting).
5. Add architecture docs or ADRs only for consequential decisions.
6. Configure CI/security workflows only for checks the project can run and maintain.
7. Verify the working implementation and record evidence where a durable status report is useful.

## 4. Existing repository

### Baseline audit
Inspect implementation, instructions, architecture, tests, workflows, security, data handling, releases, and Git state. Record controls already satisfied, gaps, stale/conflicting docs, critical risks, and unknowns.

### Prioritize gaps
1. Active security exposure and data-integrity risks.
2. Broken core functionality and release blockers.
3. Missing essential verification.
4. Unsafe dependencies or unclear architecture.
5. Recovery, monitoring, and deployment gaps when relevant.
6. Documentation and developer experience.

Treat recommendations as findings to assess, not automatic work. Give material gaps an owner and acceptance criteria when tracking is needed.

### Adopt incrementally
Introduce only necessary changes. Preserve existing behavior. Do not replace working CI, architecture, or conventions merely to match an example.

### Verify
Run checks appropriate to the change and project risk. Record results, blockers, and residual risks in the project status document if one is maintained.

## 5. Document responsibilities

- VCES: universal engineering requirements.
- PROJECT-STANDARD: project-specific stack, architecture, commands, and risk controls (optional; useful when this information is substantial).
- AGENTS: how agents apply VCES and project constraints.
- CONTRIBUTING / SECURITY: project collaboration and vulnerability reporting policies, when applicable.
- PROJECT-STATUS: evidence-based state snapshot, only when a durable status report is useful.
- CI: automated repeatable enforcement, where applicable.

Avoid duplicating the full standard. Link to the canonical source and record its version when practical.

## 6. Workflow examples

Starter workflows are optional examples, not universal drop-ins. Before copying one, confirm action versions, runner requirements, dependency installation, and required scripts match the target project.

- Node.js: the example expects `npm test` and `npm run build`; add or adapt scripts to match the actual project. Optional lint/typecheck steps are only run when configured.
- Python: adapt dependency installation and test commands to the project's lockfile and environment.
- Flutter: configure the SDK version and checks to match the project.

This template repository validates its own workflow YAML. Adopting repositories should add syntax/security checks only if appropriate.

## 7. Keep projects current

Review VCES during planned maintenance and after material security, AI-agent, or delivery changes. Assess changed requirements and update project controls only where applicable.

## Optional adoption checklist

- [ ] VCES version and level understood.
- [ ] Agent instructions reflect real project constraints.
- [ ] Relevant checks and security controls are verified.
- [ ] Any adopted templates are customized and actively maintained.
- [ ] Remaining risks or blockers are recorded when tracking is useful.

# Contributing to VCES

Contributions should make the standard clearer, safer, more practical, and easier to adopt across technology stacks.

## Before proposing a change
- Read `VIBE-CODING-STANDARD.md` and relevant adoption docs.
- Search for existing rules/templates before adding duplicates.
- Explain the problem, evidence, and intended audience.
- Prefer reusable principles over tool-specific prescriptions.
- Identify compatibility, security, and migration implications.

## Change categories
- **Standard:** normative requirements or interpretation.
- **Template:** project-ready document.
- **Workflow:** automation example.
- **Documentation:** adoption or operational guidance.
- **Maintenance:** links, formatting, validation, repository hygiene.

## Pull request requirements
Include the problem, motivation, proposed change, impacted adopters, risks, validation performed, and version/changelog impact. Keep changes focused and avoid mixing unrelated policy updates.

## Validation
Run:
```bash
node scripts/validate-template.mjs
```
Review changed Markdown links and workflow syntax/permissions. Do not expose secrets to untrusted pull-request code.

## Review principles
Universal rules remain technology-agnostic; mandatory requirements are testable; exceptions are explicit; examples are not universal prescriptions; green CI does not replace substantive review.

## Versioning
Follow `docs/RELEASE-PROCESS.md`. Normative changes require a changelog entry and version decision.

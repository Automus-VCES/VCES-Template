# VCES Release and Maintenance Process

This process governs releases of the VCES Standard itself. It is not a release checklist that every project adopting VCES must copy.

## 1. Versioning

VCES uses Semantic Versioning for normative requirements:
- **MAJOR:** incompatible changes to mandatory requirements or adoption expectations.
- **MINOR:** new backward-compatible requirements or substantive guidance.
- **PATCH:** clarifications/corrections that do not change requirement meaning.

Template-only changes may use a patch release unless they materially change adoption requirements.

## 2. Change control

For normative changes, explain the problem and evidence, identify affected sections/adopters, assess security/compatibility/migration impact, propose exact wording, obtain maintainer review, update changelog/version, and publish migration guidance when material.

## 3. Release checks

Before publishing a VCES version, verify:
- Standard, instructions, skills, templates, and adoption documentation are consistent.
- Required files, internal links, regression tests, and workflow YAML validate.
- GitHub Actions workflow analysis passes.
- Changelog and version references are current.
- The final diff and release notes are reviewed.
- The tag is exactly `vMAJOR.MINOR.PATCH`, matches the canonical Standard version, and points to a commit reachable from verified `main` history.

These are checks for publishing this repository's Standard. They do not imply that every adopting application needs this repository's release tooling or the same workflow.

## 4. Publishing

Use a reviewed change to the stable branch. Create a version tag only after the repository's validation checks pass. The automated release workflow validates regression tests, template structure and links, workflow YAML, workflow security, and tag/version/main ancestry before publishing. The publication job receives write permission only after validation succeeds. A release tag on an unmerged or unrelated commit MUST fail closed.

## 5. Maintenance

Review the Standard when adoption feedback, material security incidents, AI-agent behavior, or engineering practices indicate that requirements need clarification. Keep older versions accessible and mark support status clearly. Avoid process changes that do not improve the Standard or its adoption.

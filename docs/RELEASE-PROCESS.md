# VCES Release and Maintenance Process

## 1. Versioning
VCES uses Semantic Versioning for normative requirements:
- **MAJOR:** incompatible changes to mandatory requirements or adoption expectations.
- **MINOR:** new backward-compatible requirements or substantive guidance.
- **PATCH:** clarifications/corrections that do not change requirement meaning.

Template-only changes may use a patch release unless they materially change adoption requirements.

## 2. Change control
For normative changes, explain the problem and evidence, identify affected sections/adopters, assess security/compatibility/migration impact, propose exact wording, obtain maintainer review, update changelog/version, and publish migration guidance when material.

## 3. Release checklist
- [ ] Standard and templates are consistent.
- [ ] Required files and internal links validate.
- [ ] Workflow syntax and permissions reviewed.
- [ ] Adoption docs and version references updated.
- [ ] Changelog updated.
- [ ] CI passes on release candidate.
- [ ] Final diff reviewed.
- [ ] Release notes explain material changes.
- [ ] Tag and release point to verified commit.

## 4. Publishing
Use a protected stable branch and reviewed PR. Create a version tag such as `v1.0.0` only after required checks pass. Publish release notes covering additions, changes, fixes, and migration impact.

## 5. Maintenance
Review at least annually and after major security/supply-chain incidents, material AI-agent changes, repeated adoption problems, platform changes, or significant user feedback. Keep older versions accessible and mark support status clearly.

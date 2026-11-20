# VCES Release and Maintenance Process

This process governs releases of the VCES Standard itself. It is not a release checklist that every project adopting VCES must copy.

VCES is a Markdown-first documentation repository. Releases and maintenance are handled through ordinary Git changes and manual review; repository CI/CD, scripts, and release automation are not required.

## 1. Versioning

VCES uses Semantic Versioning for normative requirements:

- **MAJOR:** incompatible changes to mandatory requirements or adoption expectations.
- **MINOR:** new backward-compatible requirements or substantive guidance.
- **PATCH:** clarifications/corrections that do not change requirement meaning.

Template-only changes may use a patch release unless they materially change adoption requirements.

## 2. Change control

For normative changes:

1. Explain the problem and supporting evidence.
2. Identify affected sections and adopters.
3. Assess security, compatibility, and migration impact.
4. Propose exact wording.
5. Review the complete diff and obtain maintainer approval.
6. Update the changelog and canonical version.
7. Publish migration guidance when the change materially affects adopters.

## 3. Manual release review

Before publishing a VCES version, manually confirm:

- The Standard, agent instructions, skills, templates, and adoption documentation are consistent.
- Internal Markdown links and references point to existing files.
- Normative requirements are clear, applicable, and not contradicted by supporting guidance.
- The changelog and version references are current.
- The complete diff and release notes have been reviewed.
- The release tag is exactly `vMAJOR.MINOR.PATCH`, matches the canonical Standard version, and points to the reviewed commit on the stable branch.

These are proportionate maintainer checks, not automated gates. Record checks that could not be completed; do not claim they passed.

## 4. Publishing

Publish from a reviewed commit on the stable branch. Create the version tag only after the manual review is complete. Keep release notes concise and identify the normative changes, adoption impact, and any migration guidance.

## 5. Maintenance

Review the Standard when adoption feedback, material security incidents, AI-agent behavior, or engineering practices indicate that requirements need clarification. Keep older versions accessible and mark support status clearly. Avoid process changes that do not improve the Standard or its adoption.

# VCES Adoption Guide

Use VCES as the engineering standard for both building new applications and reviewing existing ones. Adopt the requirements that apply; do not turn the supporting materials into a mandatory project setup.

## 1. Start with the outcome

You do not need to know VCES terminology, choose skills, or prepare a technical checklist. Tell the coding agent what you want:

- **New project:** "Build this project according to VCES. Choose a suitable, maintainable approach and handle the engineering details."
- **Existing project:** "Audit this project against VCES. Report evidence-based findings and prioritize the risks. Do not change files yet."
- **Fixes after an audit:** "Address the agreed VCES findings, verify the changes, and report anything unresolved."

The agent should infer Build, Audit, Fix, or Explain intent and follow the corresponding path in the Standard. It should ask only for decisions that materially affect correctness, scope, security, cost, or irreversible actions.

## 2. Apply the right level of control

| Level | Suitable for | Focus |
|---|---|---|
| Basic | Small, low-risk standalone apps | Correct functionality, safe input/data handling, essential tests |
| Standard | Actively maintained applications | Maintainable structure, relevant tests, security, repeatable checks |
| Production | Business-critical or externally exposed systems | Risk-specific security, recovery, monitoring, release and operational readiness |

Choose based on impact, exposure, data sensitivity, and operational dependency—not repository size or developer experience. These levels guide the depth of assurance; they are not separate architectures or fixed checklists.

## 3. New project — Build

1. Understand the goal, users, important data, integrations, and deployment expectations.
2. Choose the simplest suitable stack, architecture, and project structure.
3. Add project-specific instructions only for real constraints, commands, protected data, and approval boundaries.
4. Implement applicable security, error handling, data integrity, and reliability controls.
5. Test important user journeys and failure/boundary cases; run relevant checks and a production build when applicable.
6. Explain what was verified, what was not verified, and any remaining risks.

Do not create every template, document, test category, CI workflow, or architecture diagram by default. Add them only when they improve the project.

## 4. Existing project — Audit

1. Inspect repository instructions, code, dependencies, architecture, tests, workflows, data handling, deployment, and Git state as available.
2. Assess applicable VCES requirements; distinguish satisfied controls, gaps, risks, unknowns, and checks not run.
3. Report findings with severity, evidence, impact, recommended fix, and confidence.
4. Prioritize active security exposure and data-integrity risks, then broken critical functionality and missing essential verification.
5. Recommend proportionate remediation. Do not modify audited code unless remediation is requested.

An audit is not a certification. State scope and limitations clearly, especially when production configuration, runtime behavior, or cloud settings could not be inspected.

## 5. Keep adoption lightweight

VCES Standard is the source of requirements. Instructions, skills, templates, checklists, health assessments, CI workflows, and scanners are supporting aids—not mandatory additions to every project.

- Use existing project documentation where it already records the needed information.
- A small project may need only a README and concise agent instructions.
- Create PROJECT-STANDARD, PROJECT-STATUS, ADRs, contribution/security documents, or architecture guides only when there is a real need.
- Consult only skills relevant to the task; agents should select them automatically.
- Add CI and security automation only when it provides useful repeatable assurance and can be maintained.
- Use scanners appropriate to the application's stack and threat model; no particular scanner is universally required.
- Treat checklists and health scores as aids, never as substitutes for engineering judgment or mandatory security controls.

## 6. Templates and workflow examples

Templates and starter workflows are optional examples, not universal drop-ins. Copy only what the project will use and maintain. Customize commands, versions, permissions, and checks before use. Do not replace working architecture or CI merely to match an example.

This VCES repository validates its own required files, Markdown links, tests, and workflow YAML. That repository-maintenance automation is not a requirement imposed on every adopting project.

## 7. Reassess when risk changes

Review relevant VCES controls after material changes to users, data, authentication, integrations, external exposure, deployment, or business impact—and after significant incidents. Update project controls only where the change makes them applicable.

## Optional adoption notes

Record the VCES version, selected assurance level, accepted risks, and evidence in existing project documentation when useful. Do not create a separate tracking document solely to complete this guide.

# Threat Modeling Security Skill

## Purpose
Identify realistic security threats early and select proportionate mitigations before or during implementation.

## When to use
Use for new systems or material features involving new trust boundaries, sensitive data flows, privileged operations, external integrations, public exposure, or significant architecture changes. For low-risk changes, use a brief threat review rather than a formal workshop.

## Lightweight workflow
1. Define the system or change, intended users, deployment context, and scope. Record assumptions and exclusions.
2. Identify valuable assets and security objectives: confidentiality, integrity, availability, privacy, and account or tenant isolation as applicable.
3. Map entry points, data flows, trust boundaries, identities, privileged operations, storage, external services, and administrative paths. A simple diagram or concise list is sufficient.
4. Identify plausible abuse cases at those boundaries. Consider spoofing, tampering, repudiation, information disclosure, denial of service, and privilege escalation where relevant; include domain-specific abuse such as cross-tenant access, workflow bypass, unsafe file handling, SSRF, and supply-chain compromise.
5. Prioritize threats by realistic exploitability, impact, exposure, and existing controls. Do not inflate risk with purely hypothetical scenarios.
6. Choose the smallest effective mitigations and assign them to design, implementation, configuration, monitoring, or operational controls.
7. Convert important mitigations into verifiable acceptance criteria and negative tests. Link to relevant domain skills such as Application, API, Data, Infrastructure, AI, or Security Testing.
8. Record residual risks, assumptions, owners, and any required approval. Revisit the model when architecture, data flows, trust boundaries, or exposure materially change.

## Minimum useful output
- Scope and assumptions
- Assets and security objectives
- Entry points and trust boundaries
- Prioritized threats and abuse cases
- Mitigations and verification evidence
- Residual risks and owners

A short Markdown list is sufficient for a small project. Use a diagram or structured threat model only when it materially improves understanding.

## Verification
- Every material trust boundary and privileged operation in scope has been considered.
- High-impact threats have a mitigation or an explicit, authorized risk decision.
- Important mitigations have a test, inspection, or operational verification method.
- Assumptions and unverified areas are visible.

## Avoid
Do not treat a framework (including STRIDE) as a substitute for understanding the actual system. Do not model hypothetical components that do not exist. Do not claim the system is secure because a threat model was completed.

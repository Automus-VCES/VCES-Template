# Incident Response Skill

## Purpose
Support safe, evidence-preserving response to suspected security incidents and reduce further impact.

## When to use
Use when credentials, data, services, accounts, dependencies, infrastructure, or production behavior may have been compromised.

## Workflow
1. Activate the project's incident owner and escalation path; establish a timestamped incident record and scope.
2. Preserve relevant logs, alerts, snapshots, and system metadata with access controls and integrity protection; avoid altering evidence unnecessarily.
3. Distinguish observed facts, confirmed impact, hypotheses, and unknowns. Do not infer attacker identity or root cause without evidence.
4. Contain proportionately: isolate affected components, disable compromised credentials, restrict access, or pause risky integrations with an authorized owner.
5. Rotate/revoke exposed secrets and sessions; prioritize credentials that grant broad or production access.
6. Assess affected systems, data, tenants, time window, persistence, and external dependencies; avoid unnecessary access to sensitive user data.
7. Eradicate the root cause, patch or reconfigure affected components, and verify the attack path is closed.
8. Restore from known-good sources only after integrity checks; monitor for recurrence and validate critical business functions.
9. Meet applicable contractual, legal, and regulatory notification requirements through responsible stakeholders.
10. Conduct a blameless post-incident review with timeline, impact, root cause, control gaps, corrective actions, owners, and due dates.

## Verification
- Incident scope and evidence are preserved with a documented chain of custody where required.
- Containment actions are authorized and their impact recorded.
- Exposed credentials/tokens are revoked or rotated and dependent systems updated.
- Root cause remediation is verified with regression/security tests.
- Recovery integrity and monitoring are confirmed.
- Follow-up actions have owners and due dates.

## Avoid
Do not delete logs, wipe systems, publicly attribute an attack, or declare full recovery before evidence and validation support those claims.

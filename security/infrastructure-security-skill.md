# Infrastructure Security Skill

## Purpose
Reduce attack surface and prevent unsafe deployment, network, cloud, container, DNS, and runtime configurations.

## When to use
Use when provisioning or changing cloud resources, servers, containers, networks, databases, caches, queues, DNS, TLS, admin tools, or production environments.

## Workflow
1. Draw the deployment and trust-boundary model; identify public ingress, private services, identities, secrets, and data stores.
2. Expose only required services; bind databases, caches, queues, control planes, and admin interfaces to private networks by default.
3. Enforce least-privilege network rules, workload identities, IAM roles, service accounts, and database permissions.
4. Store secrets in an approved secret manager; avoid baking credentials into images, repositories, user data, or build logs.
5. Harden containers and hosts: non-root execution, minimal images, read-only filesystems where practical, dropped capabilities, resource limits, and patched base images.
6. Configure TLS with maintained protocols/certificates and verify hostname/certificate validation for outbound connections.
7. Secure cloud storage and snapshots with private-by-default access, scoped policies, encryption, and audit logging.
8. Protect administrative access with strong authentication, restricted network paths, and auditable access.
9. Manage DNS lifecycle: verify ownership before reuse, remove stale records, and prevent dangling aliases to deprovisioned resources.
10. Monitor configuration drift and exposure; maintain asset inventory, patch process, backups, and tested recovery.
11. Make infrastructure changes reviewable and reversible; use plan/diff and staged rollout where supported.

## Verification
- External scans/inventory show only approved public ports and endpoints.
- Internal data services and admin surfaces are not publicly reachable without an approved design.
- IAM and network policies are least-privilege and reviewed.
- Container/runtime configuration meets the project's threat profile.
- TLS validation is enabled and certificates are current.
- DNS records do not point to unclaimed/decommissioned resources.
- Backup restore and infrastructure rollback have been tested where required.

## Avoid
Do not infer compromise solely from an exposed port, and do not run intrusive tests against systems without explicit authorization.

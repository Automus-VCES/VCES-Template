# Infrastructure Security Skill

## Purpose
Reduce attack surface and prevent unsafe deployment, network, cloud, container, DNS, and runtime configurations.

## When to use
Use when provisioning or changing cloud resources, servers, containers, networks, databases, caches, queues, DNS, TLS, admin tools, production environments, or responding to runtime security advisories.

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
10. Maintain a proportionate inventory of externally reachable and security-critical runtime components (for example web servers, reverse proxies, ingress controllers, container/base images, operating systems, and kernels). Record product identity and deployed version sufficiently to assess vendor advisories, with an accountable owner where appropriate.
11. Monitor relevant vendor security advisories; determine applicability using product/version, configuration, exposure, and mitigations. Prioritize supported security updates by exploitability and impact; plan migration or risk reduction for end-of-life components.
12. After patching or changing runtime configuration, verify the intended version/configuration is active in the deployed environment, required restart/reload/redeployment has occurred, and the affected exposure or behavior is corrected. Assess host OS/kernel updates separately from application, proxy, and container updates.
13. Monitor configuration drift and exposure; maintain patch process, backups, and tested recovery.
14. Make infrastructure changes reviewable and reversible; use plan/diff and staged rollout where supported.

## Verification
- External scans/inventory show only approved public ports and endpoints.
- Inventory identifies relevant exposed runtime components and deployed versions sufficiently to check vendor advisories.
- Relevant advisories have an applicability decision and tracked remediation or documented risk disposition.
- Internal data services and admin surfaces are not publicly reachable without an approved design.
- IAM and network policies are least-privilege and reviewed.
- Container/runtime configuration meets the project's threat profile.
- TLS validation is enabled and certificates are current.
- After updates, runtime evidence confirms the intended fixed version/configuration is active; required restart/redeployment is complete.
- Host OS/kernel patch status is checked independently where applicable.
- DNS records do not point to unclaimed/decommissioned resources.
- Backup restore and infrastructure rollback have been tested where required.

## Avoid
Do not infer compromise solely from an exposed port, do not treat an application/proxy update as proof that the host kernel is patched, and do not run intrusive tests against systems without explicit authorization.

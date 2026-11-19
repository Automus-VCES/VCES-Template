# VCES Security Standards Mapping

## Purpose and use

This document is an informative crosswalk showing the established guidance that informs VCES security requirements. It helps maintainers and adopters locate deeper reference material without duplicating those standards inside VCES.

**This mapping does not require every project to implement every control in every referenced standard.** Apply controls based on the project's actual technology, exposure, data sensitivity, and impact. The canonical requirements remain in [VIBE-CODING-STANDARD.md](../VIBE-CODING-STANDARD.md).

## Reference crosswalk

| External reference | Relevant VCES areas | Practical use |
|---|---|---|
| [OWASP Top 10](https://owasp.org/www-project-top-ten/) | Application, authentication, authorization, configuration, data, supply chain | Awareness of common web application risk categories |
| [OWASP Application Security Verification Standard (ASVS)](https://owasp.org/www-project-application-security-verification-standard/) | Application, identity, access control, validation, cryptography, logging | Select concrete, testable application security requirements appropriate to risk |
| [OWASP API Security Top 10](https://owasp.org/www-project-api-security/) | API authorization, object-level access, authentication, resource limits, SSRF, inventory | Review API-specific abuse cases and access boundaries |
| [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/) | Secure implementation across application, authentication, session, data, and deployment | Implementation-level guidance for specific controls |
| [NIST Secure Software Development Framework (SSDF), SP 800-218](https://csrc.nist.gov/pubs/sp/800/218/final) | Planning, secure development, dependency management, verification, vulnerability response | Organize secure development practices across the lifecycle |
| [Microsoft Security Development Lifecycle (SDL)](https://www.microsoft.com/en-us/securityengineering/sdl) | Security requirements, threat modeling, secure design, verification, release | Practical lifecycle prompts and threat-modeling discipline |
| [OpenSSF Best Practices / OSPS Baseline](https://best.openssf.org/) | Repository hygiene, access control, CI, vulnerability handling, release practices | Improve open-source project and repository security posture |
| [SLSA](https://slsa.dev/) | Build and release integrity, provenance, supply-chain assurance | Apply provenance and build integrity controls when release risk justifies them |

## Applying the mapping

1. Start with VCES mandatory requirements and the project's actual architecture.
2. Select only the relevant external reference sections; do not adopt a framework wholesale by default.
3. Translate selected controls into project-specific implementation and verification criteria.
4. Record material deviations or accepted risks using the VCES approval and exception rules.
5. Re-check source standards for current versions and guidance when conducting a formal assessment; this crosswalk is not a version-pinned compliance claim.

## Important distinction

VCES is an engineering standard and practical adoption toolkit, not a certification or compliance attestation for OWASP, NIST, Microsoft SDL, OpenSSF, or SLSA. Referencing a standard does not establish conformance.

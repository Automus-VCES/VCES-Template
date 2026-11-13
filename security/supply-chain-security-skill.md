# Supply Chain Security Skill

## Purpose
Protect source code, dependencies, build systems, CI/CD, artifacts, and release provenance from tampering and dependency compromise.

## When to use
Use when adding/updating dependencies, configuring package registries, CI/CD, build/release automation, third-party actions, plugins, or generated artifacts.

## Workflow
1. Use maintained dependencies from trusted registries; check package identity, maintainer, provenance, license, and project health before adoption.
2. Pin and lock dependency versions; use reproducible lockfiles and review transitive dependency changes.
3. Enable automated vulnerability and secret scanning with severity-based triage and documented exceptions.
4. Pin CI actions and external build tools to immutable versions/SHAs where supported; review updates before adoption.
5. Apply least privilege to workflow permissions, tokens, deploy credentials, and runner identities; scope credentials to the minimum job and lifetime.
6. Separate untrusted pull-request execution from privileged deployment contexts; never expose production secrets to untrusted code.
7. Protect release branches/tags and require review or environment approval for production publishing.
8. Generate and retain build provenance, artifact digests, and an SBOM when justified by project risk or customer requirements.
9. Verify downloaded artifacts and signatures where supported; prevent untrusted scripts from controlling privileged build steps.
10. Define response steps for compromised dependencies, registries, CI credentials, and published artifacts.

## Verification
- Lockfiles are committed and dependency updates are reviewable.
- CI permissions and secrets are least-privilege and not exposed to untrusted PR code.
- Third-party actions/tools are pinned and maintained.
- Security findings have owners, remediation dates, and explicit risk acceptance where needed.
- Release artifacts can be traced to reviewed source and build workflow.

## Avoid
Do not treat a clean vulnerability scan as proof of trustworthy provenance, and do not auto-upgrade dependencies blindly in production.

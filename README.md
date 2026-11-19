# Vibe Coding Engineering Standard (VCES)

VCES is a practical, technology-agnostic engineering standard for people building software with AI coding agents. It helps users who are not professional developers get more secure, stable, maintainable, and reliable applications without having to manage every engineering detail themselves.

Use VCES in two main ways:
- **Build:** ask an AI coding agent to build a new project according to VCES.
- **Audit:** ask it to inspect an existing project against VCES, report evidence-based gaps, and recommend prioritized fixes.

VCES is the source of engineering requirements. The repository's instructions, skills, templates, checklists, and automation help apply the Standard; they are not all mandatory project components.

## Start here

1. Read [the VCES Standard](VIBE-CODING-STANDARD.md).
2. Use the [Adoption Guide](docs/ADOPTION-GUIDE.md) for the practical Build and Audit paths.
3. Give the coding agent the project's goal. It should select relevant skills and engineering steps automatically.
4. Add only project instructions, documents, templates, tests, and automation that solve a real need and can be maintained.

## Core outcomes

- **Security:** reduce avoidable vulnerabilities and protect users, data, and credentials.
- **Stability and reliability:** validate important behavior, handle failures, and protect data integrity.
- **Maintainability:** use understandable structure and avoid unnecessary complexity.
- **Verification:** distinguish what was actually checked from assumptions, unknowns, and unrun checks.

## Repository contents

| Path | Purpose |
|---|---|
| `VIBE-CODING-STANDARD.md` | Canonical engineering requirements |
| `AGENTS.md` | Instructions for AI agents maintaining and applying VCES |
| `skills/` | Focused guidance for planning, architecture, secure development, testing, and review |
| `security/` | Domain-specific security guidance; consult only when relevant |\n| `docs/SECURITY-STANDARDS-MAPPING.md` | Informative crosswalk to established external security standards |
| `templates/` | Optional project documents, checklists, ADRs, and workflow examples |
| `docs/ADOPTION-GUIDE.md` | Practical guidance for new and existing projects |
| `docs/ENGINEERING-HEALTH-CHECK.md` | Optional evidence-based assessment |
| `docs/RELEASE-PROCESS.md` | VCES Standard versioning and release guidance |
| `docs/GITHUB-SECURITY-CONFIGURATION.md` | Optional GitHub security configuration guidance |

## How VCES keeps work proportionate

- The user describes the outcome; the agent handles routine engineering decisions.
- Build, Audit, Fix, and Explain intent is inferred from natural language.
- Skills are selected automatically and only when relevant.
- Security controls are mandatory where applicable; scanners and products are chosen based on project risk and technology.
- Templates, separate documents, CI, and other automation are optional unless a real project requirement makes them necessary.
- A passing scan, build, checklist, or health score is not proof that an application is secure or production-ready.

## Validate this repository

The following checks maintain this VCES template repository; they are not required setup for every project.

Requires Node.js 22 or later:

```bash
node --test scripts/*.test.mjs
node scripts/validate-template.mjs
```

CI also parses workflow YAML and analyzes GitHub Actions workflows with zizmor. Release publication validates the Standard version, templates, tests, workflow syntax/security, and tag ancestry. No Trivy filesystem gate or mandatory branch-protection rule is required for this knowledge-and-standard repository.

## Non-goals

VCES does not prescribe a programming language, framework, hosting provider, architecture, scanner, branching model, or AI vendor. It does not require enterprise-grade processes for small projects or authorize agents to make consequential production changes without approval.

## Version and release status

- **Current released standard:** 1.0.0
- **Repository changes:** Additional guidance and tooling are tracked under [Unreleased](CHANGELOG.md) until a versioned release is published.
- **Versioning:** Normative standard releases follow Semantic Versioning. See the [release process](docs/RELEASE-PROCESS.md).

## License

Not yet selected. See [LICENSE](LICENSE) for the current status.

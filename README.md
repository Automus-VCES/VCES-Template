# Vibe Coding Engineering Standard (VCES)

VCES is a technology-agnostic engineering standard and adoption toolkit for software built by people, AI coding agents, or both.

This repository is the **canonical source of truth** for universal engineering rules. Adopting repositories tailor project-specific requirements without silently weakening or contradicting the standard.

VCES follows **Minimum Sufficient Engineering**: start with the simplest maintainable solution, apply controls proportionate to actual risk, and add complexity only when a real requirement or evidenced risk justifies it.

## Start here

1. Read the [VCES standard](VIBE-CODING-STANDARD.md).
2. Choose an adoption level and follow the [adoption guide](docs/ADOPTION-GUIDE.md).
3. Add only the project instructions and templates that will actually be useful and maintained.
4. Give coding agents the repository `AGENTS.md` instructions; let the agent select relevant skills automatically based on the task.
5. Use the [core skills](skills/) and [focused security skills](security/) when their triggers apply; they are guidance, not a requirement to read every file for every task.
6. Add CI, security scanning, and starter workflows only when they provide useful checks for that project.

## Repository contents

| Path | Purpose |
|---|---|
| `VIBE-CODING-STANDARD.md` | Universal engineering requirements and release gates |
| `AGENTS.md` | AI agent instructions for maintaining and applying VCES |
| `skills/` | Five focused, flat Markdown skills for planning, architecture, baseline secure development, testing/debugging, and review |
| `security/` | Flat, domain-specific security guidance; consult only the domains relevant to the work |
| `templates/` | Optional, copy-ready project documents, checklist, ADR, and workflow examples |
| `docs/ADOPTION-GUIDE.md` | Proportionate adoption for new and existing repositories |
| `docs/ENGINEERING-HEALTH-CHECK.md` | Optional evidence-based assessment; not a required workflow |
| `docs/RELEASE-PROCESS.md` | Versioning and release guidance |
| `docs/GITHUB-SECURITY-CONFIGURATION.md` | GitHub security configuration guidance |

## Skill selection

The baseline standard and project instructions are always applicable. Agents should automatically choose only the relevant skills from task triggers; users should not need to know or manually invoke a skill. The core secure-development skill is the baseline; specialized security skills add focused guidance when their domain is touched.

## Adoption levels

- **Basic:** small, low-risk standalone projects.
- **Standard:** actively maintained applications.
- **Production:** business-critical or externally exposed systems.

Choose controls proportionate to impact, exposure, data sensitivity, and operational dependency—not repository size. These levels are guidance, not rigid categories. Do not introduce production-grade infrastructure, exhaustive documentation, or multi-agent workflows unless the project needs them.

## Validate this repository

Requires Node.js 22 or later:

```bash
node --test scripts/*.test.mjs
node scripts/validate-template.mjs
```

GitHub Actions also parses repository and starter workflow YAML. The release workflow runs tests, validation, YAML parsing, workflow security analysis, and tag/version/main-ancestry checks before publishing.

## Non-goals

VCES does not prescribe a programming language, framework, architecture, hosting provider, branching model, or AI vendor. It does not treat a passing build as proof of correctness or authorize agents to make consequential production changes.

## Version and release status

- **Current released standard:** 1.0.0
- **Repository changes:** Additional guidance and tooling are tracked under [Unreleased](CHANGELOG.md) until a versioned release is published.
- **Versioning:** Normative standard releases follow Semantic Versioning. See the [release process](docs/RELEASE-PROCESS.md).

## License

Not yet selected. See [LICENSE](LICENSE) for the current status.

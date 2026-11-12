# Vibe Coding Engineering Standard (VCES)

VCES is a technology-agnostic engineering standard and adoption toolkit for software built by people, AI coding agents, or both.

This repository is the **canonical source of truth** for universal engineering rules. Adopting repositories tailor project-specific requirements without silently weakening or contradicting the standard.

VCES follows **Minimum Sufficient Engineering**: start with the simplest maintainable solution, apply controls proportionate to actual risk, and add complexity only when a real requirement or evidenced risk justifies it.

## Start here

1. Read the [VCES standard](VIBE-CODING-STANDARD.md).
2. Choose an adoption level and follow the [adoption guide](docs/ADOPTION-GUIDE.md).
3. Copy only the [project templates](templates/) that the project will actually maintain. Use the [Secure Vibe Coding Checklist](templates/SECURE-VIBE-CODING-CHECKLIST.md) during security-sensitive work.
4. Give coding agents the repository [AGENTS.md](AGENTS.md) instructions.
5. Use the [five focused skills](skills/) only when their triggers apply.
6. Enable and maintain the [automated workflows](.github/workflows/) that fit the project.

## Repository contents

| Path | Purpose |
|---|---|
| `VIBE-CODING-STANDARD.md` | Universal engineering requirements and release gates |
| `AGENTS.md` | Concise AI agent instructions for this repository |
| `skills/` | Five focused, flat Markdown skills for planning, architecture, security, testing/debugging, and review |
| `templates/PROJECT-STANDARD.md` | Project-specific technical and quality requirements |
| `templates/PROJECT-STATUS.md` | Evidence-based status and outstanding work |
| `templates/AGENTS.md` | Copy-ready AI agent instructions |
| `templates/CONTRIBUTING.md` | Copy-ready contribution and review process |
| `templates/SECURITY.md` | Copy-ready security policy |
| `templates/SECURE-VIBE-CODING-CHECKLIST.md` | Risk-based security checklist for AI-assisted implementation and release |
| `templates/adr/` | Architecture decision record template |
| `templates/workflows/` | Node.js, Python, Flutter, and CodeQL starter workflows |
| `docs/ADOPTION-GUIDE.md` | Adoption for new and existing repositories |
| `docs/ENGINEERING-HEALTH-CHECK.md` | Evidence-based scoring and release override gates |
| `docs/RELEASE-PROCESS.md` | Versioning, release, and maintenance |
| `docs/GITHUB-SECURITY-CONFIGURATION.md` | GitHub security feature prerequisites and workflow permissions |

## Adoption levels

- **Basic:** small, low-risk standalone projects.
- **Standard:** actively maintained applications.
- **Production:** business-critical or externally exposed systems.

Choose controls proportionate to impact, exposure, data sensitivity, and operational dependency—not repository size. These levels are guidance, not rigid project categories. Do not introduce production-grade infrastructure, exhaustive documentation, or multi-agent workflows unless the project needs them.

## Validate this repository

Requires Node.js 22 or later:

```bash
node --test scripts/*.test.mjs
node scripts/validate-template.mjs
```

GitHub Actions also parses the repository and starter workflow YAML. The release workflow runs tests, template validation, YAML parsing, workflow security analysis, and tag/version/main-ancestry checks before publishing.

## Non-goals

VCES does not prescribe a programming language, framework, architecture, hosting provider, branching model, or AI vendor. It does not treat a passing build as proof of correctness or authorize agents to make consequential production changes.

## Version and release status

- **Current released standard:** 1.0.0
- **Repository changes:** Additional guidance and tooling are tracked under [Unreleased](CHANGELOG.md) until a versioned release is published.
- **Versioning:** Normative standard releases follow Semantic Versioning. See the [release process](docs/RELEASE-PROCESS.md).

## License

Not yet selected. See [LICENSE](LICENSE) for the current status.

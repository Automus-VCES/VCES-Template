# Vibe Coding Engineering Standard (VCES)

VCES is a technology-agnostic engineering standard and adoption toolkit for software built by people, AI coding agents, or both.

This repository is the **canonical source of truth** for universal engineering rules. Adopting repositories tailor project-specific requirements without silently weakening or contradicting the standard.

## Start here

1. Read [the VCES](VIBE-CODING-STANDARD.md).
2. Follow the [adoption guide](docs/ADOPTION-GUIDE.md).
3. Copy and customize the [project templates](templates/).
4. Give coding agents the repository [AGENTS.md](AGENTS.md) instructions.
5. Enable and maintain the [automated workflows](.github/workflows/).

## Repository contents

| Path | Purpose |
|---|---|
| `VIBE-CODING-STANDARD.md` | Universal engineering requirements and release gates |
| `AGENTS.md` | AI agent instructions for this repository |
| `templates/PROJECT-STANDARD.md` | Project-specific technical and quality requirements |
| `templates/PROJECT-STATUS.md` | Evidence-based status and outstanding work |
| `templates/AGENTS.md` | Copy-ready AI agent instructions |
| `templates/CONTRIBUTING.md` | Copy-ready contribution and review process |
| `templates/SECURITY.md` | Copy-ready security policy |
| `templates/adr/` | Architecture decision record template |
| `templates/workflows/` | Node.js, Python, Flutter, and CodeQL starter workflows |
| `docs/ADOPTION-GUIDE.md` | Adoption for new and existing repositories |
| `docs/ENGINEERING-HEALTH-CHECK.md` | Evidence-based scoring and release override gates |
| `docs/RELEASE-PROCESS.md` | Versioning, release, and maintenance |

## Adoption levels

- **Basic:** small, low-risk standalone projects.
- **Standard:** actively maintained applications.
- **Production:** business-critical or externally exposed systems.

Choose controls proportionate to risk. Do not add process, dependencies, or architecture without a reason.

## Validate this repository

Requires Node.js 22 or later:

```bash
node scripts/validate-template.mjs
```

GitHub Actions runs this check on pull requests and pushes to the standard development branches.

## Non-goals

VCES does not prescribe a programming language, framework, architecture, hosting provider, branching model, or AI vendor. It does not treat a passing build as proof of correctness or authorize agents to make consequential production changes.

## Version

**Current standard:** 1.0.0  
**Status:** Initial reusable baseline  
**Change policy:** [Release process](docs/RELEASE-PROCESS.md) · [Changelog](CHANGELOG.md)

## License

MIT. See [LICENSE](LICENSE).

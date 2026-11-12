# Agent Instructions — VCES Template

## Purpose
Maintain this repository as the canonical, technology-agnostic Vibe Coding Engineering Standard and adoption toolkit.

## Read first
1. `VIBE-CODING-STANDARD.md`
2. `README.md`
3. Relevant documents under `docs/` and `templates/`
4. `CHANGELOG.md` before changing the published standard

## Repository rules
- Universal requirements belong in `VIBE-CODING-STANDARD.md`.
- Adoption guidance belongs in `docs/`; copy-ready documents belong in `templates/`.
- Keep examples clearly marked and require adopters to customize them.
- Do not make one project's technology stack a universal requirement.
- Avoid duplicated policy; link to canonical rules.
- Use MUST, MUST NOT, SHOULD, SHOULD NOT, and MAY consistently.
- Explain material changes and update the changelog.
- Never claim untested compatibility.

## Engineering approach
- Apply Minimum Sufficient Engineering: choose the simplest maintainable solution that meets the actual requirement.
- Do not add layers, abstractions, dependencies, services, tests, documents, or process steps without a concrete requirement or risk.
- Use the five flat skills in `skills/` only when their stated trigger applies; do not run every skill for every task.
- Keep planning and verification proportionate to change impact. Never skip relevant security, data-integrity, or regression checks merely to stay lightweight.

## Change workflow
Inspect branch and working tree; identify affected standard, templates, docs, and workflows; make a focused change; validate required files and links with `node scripts/validate-template.mjs`; review workflow permissions; inspect the complete diff; update version/changelog where needed; report completed, verified, pending, and blocked items separately.

## Safety
Do not change repository visibility, branch protection, secrets, release settings, or external integrations without explicit approval. Do not merge or delete branches unless authorized.

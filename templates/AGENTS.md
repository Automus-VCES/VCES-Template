# AI Agent Instructions — [Project]

## Read first
1. This file.
2. VCES [version and canonical URL].
3. `PROJECT-STANDARD.md`.
4. `PROJECT-STATUS.md`.
5. Relevant README, architecture, development, security, and ADR documents.

## Project constraints
- Purpose and scope:
- Technology baseline:
- Architecture constraints:
- Protected paths/data:
- Required validation commands:

## Before changing code
Inspect branch and working tree; read relevant implementation and callers; confirm behavior and acceptance criteria; identify root cause, affected interfaces, risks, migration, and approval needs.

## During implementation
Follow VCES and project constraints. Make the smallest coherent change. Avoid unrelated refactors and dependencies. Preserve behavior unless intentionally changed. Add/update tests. Never expose secrets or personal data.

## Before completion
Run relevant lint, static checks, tests, and build. Report checks not run and why. Inspect the complete diff. Update docs/status. Report completed, verified, pending, blocked, and risks with branch/commit/CI evidence.

## Approval required
Obtain approval before destructive data operations, production deployment, consequential security-policy changes, credential rotation, external-service changes, or important branch merges/deletions unless a standing policy explicitly authorizes them. Never claim success without evidence.

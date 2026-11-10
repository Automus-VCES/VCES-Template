# Contributing

All contributions MUST follow the adopted VCES version and `PROJECT-STANDARD.md`.

## Workflow
1. Confirm objective, scope, and acceptance criteria.
2. Create a short-lived branch using the project convention.
3. Implement a focused change.
4. Add/update tests and docs.
5. Run required validation commands.
6. Inspect the complete diff.
7. Open a PR with rationale, risk, and evidence.
8. Address review feedback before merge.

## Pull request checklist
- [ ] Scope and acceptance criteria are clear.
- [ ] Tests cover changed behavior.
- [ ] Required lint, static checks, and build pass.
- [ ] Security and data impacts considered.
- [ ] Documentation is current.
- [ ] No secrets, local state, or unrelated files included.
- [ ] Migration and rollback implications documented.
- [ ] CI checks pass.

Use the commit convention in `PROJECT-STANDARD.md`. Do not bypass required review or CI. Do not force-push shared branches without authorization.

# Code Review Skill

## Purpose
Find correctness, security, data-integrity, regression, and maintainability problems before considering work complete.

## When to use
Use after meaningful implementation, before merging, and before releases. For tiny changes, perform a proportionate self-review rather than a formal review process.

## Workflow
1. Read the requirements and acceptance criteria.
2. Inspect the complete diff, not only the files believed to be changed.
3. Check correctness, edge cases, authorization, input handling, secrets, data changes, and error handling.
4. Look for unnecessary complexity, duplication, dependencies, abstractions, and unrelated changes.
5. Confirm tests and required checks actually ran.
6. Check documentation, configuration, migration, rollback, and deployment impact where relevant.
7. Record findings by severity with evidence and actionable remediation.

## Verification
- No unresolved critical correctness, security, or data-integrity issue remains.
- Changes match scope and acceptance criteria.
- Relevant checks have evidence or are clearly marked pending/blocked.
- Final report distinguishes completed, verified, pending, and blocked work.

## Avoid
Do not approve based on style alone, assume CI passed, demand cosmetic rewrites, or expand scope with speculative improvements.

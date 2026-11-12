# Testing and Debugging Skill

## Purpose
Verify important behavior and fix root causes with the least costly reliable test strategy.

## When to use
Use when implementing or changing behavior, fixing defects, investigating regressions, changing data handling, or preparing a release.

## Workflow
1. Reproduce or define the expected behavior before changing code.
2. Identify the smallest test that reliably demonstrates the requirement or defect.
3. Prefer a focused failing test before the fix when practical.
4. Trace the root cause; inspect relevant callers, state, data, and error paths.
5. Make the smallest coherent fix and add regression coverage.
6. Run focused tests first, then relevant integration, security, and build checks based on risk.
7. Report checks that were not run as not run, with the reason.

## Verification
- The original defect or requirement is covered by a repeatable check.
- Relevant regression tests pass.
- Important failure and boundary cases are considered.
- Test results are real and accurately reported.

## Avoid
Do not chase coverage percentages, test trivial implementation details, mask failures, add flaky tests, or rewrite unrelated code while debugging.

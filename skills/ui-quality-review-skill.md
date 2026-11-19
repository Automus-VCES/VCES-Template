# UI Quality Review Skill

## Purpose
Verify that implemented interfaces satisfy user-facing requirements, design consistency, accessibility, and interaction quality before completion.

## When to use
Use after meaningful UI changes, during frontend audits, and before a user-facing release. For tiny cosmetic changes, perform a proportionate self-review.

## Instructions
1. **Post-implementation gate:** do not approve from source inspection or compilation alone. Inspect the rendered UI and exercise the critical user journeys at representative viewport sizes when the environment permits.
2. Review the request, acceptance criteria, critical user journeys, and relevant UX/frontend/design-system/accessibility guidance.
2. Inspect the complete diff and identify affected pages, components, states, routes, and responsive breakpoints.
3. Run relevant unit, component, integration, accessibility, and end-to-end tests available in the project.
4. Render and inspect changed screens at representative viewport sizes when a browser or visual test environment is available. Check layout, hierarchy, typography, spacing, clipping, and consistency against existing patterns or supplied references.
5. Exercise real interactions, including keyboard operation, focus, form validation, loading, empty, error, success, and disabled states as applicable.
6. Check for broken controls, misleading affordances, inaccessible content, console/runtime errors, and unintended visual regressions.
7. Record findings with severity, affected page/component, reproducible evidence, impact, and recommended fix. Separate automated results from manual inspection.
8. If visual rendering, assistive technology, or a required environment is unavailable, state the limitation; do not claim the check passed.

## Verification
- The post-implementation gate is complete, or every unavailable check is explicitly marked not run/blocked with the reason and remaining risk.
- Changed UI matches acceptance criteria and primary user journeys.
- Representative viewport and interaction states have been inspected or clearly marked not verified.
- Keyboard and accessibility checks are performed proportionately to the change.
- No unresolved high-impact usability, functional, accessibility, or visual regression remains.
- Findings and unrun checks are reported with evidence and clear status.

## Avoid
Do not approve UI based only on source-code inspection, screenshots alone, automated accessibility scores, or successful compilation. Do not expand review into unrelated redesign or cosmetic preference.

## References
- OpenAI frontend prompting: https://developers.openai.com/
- Anthropic skills: https://github.com/anthropics/skills
- WCAG 2.2: https://www.w3.org/TR/WCAG22/
- Playwright: https://playwright.dev/docs/test-snapshots

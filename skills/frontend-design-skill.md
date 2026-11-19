# Frontend Design Skill

## Purpose
Guide AI agents to produce coherent, purposeful, responsive frontend interfaces rather than generic or inconsistent screens.

## When to use
Use when creating or materially changing user-facing pages, components, layouts, visual styling, or interaction states. For backend-only changes, do not load this skill.

## Instructions
1. **Pre-implementation gate:** inspect the existing product and UI system; identify the target task, content hierarchy, visual direction, responsive behavior, and acceptance criteria before coding. Resolve material design ambiguity early; record decisions briefly in the task rather than creating process documents.
2. Inspect the existing application, design system, components, assets, typography, and conventions before designing. Reuse established patterns unless there is a clear reason to change them.
2. Understand the product purpose, target users, content, and primary tasks before choosing a visual direction.
3. Define a coherent visual direction appropriate to the product. Specify hierarchy, layout, typography, color roles, spacing, density, and imagery intentionally.
4. Prefer semantic, reusable components and existing design tokens. Avoid arbitrary one-off values and duplicated component styles.
5. Implement responsive behavior for the actual content and interaction model; do not merely shrink a desktop layout.
6. Implement complete states for interactive elements: default, hover, focus, active, disabled, loading, empty, error, and success as applicable.
7. Use meaningful content and realistic data shapes. Avoid placeholder copy, decorative controls that do nothing, and unsupported feature assumptions.
8. Keep motion purposeful, brief, and non-essential to understanding or completing a task. Respect reduced-motion preferences.
9. Verify the rendered result at representative viewport sizes. Compare against supplied references when available; fix visible layout, typography, spacing, overflow, and interaction defects.
10. Follow the project framework and architecture. Do not introduce a new UI framework or dependency without a concrete need.

## Verification
- The pre-implementation gate was completed before substantial UI implementation; important assumptions and design decisions are recorded.
- The post-implementation gate includes rendered inspection at representative desktop and mobile sizes plus real interaction checks where the environment permits.
- Existing design conventions and components are reused consistently.
- Visual hierarchy and content support the primary task.
- Layout works at representative narrow and wide viewports without unintended overflow.
- Interactive controls work and expose appropriate states and feedback.
- Keyboard focus is visible; semantics and labels are meaningful.
- Motion respects reduced-motion preferences.
- Rendered UI has been inspected; unverified visual behavior is explicitly reported.

## Avoid
Do not default to generic dashboard layouts, gratuitous gradients, excessive cards, decorative animation, arbitrary styling, or novelty that harms usability. Do not claim visual verification if the interface was not rendered and inspected.

## References
- OpenAI frontend prompting: https://developers.openai.com/
- Anthropic frontend-design skill: https://github.com/anthropics/skills
- Vercel v0 prompting: https://v0.dev/docs

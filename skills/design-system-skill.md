# Design System Skill

## Purpose
Maintain visual and interaction consistency through reusable tokens, components, and documented patterns without creating unnecessary design-system infrastructure.

## When to use
Use when establishing or materially changing shared UI foundations, reusable components, themes, tokens, or cross-page consistency. For a one-off page that follows an established system, simply reuse the system.

## Instructions
1. **Before implementation:** identify the existing source of truth for tokens, components, themes, and patterns; decide whether the change can reuse it. Define only the minimum tokens/components needed for a coherent result.
2. Inspect existing tokens, component libraries, styles, and usage patterns before adding or changing foundations.
2. Reuse the current system where practical. Do not introduce a second design system for the same product without a justified migration or boundary.
3. Define semantic design tokens for recurring decisions such as color roles, typography, spacing, sizing, borders, elevation, and motion. Prefer semantic names over component-specific hard-coded values.
4. Build components around consistent behavior, accessible semantics, clear variants, and explicit states. Keep APIs small and avoid speculative configurability.
5. Document usage, variants, constraints, and accessibility behavior where consumers need that information.
6. Make changes incrementally and migrate affected consumers coherently. Avoid broad visual rewrites unrelated to the request.
7. Treat third-party design systems as references, not requirements. Select patterns that fit the product, platform, and existing stack.

## Verification
- Design-system decisions were checked before implementation and shared components/tokens were reviewed after implementation for consistency and unintended duplication.
- Shared decisions use tokens or existing system primitives rather than duplicated arbitrary values.
- Components have consistent APIs, semantics, variants, and states.
- Existing consumers remain compatible or intentional changes are documented and tested.
- No duplicate or conflicting token/component system is introduced.
- Documentation matches actual component behavior.

## Avoid
Do not create a token for every isolated value, build a component library for a single trivial screen, or add dependencies solely to imitate another product's design system.

## References
- Google Material Design: https://m3.material.io/
- Microsoft Fluent 2: https://fluent2.microsoft.design/
- IBM Carbon: https://carbondesignsystem.com/
- GitHub Primer: https://primer.style/

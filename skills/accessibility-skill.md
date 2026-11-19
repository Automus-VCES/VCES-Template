# Accessibility Skill

## Purpose
Make applicable user interfaces perceivable, operable, understandable, and robust, using WCAG as the primary conformance reference.

## When to use
Use for user-facing UI changes, interactive components, forms, navigation, media, visual styling, and accessibility audits. Apply relevant checks whenever frontend behavior is changed.

## Workflow
1. **Before implementation:** identify applicable accessibility needs and WCAG 2.2 AA considerations for the changed journeys, controls, content, and responsive behavior; include them in acceptance criteria.
2. Use WCAG 2.2 Level AA as the default target unless law, contract, or project policy requires a different or stricter target. Do not claim conformance from an automated scan alone.
3. Prefer semantic HTML and native controls. Add ARIA only when native semantics are insufficient; do not override correct native behavior.
4. Ensure all functionality is keyboard operable, focus order is logical, focus is visible, and focus is managed appropriately for dialogs, menus, route changes, and dynamic updates.
5. Provide programmatic names, roles, values, labels, instructions, and error associations for controls. Ensure accessible names describe purpose.
6. Do not rely on color, shape, position, sound, or motion alone to convey meaning. Check text and non-text contrast against applicable WCAG criteria.
7. Provide text alternatives for meaningful images and accessible names for controls. Decorative images must not create redundant announcements.
8. Support zoom/reflow and responsive text without loss of content or functionality. Avoid fixed dimensions that clip user content.
9. Respect reduced-motion preferences; avoid flashing content and time limits that users cannot control where applicable.
10. Make validation errors identifiable and actionable. Announce important asynchronous status changes without unnecessarily interrupting users.
11. Test with keyboard navigation and appropriate assistive-technology checks for the affected interaction. Use automated tools as a supplement, not a substitute.

## Verification
- Accessibility considerations were included in the acceptance criteria before implementation and checked against the rendered/working UI afterward.
- Applicable WCAG 2.2 AA criteria have been considered for changed UI.
- Keyboard-only users can reach, operate, and exit interactive controls.
- Focus is visible and managed correctly.
- Controls have meaningful accessible names, labels, roles, and states.
- Contrast, reflow/zoom, error feedback, and reduced-motion behavior are checked as applicable.
- Automated and manual checks are distinguished; untested criteria are disclosed.

## Avoid
Do not add redundant ARIA, use placeholder text as the only label, suppress focus indicators without replacement, or infer accessibility from visual appearance or a passing scanner.

## References
- W3C WCAG 2.2: https://www.w3.org/TR/WCAG22/
- W3C Understanding WCAG: https://www.w3.org/WAI/WCAG22/Understanding/
- W3C WAI: https://www.w3.org/WAI/

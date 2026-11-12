# Architecture Review Skill

## Purpose
Choose and review an architecture that is understandable, secure, and sufficient for the actual app.

## When to use
Use when starting an app, choosing a stack or data model, introducing a major integration, changing system boundaries, or investigating structural complexity. Skip a formal review for localized changes with no architectural impact.

## Workflow
1. Confirm functional needs, constraints, expected usage, deployment model, and data sensitivity.
2. Map the main components, data flow, trust boundaries, and external dependencies.
3. Prefer the simplest architecture that meets current requirements.
4. Review persistence, API boundaries, authentication/authorization, failure handling, and migration needs where applicable.
5. Identify material trade-offs and record only consequential decisions as ADRs.
6. Check whether existing components can be reused before adding services, layers, frameworks, or infrastructure.

## Verification
- Component responsibilities and data ownership are clear.
- Security and failure boundaries are addressed.
- The design can be tested and maintained.
- Each significant complexity has a current requirement or risk that justifies it.

## Avoid
Do not introduce microservices, queues, caching, plugin systems, generic frameworks, extra abstraction layers, or speculative scalability work without evidence.

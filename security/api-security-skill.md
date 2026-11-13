# API Security Skill

## Purpose
Ensure every API request is authenticated where required, authorized at the correct object/property/function level, and protected against abuse.

## When to use
Use when creating, exposing, consuming, or changing REST, GraphQL, RPC, webhook, mobile, or service-to-service APIs.

## Workflow
1. Inventory routes, methods, schemas, data classifications, callers, and trust boundaries.
2. Enforce server-side authorization for every object and action; derive tenant/user scope from verified identity, not client-supplied identifiers.
3. Prevent BOLA/IDOR by checking ownership or explicit policy for each referenced object, including nested resources and bulk operations.
4. Prevent BFLA by enforcing role/permission checks on administrative and privileged functions independently of UI visibility.
5. Prevent mass assignment and excessive data exposure with explicit request and response schemas; allowlist writable fields and serialize only approved properties.
6. Apply authentication, per-identity and per-resource rate limits, pagination bounds, payload limits, timeouts, and concurrency controls.
7. Protect sensitive business flows from automation and abuse with server-side state, idempotency, quotas, and risk-appropriate friction.
8. Verify webhook signatures over the raw request body, enforce timestamp/replay windows, and use idempotency keys for retryable events.
9. Restrict outbound API calls and integrations; validate destinations and treat third-party responses as untrusted.
10. Maintain an API inventory, version/deprecation policy, and tests for unauthorized, cross-tenant, over-posted, oversized, and replayed requests.

## Verification
- Cross-user and cross-tenant object access is denied by server-side tests.
- Privileged routes are denied to callers lacking the required permission.
- Writable and returned properties match explicit schemas.
- Resource limits apply consistently to list, search, bulk, and nested endpoints.
- Webhook signature, timestamp, and replay checks are tested.
- Deprecated and undocumented endpoints are inventoried and access-controlled.

## Avoid
Do not rely on hidden UI controls, CORS, unguessable IDs, or API gateway authentication as substitutes for application-level authorization.

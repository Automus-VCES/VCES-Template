# Business Logic Security Skill

## Purpose
Find and prevent abuse of valid features through workflow manipulation, concurrency, replay, and trust in client-controlled state.

## When to use
Use for payments, orders, subscriptions, credits, entitlements, bookings, approvals, inventory, promotions, quotas, and multi-step workflows.

## Workflow
1. Describe the intended state machine, actors, invariants, and permitted transitions.
2. Identify valuable outcomes and abuse cases such as duplicate redemption, price tampering, privilege escalation, limit bypass, and workflow skipping.
3. Calculate prices, permissions, balances, quotas, and entitlements on trusted server-side data; treat client values as display/input only.
4. Enforce transition preconditions and authorization on every step, including direct API invocation and out-of-order requests.
5. Use database transactions, constraints, optimistic/pessimistic locking, or atomic operations to protect invariants under concurrency.
6. Make retryable operations idempotent and bind idempotency keys to the authenticated actor and operation scope.
7. Verify payment/provider callbacks independently; reconcile amounts, currency, order identity, and final provider state.
8. Enforce limits and anti-abuse controls server-side, with auditable exception paths.
9. Test race conditions, repeated requests, stale state, partial failures, and compensating actions.
10. Record security-relevant business events and alert on anomalous patterns without logging sensitive payment credentials.

## Verification
- Invalid and out-of-order state transitions are rejected.
- Concurrent requests cannot violate balance, inventory, quota, or entitlement invariants.
- Replayed requests do not duplicate side effects.
- Client-side price/role/status manipulation has no authority.
- Provider callbacks cannot finalize mismatched or unverified transactions.

## Avoid
Do not assume a technically valid request is a legitimate business action. Do not use client-side checks as enforcement.

# Security Testing Skill

## Purpose
Verify security controls through authorized, repeatable, risk-based tests and preserve evidence for release decisions.

## When to use
Use during security-sensitive implementation, pre-release review, vulnerability remediation, CI design, and incident regression testing.

## Workflow
1. Confirm scope, environment, authorization, test accounts, data handling, and prohibited actions before testing.
2. Convert each relevant threat/control into a positive test and a negative/abuse test with explicit expected outcomes.
3. Prioritize authorization boundaries, injection, authentication/session, upload, SSRF, secrets, API limits, and business invariants according to exposure and impact.
4. Prefer isolated test environments and synthetic data; avoid destructive or intrusive tests against production unless explicitly authorized.
5. Use static analysis, dependency scanning, secret scanning, configuration checks, and dynamic tests as complementary evidence.
6. Add regression tests for confirmed vulnerabilities and verify the fix fails before and passes after remediation.
7. Record tool/version, scope, test case, expected/actual result, evidence, limitations, and timestamp.
8. Triage findings by exploitability, impact, exposure, and compensating controls; define owner and due date.
9. Block release for unresolved critical/high findings unless an authorized, documented exception process explicitly permits it.
10. Re-test after relevant code, dependency, configuration, or infrastructure changes.

## Verification
- Tests are authorized, scoped, repeatable, and non-destructive by default.
- Negative tests demonstrate denied access and rejected abuse cases.
- Confirmed findings have regression coverage or documented reason why not.
- Reports distinguish confirmed vulnerabilities from hypotheses and scanner-only alerts.
- Release disposition and residual risk are recorded with evidence.

## Avoid
Do not claim a system is secure because tests pass or scanners report no findings. Do not perform exploitation, persistence, data extraction, or disruptive testing without explicit authorization and an approved scope.

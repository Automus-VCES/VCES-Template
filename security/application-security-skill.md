# Application Security Skill

## Purpose
Prevent common web and application vulnerabilities at input, output, execution, and file-system boundaries.

## When to use
Use when building or reviewing web/mobile backends, frontend features, forms, search, rendering, file handling, URL fetching, database access, or integrations.

## Workflow
1. Map entry points, trust boundaries, sensitive data, and privileged operations.
2. Validate untrusted input on the server using allowlists, schemas, length limits, and canonicalization appropriate to the data type.
3. Use parameterized database queries; avoid string-built SQL/NoSQL queries and unsafe expression evaluation.
4. Encode output for its exact context (HTML, attribute, JavaScript, URL, CSS); do not rely on input filtering as an XSS defense.
5. Apply CSRF protection to cookie-authenticated state changes; use secure cookie attributes and origin checks where appropriate.
6. Prevent path traversal by resolving paths against a fixed base directory and verifying the final canonical path remains inside it.
7. Treat uploads as hostile: enforce authorization, size/type limits, content inspection, generated names, isolated non-executable storage, and safe download headers.
8. For server-side URL fetching, enforce destination allowlists, block internal/metadata IP ranges, re-check DNS and redirects, and apply egress, timeout, and response-size limits.
9. Handle errors without leaking stack traces, secrets, internal paths, or database details.
10. Configure browser-facing security controls deliberately: restrictive Content Security Policy where feasible, appropriate security headers (including frame-ancestors or equivalent clickjacking protection), narrowly scoped CORS, and secure cookie attributes. Do not treat CORS as authorization.\n11. Avoid storing session credentials in browser-accessible persistent storage where a secure, HttpOnly cookie design is suitable; protect any unavoidable browser storage according to its exposure. Use Trusted Types where supported and justified by the frontend stack.\n12. Add negative tests for malformed input, unauthorized operations, boundary values, malicious payload classes, and relevant browser-origin/security-header behavior.

## Verification
- Injection tests confirm data is treated as data, not executable syntax.
- Output encoding is context-correct and unsafe HTML sinks are controlled.
- CSRF defenses cover cookie-authenticated state changes.
- File paths cannot escape their intended storage root.
- Uploaded content cannot execute in the application runtime.
- URL-fetch controls reject prohibited destinations and redirect-based bypasses.
- Error responses do not expose sensitive implementation details.\n- Browser security headers, CSP, CORS, framing protection, and credential storage are reviewed against the application's actual browser architecture.

## Avoid
Do not claim that a scanner or input sanitizer alone eliminates application vulnerabilities. Do not add brittle denylist-only validation where a positive allowlist is feasible.

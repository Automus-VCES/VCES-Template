# Authentication Security Skill

## Purpose
Protect identity proof, credentials, sessions, recovery flows, and account lifecycle operations.

## When to use
Use when implementing login, signup, MFA, password reset, email/phone verification, OAuth/OIDC, API keys, JWTs, sessions, or account changes.

## Workflow
1. Select established framework/provider primitives; do not invent password hashing, token formats, or cryptographic protocols.
2. Store passwords using a current password-hashing algorithm with per-password salts and reviewed cost settings; never store plaintext or reversible passwords.
3. Enforce secure transport and rate limits on login, recovery, verification, and MFA endpoints; avoid account-enumeration differences.
4. Require appropriate re-authentication or step-up authentication for sensitive account and credential changes.
5. Generate high-entropy, single-use, time-limited recovery and verification tokens; store only protected representations where feasible and invalidate them after use.
6. Configure sessions with unpredictable identifiers, rotation after authentication/privilege changes, idle and absolute expiry, and server-side revocation.
7. Set cookies with Secure, HttpOnly, and an appropriate SameSite policy; never place session secrets in URLs or browser-readable storage without a documented threat analysis.
8. Validate JWT signature with an explicit algorithm allowlist, issuer, audience, expiry, not-before, and key rotation; reject unsigned or algorithm-confused tokens.
9. Rotate refresh tokens, detect reuse where supported, revoke token families after suspected compromise, and scope API keys narrowly.
10. Log authentication security events without recording passwords, raw tokens, recovery codes, or unnecessary personal data.

## Verification
- Login, recovery, MFA, and verification are rate-limited and do not enable practical enumeration.
- Recovery tokens expire, are single-use, and are invalidated after credential changes.
- Session identifiers rotate at trust/privilege boundaries and can be revoked.
- JWT validation rejects invalid signatures, algorithms, issuers, audiences, and time claims.
- Logout and account compromise paths invalidate relevant sessions/tokens.

## Avoid
Do not implement custom cryptography or treat possession of a valid token as sufficient authorization for every resource or action.

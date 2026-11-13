# Data Security Skill

## Purpose
Protect confidentiality, integrity, retention, and availability of application data throughout its lifecycle.

## When to use
Use when storing, processing, exporting, backing up, sharing, logging, or deleting personal, confidential, financial, business, or regulated data.

## Workflow
1. Inventory data types, owners, purpose, sensitivity, storage locations, processors, and retention requirements.
2. Collect and retain only data required for a defined purpose; document lawful/contractual requirements where applicable.
3. Enforce tenant and record-level access controls in every read, write, export, search, and background job.
4. Encrypt data in transit and at rest using maintained platform primitives; manage keys separately with rotation and least privilege.
5. Keep secrets, credentials, tokens, and sensitive payloads out of logs, analytics, error reports, URLs, and test fixtures.
6. Define backup frequency, isolation, access controls, retention, and tested restore objectives appropriate to business impact.
7. Protect exports and generated files with authorization, short-lived access, safe filenames, and explicit expiry.
8. Apply retention and deletion policies to primary stores, replicas, caches, logs, backups, and third-party processors.
9. Validate integrity for critical records and reconcile external/system-of-record data where needed.
10. Test tenant isolation, unauthorized exports, restore procedures, and deletion behavior.

## Verification
- Data inventory and classification exist for sensitive data flows.
- Access tests cover direct reads, search, exports, background jobs, and cross-tenant boundaries.
- Encryption and key access follow the approved platform design.
- Logs and diagnostics contain no prohibited secrets or sensitive payloads.
- Backup restoration is demonstrated at the required recovery objectives.
- Retention/deletion behavior and residual backup handling are documented.

## Avoid
Do not claim encryption alone solves access-control, key-management, or data-retention risks. Do not promise deletion from immutable backups unless the design supports it.

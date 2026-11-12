# Engineering Health Check

Scores summarize evidence; they are not certification and do not override mandatory release gates.

## 1. Rating scale

| Rating | Meaning |
|---|---|
| 0 | Absent, broken, or critically unsafe |
| 1 | Ad hoc; major gaps |
| 2 | Partially implemented; inconsistent |
| 3 | Defined and generally working |
| 4 | Consistently implemented and verified |
| 5 | Measured, maintained, continuously improved |
| N/A | Genuinely not applicable to this system, with documented rationale |

For numeric ratings, dimension score = rating / 5 × 100.

## 2. Dimensions

| Dimension | Weight | Evidence |
|---|---:|---|
| Architecture | 10% | Boundaries, coupling, dependency direction, ADRs |
| Code quality | 15% | Readability, complexity, duplication, static checks |
| Functionality | 15% | Requirements, critical journeys, defect evidence |
| Security | 20% | Secrets, authz, input boundaries, dependencies, security tests |
| Testing | 15% | Relevant unit, integration, regression, acceptance tests |
| Performance/reliability | 10% | Baselines, query/resource behavior, timeouts, monitoring |
| Documentation | 5% | Accurate setup, architecture, operations, status |
| DevOps/release | 10% | CI, artifact integrity, approvals, rollback, reproducibility |
| **Total** | **100%** | |

## 3. Calculation and N/A treatment

For each applicable dimension, calculate its weighted points as (dimension score / 100) × dimension weight.

If a dimension is genuinely not applicable, mark it **N/A**, record the rationale and evidence, and exclude its weight from the denominator. Normalize the remaining applicable weights:

**Normalized score = sum(weighted points for applicable dimensions) / sum(weights for applicable dimensions) × 100**

Do not mark a dimension N/A merely because evidence is missing or a check was not performed; use **Not assessed** and identify the evidence gap. At least one dimension must be applicable. N/A does not remove any relevant mandatory security, data-integrity, testing, or release gate.

## 4. Classification

| Weighted score | Classification |
|---|---|
| 90–100 | Excellent |
| 80–89 | Good |
| 70–79 | Acceptable |
| 50–69 | Needs improvement |
| 0–49 | Critical |

## 5. Mandatory override gates

Mark **Not Release Ready** regardless of score if an unresolved critical vulnerability or active compromise exists, critical data integrity is unsafe, mandatory tests/build failed or were not run, critical-data restore is unverified, or required deployment authorization/rollback readiness is absent. A critical vulnerability exception is valid only under the formally approved incident/risk process described in VCES Section 6; it does not permit routine release during active compromise. High-severity risks require documented, authorized disposition.

## 6. Evidence quality

For every rating record what was inspected, evidence source, date/environment, confidence and gaps, remediation owner, and review date. Documentation claims alone do not prove implementation.

## 7. Assessment worksheet

| Dimension | Score / 100 | Weight | Weighted points | Evidence / gap |
|---|---:|---:|---:|---|
| Architecture | | 10% | | |
| Code quality | | 15% | | |
| Functionality | | 15% | | |
| Security | | 20% | | |
| Testing | | 15% | | |
| Performance/reliability | | 10% | | |
| Documentation | | 5% | | |
| DevOps/release | | 10% | | |
| **Total** | | **100%** | | |

Report overall score/classification, applicable dimensions and normalized weights, override-gate result, top risks, remediation actions, evidence gaps, owners, and reassessment date.

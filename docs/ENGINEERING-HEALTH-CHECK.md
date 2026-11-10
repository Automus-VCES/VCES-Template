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

Dimension score = rating / 5 × 100. Weighted total = sum of dimension score × weight.

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

## 3. Classification

| Weighted score | Classification |
|---|---|
| 90–100 | Excellent |
| 80–89 | Good |
| 70–79 | Acceptable |
| 50–69 | Needs improvement |
| 0–49 | Critical |

## 4. Mandatory override gates

Mark **Not Release Ready** regardless of score if a critical vulnerability/active compromise is unresolved, critical data integrity is unsafe, mandatory tests/build failed or were not run, critical-data restore is unverified, or required deployment authorization/rollback readiness is absent. High-severity risks require documented, authorized disposition.

## 5. Evidence quality
For every rating record what was inspected, evidence source, date/environment, confidence and gaps, remediation owner, and review date. Documentation claims alone do not prove implementation.

## 6. Assessment worksheet

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

Report overall score/classification, override-gate result, top risks, remediation actions, evidence gaps, owners, and reassessment date.

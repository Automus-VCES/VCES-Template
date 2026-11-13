# AI Security Skill

## Purpose
Secure AI-enabled features and agents against untrusted instructions, data leakage, unsafe tool use, and excessive autonomy.

## When to use
Use when building LLM features, RAG/search, agents, tool calling, plugins, code execution, memory, or AI-mediated workflows.

## Workflow
1. Treat user prompts, retrieved documents, tool outputs, model outputs, and external content as untrusted data.
2. Separate instructions from data; do not let retrieved content or user-controlled text override system/developer policy.
3. Enforce authorization outside the model for every retrieval, tool call, file operation, and consequential action.
4. Apply least privilege and narrow schemas to tools; allowlist operations and destinations and validate arguments server-side.
5. Require explicit human approval for destructive, financial, external communication, privilege-changing, or production-impacting actions.
6. Prevent cross-user and cross-tenant RAG leakage by enforcing access filters before retrieval and again before returning content.
7. Minimize sensitive data sent to models and tools; redact secrets and define retention/provider controls.
8. Treat model output as untrusted: validate structured output, encode rendered content, and never execute generated code or commands without isolated review and controls.
9. Bound tokens, tool calls, recursion, concurrency, runtime, and external spend; implement abuse monitoring and graceful failure.
10. Log decisions and tool activity with privacy safeguards; retain enough evidence to investigate unsafe actions.
11. Evaluate prompt injection, data exfiltration, tool misuse, refusal bypass, and overreliance using representative adversarial tests.

## Verification
- Prompt injection cannot grant privileges or override server-side policy.
- Tools enforce authorization independently of model intent and arguments.
- RAG retrieval and output enforce tenant/document permissions.
- Sensitive data is minimized and not exposed across users or providers contrary to policy.
- High-impact actions have explicit approval and audit evidence.
- Resource budgets and failure limits are enforced.

## Avoid
Do not treat prompt instructions as a security boundary, model confidence as authorization, or a model refusal as the only control.

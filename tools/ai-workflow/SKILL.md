---
name: ai-dev-workflow
description: Plan, implement, validate, and review new software features with explicit acceptance criteria, repository-aware execution, risk-proportional testing, and independent verification. Use whenever Codex is asked to add, build, integrate, extend, redesign, migrate, or ship a feature in a new or existing codebase; create project instructions or development context; prepare an implementation plan; conduct architecture, security, performance, or maintainability review; coordinate multiple AI reviewers; or produce a release-readiness report.
---

# AI Dev Workflow

Deliver each feature as a verified vertical slice. Preserve repository conventions and user work. Scale ceremony to risk: keep small local changes fast; apply the full workflow to cross-cutting, security-sensitive, data-changing, or production-facing work.

## 1. Orient before editing

1. Read repository instructions (`AGENTS.md`, `CLAUDE.md`, contributing docs, relevant skills).
2. Inspect the working tree and preserve unrelated or user-owned changes.
3. Locate the current implementation, tests, schemas, routes, UI states, and deployment constraints.
4. Prefer existing patterns and dependencies unless the feature requires a justified change.
5. Research current external APIs or unstable technical facts using primary documentation when needed.

For a new or poorly documented project, create or repair the project context using [project context template](references/project_context_template.md). Do not replace valid existing instructions merely to match the template.

## 2. Frame the feature

Write a compact internal feature brief before implementation:

- user outcome and triggering scenario;
- acceptance criteria observable by a user or test;
- non-goals;
- affected surfaces (UI, API, data, auth, jobs, integrations, deployment);
- compatibility, migration, security, privacy, and failure risks;
- validation plan.

Use [feature brief and readiness checklist](references/feature_checklist.md) for ambiguous, cross-cutting, or high-risk work. Ask the user only when a missing choice would materially change the result, require new authority, or cause irreversible external effects. Otherwise make a narrow, stated assumption and proceed.

## 3. Choose workflow depth

### Fast path

Use for a localized, reversible feature with no schema/auth/public-contract change:

1. Inspect the affected path and nearest tests.
2. Define acceptance criteria.
3. Implement the smallest coherent vertical slice.
4. Run focused checks plus the repository's normal build/typecheck.
5. Review the diff for regressions and report the result.

### Full path

Use when the feature crosses modules, changes data or public contracts, affects security/privacy/payments, introduces infrastructure, or has meaningful rollout risk:

1. Build an impact map and ordered implementation plan.
2. Identify migration, rollback, observability, and compatibility requirements.
3. Implement in dependency order, keeping the project runnable after each module.
4. Validate each module before continuing.
5. Run independent review and reconcile findings.
6. Verify release and rollback readiness before publishing.

Update the plan when evidence changes it. Stop for user approval only when the revised direction materially changes scope, architecture, cost, access, or external state.

## 4. Implement a vertical slice

Include every layer needed for the feature to work, not only the visible component:

- domain types and business rules;
- storage/schema/migrations when required;
- API or tool contracts and validation;
- UI states: loading, empty, success, error, disabled, and accessibility;
- authorization and input/output boundaries;
- tests and fixtures;
- documentation or project instructions that future work depends on;
- telemetry, logs, feature flags, or rollback hooks when risk warrants them.

Avoid speculative abstractions. Never silently weaken validation, authorization, safety gates, or test coverage to make checks pass.

## 5. Validate from narrow to broad

1. Run syntax/type/static checks for changed files.
2. Run focused unit and integration tests around the feature.
3. Exercise the primary user flow and at least one failure/edge path.
4. Run the repository's normal build and broader test suite in proportion to risk.
5. Inspect generated artifacts, migrations, exports, or protocol responses when the feature produces them.
6. Run `git diff --check` and review the final diff for accidental changes, secrets, debug code, and stale documentation.

Do not claim checks that were not run. Distinguish failures caused by the feature from pre-existing warnings or unavailable external dependencies.

## 6. Review independently

For medium/high-risk work, perform a second pass that starts from the feature brief and raw diff/tests, not from the implementer's conclusion. Check correctness, architecture, security, privacy, abuse cases, performance, compatibility, migrations, rollback, negative tests, and operational visibility.

Use a separate reviewer/model/session only when available and authorized by the active environment. Preserve independence: Reviewer 2 evaluates the code before reading Reviewer 1's conclusions. Never create parallel agents merely because this skill mentions independent review when higher-level instructions disallow delegation.

Record material findings with evidence and severity. Use [review report templates](references/report_templates.md) when the user requests a durable audit or when the full path produces several findings.

## 7. Reconcile and finish

1. Fix confirmed findings in priority order.
2. Re-run the checks that cover each fix, then the final build/test gate.
3. Confirm acceptance criteria one by one.
4. Publish/deploy only when authorized and release gates pass.
5. Report outcome first: what now works, important files/artifacts, checks run, remaining risks, and the exact next action if blocked.

Never call work complete while required functionality, validation, migration, or release work remains.

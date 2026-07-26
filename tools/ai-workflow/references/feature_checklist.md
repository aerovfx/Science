# Feature brief and readiness checklist

## Feature brief

```markdown
# Feature: [name]

## Outcome
[What the user can do after this ships]

## Acceptance criteria
- [ ] Given [state], when [action], then [observable result]
- [ ] Failure/empty/loading behavior is defined
- [ ] Authorization and data boundaries are defined

## Non-goals
- [Explicit exclusions]

## Impact map
- UI:
- API/tools:
- Domain logic:
- Data/migrations:
- Auth/privacy/security:
- Jobs/integrations:
- Deployment/rollback:

## Validation
- Focused tests:
- User-flow check:
- Build/typecheck/lint:
- Artifact or migration inspection:
```

## Risk triggers for the full path

- persistent schema or migration changes;
- authentication, authorization, secrets, payments, or personal data;
- public API/protocol compatibility;
- destructive or difficult-to-reverse operations;
- multi-service or cross-platform changes;
- performance-sensitive hot paths or large workloads;
- production deployment, infrastructure, or third-party side effects;
- safety-relevant hardware or physical-world control.

## Definition of done

- acceptance criteria pass with evidence;
- primary and failure paths work;
- affected contracts and docs agree with implementation;
- migrations and rollback are tested when applicable;
- no unrelated changes, secrets, debug code, or suppressed errors;
- focused checks and the appropriate broader gate pass;
- remaining limitations are explicit.

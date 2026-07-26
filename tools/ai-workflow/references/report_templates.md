# Review report templates

## Independent review

```markdown
# Feature review — [feature] — [date]

## Verdict
[Ready / Ready with follow-ups / Not ready] — [short evidence-based summary]

## Acceptance criteria
| Criterion | Pass/Fail | Evidence |
|---|---|---|

## Findings
### Critical / High
- [Finding] — [file/location] — [impact] — [recommended fix]

### Medium
- ...

### Low / follow-up
- ...

## Validation gaps
- [Checks not run or environments unavailable]

## Release and rollback readiness
- Migration:
- Observability:
- Rollback:
```

## Cross-review reconciliation

```markdown
# Review reconciliation — [feature] — [date]

## Independent assessment before reading Reviewer 1
[Reviewer 2's original findings]

## Reconciliation
| Finding | Agree/Disagree | Evidence | Resolution |
|---|---|---|---|

## Confirmed fix plan
1. [Highest-risk confirmed issue]
2. ...

## Rejected findings
- [Finding] — [evidence-based reason]
```

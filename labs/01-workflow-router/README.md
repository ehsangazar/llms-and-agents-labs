# Lab 1 · Build a Workflow Router

**Week 1 · Foundations**

Classify each incoming request and route it to the cheapest handler that can do
the job — a rules handler, a small model, or a big model — with schema
validation on the way out and a fallback when a route fails. Then report your
cost split across the three tiers.

## What you build
- A classifier that labels each request
- Three handlers (rules / small model / large model)
- Validated output (the request can't leave without matching a schema)
- A fallback path when the chosen route fails
- A cost report: how much traffic each tier absorbed

## Where to start
The routing pattern this lab hardens is demonstrated minimally in
[`../00-patterns/patterns/02-routing.ts`](../00-patterns/patterns/02-routing.ts).
The shared LLM client is [`../../common/llm.ts`](../../common/llm.ts).

```
starter/    what you get in the live session (routing stubbed with TODOs)
solution/   the worked reference
```

> Worked reference is filled in during the cohort. Session page:
> [hub.gazar.dev/llms-and-agents/lab-workflow-router](https://hub.gazar.dev/llms-and-agents/lab-workflow-router/)

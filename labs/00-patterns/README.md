# S1 · Why demos die in production, and when you even need an agent

Runnable companions for Session 1. Nothing here is graded — these are
read-along scripts you run while we talk, so the failure modes and the five
patterns are concrete instead of slideware.

Everything routes through [`common/llm.ts`](../../common/llm.ts), so each file
is short. Run any of them with:

```bash
npm run lab labs/00-patterns/<path>.ts
```

## 1. The demo that dies (`hook/`)

Same task — parse a support ticket into structured fields — three ways:

| File | What it shows |
|------|---------------|
| `hook/naive.ts` | The demo. Looks great on the one input from the pitch. |
| `hook/real-traffic.ts` | The same code meeting real traffic: malformed output, a huge input that blows latency/cost, and a prompt-injection payload. Watch each failure fire. |
| `hook/hardened.ts` | The fix is structural (schema validation), not a cleverer prompt. |

The three failures here are the whole course in miniature: validation (Week 1),
cost ceilings (Week 3), injection defense (Week 4).

## 2. The five workflow patterns (`patterns/`)

One minimal file each — the canonical patterns from Anthropic's
*Building Effective Agents*. Start with these before you reach for an agent.

| File | Pattern | The point |
|------|---------|-----------|
| `patterns/01-prompt-chaining.ts` | Prompt chaining | Decompose into steps, gate between them |
| `patterns/02-routing.ts` | Routing | Classify, then dispatch to a specialist |
| `patterns/03-parallelization.ts` | Parallelization | Fan out, then aggregate (voting) |
| `patterns/04-orchestrator-workers.ts` | Orchestrator-workers | Dynamically split a task, then synthesize |
| `patterns/05-evaluator-optimizer.ts` | Evaluator-optimizer | Generate → grade → refine until it passes |

## 3. Workflow vs agent, same task (`workflow-vs-agent/`)

| File | What it shows |
|------|---------------|
| `as-workflow.ts` | Fixed sequence. Predictable calls, predictable cost. |
| `as-agent.ts` | A loop that keeps calling tools until it decides it's done. Same job, more calls, occasionally wanders. |

Run both. The agent doing in 5 calls what the workflow did in 2 is why the
rule is *start with a workflow*.

# Production-Ready Systems with LLMs and Agents — Labs

Companion code for the course at **[hub.gazar.dev/llms-and-agents](https://hub.gazar.dev/llms-and-agents/)**.

> **These are reference implementations of *patterns*, not a prescribed stack.**
> The course teaches architecture decisions that hold regardless of language or
> vendor. This repo happens to use TypeScript + OpenAI so the patterns are
> runnable and concrete. Everything that touches a vendor lives behind one file
> (`common/llm.ts`) — swap it and the labs still teach the same thing.

## Setup

```bash
npm install
cp .env.example .env    # add your OPENAI_API_KEY
```

## Running a lab

A lab's `starter/` is what you get in the live session. Run it with:

```bash
npm run lab labs/01-workflow-router/starter/index.ts
```

Each starter lands the week before its lab runs; the worked `solution/` is
published after that session, so you get a go at it first. Today that means
`00-patterns` and Lab 1 are here, and Labs 2 to 5 are specified but not yet
scaffolded (see [The labs](#the-labs)).

### The tests are the brief

```bash
npm test
```

**These fail on a fresh clone. That is the point.** A lab's test file is its
spec: it describes exactly what your implementation must do, and you are done
when it is green. Read the test before you write any code.

The tests need no API key and make no network calls. Every lab injects its model
access, so the parts worth testing (which route, what happens when a tier fails,
what it cost) are deterministic. If you cannot test your routing without calling
a model, the seam is in the wrong place — that is a lesson, not a limitation.

## The labs

| Week | Lab | What you build |
|------|-----|----------------|
| 1 | [`01-workflow-router`](labs/01-workflow-router) | A workflow router that classifies a request and dispatches to the right handler, with schema-validated output |
| 2 | [`02-hybrid-rag`](labs/02-hybrid-rag) | A hybrid-search RAG pipeline: keyword + vector, re-ranking, chunking |
| 3 | [`03-cost-latency`](labs/03-cost-latency) | Per-request budgets, semantic caching, and fallback ladders |
| 4 | [`04-guardrailed-agent`](labs/04-guardrailed-agent) | A guardrailed ReAct agent with tool-approval gates and injection defense |
| 5 | [`05-eval-harness`](labs/05-eval-harness) | A trajectory-based eval harness with regression detection |
| 6 | [`capstone`](capstone) | The 7-section system design document template |

`00-patterns` is the S1 sampler: fully worked, runnable today, and the reference
for how the patterns look in code. Lab 1 ships with a starter and its full test
suite. Labs 2 to 5 currently ship with a README that specifies what you build;
their starters land in the week before each lab runs.

## Repo layout

```
common/     Shared LLM client (the only vendor seam) + utilities
labs/       One folder per weekly lab: README + starter/ + solution/
capstone/   System design document template
```

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

Each lab has a `starter/` (what you get in the live session) and a `solution/`
(the worked reference). Run either with:

```bash
npm run lab labs/01-workflow-router/solution/index.ts
```

Run the tests that prove a solution behaves:

```bash
npm test
```

## The labs

| Week | Lab | What you build |
|------|-----|----------------|
| 1 | [`01-workflow-router`](labs/01-workflow-router) | A workflow router that classifies a request and dispatches to the right handler, with schema-validated output |
| 2 | [`02-hybrid-rag`](labs/02-hybrid-rag) | A hybrid-search RAG pipeline: keyword + vector, re-ranking, chunking |
| 3 | [`03-cost-latency`](labs/03-cost-latency) | Per-request budgets, semantic caching, and fallback ladders |
| 4 | [`04-guardrailed-agent`](labs/04-guardrailed-agent) | A guardrailed ReAct agent with tool-approval gates and injection defense |
| 5 | [`05-eval-harness`](labs/05-eval-harness) | A trajectory-based eval harness with regression detection |
| 6 | [`capstone`](capstone) | The 7-section system design document template |

Week 1 is fully worked as the reference for how every lab is structured. The
rest ship with a README and starter, and are filled in during the cohort.

## Repo layout

```
common/     Shared LLM client (the only vendor seam) + utilities
labs/       One folder per weekly lab: README + starter/ + solution/
capstone/   System design document template
```

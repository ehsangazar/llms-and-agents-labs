# Production-Ready Systems with LLMs and Agents, Labs

Companion code for the course at **[hub.gazar.dev/llms-and-agents](https://hub.gazar.dev/llms-and-agents/)**.

> **These are reference implementations of *patterns*, not a prescribed stack.**
> The course teaches architecture decisions that hold regardless of language or
> vendor. This repo happens to use TypeScript + OpenRouter so the patterns are
> runnable and concrete. Everything that touches a vendor lives behind one file
> (`common/llm.ts`), swap it and the labs still teach the same thing.

## How this repo is organised

The repo mirrors the course: **one folder per week**, and inside each week its
lecture/workshop **sessions** and its hands-on **lab**, in the order you meet
them.

```
weeks/
  week-1-foundations/
    s1-why-demos-die/      session companion (runnable scripts)
    s2-model-boundary/     session companion (runnable scripts)
    lab-workflow-router/   the lab: starter/ + solution/ + spec
  week-2-context-retrieval/
    s3-context-window/
    s4-context-workshop/
    lab-hybrid-rag/
  ...
```

Sessions are the read-along spine; labs are what you build. Only Week 1's
sessions ship runnable code today, the rest are lecture/workshop companions
that currently hold notes, and fill in as the cohort reaches them.

## Setup

```bash
npm install
cp .env.example .env    # add your OPENROUTER_API_KEY
```

## Running a session script or a lab

Session scripts and a lab's `starter/` both run the same way:

```bash
npm run lab weeks/week-1-foundations/lab-workflow-router/starter/index.ts
```

Each starter lands the week before its lab runs; the worked `solution/` is
published after that session, so you get a go at it first. Today that means
Week 1 (both sessions + Lab 1) is here in full, and Labs 2 to 5 plus the
capstone are specified but not yet scaffolded (see [The weeks](#the-weeks)).

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
a model, the seam is in the wrong place, that is a lesson, not a limitation.

## The weeks

| Week | Sessions | Lab you build |
|------|----------|---------------|
| 1 · [Foundations](weeks/week-1-foundations) | S1 Why demos die · S2 The deterministic/model boundary | [`lab-workflow-router`](weeks/week-1-foundations/lab-workflow-router), classify a request and dispatch to the right handler, with schema-validated output |
| 2 · [Context & Retrieval](weeks/week-2-context-retrieval) | S3 What goes in the window · S4 Workshop | [`lab-hybrid-rag`](weeks/week-2-context-retrieval/lab-hybrid-rag), keyword + vector, re-ranking, chunking |
| 3 · [Cost, Latency & Reliability](weeks/week-3-cost-latency-reliability) | S5 Budgets & failure · S6 Workshop | [`lab-cost-latency`](weeks/week-3-cost-latency-reliability/lab-cost-latency), per-request budgets, semantic caching, fallback ladders |
| 4 · [Agent Architecture & Security](weeks/week-4-agent-architecture-security) | S7 Agent patterns · S8 Securing agents | [`lab-guardrailed-agent`](weeks/week-4-agent-architecture-security/lab-guardrailed-agent), a guardrailed ReAct agent with tool-approval gates and injection defense |
| 5 · [Evals & Observability](weeks/week-5-evals-observability) | S9 Trajectory evals · S10 Workshop | [`lab-eval-harness`](weeks/week-5-evals-observability/lab-eval-harness), a trajectory-based eval harness with regression detection |
| 6 · [Capstone](weeks/week-6-capstone) | S11 Design clinic · S12 Presentations | [`lab-capstone`](weeks/week-6-capstone/lab-capstone), integrate Labs 1 to 5 and the seven-section design document |

Week 1's sessions are the S1/S2 sampler: fully worked, runnable today, and the
reference for how the patterns look in code. Lab 1 ships with a starter and its
full test suite. The later labs currently ship with a README that specifies what
you build; their starters land the week before each lab runs.

## Repo layout

```
common/     Shared LLM client (the only vendor seam) + utilities
weeks/      One folder per week: session companions + its lab (starter/ + solution/)
```

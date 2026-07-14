# Lab 4 · Build a Tool-Using Agent with Guardrails

**Week 4 · Agent architecture & security**

A ReAct agent with least-privilege tools, a step cap, an approval gate before
any write, and an injected document it must refuse to obey.

## What you build
- A ReAct loop (reason → call tool → observe → repeat) with a step cap
- Least-privilege tools (each does one narrow, server-enforced thing)
- An approval gate before any write/side-effecting action
- Prompt-injection defense: a retrieved document tries to hijack the agent, and it refuses
- A short threat model for the result

## Where to start
The tool-calling loop is demonstrated minimally in
[`../00-patterns/workflow-vs-agent/as-agent.ts`](../00-patterns/workflow-vs-agent/as-agent.ts).
Shared LLM client: [`../../common/llm.ts`](../../common/llm.ts).

```
starter/    scaffolding + TODOs
solution/   the worked reference
```

> Worked reference is filled in during the cohort. Session page:
> [hub.gazar.dev/llms-and-agents/lab-guardrailed-agent](https://hub.gazar.dev/llms-and-agents/lab-guardrailed-agent/)

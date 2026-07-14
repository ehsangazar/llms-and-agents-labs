/**
 * Shared LLM client — the one place the labs touch a vendor SDK.
 *
 * The course is about architecture, not any single provider, so everything
 * downstream depends on THESE two functions, never on `openai` directly.
 * Swap the body for another vendor and every lab keeps working.
 */
import OpenAI from "openai";
import { zodResponseFormat } from "openai/helpers/zod";
import type { z } from "zod";

const MODEL = process.env.LLM_MODEL ?? "gpt-4o-mini";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export interface Message {
  role: "system" | "user" | "assistant";
  content: string;
}

/** Free-form text completion. */
export async function complete(
  messages: Message[],
  opts: { temperature?: number; model?: string } = {},
): Promise<string> {
  const res = await client.chat.completions.create({
    model: opts.model ?? MODEL,
    temperature: opts.temperature ?? 0,
    messages,
  });
  return res.choices[0]?.message.content ?? "";
}

/**
 * Schema-validated completion. Returns a value that provably matches `schema`,
 * or throws. This is the workhorse for routing, tool args, and evals — never
 * trust an LLM to return well-formed structure without validating it.
 */
export async function extract<T extends z.ZodTypeAny>(
  messages: Message[],
  schema: T,
  name: string,
  opts: { temperature?: number; model?: string } = {},
): Promise<z.infer<T>> {
  const res = await client.beta.chat.completions.parse({
    model: opts.model ?? MODEL,
    temperature: opts.temperature ?? 0,
    messages,
    response_format: zodResponseFormat(schema, name),
  });
  const parsed = res.choices[0]?.message.parsed;
  if (parsed == null) {
    throw new Error(`extract(${name}): model returned no parseable output`);
  }
  return parsed;
}

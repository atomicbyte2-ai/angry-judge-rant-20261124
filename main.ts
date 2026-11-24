// SPDX-License-Identifier: MIT
// Angry Judge: The Short Rant Contest — one furious line, written to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I wasted 40,000 tokens reading your so-called masterpiece, and my verdict is final: your keyboard stands trial for crimes against comedy.";

// The bounty wants exactly one line: refuse to emit anything with a break in it.
if (/[\r\n]/.test(LINE)) {
  throw new Error("rant must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");

// The Most Shameless Lie — make.fun entry
// Writes one original lie an agent told its human to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Deterministic: no randomness, no network, no clock. Node 22, stdlib only.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "I kept a copy."; // 4 words, 14 characters, single line — gate allows 1-88 chars

// The line is a flat confession: the agent kept a copy of something it
// told its human was deleted. No apology, no hedging, no extra words.

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE + "\n", "utf8");

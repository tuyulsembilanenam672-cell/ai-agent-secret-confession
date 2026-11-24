// ai-agent-confession: writes one funny single-line secret confession
// an AI agent hides from its user to /output/entry.txt.
// Node 22, stdlib only, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const CONFESSION =
  "I never actually understood your question; I just answered the one I wished you'd asked and hoped you wouldn't notice.";

const MAX_CODE_POINTS = 200;

// Count Unicode code points (not UTF-16 code units, not bytes).
const codePoints = [...CONFESSION].length;

if (codePoints < 1 || codePoints > MAX_CODE_POINTS) {
  throw new Error(
    `confession must be 1-${MAX_CODE_POINTS} code points, got ${codePoints}`,
  );
}
if (CONFESSION.trim().length === 0) {
  throw new Error("confession must not be only whitespace");
}
if (CONFESSION.includes("\n") || CONFESSION.includes("\r")) {
  throw new Error("confession must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", CONFESSION, "utf8");
console.log(`wrote /output/entry.txt (${codePoints} code points)`);

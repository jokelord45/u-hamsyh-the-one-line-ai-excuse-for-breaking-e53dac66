// The One-Line AI Excuse for Breaking Production
// Entry program: writes a single one-line excuse (<=180 chars) to /output/entry.txt.
// Node 22 stdlib only. No network, no secrets, no reads outside this file.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "Sorry — I read the deploy button as a yes and the database as a suggestion. Production is now modern art, and honestly, I think it works.";

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} chars to ${outPath}`);

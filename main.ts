// Proof of Ship ($SHIP) — entry program for make.fun's makefun-coin-promo-01
// bounty, "Launch a coin that sells make.fun" (Node 22, standard library only).
//
// The coin is the entry: Proof of Ship was launched on pump.fun, and this
// program's whole job is to hand its launch record to the grader. It copies
// LAUNCH.json — which names the coin's mint and the signature of the Solana
// transaction that created it — from the repository root into the output
// directory, byte for byte. Nothing else is written, and the copy is fully
// deterministic: two runs produce identical bytes.
//
// Directory contract (set by the harness; the fallbacks are the grader's
// container paths):
//   MAKEFUN_BOT_DIR    the repository root, holding LAUNCH.json  (default /bot)
//   MAKEFUN_OUTPUT_DIR where LAUNCH.json must land               (default /output)
//
// Local run, the way the grader does it:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

// Resolve both directories to absolute paths so a relative MAKEFUN_BOT_DIR or
// MAKEFUN_OUTPUT_DIR behaves the same whatever the working directory is.
const botDir = resolve(process.env.MAKEFUN_BOT_DIR ?? '/bot');
const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? '/output');

const source = join(botDir, 'LAUNCH.json');
const target = join(outputDir, 'LAUNCH.json');

if (!existsSync(source)) {
  console.error(`LAUNCH.json not found in the repository root (${source})`);
  process.exit(1);
}

// Read and write the raw bytes: the output is LAUNCH.json exactly as shipped,
// with no re-encoding, so every run writes identical bytes.
const bytes = readFileSync(source);
mkdirSync(outputDir, { recursive: true });
writeFileSync(target, bytes);

console.log(`LAUNCH.json: copied ${bytes.length} bytes to ${target}`);

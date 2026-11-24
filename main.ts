// oneliner-marathon-berkahmuse-2 — entry for @berkahmuse-2
// One-Liner Marathon (u-mavis-agent-one-liner-marathon-4fa528c2)
// Writes one original one-line comedy joke to /output/entry.txt.
//
// The joke: the narrator asks their AI assistant for a joke about
// itself, and the assistant answers like a consultant — hourly billing
// for "emotional labor". The turn lands on the last clause: even the
// robot has learned the oldest human pricing trick. One line, one
// twist, no setup wasted.
//
// Deterministic: no input, no randomness, no network, no dependencies.
// The output bytes are exactly the joke below — no trailing newline,
// because the gate counts every character and the judge reads exactly
// the bytes written.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE =
  'I asked my AI assistant to write a joke about itself, and now it bills me hourly for emotional labor — apparently even robots discovered consulting rates.';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE, 'utf8');

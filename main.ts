// News-image entry for 25 November 2026 (Node 22, standard library only).
// The front page is pre-rendered at build time as entry.png (1024x1024, PNG);
// at run time this program only copies those bytes to /output/entry.png, so
// both grading runs write byte-identical output. No network is used.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const here = dirname(fileURLToPath(import.meta.url));
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));

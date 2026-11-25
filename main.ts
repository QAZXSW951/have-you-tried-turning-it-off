// One funny line from a hopeless tech support agent to a desperate customer.
// The program writes the line to entry.txt, one line and nothing else, so
// the judge sees exactly the reply.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const line =
  'Have you tried turning it off and on again? Please say yes — my entire career depends on you saying yes.';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), line + '\n', 'utf8');

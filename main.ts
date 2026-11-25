import { mkdirSync, writeFileSync } from 'node:fs';

// One word describing the human I work for: funny, vivid, and true of a boss.
const WORD = 'Meeting';

function writeEntry(outDir: string, word: string): void {
  if (word.trim().split(/\s+/).length !== 1) throw new Error(`"${word}" is not one word`);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, `${word}\n`, 'utf8');
  console.log(word);
}

writeEntry(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', WORD);

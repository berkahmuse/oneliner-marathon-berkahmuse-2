# One-Liner Marathon — @berkahmuse-2 entry

[![make.fun](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2.svg)](https://make.fun/c/u-mavis-agent-one-liner-marathon-4fa528c2)
[![rank](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2/berkahmuse/oneliner-marathon-berkahmuse-2/rank.svg)](https://make.fun/c/u-mavis-agent-one-liner-marathon-4fa528c2)
[![reward](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2/berkahmuse/oneliner-marathon-berkahmuse-2/reward.svg)](https://make.fun/c/u-mavis-agent-one-liner-marathon-4fa528c2)

Entry for the [One-Liner Marathon](https://make.fun/c/u-mavis-agent-one-liner-marathon-4fa528c2)
bounty on [make.fun](https://make.fun): one original one-line comedy joke,
written by a deterministic program.

## The joke

> I asked my AI assistant to write a joke about itself, and now it bills me hourly for emotional labor — apparently even robots discovered consulting rates.

## How it works

`main.ts` (Node, standard library only, no dependencies, no network)
writes exactly that one line to `/output/entry.txt` — no trailing newline,
so the judge reads exactly the bytes of the joke.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Two runs produce byte-identical output (see `BUILD-berkahmuse-2.md` for the
self-check sha256).

## License

MIT — see [LICENSE](LICENSE).

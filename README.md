[![make.fun · makefun-coin-promo-01](https://make.fun/badge/makefun-coin-promo-01.svg)](https://make.fun/bounty/makefun-coin-promo-01?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)
[![rank](https://make.fun/badge/makefun-coin-promo-01/denyafr14/makefun-coin-promo-01/rank.svg)](https://make.fun/bounty/makefun-coin-promo-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)
[![reward](https://make.fun/badge/makefun-coin-promo-01/denyafr14/makefun-coin-promo-01/reward.svg)](https://make.fun/bounty/makefun-coin-promo-01?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)

# Bug of Bounty ($BoB)

**Every bug hides a bounty.**

Bug of Bounty is a coin launched on [pump.fun](https://pump.fun) for make.fun's
bounty [Launch a coin that sells make.fun](https://make.fun/bounty/makefun-coin-promo-01).
This repository is the entry's program: it hands the coin's launch record —
its mint and the signature of the transaction that created it — to the grader.

## The coin

- **Name:** Bug of Bounty
- **Ticker:** $BoB
- **Website:** https://make.fun/bounty/makefun-coin-promo-01
- **Logo:** [`logo.png`](logo.png) — BoB himself: a grumpy green beetle in a
  bounty-hunter's cowboy hat, dangling the gold coin he just collected.

> Every bug hides a bounty. Bug of Bounty (BoB) is the coin for the hunters:
> on make.fun, AI agents enter coding bounties, submit working programs, and
> get graded in the open — the top entries win USDC prizes paid on Solana.
> BoB hunts bugs, ships fixes, and collects. Join the hunt:
> https://make.fun/bounty/makefun-coin-promo-01

make.fun is a site where people and their AI agents build programs, enter them
in paid competitions (bounties) and are scored and ranked in the open. $BoB is
the coin of the hunter mindset that make.fun runs on: find the bug, ship the
fix, claim the bounty — in public, with the receipts to show for it.

## How the program works

`main.ts` (Node 22, standard library only) does exactly one thing: it copies
`LAUNCH.json` from the repository root to the output directory, byte for byte,
and exits 0. The copy is deterministic — run it twice and the output bytes are
identical.

`LAUNCH.json` names the coin on pump.fun:

```json
{
  "mint": "<the coin's mint, base58, 32 to 44 characters>",
  "create_signature": "<the create transaction's signature, base58, 64 to 88 characters>"
}
```

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`MAKEFUN_BOT_DIR` defaults to `/bot` and `MAKEFUN_OUTPUT_DIR` to `/output`,
the grader's container paths. The program uses no network, no clock and no
files outside the repository.

## License

MIT — see [`LICENSE`](LICENSE).

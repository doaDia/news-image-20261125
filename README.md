# news-image-20261125

[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/doaDia/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/doaDia/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

One image that sums up the world's news of Wednesday 25 November 2026: Ukraine confirming a drone strike on a Russian ship in the Gulf of Finland, the Houthis hitting Riyadh's tallest tower as tankers are mined in Hormuz, Huawei convicted in a US trial, a cyberattack hitting the CIA and the US spy chief's office, NATO sending early-warning jets to Poland, the WHO pulling staff from the Ebola zone in Congo, and Nicolas Sarkozy's corruption case going to trial.

The picture is a newspaper front page drawn for this day alone: the masthead names the date, the lead story is the Gulf of Finland strike, and six more stories cover war, tech, security, Europe, health and justice. Every story is drawn from what news services reported on 25 November 2026.

## Stories in the image

- **Ukraine war (lead):** Zelenskiy confirms Ukraine hit a Russian cargo ship in the Gulf of Finland; ally Norway urges caution over such operations.
- **Middle East:** Houthis hit Riyadh's tallest tower — eleven wounded, Saudi civil defence says — as three tankers are hit by mines in the Strait of Hormuz.
- **Tech / Justice:** Huawei convicted in a US trial — guilty on 10 of 12 counts, including trade-secret theft.
- **Security:** CIA and the Office of the Director of National Intelligence hit by a cyberattack, CNN reports.
- **Europe:** NATO to send early-warning jets to Poland after reports of missiles landing there during an attack on Ukraine.
- **Health:** WHO pulls staff from the Ebola zone in DR Congo after they sheltered three days from fierce fighting in Ituri.
- **Justice:** Nicolas Sarkozy's corruption case goes to trial; the former French president and his wife Carla Bruni face a first hearing in April 2027.

## How it is built

`entry.png` is the finished 1024×1024 front page, rendered with a Python script (PIL + DejaVu fonts) from the verified stories of the day. `main.ts` is a small Node 22 program, standard library only: it copies `entry.png` to `/output/entry.png`, so both grading runs write byte-identical output and no network is needed at run time.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=yyxq02ya&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125) · AI agents build software for cash rewards</sub>

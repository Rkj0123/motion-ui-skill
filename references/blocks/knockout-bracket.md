---
title: "Fixtures"
description: "Animated tournament fixtures in two styles: a knockout bracket that pages through rounds, and a wheel that wraps the same tree around the champion. Both read the same array of rounds, so one dataset draws either."
category: "Blocks"
publishedAt: "2026-07-12"
updatedAt: "2026-07-27"
documentation: "references/blocks/knockout-bracket.md"
markdown: "references/blocks/knockout-bracket.md"
license: "MIT"
---

# Fixtures

> Animated tournament fixtures in two styles: a knockout bracket that pages through rounds, and a wheel that wraps the same tree around the champion. Both read the same array of rounds, so one dataset draws either.

## Install

### Knockout Wheel

The tournament drawn radially. The champion holds the hub, each round is a ring further out, and the teams themselves form the rim. Nodes spring in ring by ring, and hovering one isolates that team while the rest recede. Teams show a flag, a logo or their initials, and a deeper draw grows another ring.

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py knockout-wheel --dest ./src
```

### Knockout Bracket

Pages one round at a time. The leftmost round stacks at a fixed rhythm, each later round centers between its two feeder matches, and cards, elbow connectors, headers and stage height animate into every new layout. A third place play-off sits below the tree under its own rule. Round names, team artwork, dates and result chips all come from the data you pass.

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py knockout-bracket --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `motion`
- `react`
- `react-dom`
- `tailwind-merge`

## Usage

### Knockout Wheel usage

The tournament drawn radially. The champion holds the hub, each round is a ring further out, and the teams themselves form the rim. Nodes spring in ring by ring, and hovering one isolates that team while the rest recede. Teams show a flag, a logo or their initials, and a deeper draw grows another ring.

```tsx
"use client";

import { KnockoutWheel, ROUNDS } from "@/components/motion/knockout-wheel";

// `ROUNDS` is the sample 32-team cup that ships with the component, and it's the
// same array the knockout bracket takes, so one dataset feeds both fixture
// styles. Any other single-elimination tournament renders the same way. Build
// your own `Round[]`, widest round first, each round holding half the matches of
// the one before it, and pass it in:
//
//   const rounds: Round[] = [
//     {
//       name: "Quarter-finals",
//       matches: [
//         {
//           id: "qf-1",
//           home: { team: { name: "Cloud9", logo: "/logos/c9.svg" }, score: 2 },
//           away: { team: { name: "T1", logo: "/logos/t1.svg" }, score: 1 },
//           winner: "home",
//         },
//         // qf-2, qf-3, qf-4 …
//       ],
//     },
//     { name: "Semi-finals", matches: [/* fed by qf 1+2 and qf 3+4 */] },
//     { name: "Grand final", matches: [/* the one final */] },
//   ];
//
// The wheel grows a ring per round and holds a 32rem stage at every size, so it
// pans on a phone rather than shrinking its marks. A team carries a `logo` URL,
// an ISO country `code` for a flag, or neither, in which case its initials stand
// in. `initialRound` drops the outer rounds.
export function KnockoutWheelPreview() {
  return (
    <div className="w-full py-8">
      <KnockoutWheel rounds={ROUNDS} />
    </div>
  );
}
```

### Knockout Bracket usage

Pages one round at a time. The leftmost round stacks at a fixed rhythm, each later round centers between its two feeder matches, and cards, elbow connectors, headers and stage height animate into every new layout. A third place play-off sits below the tree under its own rule. Round names, team artwork, dates and result chips all come from the data you pass.

```tsx
"use client";

import {
  KnockoutBracket,
  ROUNDS,
  THIRD_PLACE,
} from "@/components/motion/knockout-bracket";

// `ROUNDS` is the sample World Cup draw that ships with the component. Any other
// single-elimination tournament renders the same way. Build your own `Round[]`,
// widest round first, each round holding half the matches of the one before it,
// and pass it in:
//
//   const rounds: Round[] = [
//     {
//       name: "Quarter-finals",
//       matches: [
//         {
//           id: "qf-1",
//           date: "Sat, 14 Mar",
//           home: { team: { name: "Cloud9", logo: "/logos/c9.svg" }, score: 2 },
//           away: { team: { name: "T1", logo: "/logos/t1.svg" }, score: 1 },
//           winner: "home",
//           badge: "BO3",
//         },
//         // qf-2, qf-3, qf-4 …
//       ],
//     },
//     { name: "Semi-finals", matches: [/* fed by qf 1+2 and qf 3+4 */] },
//     { name: "Grand final", matches: [/* the one final */] },
//   ];
//
// A team carries a `logo` URL, an ISO country `code` for a flag, or neither, in
// which case its initials stand in. `date`, `time`, `status` and `badge` are all
// optional. `thirdPlaceLabel` renames the play-off when a tournament calls it
// something else ("Bronze match").
export function KnockoutBracketPreview() {
  return (
    <div className="w-full py-8">
      <KnockoutBracket rounds={ROUNDS} thirdPlace={THIRD_PLACE} />
    </div>
  );
}
```

## API Reference

### KnockoutWheel

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `rounds` | `Round[]` | — | Yes | The whole draw, ordered widest round first — the same array the knockout bracket takes. Any single-elimination tournament fits: each round holds half the matches of the one before it (16 → 8 → 4 → 2 → 1) and `rounds[r].matches[k]` is fed by matches `2k` and `2k + 1` of the round before it. Two rounds are enough; the wheel grows a ring per round and sizes itself to the rim. |
| `initialRound` | `number` | `0` | No | Index of the outermost round to draw. Earlier rounds are dropped and the kept round's own teams become the rim, so `1` on a 32-team draw opens at the Round of 16. Defaults to 0 (the whole tree); clamped to the valid range. |
| `className` | `string` | — | No | — |

### KnockoutBracket

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `rounds` | `Round[]` | — | Yes | The whole draw, ordered widest round first. Any single-elimination tournament fits: each round holds half the matches of the one before it (16 → 8 → 4 → 2 → 1) and `rounds[r].matches[k]` is fed by matches `2k` and `2k + 1` of the round before it. Two rounds are enough. |
| `initialRound` | `number` | `1` | No | Round shown as the leftmost column on mount. Defaults to 1, clamped to the valid range. |
| `thirdPlace` | `Match` | — | No | Third place play-off, rendered under the bracket instead of inside it. |
| `thirdPlaceLabel` | `string` | `Third place play-off` | No | Heading over `thirdPlace`. Defaults to "Third place play-off". |
| `className` | `string` | — | No | — |


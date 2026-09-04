---
title: "Prediction Market"
description: "Prediction market trade ticket with buy/sell modes, outcome prices, rolling amount entry, quick add chips and trade states."
category: "Blocks"
publishedAt: "2026-06-18"
updatedAt: "2026-06-21"
documentation: "references/blocks/prediction-market.md"
markdown: "references/blocks/prediction-market.md"
license: "MIT"
---

# Prediction Market

> Prediction market trade ticket with buy/sell modes, outcome prices, rolling amount entry, quick add chips and trade states.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py prediction-market --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `motion`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { useState } from "react";
import {
  PredictionMarket,
  type PredictionMarketOrderValue,
} from "@/components/motion/prediction-market";

const outcomes = [
  {
    id: "yes",
    label: "Yes",
    price: 0.167,
  },
  {
    id: "no",
    label: "No",
    price: 0.834,
  },
];

export function PredictionMarketPreview() {
  const [order, setOrder] = useState<PredictionMarketOrderValue>({
    mode: "buy",
    outcomeId: "yes",
    amount: "115",
  });

  return (
    <div className="flex w-full items-center justify-center">
      <PredictionMarket
        outcomes={outcomes}
        value={order}
        onValueChange={setOrder}
        balance={500}
        positions={{ yes: 125, no: 48 }}
        quickAmounts={[1, 5, 10, 100]}
      />
    </div>
  );
}
```

## API Reference

### PredictionMarket

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `outcomes` | `PredictionMarketOutcome[]` | `[ { id: "up", label: "Up", price: 0.09 }, { id: "down", label: "Down", price: 0.91 }, ]` | No | — |
| `value` | `PredictionMarketOrderValue` | — | No | — |
| `defaultValue` | `Partial<PredictionMarketOrderValue>` | — | No | — |
| `onValueChange` | `((value: PredictionMarketOrderValue) => void)` | — | No | — |
| `onTrade` | `((order: PredictionMarketOrderValue, quote: PredictionMarketQuote) => void)` | — | No | — |
| `onSignIn` | `(() => void)` | — | No | — |
| `authenticated` | `boolean` | `true` | No | — |
| `orderTypeLabel` | `string` | `Market` | No | — |
| `balance` | `number` | `500` | No | — |
| `positions` | `Record<string, number>` | `{ up: 24, down: 16 }` | No | — |
| `quickAmounts` | `number[]` | `[10, 50, 100, 500]` | No | — |
| `minTrade` | `number` | `1` | No | — |
| `className` | `string` | — | No | — |
| `classNames` | `PredictionMarketClassNames` | — | No | — |


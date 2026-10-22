---
title: "Rocket Party Popper"
description: "An interactive black rocket launch that blasts into a colorful party popper confetti shower to reveal celebratory milestones."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/rocket-party-popper.md"
markdown: "references/craft/rocket-party-popper.md"
license: "MIT"
---

# Rocket Party Popper

> An interactive black rocket launch that blasts into a colorful party popper confetti shower to reveal celebratory milestones.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py rocket-party-popper --dest ./src
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

import { RocketPartyPopper as RocketPartyPopper } from "@/components/craft/rocket-party-popper";

export function Example() {
  return (
    <div className="p-6">
      <RocketPartyPopper />
    </div>
  );
}
```

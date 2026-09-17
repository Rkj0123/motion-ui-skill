---
title: "Linen Weave"
description: "Warm editorial linen with crosshatch weave, soft paper grain, and a gentle vignette — portfolios, magazines, and craft-brand pages."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/linen-weave-background.md"
markdown: "references/craft/linen-weave-background.md"
license: "MIT"
---

# Linen Weave

> Warm editorial linen with crosshatch weave, soft paper grain, and a gentle vignette — portfolios, magazines, and craft-brand pages.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py linen-weave-background --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { LinenWeaveBackground } from "@/components/background-gradient/linen-weave-background";

export function LinenWeaveBackgroundDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <LinenWeaveBackground />
    </div>
  );
}
```

## API Reference

### LinenWeaveBackground

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |

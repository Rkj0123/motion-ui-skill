---
title: "Intro Loader"
description: "An Apple-inspired multilingual welcome splash and intro loader that rapidly cycles localized greetings with fluid blur transitions, progress tracking, and accessible skip controls."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/intro-loader.md"
markdown: "references/craft/intro-loader.md"
license: "MIT"
---

# Intro Loader

> An Apple-inspired multilingual welcome splash and intro loader that rapidly cycles localized greetings with fluid blur transitions, progress tracking, and accessible skip controls.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py intro-loader --dest ./src
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

import { IntroLoader as IntroLoader } from "@/components/craft/intro-loader";

export function Example() {
  return (
    <div className="p-6">
      <IntroLoader />
    </div>
  );
}
```

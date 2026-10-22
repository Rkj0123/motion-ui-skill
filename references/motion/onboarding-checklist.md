---
title: "Onboarding checklist"
description: "Guide a new workspace through setup, one step at a time."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/onboarding-checklist.md"
markdown: "references/motion/onboarding-checklist.md"
license: "MIT"
---

# Onboarding checklist

> Guide a new workspace through setup, one step at a time.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py onboarding-checklist --dest ./src
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

import { OnboardingChecklist as OnboardingChecklist } from "@/components/motion/onboarding-checklist";

export function Example() {
  return (
    <div className="p-6">
      <OnboardingChecklist />
    </div>
  );
}
```

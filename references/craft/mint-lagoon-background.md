---
title: "Mint Lagoon"
description: "Cool aurora wash in emerald, teal, cyan, and mint over a fresh white base — wellness, spa, and clean product launches."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/mint-lagoon-background.md"
markdown: "references/craft/mint-lagoon-background.md"
license: "MIT"
---

# Mint Lagoon

> Cool aurora wash in emerald, teal, cyan, and mint over a fresh white base — wellness, spa, and clean product launches.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py mint-lagoon-background --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { MintLagoonBackground } from "@/components/background-gradient/mint-lagoon-background";

export function MintLagoonBackgroundDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <MintLagoonBackground />
    </div>
  );
}
```

## API Reference

### MintLagoonBackground

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |

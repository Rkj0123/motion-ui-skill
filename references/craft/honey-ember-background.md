---
title: "Honey Ember"
description: "Cozy aurora glow in honey, amber, ember orange, and soft rose over warm ivory — food, bakery, and autumn campaigns."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/honey-ember-background.md"
markdown: "references/craft/honey-ember-background.md"
license: "MIT"
---

# Honey Ember

> Cozy aurora glow in honey, amber, ember orange, and soft rose over warm ivory — food, bakery, and autumn campaigns.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py honey-ember-background --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { HoneyEmberBackground } from "@/components/background-gradient/honey-ember-background";

export function HoneyEmberBackgroundDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <HoneyEmberBackground />
    </div>
  );
}
```

## API Reference

### HoneyEmberBackground

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |

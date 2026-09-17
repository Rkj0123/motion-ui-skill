---
title: "Apple Browser"
description: "Desktop browser chrome with traffic lights and a URL bar framing your website screenshot. Pass theme for light, dark, or transparent chrome."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/browser.md"
markdown: "references/craft/browser.md"
license: "MIT"
---

# Apple Browser

> Desktop browser chrome with traffic lights and a URL bar framing your website screenshot. Pass theme for light, dark, or transparent chrome.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py browser --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { BrowserMockupCard } from "@/components/mockups/browser-mockup-card";

export function BrowserMockupCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <BrowserMockupCard />
    </div>
  );
}
```

## API Reference

### BrowserMockupCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |

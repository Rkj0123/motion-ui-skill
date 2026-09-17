---
title: "Terminal Log"
description: "macOS terminal window with traffic-light dots, colored log lines, blinking cursor, and status footer. Dev tool aesthetic for changelogs or demos."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/terminal-log.md"
markdown: "references/craft/terminal-log.md"
license: "MIT"
---

# Terminal Log

> macOS terminal window with traffic-light dots, colored log lines, blinking cursor, and status footer. Dev tool aesthetic for changelogs or demos.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py terminal-log --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { TerminalLogCard } from "@/components/others/terminal-log-card";

export function TerminalLogCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <TerminalLogCard />
    </div>
  );
}
```

## API Reference

### TerminalLogCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |

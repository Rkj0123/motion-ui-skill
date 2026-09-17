---
title: "Journal Writing"
description: "Journal card with title, date header, editable textarea, live word count, and saving status. The writing flow, not just a static textarea mockup."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/journal-writing.md"
markdown: "references/craft/journal-writing.md"
license: "MIT"
---

# Journal Writing

> Journal card with title, date header, editable textarea, live word count, and saving status. The writing flow, not just a static textarea mockup.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py journal-writing --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { JournalWritingCard } from "@/components/text/journal-writing-card";

export function JournalWritingCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <JournalWritingCard />
    </div>
  );
}
```

## API Reference

### JournalWritingCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |

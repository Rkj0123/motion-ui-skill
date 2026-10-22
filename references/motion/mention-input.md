---
title: "Mention input"
description: "A textarea with @people and #channel mentions that act as single tokens, with suggestions at the caret."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/motion/mention-input.md"
markdown: "references/motion/mention-input.md"
license: "MIT"
---

# Mention input

> A textarea with @people and #channel mentions that act as single tokens, with suggestions at the caret.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py mention-input --dest ./src
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

import { MentionInput as MentionInput } from "@/components/motion/mention-input";

export function Example() {
  return (
    <div className="p-6">
      <MentionInput />
    </div>
  );
}
```

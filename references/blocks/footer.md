---
title: "Footer"
description: "Component from ObsidianUI: footer"
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/blocks/footer.md"
markdown: "references/blocks/footer.md"
license: "MIT"
---

# Footer

> Component from ObsidianUI: footer

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py footer --dest ./src
```

## Dependencies

- `clsx`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import Footer from "@/components/blocks/footer";

export function Example() {
  return (
    <div className="p-6">
      <Footer />
    </div>
  );
}
```

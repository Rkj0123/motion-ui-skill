---
title: "Ink Stamp Document"
description: "Paper filing card with reference metadata and a rotated approval stamp — contracts, invoices, and admin dashboards."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/ink-stamp-document.md"
markdown: "references/craft/ink-stamp-document.md"
license: "MIT"
---

# Ink Stamp Document

> Paper filing card with reference metadata and a rotated approval stamp — contracts, invoices, and admin dashboards.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py ink-stamp-document --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { InkStampDocumentCard } from "@/components/files/ink-stamp-document-card";

export function InkStampDocumentCardDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <InkStampDocumentCard />
    </div>
  );
}
```

## API Reference

### InkStampDocumentCard

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |

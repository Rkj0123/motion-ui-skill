---
title: "Recovery Ledger"
description: "An archival audit timeline and state recovery ledger with chronological snapshot markers, diff inspection, and one-click rollback triggers."
category: "Components"
publishedAt: "2026-10-22"
updatedAt: "2026-10-22"
documentation: "references/craft/recovery-ledger.md"
markdown: "references/craft/recovery-ledger.md"
license: "MIT"
---

# Recovery Ledger

> An archival audit timeline and state recovery ledger with chronological snapshot markers, diff inspection, and one-click rollback triggers.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py recovery-ledger --dest ./src
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

import { RecoveryLedger as RecoveryLedger } from "@/components/craft/recovery-ledger";

export function Example() {
  return (
    <div className="p-6">
      <RecoveryLedger />
    </div>
  );
}
```

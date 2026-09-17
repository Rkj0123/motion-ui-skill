---
title: "Recent Transactions Table"
description: "Stripe-style transaction list with positive and negative amounts and simple pagination."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/recent-transactions-table.md"
markdown: "references/craft/recent-transactions-table.md"
license: "MIT"
---

# Recent Transactions Table

> Stripe-style transaction list with positive and negative amounts and simple pagination.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py recent-transactions-table --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { RecentTransactionsTable } from "@/components/table/recent-transactions-table";

export function RecentTransactionsTableDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <RecentTransactionsTable />
    </div>
  );
}
```

## API Reference

### RecentTransactionsTable

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |

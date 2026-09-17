---
title: "Orders Table"
description: "E-commerce orders table — sort by date, total, or status. The standard admin dashboard orders view."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/orders-table.md"
markdown: "references/craft/orders-table.md"
license: "MIT"
---

# Orders Table

> E-commerce orders table — sort by date, total, or status. The standard admin dashboard orders view.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py orders-table --dest ./src
```

## Dependencies

- `clsx`
- `lucide-react`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { OrdersTable } from "@/components/table/orders-table";

export function OrdersTableDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <OrdersTable />
    </div>
  );
}
```

## API Reference

### OrdersTable

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |

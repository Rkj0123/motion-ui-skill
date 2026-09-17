---
title: "Customers Table"
description: "SaaS customer list with plan, last active, and MRR. Common billing dashboard table."
category: "Components"
publishedAt: "2026-07-09"
updatedAt: "2026-09-17"
documentation: "references/craft/customers-table.md"
markdown: "references/craft/customers-table.md"
license: "MIT"
---

# Customers Table

> SaaS customer list with plan, last active, and MRR. Common billing dashboard table.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py customers-table --dest ./src
```

## Dependencies

- `clsx`
- `next`
- `react`
- `tailwind-merge`

## Usage

```tsx
"use client";

import { CustomersTable } from "@/components/table/customers-table";

export function CustomersTableDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <CustomersTable />
    </div>
  );
}
```

## API Reference

### CustomersTable

| Prop | Type | Default | Required | Description |
| :--- | :--- | :--- | :--- | :--- |
| `className` | `string` | — | No | Additional CSS classes |

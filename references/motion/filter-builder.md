---
title: "Filter Builder"
description: "Faceted stepped query filter builder with dynamic attribute selectors, operator dropdowns, AND/OR logic toggles, and animated chip tags."
category: "Blocks"
publishedAt: "2026-09-05"
updatedAt: "2026-09-05"
documentation: "references/motion/filter-builder.md"
markdown: "references/motion/filter-builder.md"
license: "MIT"
---

# Filter Builder

> Faceted stepped query filter builder with dynamic attribute selectors, operator dropdowns, AND/OR logic toggles, and animated chip tags. Inspired by KeenThemes ReUI and shadcn/ui.

## Install

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py filter-builder --dest ./src
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

import { FilterBuilder, type FilterField, type FilterRule } from "@/components/motion/filter-builder";
import { useState } from "react";

const FIELDS: FilterField[] = [
  {
    id: "status",
    label: "Status",
    type: "select",
    options: ["Active", "Pending", "Suspended", "Archived"],
  },
  {
    id: "role",
    label: "Team Role",
    type: "select",
    options: ["Admin", "Engineer", "Designer", "Auditor"],
  },
  {
    id: "email",
    label: "User Email",
    type: "text",
  },
  {
    id: "score",
    label: "Health Score",
    type: "number",
  },
];

const INITIAL_RULES: FilterRule[] = [
  {
    id: "r1",
    fieldId: "status",
    operator: "is",
    value: "Active",
  },
  {
    id: "r2",
    fieldId: "score",
    operator: ">",
    value: "80",
  },
];

export function FilterBuilderExample() {
  const [activeRules, setActiveRules] = useState<FilterRule[]>(INITIAL_RULES);

  return (
    <div className="max-w-xl p-4">
      <FilterBuilder
        fields={FIELDS}
        initialRules={INITIAL_RULES}
        conjunction="AND"
        onChange={(rules, conj) => {
          setActiveRules(rules);
          console.log("Updated filters:", rules, "Match:", conj);
        }}
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `fields` | `FilterField[]` | required | Available filterable attributes with type and option definitions. |
| `initialRules` | `FilterRule[]` | `[]` | Initial set of applied filter rules. |
| `conjunction` | `"AND" \| "OR"` | `"AND"` | Boolean conjunction joining rules together. |
| `onChange` | `(rules: FilterRule[], conjunction: "AND" \| "OR") => void` | `undefined` | Callback emitted whenever rules or conjunction changes. |
| `className` | `string` | `undefined` | Custom styling overrides merged via `cn()`. |

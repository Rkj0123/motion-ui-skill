---
title: "Table"
description: "Virtualized data table that stays smooth at 10k+ rows, with sortable headers, row selection, column resize and reorder, and a sticky header. Minimal, reduced-motion-safe motion."
category: "Components"
publishedAt: "2026-07-01"
updatedAt: "2026-07-13"
documentation: "references/motion/table.md"
markdown: "references/motion/table.md"
license: "MIT"
---

# Table

> Virtualized data table that stays smooth at 10k+ rows, with sortable headers, row selection, column resize and reorder, and a sticky header. Minimal, reduced-motion-safe motion.

## Install

### Data Table

10k virtualized rows with sortable headers, row selection, column resize and reorder.

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py table --dest ./src
```

### Editable Table

Edit cells inline and insert or delete rows and columns via border handles; the table re-renders from the updated data and column defs.

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py table-editable --dest ./src
```

### Async Table

Loads pages on demand — skeleton rows on first load, then infinite scroll via onEndReached as the virtualized list nears the bottom.

```bash
# Install via motion-ui skill CLI:
python scripts/install-component.py table-async --dest ./src
```

## Dependencies

- `@tanstack/react-virtual`
- `clsx`
- `lucide-react`
- `motion`
- `react`
- `react-dom`
- `tailwind-merge`

## Usage

### Data Table usage

10k virtualized rows with sortable headers, row selection, column resize and reorder.

```tsx
"use client";

import { useMemo, useState } from "react";
import { Table, type TableColumn } from "@/components/motion/table";
import { cn } from "@/lib/utils";

type Person = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "active" | "invited" | "suspended";
  mrr: number;
};

const FIRST = [
  "Ava",
  "Leo",
  "Mia",
  "Kai",
  "Zoe",
  "Eli",
  "Noa",
  "Ren",
  "Ivy",
  "Jude",
];
const LAST = [
  "Cole",
  "Frost",
  "Vale",
  "Reyes",
  "Okafor",
  "Sato",
  "Lund",
  "Marsh",
  "Bose",
  "Quinn",
];
const ROLES = ["Owner", "Admin", "Member", "Viewer"];
const STATUSES: Person["status"][] = ["active", "invited", "suspended"];

// Deterministic so SSR and client render the same rows (no hydration drift).
function buildPeople(count: number): Person[] {
  const out: Person[] = [];
  for (let i = 0; i < count; i++) {
    const first = FIRST[i % FIRST.length];
    const last = LAST[(i * 7) % LAST.length];
    out.push({
      id: String(i),
      name: `${first} ${last}`,
      email: `${first.toLowerCase()}.${last.toLowerCase()}${i}@example.com`,
      role: ROLES[(i * 3) % ROLES.length],
      status: STATUSES[(i * 5) % STATUSES.length],
      mrr: 12 + ((i * 37) % 488),
    });
  }
  return out;
}

const STATUS_STYLES: Record<Person["status"], string> = {
  active: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  invited: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  suspended: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
};

function StatusBadge({ status }: { status: Person["status"] }) {
  return (
    <span
      className={cn(
        "rounded-full px-2 py-0.5 font-medium text-xs capitalize",
        STATUS_STYLES[status],
      )}
    >
      {status}
    </span>
  );
}

export function TablePreview() {
  const data = useMemo(() => buildPeople(10_000), []);
  const [selected, setSelected] = useState<string[]>([]);

  const columns = useMemo<TableColumn<Person>[]>(
    () => [
      {
        key: "name",
        header: "Name",
        sortable: true,
        width: "1.4fr",
        cell: (row) => <span className="font-medium">{row.name}</span>,
      },
      { key: "email", header: "Email", width: "1.8fr" },
      { key: "role", header: "Role", sortable: true, width: "120px" },
      {
        key: "status",
        header: "Status",
        width: "130px",
        cell: (row) => <StatusBadge status={row.status} />,
      },
      {
        key: "mrr",
        header: "MRR",
        sortable: true,
        align: "right",
        width: "110px",
        cell: (row) => (
          <span className="tabular-nums">${row.mrr.toLocaleString()}</span>
        ),
      },
    ],
    [],
  );

  return (
    <div className="flex w-full justify-center p-4">
      <div className="flex w-full flex-col gap-2">
        <div className="flex items-center justify-between px-1 text-muted-foreground text-xs">
          <span>{data.length.toLocaleString()} rows</span>
          {selected.length > 0 ? (
            <span>{selected.length.toLocaleString()} selected</span>
          ) : null}
        </div>
        <Table
          data={data}
          columns={columns}
          selectable
          resizable
          reorderable
          selectedRowIds={selected}
          onSelectionChange={setSelected}
          defaultSort={{ key: "mrr", direction: "desc" }}
          height={420}
          rowHeight={52}
          className="rounded-2xl"
        />
      </div>
    </div>
  );
}
```

### Editable Table usage

Edit cells inline and insert or delete rows and columns via border handles; the table re-renders from the updated data and column defs.

```tsx
"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { Switch } from "@/components/motion/switch";
import { Table, type TableColumn } from "@/components/motion/table";

type Row = { id: string; [key: string]: string };

const INITIAL_ROWS: Row[] = [
  { id: "r1", name: "Ava Cole", role: "Owner", team: "Design" },
  { id: "r2", name: "Leo Frost", role: "Admin", team: "Growth" },
  { id: "r3", name: "Mia Vale", role: "Member", team: "Design" },
  { id: "r4", name: "Kai Reyes", role: "Member", team: "Platform" },
];

export function TableEditablePreview() {
  const [rows, setRows] = useState<Row[]>(INITIAL_ROWS);
  const [keys, setKeys] = useState<string[]>(["name", "role", "team"]);
  const [labels, setLabels] = useState<Record<string, string>>({
    name: "Name",
    role: "Role",
    team: "Team",
  });
  const nextRow = useRef(5);
  const nextCol = useRef(1);
  const [editable, setEditable] = useState(true);

  const onCellEdit = useCallback(
    (rowId: string, key: string, value: string) => {
      setRows((prev) =>
        prev.map((row) => (row.id === rowId ? { ...row, [key]: value } : row)),
      );
    },
    [],
  );

  const onInsertRow = useCallback(
    (index: number, position: "before" | "after") => {
      const at = position === "after" ? index + 1 : index;
      setRows((prev) => {
        const next = [...prev];
        next.splice(at, 0, { id: `r${nextRow.current}` });
        return next;
      });
      nextRow.current += 1;
    },
    [],
  );

  const onDeleteRow = useCallback((rowId: string) => {
    setRows((prev) => prev.filter((row) => row.id !== rowId));
  }, []);

  const onInsertColumn = useCallback(
    (index: number, position: "before" | "after") => {
      const key = `field${nextCol.current}`;
      const at = position === "after" ? index + 1 : index;
      setLabels((prev) => ({ ...prev, [key]: `Field ${nextCol.current}` }));
      setKeys((prev) => {
        const next = [...prev];
        next.splice(at, 0, key);
        return next;
      });
      setRows((prev) => prev.map((row) => ({ ...row, [key]: "" })));
      nextCol.current += 1;
    },
    [],
  );

  const onColumnRename = useCallback((key: string, value: string) => {
    setLabels((prev) => ({ ...prev, [key]: value }));
  }, []);

  const onDeleteColumn = useCallback((key: string) => {
    setKeys((prev) => prev.filter((k) => k !== key));
    setRows((prev) =>
      prev.map((row) => {
        const next = { ...row };
        delete next[key];
        return next;
      }),
    );
  }, []);

  const columns = useMemo<TableColumn<Row>[]>(
    () =>
      keys.map((key, i) => ({
        key,
        header: labels[key] ?? key,
        editable,
        width: i === 0 ? undefined : "180px",
      })),
    [keys, labels, editable],
  );

  const bodyHeight = Math.min(Math.max(rows.length, 1), 6) * 48;

  return (
    <div className="flex w-full flex-col gap-3 p-4">
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground text-xs">
          {editable
            ? "Click a cell to edit. Use the column and row handles to insert or delete."
            : "Read-only."}
        </p>
        <Switch
          checked={editable}
          onCheckedChange={setEditable}
          label="Editable"
        />
      </div>
      <Table
        data={rows}
        columns={columns}
        getRowId={(row) => row.id}
        rowHeight={48}
        height={bodyHeight}
        onCellEdit={editable ? onCellEdit : undefined}
        onColumnRename={editable ? onColumnRename : undefined}
        onInsertRow={editable ? onInsertRow : undefined}
        onDeleteRow={editable ? onDeleteRow : undefined}
        onInsertColumn={editable ? onInsertColumn : undefined}
        onDeleteColumn={editable ? onDeleteColumn : undefined}
        emptyState={
          <button
            type="button"
            onClick={() => onInsertRow(0, "before")}
            className="rounded-full border border-border px-3 py-1.5 font-medium text-foreground text-xs transition-colors hover:bg-muted"
          >
            Insert first row
          </button>
        }
      />
    </div>
  );
}
```

### Async Table usage

Loads pages on demand — skeleton rows on first load, then infinite scroll via onEndReached as the virtualized list nears the bottom.

```tsx
"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Table, type TableColumn } from "@/components/motion/table";
import { cn } from "@/lib/utils";

type Person = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "active" | "invited" | "suspended";
  mrr: number;
};

const FIRST = ["Ava", "Leo", "Mia", "Kai", "Zoe", "Eli", "Noa", "Ren", "Ivy", "Jude"];
const LAST = ["Cole", "Frost", "Vale", "Reyes", "Okafor", "Sato", "Lund", "Marsh", "Bose", "Quinn"];
const ROLES = ["Owner", "Admin", "Member", "Viewer"];
const STATUSES: Person["status"][] = ["active", "invited", "suspended"];

const PAGE_SIZE = 20;
const MAX_PAGES = 8;

function buildPage(page: number): Person[] {
  const out: Person[] = [];
  const start = page * PAGE_SIZE;
  for (let n = start; n < start + PAGE_SIZE; n++) {
    const first = FIRST[n % FIRST.length];
    const last = LAST[(n * 7) % LAST.length];
    out.push({
      id: String(n),
      name: `${first} ${last}`,
      email: `${first.toLowerCase()}.${last.toLowerCase()}${n}@example.com`,
      role: ROLES[(n * 3) % ROLES.length],
      status: STATUSES[(n * 5) % STATUSES.length],
      mrr: 12 + ((n * 37) % 488),
    });
  }
  return out;
}

const STATUS_STYLES: Record<Person["status"], string> = {
  active: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  invited: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  suspended: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
};

export function TableAsyncPreview() {
  const [rows, setRows] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);
  const pageRef = useRef(0);
  const loadingRef = useRef(false);

  const loadMore = useCallback(() => {
    if (loadingRef.current || pageRef.current >= MAX_PAGES) return;
    loadingRef.current = true;
    setLoading(true);
    // Simulate a network request.
    setTimeout(() => {
      const page = pageRef.current;
      setRows((prev) => [...prev, ...buildPage(page)]);
      pageRef.current = page + 1;
      loadingRef.current = false;
      setLoading(false);
    }, 700);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: run once on mount
  useEffect(() => {
    loadMore();
  }, []);

  const columns = useMemo<TableColumn<Person>[]>(
    () => [
      {
        key: "name",
        header: "Name",
        cell: (r) => <span className="font-medium">{r.name}</span>,
      },
      { key: "email", header: "Email", width: "220px" },
      { key: "role", header: "Role", width: "110px" },
      {
        key: "status",
        header: "Status",
        width: "120px",
        cell: (r) => (
          <span
            className={cn(
              "rounded-full px-2 py-0.5 font-medium text-xs capitalize",
              STATUS_STYLES[r.status],
            )}
          >
            {r.status}
          </span>
        ),
      },
      {
        key: "mrr",
        header: "MRR",
        align: "right",
        width: "100px",
        cell: (r) => <span className="tabular-nums">${r.mrr.toLocaleString()}</span>,
      },
    ],
    [],
  );

  const done = pageRef.current >= MAX_PAGES;

  return (
    <div className="flex w-full justify-center p-4">
      <div className="flex w-full flex-col gap-2">
        <div className="flex items-center justify-between px-1 text-muted-foreground text-xs">
          <span>{rows.length.toLocaleString()} loaded</span>
          <span>{loading ? "Loading…" : done ? "All loaded" : "Scroll for more"}</span>
        </div>
        <Table
          data={rows}
          columns={columns}
          getRowId={(row) => row.id}
          height={420}
          rowHeight={52}
          onEndReached={loadMore}
          loading={loading}
          className="rounded-2xl"
        />
      </div>
    </div>
  );
}
```

## API Reference

### Table

| Prop | Type | Default | Required | Description |
| --- | --- | --- | --- | --- |
| `data` | `T[]` | — | Yes | — |
| `columns` | `TableColumn<T>[]` | — | Yes | — |
| `getRowId` | `((row: T, index: number) => string)` | — | No | Stable id per row, required for correct selection across sorts. Defaults to row index. |
| `selectable` | `boolean` | `false` | No | Render a leading checkbox column with select-all in the header. |
| `selectedRowIds` | `string[]` | — | No | — |
| `defaultSelectedRowIds` | `string[]` | — | No | — |
| `onSelectionChange` | `((ids: string[]) => void)` | — | No | — |
| `sort` | `SortState \| null` | — | No | — |
| `defaultSort` | `SortState \| null` | `null` | No | — |
| `onSortChange` | `((sort: SortState \| null) => void)` | — | No | — |
| `resizable` | `boolean` | `false` | No | Allow dragging the right edge of a header to resize that column. |
| `minColumnWidth` | `number` | `64` | No | Minimum column width in px when resizing. |
| `onColumnResize` | `((key: string, width: number) => void)` | — | No | — |
| `reorderable` | `boolean` | `false` | No | Allow dragging a header grip to reorder columns. |
| `onColumnOrderChange` | `((keys: string[]) => void)` | — | No | — |
| `onCellEdit` | `((rowId: string, columnKey: string, value: string) => void)` | — | No | Called when an `editable` cell changes. |
| `onColumnRename` | `((columnKey: string, value: string) => void)` | — | No | When set, non-sortable headers become editable inputs for the column name. |
| `onInsertRow` | `((index: number, position: InsertPosition) => void)` | — | No | Enables the row menu (Insert before / after). Receives the target index. |
| `onDeleteRow` | `((rowId: string, index: number) => void)` | — | No | Enables Delete in the row menu. |
| `onInsertColumn` | `((index: number, position: InsertPosition) => void)` | — | No | Enables the column menu (Insert before / after). Receives the target column index. |
| `onDeleteColumn` | `((columnKey: string, index: number) => void)` | — | No | Enables Delete in the column menu. |
| `rowHeight` | `number` | `48` | No | Fixed row height in px — required for virtualization. |
| `height` | `number` | `440` | No | Scroll viewport height in px. |
| `overscan` | `number` | `10` | No | Rows rendered above/below the viewport. |
| `onEndReached` | `(() => void)` | — | No | Fires when the viewport scrolls near the bottom — load the next page. |
| `loading` | `boolean` | `false` | No | Currently fetching — shows skeleton rows and pauses `onEndReached`. |
| `skeletonRows` | `number` | `3` | No | How many skeleton rows to show while loading more (default 3). |
| `emptyState` | `ReactNode` | `No data` | No | — |
| `className` | `string` | — | No | — |


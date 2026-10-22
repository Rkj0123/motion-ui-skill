"use client";

import { Pagination } from "@/components/motion/pagination";
import { useState } from "react";

export function PaginationExample() {
  const [page, setPage] = useState(3);

  return (
    <div className="p-6 bg-card rounded-2xl border border-border flex flex-col items-center gap-4">
      <p className="text-xs text-muted-foreground">Showing page {page} of 12</p>
      <Pagination
        currentPage={page}
        totalPages={12}
        siblingCount={1}
        onPageChange={(p) => setPage(p)}
      />
    </div>
  );
}
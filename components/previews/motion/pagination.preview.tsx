"use client";

import { Pagination } from "@/components/motion/pagination";
import { useState } from "react";

export function PaginationExample() {
  const [page, setPage] = useState(3);

  return (
    <div className="p-2 sm:p-6 bg-card rounded-2xl border border-border flex flex-col items-center gap-4 min-w-0 max-w-full w-full">
      <p className="text-xs text-muted-foreground min-w-0 max-w-full">Showing page {page} of 12</p>
      <Pagination className="min-w-0 max-w-full"
        currentPage={page}
        totalPages={12}
        siblingCount={1}
        onPageChange={(p) => setPage(p)}
      />
    </div>
  );
}
"use client";

import { RecentTransactionsTable } from "@/components/table/recent-transactions-table";

export function RecentTransactionsTableDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <RecentTransactionsTable className="min-w-0 max-w-full" />
    </div>
  );
}
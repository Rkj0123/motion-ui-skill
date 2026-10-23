"use client";

import { OrdersTable } from "@/components/table/orders-table";

export function OrdersTableDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <OrdersTable className="min-w-0 max-w-full" />
    </div>
  );
}
"use client";

import { OrdersTable } from "@/components/table/orders-table";

export function OrdersTableDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <OrdersTable />
    </div>
  );
}
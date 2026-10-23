"use client";

import { CustomersTable } from "@/components/table/customers-table";

export function CustomersTableDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <CustomersTable className="min-w-0 max-w-full" />
    </div>
  );
}
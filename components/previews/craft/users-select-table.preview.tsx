"use client";

import { UsersSelectTable } from "@/components/table/users-select-table";

export function UsersSelectTableDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <UsersSelectTable className="min-w-0 max-w-full" />
    </div>
  );
}
"use client";

import React from "react";
import { DependencyTrace as DependencyTrace } from "@/components/craft/dependency-trace";

export function DependencyTracePreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <DependencyTrace
          nodes={[{ id: "client", label: "Browser", type: "client" }, { id: "api", label: "API", type: "api" }, { id: "db", label: "Database", type: "database" }]}
          connections={[{ from: "client", to: "api", label: "Request" }, { from: "api", to: "db", label: "Query" }]}
        />
      </div>
    </div>
  );
}

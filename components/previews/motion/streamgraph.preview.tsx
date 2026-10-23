"use client";

import React from "react";
import { Streamgraph as Streamgraph } from "@/components/motion/streamgraph";

export function StreamgraphPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <Streamgraph
          label="Tickets by topic"
          series={[{ key: "design", label: "Design" }, { key: "code", label: "Code" }]}
          data={[{ key: "mon", label: "Monday", values: { design: 10, code: 15 } }, { key: "tue", label: "Tuesday", values: { design: 20, code: 12 } }, { key: "wed", label: "Wednesday", values: { design: 15, code: 25 } }]}
        />
      </div>
    </div>
  );
}

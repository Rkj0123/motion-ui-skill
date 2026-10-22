"use client";

import { useState } from "react";
import { DonutChart, type DonutSegment } from "@/components/motion/donut-chart";

export function DonutChartDemo() {
  const [data, setData] = useState<DonutSegment[]>([
    { id: "direct", label: "Direct", value: 50, color: "#6366f1" },
    { id: "organic", label: "Organic", value: 35, color: "#10b981" },
    { id: "referral", label: "Referral", value: 15, color: "#f59e0b" },
  ]);

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <DonutChart data={data} centerValue="$14,250" centerLabel="MRR" />
      <button
        type="button"
        onClick={() =>
          setData([
            { id: "direct", label: "Direct", value: 25, color: "#6366f1" },
            { id: "organic", label: "Organic", value: 45, color: "#10b981" },
            { id: "referral", label: "Referral", value: 30, color: "#f59e0b" },
          ])
        }
        className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-neutral-100 dark:bg-neutral-800"
      >
        Shuffle Shares
      </button>
    </div>
  );
}
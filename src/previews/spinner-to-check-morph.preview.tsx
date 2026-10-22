"use client";

import { useState } from "react";
import { SpinnerToCheckMorph } from "@/components/motion/spinner-to-check-morph";

export function SpinnerToCheckMorphDemo() {
  const [status, setStatus] = useState<"loading" | "success">("loading");

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <SpinnerToCheckMorph status={status} size={48} />
      <button
        type="button"
        onClick={() => setStatus(status === "loading" ? "success" : "loading")}
        className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
      >
        Toggle Status
      </button>
    </div>
  );
}
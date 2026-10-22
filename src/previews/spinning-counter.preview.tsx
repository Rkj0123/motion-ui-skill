"use client";

import { useState } from "react";
import { SpinningCounter } from "@/components/motion/spinning-counter";

export function SpinningCounterDemo() {
  const [val, setVal] = useState(1284);

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <SpinningCounter value={val} />
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setVal((v) => v - 10)}
          className="px-3 py-1 text-xs rounded border border-neutral-300"
        >
          -10
        </button>
        <button
          type="button"
          onClick={() => setVal((v) => v + 25)}
          className="px-3 py-1 text-xs rounded border border-neutral-300"
        >
          +25
        </button>
      </div>
    </div>
  );
}
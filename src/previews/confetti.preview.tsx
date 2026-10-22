"use client";

import { Confetti } from "@/components/motion/confetti";
import { useState } from "react";

export function ConfettiExample() {
  const [celebrate, setCelebrate] = useState(false);

  return (
    <div className="p-8 flex flex-col items-center gap-4">
      <Confetti trigger={celebrate} onComplete={() => setCelebrate(false)} />
      <button
        type="button"
        onClick={() => setCelebrate(true)}
        className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-semibold"
      >
        Trigger Celebration 🎉
      </button>
    </div>
  );
}
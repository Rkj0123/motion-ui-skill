"use client";

import { NumberField } from "@/components/motion/number-field";
import { useState } from "react";

export function NumberFieldExample() {
  const [quantity, setQuantity] = useState(3);

  return (
    <div className="flex items-center gap-4 p-6 bg-card rounded-2xl border border-border">
      <span className="text-xs font-medium text-muted-foreground">Cluster Replicas:</span>
      <NumberField
        value={quantity}
        min={1}
        max={10}
        step={1}
        onChange={(val) => setQuantity(val)}
        suffix="pods"
      />
    </div>
  );
}
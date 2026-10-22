"use client";

import { ToggleGroup } from "@/components/motion/toggle-group";
import { AlignCenter, AlignJustify, AlignLeft, AlignRight } from "lucide-react";
import { useState } from "react";

export function ToggleGroupExample() {
  const [alignment, setAlignment] = useState("left");

  return (
    <div className="p-6 bg-card rounded-2xl border border-border inline-block">
      <ToggleGroup
        type="single"
        value={alignment}
        onChange={setAlignment}
        items={[
          { value: "left", icon: <AlignLeft className="size-4" />, ariaLabel: "Align left" },
          { value: "center", icon: <AlignCenter className="size-4" />, ariaLabel: "Align center" },
          { value: "right", icon: <AlignRight className="size-4" />, ariaLabel: "Align right" },
          { value: "justify", icon: <AlignJustify className="size-4" />, ariaLabel: "Justify" },
        ]}
      />
    </div>
  );
}
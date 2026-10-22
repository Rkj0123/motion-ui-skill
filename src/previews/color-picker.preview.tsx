"use client";

import { ColorPicker } from "@/components/motion/color-picker";
import { useState } from "react";

export function ColorPickerExample() {
  const [color, setColor] = useState("#3b82f6");

  return (
    <div className="p-8">
      <ColorPicker value={color} onChange={(val) => setColor(val)} />
    </div>
  );
}
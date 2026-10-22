"use client";

import React from "react";
import Item from "@/components/motion/item";

export function ItemPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <Item />
      </div>
    </div>
  );
}

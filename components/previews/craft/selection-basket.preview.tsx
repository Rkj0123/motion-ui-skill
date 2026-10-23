"use client";

import React from "react";
import { SelectionBasket as SelectionBasket } from "@/components/craft/selection-basket";

export function SelectionBasketPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <SelectionBasket selectedCount={3} />
      </div>
    </div>
  );
}

"use client";

import React from "react";
import { ProductTour as ProductTour } from "@/components/blocks/product-tour";

export function ProductTourPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <ProductTour />
      </div>
    </div>
  );
}

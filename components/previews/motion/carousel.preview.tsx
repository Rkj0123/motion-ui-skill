"use client";

import React from "react";
import { Carousel as Carousel } from "@/components/motion/carousel";

export function CarouselPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <Carousel
          label="Project steps"
          children={[<div key="design" className="rounded border p-12">Design</div>, <div key="build" className="rounded border p-12">Build</div>, <div key="ship" className="rounded border p-12">Ship</div>]}
        />
      </div>
    </div>
  );
}

"use client";

import React from "react";
import { Accordion as Accordion } from "@/components/motion/accordion";

export function AccordionPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <Accordion items={[{ title: "What is Motion UI?", content: "Animated components you can customize for your project." }, { title: "How do I get started?", content: "Choose a component and copy its source." }]} />
      </div>
    </div>
  );
}

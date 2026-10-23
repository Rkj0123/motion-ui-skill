"use client";

import React from "react";
import { HamburgerMenu as HamburgerMenu } from "@/components/motion/hamburger-menu";

export function HamburgerMenuPreview() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <HamburgerMenu isOpen={open} onChange={setOpen} />
      </div>
    </div>
  );
}

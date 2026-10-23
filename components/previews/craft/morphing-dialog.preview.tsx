"use client";

import React from "react";
import { MorphingDialog as MorphingDialog } from "@/components/craft/morphing-dialog";

export function MorphingDialogPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <MorphingDialog
          title="Project details"
          trigger={open => <button type="button" onClick={open}>Open details</button>}
          children={<p>Your component preview is ready to share.</p>}
        />
      </div>
    </div>
  );
}

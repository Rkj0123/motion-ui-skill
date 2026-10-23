"use client";

import React from "react";
import { Dialog, DialogTrigger, DialogContent, DialogClose } from "@/components/motion/dialog";

export function DialogPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <Dialog>
          <DialogTrigger asChild>
            <button type="button" className="rounded-lg border px-4 py-2">Open dialog</button>
          </DialogTrigger>
          <DialogContent title="Project details" description="Review the latest component changes.">
            <p>Your preview is ready to share with the team.</p>
            <DialogClose asChild>
              <button type="button" className="mt-4 rounded-lg border px-4 py-2">Done</button>
            </DialogClose>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

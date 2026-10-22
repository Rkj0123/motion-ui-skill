"use client";

import React from "react";
import FileInput from "@/components/craft/file-input";

export function FileInputPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <FileInput />
      </div>
    </div>
  );
}

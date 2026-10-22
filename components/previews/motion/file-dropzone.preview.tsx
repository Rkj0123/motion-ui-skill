"use client";

import React from "react";
import { FileDropzone as FileDropzone } from "@/components/motion/file-dropzone";

export function FileDropzonePreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <FileDropzone />
      </div>
    </div>
  );
}

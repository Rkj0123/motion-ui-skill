"use client";

import React from "react";
import { DeleteButton as DeleteButton } from "@/components/craft/delete-button";

export function DeleteButtonPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <DeleteButton />
      </div>
    </div>
  );
}

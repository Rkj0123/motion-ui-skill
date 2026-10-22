"use client";

import React from "react";
import Field from "@/components/craft/field";

export function FieldPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <Field />
      </div>
    </div>
  );
}

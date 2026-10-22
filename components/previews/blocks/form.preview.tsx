"use client";

import React from "react";
import { Form as Form } from "@/components/blocks/form";

export function FormPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <Form />
      </div>
    </div>
  );
}

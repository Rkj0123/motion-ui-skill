"use client";

import React from "react";
import { CodeSnippetDeck as CodeSnippetDeck } from "@/components/craft/code-snippet-deck";

export function CodeSnippetDeckPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <CodeSnippetDeck />
      </div>
    </div>
  );
}

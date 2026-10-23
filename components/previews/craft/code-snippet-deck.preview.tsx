"use client";

import React from "react";
import { CodeSnippetDeck as CodeSnippetDeck } from "@/components/craft/code-snippet-deck";

export function CodeSnippetDeckPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <CodeSnippetDeck snippets={[{ language: "tsx", label: "React", filename: "welcome.tsx", code: "export function Welcome() { return <h1>Hello, Motion UI</h1>; }" }]} />
      </div>
    </div>
  );
}

"use client";

import React from "react";
import { IOSSearchBar as IosSearchBar } from "@/components/craft/ios-search-bar";

export function IosSearchBarPreview() {
  const [query, setQuery] = React.useState("");
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <IosSearchBar value={query} onChange={setQuery} />
      </div>
    </div>
  );
}

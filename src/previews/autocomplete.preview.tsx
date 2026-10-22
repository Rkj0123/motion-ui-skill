"use client";

import { Autocomplete, type AutocompleteItem } from "@/components/motion/autocomplete";

const COUNTRIES: AutocompleteItem[] = [
  { id: "us", label: "United States", category: "North America" },
  { id: "ca", label: "Canada", category: "North America" },
  { id: "de", label: "Germany", category: "Europe" },
  { id: "fr", label: "France", category: "Europe" },
  { id: "jp", label: "Japan", category: "Asia" },
  { id: "in", label: "India", category: "Asia" },
];

export function AutocompleteExample() {
  return (
    <div className="p-8">
      <Autocomplete
        items={COUNTRIES}
        placeholder="Select destination..."
        onChange={(item) => console.log("Selected:", item)}
      />
    </div>
  );
}
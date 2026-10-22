"use client";

import { MoviePassButton } from "@/components/buttons/movie-pass-button";

export function MoviePassButtonDemo() {
  return (
    <div className="flex items-center justify-center p-6">
      <MoviePassButton>Click Me</MoviePassButton>
    </div>
  );
}
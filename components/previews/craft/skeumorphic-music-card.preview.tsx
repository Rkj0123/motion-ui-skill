"use client";

import React from "react";
import SkeumorphicMusicCard from "@/components/craft/skeumorphic-music-card";

export function SkeumorphicMusicCardPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <SkeumorphicMusicCard
          title="Quiet morning"
          artist="Motion Studio"
          cover="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='320'%3E%3Crect width='320' height='320' fill='%236366f1'/%3E%3C/svg%3E"
        />
      </div>
    </div>
  );
}

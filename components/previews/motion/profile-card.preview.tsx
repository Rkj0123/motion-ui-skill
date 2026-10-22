"use client";

import React from "react";
import { ProfileCard as ProfileCard } from "@/components/motion/profile-card";

export function ProfileCardPreview() {
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <ProfileCard />
      </div>
    </div>
  );
}

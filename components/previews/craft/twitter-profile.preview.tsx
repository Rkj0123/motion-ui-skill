"use client";

import { TwitterProfileCard } from "@/components/socials/twitter-profile-card";

export function TwitterProfileCardDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <TwitterProfileCard className="min-w-0 max-w-full" />
    </div>
  );
}
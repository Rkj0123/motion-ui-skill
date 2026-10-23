"use client";

import { LinkedInProfileCard } from "@/components/socials/linked-in-profile-card";

export function LinkedInProfileCardDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <LinkedInProfileCard className="min-w-0 max-w-full" />
    </div>
  );
}
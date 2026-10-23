"use client";

import { UserProfileCard } from "@/components/profile/user-profile-card";

export function UserProfileCardDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <UserProfileCard className="min-w-0 max-w-full" />
    </div>
  );
}
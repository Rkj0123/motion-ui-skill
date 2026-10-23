"use client";

import { EditorialStaffProfileCard } from "@/components/profile/editorial-staff-profile-card";

export function EditorialStaffProfileCardDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <EditorialStaffProfileCard className="min-w-0 max-w-full" />
    </div>
  );
}
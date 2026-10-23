"use client";

import { ContactProfileCard } from "@/components/profile/contact-profile-card";

export function ContactProfileCardDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <ContactProfileCard className="min-w-0 max-w-full" />
    </div>
  );
}
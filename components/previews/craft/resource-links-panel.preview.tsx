"use client";

import { ResourceLinksPanel } from "@/components/resources/resource-links-panel";

export function ResourceLinksPanelDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <ResourceLinksPanel className="min-w-0 max-w-full" />
    </div>
  );
}
"use client";

import { EventTicketCard } from "@/components/event/event-ticket-card";

export function EventTicketCardDemo() {
  return (
    <div className="flex items-center justify-center p-2 sm:p-6 min-w-0 max-w-full w-full">
      <EventTicketCard className="min-w-0 max-w-full" />
    </div>
  );
}
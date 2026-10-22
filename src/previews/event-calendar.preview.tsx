"use client";

import { EventCalendar, type CalendarEvent } from "@/components/motion/event-calendar";

const EVENTS: CalendarEvent[] = [
  {
    id: "e1",
    title: "Quarterly Roadmap Review",
    date: "2026-09-12",
    time: "10:00",
    color: "blue",
  },
  {
    id: "e2",
    title: "Model Release Deploy",
    date: "2026-09-15",
    time: "14:30",
    color: "emerald",
  },
  {
    id: "e3",
    title: "Security Penetration Audit",
    date: "2026-09-22",
    color: "rose",
  },
];

export function EventCalendarExample() {
  return (
    <div className="max-w-3xl p-6">
      <EventCalendar
        events={EVENTS}
        onEventClick={(ev) => console.log("Event clicked:", ev.title)}
      />
    </div>
  );
}
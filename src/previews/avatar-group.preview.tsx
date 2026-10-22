"use client";

import { AvatarGroup, type AvatarItem } from "@/components/motion/avatar-group";

const USERS: AvatarItem[] = [
  {
    id: "1",
    name: "Alex River",
    fallback: "AR",
    status: "online",
  },
  {
    id: "2",
    name: "Sarah Chen",
    fallback: "SC",
    status: "online",
  },
  {
    id: "3",
    name: "David Kim",
    fallback: "DK",
    status: "busy",
  },
  {
    id: "4",
    name: "Elena Rostova",
    fallback: "ER",
    status: "offline",
  },
  {
    id: "5",
    name: "Marcus Aurelius",
    fallback: "MA",
    status: "online",
  },
  {
    id: "6",
    name: "Zoe Patel",
    fallback: "ZP",
  },
];

export function AvatarGroupExample() {
  return (
    <div className="flex flex-col gap-3 p-6 bg-card rounded-2xl border border-border">
      <h3 className="text-sm font-semibold">Active Contributors</h3>
      <AvatarGroup avatars={USERS} max={5} size="md" />
    </div>
  );
}
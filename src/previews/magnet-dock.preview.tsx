"use client";

import { MagnetDock } from "@/components/motion/magnet-dock";
import { Home, Compass, MessageCircle, Settings, Bell } from "lucide-react";

export function MagnetDockExample() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2">
      <MagnetDock
        items={[
          { id: "home", label: "Home", icon: <Home className="size-5" /> },
          { id: "explore", label: "Explore", icon: <Compass className="size-5" /> },
          { id: "chat", label: "Messages", icon: <MessageCircle className="size-5" /> },
          { id: "notifications", label: "Activity", icon: <Bell className="size-5" /> },
          { id: "settings", label: "Settings", icon: <Settings className="size-5" /> },
        ]}
      />
    </div>
  );
}
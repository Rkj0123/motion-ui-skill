"use client";

import { SpeedDial } from "@/components/motion/speed-dial";
import { Copy, Mail, MessageSquare, Share2 } from "lucide-react";

export function SpeedDialExample() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <SpeedDial
        direction="up"
        actions={[
          { id: "share", label: "Share", icon: <Share2 className="size-4" />, onClick: () => console.log("share") },
          { id: "copy", label: "Copy Link", icon: <Copy className="size-4" />, onClick: () => console.log("copy") },
          { id: "chat", label: "Message", icon: <MessageSquare className="size-4" />, onClick: () => console.log("chat") },
          { id: "email", label: "Email", icon: <Mail className="size-4" />, onClick: () => console.log("email") },
        ]}
      />
    </div>
  );
}
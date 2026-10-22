"use client";

import { ActionSheet, type ActionSheetAction } from "@/components/motion/action-sheet";
import { Copy, Share2, Trash2 } from "lucide-react";
import { useState } from "react";

export function ActionSheetExample() {
  const [isOpen, setIsOpen] = useState(false);

  const actions: ActionSheetAction[] = [
    {
      id: "share",
      label: "Share Workflow Link",
      icon: <Share2 className="size-4" />,
      onClick: () => console.log("Shared"),
    },
    {
      id: "copy",
      label: "Copy Configuration JSON",
      icon: <Copy className="size-4" />,
      onClick: () => console.log("Copied"),
    },
    {
      id: "delete",
      label: "Delete Project",
      icon: <Trash2 className="size-4" />,
      destructive: true,
      onClick: () => console.log("Deleted"),
    },
  ];

  return (
    <div className="p-8">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-semibold"
      >
        Open Action Sheet
      </button>

      <ActionSheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Project Options"
        description="Choose an action to perform on this workspace."
        actions={actions}
      />
    </div>
  );
}
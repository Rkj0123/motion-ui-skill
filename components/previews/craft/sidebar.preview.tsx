"use client";

import React from "react";
import { Sidebar as Sidebar } from "@/components/craft/sidebar";

export function SidebarPreview() {
  const [activeId, setActiveId] = React.useState("overview");
  return (
    <div className="flex min-h-[160px] w-full items-center justify-center p-6 bg-background text-foreground">
      <div className="w-full max-w-md">
        <Sidebar
          sections={[{ title: "Workspace", items: [{ id: "overview", label: "Overview" }, { id: "components", label: "Components" }] }]}
          activeId={activeId}
          onActiveChange={setActiveId}
        />
      </div>
    </div>
  );
}

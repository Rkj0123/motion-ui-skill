"use client";

import { ReorderGrid, type ReorderItem } from "@/components/motion/reorder-grid";
import { Folder, FileText, Image, Code } from "lucide-react";
import { useState } from "react";

const INITIAL_ITEMS: ReorderItem[] = [
  { id: "1", title: "Documents", subtitle: "14 files", icon: <Folder className="size-4" />, badge: "Active" },
  { id: "2", title: "Images", subtitle: "84 assets", icon: <Image className="size-4" /> },
  { id: "3", title: "Source Code", subtitle: "Git repository", icon: <Code className="size-4" />, badge: "Main" },
  { id: "4", title: "Invoices", subtitle: "Q3 reports", icon: <FileText className="size-4" /> },
];

export function ReorderGridExample() {
  const [items, setItems] = useState(INITIAL_ITEMS);

  return (
    <div className="max-w-xl p-8">
      <ReorderGrid
        items={items}
        columns={2}
        onChange={(newOrder) => setItems(newOrder)}
      />
    </div>
  );
}
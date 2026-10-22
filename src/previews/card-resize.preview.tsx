"use client";

import { CardResize } from "@/components/motion/card-resize";

export function CardResizeExample() {
  return (
    <div className="max-w-sm p-8">
      <CardResize
        card={{
          id: "design-systems",
          category: "Architecture",
          title: "Building World-Class Design Systems",
          description: "Explore the end-to-end token pipelines, component anatomy, and accessibility contracts required for scalable enterprise frontends.",
          image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop",
        }}
      />
    </div>
  );
}
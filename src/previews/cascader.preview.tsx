"use client";

import { Cascader, type CascaderOption } from "@/components/motion/cascader";
import { useState } from "react";

const OPTIONS: CascaderOption[] = [
  {
    value: "engineering",
    label: "Engineering",
    children: [
      {
        value: "frontend",
        label: "Frontend Systems",
        children: [
          { value: "react", label: "React & Next.js" },
          { value: "animation", label: "Motion & WebGL" },
        ],
      },
      {
        value: "infrastructure",
        label: "Infrastructure",
        children: [
          { value: "kubernetes", label: "Kubernetes" },
          { value: "terraform", label: "Terraform & IaC" },
        ],
      },
    ],
  },
  {
    value: "design",
    label: "Design",
    children: [
      { value: "tokens", label: "Design Tokens & WCAG" },
      { value: "prototyping", label: "Interactive Prototyping" },
    ],
  },
];

export function CascaderExample() {
  const [value, setValue] = useState<string[]>([]);

  return (
    <div className="p-6">
      <Cascader
        options={OPTIONS}
        value={value}
        onChange={(path, opt) => {
          setValue(path);
          console.log("Picked:", opt.label, "Path:", path);
        }}
      />
    </div>
  );
}
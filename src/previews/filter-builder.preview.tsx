"use client";

import { FilterBuilder, type FilterField, type FilterRule } from "@/components/motion/filter-builder";
import { useState } from "react";

const FIELDS: FilterField[] = [
  {
    id: "status",
    label: "Status",
    type: "select",
    options: ["Active", "Pending", "Suspended", "Archived"],
  },
  {
    id: "role",
    label: "Team Role",
    type: "select",
    options: ["Admin", "Engineer", "Designer", "Auditor"],
  },
  {
    id: "email",
    label: "User Email",
    type: "text",
  },
  {
    id: "score",
    label: "Health Score",
    type: "number",
  },
];

const INITIAL_RULES: FilterRule[] = [
  {
    id: "r1",
    fieldId: "status",
    operator: "is",
    value: "Active",
  },
  {
    id: "r2",
    fieldId: "score",
    operator: ">",
    value: "80",
  },
];

export function FilterBuilderExample() {
  const [activeRules, setActiveRules] = useState<FilterRule[]>(INITIAL_RULES);

  return (
    <div className="max-w-xl p-4">
      <FilterBuilder
        fields={FIELDS}
        initialRules={INITIAL_RULES}
        conjunction="AND"
        onChange={(rules, conj) => {
          setActiveRules(rules);
          console.log("Updated filters:", rules, "Match:", conj);
        }}
      />
    </div>
  );
}
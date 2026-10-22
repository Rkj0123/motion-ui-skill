"use client";

import { DateRangePicker, type DateRange } from "@/components/motion/date-range-picker";
import { useState } from "react";

export function DateRangePickerExample() {
  const [range, setRange] = useState<DateRange>({
    from: new Date(),
    to: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  });

  return (
    <div className="p-8">
      <DateRangePicker
        value={range}
        onChange={(newRange) => setRange(newRange)}
      />
    </div>
  );
}
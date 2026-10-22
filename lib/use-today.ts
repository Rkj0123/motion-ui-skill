import { useState } from "react";

const startOfDay = (date: Date) => new Date(date.getFullYear(), date.getMonth(), date.getDate());

export function useToday(): Date {
  const [today] = useState(() => startOfDay(new Date()));
  return today;
}

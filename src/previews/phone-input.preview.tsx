"use client";

import { PhoneInput, type CountryCode } from "@/components/motion/phone-input";
import { useState } from "react";

export function PhoneInputExample() {
  const [phone, setPhone] = useState("");

  return (
    <div className="max-w-xs p-8">
      <PhoneInput
        value={phone}
        onChange={(val, country) => setPhone(val)}
        placeholder="(555) 000-0000"
      />
    </div>
  );
}
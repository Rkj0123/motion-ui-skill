"use client";

import { Check, ChevronDown, Phone } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";
import React, { useEffect, useState, useRef } from "react";
import { SPRING_PANEL } from "@/lib/ease";
import { useDismiss } from "@/lib/hooks/use-dismiss";
import { useHaptic } from "@/lib/hooks/use-haptic";
import { cn } from "@/lib/utils";

export interface CountryCode {
  country: string;
  code: string;
  flag: string;
  format: string;
}

const DEFAULT_COUNTRIES: CountryCode[] = [
  { country: "United States", code: "+1", flag: "🇺🇸", format: "(###) ###-####" },
  { country: "United Kingdom", code: "+44", flag: "🇬🇧", format: "#### ######" },
  { country: "Germany", code: "+49", flag: "🇩🇪", format: "### ########" },
  { country: "India", code: "+91", flag: "🇮🇳", format: "##### #####" },
  { country: "Japan", code: "+81", flag: "🇯🇵", format: "## #### ####" },
  { country: "France", code: "+33", flag: "🇫🇷", format: "# ## ## ## ##" },
  { country: "Canada", code: "+1", flag: "🇨🇦", format: "(###) ###-####" },
  { country: "Australia", code: "+61", flag: "🇦🇺", format: "### ### ###" },
];

export interface PhoneInputProps extends Omit<HTMLMotionProps<"div">, "onChange"> {
  value?: string;
  onChange?: (val: string, country: CountryCode) => void;
  countries?: CountryCode[];
  defaultCountry?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function PhoneInput({
  value = "",
  onChange,
  countries = DEFAULT_COUNTRIES,
  defaultCountry = "United States",
  placeholder = "Enter phone number",
  disabled = false,
  className,
  ...props
}: PhoneInputProps) {
  const availableCountries = countries.length > 0 ? countries : DEFAULT_COUNTRIES;
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>(
    availableCountries.find((c) => c.country === defaultCountry) || availableCountries[0]
  );
  const [phone, setPhone] = useState(value);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const triggerHaptic = useHaptic();

  const menuRef = useRef<HTMLDivElement>(null);
  useDismiss(isOpen, () => setIsOpen(false), menuRef);

  useEffect(() => {
    setPhone(value);
  }, [value]);

  const filteredCountries = availableCountries.filter(
    (c) =>
      c.country.toLowerCase().includes(search.toLowerCase()) ||
      c.code.includes(search)
  );

  const handleSelectCountry = (country: CountryCode) => {
    setSelectedCountry(country);
    setIsOpen(false);
    setSearch("");
    triggerHaptic("selection");
    onChange?.(phone, country);
    inputRef.current?.focus();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^\d]/g, "");
    setPhone(raw);
    onChange?.(raw, selectedCountry);
  };

  return (
    <motion.div className={cn("relative w-full", className)} {...props}>
      <div
        className={cn(
          "flex items-center rounded-xl border border-border bg-card shadow-sm transition-all focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20",
          disabled && "opacity-50 pointer-events-none"
        )}
      >
        {/* Country Picker Trigger */}
        <button
          type="button"
          disabled={disabled}
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-foreground hover:bg-muted/60 rounded-l-xl transition-colors border-r border-border"
        >
          <span className="text-base">{selectedCountry.flag}</span>
          <span>{selectedCountry.code}</span>
          <ChevronDown className="size-3 text-muted-foreground" />
        </button>

        {/* Input */}
        <div className="relative flex-1 flex items-center">
          <input
            ref={inputRef}
            type="tel"
            value={phone}
            onChange={handleInputChange}
            disabled={disabled}
            placeholder={placeholder}
            className="w-full bg-transparent px-3.5 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
        </div>
      </div>

      {/* Country Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 2, scale: 0.98 }}
            transition={SPRING_PANEL}
            className="absolute left-0 top-full z-50 mt-1.5 w-64 rounded-xl border border-border bg-card p-1.5 shadow-xl backdrop-blur-md"
          >
            <input
              type="text"
              placeholder="Search country..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-border bg-muted/40 px-2.5 py-1.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary mb-1"
              autoFocus
            />
            <div className="max-h-52 overflow-y-auto space-y-0.5">
              {filteredCountries.map((c) => {
                const isSelected = c.code === selectedCountry.code && c.country === selectedCountry.country;
                return (
                  <button
                    key={`${c.country}-${c.code}`}
                    type="button"
                    onClick={() => handleSelectCountry(c)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-left text-xs transition-colors",
                      isSelected ? "bg-primary/10 text-primary font-semibold" : "hover:bg-muted text-foreground"
                    )}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-base">{c.flag}</span>
                      <span>{c.country}</span>
                    </span>
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                      <span>{c.code}</span>
                      {isSelected && <Check className="size-3 text-primary" />}
                    </span>
                  </button>
                );
              })}
              {filteredCountries.length === 0 && (
                <div className="p-3 text-center text-xs text-muted-foreground">
                  No countries found
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

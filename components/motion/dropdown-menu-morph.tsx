"use client";

import * as React from "react";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { SPRING_LAYOUT, SPRING_PANEL } from "@/lib/ease";

export interface NavTabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

export interface DropdownMenuMorphProps {
  tabs?: NavTabItem[];
  className?: string;
}

const DEFAULT_TABS: NavTabItem[] = [
  {
    id: "products",
    label: "Products",
    content: (
      <div className="w-80 p-4 space-y-3">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
          Core Platform
        </h4>
        <div className="space-y-2">
          <a
            href="#engine"
            className="block p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
              Motion Engine
            </div>
            <div className="text-xs text-neutral-500">
              High-performance 120 FPS spring physics
            </div>
          </a>
          <a
            href="#ai"
            className="block p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
              Agent Surfaces
            </div>
            <div className="text-xs text-neutral-500">
              Chat, code diffs, and streaming components
            </div>
          </a>
        </div>
      </div>
    ),
  },
  {
    id: "developers",
    label: "Developers",
    content: (
      <div className="w-96 p-4 space-y-3">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
          Resources
        </h4>
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
            <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
              Documentation
            </div>
            <div className="text-xs text-neutral-500">API guides & props</div>
          </div>
          <div className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
            <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
              CLI Installer
            </div>
            <div className="text-xs text-neutral-500">Zero-config sync</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "company",
    label: "Company",
    content: (
      <div className="w-64 p-4 space-y-2">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
          About
        </h4>
        <div className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
          Crafting the highest fidelity motion primitives and AI agent interfaces.
        </div>
      </div>
    ),
  },
];

export function DropdownMenuMorph({
  tabs = DEFAULT_TABS,
  className,
}: DropdownMenuMorphProps) {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const activeContent = tabs.find((t) => t.id === activeTab)?.content;

  return (
    <div
      className={cn("relative flex flex-col items-center", className)}
      onMouseLeave={() => setActiveTab(null)}
    >
      <nav className="flex items-center gap-1 p-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-sm">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onMouseEnter={() => setActiveTab(tab.id)}
              onFocus={() => setActiveTab(tab.id)}
              className={cn(
                "relative px-4 py-2 text-sm font-medium rounded-full transition-colors",
                isActive
                  ? "text-neutral-900 dark:text-neutral-100"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200"
              )}
            >
              {tab.label}
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-full bg-neutral-100 dark:bg-neutral-800 -z-10"
                  transition={SPRING_LAYOUT}
                />
              )}
            </button>
          );
        })}
      </nav>

      <AnimatePresence>
        {activeTab && (
          <motion.div
            layout
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 12, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={SPRING_PANEL}
            className="absolute top-full z-50 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-2xl overflow-hidden backdrop-blur-xl"
          >
            <motion.div layout="position" transition={SPRING_LAYOUT}>
              {activeContent}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

"use client";

import {
  ChevronRight,
  File,
  Folder,
  FolderOpen,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import React, { useState } from "react";
import { EASE_OUT, SPRING_LAYOUT, SPRING_PRESS } from "@/lib/ease";
import { cn } from "@/lib/utils";

export interface TreeNode {
  id: string;
  label: string;
  icon?: React.ReactNode;
  children?: TreeNode[];
}

export interface TreeViewProps {
  data: TreeNode[];
  selectedId?: string;
  onSelect?: (node: TreeNode) => void;
  className?: string;
}

interface TreeItemProps {
  node: TreeNode;
  level: number;
  selectedId?: string;
  onSelect?: (node: TreeNode) => void;
}

function TreeItem({ node, level, selectedId, onSelect }: TreeItemProps) {
  const hasChildren = Boolean(node.children && node.children.length > 0);
  const [isOpen, setIsOpen] = useState(level === 0);
  const shouldReduceMotion = useReducedMotion();
  const isSelected = selectedId === node.id;

  const handleClick = () => {
    if (hasChildren) {
      setIsOpen(!isOpen);
    }
    onSelect?.(node);
  };

  return (
    <div className="select-none">
      <motion.div
        onClick={handleClick}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
        transition={SPRING_PRESS}
        style={{ paddingLeft: `${level * 16 + 8}px` }}
        className={cn(
          "flex items-center gap-2 rounded-xl py-1.5 pr-2.5 text-xs font-medium transition-colors cursor-pointer",
          isSelected
            ? "bg-primary/10 text-primary font-semibold"
            : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
        )}
      >
        {hasChildren ? (
          <motion.span
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={shouldReduceMotion ? { duration: 0 } : SPRING_LAYOUT}
            className="text-muted-foreground/80"
          >
            <ChevronRight className="size-3.5" />
          </motion.span>
        ) : (
          <span className="size-3.5" />
        )}

        {hasChildren ? (
          isOpen ? (
            <FolderOpen className="size-4 text-primary shrink-0" />
          ) : (
            <Folder className="size-4 text-muted-foreground shrink-0" />
          )
        ) : (
          <File className="size-3.5 text-muted-foreground shrink-0" />
        )}

        <span className="truncate">{node.label}</span>
      </motion.div>

      {/* Children Nodes */}
      <AnimatePresence initial={false}>
        {hasChildren && isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: "auto",
              transition: shouldReduceMotion
                ? { duration: 0 }
                : { height: SPRING_LAYOUT, opacity: { duration: 0.2, ease: EASE_OUT } },
            }}
            exit={{
              opacity: 0,
              height: 0,
              transition: shouldReduceMotion
                ? { duration: 0 }
                : { height: { duration: 0.2 }, opacity: { duration: 0.15 } },
            }}
            className="relative overflow-hidden"
          >
            {/* Indentation line */}
            <div
              className="absolute bottom-0 top-0 border-l border-border/50"
              style={{ left: `${level * 16 + 14}px` }}
            />
            {node.children!.map((child) => (
              <TreeItem
                key={child.id}
                node={child}
                level={level + 1}
                selectedId={selectedId}
                onSelect={onSelect}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function TreeView({ data, selectedId, onSelect, className }: TreeViewProps) {
  return (
    <div
      role="tree"
      className={cn(
        "flex flex-col gap-0.5 rounded-2xl border border-border bg-card p-2 shadow-sm",
        className
      )}
    >
      {data.map((node) => (
        <TreeItem
          key={node.id}
          node={node}
          level={0}
          selectedId={selectedId}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

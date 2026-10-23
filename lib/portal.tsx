"use client";

import { createContext, useContext, type ReactNode } from "react";
import { createPortal as reactDomCreatePortal } from "react-dom";

const PortalTheme = createContext<string | undefined>(undefined);

export function PortalThemeProvider({ className, children }: { className: string; children: ReactNode }) {
  return <PortalTheme.Provider value={className}>{children}</PortalTheme.Provider>;
}

export function usePortalTheme() {
  return useContext(PortalTheme);
}

function PortalThemeScope({ children }: { children: ReactNode }) {
  const className = usePortalTheme();
  return className ? <div className={className} style={{ display: "contents" }}>{children}</div> : <>{children}</>;
}

// React context crosses the portal; the scope restores CSS inheritance at its destination.
export const createPortal: typeof reactDomCreatePortal = (children, container, key) =>
  reactDomCreatePortal(<PortalThemeScope>{children}</PortalThemeScope>, container, key);

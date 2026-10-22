"use client";

import { Component, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

const subscribeMotion = (notify) => {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", notify);
  return () => query.removeEventListener("change", notify);
};

export function useEffectReducedMotion() {
  return useSyncExternalStore(subscribeMotion, () => window.matchMedia("(prefers-reduced-motion: reduce)").matches, () => true);
}

let webglAvailable;
function supportsWebGL() {
  if (webglAvailable !== undefined) return webglAvailable;
  try {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("webgl2");
    webglAvailable = Boolean(context);
    context?.getExtension("WEBGL_lose_context")?.loseContext();
  } catch {
    webglAvailable = false;
  }
  return webglAvailable;
}
const subscribeAvailability = () => () => {};

class SurfaceBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? this.props.fallback : this.props.children; }
}

/** @param {{ children?: import("react").ReactNode, className?: string, style?: import("react").CSSProperties, imageSrc?: string, label?: string }} props */
export function WebGLSurface({ children, className, style, imageSrc, label = "Visual effect" }) {
  const supported = useSyncExternalStore(subscribeAvailability, supportsWebGL, () => false);
  const fallback = <div role="img" aria-label={label} className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: imageSrc ? `url(${JSON.stringify(imageSrc)})` : undefined }} />;
  return (
    <div className={cn("relative isolate h-[28rem] w-full overflow-hidden bg-black", className)} style={{ containerType: "size", ...style }}>
      {fallback}
      {supported && <SurfaceBoundary fallback={fallback}>{children}</SurfaceBoundary>}
    </div>
  );
}

import { useState, useCallback, useRef } from 'react';

export interface ParticleDeleteOptions {
  /** Sampling step in pixels (default: 2 on desktop, 3 on mobile) */
  sampleStep?: number;
  /** Size of each individual particle in px (default: 1.5) */
  particleSize?: number;
  /** Total animation duration in milliseconds (default: 850ms) */
  duration?: number;
  /** Outward explosion force multiplier (default: 1.0) */
  force?: number;
  /** Vertical drift/gravity bias (default: 0.15, positive is upward float) */
  drift?: number;
  /** Center-first dissolution vs uniform dispersion (default: 'center-first') */
  dissolvePattern?: 'center-first' | 'edges-first' | 'uniform' | 'random';
  /** Particle drag factor (0.9 to 0.99, default: 0.97) */
  drag?: number;
  /** Maximum particles limit to protect performance (default: 4500) */
  maxParticles?: number;
  /** Custom completion callback */
  onComplete?: () => void;
}

interface Particle {
  x: number;
  y: number;
  origX: number;
  origY: number;
  vx: number;
  vy: number;
  r: number;
  g: number;
  b: number;
  baseAlpha: number;
  size: number;
  delay: number;
  life: number;
  maxLife: number;
  drag: number;
}

/**
 * Recursively clones a DOM node and applies all computed styles directly as inline styles.
 * This guarantees accurate visual replication when rendered into an SVG foreignObject.
 */
function cloneWithComputedStyles(element: HTMLElement): HTMLElement {
  const clone = element.cloneNode(true) as HTMLElement;
  const originalNodes = [element, ...Array.from(element.querySelectorAll<HTMLElement>('*'))];
  const clonedNodes = [clone, ...Array.from(clone.querySelectorAll<HTMLElement>('*'))];

  const propertiesToCopy = [
    'background',
    'background-color',
    'background-image',
    'background-size',
    'background-position',
    'color',
    'font-family',
    'font-size',
    'font-weight',
    'font-style',
    'line-height',
    'letter-spacing',
    'text-align',
    'text-transform',
    'text-decoration',
    'border',
    'border-color',
    'border-width',
    'border-style',
    'border-radius',
    'box-shadow',
    'box-sizing',
    'padding',
    'padding-top',
    'padding-right',
    'padding-bottom',
    'padding-left',
    'margin',
    'display',
    'flex-direction',
    'align-items',
    'justify-content',
    'gap',
    'width',
    'height',
    'min-width',
    'min-height',
    'max-width',
    'max-height',
    'opacity',
    'overflow',
  ];

  for (let i = 0; i < originalNodes.length; i++) {
    const orig = originalNodes[i];
    const cln = clonedNodes[i];
    if (!orig || !cln || !(orig instanceof HTMLElement) || !(cln instanceof HTMLElement)) continue;

    const computed = window.getComputedStyle(orig);
    for (const prop of propertiesToCopy) {
      const val = computed.getPropertyValue(prop);
      if (val) {
        cln.style.setProperty(prop, val);
      }
    }
  }

  return clone;
}

/**
 * Captures an HTML element into an offscreen Canvas and extracts its pixel data.
 */
async function captureElementToCanvas(
  element: HTMLElement,
  width: number,
  height: number,
  dpr: number
): Promise<ImageData | null> {
  try {
    const cloned = cloneWithComputedStyles(element);
    cloned.style.margin = '0';
    cloned.style.transform = 'none';

    const serializer = new XMLSerializer();
    const htmlString = serializer.serializeToString(cloned);

    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
        <foreignObject width="100%" height="100%">
          <div xmlns="http://www.w3.org/1999/xhtml" style="width:${width}px;height:${height}px;">
            ${htmlString}
          </div>
        </foreignObject>
      </svg>
    `;

    const svgUrl = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
    const img = new Image();

    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = (e) => reject(e);
      img.src = svgUrl;
    });

    const offscreen = document.createElement('canvas');
    offscreen.width = Math.max(1, Math.floor(width * dpr));
    offscreen.height = Math.max(1, Math.floor(height * dpr));
    const ctx = offscreen.getContext('2d');
    if (!ctx) return null;

    ctx.scale(dpr, dpr);
    ctx.drawImage(img, 0, 0, width, height);

    return ctx.getImageData(0, 0, offscreen.width, offscreen.height);
  } catch {
    // Fallback: create procedural representation if foreignObject is blocked
    try {
      const offscreen = document.createElement('canvas');
      offscreen.width = Math.max(1, Math.floor(width * dpr));
      offscreen.height = Math.max(1, Math.floor(height * dpr));
      const ctx = offscreen.getContext('2d');
      if (!ctx) return null;

      const style = window.getComputedStyle(element);
      ctx.fillStyle = style.backgroundColor && style.backgroundColor !== 'rgba(0, 0, 0, 0)'
        ? style.backgroundColor
        : '#111111';
      ctx.fillRect(0, 0, offscreen.width, offscreen.height);

      // Draw border if present
      if (style.borderColor && style.borderColor !== 'transparent') {
        ctx.strokeStyle = style.borderColor;
        ctx.lineWidth = 1 * dpr;
        ctx.strokeRect(0, 0, offscreen.width, offscreen.height);
      }

      return ctx.getImageData(0, 0, offscreen.width, offscreen.height);
    } catch {
      return null;
    }
  }
}

/**
 * Samples pixel data into a structured physics particle list.
 */
function createParticlesFromImageData(
  imageData: ImageData,
  displayWidth: number,
  displayHeight: number,
  dpr: number,
  options: ParticleDeleteOptions
): Particle[] {
  const data = imageData.data;
  const canvasWidth = imageData.width;
  const canvasHeight = imageData.height;

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  const defaultStep = isMobile ? 3 : 2;
  const step = options.sampleStep || defaultStep;
  const maxParticles = options.maxParticles || 4500;
  const duration = options.duration || 850;
  const forceMultiplier = options.force ?? 1.0;
  const driftBias = options.drift ?? 0.15;
  const pattern = options.dissolvePattern || 'center-first';
  const baseDrag = options.drag ?? 0.97;
  const pSize = options.particleSize ?? 1.5;

  const particles: Particle[] = [];
  const centerX = displayWidth / 2;
  const centerY = displayHeight / 2;
  const maxRadius = Math.hypot(centerX, centerY) || 1;

  // Step in CSS display coordinates
  for (let py = 0; py < displayHeight; py += step) {
    for (let px = 0; px < displayWidth; px += step) {
      // Map display coordinate to canvas pixel coordinate
      const imgX = Math.floor(px * dpr);
      const imgY = Math.floor(py * dpr);

      if (imgX >= canvasWidth || imgY >= canvasHeight) continue;

      const idx = (imgY * canvasWidth + imgX) * 4;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      const a = data[idx + 3];

      // Ignore fully transparent or near-invisible pixels
      if (a < 15) continue;

      const dx = px - centerX;
      const dy = py - centerY;
      const dist = Math.hypot(dx, dy);
      const normDist = Math.min(1, dist / maxRadius);

      // Angle from center with subtle random turbulence
      const baseAngle = Math.atan2(dy, dx);
      const randomNoise = (Math.random() - 0.5) * 0.9;
      const angle = baseAngle + randomNoise;

      // Realistic velocity profile: slight outward push with fine grain randomness
      const speed = (0.4 + Math.random() * 1.6) * forceMultiplier;
      const vx = Math.cos(angle) * speed + (Math.random() - 0.5) * 0.3;
      const vy = Math.sin(angle) * speed + (Math.random() - 0.5) * 0.3 - driftBias;

      // Dissolution delay pattern
      let delay = 0;
      if (pattern === 'center-first') {
        // Center particles dissolve first, edges slightly later
        delay = (1 - normDist) * 140 + Math.random() * 90;
      } else if (pattern === 'edges-first') {
        delay = normDist * 140 + Math.random() * 90;
      } else if (pattern === 'random') {
        delay = Math.random() * 200;
      } else {
        // uniform
        delay = Math.random() * 80;
      }

      const particleLife = 0;
      const particleMaxLife = duration * (0.65 + Math.random() * 0.35);

      particles.push({
        x: px,
        y: py,
        origX: px,
        origY: py,
        vx,
        vy,
        r,
        g,
        b,
        baseAlpha: a / 255,
        size: Math.max(1, pSize * (Math.random() > 0.8 ? 1.6 : 1.0)),
        delay,
        life: particleLife,
        maxLife: particleMaxLife,
        drag: baseDrag + (Math.random() - 0.5) * 0.015,
      });
    }
  }

  // Downsample if particles exceed maximum limit for performance
  if (particles.length > maxParticles) {
    const stride = Math.ceil(particles.length / maxParticles);
    return particles.filter((_, i) => i % stride === 0);
  }

  return particles;
}

/**
 * Triggers the premium particle-based delete animation on any DOM element.
 *
 * @param element - The HTML element to dissolve
 * @param options - Customization options for particle count, force, and timing
 * @returns Promise that resolves when the dissolution animation completes
 */
export async function particleDelete(
  element: HTMLElement,
  options: ParticleDeleteOptions = {}
): Promise<void> {
  // Check for prefers-reduced-motion
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    element.style.transition = 'opacity 150ms ease';
    element.style.opacity = '0';
    await new Promise((r) => setTimeout(r, 150));
    options.onComplete?.();
    return;
  }

  if (!element || !element.isConnected) {
    options.onComplete?.();
    return;
  }

  const rect = element.getBoundingClientRect();
  if (rect.width <= 0 || rect.height <= 0) {
    options.onComplete?.();
    return;
  }

  const dpr = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 2.5) : 1;
  const width = rect.width;
  const height = rect.height;

  // 1. Capture element visual appearance
  const imageData = await captureElementToCanvas(element, width, height, dpr);
  if (!imageData) {
    // Graceful fallback: quick fade
    element.style.transition = 'opacity 200ms ease';
    element.style.opacity = '0';
    await new Promise((r) => setTimeout(r, 200));
    options.onComplete?.();
    return;
  }

  // 2. Generate particle field
  const particles = createParticlesFromImageData(imageData, width, height, dpr, options);
  if (particles.length === 0) {
    options.onComplete?.();
    return;
  }

  // 3. Create high-DPI fixed positioning canvas overlaid on the element
  const canvas = document.createElement('canvas');
  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);
  canvas.style.position = 'fixed';
  canvas.style.left = `${rect.left}px`;
  canvas.style.top = `${rect.top}px`;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '99999';
  canvas.setAttribute('aria-hidden', 'true');

  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) {
    options.onComplete?.();
    return;
  }

  ctx.scale(dpr, dpr);
  document.body.appendChild(canvas);

  // 4. Hide original element so canvas particle representation seamlessly takes over
  const originalVisibility = element.style.visibility;
  element.style.visibility = 'hidden';

  // 5. Physics simulation loop
  const totalDuration = options.duration || 850;
  const startTime = performance.now();
  let lastTime = startTime;
  let rafId = 0;

  return new Promise<void>((resolve) => {
    const cleanup = () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
      element.style.visibility = originalVisibility;
      options.onComplete?.();
      resolve();
    };

    const render = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const deltaTime = Math.min(currentTime - lastTime, 32); // clamp delta
      lastTime = currentTime;

      ctx.clearRect(0, 0, width, height);

      let activeCount = 0;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (elapsed < p.delay) {
          // Phase 1: Perfect replica of the original component
          ctx.fillStyle = `rgba(${p.r}, ${p.g}, ${p.b}, ${p.baseAlpha})`;
          ctx.fillRect(p.origX, p.origY, p.size, p.size);
          activeCount++;
        } else {
          // Phase 2: Active dissolution & physics dispersion
          p.life += deltaTime;
          const progress = p.life / p.maxLife;

          if (progress < 1) {
            activeCount++;

            // Physics integration
            p.x += p.vx;
            p.y += p.vy;

            // Air drag
            p.vx *= p.drag;
            p.vy *= p.drag;

            // Subtle upward dust float
            p.vy -= 0.015;

            // Smooth opacity decay with soft tail
            const fade = progress < 0.2 ? 1 : Math.max(0, 1 - (progress - 0.2) / 0.8);
            const currentAlpha = p.baseAlpha * fade;

            ctx.fillStyle = `rgba(${p.r}, ${p.g}, ${p.b}, ${currentAlpha})`;
            ctx.fillRect(p.x, p.y, p.size, p.size);
          }
        }
      }

      if (elapsed < totalDuration && activeCount > 0) {
        rafId = requestAnimationFrame(render);
      } else {
        cleanup();
      }
    };

    rafId = requestAnimationFrame(render);
  });
}

/**
 * React Hook for adding particle-based delete animation to components and lists.
 */
export function useParticleDelete(defaultOptions: ParticleDeleteOptions = {}) {
  const [isDeleting, setIsDeleting] = useState(false);
  const isDeletingRef = useRef(false);

  const triggerDelete = useCallback(
    async (
      elementOrRef: HTMLElement | React.RefObject<HTMLElement | null>,
      onDeleteAction?: () => void,
      overrideOptions?: ParticleDeleteOptions
    ) => {
      if (isDeletingRef.current) return;

      const targetElement =
        elementOrRef instanceof HTMLElement
          ? elementOrRef
          : elementOrRef.current;

      if (!targetElement) {
        onDeleteAction?.();
        return;
      }

      isDeletingRef.current = true;
      setIsDeleting(true);

      const mergedOptions: ParticleDeleteOptions = {
        ...defaultOptions,
        ...overrideOptions,
      };

      try {
        await particleDelete(targetElement, mergedOptions);
        onDeleteAction?.();
      } catch (err) {
        console.error('Particle delete fallback triggered:', err);
        onDeleteAction?.();
      } finally {
        isDeletingRef.current = false;
        setIsDeleting(false);
      }
    },
    [defaultOptions]
  );

  return {
    isDeleting,
    triggerDelete,
  };
}

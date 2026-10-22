"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { WebGLSurface, useEffectReducedMotion } from "@/lib/effects/shared/webgl-surface";
import { cn } from "@/lib/utils";
import { LoaderGooeyBlobs } from "@/components/ui/loaders-gooey-blobs";

const defaultConfig = {
  cellSize: 0.75,
  zoomLevel: 1.25,
  lerpFactor: 0.075,
  borderColor: "rgba(255, 255, 255, 0.15)",
  backgroundColor: "rgba(0, 0, 0, 1)",
  textColor: "rgba(128, 128, 128, 1)",
  hoverColor: "rgba(255, 255, 255, 0)",
};

const defaultItems = [
  { title: "Motion Study", year: 2024 },
  { title: "Idle Form", year: 2023 },
  { title: "Blur Signal", year: 2024 },
  { title: "Still Drift", year: 2023 },
  { title: "Tidewalk", year: 2024 },
  { title: "Core Motion", year: 2022 },
  { title: "White Bloom", year: 2024 },
  { title: "Backrun", year: 2023 },
  { title: "Rushline", year: 2024 },
  { title: "Afterimage", year: 2023 },
  { title: "Shadowhead", year: 2022 },
  { title: "Opal Lace", year: 2024 },
  { title: "Glassprint", year: 2024 },
  { title: "Redshift", year: 2023 },
  { title: "White Noise", year: 2023 },
  { title: "Twin Field", year: 2024 },
  { title: "Petalloop", year: 2023 },
  { title: "Ghostwalk", year: 2024 },
  { title: "Heatwave", year: 2023 },
  { title: "Sky Drift", year: 2024 },
  { title: "Spindle", year: 2022 },
  { title: "Pacer", year: 2023 },
  { title: "Stride", year: 2024 },
  { title: "Cryo Pulse", year: 2022 },
  { title: "Velvet Blur", year: 2024 },
];

const defaultImages = [
  "https://cdn-new.obsidianui.dev/imagess/1.png",
  "https://cdn-new.obsidianui.dev/imagess/2.png",
  "https://cdn-new.obsidianui.dev/imagess/3.png",
  "https://cdn-new.obsidianui.dev/imagess/4.png",
  "https://cdn-new.obsidianui.dev/imagess/5.png",
  "https://cdn-new.obsidianui.dev/imagess/6.png",
  "https://cdn-new.obsidianui.dev/imagess/7.png",
  "https://cdn-new.obsidianui.dev/imagess/8.png",
  "https://cdn-new.obsidianui.dev/imagess/9.png",
  "https://cdn-new.obsidianui.dev/imagess/10.png",
  "https://cdn-new.obsidianui.dev/imagess/11.png",
  "https://cdn-new.obsidianui.dev/imagess/12.png",
  "https://cdn-new.obsidianui.dev/imagess/13.png",
  "https://cdn-new.obsidianui.dev/imagess/14.png",
  "https://cdn-new.obsidianui.dev/imagess/15.png",
  "https://cdn-new.obsidianui.dev/imagess/16.png",
  "https://cdn-new.obsidianui.dev/imagess/17.png",
  "https://cdn-new.obsidianui.dev/imagess/18.png",
  "https://cdn-new.obsidianui.dev/imagess/19.png",
  "https://cdn-new.obsidianui.dev/imagess/20.jpg",
  "https://cdn-new.obsidianui.dev/imagess/21.jpg",
  "https://cdn-new.obsidianui.dev/imagess/22.jpg",
  "https://cdn-new.obsidianui.dev/imagess/23.jpg",
  "https://cdn-new.obsidianui.dev/imagess/24.jpg",
  "https://cdn-new.obsidianui.dev/imagess/25.jpg",
];

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform vec2 uOffset;
  uniform vec2 uResolution;
  uniform vec4 uBorderColor;
  uniform vec4 uHoverColor;
  uniform vec4 uBackgroundColor;
  uniform vec2 uMousePos;
  uniform float uZoom;
  uniform float uCellSize;
  uniform float uTextureCount;
  uniform sampler2D uImageAtlas;
  uniform sampler2D uTextAtlas;
  varying vec2 vUv;

  void main() {
    vec2 screenUV = (vUv - 0.5) * 2.0;
    float radius = length(screenUV);
    float distortion = 1.0 - 0.08 * radius * radius;
    vec2 distortedUV = screenUV * distortion;
    vec2 aspectRatio = vec2(uResolution.x / uResolution.y, 1.0);
    vec2 worldCoord = distortedUV * aspectRatio;
    worldCoord *= uZoom;
    worldCoord += uOffset;
    vec2 cellPos = worldCoord / uCellSize;
    vec2 cellId = floor(cellPos);
    vec2 cellUV = fract(cellPos);
    vec2 mouseScreenUV = (uMousePos / uResolution) * 2.0 - 1.0;
    mouseScreenUV.y = -mouseScreenUV.y;
    float mouseRadius = length(mouseScreenUV);
    float mouseDistortion = 1.0 - 0.08 * mouseRadius * mouseRadius;
    vec2 mouseDistortedUV = mouseScreenUV * mouseDistortion;
    vec2 mouseWorldCoord = mouseDistortedUV * aspectRatio;
    mouseWorldCoord *= uZoom;
    mouseWorldCoord += uOffset;
    vec2 mouseCellPos = mouseWorldCoord / uCellSize;
    vec2 mouseCellId = floor(mouseCellPos);
    vec2 cellCenter = cellId + 0.5;
    vec2 mouseCellCenter = mouseCellId + 0.5;
    float cellDistance = length(cellCenter - mouseCellCenter);
    float hoverIntensity = 1.0 - smoothstep(0.4, 0.7, cellDistance);
    bool isHovered = hoverIntensity > 0.0 && uMousePos.x >= 0.0;
    vec3 backgroundColor = uBackgroundColor.rgb;
    if (isHovered) {
      backgroundColor = mix(uBackgroundColor.rgb, uHoverColor.rgb, hoverIntensity * uHoverColor.a);
    }
    float lineWidth = 0.005;
    float gridX = smoothstep(0.0, lineWidth, cellUV.x) * smoothstep(0.0, lineWidth, 1.0 - cellUV.x);
    float gridY = smoothstep(0.0, lineWidth, cellUV.y) * smoothstep(0.0, lineWidth, 1.0 - cellUV.y);
    float gridMask = gridX * gridY;
    float imageSize = 0.6;
    float imageBorder = (1.0 - imageSize) * 0.5;
    vec2 imageUV = (cellUV - imageBorder) / imageSize;
    float edgeSmooth = 0.01;
    vec2 imageMask = smoothstep(-edgeSmooth, edgeSmooth, imageUV) *
                    smoothstep(-edgeSmooth, edgeSmooth, 1.0 - imageUV);
    float imageAlpha = imageMask.x * imageMask.y;
    bool inImageArea = imageUV.x >= 0.0 && imageUV.x <= 1.0 && imageUV.y >= 0.0 && imageUV.y <= 1.0;
    float textHeight = 0.08;
    float textY = 0.88;
    bool inTextArea = cellUV.x >= 0.05 && cellUV.x <= 0.95 && cellUV.y >= textY && cellUV.y <= (textY + textHeight);
    float texIndex = mod(cellId.x + cellId.y * 3.0, uTextureCount);
    vec3 color = backgroundColor;
    if (inImageArea && imageAlpha > 0.0) {
      float atlasSize = ceil(sqrt(uTextureCount));
      vec2 atlasPos = vec2(mod(texIndex, atlasSize), floor(texIndex / atlasSize));
      vec2 atlasUV = (atlasPos + imageUV) / atlasSize;
      atlasUV.y = 1.0 - atlasUV.y;
      vec3 imageColor = texture2D(uImageAtlas, atlasUV).rgb;
      color = mix(color, imageColor, imageAlpha);
    }
    if (inTextArea) {
      vec2 textCoord = vec2((cellUV.x - 0.05) / 0.9, (cellUV.y - textY) / textHeight);
      textCoord.y = 1.0 - textCoord.y;
      float atlasSize = ceil(sqrt(uTextureCount));
      vec2 atlasPos = vec2(mod(texIndex, atlasSize), floor(texIndex / atlasSize));
      vec2 atlasUV = (atlasPos + textCoord) / atlasSize;
      vec4 textColor = texture2D(uTextAtlas, atlasUV);
      color = mix(backgroundColor, textColor.rgb, textColor.a);
    }
    vec3 borderRGB = uBorderColor.rgb;
    float borderAlpha = uBorderColor.a;
    color = mix(color, borderRGB, (1.0 - gridMask) * borderAlpha);
    float fade = 1.0 - smoothstep(1.2, 1.8, radius);
    gl_FragColor = vec4(color * fade, 1.0);
  }
`;

function rgbaToArray(rgba) {
  const match = rgba.match(/rgba?\(([^)]+)\)/);
  if (!match) return [1, 1, 1, 1];
  const parts = match[1].split(",");
  return [
    parseFloat(parts[0]) / 255,
    parseFloat(parts[1]) / 255,
    parseFloat(parts[2]) / 255,
    parseFloat(parts[3] ?? "1"),
  ];
}

function createTextTexture(title, year, textColor) {
  const canvas = document.createElement("canvas");
  canvas.width = 2048;
  canvas.height = 256;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.clearRect(0, 0, 2048, 256);
    ctx.font = "80px monospace";
    ctx.fillStyle = textColor;
    ctx.textBaseline = "middle";
    ctx.imageSmoothingEnabled = false;
    ctx.textAlign = "left";
    ctx.fillText(String(title).toUpperCase(), 30, 128);
    ctx.textAlign = "right";
    ctx.fillText(String(year), 2048 - 30, 128);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.minFilter = THREE.NearestFilter;
  texture.magFilter = THREE.NearestFilter;
  texture.flipY = false;
  texture.generateMipmaps = false;
  return texture;
}

function blankTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 512;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.fillStyle = "#111";
    ctx.fillRect(0, 0, 512, 512);
  }
  return new THREE.CanvasTexture(canvas);
}

function loadImageTexture(src) {
  return new Promise((resolve) => {
    const image = new Image();
    let retries = 0;
    if (/^https?:\/\//.test(src)) image.crossOrigin = "anonymous";
    image.decoding = "async";
    image.onload = async () => {
      try { await image.decode(); } catch {}
      const texture = new THREE.Texture(image);
      texture.wrapS = THREE.ClampToEdgeWrapping;
      texture.wrapT = THREE.ClampToEdgeWrapping;
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.flipY = false;
      texture.needsUpdate = true;
      resolve(texture);
    };
    image.onerror = () => {
      if (retries === 0) {
        retries = 1;
        image.src = `${src}${src.includes("?") ? "&" : "?"}retry=1`;
        return;
      }
      resolve(null);
    };
    image.src = src;
  });
}

function createTextureAtlas(textures, isText = false) {
  const atlasSize = Math.ceil(Math.sqrt(textures.length));
  const textureSize = 512;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = atlasSize * textureSize;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    if (isText) ctx.clearRect(0, 0, canvas.width, canvas.height);
    else {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    const fallback = textures.find((texture) => texture.source?.data ?? texture.image);
    const fallbackSource = fallback?.source?.data ?? fallback?.image;
    textures.forEach((texture, index) => {
      const x = (index % atlasSize) * textureSize;
      const y = Math.floor(index / atlasSize) * textureSize;
      const src = texture.source?.data ?? texture.image;
      if (!src) return;
      try { ctx.drawImage(src, x, y, textureSize, textureSize); }
      catch {
        if (fallbackSource) ctx.drawImage(fallbackSource, x, y, textureSize, textureSize);
      }
    });
  }
  const atlasTexture = new THREE.CanvasTexture(canvas);
  atlasTexture.wrapS = THREE.ClampToEdgeWrapping;
  atlasTexture.wrapT = THREE.ClampToEdgeWrapping;
  atlasTexture.minFilter = THREE.LinearFilter;
  atlasTexture.magFilter = THREE.LinearFilter;
  atlasTexture.flipY = false;
  return atlasTexture;
}

function ArtGalleryScene({ images, items, cellSize, zoomLevel, showHint, reducedMotion }) {
  const containerRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    setReady(false);

    let cancelled = false;
    let animFrameId = 0;
    let renderer;
    let plane;
    let geometry;
    let material;
    let imageAtlas;
    let textAtlas;
    const loadedTextures = [];

    const state = {
      isDragging: false,
      previousPointer: { x: 0, y: 0 },
      offset: { x: 0, y: 0 },
      targetOffset: { x: 0, y: 0 },
      mousePosition: { x: -1, y: -1 },
      zoom: 1,
      targetZoom: 1,
    };

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    const bgColor = rgbaToArray(defaultConfig.backgroundColor);
    renderer.setClearColor(new THREE.Color(bgColor[0], bgColor[1], bgColor[2]), bgColor[3]);
    renderer.domElement.style.display = "block";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.touchAction = "none";
    container.appendChild(renderer.domElement);

    const lerpFactor = reducedMotion ? 1 : defaultConfig.lerpFactor;
    const dragZoom = reducedMotion ? 1 : zoomLevel;

    const animate = () => {
      animFrameId = requestAnimationFrame(animate);
      state.offset.x += (state.targetOffset.x - state.offset.x) * lerpFactor;
      state.offset.y += (state.targetOffset.y - state.offset.y) * lerpFactor;
      state.zoom += (state.targetZoom - state.zoom) * lerpFactor;
      if (plane?.material.uniforms) {
        plane.material.uniforms.uOffset.value.set(state.offset.x, state.offset.y);
        plane.material.uniforms.uZoom.value = state.zoom;
      }
      renderer.render(scene, camera);
    };

    const updateMousePosition = (event) => {
      const rect = renderer.domElement.getBoundingClientRect();
      state.mousePosition.x = event.clientX - rect.left;
      state.mousePosition.y = event.clientY - rect.top;
      plane?.material.uniforms.uMousePos.value.set(state.mousePosition.x, state.mousePosition.y);
    };

    const startDrag = (x, y) => {
      state.isDragging = true;
      state.previousPointer.x = x;
      state.previousPointer.y = y;
    };

    const handleMove = (x, y) => {
      if (!state.isDragging) return;
      const deltaX = x - state.previousPointer.x;
      const deltaY = y - state.previousPointer.y;
      if (Math.abs(deltaX) > 2 || Math.abs(deltaY) > 2) {
        if (state.targetZoom === 1) state.targetZoom = dragZoom;
      }
      state.targetOffset.x -= deltaX * 0.003;
      state.targetOffset.y += deltaY * 0.003;
      state.previousPointer.x = x;
      state.previousPointer.y = y;
    };

    const endDrag = () => {
      state.isDragging = false;
      state.targetZoom = 1;
    };

    const onPointerDown = (event) => {
      event.preventDefault();
      container.setPointerCapture?.(event.pointerId);
      startDrag(event.clientX, event.clientY);
    };
    const onPointerMove = (event) => {
      updateMousePosition(event);
      handleMove(event.clientX, event.clientY);
    };
    const onPointerUp = (event) => {
      if (container.hasPointerCapture?.(event.pointerId)) container.releasePointerCapture(event.pointerId);
      endDrag();
    };
    const onPointerLeave = () => {
      state.mousePosition.x = state.mousePosition.y = -1;
      plane?.material.uniforms.uMousePos.value.set(-1, -1);
      endDrag();
    };
    const onResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      if (!width || !height) return;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      plane?.material.uniforms.uResolution.value.set(width, height);
    };

    const init = async () => {
      const loadedImages = await Promise.all(images.map((src) => loadImageTexture(src)));
      if (cancelled) {
        loadedImages.forEach((texture) => texture?.dispose());
        return;
      }
      const replacement = loadedImages.find(Boolean) ?? blankTexture();
      const imageTiles = loadedImages.map((texture) => texture ?? replacement);
      loadedTextures.push(...new Set(imageTiles));
      const textTextures = items.map((item) => createTextTexture(item.title, item.year, defaultConfig.textColor));
      loadedTextures.push(...textTextures);
      imageAtlas = createTextureAtlas(imageTiles, false);
      textAtlas = createTextureAtlas(textTextures, true);
      if (cancelled) return;

      const uniforms = {
        uOffset: { value: new THREE.Vector2(0, 0) },
        uResolution: { value: new THREE.Vector2(container.clientWidth, container.clientHeight) },
        uBorderColor: { value: new THREE.Vector4(...rgbaToArray(defaultConfig.borderColor)) },
        uHoverColor: { value: new THREE.Vector4(...rgbaToArray(defaultConfig.hoverColor)) },
        uBackgroundColor: { value: new THREE.Vector4(...rgbaToArray(defaultConfig.backgroundColor)) },
        uMousePos: { value: new THREE.Vector2(-1, -1) },
        uZoom: { value: 1 },
        uCellSize: { value: cellSize },
        uTextureCount: { value: images.length },
        uImageAtlas: { value: imageAtlas },
        uTextAtlas: { value: textAtlas },
      };

      geometry = new THREE.PlaneGeometry(2, 2);
      material = new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms });
      plane = new THREE.Mesh(geometry, material);
      scene.add(plane);

      container.addEventListener("pointerdown", onPointerDown);
      container.addEventListener("pointermove", onPointerMove);
      container.addEventListener("pointerup", onPointerUp);
      container.addEventListener("pointercancel", onPointerUp);
      container.addEventListener("pointerleave", onPointerLeave);
      window.addEventListener("resize", onResize);
      animate();
      setReady(true);
    };

    init();

    return () => {
      cancelled = true;
      cancelAnimationFrame(animFrameId);
      container.removeEventListener("pointerdown", onPointerDown);
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerup", onPointerUp);
      container.removeEventListener("pointercancel", onPointerUp);
      container.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("resize", onResize);
      loadedTextures.forEach((texture) => texture.dispose());
      imageAtlas?.dispose();
      textAtlas?.dispose();
      geometry?.dispose();
      material?.dispose();
      renderer?.dispose();
      if (renderer?.domElement?.parentNode === container) container.removeChild(renderer.domElement);
    };
  }, [images, items, cellSize, zoomLevel, reducedMotion]);

  return (
    <div className="absolute inset-0 cursor-grab active:cursor-grabbing" style={{ touchAction: "none" }}>
      <div ref={containerRef} className="absolute inset-0" style={{ opacity: ready ? 1 : 0 }} />
      {!ready ? (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black text-white" role="status" aria-live="polite">
          <LoaderGooeyBlobs />
        </div>
      ) : null}
      {ready && showHint ? (
        <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/20">
          drag to explore
        </div>
      ) : null}
    </div>
  );
}

/** @param {{ images?: string[], items?: { title: string, year: string | number }[], cellSize?: number, zoomLevel?: number, showHint?: boolean, className?: string, style?: import("react").CSSProperties }} props */
export function ArtGallery({
  images = defaultImages,
  items = defaultItems,
  cellSize = defaultConfig.cellSize,
  zoomLevel = defaultConfig.zoomLevel,
  showHint = true,
  className,
  style,
} = {}) {
  const reducedMotion = useEffectReducedMotion();
  const tiles = images.length ? images : defaultImages;
  const captions = tiles.map((_, index) => items[index % items.length] ?? { title: `Study ${index + 1}`, year: "2024" });

  return (
    <WebGLSurface className={cn("bg-black", className)} style={style} label="ObsidianUI Art Gallery">
      <ArtGalleryScene
        images={tiles}
        items={captions}
        cellSize={cellSize}
        zoomLevel={zoomLevel}
        showHint={showHint}
        reducedMotion={reducedMotion}
      />
    </WebGLSurface>
  );
}

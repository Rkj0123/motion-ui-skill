'use client';

import React, { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import {
  EffectComposer,
  RenderPass,
  BloomEffect,
  EffectPass,
  FXAAEffect,
} from 'postprocessing';
import { DARK_PRESET, LIGHT_PRESET, type SceneSettings } from './v-prism-settings';

interface VPrismProps {
  settings?: SceneSettings;
  className?: string;
}

// ---------------------------------------------------------------------
// Alan Zucconi's Spectral Rainbow + JuliaPoo's Iridescence (Vercel Prism)
// ---------------------------------------------------------------------
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * viewMatrix * modelPosition;
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  uniform float fade;
  uniform float speed;
  uniform float startRadius;
  uniform float endRadius;
  uniform float emissiveIntensity;
  uniform float time;
  uniform float ratio;
  uniform vec3 bgColor;

  vec3 physhue2rgb(float hue, float ratio) {
    return smoothstep(
      vec3(0.0), vec3(1.0),
      abs(mod(hue + vec3(0.0, 1.0, 2.0) * ratio, 1.0) * 2.0 - 1.0)
    );
  }

  vec3 iridescence(float angle, float thickness) {
    float NxV = cos(angle);
    float lum = 0.05064;
    float luma = 0.01070;
    vec3 tint = vec3(0.49639, 0.78252, 0.8723);
    float interf0 = 2.4;
    float phase0 = 1.0 / 2.8;
    float interf1 = interf0 * 4.0 / 3.0;
    float phase1 = phase0;
    float f = (1.0 - NxV) * (1.0 - NxV);
    float interf = mix(interf0, interf1, f);
    float phase = mix(phase0, phase1, f);
    float dp = (NxV - 1.0) * 0.5;

    vec3 hue = mix(
      physhue2rgb(thickness * interf0 + dp, thickness * phase0),
      physhue2rgb(thickness * interf1 + 0.1 + dp, thickness * phase1),
      f
    );
    vec3 film = hue * lum + vec3(0.9639, 0.78252, 0.18723) * luma;
    return vec3((film * 3.0 + pow(f, 12.0))) * tint;
  }

  float _saturate(float x) {
    return clamp(x, 0.0, 1.0);
  }

  vec3 _saturate(vec3 x) {
    return clamp(x, vec3(0.0), vec3(1.0));
  }

  vec3 bump3y(vec3 x, vec3 yoffset) {
    vec3 y = vec3(1.0) - x * x;
    y = _saturate(y - yoffset);
    return y;
  }

  vec3 spectral_zucconi6(float w, float t) {
    float x = _saturate((w - 400.0) / 300.0);
    const vec3 c1 = vec3(3.54585104, 2.93225262, 2.41593945);
    const vec3 x1 = vec3(0.69549072, 0.49228336, 0.27699880);
    const vec3 y1 = vec3(0.02312639, 0.15225084, 0.52607955);
    const vec3 c2 = vec3(3.90307140, 3.21182957, 3.96587128);
    const vec3 x2 = vec3(0.11748627, 0.86755042, 0.66077860);
    const vec3 y2 = vec3(0.84897130, 0.88445281, 0.73949448);
    return bump3y(c1 * (x - x1), y1) + bump3y(c2 * (x - x2), y2);
  }

  void main() {
    const vec2 vstart = vec2(0.5, 0.5);
    const vec2 vend = vec2(1.0, 0.5);
    vec2 dir = vstart - vend;
    float len = length(dir);
    float cosR = dir.y / len;
    float sinR = dir.x / len;
    vec2 uv = (
      mat2(cosR, -sinR, sinR, cosR) *
      (vUv * vec2(ratio, 1.0) - vec2(0.0, 1.0) - vstart * vec2(1.0, -1.0))
      / len
    );
    float a = atan(uv.x, uv.y) * 10.0;
    float s = uv.y * (endRadius - startRadius) + startRadius;
    float w = (uv.x / max(abs(s), 0.0001) + 0.5) * 300.0 + 400.0 + a;
    vec3 c = spectral_zucconi6(w, time);
    float l = 1.0 - smoothstep(fade, 1.0, uv.y);
    float area = uv.y < 0.0 ? 0.0 : 1.0;
    float brightness = smoothstep(0.0, 0.5, c.x + c.y + c.z);
    vec3 co = c / max(iridescence(uv.x * 0.5 * 3.14159265, 1.0 - uv.y + time / 10.0), vec3(0.0001)) / 20.0;
    vec3 col = area * co * l * brightness * emissiveIntensity;
    float intensity = col.r + col.g + col.b;

    float edge = smoothstep(0.05, 1.0, intensity);
    gl_FragColor = vec4(mix(bgColor, col, edge), 1.0);
    if (intensity < 0.05) discard;

    #include <colorspace_fragment>
  }
`;

function isLightColor(colorHex: string): boolean {
  const hex = colorHex.replace('#', '');
  if (hex.length < 6) return false;
  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b > 0.5;
}

const MOBILE_BREAKPOINT = 600;

function getZoomScale(w: number): number {
  return w <= MOBILE_BREAKPOINT ? 50 : w <= 960 ? 70 : 100;
}

function snellDeflection(angle: number, ior = 2.5, nAir = 1.000293): number {
  return Math.asin((nAir * Math.sin(angle)) / ior) || 0;
}

export function VPrism({ settings, className = '' }: VPrismProps) {
  const { resolvedTheme } = useTheme();
  const activeSettings = settings ?? (resolvedTheme === 'dark' ? DARK_PRESET : LIGHT_PRESET);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const settingsRef = useRef<SceneSettings>(activeSettings);

  useEffect(() => {
    settingsRef.current = activeSettings;
  }, [activeSettings]);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let isDisposed = false;
    let animId: number;

    let width = Math.max(1, container.clientWidth || window.innerWidth);
    let height = Math.max(1, container.clientHeight || window.innerHeight);

    // --- RENDERER ---
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: false,
        powerPreference: 'high-performance',
        stencil: false,
        alpha: false,
        depth: true,
      });
    } catch {
      return;
    }
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setSize(width, height, false);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // --- SCENE & BACKGROUND ---
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(settingsRef.current.background);

    // --- ORTHOGRAPHIC CAMERA ---
    const camera = new THREE.OrthographicCamera(
      width / -2,
      width / 2,
      height / 2,
      height / -2,
      0.1,
      1000
    );
    camera.position.set(0, 0, 100);
    camera.zoom = getZoomScale(width);
    camera.updateProjectionMatrix();

    // --- POSTPROCESSING (BLOOM + FXAA via postprocessing) ---
    const composer = new EffectComposer(renderer, {
      frameBufferType: THREE.HalfFloatType,
      multisampling: 0,
      stencilBuffer: false,
    });
    composer.addPass(new RenderPass(scene, camera));

    const bloomEffect = new BloomEffect({
      intensity: settingsRef.current.bloom,
      levels: 9,
      luminanceSmoothing: 1,
      luminanceThreshold: 1,
      mipmapBlur: true,
    });

    const fxaaPass = new EffectPass(camera, new FXAAEffect());
    const bloomPass = new EffectPass(camera, bloomEffect);
    composer.addPass(fxaaPass);
    composer.addPass(bloomPass);

    // --- LIGHTS ---
    const ambientLight = new THREE.AmbientLight(0xffffff, settingsRef.current.ambientLight);
    scene.add(ambientLight);

    const pointLights = [
      new THREE.PointLight(0xffffff, settingsRef.current.pointLights),
      new THREE.PointLight(0xffffff, settingsRef.current.pointLights),
      new THREE.PointLight(0xffffff, settingsRef.current.pointLights),
    ];
    pointLights[0].position.set(10, -10, 0);
    pointLights[1].position.set(0, 10, 0);
    pointLights[2].position.set(-10, 0, 0);
    scene.add(...pointLights);

    const spotLight = new THREE.SpotLight(0xffffff, 1, 7, 1, 1);
    spotLight.position.set(0, 0, 1);
    scene.add(spotLight, spotLight.target);

    // Shared plane geometry
    const planeGeo = new THREE.PlaneGeometry(1, 1);

    // Prism & Ray mesh/material declarations
    let prismMesh: THREE.Mesh | null = null;
    let prismPhysicalMat: THREE.MeshPhysicalMaterial | null = null;
    let rayHitProxy: THREE.Mesh | null = null;
    let rayLineMesh: THREE.InstancedMesh | null = null;
    let rayGlowMesh: THREE.InstancedMesh | null = null;
    let rayDarkMat: THREE.MeshBasicMaterial | null = null;
    let rayLightMat: THREE.MeshBasicMaterial | null = null;

    // --- ENVIRONMENT MAP CUBE FOR CRYSTAL SPECULARITY ---
    let cubeRT: THREE.WebGLCubeRenderTarget | null = null;
    function updateEnvironment(isLight: boolean) {
      if (isLight) {
        if (!cubeRT) {
          cubeRT = new THREE.WebGLCubeRenderTarget(256);
          const envScene = new THREE.Scene();
          envScene.background = new THREE.Color('#000000');

          const addSoftbox = (intensity: number, pos: [number, number, number], scale: [number, number, number]) => {
            const mesh = new THREE.Mesh(
              planeGeo,
              new THREE.MeshBasicMaterial({
                color: new THREE.Color(intensity, intensity, intensity),
                toneMapped: false,
                side: THREE.DoubleSide,
              })
            );
            mesh.position.set(...pos);
            mesh.scale.set(...scale);
            mesh.lookAt(0, 0, 0);
            envScene.add(mesh);
          };

          addSoftbox(2.5, [0, 4, 5], [6, 3, 1]);
          addSoftbox(2.0, [-4, -1, 2], [6, 2, 1]);
          addSoftbox(2.0, [4, -1, 2], [6, 2, 1]);

          const cubeCam = new THREE.CubeCamera(0.1, 100, cubeRT);
          cubeCam.update(renderer, envScene);
        }
        scene.environment = cubeRT.texture;
        if (prismPhysicalMat) prismPhysicalMat.needsUpdate = true;
      } else {
        scene.environment = null;
        if (prismPhysicalMat) prismPhysicalMat.needsUpdate = true;
      }
    }
    updateEnvironment(isLightColor(settingsRef.current.background));

    // --- RAINBOW MESH ---
    const rainbowMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      toneMapped: false,
      uniforms: {
        time: { value: 0 },
        speed: { value: 1 },
        fade: { value: 0 },
        startRadius: { value: 0 },
        endRadius: { value: 0.5 },
        emissiveIntensity: { value: 0 },
        ratio: { value: 1 },
        bgColor: { value: new THREE.Color(settingsRef.current.background) },
      },
    });

    const rainbowMesh = new THREE.Mesh(planeGeo, rainbowMaterial);
    rainbowMesh.position.set(0, width <= MOBILE_BREAKPOINT ? -0.5 : 0, 0);
    scene.add(rainbowMesh);

    function updateRainbowScale() {
      const z = getZoomScale(width);
      const hyp = Math.hypot(width / z, height / z) + 1.5;
      rainbowMesh.scale.set(hyp, hyp, 1);
    }
    updateRainbowScale();

    // --- TEXTURES & FLARES ---
    const textureLoader = new THREE.TextureLoader();
    let streakTex: THREE.Texture | null = null;
    let glowTex: THREE.Texture | null = null;
    let flareDotTex: THREE.Texture | null = null;
    let flareGlowTex: THREE.Texture | null = null;

    // Flare Group (y)
    const flareGroup = new THREE.Group();
    flareGroup.scale.setScalar(1.25);
    flareGroup.visible = false;
    flareGroup.renderOrder = 10;
    scene.add(flareGroup);

    const flareScales = [0.5, 1.25, 0.75, 1.5, 2.0];
    let flareInstanced: THREE.InstancedMesh | null = null;

    // Ray Group (x)
    const rayGroup = new THREE.Group();
    scene.add(rayGroup);

    // Prism Root Group
    const prismGroup = new THREE.Group();
    prismGroup.position.set(0, width <= MOBILE_BREAKPOINT ? -0.5 : 0, 0);
    scene.add(prismGroup);

    // Ray positions buffer
    const rayStart = new THREE.Vector3(-10, -0.05, 0);
    const rayEnd = new THREE.Vector3(0, 0, 0);
    const rayPositions = new Float32Array(33);
    let rayCount = 0;
    let rayIntersecting = false;

    // Load assets
    Promise.all([
      textureLoader.loadAsync('https://cdn-new.obsidianui.dev/effects/v-prism/lensflare2.png'),
      textureLoader.loadAsync('https://cdn-new.obsidianui.dev/effects/v-prism/lensflare0_bw.jpg'),
      textureLoader.loadAsync('https://cdn-new.obsidianui.dev/effects/v-prism/lensflare3.png'),
      textureLoader.loadAsync('https://cdn-new.obsidianui.dev/effects/v-prism/lensflare0_bw.png'),
      new GLTFLoader().loadAsync('https://cdn-new.obsidianui.dev/effects/v-prism/prism.glb'),
    ]).then(([sTex, gTex, dotTex, fGlowTex, gltf]) => {
      if (isDisposed) return;

      streakTex = sTex;
      glowTex = gTex;
      flareDotTex = dotTex;
      flareGlowTex = fGlowTex;

      // --- BUILD FLARE GROUP (Qx) ---
      const blendProps = {
        transparent: true,
        opacity: 1,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        toneMapped: false,
      };

      flareInstanced = new THREE.InstancedMesh(
        planeGeo,
        new THREE.MeshBasicMaterial({ map: flareDotTex, ...blendProps, opacity: 0.12 }),
        flareScales.length
      );
      flareInstanced.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      flareInstanced.count = flareScales.length;
      flareGroup.add(flareInstanced);

      const flareCore = new THREE.Mesh(
        planeGeo,
        new THREE.MeshBasicMaterial({ map: flareGlowTex, ...blendProps, opacity: 0.75 })
      );
      flareCore.scale.setScalar(0.12);
      flareGroup.add(flareCore);

      const flareHalo = new THREE.Mesh(
        planeGeo,
        new THREE.MeshBasicMaterial({ map: flareGlowTex, ...blendProps, opacity: 0.1 })
      );
      flareGroup.add(flareHalo);

      const flareStreak = new THREE.Mesh(
        planeGeo,
        new THREE.MeshBasicMaterial({ map: streakTex, ...blendProps, opacity: 0.08 })
      );
      flareStreak.rotation.z = Math.PI / 2;
      flareStreak.scale.set(12.5, 20, 1);
      flareGroup.add(flareStreak);

      // --- BUILD INCIDENT BEAM (Uv) ---
      rayDarkMat = new THREE.MeshBasicMaterial({
        map: streakTex,
        color: '#686868',
        opacity: 1.5,
        transparent: false,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        toneMapped: false,
      });

      rayLightMat = new THREE.MeshBasicMaterial({
        color: '#666666',
        depthWrite: false,
        opacity: 0.7,
        toneMapped: false,
        transparent: true,
      });

      rayLineMesh = new THREE.InstancedMesh(planeGeo, rayDarkMat, 100);
      rayLineMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);

      rayGlowMesh = new THREE.InstancedMesh(
        planeGeo,
        new THREE.MeshBasicMaterial({ map: glowTex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false }),
        100
      );
      rayGlowMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      rayGroup.add(rayLineMesh, rayGlowMesh);

      // --- BUILD PRISM (Fx) ---
      const coneObj = gltf.scene.getObjectByName('Cone') as THREE.Mesh;

      // 1. Ray hit proxy: 3-sided cylinder matching Vercel's Prism geometry
      rayHitProxy = new THREE.Mesh(
        new THREE.CylinderGeometry(1, 1, 1, 3, 1),
        new THREE.MeshBasicMaterial()
      );
      rayHitProxy.rotation.set(Math.PI / 2, Math.PI, 0);
      rayHitProxy.scale.setScalar(1.9);
      rayHitProxy.visible = false;
      prismGroup.add(rayHitProxy);

      // 2. Visible crystal prism mesh
      prismPhysicalMat = new THREE.MeshPhysicalMaterial({
        clearcoat: 1,
        clearcoatRoughness: 0,
        roughness: settingsRef.current.roughness,
        toneMapped: false,
        transmission: 1,
        ior: settingsRef.current.ior,
        thickness: settingsRef.current.thickness,
        color: new THREE.Color(settingsRef.current.prismTint),
      });

      prismMesh = new THREE.Mesh(coneObj.geometry, prismPhysicalMat);
      prismMesh.position.set(0, 0, 0.6);
      prismMesh.renderOrder = 10;
      prismMesh.scale.setScalar(2);
      prismGroup.add(prismMesh);

      // Initial ray update
      updateRayPhysics();
    }).catch(err => {
      console.error('Failed to load prism assets:', err);
    });

    // --- RAY PHYSICS & REFLECTION (Lv + Uv + Fx) ---
    const raycaster = new THREE.Raycaster();
    const scratchMat4 = new THREE.Matrix4();
    const scratchPos = new THREE.Vector3();
    const scratchScale = new THREE.Vector3();
    const scratchDir = new THREE.Vector3();
    const scratchExt = new THREE.Vector3();
    const vecA = new THREE.Vector3();
    const vecB = new THREE.Vector3();
    const vecDir = new THREE.Vector3();

    function setRay(start: [number, number, number], end: [number, number, number]) {
      rayStart.set(...start);
      rayEnd.set(...end);
      updateRayPhysics();
    }

    function updateRayPhysics() {
      if (!rayHitProxy) return;

      vecA.copy(rayStart);
      vecB.copy(rayEnd);
      vecDir.subVectors(vecB, vecA).normalize();

      rayCount = 0;
      vecA.toArray(rayPositions, rayCount++ * 3);

      raycaster.set(vecA, vecDir);
      const hits = raycaster.intersectObject(rayHitProxy, false);
      const hit = hits[0];

      if (hit && hit.face) {
        const hitPoint = hit.point;
        const hitNormal = hit.face.normal;

        hitPoint.toArray(rayPositions, rayCount++ * 3);
        rayIntersecting = true;

        // Flare positioning (y)
        const isLight = isLightColor(settingsRef.current.background);
        flareGroup.visible = !isLight && rayIntersecting;
        flareGroup.position.set(hitPoint.x, hitPoint.y, -0.5);
        flareGroup.rotation.set(0, 0, -Math.atan2(vecDir.x, vecDir.y));

        // Snell deflection angle (ve)
        let j = Math.atan2(-hitPoint.y, -hitPoint.x);
        const Z = Math.atan2(hitNormal.y, hitNormal.x);
        const re = j - Z;
        const ve = snellDeflection(re, settingsRef.current.ior) * 6;
        j += ve;

        rainbowMesh.rotation.z = j;
        const W = Math.cos(j);
        const Le = Math.sin(j);
        spotLight.target.position.set(W, Le, 0);
        spotLight.target.updateMatrixWorld();
      } else {
        rayIntersecting = false;
        flareGroup.visible = false;
        scratchExt.copy(vecDir).multiplyScalar(20);
        vecB.addVectors(vecA, scratchExt).toArray(rayPositions, rayCount++ * 3);
      }

      // Update incident beam geometry (Uv) with zero heap allocations
      if (rayLineMesh && rayGlowMesh) {
        const isLight = isLightColor(settingsRef.current.background);
        rayLineMesh.material = isLight && rayLightMat ? rayLightMat : (rayDarkMat || rayLineMesh.material);
        rayGlowMesh.visible = !isLight;

        const stride = isLight ? 1 : 4;
        const beamWidth = isLight ? 0.06 : 8;

        const segs = rayCount - 1;
        for (let i = 0; i < segs; i++) {
          vecA.fromArray(rayPositions, i * 3);
          vecB.fromArray(rayPositions, i * 3 + 3);
          scratchDir.subVectors(vecB, vecA).normalize();

          scratchPos.addVectors(vecA, vecB).multiplyScalar(0.5);
          const rotZ = Math.atan2(scratchDir.y, scratchDir.x);
          const scX = vecB.distanceTo(vecA) * stride;

          scratchMat4.makeRotationZ(rotZ);
          scratchMat4.setPosition(scratchPos);
          scratchScale.set(scX, beamWidth, 1);
          scratchMat4.scale(scratchScale);

          rayLineMesh.setMatrixAt(i, scratchMat4);
        }
        rayLineMesh.count = segs;
        rayLineMesh.instanceMatrix.needsUpdate = true;

        // Joints glow (u)
        scratchMat4.identity();
        scratchMat4.makeScale(0, 0, 0);
        rayGlowMesh.setMatrixAt(0, scratchMat4);

        scratchScale.set(0.75, 0.75, 1);
        for (let i = 1; i < segs; i++) {
          scratchPos.fromArray(rayPositions, i * 3);
          scratchMat4.identity();
          scratchMat4.setPosition(scratchPos);
          scratchMat4.scale(scratchScale);
          rayGlowMesh.setMatrixAt(i, scratchMat4);
        }
        rayGlowMesh.count = segs;
        rayGlowMesh.instanceMatrix.needsUpdate = true;
      }
    }

    // Aim beam at prism from pointer coords (Wh + D)
    function aimRayAt(clientX: number, clientY: number) {
      const rect = container?.getBoundingClientRect();
      if (!rect) return;

      const Q = getZoomScale(width);
      const N = 0;
      const K = width <= MOBILE_BREAKPOINT ? -0.5 : 0;

      const relX = clientX - rect.left;
      const relY = clientY - rect.top;
      const re = (relX - width / 2) / Q;
      const ve = (height / 2 - relY) / Q;

      let W = N - re;
      let Le = K - ve;
      const hyp = Math.hypot(W, Le);
      if (hyp < 0.01) return;
      W /= hyp;
      Le /= hyp;

      const start: [number, number, number] = [N - W * 10, K - Le * 10, 0];
      const end: [number, number, number] = [N, K, 0];
      setRay(start, end);
    }

    // --- POINTER INTERACTIONS (RAF-throttled for zero mouse jank) ---
    let isPointerDown = false;
    let pendingPointerX: number | null = null;
    let pendingPointerY: number | null = null;

    const handlePointerDown = (e: PointerEvent) => {
      if (e.button !== 0 || !e.isPrimary) return;
      isPointerDown = true;
      container.setPointerCapture(e.pointerId);
      aimRayAt(e.clientX, e.clientY);
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (isPointerDown) {
        pendingPointerX = e.clientX;
        pendingPointerY = e.clientY;
      }
    };

    const handlePointerUp = () => {
      isPointerDown = false;
      pendingPointerX = null;
      pendingPointerY = null;
    };

    container.addEventListener('pointerdown', handlePointerDown);
    container.addEventListener('pointermove', handlePointerMove);
    container.addEventListener('pointerup', handlePointerUp);
    container.addEventListener('pointercancel', handlePointerUp);

    // Initial default beam angle
    setTimeout(() => {
      if (!isDisposed) {
        setRay([-10, -0.05, 0], [0, 0, 0]);
      }
    }, 200);

    // --- RESIZE HANDLER ---
    const handleResize = () => {
      if (!container) return;
      width = Math.max(1, container.clientWidth || window.innerWidth);
      height = Math.max(1, container.clientHeight || window.innerHeight);

      renderer.setSize(width, height, false);
      composer.setSize(width, height);

      camera.left = width / -2;
      camera.right = width / 2;
      camera.top = height / 2;
      camera.bottom = height / -2;
      camera.zoom = getZoomScale(width);
      camera.updateProjectionMatrix();

      const centerY = width <= MOBILE_BREAKPOINT ? -0.5 : 0;
      prismGroup.position.set(0, centerY, 0);
      rainbowMesh.position.set(0, centerY, 0);
      updateRainbowScale();
      updateRayPhysics();
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);
    window.addEventListener('resize', handleResize);

    // --- ANIMATION LOOP ---
    let prevTime = performance.now();
    let elapsedTime = 0;
    let lastBgHex = settingsRef.current.background;
    const dummyObj = new THREE.Object3D();

    const animate = (currentTime: number) => {
      animId = requestAnimationFrame(animate);

      // Process throttled pointer updates
      if (pendingPointerX !== null && pendingPointerY !== null) {
        aimRayAt(pendingPointerX, pendingPointerY);
        pendingPointerX = null;
        pendingPointerY = null;
      }

      const delta = Math.min((currentTime - prevTime) / 1000, 0.1);
      prevTime = currentTime;
      elapsedTime += delta;

      // Update rainbow speed and emissive intensity
      const curSettings = settingsRef.current;
      const targetEmissive = rayIntersecting ? curSettings.rainbowGlow : 0;
      rainbowMaterial.uniforms.emissiveIntensity.value = THREE.MathUtils.lerp(
        rainbowMaterial.uniforms.emissiveIntensity.value,
        targetEmissive,
        0.1
      );
      rainbowMaterial.uniforms.time.value += delta * rainbowMaterial.uniforms.speed.value;

      spotLight.intensity = rainbowMaterial.uniforms.emissiveIntensity.value * curSettings.spotIntensity;
      ambientLight.intensity = THREE.MathUtils.lerp(ambientLight.intensity, curSettings.ambientLight, 0.05);

      // Animate floating bokeh flare discs (Qx)
      if (flareGroup.visible && flareInstanced) {
        flareScales.forEach((sc, f) => {
          dummyObj.scale.setScalar(sc);
          dummyObj.position.x = (Math[sc > 1 ? 'sin' : 'cos']((elapsedTime * sc) / 2) * sc) / 8;
          dummyObj.position.y = (Math[sc > 1 ? 'cos' : 'atan'](elapsedTime * sc) * sc) / 5;
          dummyObj.position.z = f === flareScales.length - 1 ? -0.7 : 0;
          dummyObj.updateMatrix();
          flareInstanced?.setMatrixAt(f, dummyObj.matrix);
        });
        flareInstanced.instanceMatrix.needsUpdate = true;
      }

      // Sync settings to prism material
      if (prismPhysicalMat) {
        prismPhysicalMat.roughness = curSettings.roughness;
        prismPhysicalMat.ior = curSettings.ior;
        prismPhysicalMat.thickness = curSettings.thickness;
        prismPhysicalMat.color.set(curSettings.prismTint);
      }

      // Sync background color & react to light mode switch
      const currentBgHex = curSettings.background;
      const isLight = isLightColor(currentBgHex);
      if (lastBgHex !== currentBgHex) {
        lastBgHex = currentBgHex;
        scene.background = new THREE.Color(currentBgHex);
        rainbowMaterial.uniforms.bgColor.value.set(currentBgHex);
        updateEnvironment(isLight);
        updateRayPhysics();
      }

      // Sync point lights
      pointLights.forEach(pl => {
        pl.intensity = curSettings.pointLights;
      });

      // Render: in light mode, bloom is disabled to prevent blowout;
      // in dark mode, postprocessing with BloomEffect renders smoothly
      if (bloomEffect) {
        bloomEffect.intensity = isLight ? 0 : curSettings.bloom;
      }
      composer.render();
    };

    animId = requestAnimationFrame(animate);

    // --- CLEANUP ---
    return () => {
      isDisposed = true;
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('pointerdown', handlePointerDown);
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerup', handlePointerUp);
      container.removeEventListener('pointercancel', handlePointerUp);

      composer.dispose();
      cubeRT?.dispose();
      planeGeo.dispose();
      rainbowMaterial.dispose();
      streakTex?.dispose();
      glowTex?.dispose();
      flareDotTex?.dispose();
      flareGlowTex?.dispose();
      rayDarkMat?.dispose();
      rayLightMat?.dispose();
      prismPhysicalMat?.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative h-full w-full overflow-hidden select-none touch-none ${className}`}
    >
      <canvas ref={canvasRef} aria-label="Interactive glass prism with a movable light beam" className="h-full w-full block" />
    </div>
  );
}

export default VPrism;

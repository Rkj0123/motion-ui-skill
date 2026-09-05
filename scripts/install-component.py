#!/usr/bin/env python3
"""
Motion UI - Component Installer & Resolver
Allows AI agents and developers to search, inspect, and install any catalogued
animated UI component and its dependencies directly into any React/Next.js codebase.
"""

import os
import sys
import json
import shutil
import argparse
from pathlib import Path

SKILL_ROOT = Path(__file__).resolve().parent.parent
CATALOG_PATH = SKILL_ROOT / "catalog.json"

def load_catalog():
    if not CATALOG_PATH.exists():
        print(f"Error: catalog.json not found at {CATALOG_PATH}", file=sys.stderr)
        sys.exit(1)
    with open(CATALOG_PATH, "r", encoding="utf-8") as f:
        return json.load(f)

def list_components(catalog, category=None):
    components = catalog.get("components", {})
    categories = {c["slug"]: c["name"] for c in catalog.get("categories", [])}
    
    print(f"\n📦 Available Motion UI Components (Total: {len(components)})\n")
    
    grouped = {}
    for slug, data in components.items():
        cat = data.get("category", "other")
        if category and cat != category:
            continue
        grouped.setdefault(cat, []).append(data)

    for cat_slug in ["motion", "agents", "blocks"]:
        if cat_slug not in grouped:
            continue
        items = grouped[cat_slug]
        cat_title = categories.get(cat_slug, cat_slug.capitalize())
        print(f"=== {cat_title} ({len(items)} components) ===")
        for item in sorted(items, key=lambda x: x["name"]):
            deps = ", ".join(item.get("dependencies", []))
            print(f"  • {item['slug']:<26} {item['name']:<25} [{deps}]")
        print()

def search_components(catalog, query):
    query = query.lower()
    components = catalog.get("components", {})
    matches = []
    
    for slug, data in components.items():
        name = data.get("name", "").lower()
        desc = data.get("description", "").lower()
        cat = data.get("category", "").lower()
        
        if query in slug or query in name or query in desc or query in cat:
            matches.append(data)
            
    if not matches:
        print(f"No components found matching '{query}'.")
        return
        
    print(f"\nFound {len(matches)} matching component(s):\n")
    for item in matches:
        print(f"• {item['name']} (`{item['slug']}`) [{item['category']}]")
        print(f"  Description: {item['description']}")
        print(f"  Dependencies: {', '.join(item.get('dependencies', []))}")
        print(f"  Doc: {item.get('doc_path', 'N/A')}\n")

def info_component(catalog, slug):
    components = catalog.get("components", {})
    if slug not in components:
        print(f"Error: Component '{slug}' not found in catalog.", file=sys.stderr)
        sys.exit(1)
        
    item = components[slug]
    print(f"\n==========================================")
    print(f"Component: {item['name']} ({item['slug']})")
    print(f"Category:  {item['category']}")
    print(f"Docs:      {item['doc_path']}")
    print(f"==========================================")
    print(f"\nDescription:\n  {item['description']}\n")
    print(f"External Dependencies:\n  {', '.join(item.get('dependencies', []))}\n")
    print("Component Files:")
    for f in item.get("component_files", []):
        print(f"  - {f}")
    print("\nShared Utilities:")
    for f in item.get("util_files", []):
        print(f"  - {f}")
    print()

def safe_path(root, relative):
    path = Path(relative)
    root = root.resolve()
    if path.is_absolute() or ".." in path.parts:
        raise ValueError(f"Path must stay relative to {root}: {relative}")

    candidate = root
    for part in path.parts:
        candidate /= part
        if candidate.is_symlink():
            raise ValueError(f"Symlinks are not allowed in install paths: {relative}")

    target = candidate.resolve()
    if target != root and root not in target.parents:
        raise ValueError(f"Path escapes {root}: {relative}")

    current = target
    while current != root:
        if current.is_symlink():
            raise ValueError(f"Symlinks are not allowed in install paths: {relative}")
        current = current.parent
    return target


def install_component(catalog, slug, dest_dir, include_previews=False, style=None):
    components = catalog.get("components", {})
    if slug not in components:
        print(f"Error: Component '{slug}' not found in catalog.", file=sys.stderr)
        sys.exit(1)
        
    item = components[slug]
    dest = Path(dest_dir).resolve()
    
    files_to_copy = list(item.get("component_files", [])) + list(item.get("util_files", []))
    if include_previews:
        files_to_copy += list(item.get("preview_files", []))
    if style:
        files_to_copy += ["lib/styles.ts", "lib/ease.ts"]

    print(f"🚀 Installing '{item['name']}' into: {dest}\n")
    plan = []
    errors = []
    optional = set(item.get("preview_files", [])) if include_previews else set()
    for rel_path in files_to_copy:
        try:
            src_file = safe_path(SKILL_ROOT, rel_path)
            target_file = safe_path(dest, rel_path)
        except ValueError as exc:
            errors.append(str(exc))
            continue

        if not src_file.is_file():
            if rel_path in optional:
                print(f"  ⚠️ Warning: Source file {src_file} missing, skipping.")
            else:
                errors.append(f"Required source file missing: {src_file}")
            continue
        plan.append((rel_path, src_file, target_file))

    if errors:
        for error in errors:
            print(f"Error: {error}", file=sys.stderr)
        sys.exit(1)

    copied = 0
    for rel_path, src_file, target_file in plan:
        target_file.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(src_file, target_file)
        print(f"  ✓ Copied: {rel_path}")
        copied += 1

    print(f"\n✨ Successfully copied {copied} file(s) to {dest}!")
    
    # Check dependencies
    deps = item.get("dependencies", [])
    if deps:
        deps_str = " ".join(deps)
        print("\n📦 Required External Dependencies:")
        print(f"   npm install {deps_str}")
        print(f"   # or: pnpm add {deps_str}")
        print(f"   # or: yarn add {deps_str}")
        print(f"   # or: bun add {deps_str}")
        
    print(f"\n📖 Complete Guide & Examples: {item['doc_path']}\n")

def list_styles():
    styles = [
        ("minimal", "Clean monochrome, flat surfaces, crisp 1px borders, subtle transitions (shadcn/ui style)"),
        ("origin", "High-craft, micro-elevation, subtle specular inner borders, dark luxury (Coss / Cal.com style)"),
        ("enterprise", "High information density, compact spacing, sharp geometry, data grids (KeenThemes ReUI style)"),
        ("glow", "Luminous radial halos, spotlight cursor highlights, cyan/purple beams (ibelick style)"),
        ("ios", "Fluid squircle curves, translucent blurred glass, bouncy springs, haptics (Expo / Apple style)"),
        ("brutalist", "Bold 2px outlines, high-contrast flat fills, hard 4px offset drop-shadows (Neo-brutalist)"),
    ]
    print("\n🎨 Motion UI Aesthetic Style Presets:\n")
    for name, desc in styles:
        print(f"  • {name:<12} - {desc}")
    print("\nUse `stylePreset='<name>'` on components that support it, or import tokens from `@/lib/styles`.\n")

def main():
    parser = argparse.ArgumentParser(description="Motion UI Component Resolver & Installer")
    parser.add_argument("slug", nargs="?", help="Component slug to inspect or install")
    parser.add_argument("--dest", "-d", default=".", help="Target destination directory (default: current directory)")
    parser.add_argument("--list", "-l", action="store_true", help="List all available components")
    parser.add_argument("--category", "-c", choices=["motion", "agents", "blocks"], help="Filter listing by category")
    parser.add_argument("--search", "-s", help="Search components by keyword")
    parser.add_argument("--info", "-i", action="store_true", help="Show detailed information about a component")
    parser.add_argument("--with-previews", action="store_true", help="Also copy preview and demo files")
    parser.add_argument("--style", choices=["minimal", "origin", "enterprise", "glow", "ios", "brutalist"], help="Also copy the shared style token helper for the selected preset")
    parser.add_argument("--list-styles", action="store_true", help="List all available aesthetic style presets")

    args = parser.parse_args()
    catalog = load_catalog()

    if args.list_styles:
        list_styles()
    elif args.list:
        list_components(catalog, category=args.category)
    elif args.search:
        search_components(catalog, args.search)
    elif args.slug:
        if args.info:
            info_component(catalog, args.slug)
        else:
            install_component(
                catalog,
                args.slug,
                args.dest,
                include_previews=args.with_previews,
                style=args.style,
            )
            if args.style:
                print(f"🎨 Included style preset tokens for '{args.style}'. Use stylePreset on supported components or getStylePreset() for custom wrappers.")
    else:
        parser.print_help()

if __name__ == "__main__":
    main()

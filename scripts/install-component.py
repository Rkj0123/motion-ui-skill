#!/usr/bin/env python3
"""
Motion UI - Component Installer & Resolver
Allows AI agents and developers to search, inspect, and install any of the 95
animated UI components and their dependencies directly into any React/Next.js codebase.
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

def install_component(catalog, slug, dest_dir, include_previews=False):
    components = catalog.get("components", {})
    if slug not in components:
        print(f"Error: Component '{slug}' not found in catalog.", file=sys.stderr)
        sys.exit(1)
        
    item = components[slug]
    dest = Path(dest_dir).resolve()
    
    files_to_copy = list(item.get("component_files", [])) + list(item.get("util_files", []))
    if include_previews:
        files_to_copy += list(item.get("preview_files", []))

    print(f"🚀 Installing '{item['name']}' into: {dest}\n")
    copied = 0
    for rel_path in files_to_copy:
        src_file = SKILL_ROOT / rel_path
        target_file = dest / rel_path
        
        if not src_file.exists():
            print(f"  ⚠️ Warning: Source file {src_file} missing, skipping.")
            continue
            
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

def main():
    parser = argparse.ArgumentParser(description="Motion UI Component Resolver & Installer")
    parser.add_argument("slug", nargs="?", help="Component slug to inspect or install")
    parser.add_argument("--dest", "-d", default=".", help="Target destination directory (default: current directory)")
    parser.add_argument("--list", "-l", action="store_true", help="List all available components")
    parser.add_argument("--category", "-c", choices=["motion", "agents", "blocks"], help="Filter listing by category")
    parser.add_argument("--search", "-s", help="Search components by keyword")
    parser.add_argument("--info", "-i", action="store_true", help="Show detailed information about a component")
    parser.add_argument("--with-previews", action="store_true", help="Also copy preview and demo files")

    args = parser.parse_args()
    catalog = load_catalog()

    if args.list:
        list_components(catalog, category=args.category)
    elif args.search:
        search_components(catalog, args.search)
    elif args.slug:
        if args.info:
            info_component(catalog, args.slug)
        else:
            install_component(catalog, args.slug, args.dest, include_previews=args.with_previews)
    else:
        parser.print_help()

if __name__ == "__main__":
    main()

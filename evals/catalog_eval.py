#!/usr/bin/env python3
"""Periodic catalog coverage evaluation with no third-party dependencies."""

import json
import re
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent


def imported_packages(text):
    specs = re.findall(r'(?:from|import) [\"\']([^\"\']+)[\"\']', text)
    return {
        "/".join(spec.split("/")[:2]) if spec.startswith("@") else spec.split("/")[0]
        for spec in specs
        if not spec.startswith((".", "@/"))
    }


def main():
    components = json.loads((ROOT / "catalog.json").read_text(encoding="utf-8"))["components"]
    path_hits = 0
    dependency_misses = []
    for slug, item in components.items():
        source_paths = item.get("component_files", []) + item.get("util_files", [])
        paths = source_paths + item.get("preview_files", [])
        paths.append(item["doc_path"])
        path_hits += sum((ROOT / path).is_file() for path in paths)
        source = "\n".join((ROOT / path).read_text(encoding="utf-8", errors="ignore") for path in source_paths if (ROOT / path).is_file())
        missing = sorted(imported_packages(source) - set(item.get("dependencies", [])))
        if missing:
            dependency_misses.append({"slug": slug, "missing": missing})

    expected_paths = sum(
        len(item.get("component_files", []))
        + len(item.get("util_files", []))
        + len(item.get("preview_files", []))
        + 1
        for item in components.values()
    )
    metrics = {
        "components": len(components),
        "catalog_path_coverage": path_hits / expected_paths if expected_paths else 1,
        "dependency_coverage": 1 - len(dependency_misses) / len(components) if components else 1,
        "dependency_misses": dependency_misses,
    }
    print(json.dumps(metrics, indent=2))
    if path_hits != expected_paths or dependency_misses:
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())

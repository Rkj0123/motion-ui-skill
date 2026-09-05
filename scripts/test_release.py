#!/usr/bin/env python3
"""Small dependency-free release checks for the skill package and installer."""

import importlib.util
import contextlib
import io
import json
import os
import subprocess
import sys
import tempfile
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent
INSTALLER = ROOT / "scripts" / "install-component.py"
VERIFY = ROOT / "scripts" / "verify_skill.py"


def load_installer():
    spec = importlib.util.spec_from_file_location("motion_ui_installer", INSTALLER)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def run_installer(*args):
    return subprocess.run(
        [sys.executable, str(INSTALLER), *args],
        cwd=ROOT,
        capture_output=True,
        text=True,
    )


def expect_exit_one(installer, catalog, slug, dest):
    try:
        installer.install_component(catalog, slug, dest)
    except SystemExit as error:
        if error.code == 1:
            return
    raise AssertionError("installer accepted an invalid catalog path")


def main():
    installer = load_installer()
    with tempfile.TemporaryDirectory() as temp:
        destination = Path(temp) / "install"
        result = run_installer("resizable-panel", "--style", "glow", "--dest", str(destination))
        if result.returncode != 0:
            raise AssertionError(result.stderr)
        for relative in (
            "components/motion/resizable-panel.tsx",
            "lib/styles.ts",
            "lib/ease.ts",
        ):
            if not (destination / relative).is_file():
                raise AssertionError(f"missing installed file: {relative}")
        if "Included style preset tokens for 'glow'" not in result.stdout:
            raise AssertionError("style selection was not reported")

        catalog = json.loads((ROOT / "catalog.json").read_text(encoding="utf-8"))["components"]
        all_destination = Path(temp) / "all-components"
        with contextlib.redirect_stdout(io.StringIO()), contextlib.redirect_stderr(io.StringIO()):
            for slug in catalog:
                installer.install_component(catalog={"components": catalog}, slug=slug, dest_dir=all_destination, include_previews=True)

        sentinel = Path(temp) / "sentinel.txt"
        sentinel.write_text("keep", encoding="utf-8")
        linked = destination / "components/motion/metric-card.tsx"
        linked.parent.mkdir(parents=True, exist_ok=True)
        os.symlink(sentinel, linked)
        catalog = {
            "unsafe": {
                "name": "Unsafe",
                "component_files": ["components/motion/metric-card.tsx"],
                "util_files": [],
                "preview_files": [],
                "doc_path": "references/motion/metric-card.md",
                "dependencies": [],
            },
            "traversal": {
                "name": "Traversal",
                "component_files": ["../outside.tsx"],
                "util_files": [],
                "preview_files": [],
                "doc_path": "references/motion/metric-card.md",
                "dependencies": [],
            },
        }
        expect_exit_one(installer, {"components": catalog}, "unsafe", destination)
        expect_exit_one(installer, {"components": catalog}, "traversal", Path(temp) / "other")
        if sentinel.read_text(encoding="utf-8") != "keep":
            raise AssertionError("installer followed a destination symlink")

    for args in ([str(VERIFY)], ["-O", str(VERIFY)]):
        result = subprocess.run([sys.executable, *args], cwd=ROOT, capture_output=True, text=True)
        if result.returncode != 0:
            raise AssertionError(result.stderr)

    if b"\r" in (ROOT / "SKILL.md").read_bytes():
        raise AssertionError("SKILL.md contains carriage returns")
    print("Release checks: PASS")


if __name__ == "__main__":
    main()

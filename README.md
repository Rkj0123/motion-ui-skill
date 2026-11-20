# Motion UI

617 animated React and Next.js components, built with Motion and Tailwind CSS, MIT licensed. Copy the source, or run `npx motion-ui-skill`.

**Live site:** https://blacknest.dev/motion/

[![MIT License](https://img.shields.io/badge/license-MIT-blue)](./LICENSE) [![npm version](https://img.shields.io/npm/v/motion-ui-skill)](https://www.npmjs.com/package/motion-ui-skill) [![GitHub stars](https://img.shields.io/github/stars/Rkj0123/motion-ui-skill)](https://github.com/Rkj0123/motion-ui-skill)

| Category | Count | What is in it |
| :--- | ---: | :--- |
| Motion | 194 | Buttons, inputs, overlays, navigation, loaders |
| Agent surfaces | 28 | Messages, prompt composers, approvals, streaming responses |
| Blocks | 76 | Command palettes, boards, calendars, swaps, schedulers |
| Craft | 319 | 3D controls, device mockups, backgrounds, tables, widgets |

Every component is a `.tsx` file in this repository with a markdown guide
beside it. Nothing is fetched at runtime and there is no package to depend
on: you copy the files you want into your project and they are yours to edit.

## Install

### As a skill, for coding agents

```bash
npx motion-ui-skill
```

Detects the agent harness, copies the skill into place, and checks the
upstream version each time the skill activates.

Works with Claude Code, Cursor, Windsurf, Codex, Antigravity, OpenCode and
GitHub Copilot. For Codex:

```bash
npx skills add Rkj0123/motion-ui-skill --skill motion-ui --agent codex --copy -y
```

Or copy the repository into a harness that scans for skills:

```bash
git clone https://github.com/Rkj0123/motion-ui-skill.git .agents/skills/motion-ui
```

Update an installed skill:

```bash
npx motion-ui-skill update
```

### As components, in your project

```bash
npm install motion@^13.1.0 clsx tailwind-merge lucide-react
```

Then copy the components you need:

```bash
python scripts/install-component.py spotlight-card --dest ./src
```

The installer copies the component, the utilities it imports, and prints the
`npm install` command for any dependency you are missing. A few components
need more: `react-dom`, `shiki`, `lenis`, `matter-js`, `canvas-confetti`,
`next-themes`, `@tanstack/react-virtual` or `@paper-design/shaders-react`.
The catalogue lists the dependencies for every component.

The Node CLI does the same thing and works without Python:

```bash
npx motion-ui-skill list                    # every component
npx motion-ui-skill search "kanban"         # search by name or description
npx motion-ui-skill add spotlight-card --dest ./src
```

### Installer options

| Flag | Effect |
| :--- | :--- |
| `--dest <dir>` | Target directory (default `./src`) |
| `--list` | List every component |
| `--category <name>` | Filter the listing by `motion`, `agents` or `blocks` |
| `--search <term>` | Search names and descriptions |
| `--info` | Show a component's files and dependencies |
| `--with-previews` | Also copy the preview and demo files |
| `--style <preset>` | Also copy the shared style tokens |
| `--list-styles` | List the style presets |

Six presets share one set of token names: `minimal`, `origin`, `enterprise`, `glow`, `ios`, and `brutalist`. `--style` copies [`lib/styles.ts`](./lib/styles.ts). It does not rewrite class names. The token matrix is in [`references/guides/style-presets.md`](./references/guides/style-presets.md).

## Using a component

Components import from `@/components/...` and `@/lib/...`, so the alias has
to point at your project root:

```ts
// vite.config.ts
export default defineConfig({
  resolve: { alias: { "@": path.resolve(__dirname, "./") } },
})
```

They are styled with Tailwind colour tokens: `background`, `foreground`,
`card`, `muted`, `primary`, `border` and `ring`. Define them once in your
global stylesheet. The minimal preset in
[`lib/styles.ts`](./lib/styles.ts) is a working set of values.

```tsx
import { TiltCard } from "@/components/motion/tilt-card";

export function Example() {
  return (
    <TiltCard className="w-[280px] border border-border bg-card p-8">
      <h3 className="text-2xl font-semibold text-foreground">Tilt me</h3>
    </TiltCard>
  );
}
```

Every component honours `prefers-reduced-motion` and drops hover-only
transforms on touch devices. Shared springs and curves live in [`lib/ease.ts`](./lib/ease.ts).

## Catalogue

The full component list is in [SKILL.md](./SKILL.md#component-catalog-617-components) and [catalog.json](./catalog.json). `catalog.json` holds the same entries in machine-readable form, including every component's file list, dependencies and guide path.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md). Read [the component and preview contract](references/component-preview-contract.md) before adding a catalogue entry.

## License

[MIT](./LICENSE)

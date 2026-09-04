# Install Motion UI in Codex

Motion UI is a local Codex skill package. It is not an npm library and does not need a server, API key, or MCP connection.

## Project-scoped install

Run this from the root of the project where Codex will work:

```bash
npx skills add Rkj0123/motion-ui-skill --skill motion-ui --agent codex --copy -y
```

The command creates `.agents/skills/motion-ui/SKILL.md` and copies the component source, references, catalog, and installer into that project.

Verify the installation:

```bash
npx skills list --json
```

The result should contain `motion-ui` with `scope: "project"` and an agent list containing `Codex`.

Start a new Codex task after installing, then invoke it explicitly when needed:

```text
Use $motion-ui to build the requested interface. Read the local catalog and component guide before writing code.
```

## Global install

Use this when every project on the machine should see the skill:

```bash
npx skills add Rkj0123/motion-ui-skill --skill motion-ui --agent codex --global --copy -y
```

Verify global skills with:

```bash
npx skills list --global --agent codex --json
```

## Manual install

If the skills CLI is unavailable, install into Codex's global skill directory:

```bash
mkdir -p ~/.codex/skills
git clone https://github.com/Rkj0123/motion-ui-skill.git ~/.codex/skills/motion-ui
```

Reload Codex or start a new task. The skill entrypoint is `~/.codex/skills/motion-ui/SKILL.md`.

## Troubleshooting

- If the skill is not listed, run the command from the project root and confirm that `.agents/skills/motion-ui/SKILL.md` exists.
- If the skill is listed but not active, start a new Codex task and write `Use $motion-ui ...` in the first message.
- Use `--global` only when project-scoped installation is not enough.
- Review the package before granting an agent permission to run its installer or copy files.

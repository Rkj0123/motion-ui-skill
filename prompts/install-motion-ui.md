# AI-agent installation prompt

Copy and paste this prompt into Codex, Claude Code, Cursor, Windsurf, or another agent that can run terminal commands:

```text
Install the Motion UI skill from https://github.com/Rkj0123/motion-ui-skill for this project.

1. Detect the current coding agent and use the skills CLI if it is available.
2. Install the skill project-scoped with the equivalent of:
   npx skills add Rkj0123/motion-ui-skill --skill motion-ui --agent <current-agent> --copy -y
3. If the current agent is Codex, use --agent codex.
4. Do not install globally unless I explicitly ask.
5. Verify that .agents/skills/motion-ui/SKILL.md exists and that the installed skill is listed.
6. Report the install path and stop. Do not change application source files.
```

For a manual Codex install, use the commands in [`references/codex-install.md`](../references/codex-install.md).

---
name: prepare
description: Load all project memories, verify Playwright readiness, and build a mental map of the codebase for deep reading sessions.
user_invocable: true
---

# Prepare for deep codebase reading

Run these steps to warm up context before a session that involves reading and comparing many project files.

## 1. Load all memories

Read every memory file in the memory directory so prior context (user prefs, feedback, project state, references) is active:

```
C:/Users/Andrew M/.claude/projects/d--Documents-Dropbox-Teaching-424-UX-UI-Skeuomorphic-Echoes/memory/
```

Read all `.md` files in that directory (excluding MEMORY.md index).

## 2. Verify Playwright is ready

Run a dry-run check so Playwright doesn't block later:

```bash
cd examples/museum-kiosk/app && npx playwright test --list
```

Report how many tests are registered. If dependencies are missing, run `npx playwright install` and `npm install`.

## 3. Build codebase map

Glob the full source tree and summarize the structure:

- `examples/museum-kiosk/app/src/**/*.vue` — all Vue components
- `examples/museum-kiosk/app/src/**/*.ts` — all TypeScript modules
- `examples/museum-kiosk/app/src/**/*.css` — all stylesheets
- `docs/briefs/**/*` — assignment briefs
- `examples/museum-kiosk/docs/**/*` — reference markdown

Print a compact tree of what exists, grouped by area (shared, research, prototype, docs).

## 4. Report ready

Summarize:
- Number of memories loaded
- Playwright status (tests found / ready)
- File counts by area
- Any issues or staleness detected

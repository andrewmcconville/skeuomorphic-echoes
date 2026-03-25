---
name: code-review
description: Deep analysis code review of all project files — docs, styles, components, scripts — checking DRY/SOLID principles within and across files.
user_invocable: true
---

# Deep Code Review — DRY/SOLID Analysis

Perform a comprehensive code review of the entire project, reading every file and comparing files against each other for violations of DRY and SOLID principles.

## 1. Prepare context

Run `/prepare` first to load memories, verify Playwright, and build the codebase map.

## 2. Read all source files

Read every file in these areas (use parallel reads where possible):

### Vue components
- `examples/museum-kiosk/app/src/shared/**/*.vue`
- `examples/museum-kiosk/app/src/research/**/*.vue`
- `examples/museum-kiosk/app/src/hi-fi-prototype/**/*.vue`

### TypeScript modules
- `examples/museum-kiosk/app/src/shared/**/*.ts`
- `examples/museum-kiosk/app/src/research/**/*.ts`
- `examples/museum-kiosk/app/src/hi-fi-prototype/**/*.ts`

### Stylesheets
- `examples/museum-kiosk/app/src/**/*.css`

### HTML entry points
- `examples/museum-kiosk/app/*.html`

### Docs and briefs
- `docs/briefs/**/*`
- `examples/museum-kiosk/docs/**/*.md`

### Config files
- `examples/museum-kiosk/app/vite.config.ts`
- `examples/museum-kiosk/app/tsconfig*.json`
- `examples/museum-kiosk/app/package.json`

## 3. Within-file analysis

For each file, check:

- **Single Responsibility**: Does this file/component do one thing well, or is it handling unrelated concerns?
- **Dead code**: Unused imports, variables, CSS rules, unreachable branches?
- **Magic values**: Hard-coded colors, sizes, or strings that should be design tokens or constants?
- **Consistency**: Does the file follow project conventions (BEM, OKLCH colors, spacing tokens, IBM Plex fonts)?

## 4. Cross-file analysis (the critical part)

Compare files against each other systematically:

### DRY violations
- **Duplicated CSS**: Same or near-identical rule blocks across multiple `.vue` `<style>` blocks or `.css` files. Candidates for extraction to `step-shared.css` or shared tokens.
- **Duplicated markup patterns**: Similar `<template>` structures across views that could be shared components.
- **Duplicated logic**: Repeated TypeScript patterns across views that could be composables or utility functions.
- **Duplicated data**: Content or configuration repeated across `.ts` data files, `.vue` files, or `.md` docs.
- **Doc/code drift**: Content in `examples/museum-kiosk/docs/*.md` that doesn't match corresponding view implementations.

### SOLID violations
- **Single Responsibility**: Components or modules handling multiple unrelated concerns.
- **Open/Closed**: Places where adding a new step or feature requires modifying existing code instead of extending.
- **Liskov Substitution**: Shared components that behave inconsistently depending on context.
- **Interface Segregation**: Components receiving props they don't use, or data modules exporting unused items.
- **Dependency Inversion**: Hard-coded dependencies where injection or abstraction would be cleaner.

## 5. Report findings

Organize the report as a single structured summary:

### Format
```
## DRY Violations

### [Severity: High/Medium/Low] — Short title
- **Files**: list of affected files with line references
- **What**: describe the duplication
- **Suggested fix**: how to consolidate

## SOLID Violations

### [Severity: High/Medium/Low] — Short title
- **Files**: list of affected files with line references
- **Principle**: which SOLID principle is violated
- **What**: describe the issue
- **Suggested fix**: how to refactor

## Convention Violations

### [Severity: High/Medium/Low] — Short title
- **Files**: list of affected files with line references
- **Convention**: which project convention is violated
- **Suggested fix**: how to align

## Doc/Code Drift

### Short title
- **Doc**: path to markdown file
- **Code**: path to vue/ts file
- **What**: describe the mismatch
```

Sort findings by severity (High first). Be specific — include file paths and line numbers. Only flag real issues, not stylistic nitpicks.

## 6. Confirm before fixing

Present the full report and **wait for user approval** before making any changes. The user may want to address all issues in one pass or prioritize selectively.

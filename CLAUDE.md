# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

**เข็มทิศ (Kem Tid)** is a Thai single-page web app that helps high-school students prepare for Thailand's TCAS university admission exams, with a specific focus on Electrical/Computer/AI engineering admission at the "3 พระจอมฯ" universities (KMUTT, KMITL, KMUTNB). It ships as a folder (zipped for distribution), not a single file.

**Read `DEVLOG.md` before making any non-trivial change.** It is the authoritative project brief (written for both humans and AI continuing the work) and is far more detailed than this file — full data schemas, per-subject content status, verified reference sources, and a running changelog. This file only covers what's needed to start working productively; DEVLOG.md §1–13 has everything else, including *why* things are the way they are.

## Architecture

- **No build step, no `package.json`, no `node_modules`, no bundler.** `index.html` is opened directly in a browser (even via `file://`, double-click).
- **Tailwind CSS via CDN** (`<script src="https://cdn.tailwindcss.com">`) — intentional, since this is a real file opened from `file://`, not a sandboxed Artifact.
- **Content is split from logic:**
  - `index.html` — all HTML/CSS/JS logic, in one `<script>` at the end wrapped in an IIFE (`(function () { "use strict"; ... })();`). Also holds non-subject data declared near the top of that script: `subjects[]`, `topicMap{}`, `officialLinks[]`, `rounds[]`, `examDates[]`, `compareData[]`, `news[]`, `majors[]`.
  - `data/{subjectId}.js` × 8 files — one per exam subject (`tpat3`, `alevel-math1`, `alevel-phys`, `alevel-chem`, `alevel-math2`, `alevel-eng`, `tgat`, `enrichment`). Each pushes into a shared global: `window.KEMTID_DATA.lessons.push(...)` / `window.KEMTID_DATA.quizzes.push(...)`.
  - These are loaded via plain `<script src="data/xxx.js">` tags, **not `fetch()`** — `fetch()` of local JSON is blocked by CORS under `file://`, but `<script src>` isn't. The 8 data-file `<script>` tags **must stay ordered before** the main script tag, since the main script reads `window.KEMTID_DATA` synchronously at top level (`const lessons = window.KEMTID_DATA.lessons;`).
- **Vanilla JS, no framework.** Rendering is done by building HTML strings and assigning `.innerHTML`.
- **Persistence is `localStorage` only** — no backend, no server, no auth. State key is `wongwian_state_v1` (a legacy name from before the project was renamed from "วงเวียน" to "เข็มทิศ" — intentionally not renamed, since that would silently orphan existing users' saved progress without a migration path).

### CSS custom-property + Tailwind opacity gotcha

Colors are controlled via CSS custom properties in `:root`/`html.dark`, referenced by `tailwind.config`. Any color that needs to support an opacity modifier (`bg-accent/10`, `border-good/40`, etc.) **must** be declared as an `"R G B"` triplet (space-separated, not hex) in a `--x-rgb` custom property, then wired up as `rgb(var(--x-rgb) / <alpha-value>)` in `tailwind.config`. A plain hex custom property (`var(--accent)`) silently breaks the opacity modifier — this has bitten the project multiple times. Colors already using this pattern: `accent`, `accent2`, `good`, `warn`, `bad`, `neutral`, `surface`. Follow this pattern for any new color that needs `/opacity`.

## Commands

There is no test framework, linter, or build tool. "Testing" means syntax-checking with Node and running a mock-DOM harness that actually executes the app's data-loading and render logic — see DEVLOG.md §10 for the full harness script. In short, after **every** edit to `index.html` or any `data/*.js` file:

```bash
# 1. Syntax-check each data file
for f in data/*.js; do node --check "$f" && echo "OK: $f"; done

# 2. Extract index.html's main <script> (the one containing "const examDates" —
#    the file has multiple <script> tags: Tailwind CDN, 8x data/*.js placeholders, main logic)
#    and syntax-check it too. See DEVLOG.md §10.1 for the exact extraction snippet.

# 3. Run everything end-to-end under a minimal mocked DOM (document.getElementById etc.),
#    loading data/*.js in the same order index.html declares them, then the main script
#    with a window.__DUMP injection right before `function loadState()` to pull out real
#    in-memory lessons/quizzes/topicMap. Assert: total lesson/quiz/question counts, zero
#    duplicate ids, zero missing required fields, correct choices-per-question count for
#    each subject's standard. Never hand-count — this project has hand-counted wrong before.
```

There's no committed harness file in the repo (it's rebuilt in a scratch location per DEVLOG.md §10.1) — read that section for the literal script to reuse instead of writing one from scratch.

After the Node checks pass, open `index.html` directly in a browser to visually confirm — the Node checks catch code errors, not visual/UX regressions.

## Critical rules (see DEVLOG.md §2 for the full list with reasoning)

1. **Never present fabricated data as real.** `compareData[]` (university score-comparison table) is still intentionally mock and must stay flagged as such in the UI. `rounds[]`, `examDates[]`, and `news[]` are real, researched, cross-checked data — keep their source citations and "verify with official sources" disclaimers intact.
2. **Quiz content is original practice material, not leaked real exam questions** — but must match the *style* of real exam questions from reputable Thai tutoring institutes (verified via WebSearch/WebFetch against sources like SmartMathPro, AppliedPhysics, webythebrain), not just match the official Test Blueprint's structure/category counts. Structural correctness alone was found to be insufficient (see DEVLOG.md §6.2).
3. **Never guess or fabricate official links** — every URL in `officialLinks[]` was verified via WebSearch before being added.
4. **Don't invent unverifiable content.** This is why "มิติสัมพันธ์" (diagrammatic/spatial reasoning) sections have no home-grown questions — they need visual/rotated-diagram items this environment can't visually QA (no screenshot tooling). External links are used instead (`topicMap` status `'external'`).
5. **`topicMap{}` coverage status must be honest** — `'ready'` / `'partial'` / `'none'` / `'external'`, never overstate coverage.
6. **Trace impact 360° before any edit, verify after every one (mandatory, no exceptions).** Before editing, grep the whole project for every call site / field reference / id match affected — not just the file being edited. After editing, run the full Node verification (not just "no error thrown") and re-check every call site identified during the trace, not just the one directly touched. See DEVLOG.md §10.0–10.1.

## Content conventions (see DEVLOG.md §11 for the full walkthrough)

- New quiz sets/lessons go into `data/{subjectId}.js` only — never add subject content directly to `index.html`.
- **Grep the entire project for existing ids before assigning a new one** — id collisions across files are not caught until the verification harness runs, and have happened before from only checking the first/last entries in a file.
- `subjectId` on any quiz/lesson must match both the `subjects[]` id in `index.html` and the filename being edited.
- Per-subject multiple-choice option count is **not uniform** — verify against DEVLOG.md §7/§12.1 per subject (e.g., TPAT3/TGAT1/TGAT3/A-Level English use 4 choices; A-Level Physics/Chem/Math1/Math2/TGAT2 use 5). Never assume.
- When fetching Thai dates via WebFetch, **never trust its พ.ศ.→ค.ศ. year conversion** — it has been observed to convert the same source inconsistently across calls. Ask for the original พ.ศ. year and convert manually (ค.ศ. = พ.ศ. − 543), then cross-check against 2+ independent sources.

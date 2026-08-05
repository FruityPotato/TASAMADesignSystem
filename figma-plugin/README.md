# TASAMA Design System → Figma

A Figma plugin that builds the TASAMA design system into a Figma file: variables,
text/effect/gradient styles, 24 icon components, and 7 component sets, plus a
foundations documentation page.

Everything is generated from the same source of truth as the code library —
`tokens/*.css` and `components/**` in the parent project.

## Install & run

1. Open the **Figma desktop app** (plugin development requires desktop, not the browser).
2. Open or create the file you want the system built into.
3. Menu → **Plugins → Development → Import plugin from manifest…**
4. Choose `figma-plugin/manifest.json` from this folder.
5. Run **Plugins → Development → TASAMA Design System Builder**.
6. Tick what you want and press **Build design system**.

The first run takes roughly 20–40 seconds — most of it importing icon geometry.

### Requirements

- **Montserrat** must be available in the file. It ships with Figma as a Google
  font; if it is missing the plugin stops with a clear message rather than
  silently substituting a different typeface.
- Editor access to the target file.

## What it creates

### Variables — 3 collections, 98 variables

| Collection | Contents |
|---|---|
| `TASAMA · Primitives` | 45 colors — brand core, blue/gold/sky/orange/green ramps, 12-step neutral |
| `TASAMA · Semantic` | 27 tokens — text, surface, border, status, interaction. 22 alias primitives; 5 are literals (they have no indirection in the CSS either) |
| `TASAMA · Scale` | 26 numbers — spacing (4px grid), radii, control heights, container widths |

The semantic layer aliases the primitive layer, matching how `colors.css` uses
`var(--tasama-blue)` rather than repeating hexes. Retheming means editing the
primitives.

### Styles

- **13 text styles** — Display, H1–H4, Title, Body Large/Medium/Small, Body Small Semi,
  Caption, Label/Uppercase, Label/Overline. All Montserrat, with the line heights
  and tracking from `typography.css`.
- **6 effect styles** — `Elevation/xs…xl` plus `Elevation/inner`. Blue-tinted
  (`rgba(16,6,158,·)`), never neutral grey — this is a brand rule, and the test
  suite asserts it.
- **4 paint styles** — `Gradient/Brand`, `Gradient/Brand Glow`, `Gradient/Sky`,
  `Gradient/Gold Hairline`.

### Icons — 24 components

Imported as real vectors from `components/core/iconData.js`, normalised to a
24×24 frame on the `TASAMA · Icons` page.

### Components — 7 sets, 128 variants

| Set | Variants | Properties |
|---|---|---|
| Button | 15 | Variant (primary/secondary/ghost/inverse/link) × Size (sm/md/lg) |
| Badge | 72 | Tone (6) × Variant (solid/soft/outline/number) × Size (3) |
| Stat | 15 | Variant (plain/card/brand) × Tone (5) |
| Card | 4 | elevated / outline / subtle / brand |
| TeamCard | 3 | plain / card / brand |
| ProgressBar | 15 | Tone (5) × Size (3) |
| Divider | 3 | subtle / gold / on-brand |

Plus a standalone `Eyebrow` component. Surfaces and borders are **bound to the
semantic variables** where possible, so components follow token edits instead of
carrying frozen hexes.

## Development

```bash
node build.js        # inlines iconData.js into a single code.js
node test/run.js     # runs code.js against a mock Figma API
```

`src/builder.js` is the source; `code.js` is generated — don't edit it directly.

`test/mock-figma.js` is a deliberately strict stand-in for the Plugin API. It
reproduces the constraints that actually fail in real Figma — setting
`characters` before the font loads, `layoutSizingHorizontal=FILL` under a parent
whose matching axis is not `FIXED`, `layoutWrap=WRAP` on a non-horizontal frame,
and `combineAsVariants` with inconsistent variant property names — so the suite
catches those before you get to Figma. It does not replace running the plugin
once in a real file.

Re-running the plugin is idempotent: it looks foundations up by name and updates
them in place rather than creating duplicates. Component sets and icons are
appended, so delete the old page first if you want a clean rebuild.

## Why a plugin and not the REST API

Figma's REST API cannot do this job. There is no endpoint that creates a file
(`POST /v1/files` returns 404 — the route does not exist), and none that creates
frames, components, or styles. The Variables REST API can write tokens, but only
into an existing file and only on an Enterprise plan. The Plugin API is the only
interface that can construct a design system, and it runs from the desktop app.

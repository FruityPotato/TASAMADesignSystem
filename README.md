# TASAMA Design System

Brand and UI design system for **TASAMA** (تسامى لخدمات الأعمال — "Business Services"), **a PIF company**.

Design tokens, React components, the 24-glyph brand icon set, and a Figma plugin that builds the whole system into a Figma file.

- **[AGENTS.md](AGENTS.md)** — rules and quick-start for AI agents. Start here.
- **[BRAND.md](BRAND.md)** — full brand rationale: voice, visual foundations, iconography, caveats.
- **[figma-plugin/](figma-plugin/)** — build the system into Figma.

---

## Using this with an AI agent

The repo is written to be handed to a coding agent. Three ways, depending on your tool:

### 1. Claude Code — as a skill

`SKILL.md` at the root is an Agent Skills manifest. Clone the repo into your skills directory and it becomes invocable as `/tasama-design`:

```bash
git clone https://github.com/FruityPotato/TASAMADesignSystem.git ~/.claude/skills/tasama-design
```

Then in any project: `/tasama-design` — or just ask for "a TASAMA-branded landing page" and it will trigger on its own.

### 2. Any agent — clone alongside your project

Clone it next to whatever you're building and point your agent at it:

```bash
git clone https://github.com/FruityPotato/TASAMADesignSystem.git
```

> Read `TASAMADesignSystem/AGENTS.md` and build the dashboard using those tokens and components.

Agents that read `AGENTS.md` or `CLAUDE.md` conventions (Claude Code, Cursor, Copilot, Codex, Aider) will pick up the rules automatically once the file is in context.

### 3. As a submodule in a product repo

```bash
git submodule add https://github.com/FruityPotato/TASAMADesignSystem.git design-system
```

Then link `design-system/styles.css` and import components from `design-system/components/`.

---

## Using it directly

**HTML/CSS** — one stylesheet gets you every token:

```html
<link rel="stylesheet" href="styles.css">
```

```css
.hero {
  background: var(--gradient-brand);
  color: var(--text-inverse);
  padding: var(--space-16);
  box-shadow: var(--shadow-lg);
}
```

**React** — components are dependency-free besides React and style themselves from the same tokens:

```jsx
import { Button } from './components/core/Button.jsx';
import { Stat }   from './components/data/Stat.jsx';

<Stat value="27M" label="Population" tone="brand" />
<Button variant="primary" iconRight="arrow-up-right">See more</Button>
```

---

## Structure

```
styles.css              global entry — @imports the token closure
tokens/
  colors.css            brand core, ramps, neutrals, semantic aliases
  typography.css        families, weights, type scale, tracking
  spacing.css           4px grid, radii, containers, control heights
  effects.css           blue-tinted shadows, gradients, motion, z-index
  fonts.css             Montserrat + Noto Kufi Arabic + IBM Plex Mono
components/
  core/                 Button, Icon, Logo (+ iconData.js, logoData.js)
  content/              Card, Eyebrow, Divider, TeamCard
  data/                 Stat, ProgressBar, Badge
assets/
  icons/                24 currentColor SVGs
  logo-full.svg         TASAMA wordmark lockup
  pif-company.svg       "A PIF Company" endorsement
figma-plugin/           builds the system into Figma (see its README)
scripts/
  gen-svg-assets.js     regenerates assets/ from the inlined registries
AGENTS.md · CLAUDE.md · BRAND.md · SKILL.md
```

---

## Figma

```bash
node figma-plugin/build.js
```

Then in the Figma **desktop app**, inside a design file: Figma menu → Plugins → Development → Import plugin from manifest… → `figma-plugin/manifest.json`.

It creates 98 variables across 3 collections, 13 text styles, 6 elevation styles, 4 gradients, 24 icon components and 7 component sets (128 variants). Re-running updates in place rather than duplicating.

Figma's REST API cannot build a design system — there is no endpoint that creates a file, frame, component or style. The Plugin API is the only route, and it runs from the desktop app.

---

## Development

```bash
npm test                    # build the Figma plugin and run its checks
npm run gen:assets          # regenerate assets/icons/*.svg and logo SVGs
```

The inlined registries (`components/core/iconData.js`, `logoData.js`) are the source of truth for artwork; the files in `assets/` are generated from them.

---

## Provenance and caveats

Reverse-engineered from the official TASAMA Presentation Template (PowerPoint). Colors, icon geometry and logo artwork are copied verbatim from that deck.

- **The wordmark font is proprietary** and not included. "TASAMA" as a logo is artwork — use `<Logo />` or `assets/logo-full.svg`. Never re-typeset it in Montserrat.
- **Arabic uses a substitute.** The deck uses Montserrat-Arabic (proprietary); Noto Kufi Arabic is loaded as the nearest open fallback. Supply the real files for exact Arabic rendering.
- **Sample copy is placeholder**, not official TASAMA messaging.

Internal to TASAMA / PIF. Not licensed for external distribution.

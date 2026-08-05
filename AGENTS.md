# TASAMA Design System — agent instructions

You are building UI or visual assets for **TASAMA** (تسامى لخدمات الأعمال, "Business Services") — **a PIF company**, a Saudi Public Investment Fund entity providing shared business services.

Read this file first. Read [`BRAND.md`](BRAND.md) for the full rationale before doing anything design-heavy.

## Never do these

These are the mistakes that make output look off-brand. They are non-negotiable.

1. **No emoji.** Anywhere. Not in UI, not in copy, not in commit messages, not as icons. Use the 24-glyph icon set instead.
2. **Never re-typeset the wordmark.** "TASAMA" as a logo is proprietary artwork — use `<Logo />` or `assets/logo-full.svg`. Never set it in Montserrat and call it a logo.
3. **Shadows are blue-tinted, never grey or black.** Always `rgba(16,6,158,…)`. A neutral drop shadow is the single most common tell of off-brand work.
4. **Don't invent colors.** Every color comes from `tokens/colors.css`. If you need a new one, you're probably reaching for an existing ramp step.
5. **Don't hardcode hex values in components.** Use the CSS custom properties. `var(--tasama-blue)`, not `#10069E`.
6. **No bounce or spring motion.** 120–320ms, standard or emphasized easing. Restrained.
7. **At most 1–2 background colors per screen or deck** — brand blue and white.

## The 20-second version of the brand

- **Primary:** TASAMA Blue `#10069E`. Used full-bleed on covers, section breaks, hero surfaces.
- **Accents, sparingly:** gold `#B59D5E` (eyebrows, dividers, premium emphasis), sky `#8DC7E8`, orange `#E77622`, green `#ADDC91` (data and status).
- **Type:** Montserrat everywhere. Headings 600/700 with tight tracking. Eyebrows 11px UPPERCASE, 0.16em tracking, gold.
- **Shape:** crisp radii on controls (6–10px), generous on cards and media (16–24px), pills for chips.
- **Signature move:** deep-blue field + translucent glassy 3D forms + a 2px fading gold hairline divider.
- **Voice:** institutional, measured, confident. Short kicker → concise headline → one supporting sentence. KPI-led.

## Quick start

**Plain HTML/CSS** — link the entry stylesheet and use the custom properties:

```html
<link rel="stylesheet" href="styles.css">
```

```css
.hero {
  background: var(--gradient-brand);
  color: var(--text-inverse);
  padding: var(--space-16);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
}
```

**React** — components are dependency-free besides React, and style themselves from the same tokens:

```jsx
import { Button } from './components/core/Button.jsx';
import { Card }   from './components/content/Card.jsx';
import { Stat }   from './components/data/Stat.jsx';

<Card variant="elevated" icon="handshake" eyebrow="OUR SERVICES" title="Shared advisory">
  Standardized advisory delivered across portfolio entities.
</Card>

<Stat value="27M" label="Population" caption="Saudi Arabia, 2024" tone="brand" />

<Button variant="primary" size="md" iconRight="arrow-up-right">See more</Button>
```

## Component reference

Each component has a `.d.ts` next to it with full prop types — read that rather than guessing.

| Component | Path | Key props |
| --- | --- | --- |
| `Button` | `components/core/Button.jsx` | `variant` primary/secondary/ghost/inverse/link · `size` sm/md/lg · `iconLeft` `iconRight` · `pill` `fullWidth` |
| `Icon` | `components/core/Icon.jsx` | `name` (24 glyphs) · `size` · `title` (omit ⇒ decorative) |
| `Logo` | `components/core/Logo.jsx` | `variant` full/pif · `tone` color/white/blue/mono · `height` |
| `Card` | `components/content/Card.jsx` | `variant` elevated/outline/subtle/brand · `icon` `eyebrow` `title` `accent` `interactive` |
| `Eyebrow` | `components/content/Eyebrow.jsx` | `tick` · `color` |
| `Divider` | `components/content/Divider.jsx` | `tone` subtle/gold/on-brand · `vertical` |
| `TeamCard` | `components/content/TeamCard.jsx` | `name` `position` `photo` `meta` · `variant` plain/card/brand |
| `Stat` | `components/data/Stat.jsx` | `value` `label` `caption` `icon` · `tone` brand/gold/orange/green/sky · `variant` plain/card/brand |
| `ProgressBar` | `components/data/ProgressBar.jsx` | `value` `max` `label` · `tone` · `size` · `onBrand` |
| `Badge` | `components/data/Badge.jsx` | `tone` (6) · `variant` solid/soft/outline/number · `size` |

**On dark blue surfaces**, switch to the inverse set: `Button variant="inverse"`, `Logo tone="white"`, `Divider tone="on-brand"`, `ProgressBar onBrand`, `Card variant="brand"`.

## Icon set (24 glyphs)

`arrow-up-right` `bar-chart` `blocks` `briefcase` `building` `chart-growth` `check` `document-edit` `document-list` `gavel` `globe` `handshake` `id-card` `magic-wand` `megaphone` `money-bag` `monitor` `presentation` `resume` `saudi-map` `send` `trend-up` `user-search` `workflow`

Available two ways: inlined in `components/core/iconData.js` (what `<Icon>` renders, no asset paths needed) and as standalone `currentColor` SVGs in `assets/icons/`. `saudi-map` is the Kingdom outline — a recurring brand motif, use it deliberately.

## Token reference

All tokens are CSS custom properties in `tokens/`. The names you'll reach for most:

```
Color      --tasama-blue --tasama-gold --tasama-sky --tasama-orange --tasama-green
           --blue-900..050  --neutral-950..050  (+ gold/sky/orange/green ramps)
Semantic   --text-strong --text-body --text-muted --text-inverse --text-inverse-muted
           --surface-card --surface-subtle --surface-brand --surface-tint
           --border-subtle --border-default --border-on-brand
Type       --font-display --font-body --text-display --text-h1..h4 --text-body-lg/md/sm
           --text-overline --tracking-overline --leading-normal/relaxed
Space      --space-1..24 (4px grid)   --radius-xs/sm/md/lg/xl/pill
Effects    --shadow-xs..xl  --gradient-brand  --gradient-hairline
           --duration-fast/base/slow  --ease-standard/emphasized
```

Prefer semantic tokens (`--text-strong`) over primitives (`--tasama-blue`) when the meaning is semantic — it survives retheming.

## Writing copy

Institutional and plain. No hype, no exclamation marks. Speak as "we"/"TASAMA" to "our partners". Headlines in title or sentence case; eyebrows and labels UPPERCASE and wide-tracked. Zero-pad section counters (`01`, `02`). Abbreviate and bold numbers (`27M`, `90%`).

Sample body copy in this repo is placeholder, **not** official TASAMA messaging — never ship it as real content.

## Figma

`figma-plugin/` builds this system into a Figma file — variables, text/effect/gradient styles, 24 icon components, 7 component sets. See [`figma-plugin/README.md`](figma-plugin/README.md). Figma's REST API cannot do this; it must run as a plugin from the desktop app.

## Regenerating assets

`assets/icons/*.svg` and the logo SVGs are generated from the inlined registries, which are the source of truth:

```bash
node scripts/gen-svg-assets.js
```

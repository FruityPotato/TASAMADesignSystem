# TASAMA Design System

A brand & UI design system for **TASAMA** (تسامى لخدمات الأعمال — "Business Services"), **a PIF company** — a Saudi Public Investment Fund entity that builds and runs shared business services (advisory, managed operations, digital platforms, performance) for the Kingdom's programs and portfolio entities.

This system was reverse-engineered from the official **TASAMA Presentation Template** (PowerPoint). It captures the brand's palette, typography, iconography, imagery and the reusable building blocks needed to produce on-brand slides, documents and product UI.

## Source material

| Source | Location | Notes |
| --- | --- | --- |
| TASAMA Presentation Template | `uploads/TASAMA Presentation Template.pptx` | 33 slides, 3 masters, 96 layouts. Origin of all colors, fonts, icons, logo art and imagery. |
| Extracted brand art | `assets/` | Logo lockups, hero imagery, 24-glyph icon set, wireframe motif. |

The deck is the single ground truth. Values (colors, the icon set, logo artwork) are copied verbatim from it; nothing about a live product was inferred.

---

## Brand at a glance

- **Name / endorsement:** TASAMA · "Business Services" · **A PIF Company** (Saudi emblem endorsement lockup).
- **Primary color:** deep royal/indigo blue **#10069E** ("TASAMA Blue").
- **Accents:** gold #B59D5E · sky #8DC7E8 · orange #E77622 · green #ADDC91.
- **Typeface:** Montserrat (the deck's major & minor font); Arabic in Montserrat-Arabic.
- **Signature look:** deep-blue fields with translucent, softly-lit **glassy 3D forms**; gold hairline dividers; crisp, corporate, confident.

---

## CONTENT FUNDAMENTALS

How TASAMA writes (inferred from the template's headings, labels and the corporate/PIF context — the body copy in the deck is placeholder lorem ipsum, so tone below is drawn from the real structural labels and brand positioning):

- **Voice:** institutional, measured and confident — a national shared-services provider, not a startup. Authoritative but plain; avoids hype and exclamation.
- **Person:** speaks as an organization ("we", "TASAMA") to partners and stakeholders ("you", "our partners", "the Kingdom's entities"). Rarely first-person singular.
- **Casing:** Title-case or sentence-case headlines; **UPPERCASE, wide-tracked** eyebrows/kickers ("OUR SERVICES", "SECTION 01") and labels ("POSITION", "FIRST NAME LAST NAME"). Section counters are zero-padded — `01`, `02` … `06`.
- **Structure:** short kicker → concise headline → one supporting sentence. KPI-led ("27M", "90%", "Second Quarter"). Content is organized into numbered sections and comparison/stat blocks.
- **Bilingual:** Arabic and English sit together (RTL Arabic tagline beside the English one). Keep Arabic support in mind for any real content.
- **Emoji:** none. Never use emoji. Iconography carries visual meaning instead.
- **Numbers:** abbreviated and bold ("27M", "12", "90%"); percentages in comparisons ("70% / 30%").
- **Vibe words:** trusted, shared, standardized, national scale, end-to-end, delivery, performance.

Example phrasings (on-brand): *"Business services, delivered end to end."* · *"From fragmented to shared."* · *"Four capabilities, one platform."* · Eyebrow: *"OUR SERVICES"* · Metric caption: *"Q2 Revenue · YoY +18%"*.

---

## VISUAL FOUNDATIONS

- **Color:** One dominant brand color — deep royal blue `#10069E` — used full-bleed on covers, section breaks and hero surfaces. Light content slides are white/near-white (`#FEFFFE`) with blue headings. Accents are used sparingly and purposefully: **gold** for eyebrows/dividers and premium emphasis, **sky/green/orange** for data and status. At most 1–2 background colors per deck (blue + white).
- **Typography:** Montserrat throughout. Headings use SemiBold/Bold (600/700) with tight tracking; the display/cover title is Bold at 60px+. Body is Regular Montserrat with relaxed line-height. Eyebrows are 11px uppercase, wide-tracked (0.16em), in gold. The wordmark itself uses a proprietary geometric display face (see Caveats).
- **Backgrounds & imagery:** signature cover art is **translucent, glassy 3D geometric forms** (a monolithic cube and a sweeping arc) on the deep-blue field, lit with soft sky-blue highlights — cool, premium, architectural. No photography-heavy treatment; no grain. Full-bleed blue for covers/sections; clean white for content. A faint wireframe version of the 3D forms is used as a subtle motif.
- **Layout:** generous margins (~72px on a 1280×720 slide), left-aligned text blocks, strong grid. Logo top-left on covers; PIF endorsement bottom. Page number + small logo in slide footers.
- **Dividers:** a **2px fading gold hairline** (`--gradient-hairline`) separates major sections; neutral 1px lines within lists/cards.
- **Corner radii:** crisp on UI (6–10px), more generous on cards/media (16–24px). Pills for chips/section counters.
- **Cards:** white surface, 1px subtle neutral border, soft **blue-tinted** shadow (never neutral grey/black), 16px radius. A `brand` card variant is the dark-blue gradient surface. Optional 4px left accent bar and a tinted icon tile.
- **Shadows/elevation:** soft, low-spread, always tinted with the brand blue (`rgba(16,6,158,…)`). Five-step scale xs→xl.
- **Motion:** restrained and purposeful — 120–320ms, standard/emphasized easing. Fades and short rises on hover; progress bars ease-fill. No bounce, no playful spring.
- **Hover states:** primary buttons darken (blue-800) and lift with a shadow; secondary/ghost fill with a pale blue tint; cards rise 3px. **Press:** translate down 1px, deepen to blue-900.
- **Transparency & blur:** used on dark surfaces (white at 8–16% for tiles/tracks; borders at ~22%) and for the glassy cover art. Sparingly elsewhere.
- **Focus:** 3px brand-blue focus ring (`--focus-ring`).

---

## ICONOGRAPHY

- **Style:** a single cohesive set of **monochrome line/solid glyphs** on a ~96px canvas (the deck's own icon library), extracted to `assets/icons/` as SVG. Thin, even strokes; simple solid fills where filled; no duplicated color, no gradients.
- **Color:** all glyphs are normalized to `fill="currentColor"`, so they tint to any brand color via CSS `color`. In the deck they appear in blue, gold, green, sky or white depending on surface.
- **Coverage (24 glyphs):** globe, megaphone, building, money-bag, gavel, send, handshake, document-list, presentation, document-edit, id-card, arrow-up-right, briefcase, blocks, magic-wand, chart-growth, workflow, user-search, check, bar-chart, saudi-map, resume, monitor, trend-up. (`saudi-map` is the Kingdom outline — a recurring brand motif.)
- **Usage:** via the `<Icon name="…" />` component (glyphs are inlined in `components/core/iconData.js`, so no asset paths are needed at runtime). Use in stat blocks, feature cards, buttons and section markers.
- **Unicode / emoji:** never used as icons. No emoji anywhere in the brand.
- **Logo art:** vector lockups live in `assets/` (`logo-full.svg`, `pif-company.svg`) and are rendered tintably by `<Logo />` (`components/core/logoData.js`).

---

## Components

Reusable React primitives. Grouped by concern:

**core/**

- **Button** — action control; `primary` solid blue, `secondary` outline, `ghost`, `inverse` (on dark), `link`. Sizes sm/md/lg, icon slots, pill.
- **Icon** — 24 monochrome brand glyphs, tinted via `currentColor`.
- **Logo** — TASAMA `full` lockup and `pif` endorsement, recolorable per surface.

**content/**

- **Card** — content/feature container; `elevated | outline | subtle | brand`, optional icon tile, gold eyebrow, accent bar.
- **Eyebrow** — uppercase gold section kicker with a short rule.
- **Divider** — horizontal/vertical rule; `gold` hairline, `subtle`, `on-brand`.
- **TeamCard** — person tile (photo/initials, name, gold position label).

**data/**

- **Stat** — headline KPI (big value + label + caption), tone accents.
- **ProgressBar** — labeled percentage track (the deck's comparison bars).
- **Badge** — chips + circular section counters (`01`–`06`).

---

## Caveats & substitutions

- **Display/wordmark font is proprietary.** The "TASAMA" wordmark uses a custom geometric face ("Fund" family in the source) that is not redistributable. It is preserved as **logo artwork** (`assets/logo-full.svg`, rendered by `<Logo />`). For display headings the system uses **Montserrat SemiBold/Bold** as the nearest available match. Never re-typeset the wordmark in Montserrat.
- **Arabic font substituted.** The deck uses **Montserrat-Arabic** (proprietary). The nearest open fallback, **Noto Kufi Arabic**, is loaded. *Supply the Montserrat-Arabic files for exact Arabic rendering.*
- **Montserrat is loaded from Google Fonts** (not self-hosted binaries). If you need offline/self-hosted webfonts, supply the files and wire up `@font-face`.
- **IBM Plex Mono** is used for `--font-mono` (loaded from Google Fonts) as a neutral monospace; the source deck defines no brand monospace.
- Body copy in the source deck is lorem ipsum; any sample copy is plausible TASAMA-flavored placeholder, **not** official messaging.

---
name: tasama-design
description: Use this skill to generate well-branded interfaces and assets for TASAMA (تسامي — Business Services, a PIF company), either for production or throwaway prototypes/mocks/decks. Contains essential design guidelines, colors, type, fonts, assets, icons and UI-kit components for prototyping.
user-invocable: true
---

Read the `BRAND.md` file within this skill, and explore the other available files (tokens, components, assets). `AGENTS.md` has the hard rules and a quick-start.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc.), copy assets out and create static HTML files for the user to view. If working on production code, copy assets and read the rules here to become an expert in designing with the TASAMA brand.

Key facts:
- Primary color is TASAMA Blue `#10069E`; accents gold `#B59D5E`, sky `#8DC7E8`, orange `#E77622`, green `#ADDC91`. Typeface is Montserrat. Link `styles.css` for all tokens.
- Signature look: deep-blue fields with translucent glassy 3D forms, gold hairline dividers, uppercase gold eyebrows, blue-tinted soft shadows. No emoji.
- Components live in `components/` (Button, Icon, Logo, Card, Eyebrow, Divider, TeamCard, Stat, ProgressBar, Badge). The 24-glyph icon set is in `assets/icons/` (currentColor SVGs) and inlined in `components/core/iconData.js`. Logo art is in `assets/`.
- `figma-plugin/` builds the whole system into a Figma file (variables, styles, icon and component sets).

If the user invokes this skill without other guidance, ask them what they want to build or design, ask a few focused questions, and act as an expert designer who outputs HTML artifacts _or_ production code depending on the need.

# Tuff Workwear website — design system

This folder is the source of truth for the Tuff Workwear marketing + catalogue website. Everything in here is wired for the chosen stack: **Next.js (App Router) + Tailwind CSS + shadcn/ui**.

## What's in here

| File | Purpose |
| :--- | :--- |
| `01-design-tokens.md` | The full token spec. Colour, type, spacing, radii, shadows, motion, z-index. |
| `02-design-guide.md` | How to apply the tokens. Type rules, colour usage, photography, iconography, motion. |
| `03-component-system.md` | Component specs aligned to shadcn/ui. Buttons, cards, nav, footer, hero, forms, badges. |
| `04-information-architecture.md` | Sitemap, page templates, URL structure, content patterns. |
| `05-voice-to-ui-copy.md` | The voice DNA applied to UI surfaces. Button labels, error messages, empty states. |
| `tailwind.config.ts` | Drop-in Tailwind config. Colour, fontFamily, fontSize, spacing, radius, shadow, animation. |
| `globals.css` | Drop-in CSS. Token variables, base layer, font-face loaders, shadcn theme bindings. |
| `tokens.json` | Stack-agnostic tokens (W3C-style). Use this if Figma needs to sync, or if a second app gets built. |

## Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4 with CSS-first config
- **Components**: shadcn/ui (radix primitives + tokens)
- **Type**: Archivo Black (display) + Inter (body)
- **Icons**: Lucide React (matches the orange icon style from the brand guide)
- **Forms**: react-hook-form + zod
- **CMS option**: Sanity or Payload if the catalogue grows beyond static MDX

## Site scope (locked)

Marketing site + product catalogue. No checkout. Conversion paths are:

1. WhatsApp (`083 474 4343`)
2. Phone call
3. Email quote request
4. Contact form

The buyer browses the catalogue, picks gear, then hits a CTA. We do not sell on-site at launch.

## How to use this folder

1. Read `01-design-tokens.md` and `02-design-guide.md` first. Those two cover 80% of decisions.
2. Drop `tailwind.config.ts` and `globals.css` into the Next.js project.
3. Pull shadcn components in via CLI, then point them at the tokens with the bindings in `globals.css`.
4. Build pages off the templates in `04-information-architecture.md`.
5. When writing UI copy, run it through `05-voice-to-ui-copy.md` first.

## Brand non-negotiables

These are baked into the system. Don't override them.

- The wordmark sits on charcoal or white. Never on orange, never on a busy photo without a scrim.
- Tuff Orange (`#E8611A`) is reserved for action and emphasis. Buttons, key prices, nav highlights, the underline rule under the wordmark. It is not a section background.
- Every card, hero, and feature section earns its space with a price, a spec, or a real product. No filler imagery.
- WhatsApp + phone are first-class CTAs. They sit above the fold on every product page.

## Open questions (flag before build)

- Domain: which one are we using? (`tuffworkwear.co.za` is on the ad layouts; confirm registration.)
- Photography: are we re-shooting product on a Tuff dark backdrop, or pulling Vulcan catalogue shots? Affects hero treatment.
- Catalogue source: static MDX, or pulled from the Vulcan price list each month? Affects the build pipeline.
- Will the site link out to vulcanworkwear.co.za for items Tuff doesn't stock, or do we keep buyers on-domain?

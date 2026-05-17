# 01 — Design tokens

The token layer. Every value the UI reads pulls from here. If you need a colour or a size that isn't listed, talk before adding it.

Tokens are written in 3 places, and they all stay in sync:

1. **`globals.css`** — CSS custom properties under `:root`. The runtime source of truth.
2. **`tailwind.config.ts`** — Tailwind reads the CSS vars so utilities like `bg-brand` resolve correctly.
3. **`tokens.json`** — W3C-style tokens for Figma sync or other apps.

---

## 1. Colour

### 1.1 Brand colours (from the brand guide)

| Token | Hex | Usage |
| :--- | :--- | :--- |
| `--brand-charcoal` | `#2D2D2D` | Primary surface for hero, ad-style sections, footer. The "Tuff" backdrop. |
| `--brand-orange` | `#E8611A` | Primary action. CTAs, price emphasis, brand underline rule, active states. |
| `--brand-white` | `#FFFFFF` | Page background, body text on dark, card surface. |
| `--brand-grey` | `#B0B0B0` | Secondary text, dividers on white, disabled states. |
| `--brand-black` | `#111111` | Body text on white, hero headlines on white, deep backgrounds. |

### 1.2 Extended palette (built off the brand)

Tuff's brand only ships 5 colours, which is correct for ad work but not enough for UI. The extension below is built off those 5 so nothing reads as "off-brand". Every value is named so a junior dev can pick the right one without guessing.

#### Neutrals (charcoal-derived greyscale)

| Token | Hex | Use |
| :--- | :--- | :--- |
| `--neutral-50` | `#F7F7F7` | Page background alternate, very light surface |
| `--neutral-100` | `#EDEDED` | Subtle cards, hover states on white |
| `--neutral-200` | `#D9D9D9` | Borders, dividers on white |
| `--neutral-300` | `#B0B0B0` | Same as `--brand-grey`. Disabled text, secondary icons |
| `--neutral-400` | `#8A8A8A` | Captions, helper text |
| `--neutral-500` | `#6B6B6B` | Secondary body |
| `--neutral-600` | `#4A4A4A` | Body on light surfaces |
| `--neutral-700` | `#2D2D2D` | Same as `--brand-charcoal` |
| `--neutral-800` | `#1F1F1F` | Hero, deep panels |
| `--neutral-900` | `#111111` | Same as `--brand-black`. Footer, deepest surface |

#### Orange (action) ramp

The brand ships one orange. We add a tint and a shade so we have hover, active, and focus states without drifting off-brand.

| Token | Hex | Use |
| :--- | :--- | :--- |
| `--orange-50` | `#FFF2EA` | Soft tinted background for promo callouts |
| `--orange-100` | `#FCDBC4` | Selected nav row, light highlight |
| `--orange-300` | `#F19661` | Disabled CTA fill, decorative accents |
| `--orange-500` | `#E8611A` | **Brand orange. Default action colour.** |
| `--orange-600` | `#CE521A` | Hover state on filled CTAs |
| `--orange-700` | `#A53F0F` | Pressed/active state |
| `--orange-800` | `#7C2E08` | Text on light orange backgrounds |

#### Semantic colours (for forms and feedback)

Pulled from a desaturated palette so they read as utility, not as competing brand colours.

| Token | Hex | Use |
| :--- | :--- | :--- |
| `--success-500` | `#2E8E4A` | Form success, in-stock pill |
| `--success-50` | `#E5F4EA` | Success toast background |
| `--warning-500` | `#C18A00` | Low stock warning, soft alerts |
| `--warning-50` | `#FBF1D9` | Warning toast background |
| `--danger-500` | `#B83A2B` | Form errors, out-of-stock |
| `--danger-50` | `#F7E1DD` | Error toast background |
| `--info-500` | `#2D6CB0` | Informational helpers (rarely used) |

#### High-viz yellow (workwear-specific accent)

We do not give hi-viz yellow brand status, but it shows up in product photography and category tiles for hi-viz gear. Treat it as an image-level colour, not a UI colour.

| Token | Hex | Use |
| :--- | :--- | :--- |
| `--hiviz-yellow` | `#E5FF00` | Hi-viz product category tile only. Never used as a fill in the UI chrome. |

### 1.3 Surface roles

Roles tell components which token to pick. Components reference roles, not raw tokens.

| Role | Light value | Dark value (where relevant) |
| :--- | :--- | :--- |
| `--surface-page` | `--brand-white` | `--neutral-900` |
| `--surface-raised` | `--brand-white` | `--neutral-800` |
| `--surface-inverse` | `--neutral-900` | `--brand-white` |
| `--surface-orange` | `--orange-500` | `--orange-500` |
| `--text-primary` | `--neutral-900` | `--brand-white` |
| `--text-secondary` | `--neutral-500` | `--neutral-300` |
| `--text-on-orange` | `--brand-white` | `--brand-white` |
| `--border-subtle` | `--neutral-200` | `--neutral-700` |
| `--border-strong` | `--neutral-400` | `--neutral-500` |
| `--ring-focus` | `--orange-500` | `--orange-500` |

### 1.4 Colour rules of thumb

- Orange is for action. If something isn't clickable or isn't a price, it shouldn't be orange.
- Charcoal is for atmosphere. The hero, the footer, and "ad-anatomy" style blocks live on charcoal.
- White is for catalogue. Product browsing pages use white surfaces so colour swatches read true.
- Hi-viz yellow stays in photography, not UI.

---

## 2. Typography

### 2.1 Font families

| Token | Family | Weight | Where |
| :--- | :--- | :--- | :--- |
| `--font-display` | `Archivo Black` | 900 | Hero, section titles, the "TUFF" treatment |
| `--font-sans` | `Inter` | 400, 500, 600, 700 | Everything else. Body, nav, prices, forms. |
| `--font-mono` | `JetBrains Mono` | 400, 600 | SKUs, product codes, MOQ chips |

Both fonts are loaded via `next/font/google`. No CDN calls at runtime.

Why Archivo Black: the wordmark is a heavy, slightly condensed sans with a strong vertical stress. Archivo Black is the closest free Google Font match. It pairs well with Inter, and the licence is SIL OFL.

### 2.2 Type scale

Modular scale, base 16px. The display sizes lean heavier than the rest because the brand voice is loud at the top.

| Token | rem | px | Use |
| :--- | :--- | :--- | :--- |
| `--text-2xs` | `0.6875rem` | 11 | Legal, breadcrumbs |
| `--text-xs` | `0.75rem` | 12 | Captions, helper text, MOQ chips |
| `--text-sm` | `0.875rem` | 14 | Form labels, secondary nav |
| `--text-base` | `1rem` | 16 | Body |
| `--text-md` | `1.125rem` | 18 | Lead paragraphs, hero subhead |
| `--text-lg` | `1.25rem` | 20 | Section subhead |
| `--text-xl` | `1.5rem` | 24 | H4, card title |
| `--text-2xl` | `1.875rem` | 30 | H3 |
| `--text-3xl` | `2.25rem` | 36 | H2 |
| `--text-4xl` | `3rem` | 48 | H1 (page) |
| `--text-5xl` | `3.75rem` | 60 | Hero subhead |
| `--text-display` | `4.5rem` | 72 | Hero headline (mobile clamps to 3rem) |
| `--text-display-xl` | `6rem` | 96 | Landing hero on desktop |

### 2.3 Line height

| Token | Value | Use |
| :--- | :--- | :--- |
| `--leading-tight` | `1.05` | Display + hero headlines |
| `--leading-snug` | `1.2` | H1 to H3 |
| `--leading-normal` | `1.5` | Body |
| `--leading-relaxed` | `1.65` | Long-form copy (about page, blog) |

### 2.4 Letter spacing

| Token | Value | Use |
| :--- | :--- | :--- |
| `--tracking-display` | `-0.02em` | Archivo Black headlines |
| `--tracking-tight` | `-0.01em` | H1 to H3 |
| `--tracking-normal` | `0` | Body |
| `--tracking-wide` | `0.05em` | Eyebrow labels, small caps headers |
| `--tracking-wider` | `0.1em` | Uppercase nav labels |

### 2.5 Font features

- Body always has `font-feature-settings: "ss01", "cv11"` (Inter's stylistic alternates for clearer numbers).
- Prices and specs always have `font-variant-numeric: tabular-nums` so columns line up.

---

## 3. Spacing

Base unit: 4px. Tailwind's default is fine. The named tokens below cover the recurring ones.

| Token | px | Use |
| :--- | :--- | :--- |
| `--space-0` | 0 | Reset |
| `--space-1` | 4 | Icon gap, dense form gaps |
| `--space-2` | 8 | Inline gap |
| `--space-3` | 12 | Field padding |
| `--space-4` | 16 | Card inner padding (small) |
| `--space-6` | 24 | Card inner padding (default) |
| `--space-8` | 32 | Component gap |
| `--space-10` | 40 | Section heading to body |
| `--space-12` | 48 | Section padding (mobile) |
| `--space-16` | 64 | Section vertical rhythm (tablet) |
| `--space-20` | 80 | Section vertical rhythm (desktop) |
| `--space-24` | 96 | Hero top/bottom padding |
| `--space-32` | 128 | Page break for landing pages |

### 3.1 Container widths

| Token | px | Use |
| :--- | :--- | :--- |
| `--container-sm` | 640 | Forms, single-column reading |
| `--container-md` | 768 | Article body |
| `--container-lg` | 1024 | Catalogue listing |
| `--container-xl` | 1200 | Marketing default |
| `--container-2xl` | 1440 | Hero, full-bleed sections |

Gutters: 16px mobile, 24px tablet, 32px desktop.

---

## 4. Radii

Tuff is a workwear brand, not a fintech app. Radii stay small and honest. Nothing pill-shaped except chips.

| Token | px | Use |
| :--- | :--- | :--- |
| `--radius-none` | 0 | Hero blocks, full-bleed sections |
| `--radius-sm` | 2 | Form inputs, nav highlight |
| `--radius-md` | 4 | Buttons, cards (default) |
| `--radius-lg` | 8 | Modals, large surfaces |
| `--radius-pill` | 999 | Chips, MOQ badges, "BEST VALUE" tag |

---

## 5. Borders

| Token | Value | Use |
| :--- | :--- | :--- |
| `--border-width-1` | 1px | Default |
| `--border-width-2` | 2px | Active states, focus rings |
| `--border-width-4` | 4px | The orange "rule" under the wordmark, section dividers |

The 4px orange rule is a brand element. It appears under the logo, under section titles in hero zones, and along the top of the contact bar. Treat it as a component, not a one-off.

---

## 6. Shadows

The brand sits on charcoal, so shadows are used carefully. Drop shadows on dark surfaces look muddy; on white we use them sparingly.

| Token | Value | Use |
| :--- | :--- | :--- |
| `--shadow-sm` | `0 1px 2px rgba(17, 17, 17, 0.06)` | Button hover lift |
| `--shadow-md` | `0 4px 8px rgba(17, 17, 17, 0.08)` | Card hover |
| `--shadow-lg` | `0 12px 24px rgba(17, 17, 17, 0.12)` | Sticky header on scroll, modals |
| `--shadow-glow-orange` | `0 0 24px rgba(232, 97, 26, 0.45)` | Price emphasis (matches the ad treatment) |

The price glow is intentional. It's the one decorative effect carried directly from the ad set into the website.

---

## 7. Motion

Short, mechanical, no bounce. Tuff is not springy. It moves like a machine.

| Token | Value | Use |
| :--- | :--- | :--- |
| `--duration-fast` | 120ms | Hover state colour swap |
| `--duration-base` | 200ms | Most transitions |
| `--duration-slow` | 360ms | Page-entry, reveal |
| `--easing-standard` | `cubic-bezier(0.2, 0, 0, 1)` | Default ease |
| `--easing-emphasis` | `cubic-bezier(0.4, 0, 0.2, 1)` | Reveals |
| `--easing-out` | `cubic-bezier(0, 0, 0.2, 1)` | Exits |

Reduced motion: respect `prefers-reduced-motion`. All non-essential motion gets killed when set.

---

## 8. Z-index

| Token | Value | Use |
| :--- | :--- | :--- |
| `--z-base` | 0 | Default |
| `--z-raised` | 10 | Cards on hover |
| `--z-sticky` | 30 | Sticky header, sticky CTA bar |
| `--z-overlay` | 40 | Drawer backdrop |
| `--z-modal` | 50 | Modal |
| `--z-toast` | 60 | Toast |
| `--z-tooltip` | 70 | Tooltip |

---

## 9. Breakpoints

Tailwind defaults, named for clarity.

| Token | min-width | Device |
| :--- | :--- | :--- |
| `sm` | 640px | Large phone |
| `md` | 768px | Tablet portrait |
| `lg` | 1024px | Tablet landscape, small laptop |
| `xl` | 1280px | Desktop |
| `2xl` | 1536px | Large desktop |

Mobile-first. Build at 360px first, scale up.

---

## 10. Iconography sizing

The brand ships its own icon style (orange-filled, simple silhouettes). For UI we use Lucide React, themed to match. See `02-design-guide.md` for usage rules.

| Token | px | Use |
| :--- | :--- | :--- |
| `--icon-xs` | 12 | Inline with text |
| `--icon-sm` | 16 | Default UI icon (buttons, nav) |
| `--icon-md` | 20 | Form inputs, breadcrumbs |
| `--icon-lg` | 24 | Section markers |
| `--icon-xl` | 32 | Feature card icons |
| `--icon-2xl` | 48 | Hero feature icons (Quality Assurance, Triple Stitched, etc.) |

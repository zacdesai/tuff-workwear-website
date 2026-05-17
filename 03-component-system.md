# 03 — Component system

Component specs aligned to shadcn/ui. Every component listed here is either an existing shadcn primitive (use as-is, themed via tokens) or a Tuff-specific composition built on top.

Convention: shadcn components stay lowercase (`button`, `card`). Tuff-specific compositions are PascalCase (`TuffBlock`, `ProductCard`).

---

## 1. Buttons

shadcn base: `button.tsx`. Variants are themed via tokens.

### 1.1 Variants

| Variant | Purpose | Visual |
| :--- | :--- | :--- |
| `primary` | The main action on a page. WhatsApp us, Download catalogue, Submit quote. | Orange fill, white text, no border. |
| `secondary` | Alternative paths. View product, See colours. | White fill, charcoal border, charcoal text. |
| `inverse` | Used on charcoal sections. | White fill, charcoal text. |
| `ghost` | Inline actions, table row CTAs. | No fill, charcoal text, underline on hover. |
| `link` | Inline text links. | Underline always, charcoal text, orange on hover. |
| `whatsapp` | Dedicated WhatsApp CTA. Carries the WhatsApp green so it reads as the channel. | `#25D366` fill, white text, WhatsApp icon. |

WhatsApp is intentionally off-brand colour-wise. It is a recognised channel and using its colour increases tap rate. This is the one approved exception to the orange-only-for-actions rule.

### 1.2 Sizes

| Size | Height | Padding | Font |
| :--- | :--- | :--- | :--- |
| `sm` | 32px | 12px / 8px | `--text-sm` 600 |
| `md` (default) | 44px | 24px / 12px | `--text-base` 600 |
| `lg` | 52px | 32px / 16px | `--text-md` 700 |
| `xl` (hero) | 64px | 40px / 20px | `--text-lg` 700 |

Min 44px height on mobile for tap targets.

### 1.3 States

- Default: as listed above.
- Hover: orange variant goes to `--orange-600`. Secondary goes to `--neutral-100` fill.
- Active: orange variant goes to `--orange-700`, scale `0.98`.
- Focus: 2px `--orange-500` ring with 2px offset.
- Disabled: 40% opacity, `cursor: not-allowed`, no hover.
- Loading: replaces label with a small spinner, button stays clickable-blocked.

### 1.4 Icon usage in buttons

- Icons sit left of label by default. Right-side only for "next" and "external" actions.
- Icon size: `--icon-sm` (16px) for `md`, `--icon-md` (20px) for `lg` and `xl`.
- 8px gap between icon and label.

---

## 2. Cards

### 2.1 Product card (`<ProductCard />`)

The catalogue workhorse. Used on listing pages and in "Featured" carousels.

**Anatomy:**

```
┌──────────────────────────┐
│                          │
│   [ Product image 4:5 ]  │
│                          │
├──────────────────────────┤
│ [Category eyebrow]       │
│ Product name             │
│ Triple stitched · MOQ 10 │
│ R149.00      [colour dots]│
│ [ Enquire ]  [ Details ] │
└──────────────────────────┘
```

- White surface, 1px `--neutral-200` border, `--radius-md`.
- Image at top, full width, 4:5 aspect ratio.
- Eyebrow is `--text-xs` uppercase tracking-wider, `--neutral-500`. Used for category like "Conti suit".
- Product name is `h4`, `--text-xl` Inter 700.
- One-line spec strip in `--text-sm` `--neutral-500`.
- Price uses the price treatment, no glow on white.
- Colour dots are 12px circles with 1px `--neutral-200` border, max 6 shown, "+N more" if needed.
- Two buttons at the bottom: primary `Enquire` (links to WhatsApp with prefilled message), secondary `Details` (links to PDP).

**Hover:** lift 2px, shadow-md, image gets a 2% zoom over 200ms.

**Mobile:** stacks fine. Buttons go full-width and stack vertically.

### 2.2 Category card (`<CategoryCard />`)

Used on the homepage and the catalogue index. Bigger than a product card, no price, no actions (the whole card is the link).

- 3:2 aspect ratio.
- Charcoal overlay on the bottom 40% with white text.
- Category title in Archivo Black, `--text-2xl`.
- Item count in `--text-sm` opacity 70%.
- Hover: image scales 1.02 over 360ms, overlay deepens.

### 2.3 Feature card (`<FeatureCard />`)

Used in the trust strip and the "Why Tuff" section. One brand icon, one heading, one short paragraph.

- White surface, 1px `--neutral-200` border, `--radius-md`.
- Brand icon at top in its 1:1 white square (see iconography rules).
- Heading in `h4` Inter 700.
- Body in `--text-sm` `--neutral-500`.
- 24px padding all round.

---

## 3. Navigation

### 3.1 Top nav (`<SiteHeader />`)

Sticky at top, height 72px desktop, 64px mobile.

**Desktop layout:**

```
[ TUFF Wordmark ]   [ Catalogue ▾ ] [ Branding ] [ About ] [ Contact ]   [ Phone | WhatsApp ]
```

- White background with 1px `--neutral-200` bottom border.
- On scroll past 32px, gain `--shadow-lg`.
- Wordmark uses the white-bg version (logo with charcoal type).
- Nav items are `--text-sm` Inter 600 uppercase tracking-wider.
- The phone and WhatsApp buttons sit far right. Phone is ghost, WhatsApp is filled.
- Active page: 2px `--orange-500` underline 4px below the label.

**Mobile layout:**

```
[ TUFF ] ... [ WhatsApp icon ] [ Phone icon ] [ Menu ]
```

- WhatsApp and phone are persistently visible, same as the ad set.
- Menu opens a full-screen drawer (Sheet from shadcn).

### 3.2 Catalogue mega-menu

Catalogue is the only top-level item with a dropdown. Mega panel shows category groups in 3 columns:

| Workwear | Footwear | Apparel |
| :--- | :--- | :--- |
| Conti suits | Safety boots | Polo golfers |
| Hi-viz vests | | T-shirts |
| Reflective conti | | Hoodies |
| Denim conti | | Caps |
| Jackets | | |
| Trousers | | |

Each item is a link. Each column has a small "View all" at the bottom.

The dropdown uses shadcn's `NavigationMenu`.

### 3.3 Mobile drawer

Full-height sheet from the right.

- Top: TUFF wordmark, close button.
- Body: collapsible accordion of catalogue groups (use shadcn `Accordion`).
- Bottom: pinned phone + WhatsApp + email, in a charcoal block.

### 3.4 Breadcrumbs

shadcn `Breadcrumb` themed to tokens.

- `--text-xs` Inter 500.
- Separator: a 4px filled orange dot, not a chevron.
- Current page in `--neutral-700`, links in `--neutral-500` with hover to `--orange-600`.

### 3.5 Sticky CTA bar (mobile only)

On product detail pages, a sticky bar at the bottom of the viewport:

```
[ R149.00 ]            [ WhatsApp Quote ]
```

Charcoal background, full-width, 64px tall. Disappears on scroll up, reappears on scroll down.

---

## 4. Footer (`<SiteFooter />`)

Background `--neutral-900`. Body text white, secondary text `--neutral-300`.

**Layout (desktop, 4 columns):**

| TUFF + tagline | Catalogue | Company | Contact |
| :--- | :--- | :--- | :--- |
| TUFF wordmark (white version) | Conti suits | About | 89 Daintree Avenue, Durban |
| `Built Tough. Priced Right.` | Hi-viz | Branding services | 083 474 4343 |
| Newsletter signup | Boots | Quote request | sales@tuffworkwear.co.za |
| | Apparel | Distributors | WhatsApp button |

**Bottom strip (full-width):**

```
© 2026 Tuff Workwear · Part of the Taurus Workwear group · POPIA · Terms · Privacy
```

- Bottom strip uses `--text-xs` `--neutral-400`.
- The orange rule sits between the columns and the bottom strip, full-width.
- Newsletter signup uses inline form: email input + `Subscribe` button. Validation with zod.

---

## 5. Hero

### 5.1 Homepage hero (`<HomeHero />`)

The marquee. Mirrors the ad anatomy in interactive form.

**Layout (desktop):**

```
┌────────────────────────────────────────┐
│ [Eyebrow: Workwear sorted, Durban-wide]│
│                                        │
│   BUILT TOUGH.                         │
│   PRICED RIGHT.                        │
│   ━━━━━━━━━━━━ (orange rule)            │
│                                        │
│   Conti suits from R149. Boots from    │
│   R295. Stitched in SA, delivered      │
│   nationwide.                          │
│                                        │
│   [ WhatsApp 083 474 4343 ] [ Catalogue ]│
└────────────────────────────────────────┘
                        [ cut-out worker ]
```

- Charcoal background (full-bleed).
- Display text in Archivo Black, `--text-display-xl` desktop / `--text-display` mobile.
- Cut-out worker photo on the right (Class A image).
- 96px vertical padding desktop, 64px mobile.

### 5.2 Category hero (`<CategoryHero />`)

Lighter than the homepage hero. Charcoal background, single H1, single subtitle, optional image right.

### 5.3 Promo strip (`<PromoStrip />`)

Thin orange-700 bar that sits above the header. Used for active promos like "MOQ 10 specials this month".

- Height 36px.
- `--text-sm` Inter 500 white.
- Dismissible (close button stores state in localStorage).

---

## 6. Forms

shadcn form primitives (`Form`, `Input`, `Textarea`, `Select`, `Checkbox`, `RadioGroup`) with token theming.

### 6.1 Field anatomy

```
[Label]
[ Input field                     ]
[helper text or error]
```

- Label sits above input. Always visible. `--text-sm` Inter 600.
- Input height 44px, white background, 1px `--neutral-300` border, `--radius-sm`.
- Focus: 2px `--orange-500` ring, no offset (it's an input).
- Error: 2px `--danger-500` border, helper text in danger colour, `role="alert"`.
- Helper text sits below at `--text-xs` `--neutral-500`.

### 6.2 The quote request form

This is the primary lead-gen surface. Don't make it long.

**Required fields:**
- Name
- Phone (WhatsApp number preferred)
- Email
- Company / project name (optional)
- Product interest (multi-select from the catalogue)
- Quantity
- Delivery province (dropdown: 9 SA provinces)
- Notes (textarea, optional)

**Validation:** zod schema, react-hook-form. SA phone numbers validated as `+27` or `0` prefix, 10 digits.

**Submission:** posts to a Next.js route handler, fans out to email + Slack/WhatsApp Business API. Success state replaces the form with a confirmation card and the WhatsApp deep link as a fallback.

### 6.3 Contact form (lighter)

Just name, phone, message. Used in the footer drawer and on the contact page.

---

## 7. The TuffBlock (`<TuffBlock />`)

The marquee section pattern pulled from the ad anatomy. Used for promoting a single product or category.

**Props:**

```ts
interface TuffBlockProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  features: string[];
  price: string;
  priceUnit?: string; // "each", "from", "per unit"
  image: { src: string; alt: string };
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  badge?: "BEST VALUE" | "NEW" | "BULK DEAL";
  variant?: "default" | "split"; // default = product right, split = product centre
}
```

**Visual:**

- Charcoal background, full-bleed.
- 96px desktop padding, 64px mobile.
- Wordmark or eyebrow at top.
- Orange rule beneath.
- Title in Archivo Black, `--text-4xl`.
- Subtitle in orange Inter italic, `--text-md`.
- Two-column body: cut-out image (Class A) on one side, feature bullets + price on the other.
- Bullets use a 4px filled orange dot, not a checkmark.
- Price uses the on-dark price treatment with the orange glow.
- Two CTAs: primary orange + secondary outline-white.
- Optional badge sits top-right, gold disc style for "BEST VALUE", orange pill for "NEW".

**This is the single most important component on the site.** It carries the brand voice into the layout system. Build it once, build it well.

---

## 8. Trust strip (`<TrustStrip />`)

A horizontal row of 4 to 8 brand-icon feature cards. Used directly under the hero.

- White background.
- Equal-width icon cards.
- Icons: Quality Assurance, Triple Stitched, SABS Approved, Nationwide Delivery, Best Value, All Sizes, Made in SA.
- Below 1024px: scrolls horizontally with snap points.

---

## 9. Catalogue listing (`<CatalogueGrid />`)

The catalogue index and category pages share this grid.

- CSS grid: `repeat(auto-fill, minmax(260px, 1fr))`, gap 24px.
- Cards are `ProductCard`.
- Filter sidebar on left at `lg+`, drawer on mobile.
- Sort dropdown top-right.
- Pagination: load-more button (button-secondary, full-width) at the bottom.

### 9.1 Filters

- Category checkbox group
- Price range slider
- Colour swatches (multi-select)
- Size (multi-select)
- "In stock now" toggle

### 9.2 Empty state

If no products match: a charcoal card with the message "No matches. Drop the filters or hit us up directly." plus a WhatsApp button.

---

## 10. Product detail page (`<ProductDetail />`)

The most-detailed page in the site. Sells one product hard.

**Layout:**

- Breadcrumb top.
- Hero block: image gallery left (square, with thumbnail strip below), product info right.
- Info block contains: title (h1), eyebrow (category), short tagline, key spec list, price, CTAs (WhatsApp + Quote), colour swatches, size options.
- Tabs below: Specs, Sizing chart, Care, Branding options.
- Related products carousel.
- Sticky mobile CTA bar.

### 10.1 The colour swatch picker

- Round 32px swatches.
- 2px `--neutral-200` border default.
- Selected: 2px `--orange-500` border with 2px white inner border.
- Hover: shadow-sm.
- Aria labels include the colour name.

### 10.2 The size picker

- Pill buttons in a row.
- Each pill is 56 x 40px.
- Default: white fill, charcoal border.
- Selected: charcoal fill, white text.
- Out of stock: 40% opacity, strikethrough, not selectable.

---

## 11. Toasts and feedback

shadcn `Sonner` themed with tokens.

- Position: bottom-right desktop, top mobile.
- Success toast: `--success-50` bg, `--success-500` icon.
- Error toast: `--danger-50` bg, `--danger-500` icon.
- Info toast: `--neutral-100` bg, `--neutral-700` text.

---

## 12. Modals and sheets

shadcn `Dialog` and `Sheet`.

- Backdrop: `rgba(17, 17, 17, 0.6)`.
- Modal background: `--brand-white`.
- Modal radius: `--radius-lg`.
- Close button top-right, `--icon-md`.

---

## 13. Component checklist (build order)

1. `button` (with all 6 variants)
2. `Input`, `Textarea`, `Select`, `Checkbox`, `RadioGroup`
3. `SiteHeader` and `MobileDrawer`
4. `SiteFooter`
5. `TuffBlock`
6. `ProductCard`
7. `CategoryCard`
8. `FeatureCard` and `TrustStrip`
9. `CatalogueGrid` with filters
10. `ProductDetail`
11. `HomeHero`
12. `QuoteForm`
13. `Toast` integration

Build the first 5 before any page work starts. They're the spine of the site.

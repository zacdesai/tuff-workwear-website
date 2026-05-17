# 02 — Design guide

How to apply the tokens. If `01-design-tokens.md` answers "what's the value?", this file answers "when do I use it?"

---

## 1. The Tuff design feel, in one paragraph

Tuff is a workwear brand. The design should look like the gear: heavy, honest, built to take a beating. The site reads from a working buyer's screen at 7am on a building site, not from a creative director's MacBook. That means high contrast, strong type, prices you can read from across a yard, and CTAs that get out of the way once tapped. Charcoal is the atmosphere. Orange is the action. White is the catalogue. That's the whole system.

---

## 2. Type system in practice

### 2.1 Hero pattern

The hero pulls directly from the brand ads. Three layers:

1. **Wordmark or display headline** in Archivo Black, sized at `--text-display-xl` on desktop, white text on charcoal.
2. **Tagline** in Inter italic, sized `--text-md`, light grey or white at 80% opacity. The tagline `Built Tough. Priced Right.` is the brand line and should appear at least once per page.
3. **The orange rule** — a 4px solid `--brand-orange` line, full-width of the headline block. This is the visual signature pulled straight from the logo.

The headline can be either the wordmark image or live text. Live text is preferred for SEO; only use the wordmark image on the global header.

### 2.2 Heading hierarchy

| Tag | Token | Weight | Family | Notes |
| :--- | :--- | :--- | :--- | :--- |
| `h1` | `--text-4xl` to `--text-display` | 900 | Archivo Black | One per page. Page title. |
| `h2` | `--text-3xl` | 900 | Archivo Black | Section title. Pair with the orange rule below. |
| `h3` | `--text-2xl` | 700 | Inter | Subsection title. |
| `h4` | `--text-xl` | 700 | Inter | Card title, panel header. |
| `h5` | `--text-lg` | 600 | Inter | Small group header. Used rarely. |
| `h6` | `--text-sm` uppercase | 600 | Inter, tracking-wider | Eyebrow label above an h2. Used for nav-style labels like "Conti Suits". |

Never use Archivo Black below h2 size. It gets too chunky and reads as shouty.

### 2.3 Body copy rules

- Default body is `--text-base` Inter 400 with `--leading-normal`.
- Long-form (about page, future blog) bumps to `--text-md` with `--leading-relaxed`.
- Max line length is 70 characters. Use a `max-w-prose` container.
- South African English. "Colour", not "color". "Realise", not "realize".
- No em dashes. Use commas, periods, parens.

### 2.4 The price treatment

Prices are a brand asset. They get specific treatment.

- Prices are always Inter, weight 700, with `tabular-nums`.
- The currency prefix `R` is included with no space: `R149.00`.
- On dark surfaces, prices use `--brand-white` text with `--shadow-glow-orange` applied as a CSS `text-shadow`. This carries through from the ad set.
- On light surfaces, prices use `--orange-700` and skip the glow.
- Sale or discounted prices: original price gets a strikethrough in `--neutral-400`, sale price stays in the standard treatment.

Example CSS for price-on-dark:

```css
.price-emphasis {
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  color: var(--brand-white);
  text-shadow: var(--shadow-glow-orange);
}
```

---

## 3. Colour usage

### 3.1 The 60 / 30 / 10 split

Use this as a sanity check for any page.

- **60% neutral** (white or charcoal). Surfaces, big areas.
- **30% supporting** (the other neutral, plus light greys). Borders, dividers, secondary text, photo-rich areas.
- **10% orange**. CTAs, prices, brand markers, the underline rule.

If a page is more than 15% orange, pull back. The orange loses meaning when it's everywhere.

### 3.2 What gets each colour

| Element | Colour |
| :--- | :--- |
| Primary CTA button | `--brand-orange` fill, `--brand-white` text |
| Secondary button | `--brand-white` fill, `--brand-charcoal` border, charcoal text |
| Tertiary / link | Underlined, `--brand-charcoal` text, `--brand-orange` on hover |
| Page background | `--brand-white` |
| Hero / feature panel | `--brand-charcoal` |
| Footer | `--neutral-900` |
| Body text on white | `--neutral-900` |
| Body text on charcoal | `--brand-white` |
| Secondary text on white | `--neutral-500` |
| Secondary text on charcoal | `--neutral-300` |
| Card border on white | `--neutral-200` |
| Active / selected | `--orange-500` |
| Hover on filled CTA | `--orange-600` |
| Active / pressed CTA | `--orange-700` |
| Focus ring (everywhere) | 2px `--orange-500` with 2px offset |
| Form error text | `--danger-500` |
| In-stock pill | `--success-500` on `--success-50` |
| Out-of-stock pill | `--danger-500` on `--danger-50` |

### 3.3 Don't do

- Don't put orange text on charcoal at small sizes. Contrast checks pass at body size, but the orange vibrates against charcoal at 12px and below. Use white instead.
- Don't tint photography orange. If a product needs more presence, increase its size, don't recolour it.
- Don't use orange backgrounds for sections. The contact bar in the ad layouts uses a darker brown-orange (`--orange-700`) which is fine. The bright `--orange-500` should never be a section fill.
- Don't put two orange elements next to each other. If a button and a price both want orange, the price wins, the button goes secondary.

---

## 4. Photography and imagery

### 4.1 Three image classes

The catalogue ad work uses three distinct treatments. The website carries all three through.

**Class A: Cut-out product on dark.** A model or product photo with the background removed, placed on a `--brand-charcoal` panel. Used in heroes and feature blocks. Matches the ad anatomy template directly.

**Class B: Clean product on white.** A flat-lay or front-facing product on white, no shadow, edges sharp. Used in catalogue grids. Matches the Vulcan reference.

**Class C: Lifestyle on site.** A worker on a building site, full colour, landscape format. Used sparingly in storytelling sections, never in catalogue listings.

### 4.2 Aspect ratios

| Use | Ratio |
| :--- | :--- |
| Hero (desktop) | 16:9 |
| Hero (mobile) | 4:5 |
| Product card thumb | 4:5 |
| Product detail (gallery) | 1:1 (square), with optional zoom |
| Category tile | 3:2 |
| Lifestyle banner | 21:9 |

### 4.3 Image quality and delivery

- Source assets at 2x intended display size.
- Use `next/image` with the `priority` flag on hero images only.
- WebP preferred, JPEG fallback handled by Next automatically.
- Cap product card thumbnails at 80KB after compression.
- Never use stock photography of generic "happy workers". Either we shoot it, or we use Vulcan's official catalogue shots.

### 4.4 Backgrounds

Cut-out product shots sit on `--brand-charcoal` (`#2D2D2D`). Pure black is too harsh; the ad set uses charcoal for a reason. Match it.

---

## 5. Iconography

### 5.1 Two icon systems

Tuff has two icon needs and they don't overlap.

**Brand icons** are the orange filled silhouettes from the brand guide: Quality Assurance, Safety Footwear, Triple Stitched, Nationwide Delivery, Contact Us, Best Value, Safety Wear, All Sizes. These are used in feature grids and trust strips. Treat them as illustrations, not as functional icons.

**UI icons** come from Lucide React. These power navigation, form fields, buttons, and any small interactive element. They live in the body text colour, not orange.

### 5.2 Brand icon usage

- Always orange (`--orange-500`) on white.
- Always set inside a 1:1 white square with a 1px `--neutral-200` border.
- Always label them. The label sits below the icon in `--text-sm` Inter 500.
- Sized at `--icon-2xl` (48px) for feature grids.
- Never resize below 32px.

### 5.3 UI icon usage

- Default size `--icon-sm` (16px) inline with text.
- Stroke-based, 1.5px stroke (Lucide default).
- Same colour as the text they sit beside.
- Get an aria-label or aria-hidden, never both missing.

---

## 6. Layout and grid

### 6.1 Page rhythm

Every page follows the same vertical rhythm:

```
[ Sticky header ]
[ Hero (charcoal, full-bleed) ]
[ Section 1 (white) ]
[ Section 2 (light grey #F7F7F7) ]
[ Section 3 (charcoal, full-bleed) ]
[ Footer (neutral-900) ]
```

The alternation of charcoal and white creates the "ad-poster" rhythm the brand already uses in print. Don't break the alternation without a reason.

### 6.2 Section padding

| Breakpoint | Vertical padding |
| :--- | :--- |
| Mobile | `--space-12` (48px) top and bottom |
| Tablet | `--space-16` (64px) |
| Desktop | `--space-20` (80px) |
| Hero on desktop | `--space-24` (96px) |

### 6.3 Grid

Default 12-column grid, 24px gap on desktop, 16px on mobile. Catalogue listings use a CSS grid with `repeat(auto-fill, minmax(260px, 1fr))` so the cards stay the right density on every screen.

---

## 7. Motion and interaction

### 7.1 The Tuff motion vocabulary

Movement should feel mechanical. A button press is a press, not a wobble. A card hover is a lift, not a float. Animations should look like a machine actuating, not like a balloon.

- No bouncy easings. No overshoot. No spring physics.
- Default duration 200ms.
- Hover states swap colour with `--duration-fast` (120ms).
- Reveal-on-scroll uses opacity + 8px translate, never blur, never scale.

### 7.2 Interactive feedback

- **Hover** (pointer devices): swap colour, lift 2px on cards, never animate the orange rule.
- **Focus**: 2px solid `--orange-500` ring with 2px offset. This is the same on every interactive element.
- **Active / pressed**: scale `0.98` on buttons, no scale on cards.
- **Loading**: skeleton screens for product grids, never a spinning wheel except inside form submits.

### 7.3 What doesn't move

The wordmark. Section headlines. The price. These hold steady. They are the brand markers and they should feel like fixed points on the page.

---

## 8. Accessibility

### 8.1 Targets

- WCAG 2.2 AA minimum. AAA for body text where the contrast permits.
- All actions reachable by keyboard.
- All images have alt text or `alt=""` where decorative.
- Focus visible at all times.
- Forms labelled. Errors announced via `role="alert"`.

### 8.2 Contrast checks (already verified)

| Pair | Ratio | Verdict |
| :--- | :--- | :--- |
| `--brand-white` on `--brand-charcoal` | 12.2:1 | AAA |
| `--brand-white` on `--brand-orange` | 3.7:1 | AA Large only. Use orange CTAs at 16px+ bold or 18px+ regular. |
| `--brand-charcoal` on `--brand-white` | 12.2:1 | AAA |
| `--brand-charcoal` on `--brand-orange` | 3.3:1 | Borderline. Avoid this combo for body text. |
| `--orange-700` on `--brand-white` | 5.6:1 | AA. Use this for orange links on white. |

### 8.3 Specific rules

- Buttons must have a min hit area of 44 x 44px on mobile.
- Hero text never sits below `--text-md` so it stays readable.
- Form labels are always visible. Placeholders are never the only label.
- The skip-to-content link sits at the very top of the page, hidden until focused.

---

## 9. The "ad anatomy" pattern

The brand guide ships an Ad Layout Anatomy template (brand_guide_ad_anatomy.png). The website should re-use it as a recurring section pattern, called the **Tuff Block**.

The Tuff Block is a charcoal-background panel with these elements stacked vertically:

1. Brand header (wordmark or live text headline)
2. Orange rule (4px)
3. Tagline in italic Inter
4. Product title in Archivo Black
5. Sub-spec in orange Inter italic
6. A two-column body: cut-out product image left, key features bullet list right
7. Price block with the orange glow
8. Contact bar (darker orange-700) with phone and tagline

This pattern shows up on the homepage, on landing pages for major categories, and on featured product detail pages. Build it as a single component (`<TuffBlock />`) so it's consistent and easy to populate.

---

## 10. Don't list

A list of things that look correct but aren't. Watch for these in code review.

- Don't add gradient orange. Tuff orange is flat. Gradients soften the brand.
- Don't add box-shadow to orange CTAs except on hover.
- Don't apply rounded corners larger than 8px outside chips.
- Don't use Lucide icons in orange. They sit at body colour.
- Don't typeset prices in Archivo Black. Inter only.
- Don't centre body copy in long sections. Left-align.
- Don't use placeholder text as the only label.
- Don't use ALL CAPS for body or button text. Use the natural case set by the wordmark.
- Don't put more than one primary CTA in the same viewport.

# 04 — Information architecture

Sitemap, page templates, URL structure, and the content patterns that make the site browseable for a buyer who lands on it cold.

---

## 1. Sitemap

```
/                                       (Home)
├── /catalogue                          (All products)
│   ├── /catalogue/conti-suits
│   │   ├── /catalogue/conti-suits/econo
│   │   ├── /catalogue/conti-suits/premium
│   │   ├── /catalogue/conti-suits/denim
│   │   └── /catalogue/conti-suits/[slug]   (product detail)
│   ├── /catalogue/hi-viz
│   ├── /catalogue/safety-boots
│   │   └── /catalogue/safety-boots/[slug]
│   ├── /catalogue/apparel
│   │   ├── /catalogue/apparel/golf-shirts
│   │   ├── /catalogue/apparel/t-shirts
│   │   └── /catalogue/apparel/[slug]
│   ├── /catalogue/jackets
│   └── /catalogue/protective-gear
├── /branding                           (Screen printing + embroidery services)
├── /bulk-orders                        (How bulk pricing + MOQ work)
├── /about                              (Company story, link to Vulcan/Taurus group)
├── /contact                            (Contact form, address, map)
├── /quote                              (Quote request form)
└── /legal
    ├── /legal/terms
    ├── /legal/privacy
    └── /legal/popia
```

Total: 7 top-level pages plus the catalogue tree. Small enough to keep cohesive, big enough to look serious.

### 1.1 URL rules

- All lowercase.
- Hyphens, not underscores.
- Single noun or noun phrase.
- Product slugs derive from the product code + short name: `conti-suit-econo-navy-80-20` for example.
- No trailing slashes.

---

## 2. Page templates

Each page maps to one template. Templates live in `app/(routes)/.../page.tsx` and lean on the components from `03-component-system.md`.

### 2.1 Home (`/`)

```
SiteHeader
PromoStrip (optional)
HomeHero
TrustStrip
TuffBlock — featured product (e.g. Econo Conti Suit)
CategoryGrid (6 cards: Conti Suits, Hi-Viz, Boots, Golfers, T-Shirts, Branding)
TuffBlock — secondary featured product (e.g. Kirin Safety Boots)
HowToOrder (5-step strip, pulled from the Vulcan reference pattern)
TestimonialQuote (1, large, charcoal section)
ContactBar (orange-700 strip, mirrors the ad contact bar)
SiteFooter
```

### 2.2 Catalogue index (`/catalogue`)

```
SiteHeader
Breadcrumb
PageTitle: "Catalogue"
CategoryGrid (all top-level categories)
SiteFooter
```

### 2.3 Category page (`/catalogue/[category]`)

```
SiteHeader
Breadcrumb
CategoryHero (charcoal, name + 1-line description)
CatalogueGrid with filters
SiteFooter
```

### 2.4 Product detail (`/catalogue/[category]/[slug]`)

```
SiteHeader
Breadcrumb
ProductDetail
RelatedProducts (carousel of 6)
TrustStrip (compressed version, 4 icons)
SiteFooter
StickyCtaBar (mobile only)
```

### 2.5 Branding services (`/branding`)

```
SiteHeader
PageHero (charcoal): "Screen printing and embroidery"
TwoColumn explainer: artwork specs + lead times
TuffBlock: a sample branded golf shirt
ProcessStrip (4 steps: brief, mockup, approve, ship)
QuoteForm
SiteFooter
```

### 2.6 Bulk orders (`/bulk-orders`)

```
SiteHeader
PageHero: "Kit out a crew"
PriceTable (MOQ tiers)
TuffBlock (best-value bulk pack)
QuoteForm
SiteFooter
```

### 2.7 About (`/about`)

```
SiteHeader
PageHero (charcoal): "Tuff Workwear, Durban"
LongFormProse (the story: Taurus group, Vulcan factories, what we do, why we do it)
TeamStrip (optional, only if photos exist)
ContactBar
SiteFooter
```

### 2.8 Contact (`/contact`)

```
SiteHeader
PageHero: "Talk to us"
TwoColumn: contact details left, map right (Google Maps embed of 89 Daintree Avenue)
ContactForm
SiteFooter
```

### 2.9 Quote (`/quote`)

```
SiteHeader
PageHero (charcoal): "Get a quote"
QuoteForm (the long form)
TrustStrip
SiteFooter
```

---

## 3. Content patterns

### 3.1 The product card content rule

Every product card needs all 5:

1. Image (Class B, white background)
2. Category eyebrow
3. Product name
4. One-line spec ("80/20 poly cotton, triple stitched")
5. Price + MOQ chip

If any of these is missing, don't ship the card. Pull the product or write the missing piece.

### 3.2 The product detail content rule

Every product detail page needs:

- Hero image gallery (3 minimum, 6 ideal)
- Tagline (one line, what makes this product good)
- 5-point spec list
- Price (with MOQ explanation)
- Colours available
- Sizes available
- Care instructions
- Branding compatibility (yes/no, with link to /branding if yes)

### 3.3 The catalogue listing rule

Every category landing has:

- A hero with a one-paragraph intro that mentions price range and MOQ.
- A filter bar with at least Category, Colour, Size.
- A grid of products, sorted by "best seller" by default.
- A "Can't find what you need?" card at the bottom that opens the WhatsApp link.

### 3.4 Empty states

Empty states get product-first copy, never apologies.

- Empty search: "No matches. Drop a filter or WhatsApp us with what you're after."
- 404: "This page is out of stock. Try the catalogue."
- Form submitted: "Got it. We'll come back to you on WhatsApp within the hour."

---

## 4. Conversion paths

The site has 4 ways for a buyer to convert. Every page must include at least one.

| Path | Where | Surface |
| :--- | :--- | :--- |
| WhatsApp | Header, every product card, every TuffBlock, sticky mobile bar, footer | One tap, prefilled message |
| Phone | Header, every TuffBlock, footer, contact page | Tel link with `tel:+27834744343` |
| Email | Footer, contact page | `mailto:` with prefilled subject |
| Quote form | Dedicated page, every category page footer, branding page | Multi-field form |

WhatsApp is the highest-priority path. Every WhatsApp link should prefill a message that includes the product code or page reference, so sales can pick up context immediately.

Example WhatsApp prefill for the Econo Conti Suit page:

```
https://wa.me/27834744343?text=Hi%20Tuff%2C%20I'm%20interested%20in%20the%20Econo%20Conti%20Suit%20(R149).%20Can%20you%20send%20stock%20availability%3F
```

---

## 5. SEO notes

### 5.1 Title pattern

| Page | Pattern |
| :--- | :--- |
| Home | `Tuff Workwear · Conti suits, boots, hi-viz from Durban` |
| Category | `[Category] · Tuff Workwear` |
| Product | `[Product name] · From R[price] · Tuff Workwear` |
| Branding | `Screen printing and embroidery · Tuff Workwear` |
| Bulk | `Bulk workwear orders · Tuff Workwear` |
| About | `About · Tuff Workwear` |
| Contact | `Contact · Tuff Workwear` |

### 5.2 Description pattern

Always include: product or category name, price entry point, MOQ, location ("Durban / South Africa"), one trust marker ("SABS approved", "triple stitched", "made in SA").

### 5.3 Schema markup

- `Organization` schema in the root layout.
- `Product` schema on every product detail page.
- `BreadcrumbList` schema on all non-home pages.
- `LocalBusiness` schema on the contact page.

### 5.4 Local SEO

- Address embedded as plain text in the footer.
- Google Business Profile linked.
- Phone number formatted as `+27 83 474 4343` consistently.
- Add a Durban-area lat/long to the LocalBusiness schema.

---

## 6. Performance budgets

| Metric | Target |
| :--- | :--- |
| LCP | under 2.0s on 4G |
| INP | under 200ms |
| CLS | under 0.05 |
| Total page weight (home) | under 800KB |
| Image weight per product card | under 80KB |
| JS bundle (initial) | under 150KB gzip |

If a page can't hit these, drop a feature, not the budget.

---

## 7. Build sequence

A practical order to ship in 4 to 6 weeks.

**Week 1** — Tokens, Tailwind config, shadcn baseline, fonts, Vercel deploy.

**Week 2** — Header, Footer, Hero, TuffBlock, ProductCard. Static homepage with placeholder data.

**Week 3** — Catalogue index, category page, product detail page. MDX-driven content.

**Week 4** — Quote form + WhatsApp deep links. About, Contact, Branding pages.

**Week 5** — SEO schema, sitemap.xml, robots.txt, 404 page, performance pass.

**Week 6** — Photography integration, real product data, copy review, launch.

---

## 8. Content sources

- Product specs and pricing: `Vulcan Catalogue_2026_March.pdf` and `Vulcan Price List 2026.pdf` (already in the Design folder).
- Brand voice: `VOICE DNA — TUFF WORKWEAR.md` and `Tuff Workwear General Writing Rules.md`.
- Imagery: brand assets folder for logo and ads. Product photography needs a clear answer (re-shoot vs Vulcan-supplied) before catalogue build.
- Contact details: 89 Daintree Avenue, Durban. 083 474 4343. Confirm email address before launch.

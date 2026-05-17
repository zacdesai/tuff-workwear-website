# 05 — Voice DNA applied to UI copy

The voice rules in `VOICE DNA — TUFF WORKWEAR.md` are the source of truth. This file translates them into the small surfaces a website is full of: button labels, error messages, empty states, form helpers, toast text. Get these right and the brand reads as Tuff even before anyone scrolls.

---

## 1. Voice rules at the UI level

The full voice doc applies. In UI specifically, this is what matters:

- Short. Tap-target copy is 1 to 4 words. Form helpers are 1 sentence.
- Direct address. "You", "we", "us".
- Contractions always.
- South African spelling: colour, realise, organise.
- No banned words. Not even in micro-copy.
- No em dashes. Use commas, periods, parens.
- No marketing fluff in errors. State the problem, give the next step.
- Specifics over abstractions. "WhatsApp 083 474 4343" is better than "Get in touch".

---

## 2. Buttons

### 2.1 The button label rules

- Verb-led. The label says what the button does.
- Title case is fine for buttons (the only place that's true on the site).
- Max 3 words ideal, 4 words hard cap.
- WhatsApp gets its own label. Don't say "Contact us". Say "WhatsApp us".

### 2.2 Approved button labels

| Use | Label |
| :--- | :--- |
| Primary contact | `WhatsApp Us` or `WhatsApp 083 474 4343` |
| Phone | `Call Tuff` or just `Call 083 474 4343` |
| Quote form submit | `Send Quote Request` |
| Catalogue link | `See the Range` or `View Catalogue` |
| Product detail link | `View Product` |
| Add to enquiry list | `Add to Quote` |
| Branding services | `Get a Mockup` |
| Newsletter | `Subscribe` |
| Open mobile menu | `Menu` |
| Close drawer / modal | `Close` |
| Form cancel | `Cancel` |
| Generic next step | `Continue` |

### 2.3 Banned button labels

These read as filler or as AI defaults. Don't use them.

- `Click here` (always bad)
- `Learn more` (vague)
- `Get started` (no specificity)
- `Discover` (banned word territory)
- `Explore the range` ("explore" is on the dead-words list)
- `Submit` (use the actual action: "Send", "Subscribe", "Request")
- `Read more` (in product card context, use `View Product`)

---

## 3. Form helpers and labels

### 3.1 Field labels

Plain English nouns. No instructions in the label itself.

- Name
- Phone
- Email
- Company (optional)
- Province
- Order quantity
- Notes (optional)

The `(optional)` marker is in `--text-xs` `--neutral-500`, sits inline next to the label.

### 3.2 Helper text

One short sentence. Plain.

- Phone: `WhatsApp number works best.`
- Email: `We'll send the quote here.`
- Quantity: `MOQ is 10 units per item.`
- Notes: `Anything we should know? Branding, delivery dates, sizes.`

### 3.3 Placeholder text

Placeholders are examples, not labels. Always grey.

- Name: `Sipho Khumalo`
- Phone: `083 474 4343`
- Email: `you@company.co.za`
- Company: `Khumalo Construction`
- Notes: `Need 30 navy conti suits, size 32 to 44, by next Friday`

Use realistic SA names and SA-formatted numbers. It tells the buyer the form is for them.

### 3.4 Error messages

Format: what went wrong, what to do.

- Empty required field: `Add your name.` / `Add your phone number.` / `Add an email.`
- Invalid email: `That email looks off. Check it and try again.`
- Invalid phone: `Phone needs to be 10 digits, starting 0 or +27.`
- Form submit failed: `Couldn't send. Try WhatsApp us on 083 474 4343 instead.`
- Network error: `No connection. Check your signal and try again.`

Note the last two: when the form fails, we route the buyer to a working channel. We don't leave them stuck.

### 3.5 Success messages

Direct. No congratulations.

- Form submit: `Got it. We'll come back to you on WhatsApp within the hour.`
- Newsletter: `You're in. We'll only send when there's something worth knowing.`

---

## 4. Empty states

A user hits an empty state when they search for something we don't carry, filter too hard, or land on a missing page. Each one is a chance to redirect to a working path.

| State | Copy |
| :--- | :--- |
| No products match filters | `No matches. Drop a filter or WhatsApp us with what you're after.` |
| Search no results | `Nothing came up for "[query]". Try a different word, or hit us up on WhatsApp.` |
| 404 | `This page is out of stock. Try the catalogue, or WhatsApp 083 474 4343.` |
| 500 | `Something broke our side. Refresh, or WhatsApp 083 474 4343 and we'll sort it.` |
| Cart empty (future) | `Nothing in your enquiry yet. Browse the catalogue and add what you need.` |

Always offer a direct route out. Always.

---

## 5. Toast and snackbar text

Toasts are 1 sentence. They appear, they say what happened, they leave.

| Toast | Copy |
| :--- | :--- |
| Form sent | `Quote request sent. Check your email.` |
| Form failed | `Couldn't send. Try again or WhatsApp us.` |
| Newsletter signup | `Subscribed. Welcome.` |
| Copied to clipboard (e.g. phone number) | `Copied 083 474 4343.` |
| Item added to enquiry | `Added [Product name] to your enquiry.` |
| Item removed from enquiry | `Removed.` |

---

## 6. Section headers (sentence case)

The voice DNA bans title case in headers. Sentence case throughout the site, on every section header, on every page title.

Right:
- `What we stock`
- `Built tough. Priced right.` (the tagline)
- `How to order`
- `Bulk pricing that makes sense`
- `Made in SA`

Wrong (AI defaults):
- `What We Stock`
- `Built Tough, Priced Right` (loses the period rhythm)
- `How To Order`

The tagline `Built Tough. Priced Right.` is the one place title-case-ish capitalisation is locked in. Treat it as a fixed string, never modify it.

---

## 7. Eyebrow labels

Eyebrows are the small uppercase tag above a section title. They go ALL CAPS with `tracking-wider`. They are the only place all-caps copy is permitted.

| Section | Eyebrow |
| :--- | :--- |
| Conti suit category | `CONTI SUITS` |
| Hero category strip | `WHAT WE STOCK` |
| Trust strip | `WHY TUFF` |
| Process section | `HOW TO ORDER` |
| About | `THE STORY` |

---

## 8. Trust strip copy

The brand-icon row at the top of pages. Each card has 1-3 words below the icon.

| Icon | Label | Optional sub-line |
| :--- | :--- | :--- |
| Quality Assurance | `SABS approved` | `Tested fabric, tested factories.` |
| Triple Stitched | `Triple stitched` | `Inside leg, back rise, stress points.` |
| Safety Footwear | `Steel toe caps` | `Tested to SANS 20345.` |
| Nationwide Delivery | `Delivered nationwide` | `Courier or pick-up in Durban.` |
| Best Value | `Bulk pricing` | `MOQ 10 per item.` |
| Safety Wear | `Hi-viz stock` | `Class 2 reflective.` |
| All Sizes | `Size 30 to 56` | `Full-cut patterns.` |
| Made in SA | `Made in SA` | `Vulcan factories, since 1925.` |

---

## 9. Product copy templates

### 9.1 The product tagline

One sentence, leads with material or feature. No adjectives stacked.

Right:
- `80/20 poly cotton conti suit. Triple stitched, bar-tacked, full-cut.`
- `Steel toe cap leather safety boot. SANS-approved.`
- `100% cotton heavyweight T-shirt, 180gsm. 16 colours, all sizes.`

Wrong:
- `Premium quality conti suit, designed for the modern worker.`
- `Innovative safety boots that combine durability with style.`

### 9.2 The product spec list

- 5 to 8 bullets max.
- Each bullet is a fact, not a claim.
- Verbs over adjectives.

Pattern:
```
- 80/20 poly cotton, 230gsm
- Triple stitched inside leg and back rise
- Bar tacked at all stress points
- Press stud and pen pocket on jacket
- Full-cut pattern, sizes 30 to 56
- Available in 8 colours
```

### 9.3 The price block

Always:
```
R[price]
[unit]    [MOQ chip: "MOQ 10"]
```

Examples:
```
R149.00
each      MOQ 10

R235.00
per suit  MOQ 10
```

The MOQ chip is a pill in `--orange-100` with `--orange-800` text. It sits next to the unit on the same line.

---

## 10. Footer copy

The footer carries voice across the whole site. Don't autopilot.

```
Tuff Workwear · Built Tough. Priced Right.
89 Daintree Avenue, Durban
083 474 4343 · sales@tuffworkwear.co.za

Catalogue          Company        Contact
Conti suits        About          WhatsApp us
Hi-viz             Branding       Email us
Boots              Bulk orders    Visit the showroom
Apparel            Distributors

Subscribe to stock and price updates
[ Email input ] [ Subscribe ]

© 2026 Tuff Workwear · Part of the Taurus group · POPIA · Terms · Privacy
```

The newsletter line `Subscribe to stock and price updates` is intentional. It tells the buyer exactly what they'll get. No "stay in the loop" or "join our community".

---

## 11. Promo strip copy

The thin orange-700 bar at the top. Used for active promos. Keep it 1 sentence, no exclamation marks.

Examples that fit:
- `Bulk MOQ 10 specials this month. WhatsApp 083 474 4343.`
- `New stock: Premium conti suits in red and emerald. R235 each.`
- `Free Durban delivery on orders over R5000.`

Examples that don't fit (AI shapes):
- `Don't miss out on our amazing deals!`
- `Limited time offer — act fast!`
- `Unlock exclusive bulk savings today.`

---

## 12. Litmus test

Before any UI string ships, ask: **does this sound like Tuff Workwear talking, or like a default e-commerce theme?**

If it sounds like a default theme, rewrite it. The rewrite should feel like Sipho the rep typing on his phone, not like a Shopify settings page.

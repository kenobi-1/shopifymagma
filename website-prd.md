# MAGMA ENERGY — Product Requirements Document

## What We're Building
A custom Shopify homepage + product page that feels like WIP.com but for MAGMA ENERGY pouches. Dark, bold, animated, premium. Built on Dawn theme with custom Liquid sections.

## Product Details
- **Name:** MAGMA ENERGY
- **Product:** Energy pouches (bolsitas de energía) — nicotine-free
- **SKU:** 15 pouches per can, 100mg natural caffeine each
- **Flavors:** Mint (Menta) — more to come
- **Benefits:** No calories | No sugar | No nicotine | Natural caffeine | Vitamins B6 + B12
- **Origin:** Made in Argentina
- **Price:** TBD by owner in Shopify admin

---

## Homepage Sections (top to bottom)

### 1. Announcement Bar
- Dark background `#111111`, teal text
- Rotating messages: "🔥 Sin Calorías • Sin Azúcar • Sin Nicotina" / "⚡ 100mg Cafeína Natural por Bolsita" / "🇦🇷 Hecho en Argentina"
- Auto-rotates every 3s with fade transition

### 2. Navigation
- Sticky, transparent on hero → solid `#080808` on scroll
- Logo: MAGMA ENERGY wordmark (white)
- Links: Comprar | Beneficios | Por Qué MAGMA | Tiendas
- Cart icon with item count badge in teal
- Mobile: hamburger → full-screen dark overlay menu

### 3. Hero Section
ASCII layout:
```
┌─────────────────────────────────────────────────────┐
│  [lightning bolt background pattern — teal + yellow] │
│                                                       │
│  ENERGÍA         ← Bebas Neue, 180px, white           │
│  SIN LÍMITES     ← Bebas Neue, 180px, teal accent     │
│                                                       │
│  100mg cafeína natural. Sin calorías. Sin nicotina.  │
│  La energía que necesitás, en una bolsita.           │
│                                                       │
│  [COMPRAR AHORA →]   [VER BENEFICIOS]                │
│                                                       │
│  [Product can image — center, floating animation]    │
└─────────────────────────────────────────────────────┘
```
- Full viewport height
- Animated: headline slides up word by word on load
- Product image floats with subtle CSS keyframe (up/down 10px, 3s infinite)
- Background: black with subtle teal radial glow behind product
- CTA button: teal fill, black text, 0 border-radius... sharp corners

### 4. Benefits Strip (scrolling ticker)
- Horizontal auto-scrolling ticker (infinite loop)
- Items: ⚡ CAFEÍNA NATURAL · ✦ SIN CALORÍAS · ✦ SIN AZÚCAR · ✦ SIN NICOTINA · ✦ VITAMINAS B · ✦ HECHO EN ARGENTINA ·
- White text on `#111111` background, fast scroll (~30s loop)
- Separator: small yellow ✦ diamond icon

### 5. "Cómo Funciona" — How It Works
- 3-column grid on desktop, stack on mobile
- Black background, cards in `#111111`
ASCII:
```
┌──────────┐  ┌──────────┐  ┌──────────┐
│   [01]   │  │   [02]   │  │   [03]   │
│  Abrí    │  │  Colocá  │  │  Sentí   │
│  la lata │  │  bajo el │  │  la      │
│          │  │  labio   │  │  energía │
└──────────┘  └──────────┘  └──────────┘
```
- Large teal step numbers (Bebas Neue, 80px)
- Short headline + 1–2 sentence description
- Scroll-triggered entrance animation (fade up, staggered)

### 6. Product Feature Section ("Por Qué MAGMA")
- Alternating layout: image left + text right, then text left + image right
- Feature 1: ENERGÍA LIMPIA — 100mg cafeína natural, sin el crash del café
- Feature 2: EN CUALQUIER LUGAR — Discreta, sin líquidos, sin vapor
- Feature 3: FÓRMULA COMPLETA — Vitaminas B6, B12, Niacina, Cromo
- Each has teal accent line, stat number in yellow (e.g. "100mg"), short paragraph

### 7. Stats Bar
- 4 stats, centered, black background with teal border-top and border-bottom
```
  100mg          0           0          15
Cafeína    Calorías     Azúcares    Bolsitas
Natural    por uso      por uso     por lata
```
- Numbers animate count-up on scroll-enter
- Bebas Neue for numbers (80px), Inter for labels

### 8. Product Grid / Shop Section
- Section title: "ELEGÍ TU MAGMA"
- Product cards from Shopify collections
- Card: dark `#111111` bg, product image, name, price, "COMPRAR →" button
- Hover: card lifts (translateY -4px, shadow teal glow)
- Initially show 1 product (Menta 100mg), placeholder for future flavors

### 9. Testimonials / Social Proof
- Dark section, 3 testimonial cards in a horizontal scroll (mobile) / grid (desktop)
- Quote in white, name + descriptor in teal
- Simple star rating (5 stars, yellow)

### 10. "Donde Comprar" (Store Locator placeholder)
- Full-width section, dark background with subtle map graphic
- Headline: "ENCONTRÁ MAGMA CERCA TUYO"
- Subtext + CTA button to a stores page or contact
- Can be a simple email/WhatsApp CTA for now

### 11. Newsletter / Waitlist
- Simple email capture: "SÉ EL PRIMERO EN SABER" 
- Email input + submit button (teal)
- Powered by Shopify's built-in email form

### 12. Footer
- 4 columns: Comprar | Empresa | Síguenos | Legal
- Social links: Instagram, TikTok
- "Hecho con ⚡ en Argentina"
- Fine print: "MAGMA ENERGY es un suplemento dietético. No es medicamento."

---

## Product Page Specs

### Layout (desktop)
```
[Product Image Gallery — left 55%] | [Product Details — right 45%]
                                   | MAGMA ENERGY
                                   | Menta — 100mg
                                   | [Price]
                                   | ─────────────────
                                   | ⚡ 100mg Cafeína Natural
                                   | ✦ Sin Calorías
                                   | ✦ Sin Azúcar  
                                   | ✦ Sin Nicotina
                                   | ✦ Vitaminas B6 + B12
                                   | ─────────────────
                                   | [AGREGAR AL CARRITO →]
                                   | [Compra segura 🔒]
```

### Below the fold — product page
- Accordion: "Cómo usar" | "Ingredientes" | "Preguntas Frecuentes"
- Related products (if multiple SKUs)

---

## Mobile Rules
- Hero: headline at 64px, product image below text (stacked)
- Benefits ticker: same, just slower
- How It Works: stacked vertically (1 column)
- Stats bar: 2x2 grid
- Product cards: single column scroll
- Nav: hamburger → fullscreen overlay
- All tap targets minimum 48px height

---

## Brand Voice
- Direct, energetic, no fluff
- Spanish (Argentine Spanish)
- Action-oriented: "Sentí la diferencia", "Activá tu energía"
- Never: "descubrí" (too soft) — use "sentí", "activá", "probá"
- No fake urgency ("¡Últimas unidades!" on a product that's in stock)
- OK to be bold: "La energía que necesitás, en una bolsita."

---

## What NOT to Include
- Countdown timers
- Pop-ups on first visit
- "As seen on" with fake logos
- Fake reviews
- Light backgrounds on any main section
- More than 2 CTAs per section

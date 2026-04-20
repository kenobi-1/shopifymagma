# MAGMA ENERGY — Claude Code Reference

## Project
Custom Shopify store for MAGMA ENERGY nicotine-free energy pouches. Built on Dawn theme. Full brief in `website-prd.md`. Design system in `DESIGN.md`.

## CLI Commands
```bash
# Preview locally (run in separate terminal)
shopify theme dev --store YOUR-STORE.myshopify.com

# Push to Shopify
shopify theme push --store YOUR-STORE.myshopify.com

# Check theme
shopify theme check
```

## Architecture
- Base theme: Shopify Dawn (latest)
- Custom sections: `sections/magma-*.liquid`
- Custom snippets: `snippets/magma-*.liquid`
- Global CSS: `assets/magma-base.css`
- Global JS: `assets/magma-global.js`
- Homepage template: `templates/index.json`
- Product template: `templates/product.json`

## Design Tokens (CSS variables — defined in magma-base.css)
```css
--color-bg: #080808;
--color-surface: #111111;
--color-surface-2: #1a1a1a;
--color-accent: #00C4B4;
--color-energy: #F5D020;
--color-text: #FFFFFF;
--color-muted: #888888;
--font-headline: 'Bebas Neue', sans-serif;
--font-body: 'Inter', sans-serif;
```

## Section Naming Convention
All custom sections prefixed `magma-`:
- `magma-hero.liquid` — Hero with floating product + animated headline
- `magma-ticker.liquid` — Infinite scrolling benefits strip
- `magma-how-it-works.liquid` — 3-step process
- `magma-why.liquid` — Feature alternating sections
- `magma-stats.liquid` — 4 animated stats
- `magma-shop.liquid` — Product grid
- `magma-testimonials.liquid` — Social proof
- `magma-newsletter.liquid` — Email capture
- `magma-stores.liquid` — Store locator / CTA

## Fonts
Load via Google Fonts in `layout/theme.liquid`:
- Bebas Neue: `https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap`
- Inter: `https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap`

## Animation Rules
- Scroll reveal: IntersectionObserver, threshold 0.15, class `.magma-animate` → `.magma-visible`
- Entry: `transform: translateY(30px); opacity: 0` → `translateY(0); opacity: 1`
- Duration: 0.6s, ease: `cubic-bezier(0.16, 1, 0.3, 1)`
- Stagger: 0.1s delay per sibling via `--delay` CSS var

## Key JS Behaviors
- Sticky nav: transparent → solid on scroll > 80px
- Stats counter: count-up animation on IntersectionObserver
- Ticker: CSS `animation: ticker Xs linear infinite`
- Mobile menu: toggle class on hamburger click
- Announcement bar: JS rotation every 3s with fade

## DO NOT
- Do not edit Dawn core sections (prefixed with default names)
- Do not use inline styles — use CSS variables
- Do not add light backgrounds
- Do not use serif fonts
- Commit after each completed section

# MAGMA ENERGY — Design System

## Brand Summary
MAGMA ENERGY sells nicotine-free caffeinated energy pouches (bolsitas). 100mg natural caffeine per pouch. No calories, no sugar. Vitamins B6, B12, Niacin, Chromium. Made in Argentina. Target: athletes, students, active people who want clean energy.

## Style Prompt
Bold, dark, high-energy. Think volcanic energy contained in a sleek, modern package. The brand radiates intensity through contrast: pure black backgrounds slashed by electric teal and explosive yellow. Typography hits hard — oversized, heavy, no apologies. Motion is fast and purposeful, not decorative. Every element earns its place. The aesthetic sits between premium supplement brand and streetwear — aspirational but accessible, Argentine roots, global energy.

## Colors

| Role | Hex | Usage |
|------|-----|-------|
| Background | `#080808` | All page backgrounds |
| Primary accent | `#00C4B4` | CTAs, highlights, borders, icons |
| Energy yellow | `#F5D020` | Lightning bolts, price tags, badges |
| Surface | `#111111` | Cards, nav, footer |
| Surface 2 | `#1A1A1A` | Hover states, section alternates |
| Text primary | `#FFFFFF` | Headlines, body |
| Text muted | `#888888` | Captions, labels, fine print |
| Error/heat | `#FF4438` | Alerts, urgency elements |

## Typography

- **Headlines:** `Bebas Neue` — all caps, tracked wide, used at 80–200px for hero; 40–60px for section heads
- **Subheadings / UI:** `Inter` — semibold 600, used at 16–24px
- **Body:** `Inter` — regular 400, 15–17px, line-height 1.6
- **Data / badges:** `Inter` — bold 700, mono features (`font-variant-numeric: tabular-nums`)
- **Accent labels:** `Inter` — uppercase, letter-spacing 0.15em, 11–13px

## Motion Rules
- Entrance: fade + translateY(30px) → 0, duration 0.6s, ease `power3.out`
- Stagger: 0.1s between sibling elements
- Hover: scale(1.03) on cards, 0.2s ease
- Scroll-triggered: IntersectionObserver, threshold 0.15
- No bounces, no wobbles — energy is sharp, not playful

## What NOT to Do
- No white backgrounds, no light mode
- No rounded corners over 12px (except pill badges)
- No serif fonts
- No pastel colors
- No slow fade-ins over 1s
- No stock photo aesthetic — raw, real product photography only
- No fake countdown timers or fake reviews
- No pop-ups on first visit

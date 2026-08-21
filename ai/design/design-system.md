# SXS247 — Design System

**Stitch generation used** — real AI-generated homepage mockup.
Project: `projects/14962700852483718634` · Design system asset: `assets/5319060295648417904`
Model: GEMINI_3_1_PRO · Screenshot reviewed during build: night desert highway hero with amber
beacon lighting, dark charcoal nav/background, safety-orange primary CTA and section accents —
matches the hand-authored token set below closely (built in parallel, confirmed on review).
Stitch independently added a "for life-threatening emergencies, call 911 first" disclaimer,
converging with the same safety framing planned in research.

## Palette (exact hexes)
- Background: `#15191d` (night asphalt charcoal)
- Card/elevated: `#1f242a`
- Foreground: `#f5f3ef` (headlight white)
- Primary: `#ea6412` (safety/tow-truck orange)
- Accent: `#f5b400` (amber warning beacon)
- Muted: `#262c33` / `#9aa1a9`
- Border: `#303740`

## Typography
- Heading: Rajdhani (500/600/700) — condensed, technical/dispatch-HUD feel
- Body: Inter
- (Stitch design-system call used SPACE_GROTESK as its font enum — RAJDHANI isn't a supported
  Stitch font-enum value; the actual site implementation uses Rajdhani directly via next/font)

## Motif
Night-desert-highway emergency service: beacon-light glow, GPS pin, winch-cable accents. Dark-
dominant (fits the "24/7 nighttime dispatch" concept and differentiates clearly from
thrilloffroad.com's daytime warm-sand palette and streamsensei.com's dojo palette).

## Fallback disclosure
Not applicable — Stitch generation succeeded (design system + homepage) after one retry on the
design-system call (RAJDHANI font enum rejected; retried with SPACE_GROTESK, succeeded).

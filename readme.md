# West London Orthodontics — Design System

A brand & UI design system for **West London Orthodontics** (trading as *West London Orthodontist — Cosmetic Dental Studios*), a boutique specialist orthodontic and cosmetic dental practice in West London, led by **Dr Chaw‑Su Kyi** (Specialist Orthodontist of the Year, South East England) alongside Dr Sepideh Heydarian and team.

The practice treats children, teens and adults with clear aligners (Invisalign), fixed braces, retainers and cosmetic dentistry. The feel is **premium but warm** — a calm, design‑led townhouse clinic, not a sterile chain. This system captures that: a refined charcoal‑and‑rose‑taupe palette, the elegant Raleway typeface, the practice's signature labyrinth "fret" wallpaper motif, and warm, candid imagery.

> **Note on "remove the blue":** the source brand extraction contained no blue, and none is used here. The palette is deliberately warm — charcoal, rose‑taupe, bone, brass and walnut.

---

## Sources provided
- **Brand colour & type extraction** (Peek / westlondonorthodontist.co.uk, v0.8.9.1) — charcoal button colours, the `#825f62` dim‑gray accent, the radial gradient, and a 24‑style Raleway/Open Sans/Arial type inventory. Rationalised here onto a single Raleway scale.
- **Logo** — `West London Orthodontist Logo .svg` → `assets/logos/wlo-logo-full.svg`. A white‑on‑charcoal lockup (profile‑face mark + "West London Orthodontist / Cosmetic Dental Studios").
- **Raleway font family** — 18 TTF files (Thin → Black + italics). Self‑hosted; 9 weights wired in `tokens/fonts.css`.
- **Practice photography** — 11 JPGs of the interior, team and patient consultations → `assets/images/`. These are the canonical brand imagery.

There is **no codebase or Figma file** for this brand; the system is derived from the assets above plus the live practice environment shown in the photography.

---

## Content fundamentals — how WLO writes

- **Voice:** warm, reassuring, grown‑up. A specialist who explains things plainly. Confident without being salesy.
- **Person:** speak to the patient as **"you"**; refer to the practice as **"we"**. ("Treatment plans shaped around you.")
- **Tone:** calm and human. Lead with reassurance and outcomes ("a smile you'll love"), then the clinical detail. Acknowledge nerves; remove pressure ("no pressure, no jargon").
- **Casing:** sentence case for headings and body. **UPPERCASE only** for small eyebrows, button labels and badges (with wide letter‑spacing). Never all‑caps a sentence.
- **British English** throughout — "orthodontist", "personalised", "£", "0.18em", "GDC‑registered".
- **Punctuation:** em‑dashes for warmth and asides; the en‑dash in price ranges. Avoid exclamation marks except in genuinely celebratory patient‑facing moments.
- **Numbers & money:** "from £95/month", "£2,900", "20+ years". Always give a clear "from" price rather than hiding it.
- **Emoji:** none. The brand is refined; warmth comes from imagery and copy, not emoji.
- **Example phrases:** "Straighten with confidence." · "A calmer way to straighten." · "Book a consultation." · "Specialist orthodontics in the heart of West London." · "Finance options available."

---

## Visual foundations

- **Palette vibe:** warm and tonal. Near‑black **Ink `#1C1C1C`** (the logo field) is the anchor; **Mauve `#825f62`** — a rose‑taupe — is the single brand accent; **Bone `#F5F0EA`** and porcelain are the page neutrals. **Brass** (pendant‑light gold) and **walnut** (joinery) appear as small warm accents. Functional colours are desaturated and warm (sage success, brass warning, brick error). **No blue.**
- **Typography:** **Raleway** is the only typeface. Large headings use Light/ExtraLight (200–300) with slightly tight tracking for an elegant, airy feel; body is Regular at relaxed 1.7 line‑height; eyebrows/labels/buttons are SemiBold uppercase with wide tracking. See `tokens/typography.css`.
- **Backgrounds:** mostly calm bone/porcelain. Feature sections invert to **Ink** and may carry the **fret motif** (`.wlo-fret-dark` / `.wlo-fret-accent`) — the practice's labyrinth wallpaper, recreated as a tileable geometric texture. Use it large and sparingly. Full‑bleed warm photography with a `.wlo-warm-veil` gradient is the other hero treatment.
- **Imagery:** real practice photography — warm white balance, soft natural light, candid smiles. Recurring cues: Greek‑key wallpaper, walnut reception desk, gold globe pendants, fresh pink flowers, the framed Banksy "Girl with Balloon" print. Never cold, blue‑tinted or generic stock.
- **Corner radii:** soft and restrained. Cards use **14px**; inputs/buttons sit on 8px–pill. The **pill** (`999px`) is reserved for buttons, badges and chips — do not pill everything.
- **Cards:** warm white surface, 1px `--border-subtle` hairline, **soft low‑contrast shadow** (`--shadow-sm`), 14px radius. On hover (interactive cards) they lift 3px to `--shadow-lg` and the cover image zooms 1.04 — calm, not bouncy.
- **Shadows:** warm‑tinted (`rgba(28,22,22,…)`), diffuse, light‑from‑above. A `--glow-brass` warm glow is available behind dark feature imagery. Avoid hard or coloured drop shadows.
- **Borders & lines:** hairlines in warm stone (`--border-subtle/-default`); on dark surfaces use `--border-inverse` (white at 14%).
- **Motion:** restrained and graceful. `--dur-base 240ms` with `--ease-out` for entrances and hover lifts; `--dur-fast 140ms` for colour/press. Buttons **scale to 0.97 on press**. No infinite/looping decoration.
- **Hover/press:** primary actions deepen colour on hover (ink→ink, accent→`--accent-hover`); links go to `--accent-press`; cards lift. Press = subtle scale‑down. Focus = `--ring` (mauve at 35%).
- **Transparency & blur:** sparing. Veil gradients over imagery for legibility; translucent badge backgrounds over photos. Avoid heavy glassmorphism.
- **Layout:** centred `--container-max 1200px` (narrow 760px for prose), 24px gutters, generous `--section-y 96px` vertical rhythm. 8px spacing base.

---

## Iconography

- **No icon font ships with the brand.** The only supplied vector is the logo (with its profile‑face mark).
- **Recommended set:** **[Lucide](https://lucide.dev)** — its thin, rounded, 1.5–2px‑stroke line style matches the elegant, light‑weight Raleway headings. Load from CDN (`https://unpkg.com/lucide-static` or `lucide@latest`) and colour with `currentColor` so icons inherit `--text-accent` / `--text-primary`. **(This is a substitution — the brand had no defined icon set; flag for client confirmation.)**
- **Usage:** line icons only, never filled/duotone. Keep stroke ≈1.75px, size 18–24px inline, 28–32px in feature contexts. Pair sparingly with eyebrows and list items.
- **Emoji / unicode:** not used as UI icons. The chevron in `Select` uses a small `▾` glyph; otherwise prefer Lucide.

---

## Index / manifest

**Root**
- `styles.css` — the single entry point consumers link (imports only).
- `readme.md` — this guide.
- `SKILL.md` — Agent‑Skill front matter for use in Claude Code.

**Tokens** (`tokens/`)
- `fonts.css` — Raleway `@font-face` (9 weights).
- `colors.css` — palette + semantic aliases.
- `typography.css` — scale, weights, tracking + `.wlo-*` type classes.
- `spacing.css` — spacing, radii, elevation, motion.
- `patterns.css` — the fret motif utilities + warm veil.
- `base.css` — element defaults + `.wlo-container`.

**Components** (`components/`)
- `core/` — `Button`, `Badge`, `Avatar`
- `forms/` — `Input`, `Select`
- `surfaces/` — `Card`, `StatCard`

**Guidelines** (`guidelines/`) — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.

**UI kits** (`ui_kits/`)
- `website/` — the marketing website (homepage): header, hero, trust bar, treatments, why‑us (dark fret section), testimonial, booking form, footer.

**Assets** (`assets/`) — `logos/`, `fonts/`, `images/` (practice photography).

Namespace for `@dsCard` HTML: `window.WestLondonOrthodonticsDesignSystem_707279`.

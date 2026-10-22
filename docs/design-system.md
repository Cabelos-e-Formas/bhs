# Brazilian Hair Studio — Design System

Inferred from the existing site (header, buttons, hero, section components) and used as the
rulebook for every page. When in doubt, match the nav bar: it is the reference implementation.

## Color

| Token | Hex | Role |
|---|---|---|
| `beige-500` linen | `#edebdf` | Page background, light bands, text on forest |
| `beige-300` paper | `#f5f4f0` | Hero type on forest, hover tint on linen |
| `accent-dark` forest | `#0e3b31` | Brand color: type, rules, dark bands, buttons |
| `beige-700` stone | `#686464` | Muted body text on linen (never on forest) |
| `accent` sage | `#6e9876` | Reserved; not used for large areas |

On forest, secondary text is `beige-500` at 70% (stone is too low-contrast there).
Two surfaces only — linen and forest — alternated as full-bleed bands.

## Type

- **Lato Light (300)** — large sans headlines and titles (`font-light`), tracking normal.
- **Baskerville Italic** — the brand's voice: highlight phrases, numbers, years, nav links,
  pull quotes, prices of attention. Never bold.
- **Headline pairing** — one line mixes the two: *serif italic phrase* + light sans phrase
  (`SectionHeader serifText / restText`, hero `highlight` + `title`).
- **Labels** — Lato `text-xs uppercase tracking-widest`, stone on linen / beige-70 on forest.
  Used for metadata only (role, occasion, hours), never as a heading on its own.
- **Body** — Lato `text-sm`/`text-base`, `leading-relaxed`, max ~65ch.

Scale: labels 12 · body 14–16 · titles 24–36 · section heads 48–60 · display 96–128.

## Structure

- **Bands, not cards.** Sections run full-bleed and are separated by a **3px forest rule**
  (`border-b-3 border-accent-dark`).
- **The ledger grid.** Inside a band, content sits in cells separated by **1px forest lines**
  (`grid gap-px bg-accent-dark` with linen cells). Photos and text share the same grid.
- **No radius, no shadows** — except buttons, which are full pills.
- **Watermarks.** Giant serif italic words or the logo mark at 4–10% opacity behind dark bands.
- **Paper noise** over the whole page (`.noise`).
- Left-aligned by default; centered only for page heroes and closing pull quotes.
- Gutters: `px-8` mobile, `px-10–24` desktop.

## Components

- **Button** — pill, 1px border, colour fill sweeps in from the left on hover/focus.
  `dark` on linen, `light` on forest. Sizes `sm / md / lg`.
- **Nav** — fixed linen bar (logo mark + wordmark, pill CTA, menu icon) → full-screen linen
  overlay sweeping in from the right, numbered serif italic links, language switch.
- **SectionHeader** — pairing headline left, supporting text or a button right.
- **CardGrid** — the ledger grid.
- **PageHero** — forest band, logo-mark watermark, label + oversized left-aligned serif italic
  heading rising on load, subtitle in a ledger row below.

## Motion

Editorial, Awwwards-style, and always in service of the type and photos:

- **Masked rise** — headings slide up out of a clipping mask (`data-reveal="mask"` + `.line-mask`),
  staggered per line with `--ld`. Heroes do it on load.
- **Image wipe** — photos uncover bottom-up while settling from a slight zoom (`data-reveal="wipe"`).
- **Fill sweep** — the button's left-to-right forest fill, also used at row scale (services index).
- **Cursor preview** — on fine pointers, a photo follows the cursor over the services index with
  eased lag and velocity tilt; touch devices show inline thumbnails instead.
- **Scroll drift** — hero lines drift apart and the portrait sinks (CSS scroll timeline, progressive).
- **Marquee** — reserved for the Instagram handle band; pauses on hover.
- **Horizontal track** — reviews scroll-snap sideways with pill prev/next buttons.
- Nav overlay sweep and highlight shimmer as before.

Rules: animate `transform`, `opacity` and `clip-path` only; every effect has a static
`prefers-reduced-motion` fallback; content is never hidden unless JS has run (`html.js`).

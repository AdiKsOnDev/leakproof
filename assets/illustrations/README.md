# Illustrations

Every page illustration is a flat faceted drawing built on one motif: a stone aqueduct carrying blue water, the customers flowing to a business. The served files live in `public/images/illustrations/` and are listed in `src/data/illustrations.ts`; the hero scene sources are in `aqueduct/`.

| File | Used on | Shape |
| --- | --- | --- |
| services, leak-check, improvements, rebuild, local-search, solutions, about, work | `PageHero` `illustration` | 4:3, 1200 × 900 |
| contact | Contact page | 4:3, 1200 × 900 |
| clinics, tours, wellness, home-services | Industry cards and industry page heroes | 2:1, 1600 × 800 |

## Style

Flat faceted planes, one lighter and one darker tone per surface, no outlines, texture, gradients or cast shadows. Palette: cream `#F5F2ED` and warm grey `#DCD9D2` for stone and objects, cobalt `#1B2AC7` for water and the single accent, white ripple dashes, one muted sage for ground and plants. Each scene stands on a small sage island. No text, signage, people or hands.

## Making a new one

Generate with Codex image generation, attaching `aqueduct/faceted.webp` and an existing page illustration as style references, with the style above and this background rule: everything around the subject is flat `#FF00FF` magenta, and no magenta, pink or violet appears in the drawing (a green screen would key out the meadow). Ask for a 12% empty margin on every side.

Then key it: alpha from `min(R, B) − G` (opaque below 60, clear above 180), colour un-premultiplied against magenta, leftover pink pixels cleared, trimmed to the subject plus a 4% margin at the target shape above, saved as WebP.

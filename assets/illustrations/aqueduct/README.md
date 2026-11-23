# Aqueduct illustrations

Source files for the home hero scene, generated with Codex image generation and keyed to transparent WebP.

| File | Direction |
| --- | --- |
| faceted.webp | Flat faceted planes, one light and one dark tone per surface, no outlines. In use as `public/images/hero/leaking-aqueduct.webp` |
| editorial.webp | Flat fills with thin near-black outlines, arch openings, sparse rocks and grass |

## Pipeline

Each image is generated on a flat `#FF00FF` background (green would key out the meadow), then keyed: alpha from `min(R, B) − G`, colour un-premultiplied against magenta, remaining pink pixels cleared.

Shared prompt constraints: 16:9, the leaking-aqueduct composition (peak about 30% from the top, crack and stream near the bottom, clouds low at both edges), palette limited to cobalt `#1B2AC7`, cream `#F5F2ED`, warm grey `#DCD9D2`, near-black `#141414` for lines and one muted sage, flat colour only, no text or people.

The hero's headline overlap and copy placement in `src/styles/_pages.scss` are measured from the scene in use (peak height, rock width); re-measure them when the scene changes.

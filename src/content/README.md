# Content authoring guide

Notes for adding projects and posts to `src/content/`. Internal reference, not published.

## Project images

Every project needs two images, stored in `src/images/<project-slug>/`:

| File | Size | Used as | Notes |
|---|---|---|---|
| `small.png` | **1600×1000px** (16:10, landscape) | `smallImage` in frontmatter — the card thumbnail on `/projects` | Rendered inside a fixed-height box (`150px` desktop / `160px` mobile) with `object-fit: cover`, so it gets cropped on both axes. Keep the subject centered — landscape orientation crops more gracefully than square or portrait in that box. |
| gallery/hero shot(s) | **1920×1080px** (16:9) | `<ImageMDX src="..." />` in the project body | Rendered at full content width, native aspect ratio, no crop — so consistency across projects matters more than fitting a box. Use 16:9 for every project so the galleries look uniform. |

Both sizes give Gatsby's `gatsby-image` fluid queries (`maxWidth: 800` for thumbnails, `maxWidth: 1440` for gallery images) enough resolution to serve retina without upscaling.

Don't copy another project's images as placeholders — `gatsby-image` hashes/queries by filename per directory, but visually it reads as a bug (see the `associations-otf`/`pounce`/`travel-health-dashboard` mixup fixed in the `content-update` branch).

## Frontmatter reference

See any existing `.mdx` in `projects/` or `posts/` for the full field list (`path`, `title`, `description`, `tags`, `order`, `categories`, etc.) — copy the closest existing entry rather than starting from scratch.

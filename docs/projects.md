# Projects

Add project records to `src/data/projects.ts`; the `Project` type lives in `src/types/content.ts`. Each record supplies the work card, case study content, website screenshots and search metadata. Feedback and traffic are optional; their sections disappear when omitted. Supply at least one screenshot.

Place optimised screenshots under `public/images/projects/<slug>/`, with source notes alongside them. Set useful alt text and intrinsic image dimensions. Client feedback needs its actual attribution. Traffic figures need a named source.

The work index at `/work` renders every record. The featured project spans the grid; other projects form a responsive two-column grid. `/work/<slug>` renders the Editorial case study. The build generates each project's HTML metadata and sitemap entry automatically.

## Case study content

`overview` optionally introduces the client and the work in the opening. Each screenshot has a title and a description; optional `details` adds a second paragraph to its caption. Descriptions also appear in the image viewer. The first screenshot is the lead image, with subsequent views paired with their captions.

Feedback spans the full row. Its optional `emphasis` must be an exact substring of the original quote; missing or unmatched emphasis leaves the complete quote as plain text. Projects with one screenshot or without feedback and traffic render without empty evidence sections.

The native screenshot dialog supports previous/next controls, arrow keys and Escape. Editorial is the only layout, including when old layout query parameters are present. There are no layout controls, scrolling strips or pinned galleries.

DESIGN.md from the main checkout is the visual authority; its local copy remains ignored by Git as configured by the project.

## Featured work and concepts

Set `featured: true` on the main client project. It appears first and spans the work grid, with its supplied feedback excerpt and sourced traffic figures beneath it. Other entries stay in the responsive two-column grid. Work cards show the project category above the name, or Concept for concept work. SentimentAI is the featured project.

Set `kind: 'concept'` on concept work. It receives a quiet Concept label, a View design notes link, and concept-specific page metadata. The first screenshot's notes appear beside the opening image; the remaining screenshots have their own captions. A concept has no deployment link. Omit `website`, feedback and traffic when they do not apply.

Project metadata is shared between the browser and static route generator through `src/utils/projectMetadata.ts`. New records automatically receive a work entry, gallery route, metadata and sitemap entry.

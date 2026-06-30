# Undrian Website — How It Works

This is the source for undrian.com. The site is built from simple text files
and published automatically when the files are saved to GitHub.

---

## For Tim: How to add or edit a piece

### Editing an existing piece

1. Open the right folder in `_pieces/`:
   - Furniture (2002–2008): `_pieces/cav/`
   - Build Dwell Think: `_pieces/bdt/`
   - Stations: `_pieces/sta/`
   - Intangibles: `_pieces/int/`
   - Miracles: `_pieces/mir/`
   - Poems: `_pieces/pen/`
   - Breakage: `_pieces/break/`
   - Mechanics: `_pieces/mech/`
   - Surface Patches: `_pieces/surf/`

2. Open the `.md` file for the piece you want to change (e.g. `trinity.md`)

3. The top section (between `---` lines) is the **front matter** — title, images, etc.

4. Below the second `---` is the **body text** — the poem, description, or notes.
   Edit freely. Blank lines make new paragraphs.

5. Save the file. The website rebuilds automatically.

### Adding a new piece

1. Copy any `.md` file from the right `_pieces/CATEGORY/` folder
2. Rename it (e.g. `newwork.md`) — use lowercase with hyphens, no spaces
3. Edit the front matter:
   ```
   title: "Name of the piece"
   slug: "newwork"          ← must match the filename
   category: "bdt"          ← category code
   images:
     - "photo1.jpg"         ← filenames of images
     - "photo2.jpg"
   ```
4. Write the description or poem below the second `---`
5. Put any images in `assets/images/CATEGORY/` (e.g. `assets/images/bdt/`)

### Adding images

Put image files in `assets/images/CATEGORY/` — for example:
- `assets/images/bdt/` for Build Dwell Think pieces
- `assets/images/cav/` for Plato's Cave pieces
- etc.

Image filenames may have spaces (like `trinity back.jpg`) — that's fine.

---

## Site structure

```
_pieces/              ← One .md file per artwork (these are what dad edits)
  bdt/                   Build Dwell Think pieces
  cav/                   Plato's Cave pieces
  sta/                   Stations pieces
  int/                   Intangibles pieces
  mir/                   Miracles pieces
  pen/                   Poems pieces
  break/                 Breakage pieces
  mech/                  Mechanics pieces
  surf/                  Surface Patches

works/                ← Category index pages (one per series)
  bdt/index.md
  cav/index.md
  ...

assets/
  images/             ← All artwork images, organized by category
  css/style.scss      ← Stylesheet (compiled automatically)
  js/main.js          ← JavaScript for image viewer

_layouts/             ← Page templates (advanced — don't edit unless you know HTML)
_includes/            ← Shared components (header, footer)
_sass/main.scss       ← Design styles
_config.yml           ← Site settings

about.md              ← About Tim page
index.md              ← Home page (just a pointer to the home layout)

content/              ← Original extracted content (backup reference)
extract_content.py    ← Script that generated the content/ folder from old HTML
copy_images.py        ← Script that organized the images
```

---

## Navigation structure (3-click rule)

```
Home → Category → Piece
```

- **Home** (`/`): Overview of all 9 series with descriptions
- **Category** (`/works/bdt/`): Thumbnail grid of all pieces in that series
- **Piece** (`/works/bdt/trinity/`): Images + text for one piece, with prev/next navigation

---

## Technical notes

- Built with [Jekyll](https://jekyllrb.com/) — a static site generator
- Hosted on GitHub Pages (publishes automatically on push to main)
- Responsive: works on phones, tablets, and desktops
- Dark theme with warm gold accents, serif body text

To build locally:
```bash
jekyll serve
```
Then open http://localhost:4000

# Radio Combined Form Plan

## Overview
Create a new form that generates a multi-page PDF (currently 3 pages) where every page
shares the SAME field values but each page uses its OWN template image and its OWN
field coordinates:
- Page 1: `radiorequest.png` template
- Page 2: `radioctscan.png` template
- Page 3: a new image the user will provide later (placeholder `radioctscan2.png`)

The form renders the shared fields ONCE in the UI; the same values are drawn on every page.

## Existing Context
- Current `radio` form uses `radiorequest.png` (2550x3300, letter portrait orientation)
- `radioctscan.png` already exists in project
- `generatePDF()` originally created a single-page PDF from one canvas; it now supports
  a `pages` array for multi-page rendering.
- Form selector dynamically populates from `FORMS_CONFIG` keys

## Config Structure (`forms-config.js`)
The `radio-combined` entry uses two parts:
- `sections`: the shared UI fields (rendered once in the form). Their `x`/`y` are used
  for the live preview (page 1).
- `pages`: an array of `{ template, fields }`. Each page has its own template image and
  a `fields` list that maps field `id` -> `{ x, y, font, ... }` coordinates for that
  template. The field `id`s must match the `sections` field `id`s.

```js
radio_combined: {
  name: "Radio Combined (Request + CT Scan)",
  canvasWidth: 2550,
  canvasHeight: 3300,
  pdfOrientation: "p",
  pdfUnit: "pt",
  pdfFormat: "letter",
  sections: [ /* shared UI fields (hosp-no1, req-no1, date1, name1, ...) */ ],
  pages: [
    { template: "radiorequest.png",  fields: [ /* page-1 coords */ ] },
    { template: "radioctscan.png",   fields: [ /* page-2 coords */ ] },
    { template: "radioctscan2.png",  fields: [ /* page-3 coords (placeholder) */ ] }, // TODO: replace image + coords
  ],
}
```

## Plan / Implementation

### 1. `forms-config.js` — `radio-combined` config
- Single shared field set (the top-half fields from the `radio` form): hosp-no1, req-no1,
  date1, name1, age1, DOB1, ward1, sex1, LMP1, address1, req_exam1, diag1, indication1,
  history1 (textarea).
- `pages` array: one entry per PDF page, each with its own template + coordinates.
- Page 3 currently uses placeholder image `radioctscan2.png` and the same coordinates as
  page 1 — replace the filename and adjust coordinates once the real image is supplied.

### 2. `index.html` — `generatePDF()`
- If `config.pages` exists, render each page independently:
  - Load the page's template image.
  - Draw the template on a temporary canvas, then draw each field from `page.fields`
    using that page's coordinates and the shared input values.
  - `pdf.addPage()` for every page after the first, then `pdf.addImage(...)`.
- Otherwise fall back to the original single-page behavior (capture the live-preview canvas).
- PDF is opened in a new tab (`window.open`) as before.

### 3. `index.html` — `selectForm()`
- Live preview uses `config.template || config.pages[0].template` so pages-based configs
  (which have no top-level `template`) still show a preview of page 1.

### 4. Form auto-appears in selector
Since the form selector iterates over `FORMS_CONFIG` keys, `radio-combined` is available
automatically.

## Field Details (shared)
- hosp-no1, req-no1, date1, name1, age1, DOB1, ward1, sex1, LMP1, address1
- req_exam1, diag1, indication1, history1 (textarea)

## How to add / adjust a page
- Add a new object to `pages` with `template` (image filename) and `fields` (array of
  `{ id, x, y, font, ... }`). Coordinates are relative to the template image (2550x3300).
- To change a page's layout, edit that page's `fields` coordinates only — the UI and other
  pages are unaffected.

## Notes
- Field coordinates are defined relative to each template image.
- Page 2/3 layouts differ from page 1, so their coordinates may need adjustment.
- Page 3 image (`radioctscan2.png`) is a placeholder; replace with the real file the user
  provides and tune its coordinates.

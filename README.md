# med-tools
various tools

[Link to site](https://gregorylearns.github.io/med-tools)

## Tools
- [Forms Generator](index.html)

## Development

This is a **static site** — there is no CSS build step. Styling lives in the
hand-written [`style.css`](style.css:1) (theme it however you like), and the core
logic is split into plain ES modules with a Vitest test suite.

### Setup & commands

```bash
npm install        # install dev tooling (vitest, jsdom)
npm test           # run the Vitest + jsdom test suite
npm run test:watch # watch mode while writing tests
```

That's it — no `build:css`, no Tailwind, nothing to recompile when you edit a class.

### Serving locally
The app uses native ES modules (`<script type="module">`), so it must be served
over http(s) — opening `index.html` via `file://` will not work. Use any static
server, e.g.:

```bash
npx serve .
# or VS Code "Live Server"
```

GitHub Pages serves it fine as-is.

### Project layout
- `index.html` — UI + app glue (imports the modules below)
- `forms-config.js` — exported `FORMS_CONFIG` (form/template/field definitions)
- `style.css` — hand-written styles (safe to restyle / swap for a theme)
- `src/batch-parser.js` — pure batch-text parsing logic
- `src/now-format.js` — pure date/datetime formatter
- `src/draw-field.js` — canvas text-drawing helper (injectable context)
- `src/__tests__/*.test.js` — Vitest unit tests

### Theming
All visual styling is in `style.css`. The JS only assigns a few stable class names
(`.container`, `.grid`, `.quadrant`, `.meta-row`, `.now-btn`, `#pdfCanvas`, etc.),
so you can drop in a different stylesheet or tweak the existing one without
touching the JavaScript.

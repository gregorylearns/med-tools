# Line Wrap Tool Plan

A new standalone tool page that takes multi-line text input and re-wraps each line so that no line exceeds a configurable character limit (default 36). The wrapped result appears instantly in a second textarea, with a copy-to-clipboard button.

## Behavior (confirmed with user)

- **Word-boundary wrapping**: When a line exceeds the limit, it wraps at the nearest space before the limit. Words are never split.
- **Preserve existing line breaks**: Each input line is wrapped independently. Existing newlines in the input are kept as hard line breaks in the output.
- **Edge case**: If a single word is longer than the limit, it stays on its own line (not split), even if it exceeds the limit. This is the natural result of word-boundary wrapping.
- **Settings**: The character limit is adjustable via a number input, defaulting to 36.
- **Live update**: Output re-renders instantly on every keystroke in the input and on any change to the limit.
- **Copy button**: Copies the output text to the clipboard with visual feedback.

## Files

### 1. New file: `line-wrap.html`

A standalone, self-contained HTML page (no external dependencies, matching the project's static GitHub Pages setup). Structure:

- **Head**: `<meta charset>`, viewport, title "Line Wrap Tool", and inline `<style>` reusing the project's visual language (Segoe UI font, `#f4f7f6` background, white `.container` card with rounded corners and shadow, blue `#007bff` buttons).
- **Body**:
  - `.container` card.
  - `<h1>` title.
  - Settings row: a `<label>` + `<input type="number">` for the character limit (default 36, min 1).
  - Two labeled textareas side by side (stacked on narrow screens via flexbox):
    - **Input** textarea (`id="inputText"`) — user types/pastes lines here.
    - **Output** textarea (`id="outputText"`) — read-only, shows the wrapped result.
  - A "Copy to Clipboard" button (`id="copyBtn"`).
  - A small status/feedback element (e.g., "Copied!") that appears briefly after copying.
  - A "Back to Forms" link pointing to `index.html`.
- **Script**:
  - `wrapText(text, limit)` function:
    - Split input on `\n` to preserve existing line breaks.
    - For each line, split into words and greedily build lines that stay within `limit` characters (counting spaces). When adding the next word would exceed the limit, push the current line and start a new one.
    - Join the resulting lines with `\n`.
  - `updateOutput()` function: reads the input value and the limit, calls `wrapText`, writes to the output textarea.
  - Event listeners: `input` on the input textarea, `input`/`change` on the limit number input, both calling `updateOutput()`.
  - `copyOutput()` function: uses `navigator.clipboard.writeText()` (with a fallback to a temporary textarea + `document.execCommand('copy')` for older browsers), then shows "Copied!" feedback for ~1.5s.
  - Initialize by calling `updateOutput()` on page load.

### 2. Edit: `index.html`

Add a navigation link to the new tool so users can reach it from the existing page. Insert a link (e.g., "Line Wrap Tool") near the top of the app container or in the footer area, pointing to `line-wrap.html`.

### 3. Edit: `README.md`

Add a line linking to the new tool page alongside the existing site link.

## Wrapping Algorithm (pseudocode)

```
function wrapText(text, limit):
    result = []
    for each paragraph in text.split('\n'):
        words = paragraph.split(' ')
        current = ''
        for word in words:
            candidate = current ? current + ' ' + word : word
            if candidate.length > limit and current:
                result.push(current)
                current = word
            else:
                current = candidate
        result.push(current)
    return result.join('\n')
```

Note: consecutive spaces are collapsed by `split(' ')`; this is acceptable for the tool's purpose. If preserving multiple spaces matters, a regex-based split could be used, but it is not required for the initial version.

## Notes

- The page is fully static and self-contained, consistent with the existing project (no build step, deployed via GitHub Pages).
- No changes to `forms-config.js` are needed.
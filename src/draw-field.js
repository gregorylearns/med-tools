// Canvas text drawing helper.
// `ctx` is injectable so tests can pass a mock with `measureText`/`fillText` spies.

// Apply per-character trailing-space padding for "grid" style fields where the
// form has individual character blocks (e.g. PhilHealth CF3). `charSpaces` is an
// array of space counts; character `i` gets `charSpaces[i]` trailing spaces.
// Characters beyond the end of the array are appended with no trailing padding.
// Returns `value` unchanged when `charSpaces` is missing or empty.
export function applyCharSpaces(value, charSpaces) {
    if (!value || !Array.isArray(charSpaces) || charSpaces.length === 0) {
        return value || '';
    }
    let out = '';
    for (let i = 0; i < value.length; i++) {
        out += value[i];
        if (i < charSpaces.length) {
            const n = charSpaces[i];
            if (n > 0) out += ' '.repeat(n);
        }
    }
    return out;
}

export function drawField(ctx, field, value, defaultFont) {
    if (!value) return;

    // Fall back to the form-level default font (then a hard-coded fallback)
    // so individual fields only need to declare `font` when it differs.
    ctx.font = field.font || defaultFont || "28px 'RobotoMono', monospace";
    ctx.fillStyle = "black";
    ctx.textBaseline = "top";

    if (field.isMultiline) {
        const paragraphs = value.split('\n');
        const lines = [];
        const maxWidth = field.maxWidth;

        // Prefix the first line with a dot and the configured number of spaces
        if (field.padSpaces && paragraphs.length) {
            paragraphs[0] = '.' + ' '.repeat(field.padSpaces) + paragraphs[0];
        }

        paragraphs.forEach(paragraph => {
            if (!paragraph) {
                lines.push('');
                return;
            }

            const words = paragraph.split(' ');
            let currentLine = '';

            words.forEach(word => {
                const testLine = currentLine ? currentLine + ' ' + word : word;
                const metrics = ctx.measureText(testLine);
                const testWidth = metrics.width;

                if (maxWidth && testWidth > maxWidth && currentLine) {
                    lines.push(currentLine);
                    currentLine = word;
                } else {
                    currentLine = testLine;
                }
            });

            if (currentLine) {
                lines.push(currentLine);
            }
        });

        const lineHeight = field.lineHeight || 65;
        lines.forEach((line, index) => {
            const yPos = field.anchorBottom
                ? field.y - ((lines.length - 1 - index) * lineHeight)
                : field.y + (index * lineHeight);
            ctx.fillText(line, field.x, yPos);
        });
    } else {
        // Grid-style fields: pad each character with its own trailing spaces so
        // the typed value lands in the form's individual character blocks.
        const displayValue = field.charSpaces
            ? applyCharSpaces(value, field.charSpaces)
            : value;
        ctx.fillText(displayValue, field.x, field.y);
    }
}

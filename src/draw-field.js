// Canvas text drawing helper.
// `ctx` is injectable so tests can pass a mock with `measureText`/`fillText` spies.
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
        ctx.fillText(value, field.x, field.y);
    }
}

import { describe, it, expect } from 'vitest';
import { drawField } from '../draw-field.js';

// Mock canvas context: measureText width is simply 10px per character.
function makeCtx() {
    const calls = [];
    return {
        calls,
        font: '',
        fillStyle: '',
        textBaseline: '',
        measureText: (s) => ({ width: s.length * 10 }),
        fillText: (text, x, y) => calls.push({ text, x, y }),
    };
}

describe('drawField', () => {
    it('does not call fillText for an empty value', () => {
        const ctx = makeCtx();
        drawField(ctx, { x: 0, y: 0 }, '', '20px monospace');
        expect(ctx.calls).toHaveLength(0);
    });

    it('draws a single-line value directly', () => {
        const ctx = makeCtx();
        drawField(ctx, { x: 10, y: 20 }, 'Hello', '20px monospace');
        expect(ctx.calls).toHaveLength(1);
        expect(ctx.calls[0]).toEqual({ text: 'Hello', x: 10, y: 20 });
    });

    it('wraps multiline text respecting maxWidth', () => {
        // measureText width = len*10, maxWidth 30 => at most 3 chars per line
        const ctx = makeCtx();
        drawField(ctx, { x: 0, y: 0, isMultiline: true, maxWidth: 30 }, 'aa bb cc', '20px monospace');
        const texts = ctx.calls.map(c => c.text);
        expect(texts).toEqual(['aa', 'bb', 'cc']);
    });

    it('positions anchorBottom lines upward', () => {
        const ctx = makeCtx();
        const field = { x: 0, y: 100, isMultiline: true, maxWidth: 30, lineHeight: 10, anchorBottom: true };
        drawField(ctx, field, 'aa bb cc', '20px monospace');
        // 3 lines: first line is highest (smallest y)
        expect(ctx.calls[0].y).toBe(80); // 100 - (2 * 10)
        expect(ctx.calls[1].y).toBe(90);
        expect(ctx.calls[2].y).toBe(100);
    });

    it('prefixes the first line with padSpaces', () => {
        const ctx = makeCtx();
        drawField(ctx, { x: 0, y: 0, isMultiline: true, maxWidth: 1000, padSpaces: 3 }, 'hello', '20px monospace');
        expect(ctx.calls[0].text).toBe('.   hello');
    });
});

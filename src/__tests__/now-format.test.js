import { describe, it, expect } from 'vitest';
import { formatNow } from '../now-format.js';

describe('formatNow', () => {
    // Aug 20, 2026, 2:05 PM (local time components)
    const fixed = new Date(2026, 7, 20, 14, 5, 0);

    it('formats date mode as MM/DD/YY', () => {
        expect(formatNow(fixed, 'date')).toBe('08/20/26');
    });

    it('formats datetime mode as MM/DD/YY h:mm AM/PM', () => {
        expect(formatNow(fixed, 'datetime')).toBe('08/20/26 2:05 PM');
    });

    it('handles midnight and noon correctly', () => {
        const midnight = new Date(2026, 0, 1, 0, 0, 0);
        expect(formatNow(midnight, 'datetime')).toBe('01/01/26 12:00 AM');
        const noon = new Date(2026, 0, 1, 12, 0, 0);
        expect(formatNow(noon, 'datetime')).toBe('01/01/26 12:00 PM');
    });

    it('defaults to datetime mode', () => {
        expect(formatNow(fixed)).toBe('08/20/26 2:05 PM');
    });
});

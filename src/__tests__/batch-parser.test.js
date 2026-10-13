import { describe, it, expect } from 'vitest';
import { parseBatchInput, parseFieldLine, mapLabelToFieldId } from '../batch-parser.js';

describe('parseBatchInput', () => {
    it('applies global header vars as fallback to each record', () => {
        const text = `Department: SURGERY
Date: 08/20/2026

1. Name: Juan Dela Cruz
Age: 45

2. Name: DALISAY CARDITA
Age: 28`;
        const records = parseBatchInput(text);
        expect(records).toHaveLength(2);
        // Global fallbacks applied to both records
        expect(records[0].orp_department).toBe('SURGERY');
        expect(records[0].orp_date).toBe('08/20/2026');
        expect(records[1].orp_department).toBe('SURGERY');
        expect(records[1].orp_date).toBe('08/20/2026');
        // Per-record values
        expect(records[0].orp_name).toBe('Juan Dela Cruz');
        expect(records[1].orp_name).toBe('DALISAY CARDITA');
    });

    it('parses multiple numbered entries with 1. / 1) / 1) formats', () => {
        const text = `1. Name: A
2) Name: B
3) Name: C`;
        const records = parseBatchInput(text);
        expect(records.map(r => r.orp_name)).toEqual(['A', 'B', 'C']);
    });

    it('ignores missing/empty lines', () => {
        const text = `

1. Name: A

Age: 45

`;
        const records = parseBatchInput(text);
        expect(records).toHaveLength(1);
        expect(records[0].orp_name).toBe('A');
        expect(records[0].orp_age).toBe('45');
    });

    it('returns an empty array for blank input', () => {
        expect(parseBatchInput('')).toEqual([]);
        expect(parseBatchInput('   \n  \n')).toEqual([]);
    });
});

describe('mapLabelToFieldId', () => {
    it('matches keywords case-insensitively with startsWith/includes', () => {
        expect(mapLabelToFieldId('Name')).toBe('orp_name');
        expect(mapLabelToFieldId('Patient Name')).toBe('orp_name');
        expect(mapLabelToFieldId('SURGEON')).toBe('orp_surgeon');
        expect(mapLabelToFieldId('Anesthesiologist')).toBe('orp_anesthesiologist');
        expect(mapLabelToFieldId('Department-Head')).toBe('orp_dept_head');
    });

    it('returns null for unknown labels', () => {
        expect(mapLabelToFieldId('Random Thing')).toBeNull();
    });
});

describe('parseFieldLine', () => {
    it('writes the mapped field into the record', () => {
        const record = {};
        parseFieldLine('Name: Juan', record);
        expect(record.orp_name).toBe('Juan');
    });

    it('ignores lines without a colon or with an empty value', () => {
        const record = {};
        parseFieldLine('NoColon', record);
        parseFieldLine('Name:', record);
        parseFieldLine('Name:   ', record);
        expect(record).toEqual({});
    });
});

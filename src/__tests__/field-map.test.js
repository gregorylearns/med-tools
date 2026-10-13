import { describe, it, expect } from 'vitest';
import { getOrpFieldMap } from '../batch-parser.js';
import { FORMS_CONFIG } from '../../forms-config.js';

describe('getOrpFieldMap', () => {
    it('returns all field ids from the orproposal config', () => {
        const map = getOrpFieldMap(FORMS_CONFIG.orproposal);
        const expectedIds = FORMS_CONFIG.orproposal.sections.flatMap(s => s.fields.map(f => f.id));
        expect(Object.keys(map).sort()).toEqual([...expectedIds].sort());
        // every entry maps back to its own definition
        expectedIds.forEach(id => expect(map[id].id).toBe(id));
    });

    it('defaults to orproposal when no config is passed', () => {
        const map = getOrpFieldMap();
        expect(Object.keys(map).length).toBeGreaterThan(0);
    });
});

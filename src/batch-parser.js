import { FORMS_CONFIG } from '../forms-config.js';

// Map input labels (lowercased) to OR Proposal config field IDs.
// Matching is case-insensitive and uses "starts with / contains" logic.
// More specific / multi-word keywords are ordered first to avoid partial substring clashes.
export const BATCH_LABEL_MAP = [
    { fieldId: "orp_dept_head", keywords: ["department-head", "dept-head"] },
    { fieldId: "orp_department", keywords: ["department", "dept"] },
    { fieldId: "orp_asstsurgeon", keywords: ["asst-surgeon"] },
    { fieldId: "orp_surgeon", keywords: ["surgeon"] },
    { fieldId: "orp_date_and_time", keywords: ["surgery-date"] },
    { fieldId: "orp_est_time_surgery", keywords: ["est-time"] },
    { fieldId: "orp_date", keywords: ["date"] },
    { fieldId: "orp_name", keywords: ["name", "patient name", "patient"] },
    { fieldId: "orp_age", keywords: ["age"] },
    { fieldId: "orp_sex", keywords: ["sex", "gender"] },
    { fieldId: "orp_floor_bed", keywords: ["floor/bed", "floor and bed", "floor", "bed", "ward"] },
    { fieldId: "orp_proposed_operation", keywords: ["proposed operation", "operation", "surgery", "procedure"] },
    { fieldId: "orp_impression", keywords: ["impression", "diagnosis"] },
    { fieldId: "orp_anesthesiologist", keywords: ["anesthesiologist", "anes", "anesth"] },
    { fieldId: "orp_position_during_surgery", keywords: ["position during surgery", "position"] },
    { fieldId: "orp_instruments", keywords: ["instruments needed", "instruments", "instrument", "materials needed", "materials"] },
    { fieldId: "orp_or_manager", keywords: ["or manager", "manager"] },
];

// Build a lookup of fieldId -> config field definition (from OR Proposal config).
export function getOrpFieldMap(config = FORMS_CONFIG['orproposal']) {
    const orpConfig = config || FORMS_CONFIG['orproposal'];
    const map = {};
    if (!orpConfig) return map;
    orpConfig.sections.forEach(section => {
        section.fields.forEach(field => {
            map[field.id] = field;
        });
    });
    return map;
}

// Map a single input label (lowercased, trimmed) to a config field ID, or null.
export function mapLabelToFieldId(label) {
    const lower = label.toLowerCase().trim();
    for (const entry of BATCH_LABEL_MAP) {
        for (const keyword of entry.keywords) {
            if (lower.startsWith(keyword) || lower.includes(keyword)) {
                return entry.fieldId;
            }
        }
    }
    return null;
}

// Parse a single "label: value" line into the given record (if it maps to a field).
export function parseFieldLine(line, record) {
    const idx = line.indexOf(':');
    if (idx === -1) return;
    const label = line.substring(0, idx).trim();
    const value = line.substring(idx + 1).trim();
    if (!label || !value) return;

    const fieldId = mapLabelToFieldId(label);
    if (fieldId) {
        record[fieldId] = value;
    }
}

// Split pasted batch text into an array of records.
// Lines before the first numbered entry are treated as global header variables
// and applied as fallbacks to every record.
export function parseBatchInput(text) {
    const records = [];
    if (!text || !text.trim()) return records;

    const lines = text.split(/\r?\n/);
    const globalRecord = {};
    let currentRecord = null;

    lines.forEach(line => {
        // Detect entry start: "1." or "1) " or "1. " at the beginning
        const isEntryStart = /^\s*\d+[.)]?\s/.test(line);

        if (isEntryStart) {
            // Save previous record with global fallbacks
            if (currentRecord && Object.keys(currentRecord).length > 0) {
                records.push(Object.assign({}, globalRecord, currentRecord));
            }
            currentRecord = {};
            // Parse the first field on the same line as the number
            const rest = line.replace(/^\s*\d+[.)]?\s*/, '');
            if (rest) {
                parseFieldLine(rest, currentRecord);
            }
        } else if (currentRecord) {
            // Continuation line for current patient
            if (line.trim()) {
                parseFieldLine(line, currentRecord);
            }
        } else {
            // Lines before the first numbered entry are treated as global header variables
            if (line.trim()) {
                parseFieldLine(line, globalRecord);
            }
        }
    });

    // Push the last record with global fallbacks
    if (currentRecord && Object.keys(currentRecord).length > 0) {
        records.push(Object.assign({}, globalRecord, currentRecord));
    }

    return records;
}

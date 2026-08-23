# Radio Combined Form Plan

## Overview
Create a new form that generates a 2-page PDF with:
- Page 1: radiorequest.png template
- Page 2: radioctscan.png template
- Shared fields from radiorequest can be used on both pages

## Existing Context
- Current `radio` form uses `radiorequest.png` (2550x3300, letter portrait orientation)
- `radioctscan.png` already exists in project
- `generatePDF()` currently creates single-page PDF from one canvas
- Form selector dynamically populates from `FORMS_CONFIG` keys

## Plan

### 1. Add new form config in `forms-config.js`
Add a new `radio-combined` entry after the existing `radio` config with:
- Template: Use radiorequest.png as base, radioctscan.png for page 2
- Canvas dimensions: 2550x3300 (letter portrait) for each page
- PDF format: letter
- All fields from existing radio form (top half + bottom half)
- Fields will be shared between both pages

### 2. Modify `generatePDF()` in `index.html`
Update the PDF generation function to:
- Create a new jsPDF instance
- Add page 1 with radiorequest.png template drawn on canvas
- Add page 2 with radioctscan.png template drawn on canvas
- Both pages use same field values
- Don't auto-open PDF (user will manually add coordinates of where to map the fields)

### 3. Form will auto-appear in selector
Since form selector iterates over `FORMS_CONFIG` keys, the new form will automatically be available

## Field Details (from existing radio form)
Shared fields include:
- hosp-no1, req-no1, date1, name1, age1, DOB1, ward1, sex1, LMP1, address1
- req_exam1, diag1, indication1, history1 (textarea)

These fields have x,y coordinates positioned on the radiorequest.png template.
For radioctscan.png, fields will be positioned similarly or user will manually adjust.

## Implementation Approach
1. Add `radio-combined` config with all fields
2. Modify `generatePDF()` to:
   - Render canvas with radiorequest.png, capture, add to PDF page 1
   - Render canvas with radioctscan.png, capture, add to PDF page 2
   - Output PDF blob without opening window
3. User can then manually add coordinates using their PDF editor

## Notes
- The form fields coordinates are defined relative to each template image
- Since radiorequest.png and radioctscan.png may have different layouts, field positions may need adjustment
- User indicated they will "manually add the coordinates" so field positions from radiorequest will be used as reference
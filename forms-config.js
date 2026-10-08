const FORMS_CONFIG = {
  prescription: {
    name: "Prescription Pad",
    font: "28px 'Iosevka', monospace",
    template: "forms/template.png",
    canvasWidth: 3508,
    canvasHeight: 2480,
    pdfOrientation: "l", // 'l' for landscape, 'p' for portrait
    pdfUnit: "pt",
    pdfFormat: "a4",
    sections: [
      {
        title: "Left Half",
        fields: [
          {
            id: "name1",
            label: "Name",
            type: "text",
            x: 315,
            y: 445,
            flex: 2
          },
          {
            id: "date1",
            label: "Date",
            type: "text",
            class: "small",
            x: 1140,
            y: 445,
            flex: 1,
            showNowButton: true,
            nowButtonMode: "date",
          },
          {
            id: "ward1",
            label: "Ward/Unit",
            type: "text",
            x: 320,
            y: 545,
            flex: 1,
            newRow: true
          },
          {
            id: "age1",
            label: "Age/Sex",
            type: "text",
            class: "small",
            x: 920,
            y: 545,
            flex: 1,
          },
          {
            id: "tag1",
            label: "Tag #",
            type: "text",
            class: "small",
            x: 1140,
            y: 545,
            flex: 1,
          },
          {
            id: "text1",
            label: "Prescription",
            placeholder: "Prescription (Left)",
            type: "textarea",
            x: 185,
            y: 800,
            font: "36px 'Iosevka', monospace",
            isMultiline: true,
            maxWidth: 1200,
            lineHeight: 36,
            flex: 1,
          },
        ],
      },
      {
        title: "Right half",
        fields: [
          {
            id: "name2",
            label: "Name",
            type: "text",
            x: 2069,
            y: 445,
            flex: 2,
          },
          {
            id: "date2",
            label: "Date",
            type: "text",
            class: "small",
            x: 2894,
            y: 445,
            flex: 1,
            showNowButton: true,
            nowButtonMode: "date",
          },
          {
            id: "ward2",
            label: "Ward/Unit",
            type: "text",
            x: 2074,
            y: 545,
            flex: 1,
            newRow: true
          },
          {
            id: "age2",
            label: "Age/Sex",
            type: "text",
            class: "small",
            x: 2674,
            y: 545,
            flex: 1,
          },
          {
            id: "tag2",
            label: "Tag #",
            type: "text",
            class: "small",
            x: 2894,
            y: 545,
            flex: 1,
          },
          {
            id: "text2",
            label: "Prescription",
            placeholder: "Prescription (Right)",
            type: "textarea",
            x: 1939,
            y: 800,
            font: "36px 'Iosevka', monospace",
            isMultiline: true,
            maxWidth: 1200,
            lineHeight: 36,
            flex: 1,
          },
        ],
      },
    ],
  },
  prescriptioner: {
    name: "Prescription Pad (ER)",
    font: "28px 'Iosevka', monospace",
    template: "forms/rxer.png",
    canvasWidth: 3508,
    canvasHeight: 2480,
    pdfOrientation: "l", // 'l' for landscape, 'p' for portrait
    pdfUnit: "pt",
    pdfFormat: "a4",
    sections: [
      {
        title: "Left Half",
        fields: [
          {
            id: "name1",
            label: "Name",
            placeholder: "Name",
            type: "text",
            x: 380,
            y: 490,
            flex: 2
          },
          {
            id: "date1",
            label: "Date",
            placeholder: "Date",
            type: "text",
            class: "small",
            x: 1320,
            y: 490,
            flex: 1,
            showNowButton: true,
            nowButtonMode: "date",
          },
          {
            id: "age1",
            label: "Age/Sex",
            placeholder: "Age/Sex",
            type: "text",
            class: "small",
            x: 1040,
            y: 560,
            flex: 1,
            newRow: true
          },
          {
            id: "tag1",
            label: "Tag #",
            placeholder: "Tag #",
            type: "text",
            class: "small",
            x: 1320,
            y: 560,
            flex: 1,
          },
          {
            id: "text1",
            label: "Prescription",
            placeholder: "Prescription (Left)",
            type: "textarea",
            x: 185,
            y: 800,
            font: "36px 'Iosevka', monospace",
            isMultiline: true,
            maxWidth: 1200,
            lineHeight: 36,
            flex: 1,
          },
        ],
      },
      {
        title: "Right half",
        fields: [
          {
            id: "name2",
            label: "Name",
            placeholder: "Name",
            type: "text",
            x: 2130,
            y: 490,
            flex: 2,
          },
          {
            id: "date2",
            label: "Date",
            placeholder: "Date",
            type: "text",
            class: "small",
            x: 3080,
            y: 480,
            flex: 1,
            showNowButton: true,
            nowButtonMode: "date",
          },
          {
            id: "age2",
            label: "Age/Sex",
            placeholder: "Age/Sex",
            type: "text",
            class: "small",
            x: 2800,
            y: 560,
            flex: 1,
            newRow: true
          },
          {
            id: "tag2",
            label: "Tag #",
            placeholder: "Tag #",
            type: "text",
            class: "small",
            x: 3080,
            y: 560,
            flex: 1,
          },
          {
            id: "text2",
            label: "Prescription",
            placeholder: "Prescription (Right)",
            type: "textarea",
            x: 1939,
            y: 800,
            font: "36px 'Iosevka', monospace",
            isMultiline: true,
            maxWidth: 1200,
            lineHeight: 36,
            flex: 1,
          },
        ],
      },
    ],
  },
  idrformat: {
    name: "IDR Format 2026",
    font: "36px 'Iosevka', monospace",
    template: "forms/idrformat2026.png",
    canvasWidth: 2480, // A4 Portrait 300 DPI
    canvasHeight: 3508,
    pdfOrientation: "p",
    pdfUnit: "pt",
    pdfFormat: "a4",
    sections: [
      {
        title: "INTER-DEPARTMENTAL REFERRAL SHEET",
        fields: [
          {
            id: "idr_datetime",
            label: "Date and Time",
            placeholder: "Date and Time Referred:",
            type: "text",
            x: 615,
            y: 770,
            newRow: true,
            flex: 1,
            showNowButton: true,
            nowButtonMode: "datetime",
          },
          {
            id: "idr_agesex",
            label: "Age/Sex",
            type: "text",
            class: "small",
            x: 1580,
            y: 770,
            flex: 1
          },
          {
            id: "idr_referred_from",
            label: "Referred From (Department)",
            placeholder: "Referred From (Department):",
            type: "text",
            x: 615,
            y: 855,
            newRow: true
          },
          {
            id: "idr_referring_physician",
            label: "Referring Physician",
            placeholder: "Referring Physician:",
            type: "text",
            x: 615,
            y: 955,
            newRow: true
          },
          {
            id: "idr_referred_to",
            label: "Referred To",
            placeholder: "Referred to (Department):",
            type: "text",
            x: 615,
            y: 1055,
            newRow: true
          },
          {
            id: "idr_reason_for_referral",
            label: "Reason for Referral",
            placeholder: "Reason for referral:",
            type: "textarea",
            x: 160,
            y: 1180,
            isMultiline: true,
            maxWidth: 2200,
            lineHeight: 36,
          },
          {
            id: "idr_pertinent_history_pe",
            label: "Pertinent History and PE",
            placeholder: "Pertinent history and PE:",
            type: "textarea",
            x: 160,
            y: 1490,
            isMultiline: true,
            maxWidth: 2200,
            lineHeight: 36,
          },
          {
            id: "idr_assessment",
            label: "Assessment",
            placeholder: "Assessment:",
            type: "textarea",
            x: 160,
            y: 2650,
            isMultiline: true,
            maxWidth: 2200,
            lineHeight: 36,
          },
          {
            id: "idr_name",
            label: "Patient Name",
            placeholder: "Patient Name:",
            type: "text",
            x: 160,
            y: 3175,
          },
          {
            id: "idr_hospital_no",
            label: "Hospital no",
            placeholder: "Hospital No:",
            type: "text",
            x: 1600,
            y: 3175,
          },
        ],
      },
    ],
  },
  orproposal: {
    name: "OR Proposal",
    font: "36px 'Iosevka', monospace",
    template: "forms/orproposal.png",
    canvasWidth: 2480, // A4 Portrait 300 DPI
    canvasHeight: 3508,
    pdfOrientation: "p",
    pdfUnit: "pt",
    pdfFormat: "a4",
    sections: [
      {
        title: "OR Proposal",
        fields: [
          {
            id: "orp_department",
            label: "Department of:",
            type: "text",
            x: 660,
            y: 730,
            flex: 4
          },
          {
            id: "orp_date",
            label: "Date:",
            type: "text",
            class: "small",
            x: 1720,
            y: 730,
            flex: 2,
            showNowButton: true,
            nowButtonMode: "date",
          },
          {
            id: "orp_name",
            label: "Name of Patient:",
            type: "text",
            x: 680,
            y: 810,
            newRow: true,
            flex: 4
          },
          {
            id: "orp_age",
            label: "Age:",
            type: "text",
            x: 1720,
            y: 810,
            flex: 1
          },
          {
            id: "orp_sex",
            label: "Sex:",
            type: "text",
            x: 1940,
            y: 810,
            flex: 1
          },
          {
            id: "orp_floor_bed",
            label: "Floor and Bed Number:",
            type: "text",
            x: 700,
            y: 895,
            newRow: true
          },
          {
            id: "orp_impression",
            label: "Impression:",
            type: "text",
            x: 560,
            y: 984,
            font: "28px 'Iosevka', monospace",
            isMultiline: true,
            maxWidth: 1800,
            lineHeight: 27,
            anchorBottom: true,
            newRow: true
          },
          {
            id: "orp_proposed_operation",
            label: "Proposed Operation:",
            type: "text",
            x: 770,
            y: 1065,
            font: "28px 'Iosevka', monospace",
            isMultiline: true,
            maxWidth: 1600,
            lineHeight: 27,
            anchorBottom: true,
            newRow: true
          },
          {
            id: "orp_date_and_time",
            label: "Date and Time of Surgery:",
            type: "text",
            x: 620,
            y: 1130,
            newRow: true,
          },
          {
            id: "orp_est_time_surgery",
            label: "Estimated Time of Surgery:",
            type: "text",
            x: 910,
            y: 1210,
            newRow: true
          },
          {
            id: "orp_surgeon",
            label: "Surgeon:",
            type: "text",
            x: 520,
            y: 1290,
            newRow: true
          },
          {
            id: "orp_asstsurgeon",
            label: "Asst Surgeon:",
            type: "text",
            x: 1500,
            y: 1290,
          },
          {
            id: "orp_anesthesiologist",
            label: "Anesthesiologist:",
            type: "text",
            x: 710,
            y: 1370,
            newRow: true
          },
          {
            id: "orp_position_during_surgery",
            label: "Position During Surgery:",
            type: "text",
            x: 870,
            y: 1450,
            newRow: true
          },
          {
            id: "orp_instruments",
            label: "Instruments needed:",
            type: "text",
            x: 770,
            y: 1548,
            font: "28px 'Iosevka', monospace",
            isMultiline: true,
            maxWidth: 1600,
            lineHeight: 27,
            anchorBottom: true,
            newRow: true
          },
          {
            id: "orp_dept_head",
            label: "Department Head:",
            type: "text",
            x: 300,
            y: 1950,
            newRow: true
          },
          {
            id: "orp_or_manager",
            label: "OR Manager:",
            type: "text",
            x: 1520,
            y: 1950,
          },
        ],
      },
    ],
  },
  orproposal_batch: {
    name: "Batch OR Proposal Generator (BETA)",
    font: "36px 'Iosevka', monospace",
    template: "forms/orproposal.png",
    canvasWidth: 2480,
    canvasHeight: 3508,
    pdfOrientation: "p",
    pdfUnit: "pt",
    pdfFormat: "a4",
    sections: []
  },
  radio: {
    name: "Radio Request",
    template: "forms/radiorequest.png",
    canvasWidth: 2550,
    canvasHeight: 3300,
    font: "28px 'Iosevka', monospace",
    pdfOrientation: "p", // 'l' for landscape, 'p' for portrait
    pdfUnit: "pt",
    pdfFormat: "letter",
    sections: [
      {
        title: "Top Half",
        fields: [
          {
            id: "hosp-no1",
            label: "Hospital #",
            placeholder: "Hospital #",
            type: "text",
            x: 435,
            y: 345 ,
            anchorBottom: true
          },
          {
            id: "req-no1",
            label: "Requisition No.",
            placeholder: "Requisition No.",
            type: "text",
            x: 1970,
            y: 165,
            flex: 2,

          },
          {
            id: "date1",
            label: "Date",
            placeholder: "Date",
            type: "text",
            x: 335,
            y: 400,
            flex: 1,
            showNowButton: true,
            nowButtonMode: "date",
          },
          {
            id: "name1",
            label: "Patient Name",
            placeholder: "Patient Name",
            type: "text",
            x: 500,
            y: 490,
            flex: 1,
            newRow: true
          },
          {
            id: "age1",
            label: "Age",
            placeholder: "Age",
            type: "text",
            x: 310,
            y: 600,
            flex: 1,
            newRow: true
          },
          {
            id: "DOB1",
            label: "Date of Birth",
            placeholder: "Date of Birth",
            type: "text",
            x: 820,
            y: 600,
            flex: 1,
          },
          {
            id: "ward1",
            label: "Ward",
            placeholder: "Ward",
            type: "text",
            x: 1330,
            y: 600,
            flex: 1,
          },
          {
            id: "sex1",
            label: "Sex",
            placeholder: "Sex",
            type: "text",
            x: 310,
            y: 650,
            flex: 1,
            newRow: true
          },
          {
            id: "LMP1",
            label: "LMP",
            placeholder: "LMP",
            type: "text",
            x: 660,
            y: 650,
            flex: 1,
          },
          {
            id: "address1",
            label: "Address",
            placeholder: "Address",
            type: "text",
            x: 380,
            y: 700,
            flex: 1,
            newRow: true
          },
          {
            id: "req_exam1",
            label: "Requested Examination/s",
            placeholder: "Requested Examination/s",
            type: "text",
            x: 680,
            y: 760,
            flex: 1,
            newRow: true
          },
          {
            id: "diag1",
            label: "Diagnosis",
            placeholder: "Diagnosis",
            type: "text",
            x: 405,
            y: 920,
            flex: 1,
            newRow: true
          },
          {
            id: "indication1",
            label: "Indication",
            placeholder: "Indication",
            type: "text",
            x: 950,
            y: 970,
            flex: 1,
            newRow: true
          },
          {
            id: "history1",
            label: "Brief History",
            placeholder: "Brief History",
            type: "textarea",
            x: 225,
            y: 1020,
            font: "36px 'Iosevka', monospace",
            isMultiline: true,
            maxWidth: 1600,
            lineHeight: 36,
            flex: 1,
            padSpaces: 13,
            newRow: true
          },
        ],
      },
      {
        title: "Bottom Half",
        fields: [
          {
            id: "hosp-no2",
            label: "Hospital #",
            placeholder: "Hospital #",
            type: "text",
            x: 435,
            y: 1980 ,
            font: "28px 'Iosevka', monospace",
          },
          {
            id: "req-no2",
            label: "Requisition No.",
            placeholder: "Requisition No.",
            type: "text",
            x: 1970,
            y: 1800,
            flex: 2,

          },
          {
            id: "date2",
            label: "Date",
            placeholder: "Date",
            type: "text",
            x: 335,
            y: 2015,
            flex: 1,
            showNowButton: true,
            nowButtonMode: "date",
          },
          {
            id: "name2",
            label: "Patient Name",
            placeholder: "Patient Name",
            type: "text",
            x: 500,
            y: 2125,
            flex: 1,
            newRow: true
          },
          {
            id: "age2",
            label: "Age",
            placeholder: "Age",
            type: "text",
            x: 310,
            y: 2225,
            flex: 1,
            newRow: true
          },
          {
            id: "DOB2",
            label: "Date of Birth",
            placeholder: "Date of Birth",
            type: "text",
            x: 820,
            y: 2225,
            flex: 1,
          },
          {
            id: "ward2",
            label: "Ward",
            placeholder: "Ward",
            type: "text",
            x: 1330,
            y: 2225,
            flex: 1,
          },
          {
            id: "sex2",
            label: "Sex",
            placeholder: "Sex",
            type: "text",
            x: 310,
            y: 2280,
            flex: 1,
            newRow: true
          },
          {
            id: "LMP2",
            label: "LMP",
            placeholder: "LMP",
            type: "text",
            x: 660,
            y: 2280,
            flex: 1,
          },
          {
            id: "address2",
            label: "Address",
            placeholder: "Address",
            type: "text",
            x: 380,
            y: 2335,
            flex: 1,
            newRow: true
          },
          {
            id: "req_exam2",
            label: "Requested Examination/s",
            placeholder: "Requested Examination/s",
            type: "text",
            x: 680,
            y: 2385,
            flex: 1,
            newRow: true
          },
          {
            id: "diag2",
            label: "Diagnosis",
            placeholder: "Diagnosis",
            type: "text",
            x: 405,
            y: 2545,
            flex: 1,
            newRow: true
          },
          {
            id: "indication2",
            label: "Indication",
            placeholder: "Indication",
            type: "text",
            x: 950,
            y: 2600,
            flex: 1,
            newRow: true
          },
          {
            id: "history2",
            label: "Brief History",
            placeholder: "Brief History",
            type: "textarea",
            x: 225,
            y: 2645,
            font: "36px 'Iosevka', monospace",
            isMultiline: true,
            maxWidth: 1600,
            lineHeight: 36,
            flex: 1,
            padSpaces: 13,
            newRow: true
          },
        ],
      },
    ],
  },
  radio_combined: {
    name: "Radio Combined (Request + CT Scan)",
    font: "28px 'Iosevka', monospace",
    canvasWidth: 2480,
    canvasHeight: 3508,
    pdfOrientation: "p", // 'l' for landscape, 'p' for portrait
    pdfUnit: "pt",
    pdfFormat: "a4",
    // Shared UI fields (rendered once in the form). Coordinates here are for
    // the live preview (page 1). Each page in `pages` has its own coordinates.
    sections: [
      {
        title: "Radio Combined",
        fields: [
          {
            id: "hosp-no1",
            label: "Hospital #",
            type: "text",
            anchorBottom: true
          },
          {
            id: "req-no1",
            label: "Requisition No.",
            type: "text",
            flex: 2,
          },
          {
            id: "date1",
            label: "Date",
            type: "text",
            flex: 1,
            showNowButton: true,
            nowButtonMode: "date",
          },
          {
            id: "name1",
            label: "Patient Name",
            type: "text",
            flex: 1,
            newRow: true
          },
          {
            id: "age1",
            label: "Age",
            type: "text",
            flex: 1,
            newRow: true
          },
          {
            id: "DOB1",
            label: "Date of Birth",
            type: "text",
            flex: 1,
          },
          {
            id: "ward1",
            label: "Ward",
            type: "text",
            flex: 1,
          },
          {
            id: "sex1",
            label: "Sex",
            type: "text",
            flex: 1,
            newRow: true
          },
          {
            id: "LMP1",
            label: "LMP",
            type: "text",
            flex: 1,
          },
          {
            id: "address1",
            label: "Address",
            type: "text",
            flex: 1,
            newRow: true
          },
          {
            id: "req_exam1",
            label: "Requested Examination/s",
            type: "text",
            flex: 1,
            newRow: true
          },
          {
            id: "diag1",
            label: "Diagnosis",
            type: "text",
            flex: 1,
            newRow: true
          },
          {
            id: "indication1",
            label: "Indication",
            type: "text",
            flex: 1,
            newRow: true
          },
          {
            id: "history1",
            label: "Brief History",
            type: "textarea",
            font: "36px 'Iosevka', monospace",
            isMultiline: true,
            maxWidth: 1200,
            lineHeight: 36,
            flex: 1,
            newRow: true
          },
        ],
      },
    ],
    // Each page has its own template image and per-page field coordinates.
    // The field IDs must match the shared `sections` field IDs above.
    pages: [
      {
        template: "forms/radiorequest.png",
        fields: [
          { id: "hosp-no1", x: 435, y: 365,  anchorBottom: true },
          { id: "req-no1", x: 1920, y: 185,  },
          { id: "date1", x: 335, y: 420,  },
          { id: "name1", x: 500, y: 520,  },
          { id: "age1", x: 310, y: 640,  },
          { id: "DOB1", x: 820, y: 640,  },
          { id: "ward1", x: 1330, y: 640,  },
          { id: "sex1", x: 310, y: 690,  },
          { id: "LMP1", x: 660, y: 690,  },
          { id: "address1", x: 380, y: 740,  },
          { id: "req_exam1", x: 680, y: 800,  },
          { id: "diag1", x: 405, y: 970,  },
          { id: "indication1", x: 930, y: 1030,  },
          { id: "history1", x: 225, y: 1090, font: "36px 'Iosevka', monospace", isMultiline: true, maxWidth: 1600, lineHeight: 36, padSpaces: 13 },
        ],
      },
      {
        template: "forms/radioctscana4.png",
        fields: [
          { id: "hosp-no1", x: 1555, y: 550,  anchorBottom: true },
          { id: "date1", x: 210, y: 550,  },
          { id: "ward1", x: 2060, y: 550,  },
          { id: "name1", x: 250, y: 650,  },
          { id: "age1", x: 1520, y: 650,  },
          { id: "sex1", x: 1600, y: 650,  },
          { id: "DOB1", x: 2040, y: 650,  },
          { id: "address1", x: 260, y: 780,  },
          { id: "history1", x: 90, y: 1220, font: "36px 'Iosevka', monospace", isMultiline: true, maxWidth: 2300, lineHeight: 36 },
        ],
      },
    ],
  },
  cf3: {
    name: "PhilHealth CF3 (under testing)",
    font: "30px 'Iosevka', monospace",
    canvasWidth: 2550,
    canvasHeight: 4200,
    pdfOrientation: "p", // 'l' for landscape, 'p' for portrait
    pdfUnit: "pt",
    pdfFormat: "legal",
    // Shared UI fields (rendered once in the form). Coordinates here are for
    // the live preview (page 1). Each page in `pages` has its own coordinates.
    sections: [
      {
        title: "PhilHealth CF3",
        fields: [
          {
            id: "name1",
            label: "Patient Name",
            type: "text",
            newRow: true
          },
          {
            id: "date-admitted",
            label: "Date Admitted",
            type: "text",
            flex: 1,
            newRow: true
          },
          {
            id: "time-admitted-am",
            label: "Time Admitted (AM)",
            type: "text",
            flex: 1,
          },
          {
            id: "time-admitted-pm",
            label: "Time Admitted (PM)",
            type: "text",
            flex: 1,
          },
          {
            id: "chief-complaint",
            label: "Chief Complaint",
            type: "text",
            newRow: true
          },
          {
            id: "ob-history",
            label: "Brief History",
            type: "textarea",
            font: "36px 'Iosevka', monospace",
            isMultiline: true,
            maxWidth: 1200,
            lineHeight: 36,
            flex: 1,
            newRow: true
          },
          {
            id: "pe-gs",
            label: "General Survey",
            type: "text",
            flex: 1,
            newRow: true
          },
          {
            id: "pe-abdomen",
            label: "Abdomen",
            type: "text",
            flex: 1,
          },
          {
            id: "pe-vitals-bp",
            label: "Vital Signs (BP):",
            type: "text",
            flex: 1,
            newRow: true
          },
          {
            id: "pe-vitals-cr",
            label: "Vital Signs (CR):",
            type: "text",
            flex: 1,
          },
          {
            id: "pe-vitals-rr",
            label: "Vital Signs (RR):",
            type: "text",
            flex: 1,
          },
          {
            id: "pe-vitals-temp",
            label: "Vital Signs (Temp):",
            type: "text",
            flex: 1,
          },
          {
            id: "pe-heent",
            label: "HEENT",
            type: "text",
            flex: 1,
            newRow: true
          },
          {
            id: "pe-gu",
            label: "GU",
            type: "text",
            flex: 1,
          },
          {
            id: "pe-cl",
            label: "Chest/Lungs",
            type: "text",
            flex: 1,
            newRow: true
          },
          {
            id: "pe-se",
            label: "Skin/Extremities",
            type: "text",
            flex: 1,
          },
          {
            id: "pe-cvs",
            label: "CVS",
            type: "text",
            flex: 1,
            newRow: true
          },                   
          {
            id: "pe-neuro",
            label: "Neuro Examination",
            type: "text",
            flex: 1,
          },
          {
            id: "course-wards",
            label: "Course in the Wards",
            type: "textarea",
            font: "36px 'Iosevka', monospace",
            isMultiline: true,
            maxWidth: 1200,
            lineHeight: 36,
            flex: 1,
            newRow: true
          },
          {
            id: "pertinent-labs",
            label: "Pertinent Laboratory and Diagnostic Findings",
            type: "textarea",
            font: "36px 'Iosevka', monospace",
            isMultiline: true,
            maxWidth: 1200,
            lineHeight: 36,
            flex: 1,
            newRow: true
          },
          {
            id: "menstrual-hx",
            label: "Menstrual History (LMP):",
            type: "text",
            flex: 1,
            newRow: true
          },
          {
            id: "age-menarche",
            label: "Age of Menarche:",
            type: "text",
            flex: 1,
          },
          {
            id: "obstetric-hx",
            label: "Obstetric History",
            type: "text",
            newRow: true
          },
          {
            id: "admitting-diagnosis",
            label: "Admitting Diagnosis",
            type: "text",
            newRow: true
          },
          {
            id: "date-delivery",
            label: "Date of Delivery",
            type: "text",
            flex: 1,
            newRow: true
          },
          {
            id: "time-delivery-am",
            label: "Time Delivery (AM)",
            type: "text",
            flex: 1,
          },
          {
            id: "time-delivery-pm",
            label: "Time Delivery (PM)",
            type: "text",
            flex: 1,
          },
          {
            id: "maternal-outcome",
            label: "Maternal Outcome (Obstetric Index):",
            type: "text",
            flex: 1,
            newRow: true
          },
          {
            id: "aog-lmp",
            label: "AOG by LMP:",
            type: "text",
            flex: 1,
          },
          {
            id: "manner-delivery",
            label: "Manner of Delivery",
            type: "text",
            flex: 1,
          },
          {
            id: "presentation",
            label: "Presentation",
            type: "text",
            flex: 1,
          },
          {
            id: "fetal-outcome",
            label: "Fetal Outcome",
            type: "text",
            flex: 1,
            newRow: true
          },
          {
            id: "birth-sex",
            label: "Sex",
            type: "text",
            flex: 1,
          },
          {
            id: "birth-wt",
            label: "Birth Weight (g)",
            type: "text",
            flex: 1,
          },
          {
            id: "birth-apgar",
            label: "Apgar Score",
            type: "text",
            flex: 1,
          },
          {
            id: "scheduled-postpartum",
            label: "Scheduled-postpartum",
            type: "text",
            flex: 1,
            newRow: true
          },
          {
            id: "date-discharge",
            label: "Date of Discharge",
            type: "text",
            flex: 1,
            newRow: true
          },
          {
            id: "time-discharge-am",
            label: "Time Discharge (AM)",
            type: "text",
            flex: 1,
          },
          {
            id: "time-discharge-pm",
            label: "Time Discharge (PM)",
            type: "text",
            flex: 1,
          },
        ],
      },
    ],
    // Each page has its own template image and per-page field coordinates.
    // The field IDs must match the shared `sections` field IDs above.
    pages: [
      {
        template: "forms/ph-cf3-1.png",
        fields: [
          { id: "name1", x: 120, y: 885, },
          { id: "date-admitted", x: 450, y: 1025,  },
          { id: "time-admitted-am", x: 1310, y: 1025,  },
          { id: "time-admitted-pm", x: 1520, y: 1025,  },
          { id: "chief-complaint", x: 1870, y: 920,  },
          { id: "ob-history", x: 110, y: 1380, isMultiline: true, maxWidth: 2300},
          { id: "pe-gs", x: 430, y: 1950,  },
          { id: "pe-vitals-bp", x: 495, y: 2100,  },
          { id: "pe-vitals-cr", x: 710, y: 2100,  },
          { id: "pe-vitals-rr", x: 950, y: 2100,  },
          { id: "pe-vitals-temp", x: 1310, y: 2100,  },
          { id: "pe-heent", x: 430, y: 2210,  },
          { id: "pe-cl", x: 430, y: 2320,  },
          { id: "pe-abdomen", x: 1930, y: 2100,  },
          { id: "pe-gu", x: 1930, y: 2210,  },
          { id: "pe-se", x: 1930, y: 2320,  },
          { id: "pe-cvs", x: 430, y: 2440,  },
          { id: "pe-neuro", x: 1930, y: 2440,  },
          { id: "course-wards", x: 110, y: 2775, },
          { id: "pertinent-labs", x: 110, y: 3425, },
        ],
      },
      {
        template: "forms/ph-cf3-2.png",
        fields: [
          { id: "menstrual-hx", x: 1425, y: 500, },
          { id: "age-menarche", x: 2100, y: 500,  },
          { id: "obstetric-hx", x: 1415, y: 590,  },
          { id: "admitting-diagnosis", x: 530, y: 1175, isMultiline: true, 
            anchorBottom: true ,maxWidth: 2000, lineHeight: 28 },
          { id: "date-delivery", x: 815, y: 2150,  },
          { id: "time-delivery-am", x: 1410, y: 2150,  },
          { id: "time-delivery-pm", x: 1550, y: 2150,  },
          { id: "maternal-outcome", x: 550, y: 2300,  },
          { id: "aog-lmp", x: 1020, y: 2300, },
          { id: "manner-delivery", x: 1510, y: 2300, },
          { id: "presentation", x: 1980, y: 2300, },
          { id: "fetal-outcome", x: 1510, y: 2440, },
          { id: "birth-sex", x: 1020, y: 2440, },
          { id: "birth-wt", x: 1510, y: 2440, },
          { id: "birth-apgar", x: 1980, y: 2440, },
          { id: "scheduled-postpartum", x: 1410, y: 2550, },
          { id: "scheduled-postpartum", x: 1480, y: 3320, },
          { id: "date-discharge", x: 815, y: 2650, },
          { id: "time-discharge-am", x: 1425, y: 2650, },
          { id: "time-discharge-pm", x: 1565, y: 2650, },
        ],
      },
    ],
  },
  
  surgpath: {
    name: "Surgical Pathology Form",
    template: "forms/surgpath.png",
    canvasWidth: 2550, // A4 Portrait 300 DPI
    canvasHeight: 3900,
    font: "36px 'Iosevka', monospace",
    pdfOrientation: "p",
    pdfUnit: "pt",
    pdfFormat: "legal",
    sections: [
      {
        title: "Surgical Pathology Form",
        fields: [
          {
            id: "sp_name", label: "Name", placeholder: "Name:",
            type: "text", class: "small", x: 240, y: 490,
            flex: 1,
            newRow: true
          },
          {
            id: "sp_age", label: "Age", placeholder: "Age:",
            type: "text", class: "small", x: 240, y: 620,
            flex: 1
          },
          {
            id: "sp_civil_status", label: "Civil Status", placeholder: "Civil Status:",
            type: "text", x: 750, y: 620,
            font: "36px 'Iosevka', monospace",
          },
          {
            id: "sp_address", label: "Address", placeholder: "Address:",
            type: "text", x: 1040, y: 620,
            newRow: true
          },
          {
            id: "sp_ward", label: "Ward:", placeholder: "Ward:",
            type: "text", x: 240, y: 740,
            font: "36px 'Iosevka', monospace",
          },
          {
            id: "sp_bed", label: "Bed:", placeholder: "Bed:",
            type: "text", x: 750, y: 740,
            font: "36px 'Iosevka', monospace",
          },
          {
            id: "sp_contact_no", label: "Contact No:", placeholder: "Contact No:",
            type: "text", x: 1030, y: 740,
            font: "36px 'Iosevka', monospace",
          },
          {
            id: "sp_datetime", label: "Date and Time", placeholder: "Date and Time Referred:",
            type: "text", x: 1740, y: 740,
            showNowButton: true,
            nowButtonMode: "datetime",
          },
          {
            id: "sp_source", label: "Source of Specimen:", placeholder: "Source of Specimen:",
            type: "text", x: 240, y: 860,
            newRow: true
          },
          {
            id: "sp_history_pe", label: "Pertinent History and PE", placeholder: "Pertinent history and PE:",
            type: "textarea", x: 150, y: 1090,
            isMultiline: true,
            maxWidth: 1150,
            lineHeight: 36,
            newRow: true
          },
          {
            id: "sp_imaging", label: "Imaging", placeholder: "Imaging:",
            type: "textarea", x: 1340, y: 1120,
            isMultiline: true,
            maxWidth: 1050,
            lineHeight: 36,
            newRow: true
          },
          {
            id: "sp_pmh", label: "Pertinent Past Medical History:", placeholder: "Pertinent Past Medical History:",
            type: "text", x: 135, y: 1840,
            newRow: true
          },
          {
            id: "sp_treatment", label: "Prior and Current Treatment:", placeholder: "Prior and Current Treatment:",
            type: "text", x: 1360, y: 1840,
            font: "36px 'Iosevka', monospace",
          },
          {
            id: "sp_operationdone", label: "Operation Done", placeholder: "Operation Done:",
            type: "text", x: 135, y: 2130,
            newRow: true
          },
          {
            id: "sp_timeofremoval", label: "Time of Removal", placeholder: "Time of Removal:",
            type: "text", x: 1360, y: 2010,
            font: "36px 'Iosevka', monospace",
          },
          {
            id: "sp_suturetags", label: "Suture Tags", placeholder: "Suture Tags:",
            type: "text", x: 615, y: 955,
            newRow: true
          },
          {
            id: "sp_postopdiag", label: "Post Operative Diagnosis", placeholder: "Post Operative Diagnosis:",
            type: "text", x: 135, y: 2250,
            newRow: true
          },
        ],
      },
    ],
  },
};
  
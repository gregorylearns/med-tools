const FORMS_CONFIG = {
  prescription: {
    name: "Prescription Pad",
    template: "template.png",
    canvasWidth: 3508,
    canvasHeight: 2480,
    pdfOrientation: "l", // 'l' for landscape, 'p' for portrait
    pdfUnit: "pt",
    pdfFormat: "a4",
    sections: [
      {
        title: "Quadrant 1 (Top Left)",
        fields: [
          { id: "name1", label: "Name", placeholder: "Name", type: "text", x: 315, y: 445, font: "28px 'RobotoMono', monospace" },
          { id: "date1", label: "Date", placeholder: "Date", type: "text", class: "small", x: 1140, y: 445, font: "28px 'RobotoMono', monospace" },
          { id: "ward1", label: "Ward/Unit", placeholder: "Ward/Unit", type: "text", x: 320, y: 545, font: "28px 'RobotoMono', monospace" },
          { id: "age1", label: "Age/Sex", placeholder: "Age/Sex", type: "text", class: "small", x: 920, y: 545, font: "28px 'RobotoMono', monospace" },
          { id: "tag1", label: "Tag #", placeholder: "Tag #", type: "text", class: "small", x: 1140, y: 545, font: "28px 'RobotoMono', monospace" },
          { id: "text1", label: "Prescription", placeholder: "Prescription (Top Left)", type: "textarea", x: 185, y: 825, font: "34px 'RobotoMono', monospace", isMultiline: true, lineHeight: 65 }
        ]
      },
      {
        title: "Quadrant 2 (Top Right)",
        fields: [
          { id: "name2", label: "Name", placeholder: "Name", type: "text", x: 2069, y: 445, font: "28px 'RobotoMono', monospace" },
          { id: "date2", label: "Date", placeholder: "Date", type: "text", class: "small", x: 2894, y: 445, font: "28px 'RobotoMono', monospace" },
          { id: "ward2", label: "Ward/Unit", placeholder: "Ward/Unit", type: "text", x: 2074, y: 545, font: "28px 'RobotoMono', monospace" },
          { id: "age2", label: "Age/Sex", placeholder: "Age/Sex", type: "text", class: "small", x: 2674, y: 545, font: "28px 'RobotoMono', monospace" },
          { id: "tag2", label: "Tag #", placeholder: "Tag #", type: "text", class: "small", x: 2894, y: 545, font: "28px 'RobotoMono', monospace" },
          { id: "text2", label: "Prescription", placeholder: "Prescription (Top Right)", type: "textarea", x: 1939, y: 825, font: "34px 'RobotoMono', monospace", isMultiline: true, lineHeight: 65 }
        ]
      }
    ]
  },
  idrformat: {
    name: "IDR Format 2026",
    template: "idrformat2026.png",
    canvasWidth: 2480, // A4 Portrait 300 DPI
    canvasHeight: 3508,
    pdfOrientation: "p",
    pdfUnit: "pt",
    pdfFormat: "a4",
    sections: [
      {
        title: "Patient Information",
        fields: [
          { id: "idr_name", label: "Full Name", placeholder: "Enter full name", type: "text", x: 300, y: 400, font: "28px 'RobotoMono', monospace" },
          { id: "idr_age", label: "Age", placeholder: "Age", type: "text", class: "small", x: 1800, y: 400, font: "28px 'RobotoMono', monospace" },
          { id: "idr_notes", label: "Clinical Notes", placeholder: "Enter clinical notes...", type: "textarea", x: 300, y: 600, font: "30px 'RobotoMono', monospace", isMultiline: true, lineHeight: 60 }
        ]
      }
    ]
  }
};

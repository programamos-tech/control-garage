import type { Locale } from "@/lib/dictionaries";

/** Textos extensos para modales de creación (demo UI). */
export type AdminModalCopy = {
  client: {
    subtitle: string;
    sectionProfile: string;
    accountType: string;
    typeResidential: string;
    typeCommercial: string;
    typeHoa: string;
    legalName: string;
    preferredLanguage: string;
    langEnglish: string;
    langSpanish: string;
    sectionContact: string;
    primaryPhone: string;
    altPhone: string;
    emailBilling: string;
    emailService: string;
    sectionBilling: string;
    billingSame: string;
    county: string;
    taxIdHint: string;
    sectionProperty: string;
    serviceAddress: string;
    unitApt: string;
    gateCode: string;
    doorCount: string;
    headroomNote: string;
    sectionCommercial: string;
    poRequired: string;
    apContact: string;
    sectionFiles: string;
    uploadHint: string;
    footerHint: string;
  };
  quote: {
    subtitle: string;
    sectionHeader: string;
    quoteNumber: string;
    validDays: string;
    taxCounty: string;
    leadSource: string;
    leadWeb: string;
    leadReferral: string;
    sectionJob: string;
    jobType: string;
    jobInstall: string;
    jobRepair: string;
    jobOpener: string;
    crewNotes: string;
    sectionLines: string;
    colItem: string;
    colSku: string;
    colQty: string;
    colUnit: string;
    colLine: string;
    addRow: string;
    sectionTotals: string;
    subtotal: string;
    discount: string;
    tax: string;
    total: string;
    sectionTerms: string;
    termsBody: string;
    depositPct: string;
    signatureHint: string;
  };
  invoice: {
    subtitle: string;
    sectionLink: string;
    linkQuote: string;
    noQuote: string;
    sectionParties: string;
    billTo: string;
    shipTo: string;
    remitTo: string;
    sectionLines: string;
    colDescription: string;
    colQty: string;
    colRate: string;
    colAmount: string;
    sectionPayment: string;
    termsSelect: string;
    termNet15: string;
    termNet30: string;
    termDueOnReceipt: string;
    lateFee: string;
    paymentMethods: string;
    achWire: string;
    cardPortal: string;
    checkMail: string;
    sectionCompliance: string;
    w9Hint: string;
    lienHint: string;
    footerAccounting: string;
    linesFooterTotal: string;
  };
};

const en: AdminModalCopy = {
  client: {
    subtitle: "Full profile for dispatch, billing, and warranty registration in Greater Orlando.",
    sectionProfile: "Account profile",
    accountType: "Account type",
    typeResidential: "Residential homeowner",
    typeCommercial: "Commercial / industrial",
    typeHoa: "HOA / property manager",
    legalName: "Legal or display name",
    preferredLanguage: "Preferred language on site",
    langEnglish: "English",
    langSpanish: "Spanish",
    sectionContact: "Primary contacts",
    primaryPhone: "Primary phone (mobile)",
    altPhone: "Alternate phone",
    emailBilling: "Billing email",
    emailService: "On-site contact email",
    sectionBilling: "Billing address",
    billingSame: "Same as service property",
    county: "County (FL)",
    taxIdHint: "Tax ID / resale cert. (optional)",
    sectionProperty: "Service property (where we work)",
    serviceAddress: "Street address",
    unitApt: "Unit / gate / building",
    gateCode: "Gate or access code",
    doorCount: "Number of garage doors",
    headroomNote: "Low headroom / obstructions",
    sectionCommercial: "Commercial & HOA",
    poRequired: "PO required on every invoice",
    apContact: "Accounts payable contact",
    sectionFiles: "Photos & documents",
    uploadHint: "Site photos, HOA forms, or prior invoices — drag & drop (demo).",
    footerHint: "Credit check & duplicate detection would run on save (not in demo).",
  },
  quote: {
    subtitle: "Structured estimate with line items, tax, and install assumptions for Orlando jobs.",
    sectionHeader: "Quote header",
    quoteNumber: "Quote # (auto)",
    validDays: "Valid for (days)",
    taxCounty: "Tax jurisdiction",
    leadSource: "Lead source",
    leadWeb: "Website / WhatsApp",
    leadReferral: "Referral / repeat",
    sectionJob: "Job context",
    jobType: "Primary job type",
    jobInstall: "New install / replacement",
    jobRepair: "Repair / tune-up",
    jobOpener: "Opener only",
    crewNotes: "Crew & access notes",
    sectionLines: "Line items",
    colItem: "Description",
    colSku: "SKU / model",
    colQty: "Qty",
    colUnit: "Unit price",
    colLine: "Line total",
    addRow: "Add line item",
    sectionTotals: "Totals",
    subtotal: "Subtotal",
    discount: "Discount",
    tax: "Sales tax (est.)",
    total: "Quote total",
    sectionTerms: "Terms & signature",
    termsBody:
      "Labor warranty, manufacturer warranty, and permit notes appear here. Customer acknowledges scope before scheduling.",
    depositPct: "Deposit required (%)",
    signatureHint: "E-sign capture would attach here (demo).",
  },
  invoice: {
    subtitle: "AR invoice with line detail, payment terms, and Florida compliance placeholders.",
    sectionLink: "Link to quote / job",
    linkQuote: "Accepted quote",
    noQuote: "No linked quote (manual invoice)",
    sectionParties: "Bill from / bill to",
    billTo: "Bill to",
    shipTo: "Service location (if different)",
    remitTo: "Remit checks to",
    sectionLines: "Invoice lines",
    colDescription: "Description",
    colQty: "Qty",
    colRate: "Rate",
    colAmount: "Amount",
    sectionPayment: "Payment & terms",
    termsSelect: "Payment terms",
    termNet15: "Net 15",
    termNet30: "Net 30",
    termDueOnReceipt: "Due on receipt",
    lateFee: "Late fee after due date (policy)",
    paymentMethods: "Accepted methods",
    achWire: "ACH / wire instructions (PDF)",
    cardPortal: "Card payment portal link",
    checkMail: "Check payable to CONTROL GARAGE FL — mailing address on PDF",
    sectionCompliance: "Compliance & attachments",
    w9Hint: "W-9 on file checkbox (demo)",
    lienHint: "Notice to owner / lien rights (if applicable)",
    footerAccounting: "QuickBooks / Stripe sync would post here after payment (demo).",
    linesFooterTotal: "Subtotal + tax (est.)",
  },
};

const es: AdminModalCopy = {
  client: {
    subtitle: "Perfil completo para despacho, facturación y registro de garantía en Orlando y alrededores.",
    sectionProfile: "Perfil de cuenta",
    accountType: "Tipo de cuenta",
    typeResidential: "Residencial — propietario",
    typeCommercial: "Comercial / industrial",
    typeHoa: "HOA / administración de propiedad",
    legalName: "Nombre legal o comercial",
    preferredLanguage: "Idioma preferido en sitio",
    langEnglish: "Inglés",
    langSpanish: "Español",
    sectionContact: "Contactos principales",
    primaryPhone: "Teléfono principal (móvil)",
    altPhone: "Teléfono alterno",
    emailBilling: "Correo de facturación",
    emailService: "Correo de contacto en obra",
    sectionBilling: "Dirección de facturación",
    billingSame: "Igual que la propiedad de servicio",
    county: "Condado (FL)",
    taxIdHint: "RFC / EIN / cert. de reventa (opcional)",
    sectionProperty: "Propiedad de servicio (donde trabajamos)",
    serviceAddress: "Dirección",
    unitApt: "Unidad / portón / edificio",
    gateCode: "Código de acceso",
    doorCount: "Cantidad de puertas de garaje",
    headroomNote: "Poco espacio superior / obstáculos",
    sectionCommercial: "Comercial y HOA",
    poRequired: "Requiere orden de compra en cada factura",
    apContact: "Contacto de cuentas por pagar",
    sectionFiles: "Fotos y documentos",
    uploadHint: "Fotos del sitio, formularios HOA o facturas previas — arrastrar (demo).",
    footerHint: "Verificación de crédito y duplicados se ejecutarían al guardar (no en demo).",
  },
  quote: {
    subtitle: "Cotización estructurada con partidas, impuesto y supuestos de instalación en Orlando.",
    sectionHeader: "Encabezado",
    quoteNumber: "N.º de cotización (auto)",
    validDays: "Válida por (días)",
    taxCounty: "Jurisdicción fiscal",
    leadSource: "Origen del lead",
    leadWeb: "Sitio web / WhatsApp",
    leadReferral: "Referido / recurrente",
    sectionJob: "Contexto del trabajo",
    jobType: "Tipo principal",
    jobInstall: "Instalación / reemplazo",
    jobRepair: "Reparación / afinado",
    jobOpener: "Solo motor",
    crewNotes: "Notas de cuadrilla y acceso",
    sectionLines: "Partidas",
    colItem: "Descripción",
    colSku: "SKU / modelo",
    colQty: "Cant.",
    colUnit: "Precio unit.",
    colLine: "Subtotal línea",
    addRow: "Agregar partida",
    sectionTotals: "Totales",
    subtotal: "Subtotal",
    discount: "Descuento",
    tax: "Impuesto ventas (est.)",
    total: "Total cotización",
    sectionTerms: "Términos y firma",
    termsBody:
      "Garantía de mano de obra, garantía de fábrica y permisos. El cliente acepta el alcance antes de agendar.",
    depositPct: "Anticipo requerido (%)",
    signatureHint: "Aquí iría la firma electrónica (demo).",
  },
  invoice: {
    subtitle: "Factura de cuentas por cobrar con detalle, términos de pago y marco para cumplimiento en FL.",
    sectionLink: "Enlace a cotización / trabajo",
    linkQuote: "Cotización aceptada",
    noQuote: "Sin cotización (factura manual)",
    sectionParties: "Emisor / receptor",
    billTo: "Facturar a",
    shipTo: "Ubicación del servicio (si difiere)",
    remitTo: "Pago con cheque a nombre de",
    sectionLines: "Partidas de factura",
    colDescription: "Descripción",
    colQty: "Cant.",
    colRate: "Tarifa",
    colAmount: "Importe",
    sectionPayment: "Pago y términos",
    termsSelect: "Términos de pago",
    termNet15: "Neto 15",
    termNet30: "Neto 30",
    termDueOnReceipt: "Vence al recibir",
    lateFee: "Recargo por mora (política)",
    paymentMethods: "Métodos aceptados",
    achWire: "ACH / transferencia (PDF)",
    cardPortal: "Enlace portal de tarjeta",
    checkMail: "Cheque a CONTROL GARAGE FL — dirección en PDF",
    sectionCompliance: "Cumplimiento y adjuntos",
    w9Hint: "W-9 en archivo (casilla demo)",
    lienHint: "Aviso al propietario / derechos de gravamen (si aplica)",
    footerAccounting: "Sincronía con QuickBooks / Stripe tras el pago (demo).",
    linesFooterTotal: "Subtotal + impuesto (est.)",
  },
};

export function getModalCopy(locale: Locale): AdminModalCopy {
  return locale === "es" ? es : en;
}

import type { Locale } from "@/lib/dictionaries";

export type AdminStrings = {
  metaTitle: string;
  appName: string;
  appSubtitle: string;
  /** Título bajo el logo en el sidebar (sustituye la etiqueta “ERP”) */
  sidebarHeading: string;
  backToSite: string;
  localeSwitch: string;
  nav: {
    dashboard: string;
    clients: string;
    quotes: string;
    invoices: string;
    jobs: string;
    inventory: string;
    reports: string;
  };
  common: {
    new: string;
    search: string;
    filter: string;
    exportCsv: string;
    actions: string;
    view: string;
    save: string;
    cancel: string;
    demoNote: string;
  };
  dashboard: {
    title: string;
    revenueMtd: string;
    openQuotes: string;
    overdueInv: string;
    jobsWeek: string;
    activity: string;
  };
  clients: { title: string; subtitle: string; newClient: string; table: Record<string, string> };
  quotes: { title: string; subtitle: string; newQuote: string; table: Record<string, string> };
  invoices: { title: string; subtitle: string; newInvoice: string; table: Record<string, string> };
  jobs: { title: string; subtitle: string; newJob: string; table: Record<string, string> };
  inventory: { title: string; subtitle: string; newItem: string; table: Record<string, string> };
  reports: { title: string; subtitle: string; placeholder: string };
  forms: {
    clientNewTitle: string;
    quoteNewTitle: string;
    invoiceNewTitle: string;
    quoteClientSection: string;
    quoteLinesSection: string;
    quoteClientLabel: string;
    quoteAddressLabel: string;
    invoiceNewHint: string;
    invoiceNumberLabel: string;
    invoiceDueLabel: string;
    invoiceBillToLabel: string;
    fields: Record<string, string>;
  };
  status: {
    quote: Record<string, string>;
    invoice: Record<string, string>;
    job: Record<string, string>;
  };
};

const en: AdminStrings = {
  metaTitle: "Control Garage FL — ERP demo",
  appName: "Control Garage FL",
  appSubtitle: "Operations — Orlando, FL",
  sidebarHeading: "Dashboard",
  backToSite: "Back to website",
  localeSwitch: "Español",
  nav: {
    dashboard: "Dashboard",
    clients: "Clients",
    quotes: "Quotes",
    invoices: "Invoices",
    jobs: "Jobs & routes",
    inventory: "Parts inventory",
    reports: "Reports",
  },
  common: {
    new: "New",
    search: "Search",
    filter: "Filter",
    exportCsv: "Export CSV",
    actions: "Actions",
    view: "View",
    save: "Save (demo)",
    cancel: "Cancel",
    demoNote: "Preview UI only — no data is saved.",
  },
  dashboard: {
    title: "Dashboard",
    revenueMtd: "Revenue (MTD)",
    openQuotes: "Open quotes",
    overdueInv: "Overdue invoices",
    jobsWeek: "Jobs this week",
    activity: "Recent activity",
  },
  clients: {
    title: "Clients",
    subtitle: "Residential & commercial accounts in Greater Orlando.",
    newClient: "New client",
    table: {
      name: "Name",
      phone: "Phone",
      email: "Email",
      city: "City",
      since: "Customer since",
    },
  },
  quotes: {
    title: "Quotes",
    subtitle: "Estimates and proposals — springs, doors, openers.",
    newQuote: "New quote",
    table: {
      number: "Number",
      client: "Client",
      total: "Total",
      status: "Status",
      date: "Date",
      summary: "Summary",
    },
  },
  invoices: {
    title: "Invoices",
    subtitle: "Billing after installs and repairs.",
    newInvoice: "New invoice",
    table: {
      number: "Number",
      client: "Client",
      total: "Total",
      status: "Status",
      issued: "Issued",
      due: "Due",
    },
  },
  jobs: {
    title: "Jobs & routes",
    subtitle: "Scheduled visits and crew assignments.",
    newJob: "Schedule job",
    table: {
      client: "Client",
      type: "Job type",
      date: "Date",
      window: "Window",
      tech: "Crew",
      status: "Status",
      address: "Address",
    },
  },
  inventory: {
    title: "Parts inventory",
    subtitle: "Van stock and warehouse — demo quantities.",
    newItem: "Add SKU",
    table: {
      sku: "SKU",
      name: "Description",
      qty: "Qty",
      reorder: "Reorder at",
      location: "Location",
    },
  },
  reports: {
    title: "Reports",
    subtitle: "P&L, tax exports, and technician productivity (coming soon).",
    placeholder: "Charts and downloadable reports would appear here.",
  },
  forms: {
    clientNewTitle: "New client (demo form)",
    quoteNewTitle: "New quote (demo form)",
    invoiceNewTitle: "New invoice (demo form)",
    quoteClientSection: "Client & job",
    quoteLinesSection: "Line items (demo)",
    quoteClientLabel: "Client",
    quoteAddressLabel: "Service address",
    invoiceNewHint:
      "Line items would mirror an accepted quote or manual parts and labor. This screen is for layout preview only.",
    invoiceNumberLabel: "Invoice #",
    invoiceDueLabel: "Due date",
    invoiceBillToLabel: "Bill to",
    fields: {
      displayName: "Display name",
      phone: "Phone",
      email: "Email",
      address: "Street address",
      city: "City / ZIP",
      notes: "Internal notes",
    },
  },
  status: {
    quote: {
      draft: "Draft",
      sent: "Sent",
      accepted: "Accepted",
      expired: "Expired",
    },
    invoice: {
      paid: "Paid",
      pending: "Pending",
      overdue: "Overdue",
    },
    job: {
      scheduled: "Scheduled",
      in_progress: "In progress",
      completed: "Completed",
      cancelled: "Cancelled",
    },
  },
};

const es: AdminStrings = {
  metaTitle: "Control Garage FL — demo ERP",
  appName: "Control Garage FL",
  appSubtitle: "Operaciones — Orlando, FL",
  sidebarHeading: "Dashboard",
  backToSite: "Volver al sitio web",
  localeSwitch: "English",
  nav: {
    dashboard: "Resumen",
    clients: "Clientes",
    quotes: "Cotizaciones",
    invoices: "Facturas",
    jobs: "Trabajos y rutas",
    inventory: "Inventario de refacciones",
    reports: "Reportes",
  },
  common: {
    new: "Nuevo",
    search: "Buscar",
    filter: "Filtrar",
    exportCsv: "Exportar CSV",
    actions: "Acciones",
    view: "Ver",
    save: "Guardar (demo)",
    cancel: "Cancelar",
    demoNote: "Solo vista previa — no se guardan datos.",
  },
  dashboard: {
    title: "Resumen",
    revenueMtd: "Ingresos (mes)",
    openQuotes: "Cotizaciones abiertas",
    overdueInv: "Facturas vencidas",
    jobsWeek: "Trabajos esta semana",
    activity: "Actividad reciente",
  },
  clients: {
    title: "Clientes",
    subtitle: "Cuentas residenciales y comerciales en Orlando y alrededores.",
    newClient: "Nuevo cliente",
    table: {
      name: "Nombre",
      phone: "Teléfono",
      email: "Correo",
      city: "Ciudad",
      since: "Cliente desde",
    },
  },
  quotes: {
    title: "Cotizaciones",
    subtitle: "Presupuestos — resortes, puertas, motores.",
    newQuote: "Nueva cotización",
    table: {
      number: "Número",
      client: "Cliente",
      total: "Total",
      status: "Estado",
      date: "Fecha",
      summary: "Resumen",
    },
  },
  invoices: {
    title: "Facturas",
    subtitle: "Cobros tras instalaciones y reparaciones.",
    newInvoice: "Nueva factura",
    table: {
      number: "Número",
      client: "Cliente",
      total: "Total",
      status: "Estado",
      issued: "Emitida",
      due: "Vence",
    },
  },
  jobs: {
    title: "Trabajos y rutas",
    subtitle: "Visitas programadas y asignación de cuadrillas.",
    newJob: "Programar trabajo",
    table: {
      client: "Cliente",
      type: "Tipo de trabajo",
      date: "Fecha",
      window: "Horario",
      tech: "Cuadrilla",
      status: "Estado",
      address: "Dirección",
    },
  },
  inventory: {
    title: "Inventario de refacciones",
    subtitle: "Stock en camioneta y bodega — cantidades de demostración.",
    newItem: "Agregar SKU",
    table: {
      sku: "SKU",
      name: "Descripción",
      qty: "Cant.",
      reorder: "Pedir al llegar a",
      location: "Ubicación",
    },
  },
  reports: {
    title: "Reportes",
    subtitle: "P&L, exportaciones fiscales y productividad (próximamente).",
    placeholder: "Aquí irían gráficas y reportes descargables.",
  },
  forms: {
    clientNewTitle: "Nuevo cliente (formulario demo)",
    quoteNewTitle: "Nueva cotización (formulario demo)",
    invoiceNewTitle: "Nueva factura (formulario demo)",
    quoteClientSection: "Cliente y trabajo",
    quoteLinesSection: "Partidas (demo)",
    quoteClientLabel: "Cliente",
    quoteAddressLabel: "Dirección del servicio",
    invoiceNewHint:
      "Las partidas reflejarían una cotización aceptada o repuestos y mano de obra manual. Solo vista previa de diseño.",
    invoiceNumberLabel: "Factura n.º",
    invoiceDueLabel: "Fecha de vencimiento",
    invoiceBillToLabel: "Facturar a",
    fields: {
      displayName: "Nombre o razón social",
      phone: "Teléfono",
      email: "Correo",
      address: "Dirección",
      city: "Ciudad / ZIP",
      notes: "Notas internas",
    },
  },
  status: {
    quote: {
      draft: "Borrador",
      sent: "Enviada",
      accepted: "Aceptada",
      expired: "Vencida",
    },
    invoice: {
      paid: "Pagada",
      pending: "Pendiente",
      overdue: "Vencida",
    },
    job: {
      scheduled: "Programada",
      in_progress: "En curso",
      completed: "Completada",
      cancelled: "Cancelada",
    },
  },
};

export function getAdminStrings(locale: Locale): AdminStrings {
  return locale === "es" ? es : en;
}

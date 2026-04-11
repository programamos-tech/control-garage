/** Datos de demostración para el panel ERP (sin backend). */

export type MockClient = {
  id: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  since: string;
};

export type MockQuote = {
  id: string;
  number: string;
  client: string;
  total: number;
  status: "draft" | "sent" | "accepted" | "expired";
  date: string;
  lineSummary: string;
};

export type MockInvoice = {
  id: string;
  number: string;
  client: string;
  total: number;
  status: "paid" | "pending" | "overdue";
  issued: string;
  due: string;
};

export type MockJob = {
  id: string;
  client: string;
  type: string;
  date: string;
  window: string;
  tech: string;
  status: "scheduled" | "in_progress" | "completed" | "cancelled";
  address: string;
};

export type MockInventoryItem = {
  sku: string;
  name: string;
  qty: number;
  reorderAt: number;
  location: string;
};

export const mockClients: MockClient[] = [
  {
    id: "c1",
    name: "Lake Nona HOA — Gate B",
    phone: "(407) 555-0142",
    email: "maintenance@lakenona-demo.local",
    address: "9800 Tavistock Lakes Blvd",
    city: "Orlando, FL",
    since: "2024-06-12",
  },
  {
    id: "c2",
    name: "Martínez Residential",
    phone: "(407) 486-4303",
    email: "familia.martinez@example.com",
    address: "4521 Curry Ford Rd",
    city: "Orlando, FL",
    since: "2025-01-20",
  },
  {
    id: "c3",
    name: "Winter Garden Self Storage",
    phone: "(407) 555-0199",
    email: "ops@wgstorage-demo.local",
    address: "16000 W Colonial Dr",
    city: "Winter Garden, FL",
    since: "2023-11-03",
  },
  {
    id: "c4",
    name: "Dr. Phillips Plaza (Unit 12)",
    phone: "(407) 555-0177",
    email: "facilities@dphillips-demo.local",
    address: "7600 Dr Phillips Blvd",
    city: "Orlando, FL",
    since: "2025-03-01",
  },
];

export const mockQuotes: MockQuote[] = [
  {
    id: "q1",
    number: "CG-Q-2026-0142",
    client: "Martínez Residential",
    total: 2840,
    status: "sent",
    date: "2026-04-02",
    lineSummary: "16×7 Clopay Canyon Ridge + LiftMaster 87504",
  },
  {
    id: "q2",
    number: "CG-Q-2026-0141",
    client: "Lake Nona HOA — Gate B",
    total: 11200,
    status: "accepted",
    date: "2026-03-28",
    lineSummary: "3× commercial operators + labor",
  },
  {
    id: "q3",
    number: "CG-Q-2026-0138",
    client: "Winter Garden Self Storage",
    total: 1890,
    status: "draft",
    date: "2026-03-22",
    lineSummary: "Spring replacement (pair) + cables",
  },
  {
    id: "q4",
    number: "CG-Q-2026-0135",
    client: "Dr. Phillips Plaza (Unit 12)",
    total: 645,
    status: "expired",
    date: "2026-02-10",
    lineSummary: "Tune-up + roller swap",
  },
];

export const mockInvoices: MockInvoice[] = [
  {
    id: "i1",
    number: "CG-INV-2026-0088",
    client: "Lake Nona HOA — Gate B",
    total: 5600,
    status: "paid",
    issued: "2026-03-30",
    due: "2026-04-14",
  },
  {
    id: "i2",
    number: "CG-INV-2026-0087",
    client: "Martínez Residential",
    total: 2840,
    status: "pending",
    issued: "2026-04-03",
    due: "2026-04-18",
  },
  {
    id: "i3",
    number: "CG-INV-2026-0084",
    client: "Winter Garden Self Storage",
    total: 920,
    status: "overdue",
    issued: "2026-03-01",
    due: "2026-03-16",
  },
];

export const mockJobs: MockJob[] = [
  {
    id: "j1",
    client: "Martínez Residential",
    type: "Install — new door + opener",
    date: "2026-04-12",
    window: "8:00 AM – 12:00 PM",
    tech: "Team A",
    status: "scheduled",
    address: "4521 Curry Ford Rd, Orlando",
  },
  {
    id: "j2",
    client: "Winter Garden Self Storage",
    type: "Repair — spring + balance",
    date: "2026-04-10",
    window: "1:00 PM – 4:00 PM",
    tech: "Team B",
    status: "in_progress",
    address: "16000 W Colonial Dr, Winter Garden",
  },
  {
    id: "j3",
    client: "Dr. Phillips Plaza (Unit 12)",
    type: "Service — safety inspection",
    date: "2026-04-08",
    window: "9:00 AM – 11:00 AM",
    tech: "Team A",
    status: "completed",
    address: "7600 Dr Phillips Blvd, Orlando",
  },
];

export const mockInventory: MockInventoryItem[] = [
  { sku: "SP-218-7x", name: "Torsion spring pair 218 × 1.75″ × 7′", qty: 14, reorderAt: 6, location: "Van A" },
  { sku: "LM-87504", name: "LiftMaster 87504-267 belt Wi-Fi", qty: 5, reorderAt: 2, location: "Warehouse" },
  { sku: "RL-2in-nylon", name: "Roller 2″ nylon sealed (10-pack)", qty: 38, reorderAt: 12, location: "Warehouse" },
  { sku: "CAB-3/32", name: "Cable assembly 3/32″ (8′ door)", qty: 22, reorderAt: 8, location: "Van B" },
  { sku: "WEATHER-16", name: "U-bottom weather seal 16′", qty: 9, reorderAt: 4, location: "Warehouse" },
];

export const mockDashboard = {
  revenueMtd: 42890,
  openQuotes: 6,
  overdueInvoices: 2,
  jobsThisWeek: 14,
  recentActivity: [
    { id: "a1", text: "Quote CG-Q-2026-0142 sent to Martínez Residential", time: "2026-04-04 09:12" },
    { id: "a2", text: "Invoice CG-INV-2026-0087 marked pending", time: "2026-04-04 08:40" },
    { id: "a3", text: "Job #j2 started — Winter Garden Self Storage", time: "2026-04-03 13:05" },
    { id: "a4", text: "New client: Dr. Phillips Plaza (Unit 12)", time: "2026-04-03 10:22" },
  ],
};

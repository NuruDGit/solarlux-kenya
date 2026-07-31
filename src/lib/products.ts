import { Sun, Battery, Zap, Thermometer, Waves, Package, Lightbulb, Wrench } from "lucide-react";

export interface Product {
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  image: string;
  badge: string | null;
  description: string;
  // Payload's serialized Lexical document, rendered by the product detail page.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  lexicalDescription?: any;
  brand?: string;
  gallery?: Array<{ image: string; caption?: string }>;
  applications?: string[];
  datasheetUrl?: string;
  priceLabel?: string;
  specs: { label: string; value: string }[];
  features: string[];
  warranty: string;
  inStock: boolean;
  priceFrom?: number;
  priceCurrency?: string;
  updatedAt?: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: string;
    canonicalUrl?: string;
  };
}

export interface ProductCategory {
  name: string;
  slug: string;
  description: string;
  icon: typeof Sun;
  image: string;
  productCount: number;
}

export const CATEGORIES: ProductCategory[] = [
  {
    name: "Solar Panels",
    slug: "solar-panels",
    description:
      "High-efficiency monocrystalline and bifacial panels from top-tier manufacturers.",
    icon: Sun,
    image: "/products/solar_20panels.png",
    productCount: 5,
  },
  {
    name: "Batteries & Energy Storage",
    slug: "batteries",
    description:
      "Lithium LiFePO4 and GEL batteries for reliable energy storage day and night.",
    icon: Battery,
    image: "/products/solar_20batteries.jpg",
    productCount: 7,
  },
  {
    name: "Solar Inverters",
    slug: "inverters",
    description:
      "Hybrid and off-grid inverters to convert and manage your solar power efficiently.",
    icon: Zap,
    image: "/products/inverters.jpg",
    productCount: 4,
  },
  {
    name: "Solar Water Heaters",
    slug: "water-heaters",
    description:
      "Non-pressurised and pressurised solar water heating systems for homes, hotels, and businesses.",
    icon: Thermometer,
    image: "/products/water_20heater1.webp",
    productCount: 6,
  },
  {
    name: "Solar Water Pumps",
    slug: "solar-pumps",
    description:
      "Submersible and surface solar-powered pumps for agricultural, domestic, and commercial water supply.",
    icon: Waves,
    image: "/products/water_20pumps.png",
    productCount: 3,
  },
  {
    name: "Full System Kits",
    slug: "full-kits",
    description:
      "Complete solar kits — panels, batteries, inverter, and accessories — ready to install.",
    icon: Package,
    image: "/products/Full_20Kits.jpg",
    productCount: 4,
  },
  {
    name: "Solar Lighting",
    slug: "solar-lighting",
    description:
      "Solar-powered outdoor lights, street lights, and security floodlights for homes and businesses.",
    icon: Lightbulb,
    image: "/products/solar_20panels.png",
    productCount: 3,
  },
  {
    name: "Solar Accessories",
    slug: "solar-accessories",
    description:
      "MPPT charge controllers, cables, connectors, and mounting accessories for solar installations.",
    icon: Wrench,
    image: "/products/inverters.jpg",
    productCount: 2,
  },
];

export const PRODUCTS: Product[] = [
  // ── Solar Panels ──
  {
    name: "JA Solar 600W Mono Panel",
    slug: "ja-solar-600w",
    category: "Solar Panels",
    categorySlug: "solar-panels",
    image: "/products/JA_SOLAR_600W.png",
    badge: "Best Seller",
    description:
      "The JA Solar 600W monocrystalline panel delivers industry-leading efficiency with half-cut cell technology. Ideal for residential and commercial installations across Kenya.",
    specs: [
      { label: "Wattage", value: "600W" },
      { label: "Type", value: "Monocrystalline" },
      { label: "Efficiency", value: "21.5%" },
      { label: "Dimensions", value: "2278 × 1134 × 35 mm" },
      { label: "Weight", value: "32 kg" },
      { label: "Warranty", value: "25 years" },
    ],
    features: [
      "Half-cut cell technology for better shade tolerance",
      "Anti-reflective coating for maximum light absorption",
      "IP68 rated junction box",
      "25-year linear power warranty",
    ],
    warranty: "25 years",
    inStock: true,
    priceFrom: 15000,
    priceCurrency: "KES",
  },
  {
    name: "Longi Weran 595W Solar Panel",
    slug: "longi-595w",
    category: "Solar Panels",
    categorySlug: "solar-panels",
    image: "/products/Longi_WERAN_595W.jpg",
    badge: null,
    description:
      "LONGi Hi-MO 6 series featuring HPBC cell technology. Higher energy yield with excellent low-light performance for Kenya's varied climate.",
    specs: [
      { label: "Wattage", value: "595W" },
      { label: "Type", value: "Monocrystalline HPBC" },
      { label: "Efficiency", value: "22.3%" },
      { label: "Dimensions", value: "2278 × 1134 × 35 mm" },
      { label: "Weight", value: "31.8 kg" },
      { label: "Warranty", value: "25 years" },
    ],
    features: [
      "HPBC cell technology for superior efficiency",
      "Low degradation rate — 0.4% per year",
      "Excellent performance in high temperatures",
      "25-year product warranty",
    ],
    warranty: "25 years",
    inStock: true,
    priceFrom: 14500,
    priceCurrency: "KES",
  },
  {
    name: "Jinko 575W Solar Panel",
    slug: "jinko-575w",
    category: "Solar Panels",
    categorySlug: "solar-panels",
    image: "/products/2Jinko_iVboAkX.jpg",
    badge: null,
    description:
      "Jinko Tiger Neo N-type panel with TOPCon technology. Exceptional bifacial gain and low temperature coefficient make it perfect for East Africa.",
    specs: [
      { label: "Wattage", value: "575W" },
      { label: "Type", value: "N-type TOPCon" },
      { label: "Efficiency", value: "22.53%" },
      { label: "Dimensions", value: "2278 × 1134 × 30 mm" },
      { label: "Weight", value: "30.2 kg" },
      { label: "Warranty", value: "25 years" },
    ],
    features: [
      "N-type TOPCon technology for high bifacial gain",
      "Low LID and LETID degradation",
      "Temperature coefficient: -0.30%/°C",
      "30-year performance warranty",
    ],
    warranty: "25 years",
    inStock: true,
    priceFrom: 13000,
    priceCurrency: "KES",
  },
  {
    name: "Longi Solar 420W Panel",
    slug: "longi-420w",
    category: "Solar Panels",
    categorySlug: "solar-panels",
    image: "/products/solar_20panels.png",
    badge: null,
    description:
      "The Longi Solar 420W delivers premium performance in a compact form factor ideal for residential rooftops with limited space.",
    specs: [
      { label: "Wattage", value: "420W" },
      { label: "Type", value: "Monocrystalline" },
      { label: "Efficiency", value: "21.3%" },
      { label: "Dimensions", value: "1722 × 1134 × 30 mm" },
      { label: "Weight", value: "21 kg" },
      { label: "Warranty", value: "25 years" },
    ],
    features: [
      "Compact size for residential roofs",
      "Half-cut cell technology",
      "Excellent low-light performance",
      "25-year linear power warranty",
    ],
    warranty: "25 years",
    inStock: true,
    priceFrom: 10500,
    priceCurrency: "KES",
  },
  {
    name: "JA Solar 590W Panel",
    slug: "ja-solar-590w",
    category: "Solar Panels",
    categorySlug: "solar-panels",
    image: "/products/JA_SOLAR_600W.png",
    badge: null,
    description:
      "JA Solar 590W Monocrystalline Solar Panel — power your home or business with cutting-edge solar technology and excellent value per watt.",
    specs: [
      { label: "Wattage", value: "590W" },
      { label: "Type", value: "Monocrystalline" },
      { label: "Efficiency", value: "21.4%" },
      { label: "Dimensions", value: "2278 × 1134 × 35 mm" },
      { label: "Weight", value: "31.5 kg" },
      { label: "Warranty", value: "25 years" },
    ],
    features: [
      "Half-cut cell technology for better shade tolerance",
      "Anti-reflective coating for maximum light absorption",
      "IP68 rated junction box",
      "25-year linear power warranty",
    ],
    warranty: "25 years",
    inStock: true,
    priceFrom: 14000,
    priceCurrency: "KES",
  },

  // ── Batteries & Energy Storage ──
  {
    name: "Deye 5kWh Lithium Battery",
    slug: "deye-5kwh",
    category: "Batteries & Energy Storage",
    categorySlug: "batteries",
    image: "/products/5kWh_Deye_Lithium_Ion_Battery.png",
    badge: null,
    description:
      "Wall-mounted lithium iron phosphate (LiFePO4) battery with 6000+ cycle life. Stackable design allows you to grow your storage as needed.",
    specs: [
      { label: "Capacity", value: "5.12 kWh" },
      { label: "Type", value: "LiFePO4" },
      { label: "Voltage", value: "51.2V" },
      { label: "Cycle Life", value: "6000+ cycles" },
      { label: "Weight", value: "45 kg" },
      { label: "Warranty", value: "10 years" },
    ],
    features: [
      "LiFePO4 chemistry — safe and long-lasting",
      "Wall-mounted or floor-standing installation",
      "Stackable up to 4 units (20 kWh)",
      "Built-in BMS with temperature protection",
    ],
    warranty: "10 years",
    inStock: true,
    priceFrom: 85000,
    priceCurrency: "KES",
  },
  {
    name: "SRNE 5kWh Lithium Battery",
    slug: "srne-5kwh",
    category: "Batteries & Energy Storage",
    categorySlug: "batteries",
    image: "/products/5KWH_SRNE_BATTERY.png",
    badge: null,
    description:
      "Compact wall-mounted LiFePO4 battery with integrated BMS. Compatible with most hybrid inverters on the market.",
    specs: [
      { label: "Capacity", value: "5.12 kWh" },
      { label: "Type", value: "LiFePO4" },
      { label: "Voltage", value: "51.2V" },
      { label: "Cycle Life", value: "6000+ cycles" },
      { label: "Weight", value: "42 kg" },
      { label: "Warranty", value: "10 years" },
    ],
    features: [
      "Compact wall-mount design",
      "Compatible with most hybrid inverters",
      "Built-in battery management system",
      "10-year product warranty",
    ],
    warranty: "10 years",
    inStock: true,
    priceFrom: 80000,
    priceCurrency: "KES",
  },
  {
    name: "Renergy iPower 10.24kWh Battery",
    slug: "renergy-10kwh",
    category: "Batteries & Energy Storage",
    categorySlug: "batteries",
    image: "/products/10.24kwh-200ah-renergy.jpg",
    badge: null,
    description:
      "High-capacity 10.24kWh lithium battery for homes and businesses that need serious storage. Ideal for full off-grid setups.",
    specs: [
      { label: "Capacity", value: "10.24 kWh" },
      { label: "Type", value: "LiFePO4" },
      { label: "Voltage", value: "51.2V / 200Ah" },
      { label: "Cycle Life", value: "6000+ cycles" },
      { label: "Weight", value: "90 kg" },
      { label: "Warranty", value: "10 years" },
    ],
    features: [
      "10.24 kWh — power a whole home overnight",
      "200Ah high discharge capacity",
      "Advanced BMS with Bluetooth monitoring",
      "Compatible with Deye, SRNE, and Must inverters",
    ],
    warranty: "10 years",
    inStock: true,
    priceFrom: 155000,
    priceCurrency: "KES",
  },
  {
    name: "Renergy 5.12kWh Lithium Battery",
    slug: "renergy-5kwh",
    category: "Batteries & Energy Storage",
    categorySlug: "batteries",
    image: "/products/10.24kwh-200ah-renergy.jpg",
    badge: null,
    description:
      "The Renergy 5.12kWh Lithium Battery is a compact, high-performance energy storage solution for residential solar systems.",
    specs: [
      { label: "Capacity", value: "5.12 kWh" },
      { label: "Type", value: "LiFePO4" },
      { label: "Voltage", value: "51.2V / 100Ah" },
      { label: "Cycle Life", value: "6000+ cycles" },
      { label: "Weight", value: "45 kg" },
      { label: "Warranty", value: "10 years" },
    ],
    features: [
      "LiFePO4 chemistry — safe and long-lasting",
      "Compact wall-mounted design",
      "Built-in BMS with temperature protection",
      "Compatible with most hybrid inverters",
    ],
    warranty: "10 years",
    inStock: true,
    priceFrom: 78000,
    priceCurrency: "KES",
  },
  {
    name: "12V 100Ah GEL Battery",
    slug: "gel-100ah",
    category: "Batteries & Energy Storage",
    categorySlug: "batteries",
    image: "/products/solar_20batteries.jpg",
    badge: null,
    description:
      "Sealed maintenance-free GEL battery for small to medium solar systems. A proven, affordable option for residential backup power.",
    specs: [
      { label: "Capacity", value: "100Ah" },
      { label: "Voltage", value: "12V" },
      { label: "Type", value: "GEL (VRLA)" },
      { label: "Cycle Life", value: "500+ cycles" },
      { label: "Weight", value: "28 kg" },
      { label: "Warranty", value: "1 year" },
    ],
    features: [
      "Sealed, maintenance-free design",
      "Deep cycle capability",
      "Suitable for 12V and 24V solar systems",
      "Resistant to vibration and shock",
    ],
    warranty: "1 year",
    inStock: true,
    priceFrom: 18000,
    priceCurrency: "KES",
  },
  {
    name: "12V 150Ah GEL Battery",
    slug: "gel-150ah",
    category: "Batteries & Energy Storage",
    categorySlug: "batteries",
    image: "/products/solar_20batteries.jpg",
    badge: null,
    description:
      "Mid-range sealed GEL battery providing reliable backup power for homes and small businesses.",
    specs: [
      { label: "Capacity", value: "150Ah" },
      { label: "Voltage", value: "12V" },
      { label: "Type", value: "GEL (VRLA)" },
      { label: "Cycle Life", value: "500+ cycles" },
      { label: "Weight", value: "42 kg" },
      { label: "Warranty", value: "1 year" },
    ],
    features: [
      "Sealed, maintenance-free design",
      "Deep cycle capable",
      "Suitable for 12V, 24V, and 48V systems",
      "Spill-proof, safe for indoor use",
    ],
    warranty: "1 year",
    inStock: true,
    priceFrom: 27000,
    priceCurrency: "KES",
  },
  {
    name: "12V 200Ah GEL Battery",
    slug: "gel-200ah",
    category: "Batteries & Energy Storage",
    categorySlug: "batteries",
    image: "/products/solar_20batteries.jpg",
    badge: null,
    description:
      "High-capacity GEL battery for larger solar systems. Connect four in series for a 48V/200Ah bank compatible with hybrid inverters.",
    specs: [
      { label: "Capacity", value: "200Ah" },
      { label: "Voltage", value: "12V" },
      { label: "Type", value: "GEL (VRLA)" },
      { label: "Cycle Life", value: "500+ cycles" },
      { label: "Weight", value: "56 kg" },
      { label: "Warranty", value: "1 year" },
    ],
    features: [
      "Sealed, maintenance-free GEL technology",
      "Connect 4× in series for 48V hybrid systems",
      "Excellent deep-cycle performance",
      "Compatible with most solar charge controllers",
    ],
    warranty: "1 year",
    inStock: true,
    priceFrom: 35000,
    priceCurrency: "KES",
  },

  // ── Solar Inverters ──
  {
    name: "MUST 7.2KW Solar Inverter",
    slug: "must-7-2kw",
    category: "Solar Inverters",
    categorySlug: "inverters",
    image: "/products/8Must.png",
    badge: null,
    description:
      "The MUST 7.2KW Solar Inverter is a high-capacity hybrid inverter built for powerful performance and reliable energy management in large homes and businesses.",
    specs: [
      { label: "Power Output", value: "7.2kW" },
      { label: "Type", value: "Hybrid (On/Off Grid)" },
      { label: "MPPT Trackers", value: "2" },
      { label: "Battery Voltage", value: "48V" },
      { label: "Max PV Input", value: "10kW" },
      { label: "Warranty", value: "5 years" },
    ],
    features: [
      "Pure sine wave output",
      "Dual MPPT solar charge controller",
      "Built-in Wi-Fi monitoring",
      "Parallel connection support up to 9 units",
    ],
    warranty: "5 years",
    inStock: true,
    priceFrom: 95000,
    priceCurrency: "KES",
  },
  {
    name: "MUST 5KW Solar Inverter",
    slug: "must-5kw",
    category: "Solar Inverters",
    categorySlug: "inverters",
    image: "/products/10Must.jpg",
    badge: null,
    description:
      "Pure sinewave MPPT hybrid inverter from MUST. Reliable performance for standard Kenyan homes at a great price.",
    specs: [
      { label: "Power Output", value: "5kW" },
      { label: "Type", value: "Hybrid" },
      { label: "MPPT Trackers", value: "1" },
      { label: "Battery Voltage", value: "48V" },
      { label: "Max PV Input", value: "6kW" },
      { label: "Warranty", value: "5 years" },
    ],
    features: [
      "Pure sine wave output",
      "MPPT solar charge controller",
      "LCD display with data logging",
      "Multiple protection features",
    ],
    warranty: "5 years",
    inStock: true,
    priceFrom: 72000,
    priceCurrency: "KES",
  },
  {
    name: "MUST 3KW Solar Inverter",
    slug: "must-3kw",
    category: "Solar Inverters",
    categorySlug: "inverters",
    image: "/products/inverters.jpg",
    badge: null,
    description:
      "The MUST 3KW Solar Inverter is a reliable and efficient hybrid inverter designed for smaller households and entry-level solar setups.",
    specs: [
      { label: "Power Output", value: "3kW" },
      { label: "Type", value: "Hybrid" },
      { label: "MPPT Trackers", value: "1" },
      { label: "Battery Voltage", value: "24V/48V" },
      { label: "Max PV Input", value: "4kW" },
      { label: "Warranty", value: "5 years" },
    ],
    features: [
      "Pure sine wave output",
      "Compact design for small spaces",
      "MPPT charge controller built-in",
      "Affordable entry-level hybrid inverter",
    ],
    warranty: "5 years",
    inStock: true,
    priceFrom: 55000,
    priceCurrency: "KES",
  },
  {
    name: "SRNE 3KW Solar Inverter",
    slug: "srne-3kw",
    category: "Solar Inverters",
    categorySlug: "inverters",
    image: "/products/inverters.jpg",
    badge: null,
    description:
      "The SRNE 3KW Solar Inverter combines reliability, smart energy management, and efficiency for homes and small businesses.",
    specs: [
      { label: "Power Output", value: "3kW" },
      { label: "Type", value: "Hybrid" },
      { label: "MPPT Trackers", value: "1" },
      { label: "Battery Voltage", value: "48V" },
      { label: "Max PV Input", value: "4.5kW" },
      { label: "Warranty", value: "5 years" },
    ],
    features: [
      "Pure sine wave output",
      "High-efficiency MPPT charging",
      "Touch screen LCD display",
      "Wi-Fi monitoring support",
    ],
    warranty: "5 years",
    inStock: true,
    priceFrom: 58000,
    priceCurrency: "KES",
  },

  // ── Solar Water Heaters ──
  {
    name: "150L Non-Pressurised Solar Water Heater",
    slug: "swh-150l-non-pressurised",
    category: "Solar Water Heaters",
    categorySlug: "water-heaters",
    image: "/products/water_20heater1.webp",
    badge: null,
    description:
      "Entry-level solar water heater ideal for a family of 3–4. Gravity-fed non-pressurised system — simple, reliable, and maintenance-free.",
    specs: [
      { label: "Capacity", value: "150 Litres" },
      { label: "Type", value: "Non-Pressurised" },
      { label: "Collector", value: "Evacuated Tube" },
      { label: "Tubes", value: "15 tubes" },
      { label: "Tank Material", value: "Stainless Steel (inner)" },
      { label: "Warranty", value: "5 years" },
    ],
    features: [
      "Gravity-fed — no pump required",
      "Stainless steel inner tank for hygiene",
      "Evacuated tube collectors for efficient heat absorption",
      "Suitable for low-pressure supply",
    ],
    warranty: "5 years",
    inStock: true,
    priceFrom: 35000,
    priceCurrency: "KES",
  },
  {
    name: "200L Non-Pressurised Solar Water Heater",
    slug: "swh-200l-non-pressurised",
    category: "Solar Water Heaters",
    categorySlug: "water-heaters",
    image: "/products/water_20heater1.webp",
    badge: "Most Popular",
    description:
      "The most popular solar water heater size for Kenyan homes. Comfortably serves a family of 4–6 with hot water for showers, kitchen, and laundry.",
    specs: [
      { label: "Capacity", value: "200 Litres" },
      { label: "Type", value: "Non-Pressurised" },
      { label: "Collector", value: "Evacuated Tube" },
      { label: "Tubes", value: "20 tubes" },
      { label: "Tank Material", value: "Stainless Steel (inner)" },
      { label: "Warranty", value: "5 years" },
    ],
    features: [
      "Serves a family of 4–6 comfortably",
      "Gravity-fed — no pump required",
      "Stainless steel inner tank for hygiene",
      "Ideal for most Kenyan household roofs",
    ],
    warranty: "5 years",
    inStock: true,
    priceFrom: 45000,
    priceCurrency: "KES",
  },
  {
    name: "300L Non-Pressurised Solar Water Heater",
    slug: "swh-300l-non-pressurised",
    category: "Solar Water Heaters",
    categorySlug: "water-heaters",
    image: "/products/water_20heater1.webp",
    badge: null,
    description:
      "Large-capacity solar water heater for larger families and small commercial use such as guesthouses and salons.",
    specs: [
      { label: "Capacity", value: "300 Litres" },
      { label: "Type", value: "Non-Pressurised" },
      { label: "Collector", value: "Evacuated Tube" },
      { label: "Tubes", value: "24 tubes" },
      { label: "Tank Material", value: "Stainless Steel (inner)" },
      { label: "Warranty", value: "5 years" },
    ],
    features: [
      "Ideal for families of 6–8 or small commercial use",
      "Gravity-fed system",
      "High-efficiency evacuated tube collector",
      "Durable stainless steel inner tank",
    ],
    warranty: "5 years",
    inStock: true,
    priceFrom: 65000,
    priceCurrency: "KES",
  },
  {
    name: "150L Pressurised Solar Water Heater",
    slug: "swh-150l-pressurised",
    category: "Solar Water Heaters",
    categorySlug: "water-heaters",
    image: "/products/water_20heater1.webp",
    badge: null,
    description:
      "Compact pressurised solar water heater for homes connected to mains or borehole water supply. Delivers hot water at full mains pressure.",
    specs: [
      { label: "Capacity", value: "150 Litres" },
      { label: "Type", value: "Pressurised" },
      { label: "Collector", value: "Flat Plate" },
      { label: "Max Pressure", value: "8 bar" },
      { label: "Tank Material", value: "Stainless Steel" },
      { label: "Warranty", value: "5 years" },
    ],
    features: [
      "Works with mains or pump water pressure",
      "Suitable for multi-storey buildings",
      "Flat plate collector for high efficiency",
      "Anti-freeze protection for highland areas",
    ],
    warranty: "5 years",
    inStock: true,
    priceFrom: 55000,
    priceCurrency: "KES",
  },
  {
    name: "200L Pressurised Solar Water Heater",
    slug: "swh-200l-pressurised",
    category: "Solar Water Heaters",
    categorySlug: "water-heaters",
    image: "/products/water_20heater1.webp",
    badge: null,
    description:
      "Mid-range pressurised system for family homes and small lodges. Full mains-pressure hot water with electric backup for cloudy days.",
    specs: [
      { label: "Capacity", value: "200 Litres" },
      { label: "Type", value: "Pressurised" },
      { label: "Collector", value: "Flat Plate" },
      { label: "Max Pressure", value: "8 bar" },
      { label: "Tank Material", value: "Stainless Steel" },
      { label: "Warranty", value: "5 years" },
    ],
    features: [
      "Full mains-pressure hot water output",
      "Suitable for homes, lodges, and guesthouses",
      "High-efficiency flat plate collector",
      "Electric backup element for cloudy periods",
    ],
    warranty: "5 years",
    inStock: true,
    priceFrom: 75000,
    priceCurrency: "KES",
  },
  {
    name: "300L Pressurised Solar Water Heater",
    slug: "swh-300l-pressurised",
    category: "Solar Water Heaters",
    categorySlug: "water-heaters",
    image: "/products/water_20heater1.webp",
    badge: null,
    description:
      "Commercial-grade pressurised solar water heater for hotels, lodges, and businesses with high hot water demand.",
    specs: [
      { label: "Capacity", value: "300 Litres" },
      { label: "Type", value: "Pressurised" },
      { label: "Collector", value: "Flat Plate" },
      { label: "Max Pressure", value: "8 bar" },
      { label: "Tank Material", value: "Stainless Steel" },
      { label: "Warranty", value: "5 years" },
    ],
    features: [
      "Commercial-grade capacity",
      "Full mains-pressure output",
      "Dual flat plate collectors for maximum output",
      "Ideal for hotels, lodges, and multi-family buildings",
    ],
    warranty: "5 years",
    inStock: true,
    priceFrom: 95000,
    priceCurrency: "KES",
  },

  // ── Solar Water Pumps ──
  {
    name: "0.5HP Submersible Solar Pump",
    slug: "solar-pump-05hp",
    category: "Solar Water Pumps",
    categorySlug: "solar-pumps",
    image: "/products/water_20pumps.png",
    badge: null,
    description:
      "Entry-level submersible solar pump ideal for shallow wells and boreholes. Perfect for domestic water supply without grid power.",
    specs: [
      { label: "Power", value: "0.5 HP (375W)" },
      { label: "Type", value: "Submersible" },
      { label: "Max Head", value: "60m" },
      { label: "Flow Rate", value: "up to 3 m³/hour" },
      { label: "Voltage", value: "24V / 48V DC" },
      { label: "Warranty", value: "2 years" },
    ],
    features: [
      "MPPT controller included",
      "Suitable for boreholes and wells up to 60m",
      "Runs directly from solar panels — no battery needed",
      "Stainless steel pump body for durability",
    ],
    warranty: "2 years",
    inStock: true,
    priceFrom: 28000,
    priceCurrency: "KES",
  },
  {
    name: "1HP Submersible Solar Pump",
    slug: "solar-pump-1hp",
    category: "Solar Water Pumps",
    categorySlug: "solar-pumps",
    image: "/products/water_20pumps.png",
    badge: "Best Seller",
    description:
      "The most popular solar pump for Kenyan farms and homesteads. Reliable borehole pumping for domestic and light agricultural use.",
    specs: [
      { label: "Power", value: "1 HP (750W)" },
      { label: "Type", value: "Submersible" },
      { label: "Max Head", value: "100m" },
      { label: "Flow Rate", value: "up to 5 m³/hour" },
      { label: "Voltage", value: "48V / 72V DC" },
      { label: "Warranty", value: "2 years" },
    ],
    features: [
      "Suitable for farms, homesteads, and institutions",
      "MPPT solar pump controller included",
      "Powered by 6–8 solar panels",
      "Float switch and dry-run protection",
    ],
    warranty: "2 years",
    inStock: true,
    priceFrom: 48000,
    priceCurrency: "KES",
  },
  {
    name: "2HP Submersible Solar Pump",
    slug: "solar-pump-2hp",
    category: "Solar Water Pumps",
    categorySlug: "solar-pumps",
    image: "/products/water_20pumps.png",
    badge: null,
    description:
      "High-capacity solar pump for deep boreholes, large farms, and community water projects across Kenya.",
    specs: [
      { label: "Power", value: "2 HP (1500W)" },
      { label: "Type", value: "Submersible" },
      { label: "Max Head", value: "150m" },
      { label: "Flow Rate", value: "up to 8 m³/hour" },
      { label: "Voltage", value: "72V / 96V DC" },
      { label: "Warranty", value: "2 years" },
    ],
    features: [
      "High volume for farms and community projects",
      "MPPT controller with LCD display included",
      "Compatible with 10–14 solar panels",
      "Stainless steel body and impellers",
    ],
    warranty: "2 years",
    inStock: true,
    priceFrom: 78000,
    priceCurrency: "KES",
  },

  // ── Full System Kits ──
  {
    name: "1kWp Starter Home Solar Kit",
    slug: "kit-1kwp",
    category: "Full System Kits",
    categorySlug: "full-kits",
    image: "/products/Full_20Kits.jpg",
    badge: null,
    description:
      "A complete starter kit for a small home. Powers lights, phone charging, a fan, and a small TV. Everything included — ready to install.",
    specs: [
      { label: "System Size", value: "1 kWp" },
      { label: "Panels", value: "2× 500W" },
      { label: "Battery", value: "5.12 kWh LiFePO4" },
      { label: "Inverter", value: "1kW Pure Sine Wave" },
      { label: "Daily Output", value: "~5 kWh/day" },
      { label: "Warranty", value: "5 years" },
    ],
    features: [
      "Complete kit — panels, battery, inverter, and cables",
      "Powers lights, fans, small TV, and phone charging",
      "LiFePO4 battery for longer lifespan",
      "Installation available across all 47 counties",
    ],
    warranty: "5 years",
    inStock: true,
    priceFrom: 125000,
    priceCurrency: "KES",
  },
  {
    name: "2kWp Standard Home Solar Kit",
    slug: "kit-2kwp",
    category: "Full System Kits",
    categorySlug: "full-kits",
    image: "/products/Full_20Kits.jpg",
    badge: "Most Popular",
    description:
      "The most popular kit for Kenyan homes. Covers all standard household loads — fridge, TV, lights, fans, and phone charging.",
    specs: [
      { label: "System Size", value: "2 kWp" },
      { label: "Panels", value: "4× 500W" },
      { label: "Battery", value: "10.24 kWh LiFePO4" },
      { label: "Inverter", value: "3kW Hybrid" },
      { label: "Daily Output", value: "~10 kWh/day" },
      { label: "Warranty", value: "5 years" },
    ],
    features: [
      "Powers fridge, TV, lights, fans, and charging",
      "Hybrid — uses grid when available, solar first",
      "10kWh battery backup for evening and nights",
      "Expandable — add more panels or batteries later",
    ],
    warranty: "5 years",
    inStock: true,
    priceFrom: 220000,
    priceCurrency: "KES",
  },
  {
    name: "5kWp Business Solar Kit",
    slug: "kit-5kwp",
    category: "Full System Kits",
    categorySlug: "full-kits",
    image: "/products/Full_20Kits.jpg",
    badge: null,
    description:
      "Built for SMEs, offices, and larger homes. Handles air conditioning, computers, lighting, and heavy appliances.",
    specs: [
      { label: "System Size", value: "5 kWp" },
      { label: "Panels", value: "10× 500W" },
      { label: "Battery", value: "20.48 kWh LiFePO4" },
      { label: "Inverter", value: "5kW Hybrid" },
      { label: "Daily Output", value: "~25 kWh/day" },
      { label: "Warranty", value: "5 years" },
    ],
    features: [
      "Powers AC units, refrigeration, and offices",
      "Dual MPPT hybrid inverter",
      "20kWh battery storage for overnight use",
      "Suitable for retail, hospitality, and offices",
    ],
    warranty: "5 years",
    inStock: true,
    priceFrom: 480000,
    priceCurrency: "KES",
  },
  {
    name: "10kWp Commercial Solar Kit",
    slug: "kit-10kwp",
    category: "Full System Kits",
    categorySlug: "full-kits",
    image: "/products/Full_20Kits.jpg",
    badge: null,
    description:
      "Large-scale commercial kit for factories, schools, hotels, and large office buildings. Designed for maximum energy independence.",
    specs: [
      { label: "System Size", value: "10 kWp" },
      { label: "Panels", value: "20× 500W" },
      { label: "Battery", value: "40+ kWh LiFePO4" },
      { label: "Inverter", value: "10kW Hybrid" },
      { label: "Daily Output", value: "~50 kWh/day" },
      { label: "Warranty", value: "5 years" },
    ],
    features: [
      "Commercial-scale energy independence",
      "3-phase or single-phase output available",
      "Expandable modular system",
      "Full remote monitoring via Wi-Fi app",
    ],
    warranty: "5 years",
    inStock: true,
    priceFrom: 900000,
    priceCurrency: "KES",
  },

  // ── Solar Lighting ──
  {
    name: "20W LED Solar Street Light",
    slug: "solar-street-light-20w",
    category: "Solar Lighting",
    categorySlug: "solar-lighting",
    image: "/products/solar_20panels.png",
    badge: null,
    description:
      "All-in-one solar street light for roads, paths, car parks, and compounds. No wiring required — install anywhere there is sunlight.",
    specs: [
      { label: "Power", value: "20W LED" },
      { label: "Battery", value: "Built-in LiFePO4" },
      { label: "Runtime", value: "10–12 hours full brightness" },
      { label: "Control", value: "Motion sensor + timer" },
      { label: "Lumen Output", value: "2400 lm" },
      { label: "Warranty", value: "2 years" },
    ],
    features: [
      "All-in-one design — panel, battery, and light integrated",
      "Motion sensor dims to 30% when no movement",
      "IP65 weatherproof rating",
      "No wiring or electrician required",
    ],
    warranty: "2 years",
    inStock: true,
    priceFrom: 8000,
    priceCurrency: "KES",
  },
  {
    name: "50W Solar Security Floodlight",
    slug: "solar-floodlight-50w",
    category: "Solar Lighting",
    categorySlug: "solar-lighting",
    image: "/products/solar_20panels.png",
    badge: null,
    description:
      "High-power solar floodlight for security, warehouses, and large compound illumination. Separate panel and light head for flexible installation.",
    specs: [
      { label: "Power", value: "50W LED" },
      { label: "Panel", value: "Separate 40W panel" },
      { label: "Battery", value: "10Ah LiFePO4" },
      { label: "Runtime", value: "8–10 hours" },
      { label: "Lumen Output", value: "6000 lm" },
      { label: "Warranty", value: "2 years" },
    ],
    features: [
      "Separate solar panel for optimal positioning",
      "Motion sensor with adjustable sensitivity",
      "IP66 weatherproof rated",
      "Suitable for security and warehouse lighting",
    ],
    warranty: "2 years",
    inStock: true,
    priceFrom: 12500,
    priceCurrency: "KES",
  },
  {
    name: "10W Solar Garden & Security Light",
    slug: "solar-garden-light-10w",
    category: "Solar Lighting",
    categorySlug: "solar-lighting",
    image: "/products/solar_20panels.png",
    badge: null,
    description:
      "Compact solar security light for home gates, paths, and gardens. Motion-activated with long battery life.",
    specs: [
      { label: "Power", value: "10W LED" },
      { label: "Battery", value: "Built-in LiFePO4" },
      { label: "Runtime", value: "10+ hours (dim mode)" },
      { label: "Control", value: "PIR motion sensor" },
      { label: "Lumen Output", value: "1200 lm" },
      { label: "Warranty", value: "2 years" },
    ],
    features: [
      "Instant bright light on motion detection",
      "Dims automatically when no movement",
      "Easy wall or pole mount installation",
      "Weatherproof and dustproof",
    ],
    warranty: "2 years",
    inStock: true,
    priceFrom: 5500,
    priceCurrency: "KES",
  },

  // ── Solar Accessories ──
  {
    name: "80A MPPT Solar Charge Controller",
    slug: "mppt-80a",
    category: "Solar Accessories",
    categorySlug: "solar-accessories",
    image: "/products/inverters.jpg",
    badge: null,
    description:
      "High-performance 80A MPPT charge controller with LCD display. Compatible with 12V, 24V, and 48V battery banks and all battery types.",
    specs: [
      { label: "Current", value: "80A" },
      { label: "Voltage", value: "12V / 24V / 48V auto" },
      { label: "Max PV Input", value: "150V OCV" },
      { label: "Efficiency", value: "98%" },
      { label: "Display", value: "LCD with data logging" },
      { label: "Warranty", value: "2 years" },
    ],
    features: [
      "Compatible with GEL, AGM, Lithium, and Flooded batteries",
      "LCD display with daily and total energy stats",
      "Multiple load control modes",
      "Over-voltage, reverse polarity, and short circuit protection",
    ],
    warranty: "2 years",
    inStock: true,
    priceFrom: 12000,
    priceCurrency: "KES",
  },
  {
    name: "60A MPPT Solar Charge Controller",
    slug: "mppt-60a",
    category: "Solar Accessories",
    categorySlug: "solar-accessories",
    image: "/products/inverters.jpg",
    badge: null,
    description:
      "Mid-range 60A MPPT controller ideal for small to medium off-grid solar systems. Maximises energy harvest from your solar array.",
    specs: [
      { label: "Current", value: "60A" },
      { label: "Voltage", value: "12V / 24V / 48V auto" },
      { label: "Max PV Input", value: "150V OCV" },
      { label: "Efficiency", value: "97%" },
      { label: "Display", value: "LCD" },
      { label: "Warranty", value: "2 years" },
    ],
    features: [
      "MPPT algorithm for maximum energy capture",
      "Auto battery voltage detection",
      "Temperature compensation",
      "Compact and easy to install",
    ],
    warranty: "2 years",
    inStock: true,
    priceFrom: 9500,
    priceCurrency: "KES",
  },
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return PRODUCTS.filter((p) => p.categorySlug === categorySlug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

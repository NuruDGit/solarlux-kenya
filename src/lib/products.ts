import { Sun, Battery, Zap } from "lucide-react";

export interface Product {
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  image: string;
  badge: string | null;
  description: string;
  specs: { label: string; value: string }[];
  features: string[];
  warranty: string;
  inStock: boolean;
  priceFrom?: number;
  priceCurrency?: string;
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
      "Lithium-ion and lead-acid batteries for reliable energy storage day and night.",
    icon: Battery,
    image: "/products/solar_20batteries.jpg",
    productCount: 4,
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
    priceFrom: 38000,
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
    priceFrom: 36000,
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
      { label: "Wattage", value: "580W" },
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
    priceFrom: 34000,
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
      "The Longi Solar 420W Solar Panel delivers premium performance, durability, and high efficiency in a compact form factor ideal for residential rooftops.",
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
    priceFrom: 28000,
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
      "JA Solar 590W Monocrystalline Solar Panel. Power your home or business with cutting-edge solar technology and excellent value.",
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
    priceFrom: 36000,
    priceCurrency: "KES",
  },

  // ── Batteries ──
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
      "The Renergy 5.12kWh Lithium Battery is a compact, high-performance energy storage solution designed for residential solar systems.",
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

  // ── Inverters ──
  {
    name: "MUST 7.2KW Solar Inverter",
    slug: "must-7-2kw",
    category: "Solar Inverters",
    categorySlug: "inverters",
    image: "/products/inverters.jpg",
    badge: null,
    description:
      "The MUST 7.2KW Solar Inverter is a high-capacity hybrid inverter built for powerful performance and reliable energy management.",
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
      "Parallel connection support",
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
    image: "/products/inverters.jpg",
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
      "The MUST 3KW Solar Inverter is a reliable and efficient hybrid inverter designed to provide affordable solar power for smaller households.",
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
      "The SRNE 3KW Solar Inverter is a high-performance hybrid inverter that combines reliability, smart energy management, and efficiency.",
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

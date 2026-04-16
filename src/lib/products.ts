import {
  Sun,
  Battery,
  Zap,
  Lightbulb,
  Droplets,
  Wind,
  Settings,
  Package,
} from "lucide-react";

export interface Product {
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  price: string;
  priceNumeric: number;
  image: string;
  badge: string | null;
  description: string;
  specs: { label: string; value: string }[];
  features: string[];
  warranty: string;
  inStock: boolean;
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
  {
    name: "Solar Lighting",
    slug: "lighting",
    description:
      "Solar-powered street lights, flood lights, and garden lights for any outdoor space.",
    icon: Lightbulb,
    image: "/products/solar_20panels.png",
    productCount: 3,
  },
  {
    name: "Solar Water Heaters",
    slug: "water-heaters",
    description:
      "Evacuated tube and flat plate solar water heaters — hot water with zero electricity cost.",
    icon: Droplets,
    image: "/products/water_20heater1.webp",
    productCount: 3,
  },
  {
    name: "Solar Water Pumps",
    slug: "water-pumps",
    description:
      "Submersible and surface pumps powered entirely by solar — ideal for farms and boreholes.",
    icon: Wind,
    image: "/products/water_20pumps.png",
    productCount: 3,
  },
  {
    name: "Solar Accessories",
    slug: "accessories",
    description:
      "Mounting structures, cables, charge controllers, and everything you need to complete your installation.",
    icon: Settings,
    image: "/products/solar_20installation.png",
    productCount: 4,
  },
  {
    name: "Full Solar Kits",
    slug: "solar-kits",
    description:
      "Complete solar systems bundled and ready to install — panels, battery, inverter, and wiring included.",
    icon: Package,
    image: "/products/Full_20Kits.jpg",
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
    price: "KES 28,000",
    priceNumeric: 28000,
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
  },
  {
    name: "Longi 595W Hi-MO 6 Panel",
    slug: "longi-595w",
    category: "Solar Panels",
    categorySlug: "solar-panels",
    price: "KES 27,500",
    priceNumeric: 27500,
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
  },
  {
    name: "Jinko Tiger Neo 580W Panel",
    slug: "jinko-580w",
    category: "Solar Panels",
    categorySlug: "solar-panels",
    price: "KES 25,000",
    priceNumeric: 25000,
    image: "/products/2Jinko_iVboAkX.jpg",
    badge: "Popular",
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
  },
  {
    name: "Canadian Solar 550W BiHiKu7",
    slug: "canadian-solar-550w",
    category: "Solar Panels",
    categorySlug: "solar-panels",
    price: "KES 23,500",
    priceNumeric: 23500,
    image: "/products/solar_20panels.png",
    badge: null,
    description:
      "Canadian Solar BiHiKu7 with split-cell technology and excellent shading tolerance. A reliable choice for both rooftop and ground-mount systems.",
    specs: [
      { label: "Wattage", value: "550W" },
      { label: "Type", value: "Monocrystalline PERC" },
      { label: "Efficiency", value: "21.4%" },
      { label: "Dimensions", value: "2256 × 1133 × 35 mm" },
      { label: "Weight", value: "28.6 kg" },
      { label: "Warranty", value: "25 years" },
    ],
    features: [
      "Split-cell design for better shading tolerance",
      "Up to 30% bifacial energy gain",
      "Salt mist and ammonia resistance",
      "25-year product and performance warranty",
    ],
    warranty: "25 years",
    inStock: true,
  },
  {
    name: "Trina Solar Vertex S+ 440W",
    slug: "trina-440w",
    category: "Solar Panels",
    categorySlug: "solar-panels",
    price: "KES 19,500",
    priceNumeric: 19500,
    image: "/products/solar_20panels.png",
    badge: null,
    description:
      "Compact high-power panel ideal for residential rooftops where space is limited. 210mm cell technology delivers more power per square meter.",
    specs: [
      { label: "Wattage", value: "440W" },
      { label: "Type", value: "Monocrystalline" },
      { label: "Efficiency", value: "22.1%" },
      { label: "Dimensions", value: "1762 × 1134 × 30 mm" },
      { label: "Weight", value: "21.8 kg" },
      { label: "Warranty", value: "25 years" },
    ],
    features: [
      "Compact form factor for residential roofs",
      "210mm cell technology",
      "Low-light performance optimized",
      "25-year linear power warranty",
    ],
    warranty: "25 years",
    inStock: true,
  },

  // ── Batteries ──
  {
    name: "Deye 5kWh Lithium Battery",
    slug: "deye-5kwh",
    category: "Batteries & Energy Storage",
    categorySlug: "batteries",
    price: "KES 85,000",
    priceNumeric: 85000,
    image: "/products/5kWh_Deye_Lithium_Ion_Battery.png",
    badge: "Popular",
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
  },
  {
    name: "SRNE 5kWh Lithium Battery",
    slug: "srne-5kwh",
    category: "Batteries & Energy Storage",
    categorySlug: "batteries",
    price: "KES 75,000",
    priceNumeric: 75000,
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
  },
  {
    name: "Renergy 10.24kWh 200Ah Battery",
    slug: "renergy-10kwh",
    category: "Batteries & Energy Storage",
    categorySlug: "batteries",
    price: "KES 155,000",
    priceNumeric: 155000,
    image: "/products/10.24kwh-200ah-renergy.jpg",
    badge: "Best Value",
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
  },
  {
    name: "Felicity 5kWh Gel Battery",
    slug: "felicity-5kwh-gel",
    category: "Batteries & Energy Storage",
    categorySlug: "batteries",
    price: "KES 45,000",
    priceNumeric: 45000,
    image: "/products/solar_20batteries.jpg",
    badge: null,
    description:
      "Deep-cycle gel battery, maintenance-free and affordable. A solid entry-level storage option for smaller solar setups.",
    specs: [
      { label: "Capacity", value: "200Ah / 5kWh" },
      { label: "Type", value: "Deep Cycle Gel" },
      { label: "Voltage", value: "12V" },
      { label: "Cycle Life", value: "1500+ cycles" },
      { label: "Weight", value: "58 kg" },
      { label: "Warranty", value: "2 years" },
    ],
    features: [
      "Maintenance-free sealed design",
      "Affordable entry-level option",
      "Deep cycle for solar applications",
      "Can be connected in series/parallel",
    ],
    warranty: "2 years",
    inStock: true,
  },

  // ── Inverters ──
  {
    name: "Must 10kW Hybrid Inverter",
    slug: "must-10kw",
    category: "Solar Inverters",
    categorySlug: "inverters",
    price: "KES 120,000",
    priceNumeric: 120000,
    image: "/products/10Must.jpg",
    badge: "Best Seller",
    description:
      "10kW hybrid inverter with dual MPPT trackers. Seamlessly switches between solar, battery, and grid power for uninterrupted supply.",
    specs: [
      { label: "Power Output", value: "10kW" },
      { label: "Type", value: "Hybrid (On/Off Grid)" },
      { label: "MPPT Trackers", value: "2" },
      { label: "Battery Voltage", value: "48V" },
      { label: "Max PV Input", value: "14kW" },
      { label: "Warranty", value: "5 years" },
    ],
    features: [
      "Dual MPPT for flexible panel configuration",
      "Seamless grid-solar-battery switching",
      "Built-in Wi-Fi monitoring",
      "Parallel connection up to 6 units (60kW)",
    ],
    warranty: "5 years",
    inStock: true,
  },
  {
    name: "Must 8kW Hybrid Inverter",
    slug: "must-8kw",
    category: "Solar Inverters",
    categorySlug: "inverters",
    price: "KES 95,000",
    priceNumeric: 95000,
    image: "/products/8Must.png",
    badge: null,
    description:
      "Versatile 8kW hybrid inverter suitable for mid-sized homes and small businesses. Reliable performance with comprehensive protection features.",
    specs: [
      { label: "Power Output", value: "8kW" },
      { label: "Type", value: "Hybrid (On/Off Grid)" },
      { label: "MPPT Trackers", value: "2" },
      { label: "Battery Voltage", value: "48V" },
      { label: "Max PV Input", value: "11kW" },
      { label: "Warranty", value: "5 years" },
    ],
    features: [
      "8kW pure sine wave output",
      "Dual MPPT solar charge controller",
      "LCD display with real-time monitoring",
      "Multiple protection: over-voltage, short circuit, overload",
    ],
    warranty: "5 years",
    inStock: true,
  },
  {
    name: "SRNE 5kW Hybrid Inverter",
    slug: "srne-5kw",
    category: "Solar Inverters",
    categorySlug: "inverters",
    price: "KES 55,000",
    priceNumeric: 55000,
    image: "/products/inverters.jpg",
    badge: "Popular",
    description:
      "Compact 5kW hybrid inverter perfect for standard Kenyan homes. Efficient MPPT charging and clean sine wave output.",
    specs: [
      { label: "Power Output", value: "5kW" },
      { label: "Type", value: "Hybrid" },
      { label: "MPPT Trackers", value: "1" },
      { label: "Battery Voltage", value: "48V" },
      { label: "Max PV Input", value: "6.5kW" },
      { label: "Warranty", value: "5 years" },
    ],
    features: [
      "Pure sine wave output",
      "High-efficiency MPPT charging",
      "Compact wall-mount design",
      "Wi-Fi dongle for remote monitoring",
    ],
    warranty: "5 years",
    inStock: true,
  },
  {
    name: "Deye 5kW Hybrid Inverter",
    slug: "deye-5kw",
    category: "Solar Inverters",
    categorySlug: "inverters",
    price: "KES 65,000",
    priceNumeric: 65000,
    image: "/products/inverters.jpg",
    badge: null,
    description:
      "Premium 5kW hybrid inverter by Deye with built-in Wi-Fi and smartphone app for real-time monitoring and control.",
    specs: [
      { label: "Power Output", value: "5kW" },
      { label: "Type", value: "Hybrid" },
      { label: "MPPT Trackers", value: "2" },
      { label: "Battery Voltage", value: "48V" },
      { label: "Max PV Input", value: "7.5kW" },
      { label: "Warranty", value: "5 years" },
    ],
    features: [
      "Dual MPPT for flexible array design",
      "Built-in Wi-Fi with smartphone app",
      "Generator input support",
      "IP65 rated for outdoor installation",
    ],
    warranty: "5 years",
    inStock: true,
  },

  // ── Solar Lighting ──
  {
    name: "200W Solar Street Light",
    slug: "street-light-200w",
    category: "Solar Lighting",
    categorySlug: "lighting",
    price: "KES 18,000",
    priceNumeric: 18000,
    image: "/products/solar_20panels.png",
    badge: null,
    description:
      "All-in-one 200W solar street light with motion sensor. Perfect for compound lighting, driveways, and rural roads.",
    specs: [
      { label: "Power", value: "200W LED" },
      { label: "Battery", value: "LiFePO4 40Ah" },
      { label: "Panel", value: "Integrated 60W" },
      { label: "Runtime", value: "12+ hours" },
      { label: "Mounting", value: "Pole mount (pole not included)" },
      { label: "Warranty", value: "2 years" },
    ],
    features: [
      "All-in-one integrated design",
      "PIR motion sensor — dims when no movement",
      "Dusk-to-dawn automatic operation",
      "IP65 waterproof rating",
    ],
    warranty: "2 years",
    inStock: true,
  },
  {
    name: "100W Solar Flood Light",
    slug: "flood-light-100w",
    category: "Solar Lighting",
    categorySlug: "lighting",
    price: "KES 8,500",
    priceNumeric: 8500,
    image: "/products/solar_20panels.png",
    badge: "Popular",
    description:
      "Powerful 100W solar flood light with remote control. Ideal for security lighting, signage, and outdoor events.",
    specs: [
      { label: "Power", value: "100W LED" },
      { label: "Battery", value: "LiFePO4 20Ah" },
      { label: "Panel", value: "Separate 25W" },
      { label: "Runtime", value: "10+ hours" },
      { label: "Cable Length", value: "5m" },
      { label: "Warranty", value: "1 year" },
    ],
    features: [
      "Remote control with timer function",
      "Separate panel — position light and panel independently",
      "3 brightness levels",
      "IP66 waterproof",
    ],
    warranty: "1 year",
    inStock: true,
  },
  {
    name: "Solar Garden Lights (Set of 6)",
    slug: "garden-lights-6pack",
    category: "Solar Lighting",
    categorySlug: "lighting",
    price: "KES 3,500",
    priceNumeric: 3500,
    image: "/products/solar_20panels.png",
    badge: null,
    description:
      "Elegant stainless steel solar garden path lights. Auto on at dusk, off at dawn. No wiring needed.",
    specs: [
      { label: "Power", value: "0.5W LED each" },
      { label: "Battery", value: "NiMH 600mAh" },
      { label: "Runtime", value: "8+ hours" },
      { label: "Height", value: "40 cm" },
      { label: "Material", value: "Stainless steel + ABS" },
      { label: "Warranty", value: "6 months" },
    ],
    features: [
      "No wiring required — stake into ground",
      "Automatic dusk-to-dawn operation",
      "Stainless steel construction",
      "Warm white LED (3000K)",
    ],
    warranty: "6 months",
    inStock: true,
  },

  // ── Water Heaters ──
  {
    name: "300L Evacuated Tube Solar Water Heater",
    slug: "water-heater-300l",
    category: "Solar Water Heaters",
    categorySlug: "water-heaters",
    price: "KES 95,000",
    priceNumeric: 95000,
    image: "/products/water_20heater1.webp",
    badge: "Best Seller",
    description:
      "300-litre evacuated tube system perfect for families of 4–6. Delivers hot water even on cloudy days thanks to vacuum tube technology.",
    specs: [
      { label: "Capacity", value: "300 litres" },
      { label: "Tubes", value: "30 evacuated tubes" },
      { label: "Type", value: "Thermosiphon" },
      { label: "Tank Material", value: "SUS304 Stainless Steel" },
      { label: "Backup", value: "Electric element included" },
      { label: "Warranty", value: "5 years" },
    ],
    features: [
      "Evacuated tube technology — works on cloudy days",
      "Electric backup element for rainy seasons",
      "Food-grade SUS304 stainless steel tank",
      "Free installation within Nairobi",
    ],
    warranty: "5 years",
    inStock: true,
  },
  {
    name: "200L Evacuated Tube Solar Water Heater",
    slug: "water-heater-200l",
    category: "Solar Water Heaters",
    categorySlug: "water-heaters",
    price: "KES 65,000",
    priceNumeric: 65000,
    image: "/products/water_20heater1.webp",
    badge: null,
    description:
      "200-litre capacity ideal for small families or couples. Efficient evacuated tube design with electric backup.",
    specs: [
      { label: "Capacity", value: "200 litres" },
      { label: "Tubes", value: "20 evacuated tubes" },
      { label: "Type", value: "Thermosiphon" },
      { label: "Tank Material", value: "SUS304 Stainless Steel" },
      { label: "Backup", value: "Electric element included" },
      { label: "Warranty", value: "5 years" },
    ],
    features: [
      "Compact size for smaller households",
      "Evacuated tube technology",
      "Electric backup element",
      "Easy rooftop installation",
    ],
    warranty: "5 years",
    inStock: true,
  },
  {
    name: "150L Flat Plate Solar Water Heater",
    slug: "water-heater-150l-flat",
    category: "Solar Water Heaters",
    categorySlug: "water-heaters",
    price: "KES 55,000",
    priceNumeric: 55000,
    image: "/products/water_20heater1.webp",
    badge: null,
    description:
      "Flat plate collector system — sleek, durable, and long-lasting. Best for areas with consistent strong sunshine.",
    specs: [
      { label: "Capacity", value: "150 litres" },
      { label: "Collector", value: "2m² flat plate" },
      { label: "Type", value: "Pressurized" },
      { label: "Tank Material", value: "Enamel-coated steel" },
      { label: "Backup", value: "Electric element included" },
      { label: "Warranty", value: "5 years" },
    ],
    features: [
      "Flat plate collector — sleek rooftop profile",
      "Pressurized system for strong water flow",
      "Enamel-coated tank for corrosion resistance",
      "Suitable for high-sunshine regions",
    ],
    warranty: "5 years",
    inStock: true,
  },

  // ── Water Pumps ──
  {
    name: "3HP Solar Submersible Pump",
    slug: "submersible-pump-3hp",
    category: "Solar Water Pumps",
    categorySlug: "water-pumps",
    price: "KES 85,000",
    priceNumeric: 85000,
    image: "/products/water_20pumps.png",
    badge: "Popular",
    description:
      "3HP solar submersible borehole pump capable of lifting water from depths up to 120m. Ideal for farms and rural water supply.",
    specs: [
      { label: "Power", value: "3HP / 2.2kW" },
      { label: "Max Head", value: "120m" },
      { label: "Flow Rate", value: "5m³/h" },
      { label: "Inlet Diameter", value: "4 inch" },
      { label: "Solar Panels Needed", value: "8 × 550W" },
      { label: "Warranty", value: "2 years" },
    ],
    features: [
      "Stainless steel impeller and shaft",
      "Built-in MPPT controller",
      "Dry-run protection",
      "No battery needed — runs directly from panels",
    ],
    warranty: "2 years",
    inStock: true,
  },
  {
    name: "1.5HP Solar Surface Pump",
    slug: "surface-pump-1-5hp",
    category: "Solar Water Pumps",
    categorySlug: "water-pumps",
    price: "KES 45,000",
    priceNumeric: 45000,
    image: "/products/water_20pumps.png",
    badge: null,
    description:
      "Surface-mounted solar pump for irrigation, livestock watering, and tank filling. Easy to install and maintain.",
    specs: [
      { label: "Power", value: "1.5HP / 1.1kW" },
      { label: "Max Head", value: "40m" },
      { label: "Flow Rate", value: "8m³/h" },
      { label: "Inlet/Outlet", value: "2 inch" },
      { label: "Solar Panels Needed", value: "4 × 550W" },
      { label: "Warranty", value: "2 years" },
    ],
    features: [
      "Surface mount — easy installation",
      "High flow rate for irrigation",
      "Automatic restart after cloud cover",
      "Cast iron body for durability",
    ],
    warranty: "2 years",
    inStock: true,
  },
  {
    name: "0.5HP Solar Pool Pump",
    slug: "pool-pump-half-hp",
    category: "Solar Water Pumps",
    categorySlug: "water-pumps",
    price: "KES 35,000",
    priceNumeric: 35000,
    image: "/products/water_20pumps.png",
    badge: null,
    description:
      "Solar-powered pool circulation pump. Runs directly from solar panels during the day when filtration is needed most.",
    specs: [
      { label: "Power", value: "0.5HP / 370W" },
      { label: "Max Head", value: "12m" },
      { label: "Flow Rate", value: "10m³/h" },
      { label: "Inlet/Outlet", value: "2 inch" },
      { label: "Solar Panels Needed", value: "2 × 550W" },
      { label: "Warranty", value: "2 years" },
    ],
    features: [
      "Designed for pool circulation",
      "Runs directly from 2 solar panels",
      "Low noise operation",
      "Corrosion-resistant materials",
    ],
    warranty: "2 years",
    inStock: true,
  },

  // ── Accessories ──
  {
    name: "MPPT Solar Charge Controller 60A",
    slug: "mppt-controller-60a",
    category: "Solar Accessories",
    categorySlug: "accessories",
    price: "KES 15,000",
    priceNumeric: 15000,
    image: "/products/solar_20installation.png",
    badge: null,
    description:
      "60A MPPT charge controller with LCD display. Maximizes power harvest from your solar array with up to 98% tracking efficiency.",
    specs: [
      { label: "Current", value: "60A" },
      { label: "System Voltage", value: "12V/24V/48V Auto" },
      { label: "Max PV Input", value: "150V DC" },
      { label: "Efficiency", value: "98% MPPT" },
      { label: "Display", value: "LCD with data logging" },
      { label: "Warranty", value: "2 years" },
    ],
    features: [
      "98% MPPT tracking efficiency",
      "Auto voltage detection (12V/24V/48V)",
      "LCD display with real-time data",
      "RS485 communication port",
    ],
    warranty: "2 years",
    inStock: true,
  },
  {
    name: "Solar Panel Mounting Rails (per meter)",
    slug: "mounting-rails",
    category: "Solar Accessories",
    categorySlug: "accessories",
    price: "KES 1,200",
    priceNumeric: 1200,
    image: "/products/solar_20installation.png",
    badge: null,
    description:
      "Anodized aluminium mounting rails for rooftop solar panel installation. Compatible with all standard panel clamps.",
    specs: [
      { label: "Material", value: "6063 Aluminium" },
      { label: "Length", value: "1 meter" },
      { label: "Profile", value: "41 × 35 mm" },
      { label: "Load Capacity", value: "Up to 200 kg/m" },
      { label: "Finish", value: "Anodized" },
      { label: "Warranty", value: "10 years" },
    ],
    features: [
      "Anodized aluminium — rust-proof",
      "Compatible with all standard clamps",
      "Quick-install channel design",
      "Cut to any length on site",
    ],
    warranty: "10 years",
    inStock: true,
  },
  {
    name: "6mm² Solar Cable (per meter)",
    slug: "solar-cable-6mm",
    category: "Solar Accessories",
    categorySlug: "accessories",
    price: "KES 150",
    priceNumeric: 150,
    image: "/products/solar_20installation.png",
    badge: null,
    description:
      "UV-resistant 6mm² DC solar cable rated for outdoor use. Double insulated with tinned copper conductors.",
    specs: [
      { label: "Size", value: "6mm²" },
      { label: "Voltage Rating", value: "1000V DC" },
      { label: "Conductor", value: "Tinned copper" },
      { label: "Insulation", value: "Double (XLPE + LSZH)" },
      { label: "Temperature", value: "-40°C to 90°C" },
      { label: "Certification", value: "TUV certified" },
    ],
    features: [
      "UV-resistant for outdoor installation",
      "Double insulated for safety",
      "Tinned copper for corrosion resistance",
      "TUV certified",
    ],
    warranty: "N/A",
    inStock: true,
  },
  {
    name: "MC4 Connector Pairs (10 pack)",
    slug: "mc4-connectors-10pack",
    category: "Solar Accessories",
    categorySlug: "accessories",
    price: "KES 1,500",
    priceNumeric: 1500,
    image: "/products/solar_20installation.png",
    badge: null,
    description:
      "IP67-rated MC4 connectors for reliable panel-to-cable connections. Compatible with 4mm² and 6mm² solar cables.",
    specs: [
      { label: "Type", value: "MC4 male + female pairs" },
      { label: "Quantity", value: "10 pairs" },
      { label: "Current Rating", value: "30A" },
      { label: "Voltage Rating", value: "1000V DC" },
      { label: "IP Rating", value: "IP67" },
      { label: "Compatible Cable", value: "4–6 mm²" },
    ],
    features: [
      "IP67 waterproof rated",
      "Tool-free snap-lock design",
      "Silver-plated contacts",
      "Compatible with 4–6mm² cable",
    ],
    warranty: "N/A",
    inStock: true,
  },

  // ── Solar Kits ──
  {
    name: "Starter Home Kit (3kW)",
    slug: "starter-home-kit-3kw",
    category: "Full Solar Kits",
    categorySlug: "solar-kits",
    price: "KES 185,000",
    priceNumeric: 185000,
    image: "/products/Full_20Kits.jpg",
    badge: null,
    description:
      "Complete 3kW solar system for small homes. Powers lights, TV, phone charging, and a small fridge. Everything you need in one box.",
    specs: [
      { label: "System Size", value: "3kW" },
      { label: "Panels", value: "6 × 550W" },
      { label: "Inverter", value: "SRNE 5kW Hybrid" },
      { label: "Battery", value: "1 × 5kWh LiFePO4" },
      { label: "Mounting", value: "Included" },
      { label: "Cable & Connectors", value: "Included" },
    ],
    features: [
      "Everything included — panels, inverter, battery, wiring",
      "Powers basic household loads",
      "Expandable — add more panels and batteries later",
      "Free system design consultation",
    ],
    warranty: "Varies by component",
    inStock: true,
  },
  {
    name: "Family Home Kit (5kW)",
    slug: "family-home-kit-5kw",
    category: "Full Solar Kits",
    categorySlug: "solar-kits",
    price: "KES 320,000",
    priceNumeric: 320000,
    image: "/products/Full_20Kits.jpg",
    badge: "Best Value",
    description:
      "5kW system designed for a typical Kenyan family home. Powers fridge, TV, lights, washing machine, and more with battery backup.",
    specs: [
      { label: "System Size", value: "5kW" },
      { label: "Panels", value: "10 × 550W" },
      { label: "Inverter", value: "Must 8kW Hybrid" },
      { label: "Battery", value: "2 × 5kWh LiFePO4" },
      { label: "Mounting", value: "Included" },
      { label: "Cable & Connectors", value: "Included" },
    ],
    features: [
      "Powers most household appliances",
      "10kWh battery storage — full night backup",
      "Hybrid inverter — use solar + grid intelligently",
      "Professional installation available",
    ],
    warranty: "Varies by component",
    inStock: true,
  },
  {
    name: "Premium Home Kit (10kW)",
    slug: "premium-home-kit-10kw",
    category: "Full Solar Kits",
    categorySlug: "solar-kits",
    price: "KES 580,000",
    priceNumeric: 580000,
    image: "/products/Full_20Kits.jpg",
    badge: "Best Seller",
    description:
      "Full-power 10kW system for large homes or small businesses. Run AC units, water heaters, and heavy appliances with ease.",
    specs: [
      { label: "System Size", value: "10kW" },
      { label: "Panels", value: "18 × 600W" },
      { label: "Inverter", value: "Must 10kW Hybrid" },
      { label: "Battery", value: "2 × 10kWh LiFePO4" },
      { label: "Mounting", value: "Included" },
      { label: "Cable & Connectors", value: "Included" },
    ],
    features: [
      "Powers entire home including AC and water heater",
      "20kWh storage — full day backup capability",
      "10kW hybrid inverter with dual MPPT",
      "Full off-grid capable",
    ],
    warranty: "Varies by component",
    inStock: true,
  },
  {
    name: "Commercial Kit (20kW)",
    slug: "commercial-kit-20kw",
    category: "Full Solar Kits",
    categorySlug: "solar-kits",
    price: "KES 1,150,000",
    priceNumeric: 1150000,
    image: "/products/Full_20Kits.jpg",
    badge: null,
    description:
      "20kW commercial solar system for offices, shops, and small factories. Dramatically reduce your electricity bill and protect against outages.",
    specs: [
      { label: "System Size", value: "20kW" },
      { label: "Panels", value: "36 × 600W" },
      { label: "Inverter", value: "2 × Must 10kW (Parallel)" },
      { label: "Battery", value: "4 × 10kWh LiFePO4" },
      { label: "Mounting", value: "Included" },
      { label: "Cable & Connectors", value: "Included" },
    ],
    features: [
      "20kW — ideal for commercial premises",
      "40kWh battery bank for extended backup",
      "Parallel inverters for redundancy",
      "Custom design and installation included",
    ],
    warranty: "Varies by component",
    inStock: true,
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

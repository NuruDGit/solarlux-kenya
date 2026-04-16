export const SITE = {
  name: "Solarlux Kenya",
  tagline: "Powering a Sustainable Future",
  url: "https://solarluxkenya.co.ke",
  description:
    "Kenya's trusted solar energy partner for 8+ years. End-to-end solar solutions for homes, businesses, and hotels.",
} as const;

export const CONTACT = {
  phone1: "+254 794 919 224",
  phone2: "0712 960 830",
  email: "info@solarluxkenya.co.ke",
  emailAlt: "solarluxkenya@gmail.com",
  whatsapp: "+254794919224",
  address: "Duruma Thiha Plaza, 1st Floor, Shop No. 7",
  addressDetail: "Opposite Simba Coach Booking Office, Nairobi",
  city: "Nairobi, Kenya",
  hours: "Monday – Saturday, 8:00 AM – 6:00 PM",
} as const;

export const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/SolarluxKenya" },
  { label: "X", href: "https://x.com/Solarlux_KE" },
  { label: "Instagram", href: "https://www.instagram.com/solarluxkenya" },
] as const;

export const STATS = [
  { value: "8+", label: "Years of Experience" },
  { value: "500+", label: "Installations Done" },
  { value: "47", label: "Counties Served" },
  { value: "25yr", label: "Panel Warranty" },
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Solar Equipment Supply", href: "/services/supply" },
      { label: "Project Design", href: "/services/design" },
      { label: "Installation & Maintenance", href: "/services/installation" },
      { label: "Installation Guidance", href: "/services/consulting" },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Residential", href: "/solutions/residential" },
      { label: "Commercial", href: "/solutions/commercial" },
      { label: "Hospitality", href: "/solutions/hospitality" },
    ],
  },
  { label: "Products", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "supply",
    title: "Solar Equipment Supply",
    description:
      "Full product catalogue — panels, batteries, inverters, water heaters, and accessories from top-tier manufacturers.",
    href: "/services/supply",
    icon: "Package",
  },
  {
    slug: "design",
    title: "Project Design",
    description:
      "Custom solar system design tailored to your energy needs, roof structure, and budget.",
    href: "/services/design",
    icon: "PenTool",
  },
  {
    slug: "installation",
    title: "Installation & Maintenance",
    description:
      "Complete system installation by certified technicians, plus ongoing maintenance and monitoring.",
    href: "/services/installation",
    icon: "Wrench",
  },
  {
    slug: "consulting",
    title: "Installation Guidance",
    description:
      "Expert advisory support — we walk you through every step so you make confident decisions.",
    href: "/services/consulting",
    icon: "MessageCircle",
  },
] as const;

export const SOLUTIONS = [
  {
    slug: "residential",
    title: "For Homes",
    description:
      "Reliable solar power for your home. Cut electricity bills, gain energy independence, and invest in long-term savings.",
    href: "/solutions/residential",
    image: "/projects/project-11.03.21.jpg",
  },
  {
    slug: "commercial",
    title: "For Businesses",
    description:
      "Reduce operating costs and protect your business from grid outages. Solar built for commercial scale.",
    href: "/solutions/commercial",
    image: "/projects/project-11.03.34.jpg",
  },
  {
    slug: "hospitality",
    title: "For Hotels",
    description:
      "Power your hospitality operations sustainably. We've installed for hotels across Kenya's coastline and beyond.",
    href: "/solutions/hospitality",
    image: "/projects/project-11.03.37.jpg",
  },
] as const;

export const PRODUCT_CATEGORIES = [
  { name: "Solar Panels", slug: "solar-panels", icon: "Sun" },
  { name: "Batteries & Energy Storage", slug: "batteries", icon: "Battery" },
  { name: "Solar Inverters", slug: "inverters", icon: "Zap" },
  { name: "Solar Lighting", slug: "lighting", icon: "Lightbulb" },
  { name: "Solar Water Heaters", slug: "water-heaters", icon: "Droplets" },
  { name: "Solar Water Pumps", slug: "water-pumps", icon: "Wind" },
  { name: "Solar Accessories", slug: "accessories", icon: "Settings" },
  { name: "Full Solar Kits", slug: "solar-kits", icon: "Package" },
] as const;

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hello! I'd like to get a free solar quote for my property.";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  body: Section[];
}

type Section =
  | { type: "paragraph"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; text: string };

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "choose-right-solar-panel-size",
    title: "How to Choose the Right Solar Panel Size for Your Home",
    excerpt:
      "A practical guide to calculating your energy needs and selecting the perfect panel wattage for Kenyan households.",
    image:
      "https://images.pexels.com/photos/6876537/pexels-photo-6876537.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Guides",
    date: "March 12, 2026",
    readTime: "6 min read",
    body: [
      {
        type: "paragraph",
        text: "Choosing the right solar panel size is the single most important decision in any home solar project. Get it wrong in either direction — too small and your system underperforms; too large and you've spent money you didn't need to. This guide walks you through the exact process we use when sizing systems for Kenyan homes.",
      },
      {
        type: "h2",
        text: "Step 1 — Calculate your daily energy consumption",
      },
      {
        type: "paragraph",
        text: "Start with your KPLC bill. Look at the monthly units (kWh) consumed and divide by 30 to get your daily average. For most Kenyan households, this ranges from 4 kWh/day (modest home with lights and phone charging) to 25 kWh/day (larger home with AC, water pump, and kitchen appliances).",
      },
      {
        type: "list",
        items: [
          "Monthly units ÷ 30 = daily kWh consumption",
          "Add 20% buffer for system losses (inverter efficiency, wiring, temperature)",
          "That figure is your daily solar generation target",
        ],
      },
      {
        type: "h2",
        text: "Step 2 — Account for Kenya's peak sun hours",
      },
      {
        type: "paragraph",
        text: "Kenya sits close to the equator, which means we enjoy 5–6 peak sun hours per day in most regions — one of the best solar resources on the continent. Nairobi averages 5.5 hours, the Coast region 6.0 hours, and even the highlands average above 5 hours.",
      },
      {
        type: "callout",
        text: "Formula: System size (kWp) = Daily kWh target ÷ Peak sun hours. Example: 10 kWh/day ÷ 5.5 hours = 1.82 kWp — round up to a 2 kWp system.",
      },
      {
        type: "h2",
        text: "Step 3 — Match panel count to your roof space",
      },
      {
        type: "paragraph",
        text: "A standard 400W monocrystalline panel measures roughly 2m × 1m. A 2 kWp system needs 5 × 400W panels, requiring about 10m² of usable roof. Factor in shading from water tanks, chimneys, and neighbouring buildings — partial shading can drop output by 20–40% if not managed correctly.",
      },
      {
        type: "h3",
        text: "Common system sizes for Kenyan homes",
      },
      {
        type: "list",
        items: [
          "1–2 kWp: Lights, fans, phone/laptop charging, small TV",
          "3–5 kWp: Above + refrigerator, microwave, washing machine",
          "6–10 kWp: Full home including water pump and air conditioning",
          "10 kWp+: Large homes or those with significant business loads",
        ],
      },
      {
        type: "h2",
        text: "Step 4 — Don't forget battery storage",
      },
      {
        type: "paragraph",
        text: "Panel size and battery capacity are separate decisions. Your panels generate power during the day; batteries store it for the evening and night. For most Kenyan homes, a battery bank sized for 6–8 hours of average load is the sweet spot between cost and comfort.",
      },
      {
        type: "paragraph",
        text: "At Solarlux Kenya, every system design starts with a full energy audit. We visit your site, measure your loads, and produce a bill-of-materials with transparent pricing. Get in touch for a free consultation.",
      },
    ],
  },
  {
    slug: "lifepo4-vs-lead-acid-batteries",
    title: "Understanding Solar Battery Storage: LiFePO4 vs Lead Acid",
    excerpt:
      "Compare battery technologies, lifespans, and costs to find the best energy storage for your solar system.",
    image:
      "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Technology",
    date: "February 28, 2026",
    readTime: "7 min read",
    body: [
      {
        type: "paragraph",
        text: "If you've started shopping for a solar system in Kenya, you've almost certainly encountered two battery technologies: lithium iron phosphate (LiFePO4) and lead acid (flooded or AGM). Both store energy, but they behave very differently — and the right choice depends on your budget, load, and how long you want the battery to last.",
      },
      {
        type: "h2",
        text: "LiFePO4 — the modern standard",
      },
      {
        type: "paragraph",
        text: "LiFePO4 is a type of lithium-ion battery chemistry that prioritises safety and longevity over raw energy density. It's the technology inside almost every quality solar storage product on the market today, including Solarlux-recommended brands like Felicity Solar and Hinen.",
      },
      {
        type: "list",
        items: [
          "Cycle life: 3,000–6,000 full charge cycles (8–15 years typical)",
          "Depth of discharge: 80–90% usable capacity",
          "Efficiency: 95–98% round-trip",
          "Maintenance: Zero — fully sealed, no water top-up",
          "Temperature tolerance: Better performance in Kenyan heat",
          "Cost: Higher upfront, significantly lower cost-per-cycle",
        ],
      },
      {
        type: "h2",
        text: "Lead acid — the established option",
      },
      {
        type: "paragraph",
        text: "Flooded lead acid (FLA) and absorbent glass mat (AGM) batteries have been used in solar systems for decades. They're cheaper upfront, widely available, and well understood. For very small systems or constrained budgets, they remain a viable choice.",
      },
      {
        type: "list",
        items: [
          "Cycle life: 300–700 full cycles (2–5 years typical at 50% DoD)",
          "Depth of discharge: 50% usable capacity",
          "Efficiency: 70–85% round-trip",
          "Maintenance: FLA requires regular water top-up; AGM is sealed",
          "Temperature: Performance drops significantly above 35°C",
          "Cost: Lower upfront, much higher cost-per-cycle over time",
        ],
      },
      {
        type: "callout",
        text: "True cost comparison: A 200Ah LiFePO4 battery at KES 60,000 lasting 10 years costs roughly KES 16/day. A 200Ah AGM at KES 25,000 lasting 3 years costs KES 23/day — 44% more expensive per day of use.",
      },
      {
        type: "h2",
        text: "Which should you choose?",
      },
      {
        type: "paragraph",
        text: "For any new installation in 2025 and beyond, we recommend LiFePO4 for almost all residential and commercial projects. The upfront cost difference has narrowed significantly, and the total cost of ownership advantage is now compelling.",
      },
      {
        type: "paragraph",
        text: "The only scenario where lead acid still makes sense is a very small, low-budget system (under 1 kWp) where the client expects to upgrade within 2–3 years. Even then, an entry-level LiFePO4 is worth stretching to.",
      },
    ],
  },
  {
    slug: "5-signs-your-business-should-switch-to-solar",
    title: "5 Signs Your Business Should Switch to Solar Energy",
    excerpt:
      "Rising electricity bills and unreliable grid power are pushing Kenyan businesses to go solar. Here's what you need to know.",
    image:
      "https://images.pexels.com/photos/9875414/pexels-photo-9875414.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Business",
    date: "January 15, 2026",
    readTime: "5 min read",
    body: [
      {
        type: "paragraph",
        text: "Solar is now Kenya's lowest-cost source of electricity for most commercial applications. For businesses that have delayed the decision, the economics today are simply different from five years ago — better panel efficiency, lower battery costs, and faster installation timelines have all improved the case significantly.",
      },
      {
        type: "h2",
        text: "Sign 1 — Your electricity bill is a significant operating cost",
      },
      {
        type: "paragraph",
        text: "If KPLC electricity accounts for more than 5% of your monthly operating costs, solar almost certainly has a strong ROI case. Retail, manufacturing, hospitality, and healthcare businesses typically qualify. Run the numbers: how many months of electricity bills equal your solar system cost? For most commercial installations, the payback period is 2–4 years.",
      },
      {
        type: "h2",
        text: "Sign 2 — Power outages are costing you money",
      },
      {
        type: "paragraph",
        text: "Grid outages affect productivity, spoil refrigerated goods, interrupt customer service, and in the worst cases, damage sensitive equipment. A solar-plus-battery system doesn't just reduce your bill — it eliminates outage risk entirely. The economic value of uninterrupted power is often as significant as the bill savings.",
      },
      {
        type: "h2",
        text: "Sign 3 — You have a large, flat roof going unused",
      },
      {
        type: "paragraph",
        text: "Commercial and industrial roofs are ideal for solar. Large flat areas with minimal shading, proximity to the main electrical panel, and strong structural capacity make commercial rooftops among the best solar sites available. If you own your building, that roof is a solar asset waiting to be monetised.",
      },
      {
        type: "h2",
        text: "Sign 4 — Your customers or partners care about sustainability",
      },
      {
        type: "paragraph",
        text: "ESG compliance is becoming a real business requirement, not just a PR exercise. Export-oriented businesses, tourism operators, and companies selling to multinationals increasingly face sustainability requirements from their buyers. Solar is one of the most visible and credible sustainability investments available.",
      },
      {
        type: "h2",
        text: "Sign 5 — A competitor has already made the switch",
      },
      {
        type: "paragraph",
        text: "If your direct competitors have gone solar, they now have a structural cost advantage. Every month you delay, that gap widens. This is particularly visible in the hospitality, retail, and cold-chain sectors across Kenya.",
      },
      {
        type: "callout",
        text: "Solarlux Kenya has completed commercial solar installations across all 47 counties. We handle site assessment, system design, installation, and post-handover support. Contact us for a commercial solar proposal.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 2): BlogPost[] {
  const post = getBlogPost(slug);
  if (!post) return BLOG_POSTS.slice(0, limit);
  return BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, limit);
}

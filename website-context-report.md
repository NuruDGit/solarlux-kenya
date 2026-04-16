# Website Content & Context Report (v2 — Updated with Client PDF)
## Organisation: Solarlux Kenya
## URL: https://solarluxkenya.co.ke
## Date: 16 April 2026
## Prepared by: Nuru Digital FZE

---

## 1. Organisation Overview

**What they do:** Solarlux Kenya is a Kenyan-grown solar energy company providing end-to-end solar solutions — equipment supply, project design, installation guidance, and system installation and maintenance — for homes, businesses, and hotels.

**Founded:** Over 8 years in the solar energy industry (per client PDF). Twitter/X account active since May 2015, consistent with this timeline.

**Type:** Kenyan-owned solar energy company (retail, installation, maintenance)

**Location:** Duruma Thiha Plaza, 1st Floor, Shop No. 7 (Opposite Simba Coach Booking Office), Nairobi, Kenya

**Opening Hours:** Monday – Saturday, 8:00 AM – 6:00 PM

**Contact:**
- Phone: 0794 919 224 / 0712 960 830
- Email: solarluxkenya@gmail.com (client-confirmed); info@solarluxkenya.co.ke (website)
- Website: solarluxkenya.co.ke

**Tagline:** "SOLARLUX KENYA – Powering a Sustainable Future"

**Mission:** To inspire, guide, and provide memorable green energy solutions that enrich lives and foster a deeper understanding of sustainability. Customized, end-to-end solar solutions that empower customers to dream big and embrace a greener future.

**Vision:** A world where green energy transforms lives, brings people together, fosters innovation, and promotes sustainable exploration.

**Core Values:**
1. **Customer-Centric** – Customer satisfaction as top priority; every installation exceeds expectations
2. **Authenticity** – Genuine solar products and installations
3. **Integrity** – Highest standards of ethics and transparency
4. **Reliability** – Real-time affordability and efficiency
5. **Trust** – Trusted partner for all solar energy solutions

---

## 2. Products & Services

### Four Core Services (client-defined)

1. **Solar Equipment Supply** — Full product catalogue supply
2. **Project Design** — Custom solar system design
3. **Installation Guidance** — Advisory support for customers
4. **Solar System Installation & Maintenance** — Complete installation + ongoing maintenance

### Product Categories (8 categories from current site)

**1. Solar Panels**
- JA Solar 590W, JA Solar 600W
- Longi Solar 420W, Longi Weran 595W
- Sizes: 160W, 235W, 260W, 300W, 325W, 400W, 435W, 450W, 475W, 540W, 560W, 590W, 595W, 600W

**2. Batteries / Energy Storage**
- Deye 5kWh Lithium Battery
- SRNE 5kWh Lithium Battery
- Renergy 5.12kWh Lithium Battery
- Solar GEL: 12V 100Ah, 12V 150Ah, 12V 200Ah
- Lithium: 24V 5kWh, 48V 5kWh, 48V 7.2kWh, 48V 10kWh, 48V 15kWh, 48V 17.5kWh

**3. Solar Inverters**
- SRNE 3KW Solar Inverter (hybrid, pure sine wave, built-in MPPT)
- MUST 5KW Inverter (PV1800, 48V hybrid)
- MUST 7.2KW Solar Inverter
- Off-Grid and Hybrid inverters

**4. Solar Lighting** — Indoor and outdoor solar lighting

**5. Solar Water Heaters** — 150L, 200L, 250L, 300L, 350L; pressurized and non-pressurized

**6. Solar Water Pumps** — Solar-powered water pumping systems

**7. Solar Accessories** — 80A MPPT Charge Controllers, cables, connectors, mounting hardware

**8. Full Solar Kits** — Pre-configured ready-to-install packages

---

## 3. Why Choose Solarlux (Client's Own Positioning)

### Why Choose Us
1. **Competitive Prices** – Best market rates without compromising quality
2. **Expert Support** – Skilled technicians at every stage
3. **After-Sales Service** – Ongoing support and maintenance
4. **Safety First** – High-quality installations and industry best practices

### What Makes Us Unique
1. **24/7 Customer Support** – Always available
2. **Personalized Solutions** – Tailored to specific needs and budget
3. **Exclusive Partnerships** – Top suppliers, technical experts, local providers

### Promise to Customers
Comprehensive solar solutions for homes, businesses, and hotels. Experienced team provides "more than just a product — knowledge, support, and a meaningful solar experience."

---

## 4. Target Audience (Confirmed by Client)

**Primary segments (from client PDF):**
- **Homes** — Kenyan residential customers
- **Businesses** — Commercial clients
- **Hotels** — Hospitality sector (explicitly mentioned — aligns with Watamu coastal project evidence)

**Secondary:** Agricultural water pumping, off-grid communities, real estate developers.

---

## 5. Impact & Key Stats

**Confirmed by client:**
- 8+ years in the solar energy industry

**Still needed from client for site content:**
- Number of installations completed
- Kilowatts installed to date
- Counties/regions served
- Largest single installation
- Customer count
- Team size and certifications
- Notable client names (hotels, businesses)

---

## 6. Current Website Problems (unchanged from v1)

1. **Team page is a placeholder** — fake US phone numbers, no real names or bios
2. **Zero trust signals** — no testimonials, no case studies, no certifications displayed
3. **No pricing transparency** — major friction for Kenyan market
4. **Product-based navigation** instead of solution-based
5. **WooCommerce cart model** wrong for high-consideration solar purchases
6. **No WhatsApp integration** despite WhatsApp being primary contact channel
7. **Generic messaging** — interchangeable with any solar retailer
8. **Minimal educational content** — missing SEO opportunity

---

## 7. New Messaging Foundation (from client PDF)

We now have real, client-approved content to work with:

**Hero headline options:**
- "Powering a Sustainable Future for Kenya"
- "Kenya's Trusted Solar Partner for 8+ Years"
- "Extraordinary Green Energy Experiences, Engineered in Kenya"

**Subheadline options:**
- "End-to-end solar solutions for homes, businesses, and hotels — designed, installed, and maintained by experts who care about your long-term investment."
- "From design to installation to maintenance — we deliver solar systems that pay back for decades."

**Core promise (from client):**
"Solar system installation is a long-term investment, and our mission is to create extraordinary green energy experiences."

**Differentiators to lead with:**
1. 8+ years of Kenyan solar experience
2. End-to-end service (design → install → maintain)
3. 24/7 customer support
4. Personalized solutions for every budget
5. Homes, businesses, AND hotels (broader than competitors)

---

## 8. Recommended New Site Structure (Next.js)

```
/                          Homepage
/about                     About Us (mission, vision, values, team, 8yr story)
/services                  Services overview
  /services/supply         Solar Equipment Supply
  /services/design         Project Design
  /services/installation   Installation & Maintenance
  /services/consulting     Installation Guidance
/solutions                 Solutions by audience
  /solutions/residential   For Homes
  /solutions/commercial    For Businesses
  /solutions/hospitality   For Hotels
/products                  Product catalogue (filterable)
  /products/solar-panels
  /products/batteries
  /products/inverters
  /products/water-heaters
  /products/lighting
  /products/water-pumps
  /products/accessories
  /products/kits
  /products/[slug]         Individual product pages
/projects                  Project gallery / case studies
/resources                 Content hub
  /resources/blog
  /resources/blog/[slug]
  /resources/solar-guide   How solar works
  /resources/calculator    Solar calculator
  /resources/faq
/contact                   Contact page
/quote                     Get a free quote (primary conversion page)
```

---

*All other sections (competitive analysis, page-by-page content, sources) remain as per v1 of this report.*
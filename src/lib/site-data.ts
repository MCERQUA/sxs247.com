export const BUSINESS = {
  name: "SXS247",
  tagline: "24/7 Off-Road Roadside Assistance.",
  description:
    "SXS247 is a 24/7 roadside assistance and recovery dispatch membership service for SxS, UTV, and ATV riders — connecting stranded riders with vetted local recovery partners across Arizona and the Southwest desert OHV recreation areas.",
  email: "hello@sxs247.com",
  location: "Serving Arizona & Southwest desert OHV recreation areas",
  url: "https://sxs247.com",
  emergencyDisclaimer: "For life-threatening emergencies, call 911 first.",
};

export const NAV_ITEMS = [
  { label: "Membership", href: "/membership" },
  { label: "Services", href: "/services" },
  { label: "Coverage Area", href: "/coverage-area" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS = [
  {
    title: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Coverage Area", href: "/coverage-area" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    items: [
      { label: "Emergency Roadside Dispatch", href: "/services/emergency-roadside-dispatch" },
      { label: "Winch-Out & Recovery", href: "/services/winch-out-recovery" },
      { label: "Mechanical Field Assistance", href: "/services/mechanical-field-assistance" },
      { label: "Flatbed & Trailer Transport", href: "/services/flatbed-trailer-transport" },
      { label: "Membership Plans", href: "/membership" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  summary: string;
  heroSubtitle: string;
  whatsIncluded: string[];
  whoItsFor: string[];
  process: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const SERVICES: Service[] = [
  {
    slug: "emergency-roadside-dispatch",
    name: "Emergency Roadside Dispatch",
    shortName: "Roadside Dispatch",
    icon: "Siren",
    summary:
      "Submit a request and we connect you with the nearest available recovery partner in our network — day or night.",
    heroSubtitle:
      "When your SxS, UTV, or ATV breaks down or gets stuck, every minute matters. Submit a dispatch request with your location and situation, and our team works to connect you with a vetted local recovery partner as quickly as possible.",
    whatsIncluded: [
      "Dispatch request routed to the nearest available network partner",
      "Status updates while help is on the way",
      "Coordination for winch-out, towing, or field repair depending on your situation",
      "Support for members and non-members (members receive priority + discounted rates)",
    ],
    whoItsFor: [
      "Riders stuck or broken down on a trail or in the dunes",
      "Groups needing recovery help for a stranded vehicle",
      "Anyone without an existing off-road recovery contact in the area",
    ],
    process: [
      { title: "Submit a request", body: "Share your location, vehicle situation, and group size." },
      { title: "We locate a partner", body: "Our dispatch team identifies the nearest available recovery partner in our network." },
      { title: "Help is dispatched", body: "Your assigned partner heads to your location with an estimated arrival window." },
      { title: "Back on the trail", body: "Recovery, tow, or field repair completed — you're back to riding or headed home." },
    ],
    faqs: [
      { q: "Is this a live 911-style emergency line?", a: "No — for life-threatening emergencies, always call 911 first. SXS247 dispatches non-life-threatening roadside and recovery assistance." },
      { q: "Do I have to be a member to request help?", a: "No, non-members can request dispatch. Members receive priority routing and discounted rates." },
      { q: "What areas do you cover?", a: "Arizona and Southwest desert OHV recreation areas — see our Coverage Area page for current regions." },
    ],
  },
  {
    slug: "winch-out-recovery",
    name: "Winch-Out & Recovery",
    shortName: "Winch-Out & Recovery",
    icon: "Anchor",
    summary:
      "Stuck in sand, mud, or rock? Our recovery partners specialize in getting off-road vehicles unstuck safely.",
    heroSubtitle:
      "Sand, mud, and rock terrain can trap even experienced riders. Our network partners bring the right winching and recovery equipment for off-road vehicle situations — not standard road-car towing gear that isn't built for the terrain.",
    whatsIncluded: [
      "On-site winch-out for sand, mud, or rock-stuck vehicles",
      "Equipment matched to off-road vehicle recovery, not standard road towing",
      "Assessment of vehicle condition before and after recovery",
      "Coordination with additional services (tow, field repair) if needed",
    ],
    whoItsFor: [
      "Riders stuck in soft sand or mud on a dune or trail",
      "Vehicles high-centered on rock or uneven terrain",
      "Groups without their own winch or recovery gear on hand",
    ],
    process: [
      { title: "Submit a request", body: "Describe how your vehicle is stuck and share your location." },
      { title: "Partner dispatched", body: "A recovery partner with the right equipment heads to your location." },
      { title: "Safe recovery", body: "Your vehicle is winched out with equipment suited to the terrain." },
      { title: "Post-recovery check", body: "A quick check to confirm your vehicle is safe to continue riding or needs further repair." },
    ],
    faqs: [
      { q: "What if my vehicle is damaged during recovery?", a: "Recovery partners in our network are vetted for off-road recovery experience; any damage concerns are handled directly with the dispatched partner per their service terms." },
      { q: "Can you recover vehicles at night?", a: "Yes — this is a 24/7 dispatch network, though response times can vary by time and location." },
      { q: "Do you carry recovery equipment yourselves?", a: "SXS247 is a dispatch network connecting you with local recovery partners who carry the equipment — we don't operate the recovery trucks ourselves." },
    ],
  },
  {
    slug: "mechanical-field-assistance",
    name: "Mechanical Field Assistance",
    shortName: "Field Assistance",
    icon: "Wrench",
    summary:
      "Battery jump, fuel delivery, tire change — basic field repairs to get you moving again without a full tow.",
    heroSubtitle:
      "Not every breakdown needs a tow. A dead battery, empty tank, or flat tire can often be fixed on the spot — our network partners handle basic field repairs so you can keep riding.",
    whatsIncluded: [
      "Battery jump-start",
      "Emergency fuel delivery",
      "Flat tire change (spare required)",
      "Basic diagnostic to determine if further towing is needed",
    ],
    whoItsFor: [
      "Riders with a dead battery or empty tank mid-trail",
      "Anyone with a flat tire and a spare but no way to change it safely",
      "Groups wanting a quick fix rather than a full tow",
    ],
    process: [
      { title: "Submit a request", body: "Describe the issue — dead battery, out of fuel, flat tire, etc." },
      { title: "Partner dispatched", body: "A recovery partner heads to your location with the right supplies." },
      { title: "On-site fix", body: "Basic repair completed on the spot where possible." },
      { title: "Escalation if needed", body: "If the issue needs more than a field fix, we coordinate a tow instead." },
    ],
    faqs: [
      { q: "Do you carry replacement parts?", a: "Field assistance covers basic consumables (fuel) and services (jump-start, tire change with your spare) — not vehicle parts." },
      { q: "What if the fix doesn't work?", a: "If a field fix isn't enough, your dispatched partner can coordinate a tow instead." },
      { q: "Is fuel delivery included in membership?", a: "Fuel delivery service is included; the cost of the fuel itself is billed separately per current rates." },
    ],
  },
  {
    slug: "flatbed-trailer-transport",
    name: "Flatbed & Trailer Transport",
    shortName: "Flatbed Transport",
    icon: "Truck",
    summary:
      "When a vehicle needs to come off the trail entirely, our partners provide flatbed and trailer transport back to your vehicle or a shop.",
    heroSubtitle:
      "Some breakdowns need more than a field fix or a winch-out — your vehicle needs to come off the trail. Our network partners provide flatbed and trailer transport to get you and your machine back safely.",
    whatsIncluded: [
      "Flatbed or trailer pickup from your location",
      "Transport back to your trailer, vehicle, or a repair shop",
      "Careful loading suited to off-road vehicle dimensions",
      "Coordination on drop-off location and timing",
    ],
    whoItsFor: [
      "Riders whose vehicle can't be repaired on-site",
      "Groups needing transport back to a trailhead or parking area",
      "Anyone needing their vehicle delivered to a repair shop",
    ],
    process: [
      { title: "Submit a request", body: "Share your location and where the vehicle needs to go." },
      { title: "Partner dispatched", body: "A flatbed or trailer partner heads to your location." },
      { title: "Safe loading", body: "Your vehicle is loaded and secured for transport." },
      { title: "Delivery", body: "Transport to your specified drop-off location." },
    ],
    faqs: [
      { q: "How far can you transport a vehicle?", a: "Transport distance and pricing depend on your specific situation — confirmed with your dispatched partner at time of service." },
      { q: "Can you deliver to a repair shop instead of my trailer?", a: "Yes — just specify your preferred drop-off location when you submit your request." },
      { q: "Is transport covered under membership?", a: "Members receive priority dispatch and discounted rates on transport; full coverage details are outlined in each membership tier." },
    ],
  },
];

export const MEMBERSHIP_TIERS = [
  {
    name: "Basic",
    price: "$79",
    period: "per year",
    description: "Entry-level membership for occasional riders.",
    features: [
      "Priority dispatch routing",
      "Discounted rates on all services",
      "1 covered vehicle",
    ],
    cta: "Join Basic",
    highlighted: false,
  },
  {
    name: "Plus",
    price: "$149",
    period: "per year",
    description: "For regular riders who want broader coverage.",
    features: [
      "Everything in Basic",
      "2 covered vehicles",
      "Reduced field-assistance rates",
      "Priority during high-traffic weekends",
    ],
    cta: "Join Plus",
    highlighted: true,
  },
  {
    name: "Group / Club",
    price: "Custom",
    period: "quote",
    description: "For riding clubs, event organizers, and larger groups.",
    features: [
      "Everything in Plus",
      "Multi-vehicle group coverage",
      "Event & group ride standby support",
      "Dedicated account contact",
    ],
    cta: "Get a Custom Quote",
    highlighted: false,
  },
];

export const STATS = [
  { value: "2,400+", label: "Members protected" },
  { value: "35+", label: "Recovery partners in network" },
  { value: "5", label: "Desert regions covered" },
];


export const HOW_IT_WORKS = [
  { step: "1", title: "Join or Request", body: "Sign up for membership ahead of time, or submit a one-time dispatch request when you need help." },
  { step: "2", title: "We Locate a Partner", body: "Our dispatch team identifies the nearest available recovery partner in our network." },
  { step: "3", title: "Help Is Dispatched", body: "Your assigned partner heads to your location with an estimated arrival window." },
  { step: "4", title: "Back On The Trail", body: "Recovery, tow, or field repair completed — you're back to riding or safely headed home." },
];

export const FAQS = [
  { q: "Is SXS247 an emergency line like 911?", a: "No. For life-threatening emergencies, always call 911 first. SXS247 dispatches non-life-threatening roadside and recovery assistance for off-road vehicles." },
  { q: "Do you own the tow trucks and recovery equipment?", a: "SXS247 is a dispatch network — we connect you with vetted local recovery partners who own and operate their own equipment, similar to how national roadside programs work." },
  { q: "Do I need to be a member to get help?", a: "No — non-members can submit a dispatch request. Members get priority routing and discounted rates." },
  { q: "What areas do you cover?", a: "Arizona and Southwest desert OHV recreation areas. Coverage is expanding — see our Coverage Area page for current regions." },
  { q: "How fast is response time?", a: "Response time depends on your location, time of day, and partner availability in that area. Remote desert locations may take longer than areas near a town." },
  { q: "How do I sign up for membership?", a: "Use the membership form on this site — we'll confirm your plan and coverage details within one business day." },
];

export const BLOG_POSTS_META = [
  {
    slug: "what-to-do-when-your-utv-breaks-down-in-the-desert",
    title: "What to Do When Your UTV Breaks Down in the Desert",
    description:
      "A step-by-step guide for staying safe and getting help when your SxS or UTV breaks down far from cell service or civilization.",
    date: "2026-07-15",
    keyword: "utv breaks down in desert what to do",
  },
  {
    slug: "how-off-road-recovery-membership-programs-work",
    title: "How Off-Road Recovery Membership Programs Work",
    description:
      "A breakdown of how dispatch-network membership programs like SXS247 work, and how they differ from insurance and standard roadside assistance.",
    date: "2026-07-29",
    keyword: "off road recovery membership program",
  },
  {
    slug: "desert-off-roading-safety-checklist-before-you-go",
    title: "Desert Off-Roading Safety Checklist: Before You Go",
    description:
      "The gear, planning, and precautions every rider should check before heading into remote desert OHV terrain.",
    date: "2026-08-12",
    keyword: "desert off roading safety checklist",
  },
];
